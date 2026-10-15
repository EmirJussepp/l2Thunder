import type { Band } from "@/components/guias/LevelBands";

// Los tres cortes de experiencia por diferencia de nivel. Los usan la guía completa
// (/por-que-l2thunder/limites-de-nivel) y el resumen del detalle de Características
// (/por-que-l2thunder):
// si el servidor cambia un número, se cambia acá y las dos páginas quedan iguales.
export const LEVEL_BANDS: Band[] = [
  { label: "Raid Curse", cut: 9, note: "sin maldición hasta 8 de diferencia" },
  { label: "Mobs", cut: 11, note: "cobrás hasta 10 de diferencia" },
  { label: "Party", cut: 21, note: "cobrás hasta 20 de diferencia" },
];

export const LEVEL_BANDS_CAPTION =
  "En dorado, la franja donde todavía cobrás. El corte es seco: en el último nivel de la franja cobrás el 100 % y en el siguiente, nada.";
