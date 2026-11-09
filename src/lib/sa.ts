import type { ItemEntry } from "./items";
import { saGradoA } from "./saGradoA";

export type SaTab = "c" | "b" | "a" | "s";
export type SaGrip = "one" | "two";

export type SaData = Record<SaTab, Record<SaGrip, ItemEntry[]>>;

export const SA_TABS: { id: SaTab; label: string; emptyText: string }[] = [
  { id: "c", label: "Grado C", emptyText: "Sin ejemplos cargados." },
  { id: "b", label: "Grado B", emptyText: "Sin ejemplos cargados." },
  { id: "a", label: "Grado A", emptyText: "Sin ejemplos cargados." },
  { id: "s", label: "Grado S", emptyText: "Sin ejemplos cargados." },
];

export const SA_GRIPS: { id: SaGrip; label: string }[] = [
  { id: "one", label: "Una mano" },
  { id: "two", label: "Dos manos" },
];

// Armas con sus tres opciones de SA. Grado A y grado S van completos (34 y 10 armas); B y C son ejemplos, uno por
// tipo de arma y por tramo de costo. Los valores salen del servidor (multisell del herrero y skills de cada variante)
// y se contrastaron con el tooltip del cliente. El nombre va en inglés, que es como lo muestra el cliente por
// defecto; el nombre en español, entre paréntesis en la primera línea. Las imágenes van en public/sa/ con el
// nombre del arma en minúsculas y con guiones (stormbringer.png). El grado A está en saGradoA.ts.
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
  a: saGradoA,
  s: {
    one: [
      {
        name: "Forgotten Blade",
        tag: "Haste · Health · Focus",
        bonuses: [
          "Espada de una mano",
          "Cristal rojo → Haste: Atk. Spd. +12%",
          "Cristal verde → Health: Max HP +25%",
          "Cristal azul → Focus: Crit. Rate +90",
          PVP,
        ],
      },
      {
        name: "Angel Slayer",
        tag: "Critical Damage · Bluff · Haste",
        bonuses: [
          "Daga",
          "Cristal rojo → Critical Damage: Crit. Damage +425",
          "Cristal verde → Bluff: chance de girar al objetivo con un golpe crítico",
          "Cristal azul → Haste: Atk. Spd. +12%",
          PVP,
        ],
      },
      {
        name: "Basalt Battlehammer",
        tag: "Focus · Health · Servitor Sharing",
        bonuses: [
          "Arma contundente de una mano",
          "Cristal rojo → Focus: Crit. Rate +90",
          "Cristal verde → Health: Max HP +25%",
          "Cristal azul → Servitor Sharing: P. Atk. +25%, M. Atk. +12%; tu servitor recibe lo mismo",
          PVP,
        ],
      },
      {
        name: "Arcana Mace",
        tag: "Acumen · Magic Critical · Mana Up",
        bonuses: [
          "Maza de una mano",
          "Cristal rojo → Acumen: Casting Spd. +15%",
          "Cristal verde → Magic Critical: M. Crit. Rate +300%",
          "Cristal azul → Mana Up: Max MP +30%, MP Regen +15%",
          PVP,
        ],
      },
    ],
    two: [
      {
        name: "Heaven's Divider",
        tag: "Haste · Health · Focus",
        bonuses: [
          "Espada de dos manos",
          "Cristal rojo → Haste: Atk. Spd. +12%",
          "Cristal verde → Health: Max HP +25%",
          "Cristal azul → Focus: Crit. Rate +90",
          PVP,
        ],
      },
      {
        name: "Imperial Staff",
        tag: "Empower · Acumen · Servitor Sharing",
        bonuses: [
          "Bastón de dos manos",
          "Cristal rojo → Empower: M. Atk. +32%",
          "Cristal verde → Acumen: Casting Spd. +15%",
          "Cristal azul → Servitor Sharing: P. Atk. +25%, M. Atk. +12%; tu servitor recibe lo mismo",
          PVP,
        ],
      },
      {
        name: "Dragon Hunter Axe",
        tag: "Anger · Health · Haste",
        bonuses: [
          "Hacha de dos manos",
          "Cristal rojo → Anger: P. Atk. +15%, Max HP −15%",
          "Cristal verde → Health: Max HP +25%",
          "Cristal azul → Haste: Atk. Spd. +12%",
          PVP,
        ],
      },
      {
        name: "Saint Spear",
        tag: "Health · Skill Power · Haste",
        bonuses: [
          "Lanza",
          "Cristal rojo → Health: Max HP +25%",
          "Cristal verde → Skill Power: daño de habilidades físicas +15%",
          "Cristal azul → Haste: Atk. Spd. +12%",
          PVP,
        ],
      },
      {
        name: "Draconic Bow",
        tag: "Skill Power · Focus · Critical Slow",
        bonuses: [
          "Arco",
          "Cristal rojo → Skill Power: daño de habilidades físicas +15%",
          "Cristal verde → Focus: Crit. Rate +90",
          "Cristal azul → Critical Slow: Speed −30% al objetivo con un golpe crítico",
          PVP,
        ],
      },
      {
        name: "Demon Splinter",
        tag: "Focus · Health · Critical Stun",
        bonuses: [
          "Puños duales",
          "Cristal rojo → Focus: Crit. Rate +90",
          "Cristal verde → Health: Max HP +25%",
          "Cristal azul → Critical Stun: chance de aturdir 3 segundos con un golpe crítico",
          PVP,
        ],
      },
    ],
  },
};
