// Los rates que anuncia la web. Se cambian acá y en la web se actualizan solos (descripción del
// sitio, cifras y tabla de "¿Por qué L2Thunder?").
// Anuncio de lanzamiento: XP ×15 y SP ×15, decidido a propósito por el equipo. Ojo: el 14/10/2026
// config/Rates.ini del servidor tenía RateXp=12 y RateSp=10; para que lo anunciado coincida con lo
// que se juega, el servidor tiene que estar en 15.
export const RATES = {
  xp: 15,
  sp: 15,
  drop: 10,
  spoil: 10,
  // Las recompensas de quest llevan el mismo multiplicador en XP y en SP.
  quest: 15,
} as const;
