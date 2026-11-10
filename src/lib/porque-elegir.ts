import { RATES, VIP_RATES } from "@/lib/rates";

// Las razones del carrusel "Por qué elegir L2Thunder" de la portada. Cada una sale de algo que el servidor hace de
// verdad (rates en src/lib/rates.ts; el resto está contado en /por-que-l2thunder y en las guías): si cambia el
// servidor, se cambia acá.
//
// La imagen de cada rombo es opcional: si existe public/porque/<id>.webp (o .png/.jpg) se usa; si no, el rombo
// muestra un emblema dibujado en código. Para poner arte propio alcanza con soltar el archivo con el id como nombre
// (ritmo, clases, equipo, enchant, comodidad, contenido, apertura, fundadores), cuadrado y con el motivo al centro,
// y volver a publicar.
export type MotivoId =
  | "ritmo"
  | "clases"
  | "equipo"
  | "enchant"
  | "comodidad"
  | "contenido"
  | "apertura"
  | "fundadores";

export type Motivo = {
  id: MotivoId;
  // Lo que se lee bajo el rombo.
  titulo: string;
  // El título grande del panel.
  encabezado: string;
  texto: string;
  // Tres datos cortos que se ven de un vistazo.
  datos: [string, string, string];
  href: string;
  cta: string;
};

export type MotivoVista = Motivo & { imagen?: string };

export const MOTIVOS: Motivo[] = [
  {
    id: "ritmo",
    titulo: "El ritmo",
    encabezado: "Subís rápido y jugás de verdad",
    texto:
      "Llegás al contenido en lugar de esperarlo meses. En party ganás un 20% más de experiencia, con grupos de hasta 9 integrantes.",
    datos: [
      `EXP y SP ×${RATES.xp}`,
      `Drop ×${RATES.drop} · Spoil ×${RATES.spoil}`,
      `Con VIP: EXP y SP ×${VIP_RATES.xp}`,
    ],
    href: "/por-que-l2thunder",
    cta: "Ver todos los rates",
  },
  {
    id: "clases",
    titulo: "Las clases",
    encabezado: "Revisadas una por una",
    texto:
      "Reworkeamos clases y skills cuidando la intensidad del juego: habilidades que no servían ahora sirven, las descripciones traen los números reales y los buffers ya no necesitan mochila.",
    datos: ["31 clases de tercera", "Más de mil skills reescritas", "Buffers sin mochila"],
    href: "/guias/clases",
    cta: "Ver las clases",
  },
  {
    id: "equipo",
    titulo: "El equipo",
    encabezado: "Cada pieza, repensada",
    texto:
      "Special Abilities reworkeados para ser competitivos, bonus nuevos en los sets C, B, A y S, el set Apella como nuevo techo del grado A, sigils para los magos y la joyería boss y S rehecha.",
    datos: ["SA competitivos", "Set Apella, top de A", "Sigils para los magos"],
    href: "/informacion-de-juego",
    cta: "Ver información de juego",
  },
  {
    id: "enchant",
    titulo: "El enchant",
    encabezado: "Tu arma no se rompe",
    texto:
      "Si el enchant falla, el ítem se queda: con pergamino normal vuelve a +0 y con bendito baja un solo nivel. Encantar deja de ser una ruleta rusa y pasa a ser una decisión.",
    datos: ["100% seguro hasta +3", "El ítem nunca se destruye", "Tope en +10"],
    href: "/por-que-l2thunder",
    cta: "Ver cómo funciona",
  },
  {
    id: "comodidad",
    titulo: "La comodidad",
    encabezado: "Menos molestias, más juego",
    texto:
      "Regenerás HP, MP y CP al 450%, la comida te recupera sentado y las pociones se usan con cabeza. Inventario más grande, drops a la vista con shift + clic sobre el monstruo y un sweeper que recoge en área.",
    datos: ["Regeneración al 450%", "Inventario de 100 slots", "Sweeper en área"],
    href: "/por-que-l2thunder",
    cta: "Ver toda la comodidad",
  },
  {
    id: "contenido",
    titulo: "El contenido",
    encabezado: "Jefes que se pueden pelear",
    texto:
      "Sailren y Benom pasaron a instancia: entrás con tu grupo y la pelea es tuya. Además hay invasores que aparecen por el mundo y eventos todos los días.",
    datos: ["Sailren y Benom en instancia", "Invasores cada dos horas", "Team vs Team y Capture the Flag"],
    href: "/guias",
    cta: "Ver las guías",
  },
  {
    id: "apertura",
    titulo: "La apertura",
    encabezado: "Por etapas, no de golpe",
    texto:
      "El tope de nivel, el equipo de grado S y los raids épicos entran por etapas, para que la economía y la carrera por el primer nivel máximo no se resuelvan en una semana. Nada de esto es un error.",
    datos: ["Tope de nivel", "Equipo de grado S", "Raids épicos"],
    href: "/apertura-escalonada",
    cta: "Ver todo el detalle",
  },
  {
    id: "fundadores",
    titulo: "Boost, no poder",
    encabezado: "Apoyás el server, no comprás ventaja",
    texto:
      "El VIP acelera tu progreso y la Caja de Skins te da apariencia. Nunca vendemos daño ni ítems que te hagan invencible en PvP.",
    datos: ["VIP de 15 días", "Caja de Skins", "Sin ventaja en PvP"],
    href: "/donar",
    cta: "Ver beneficios de Fundador",
  },
];
