// Rate limit simple en memoria, por instancia serverless. No es distribuido (cada
// instancia fría de Vercel arranca con su propio mapa vacío), pero para este sitio
// alcanza como primera barrera contra spam/bots sin sumar infraestructura nueva
// (Redis, etc.) para un endpoint que no mueve plata real por sí solo.
const buckets = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}

export function getClientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
