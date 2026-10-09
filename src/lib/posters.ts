// Afiches de la home (public/promo/). Cada uno va entre dos secciones de la
// página (ver src/app/page.tsx) y repite en `alt` el texto que trae la imagen,
// que es lo que leen los lectores de pantalla y los buscadores: si se cambia un
// afiche, hay que actualizar también su alt. Están recortados a 3:2.
export type Poster = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const POSTERS = {
  interlude: {
    src: "/promo/un-interlude-pensado-para-hoy.jpg",
    width: 706,
    height: 471,
    alt: "Un Interlude pensado para hoy: sistemas clásicos con una experiencia renovada. XP/SP x15, drop x10, enchant sin destrucción y NPC buffer de 2da profesión (BD / WS / PP).",
  },
  clases: {
    src: "/promo/tu-clase-nuevas-posibilidades.jpg",
    width: 760,
    height: 507,
    alt: "Tu clase, nuevas posibilidades: clases y habilidades rediseñadas para un combate más dinámico y equilibrado. Warriors, más daño y utilidad; Healers, soporte único por clase; Daggers, invisibilidad total; Archers, mayor daño y kiteo; Mages, DPS directo y defensivos; Summoners, daño propio y control.",
  },
  pvp: {
    src: "/promo/volve-a-sentir-el-pvp.jpg",
    width: 706,
    height: 471,
    alt: "Volvé a sentir el PvP: nuevas estrategias, combates reales y zonas de conflicto. Zonas de conflicto, eventos competitivos, raids y minibosses, recompensas exclusivas.",
  },
  beta: {
    src: "/promo/la-beta-ya-esta-abierta.jpg",
    width: 753,
    height: 502,
    alt: "La beta ya está abierta. La esencia permanece, todo evoluciona: clases rediseñadas, PvP más dinámico, raids y eventos, progresión pensada para vos.",
  },
} satisfies Record<string, Poster>;

export type PosterId = keyof typeof POSTERS;
