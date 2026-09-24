import type { ItemEntry } from "./items";

export type JewelCategory = "S" | "raid";
export type JewelType = "necklace" | "earring" | "ring";

export type JewelData = Record<JewelCategory, Record<JewelType, ItemEntry[]>>;

export const JEWEL_CATEGORIES: { id: JewelCategory; label: string; emptyText: string }[] = [
  {
    id: "S",
    label: "Grado S",
    emptyText:
      "Las joyas de grado S se están cargando. Pronto vas a ver acá el nombre de cada una y los bonus que dan.",
  },
  {
    id: "raid",
    label: "Raid Boss",
    emptyText:
      "Las joyas de Raid Boss se están cargando. Pronto vas a ver acá el nombre de cada una y los bonus que dan.",
  },
];

export const JEWEL_TYPES: { id: JewelType; label: string }[] = [
  { id: "necklace", label: "Collares" },
  { id: "earring", label: "Aros" },
  { id: "ring", label: "Anillos" },
];

// Vacío a propósito: la joyería de grado S y de Raid Boss está reworkeada en
// L2Thunder, así que no se carga de memoria del juego original. Se completa con
// la lista real (nombre + una línea por bonus, ver ItemEntry); un tipo sin
// joyas muestra "sin joyas cargadas" y una categoría entera vacía muestra el
// aviso de que se está cargando. Las imágenes van en public/joyas/.
export const jewelry: JewelData = {
  S: {
    necklace: [
      {
        name: "Tateossian Necklace",
        bonuses: [
          "M. Def. de la joya: 95",
          "Con el set completo: MP +82, Resistencia mental +4%, Vel. de casteo +2%, Vel. de ataque +2%",
        ],
      },
    ],
    earring: [],
    ring: [],
  },
  raid: {
    necklace: [
      {
        name: "Necklace of Valakas",
        bonuses: [
          "Grado S",
          "M. Def. de la joya: 95",
          "HP +445",
          "MP +82",
          "P. Atk. +4%",
          "M. Atk. +8%",
          "Prob. de crítico mágico +2",
          "Re-uso de skills -6%",
          "Resistencia a sleep +5%",
        ],
      },
      {
        name: "Frintezza's Necklace",
        bonuses: [
          "Grado A",
          "M. Def. de la joya: 95",
          "HP +685",
          "MP +82",
          "Re-uso de skills -12%",
          "Refleja 4% del daño físico",
          "Prob. de crítico mágico +4",
          "Resistencia a veneno +15%",
          "Resistencia a sangrado +15%",
          "Resistencia a shock +10%",
          "Resistencia a sleep +15%",
        ],
      },
    ],
    earring: [
      {
        name: "Earring of Antharas",
        bonuses: [
          "Grado S",
          "M. Def. de la joya: 71",
          "MP +61",
          "Heal +6%",
          "Consumo de MP -8%",
          "Vampiric Rage +4%",
          "Resistencia a sangrado +15%",
          "Resistencia a shock +10%",
          "Resistencia mental +10%",
          "Con dos aros iguales puestos, solo cuenta el efecto de uno",
        ],
      },
      {
        name: "Zaken's Earring",
        bonuses: [
          "Grado S",
          "M. Def. de la joya: 71",
          "MP +61",
          "Heal +8%",
          "Vampiric Rage +4%",
          "Resistencia a sangrado +15%",
          "Resistencia a shock +8%",
          "Resistencia mental +20%",
          "Con dos aros iguales puestos, solo cuenta el efecto de uno",
        ],
      },
      {
        name: "Earring of Orfen",
        bonuses: [
          "Grado A",
          "M. Def. de la joya: 71",
          "MP +61",
          "P. Def. +51",
          "Heal +8%",
          "Consumo de MP -9%",
          "Resistencia a sangrado +5%",
          "Resistencia mental +5%",
          "Con dos aros iguales puestos, solo cuenta el efecto de uno",
        ],
      },
    ],
    ring: [
      {
        name: "Ring of Baium",
        bonuses: [
          "Grado S",
          "M. Def. de la joya: 48",
          "MP +41",
          "Precisión +2",
          "Daño crítico +10%",
          "Vel. de ataque +4%",
          "Vel. de casteo +4%",
          "Resistencia a veneno +10%",
          "Resistencia a hold +20%",
          "Con dos anillos iguales puestos, solo cuenta el efecto de uno",
        ],
      },
      {
        name: "Ring of Queen Ant",
        bonuses: [
          "Grado A",
          "M. Def. de la joya: 48",
          "MP +41",
          "Precisión +2",
          "Daño crítico +15%",
          "Resistencia a veneno +10%",
          "Resistencia a hold +10%",
          "Con dos anillos iguales puestos, solo cuenta el efecto de uno",
        ],
      },
      {
        name: "Ring of Core",
        bonuses: [
          "Grado A",
          "M. Def. de la joya: 48",
          "MP +41",
          "Precisión +2",
          "Prob. de crítico +15",
          "Poder de skills físicas +5%",
          "Prob. de sleep +10%",
          "Resistencia a veneno +10%",
          "Con dos anillos iguales puestos, solo cuenta el efecto de uno",
        ],
      },
    ],
  },
};
