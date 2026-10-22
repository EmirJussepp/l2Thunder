// Consulta a la API de HopZone: ¿esta IP votó por L2Thunder? Devuelve {"voted": true|false, "voteTime": ...,
// "hopzoneServerTime": "AAAA-MM-DD HH:MM:SS"} (la hora de HopZone es UTC). El token vive solo en el entorno
// del servidor (HOPZONE_TOKEN) y nunca viaja al navegador.
export const HOPZONE_VOTE_URL = "https://l2.hopzone.net/site/vote/107612/1";

// HopZone deja votar a una IP cada 12 horas; el amuleto se entrega una vez por voto.
export const VOTE_COOLDOWN_MS = 12 * 60 * 60 * 1000;

export type HopzoneResult =
  | { ok: true; voted: boolean; votedAt: Date | null }
  | { ok: false; error: string };

const FETCH_TIMEOUT_MS = 8_000;

// "2026-10-23 00:05:49" (UTC), o un número en segundos/milisegundos → milisegundos desde 1970.
function parseHopzoneTime(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value > 1e12 ? value : value * 1000;
  }
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (/^\d{9,13}$/.test(text)) {
    const n = Number(text);
    return n > 1e12 ? n : n * 1000;
  }
  const m = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/.exec(text);
  if (!m) return null;
  return Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4]), Number(m[5]), Number(m[6]));
}

export async function checkHopzoneVote(ip: string): Promise<HopzoneResult> {
  const token = process.env.HOPZONE_TOKEN;
  if (!token) return { ok: false, error: "HOPZONE_TOKEN no está configurado" };

  const url = new URL("https://api.hopzone.net/lineage2/vote");
  url.searchParams.set("token", token);
  url.searchParams.set("ip_address", ip);

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS), cache: "no-store" });
    if (!res.ok) return { ok: false, error: `HopZone respondió ${res.status}` };

    const data: unknown = await res.json();
    if (!data || typeof data !== "object") return { ok: false, error: "respuesta inválida de HopZone" };
    const body = data as Record<string, unknown>;

    // {"status":"error","error":"Invalid token"} y similares: no es un "no votó", es un fallo nuestro.
    if (typeof body.voted !== "boolean") {
      const detail = typeof body.error === "string" ? body.error : "sin campo voted";
      return { ok: false, error: `HopZone: ${detail}` };
    }
    if (!body.voted) return { ok: true, voted: false, votedAt: null };

    // Cuándo votó. Si HopZone da la hora del voto y la suya propia, la diferencia es independiente de
    // la zona horaria; la anclamos a nuestro reloj. Si no la da, queda en null y se usa solo el plazo
    // de 12 horas entre reclamos.
    const votedMs = parseHopzoneTime(body.voteTime);
    const serverMs = parseHopzoneTime(body.hopzoneServerTime);
    let votedAt: Date | null = null;
    if (votedMs !== null && serverMs !== null) {
      const agoMs = serverMs - votedMs;
      if (agoMs >= -60_000 && agoMs <= VOTE_COOLDOWN_MS + 60 * 60 * 1000) {
        votedAt = new Date(Date.now() - Math.max(agoMs, 0));
      }
    }
    return { ok: true, voted: true, votedAt };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
