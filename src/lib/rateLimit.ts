// Rate limit simple en memoria. Con un solo proceso en el VPS alcanza como primera barrera contra
// spam/bots sin sumar infraestructura nueva (Redis, etc.). Si algún día corre más de una instancia,
// cada una cuenta por su lado y el límite real se multiplica.
const buckets = new Map<string, { count: number; resetAt: number }>();

// Cada tanto hay que tirar las ventanas vencidas: sin eso, quien pegue desde muchas IPs hace crecer
// el mapa para siempre.
const SWEEP_ABOVE = 1000;

export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();

  if (buckets.size > SWEEP_ABOVE) {
    for (const [k, b] of buckets) {
      if (now > b.resetAt) buckets.delete(k);
    }
  }

  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}

// La IP la pone Caddy (pisa cualquier X-Forwarded-For que mande el cliente), así que el primer
// valor es de fiar. Si la web alguna vez se publica sin proxy adelante, hay que revisar esto.
export function getClientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
