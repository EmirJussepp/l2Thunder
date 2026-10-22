import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";
import { checkHopzoneVote, getHopzoneTotal, VOTE_COOLDOWN_MS } from "@/lib/hopzone";

const CHARACTER_NAME_RE = /^[a-zA-Z0-9_]{3,40}$/;

// Un voto nuevo tiene que ser más reciente que el del reclamo anterior por al menos esto: la hora que
// informa HopZone se ancla a nuestro reloj y puede bailar unos segundos entre una consulta y otra.
const NEW_VOTE_MARGIN_MS = 5 * 60 * 1000;

const ACTIVE = ["PENDING", "PROCESSING", "DELIVERED"] as const;

// Un ticket (ver VoteTicket en el schema) sirve durante una hora desde que se abrió /votar.
const TICKET_TTL_MS = 60 * 60 * 1000;
const TICKET_ID_RE = /^[a-z0-9]{20,40}$/;

// POST: el jugador dice "ya voté". Se verifica el voto en HopZone con la IP desde la que entra y, si es
// un voto que todavía no se reclamó, queda un reclamo PENDING que el bridge entrega por correo in-game.
export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (ip === "unknown") {
    return NextResponse.json({ error: "No pudimos identificar tu conexión." }, { status: 400 });
  }
  if (isRateLimited(`vote-claim:${ip}`, 6, 60_000)) {
    return NextResponse.json({ error: "Demasiados intentos — esperá un minuto." }, { status: 429 });
  }

  let body: { characterName?: unknown; ticketId?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }
  const characterName = typeof body.characterName === "string" ? body.characterName.trim() : "";
  if (!CHARACTER_NAME_RE.test(characterName)) {
    return NextResponse.json(
      { error: "Nombre de personaje inválido (3-40 caracteres, sin espacios ni símbolos)" },
      { status: 400 },
    );
  }

  const hz = await checkHopzoneVote(ip);
  if (!hz.ok) {
    console.error(`vote-claim: no se pudo consultar HopZone (${hz.error})`);
    return NextResponse.json(
      { error: "No pudimos consultar HopZone ahora. Probá de nuevo en unos minutos." },
      { status: 502 },
    );
  }

  // Si HopZone no reconoce la IP, se prueba el respaldo por conteo (hay conexiones que entran a HopZone con una
  // IP distinta de la que ve esta web): hace falta el ticket que anotó /votar al abrirse.
  let ticket: { id: string; startTotal: number; createdAt: Date; total: number } | null = null;
  if (!hz.voted) {
    const ticketId = typeof body.ticketId === "string" && TICKET_ID_RE.test(body.ticketId) ? body.ticketId : null;
    const found = ticketId ? await prisma.voteTicket.findUnique({ where: { id: ticketId } }) : null;
    if (!found || found.usedAt || Date.now() - found.createdAt.getTime() > TICKET_TTL_MS) {
      return NextResponse.json({ status: "not_voted" });
    }
    const hzTotal = await getHopzoneTotal();
    if (!hzTotal.ok) {
      console.error(`vote-claim: no se pudo consultar el total de HopZone (${hzTotal.error})`);
      return NextResponse.json(
        { error: "No pudimos consultar HopZone ahora. Probá de nuevo en unos minutos." },
        { status: 502 },
      );
    }
    ticket = { id: found.id, startTotal: found.startTotal, createdAt: found.createdAt, total: hzTotal.total };
  }

  // La verificación del plazo y el alta del reclamo van juntas y bajo un candado por IP: dos pedidos
  // simultáneos con el mismo voto no pueden crear dos reclamos.
  const result = await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${ip}))`;

    if (ticket) {
      // El respaldo cobra "votos sueltos": los que HopZone sumó desde que se abrió la página y todavía no los
      // cobró nadie. Cada reclamo (de cualquier tipo) consume uno, así que nunca se entregan más amuletos que
      // votos reales. Un candado global ordena las cuentas entre reclamos simultáneos.
      await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext('vote-pool'))`;
      const fresh = await tx.voteTicket.findUnique({ where: { id: ticket.id } });
      if (!fresh || fresh.usedAt) return { status: "not_voted" as const };
      const consumed = await tx.voteClaim.count({
        where: { status: { in: [...ACTIVE] }, createdAt: { gte: ticket.createdAt } },
      });
      if (ticket.total - ticket.startTotal <= consumed) return { status: "not_voted" as const };
    }

    const now = Date.now();
    const previous = await tx.voteClaim.findFirst({
      where: { ip, status: { in: [...ACTIVE] } },
      orderBy: { createdAt: "desc" },
    });
    if (previous) {
      const isNewVote =
        hz.votedAt && previous.votedAt
          ? hz.votedAt.getTime() > previous.votedAt.getTime() + NEW_VOTE_MARGIN_MS
          : now - previous.createdAt.getTime() >= VOTE_COOLDOWN_MS;
      if (!isNewVote) return { status: "already_claimed" as const };
    }

    const sameCharacter = await tx.voteClaim.findFirst({
      where: {
        characterName: { equals: characterName, mode: "insensitive" },
        status: { in: [...ACTIVE] },
        createdAt: { gte: new Date(now - VOTE_COOLDOWN_MS) },
      },
    });
    if (sameCharacter) return { status: "character_recent" as const };

    const claim = await tx.voteClaim.create({
      data: { characterName, ip, votedAt: hz.votedAt, status: "PENDING" },
    });
    if (ticket) await tx.voteTicket.update({ where: { id: ticket.id }, data: { usedAt: new Date() } });
    return { status: "created" as const, claimId: claim.id };
  });

  if (result.status === "not_voted") {
    return NextResponse.json({ status: "not_voted" });
  }

  if (result.status === "already_claimed") {
    return NextResponse.json({ status: "already_claimed" });
  }
  if (result.status === "character_recent") {
    return NextResponse.json({ status: "character_recent" });
  }
  return NextResponse.json({ status: "created", claimId: result.claimId });
}

// GET ?id=...: cómo va un reclamo (la página lo consulta cada pocos segundos hasta que se entrega o falla).
// El id es un cuid imposible de adivinar y no revela nada más que el estado.
export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(`vote-status:${ip}`, 40, 60_000)) {
    return NextResponse.json({ error: "Demasiados intentos — esperá un minuto." }, { status: 429 });
  }

  const id = req.nextUrl.searchParams.get("id") ?? "";
  if (!/^[a-z0-9]{20,40}$/.test(id)) {
    return NextResponse.json({ error: "Id inválido" }, { status: 400 });
  }

  const claim = await prisma.voteClaim.findUnique({ where: { id } });
  if (!claim) return NextResponse.json({ error: "No existe" }, { status: 404 });

  // El motivo técnico del bridge no se muestra: se traduce a algo que el jugador pueda entender.
  const reason =
    claim.status !== "FAILED"
      ? null
      : claim.bridgeError === "character_not_found"
        ? "character_not_found"
        : claim.bridgeError === "recent_claim"
          ? "recent_claim"
          : "error";

  return NextResponse.json({ status: claim.status, reason });
}
