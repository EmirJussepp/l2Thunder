import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";
import { getHopzoneTotal } from "@/lib/hopzone";

// La página /votar llama acá al abrirse: anota cuántos votos tiene HopZone en ese momento. Es el respaldo
// del reclamo para quien entra a HopZone con una IP distinta de la que ve esta web (ver VoteTicket).
export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(`vote-start:${ip}`, 4, 10 * 60_000) || isRateLimited("vote-start:global", 60, 60_000)) {
    return NextResponse.json({ error: "Demasiados intentos — esperá unos minutos." }, { status: 429 });
  }

  const hz = await getHopzoneTotal();
  if (!hz.ok) {
    console.error(`vote-start: no se pudo consultar HopZone (${hz.error})`);
    // Sin ticket el reclamo sigue funcionando por IP: no es un error para el jugador.
    return NextResponse.json({ ticketId: null });
  }

  const ticket = await prisma.voteTicket.create({ data: { ip, startTotal: hz.total } });

  // Limpieza: los tickets valen una hora, no hace falta guardarlos más de un par de días.
  await prisma.voteTicket
    .deleteMany({ where: { createdAt: { lt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) } } })
    .catch(() => undefined);

  return NextResponse.json({ ticketId: ticket.id });
}
