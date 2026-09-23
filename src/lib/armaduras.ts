import type { ItemEntry } from "./items";

// El grado C no se documenta en esta sección (se sacó a pedido), así que no
// aparece acá ni en la navegación.
export type ArmorGrade = "B" | "A" | "S";
export type ArmorType = "heavy" | "light" | "robe";

// Un set: su nombre y una línea por cada bonus que da.
export type ArmorSet = ItemEntry;

export type ArmorData = Record<ArmorGrade, Record<ArmorType, ArmorSet[]>>;

export const ARMOR_GRADES: ArmorGrade[] = ["B", "A", "S"];

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
  A: {
    heavy: [
      {
        name: "Dark Crystal Breastplate",
        bonuses: [
          "P. Def. de la pieza: 171",
          "Curación recibida +10%",
          "P. Def. +6%",
          "Vel. de casteo +10%",
          "Vel. de ataque +3%",
          "Probabilidad de sufrir parálisis -20%",
          "CON +2",
          "Incluye escudo — Def. del escudo +10%",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
      {
        name: "Tallum Plate Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 278",
          "Vel. de ataque +8%",
          "Max MP +550",
          "Probabilidad de sufrir Veneno/Sangrado -10%",
          "DEX +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
      {
        name: "Armor of Nightmare",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 293",
          "P. Atk. +6%",
          "Probabilidad de sufrir Sueño/Inmovilización -12%",
          "CON +2",
          "Incluye escudo — devuelve 6% del daño físico cuerpo a cuerpo recibido al atacante",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
      {
        name: "Majestic Plate Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 293",
          "P. Atk. +8%",
          "Max HP +600",
          "Precisión +3",
          "Probabilidad de sufrir aturdimiento -10%",
          "STR +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
    ],
    light: [
      {
        name: "Dark Crystal Leather Armor",
        bonuses: [
          "P. Def. de la pieza: 128",
          "P. Atk. +4%",
          "Vel. de ataque +4%",
          "Vel. de casteo +15%",
          "Poder de curación +10%",
          "Probabilidad de sufrir parálisis -20%",
          "STR +1",
          "WIT +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
      {
        name: "Tallum Leather Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 209",
          "Regeneración de MP +8%",
          "Max MP +550",
          "Probabilidad de sufrir Veneno/Sangrado -10%",
          "Daño crítico +10%",
          "MEN +1",
          "DEX +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
      {
        name: "Nightmarish Leather Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 220",
          "M. Def. +8%",
          "Absorbe 4% del daño cuerpo a cuerpo recibido como HP",
          "Velocidad +7",
          "Probabilidad de sufrir Sueño/Inmovilización -12%",
          "DEX +1",
          "STR +1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
      {
        name: "Majestic Leather Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 220",
          "P. Atk. +8% con arco equipado",
          "Precisión +3",
          "Probabilidad de sufrir aturdimiento -10%",
          "DEX +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
    ],
    robe: [
      {
        name: "Tallum Tunic",
        bonuses: [
          "Aumento de MP: 409",
          "P. Def. de la pieza: 86",
          "Vel. de casteo +15%",
          "M. Def. +8%",
          "Probabilidad de sufrir Veneno/Sangrado -15%",
          "Resistencia a arcos +10%",
          "WIT +1",
          "CON +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
      {
        name: "Dark Crystal Robe",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "Aumento de MP: 665",
          "P. Def. de la pieza: 139",
          "P. Def. +8%",
          "Vel. de casteo +15%",
          "Resistencia a cancelación mágica (leve)",
          "Probabilidad de sufrir parálisis -10%",
          "WIT +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
      {
        name: "Nightmare Robe",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "Aumento de MP: 718",
          "P. Def. de la pieza: 147",
          "Regeneración de MP +5%",
          "M. Atk. +8%",
          "Probabilidad de sufrir Sueño/Inmovilización -15%",
          "Leve baja en la probabilidad de que te corten el casteo",
          "WIT +3",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
      {
        name: "Majestic Robe",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "Aumento de MP: 718",
          "P. Def. de la pieza: 147",
          "Max MP +550",
          "Vel. de casteo +15%",
          "Regeneración de MP +8%",
          "Velocidad +7",
          "Probabilidad de sufrir aturdimiento -10%",
          "MEN +2",
          "CON +1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
    ],
  },
  S: {
    heavy: [
      {
        name: "Imperial Crusader Breastplate",
        bonuses: [
          "P. Def. de la pieza: 205",
          "P. Def. +8%",
          "Max HP +845",
          "Velocidad +5",
          "Probabilidad de sufrir Sueño/Inmovilización -15%",
          "STR +1",
          "CON +2",
          "Incluye escudo — P. Atk. +3%, probabilidad de sufrir Veneno/Sangrado -20%",
          "Con 6 o más de encantamiento en todo el set: sube P. Atk., P. Def. y regeneración de MP.",
        ],
      },
    ],
    light: [
      {
        name: "Draconic Leather Armor",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "P. Def. de la pieza: 249",
          "P. Atk./Vel. de ataque +5%",
          "Vel. de casteo +15%",
          "Daño crítico +8%",
          "Max MP +845",
          "Velocidad +5",
          "STR +1",
          "DEX +2",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de ataque y evasión.",
        ],
      },
    ],
    robe: [
      {
        name: "Major Arcana Robe",
        bonuses: [
          "Pieza única: ocupa upper y lower body",
          "Aumento de MP: 866",
          "P. Def. de la pieza: 166",
          "M. Atk. +8%",
          "Vel. de casteo +15%",
          "Regeneración de MP +5%",
          "Resistencia a cancelación -50%",
          "Probabilidad de sufrir aturdimiento -10%",
          "WIT +2",
          "INT +1",
          "Con 6 o más de encantamiento en todo el set: sube P. Def., Vel. de casteo y resistencia a dagas.",
        ],
      },
    ],
  },
};
