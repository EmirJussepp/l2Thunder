import type { ItemEntry } from "./items";

export type SaTab = "c" | "b" | "a";
export type SaGrip = "one" | "two";

export type SaData = Record<SaTab, Record<SaGrip, ItemEntry[]>>;

export const SA_TABS: { id: SaTab; label: string; emptyText: string }[] = [
  { id: "c", label: "Grado C", emptyText: "Sin ejemplos cargados." },
  { id: "b", label: "Grado B", emptyText: "Sin ejemplos cargados." },
  { id: "a", label: "Grado A", emptyText: "Sin ejemplos cargados." },
];

export const SA_GRIPS: { id: SaGrip; label: string }[] = [
  { id: "one", label: "Una mano" },
  { id: "two", label: "Dos manos" },
];

// Ejemplos de armas con sus tres opciones de SA, uno por tipo de arma y por tramo de costo. Los valores salen
// del servidor (multisell del herrero y skills de cada variante) y se contrastaron con el tooltip del cliente.
// No es el catálogo entero: cada arma base trae las tres opciones en su propio tooltip. El nombre va en inglés,
// que es como lo muestra el cliente por defecto; el nombre en español, entre paréntesis en la primera línea.
// Las imágenes van en public/sa/ con el nombre del arma en minúsculas y con guiones (stormbringer.png).
const PVP = "Aumenta el daño infligido en PvP (+5% contra jugadores) en las tres opciones";

export const saWeapons: SaData = {
  c: {
    one: [
      {
        name: "Stormbringer",
        tag: "Haste · Focus · Health",
        bonuses: [
          "Espada de una mano (en el cliente en español: Portatormentas)",
          "Cristal rojo → Haste: Atk. Spd. +12%",
          "Cristal verde → Focus: Crit. Rate +90",
          "Cristal azul → Health: Max HP +25%",
          "Pide un cristal de etapa 5, 97 Gemstone C y 291.000 de adena",
        ],
      },
      {
        name: "Dark Screamer",
        tag: "Bluff · Focus · Critical Damage",
        bonuses: [
          "Daga (en el cliente en español: Chillador Oscuro)",
          "Cristal rojo → Bluff: chance de girar al objetivo con un golpe crítico",
          "Cristal verde → Focus: Crit. Rate +90",
          "Cristal azul → Critical Damage: Crit. Damage +425",
          "Pide un cristal de etapa 7, 306 Gemstone C y 918.000 de adena",
        ],
      },
    ],
    two: [
      {
        name: "Crystal Staff",
        tag: "Acumen · Mana Up · Empower",
        bonuses: [
          "Bastón de dos manos (en el cliente en español: Bastón de Cristal)",
          "Cristal rojo → Acumen: Casting Spd. +15%",
          "Cristal verde → Mana Up: Max MP +30%, MP Regen +15%",
          "Cristal azul → Empower: M. Atk. +32%",
          "Pide un cristal de etapa 5, 97 Gemstone C y 291.000 de adena",
        ],
      },
    ],
  },
  b: {
    one: [
      {
        name: "Kris",
        tag: "Critical Damage · Focus · Back Blow",
        bonuses: [
          "Daga",
          "Cristal rojo → Critical Damage: Crit. Damage +425",
          "Cristal verde → Focus: Crit. Rate +90",
          "Cristal azul → Back Blow: Crit. Rate +40% por la espalda",
          "Pide un cristal de etapa 9, 222 Gemstone B y 2.220.000 de adena",
        ],
      },
      {
        name: "Sword of Damascus",
        tag: "Focus · Critical Damage · Haste",
        bonuses: [
          "Espada de una mano (en el cliente en español: Espada de Damasco)",
          "Cristal rojo → Focus: Crit. Rate +90",
          "Cristal verde → Critical Damage: Crit. Damage +425",
          "Cristal azul → Haste: Atk. Spd. +12%",
          "Pide un cristal de etapa 10, 339 Gemstone B y 3.390.000 de adena",
        ],
      },
    ],
    two: [
      {
        name: "Bow of Peril",
        tag: "Skill Power · Haste · Focus",
        bonuses: [
          "Arco (en el cliente en español: Arco del Peligro)",
          "Cristal rojo → Skill Power: daño de habilidades físicas +15%",
          "Cristal verde → Haste: Atk. Spd. +12%",
          "Cristal azul → Focus: Crit. Rate +90",
          "Pide un cristal de etapa 10, 339 Gemstone B y 3.390.000 de adena",
        ],
      },
    ],
  },
  a: {
    one: [
      {
        name: "Tallum Blade",
        tag: "Rsk. Focus · Haste · Focus",
        bonuses: [
          "Espada de una mano (en el cliente en español: Hoja de Tallum)",
          "Cristal rojo → Rsk. Focus: Crit. Rate +130 con menos del 60% de HP",
          "Cristal verde → Haste: Atk. Spd. +12%",
          "Cristal azul → Focus: Crit. Rate +90",
          "Pide un cristal de etapa 11 y Gemstone A: 147 para el rojo y el azul, 157 para el verde. No cobra adena",
          PVP,
        ],
      },
      {
        name: "Dark Legion's Edge",
        tag: "Critical Damage · Health · Rsk. Focus",
        bonuses: [
          "Espada de una mano (en el cliente en español: Filo de la Legión Oscura)",
          "Cristal rojo → Critical Damage: Crit. Damage +425",
          "Cristal verde → Health: Max HP +25%",
          "Cristal azul → Rsk. Focus: Crit. Rate +130 con menos del 60% de HP",
          "Pide un cristal de etapa 12 y Gemstone A: 157 para el rojo y el azul, 140 para el verde. No cobra adena",
          PVP,
        ],
      },
    ],
    two: [
      {
        name: "Dasparion's Staff",
        tag: "Mana Up · Magic Critical · Acumen",
        bonuses: [
          "Bastón de dos manos (en el cliente en español: Bastón de Dasparion)",
          "Cristal rojo → Mana Up: Max MP +30%, MP Regen +15%",
          "Cristal verde → Magic Critical: M. Crit. Rate +300%",
          "Cristal azul → Acumen: Casting Spd. +15%",
          "Pide un cristal de etapa 11, 147 Gemstone A y nada de adena",
          PVP,
        ],
      },
    ],
  },
};
