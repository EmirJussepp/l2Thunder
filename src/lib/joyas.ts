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
  S: { necklace: [], earring: [], ring: [] },
  raid: { necklace: [], earring: [], ring: [] },
};
