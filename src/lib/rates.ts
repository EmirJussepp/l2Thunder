// Los rates que anuncia la web. Salen de config/Rates.ini del servidor (RateXp, RateSp,
// RateQuestRewardXP/SP, DeathDropChanceMultiplier y SpoilDropChanceMultiplier): si el equipo del
// juego los cambia, se actualizan acá y en la web se cambian solos (descripción del sitio, cifras
// y tabla de "¿Por qué L2Thunder?").
// Valores al 14/10/2026, los del lanzamiento: XP ×12, SP ×10.
export const RATES = {
  xp: 12,
  sp: 10,
  drop: 10,
  spoil: 10,
  // Las recompensas de quest llevan el mismo multiplicador en XP y en SP.
  quest: 10,
} as const;
