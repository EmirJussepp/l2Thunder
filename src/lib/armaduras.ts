export type ArmorGrade = "C" | "B" | "A" | "S";
export type ArmorType = "heavy" | "light" | "robe";

// Un set: su nombre y una línea por cada bonus que da. Ejemplo:
//   { name: "Nombre del set", bonuses: ["P. Def. +5%", "Vel. de ataque +3%"] }
export type ArmorSet = { name: string; bonuses: string[] };

export type ArmorData = Record<ArmorGrade, Record<ArmorType, ArmorSet[]>>;

export const ARMOR_GRADES: ArmorGrade[] = ["C", "B", "A", "S"];

export const ARMOR_TYPES: { id: ArmorType; label: string }[] = [
  { id: "heavy", label: "Heavy" },
  { id: "light", label: "Light" },
  { id: "robe", label: "Robe" },
];

// Vacío a propósito: los bonus de set de C, B, A y S están reworkeados en
// L2Thunder, así que no se cargan de memoria del juego original. Se completa
// con la lista real; un tipo sin sets muestra "sin sets cargados" y un grado
// entero vacío muestra el aviso de que se está cargando.
export const armorSets: ArmorData = {
  C: { heavy: [], light: [], robe: [] },
  B: { heavy: [], light: [], robe: [] },
  A: { heavy: [], light: [], robe: [] },
  S: { heavy: [], light: [], robe: [] },
};
