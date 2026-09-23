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
  B: {
    heavy: [
      {
        name: "Zubei's Breastplate",
        bonuses: [
          "P. Def. de la pieza: 157",
          "P. Atk. +6.26%",
          "Max HP +594",
          "STR +1",
          "CON -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
      {
        name: "Blue Wolf Breastplate",
        bonuses: [
          "P. Def. de la pieza: 166",
          "Velocidad +7",
          "Regeneración de HP +5.26%",
          "STR +1",
          "CON -1",
          "DEX -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
      {
        name: "Avadon Breastplate",
        bonuses: [
          "P. Def. de la pieza: 157",
          "Max HP +694",
          "P. Def. +6.26%",
          "CON +1",
          "DEX -1",
          "Incluye escudo — Def. del escudo +24%",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
      {
        name: "Doom Plate Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 270",
          "Max HP +620",
          "Breath +200",
          "STR -2",
          "CON +3",
          "Incluye escudo — Def. del escudo +24%",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
    ],
    light: [
      {
        name: "Zubei's Leather Shirt",
        bonuses: [
          "P. Def. de la pieza: 117",
          "Evasión +5",
          "Max HP +394",
          "DEX +1",
          "STR -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
      {
        name: "Avadon Leather Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 191",
          "M. Def. +5.25%",
          "P. Atk. +5%",
          "Capacidad de carga +5795",
          "STR +1",
          "CON -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
      {
        name: "Blue Wolf Leather Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 202",
          "P. Def. +5.26%",
          "Vel. de casteo +15%",
          "MEN +3",
          "INT -2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
      {
        name: "Leather Armor of Doom",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 202",
          "Breath +200",
          "P. Atk. +4.7%",
          "Regeneración de MP +2.5%",
          "DEX +3",
          "CON -2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
    ],
    robe: [
      {
        name: "Tunic of Zubei",
        bonuses: [
          "Aumento de MP: 345",
          "P. Def. de la pieza: 78",
          "M. Atk. +5.25%",
          "Regeneración de MP -5%",
          "Vel. de casteo +10%",
          "WIT +1",
          "CON -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
      {
        name: "Blue Wolf Tunic",
        bonuses: [
          "Aumento de MP: 377",
          "P. Def. de la pieza: 83",
          "Max MP +206",
          "Regeneración de MP +5.24%",
          "Resistencia a cancelación +30%",
          "WIT +3",
          "MEN -1",
          "INT -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
      {
        name: "Tunic of Doom",
        bonuses: [
          "Aumento de MP: 377",
          "P. Def. de la pieza: 83",
          "Velocidad +7",
          "Breath +200",
          "Regeneración de MP +5.26%",
          "Vel. de casteo +15%",
          "CON +2",
          "MEN -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
      {
        name: "Avadon Robe",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "Aumento de MP: 561",
          "P. Def. de la pieza: 127",
          "P. Def. +6.26%",
          "Vel. de casteo +15%",
          "INT +1",
          "MEN -1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
    ],
  },
  A: { heavy: [], light: [], robe: [] },
  S: { heavy: [], light: [], robe: [] },
};
