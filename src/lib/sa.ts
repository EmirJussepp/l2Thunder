import type { ItemEntry } from "./items";

export type SaWeaponType = "blunt";
export type SaGrip = "one" | "two";

export type SaData = Record<SaWeaponType, Record<SaGrip, ItemEntry[]>>;

export const SA_WEAPON_TYPES: { id: SaWeaponType; label: string; emptyText: string }[] = [
  {
    id: "blunt",
    label: "Contundentes",
    emptyText:
      "Las armas contundentes se están cargando. Pronto vas a ver acá cada arma con su SA.",
  },
];

export const SA_GRIPS: { id: SaGrip; label: string }[] = [
  { id: "one", label: "Una mano" },
  { id: "two", label: "Dos manos" },
];

// Armas con SA reworkeado. El tipo y la mano salen del tooltip del cliente
// ("Blunt / One Handed"); cada tipo de arma nuevo es una pestaña más: se suma
// acá y en SA_WEAPON_TYPES. tag es el nombre del SA, que se ve aun con el arma
// cerrada. Las imágenes van en public/sa/ con el nombre del arma en minúsculas
// y con guiones (imperial-staff.png).
export const saWeapons: SaData = {
  blunt: {
    one: [
      {
        name: "Basalt Battlehammer",
        tag: "Anger",
        bonuses: [
          "Grado S",
          "P. Atk. 293 · M. Atk. 132 · Vel. de ataque: Rápida",
          "Consume 1 Soulshot y 1 Spiritshot",
          "SA Anger: P. Atk. +20%, Max HP −15%",
          "Aumenta el daño infligido en PvP (+5% contra jugadores)",
        ],
      },
    ],
    two: [
      {
        name: "Imperial Staff",
        tag: "Servitor Sharing",
        bonuses: [
          "Grado S",
          "P. Atk. 286 · M. Atk. 183 · Vel. de ataque: Normal",
          "Consume 1 Soulshot y 1 Spiritshot",
          "SA Servitor Sharing: P. Atk. +25%, M. Atk. +12%",
          "Tu servitor también recibe el 25% de tu P. Atk. y el 12% de tu M. Atk.",
          "Aumenta el daño infligido en PvP (+5% contra jugadores)",
        ],
      },
    ],
  },
};
