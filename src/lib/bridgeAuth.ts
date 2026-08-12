import { timingSafeEqual } from "crypto";
import type { NextRequest } from "next/server";

// Autentica pedidos entrantes del bridge del gameserver (que ahora hace polling
// hacia acá, no al revés). Mismo secreto que GAMESERVER_BRIDGE_SECRET.
export function isAuthorizedBridgeRequest(req: NextRequest): boolean {
  const secret = process.env.GAMESERVER_BRIDGE_SECRET;
  if (!secret) return false;

  const provided = req.headers.get("x-bridge-secret") ?? "";
  const a = Buffer.from(provided);
  const b = Buffer.from(secret);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
