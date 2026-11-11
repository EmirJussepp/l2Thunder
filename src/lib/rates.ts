// Los rates que anuncia la web (los de un jugador sin VIP). Se cambian acá y en la web se actualizan solos (descripción del
// sitio, cifras y tabla de "¿Por qué L2Thunder?").
// Anuncio de lanzamiento: XP ×15 y SP ×15, decidido a propósito por el equipo. Ojo: el 14/10/2026
// config/Rates.ini del servidor tenía RateXp=12 y RateSp=10; para que lo anunciado coincida con lo
// que se juega, el servidor tiene que estar en 15.
export const RATES = {
  xp: 15,
  sp: 15,
  drop: 10,
  spoil: 8,
  // Las recompensas de quest llevan el mismo multiplicador en XP y en SP.
  quest: 15,
} as const;

// Los rates con el VIP Thunder activo. En el servidor el VIP se configura como un multiplicador sobre la tasa
// base (config/Custom/PremiumSystem.ini): XP y SP 1,3333 (15 → 20), chance de drop 1,3 (10 → 13), chance de
// spoil 1,25 (8 → 10), y la cantidad de drop y de spoil 1,5 (la del adena también). Si se cambia uno, cambian los dos lados.
export const VIP_RATES = {
  xp: 20,
  sp: 20,
  drop: 13,
  spoil: 10,
  // Cantidad: un 50% más de ítems en drop y en spoil.
  cantidad: "50%",
} as const;
