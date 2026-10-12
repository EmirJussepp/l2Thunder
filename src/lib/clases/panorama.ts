// "Elegir clase": una línea por clase de tercera, agrupadas por raza. Las que ya tienen guía
// (están en ./index.ts) se enlazan; el resto muestra "Guía próximamente". Faltan razas por
// cargar (el panorama que llegó trae 19 de las 31 clases de tercera).
export type PanoramaClass = {
  name: string;
  role: string;
  weapon: string;
  strong: string;
  weak: string;
};

export type PanoramaGroup = { race: string; classes: PanoramaClass[] };

export const PANORAMA_INTRO =
  "Treinta y una clases de tercera. Acá está el panorama para decidir; cada una tiene su propia guía con el árbol completo, habilidad por habilidad, con lo que cambia respecto del Interlude original.";

export const PANORAMA: PanoramaGroup[] = [
  {
    race: "Elfo",
    classes: [
      {
        name: "Elemental Master",
        role: "Invocador",
        weapon: "Vara",
        strong: "Invocaciones · apoyo indirecto · farmeo solo",
        weak: "Daño propio · aguante",
      },
      {
        name: "Eva's Saint",
        role: "Sanador",
        weapon: "Maza",
        strong: "Curación · limpieza · resistencias",
        weak: "Daño · juego en solitario",
      },
      {
        name: "Eva's Templar",
        role: "Tanque de apoyo",
        weapon: "Espada o mazo y escudo",
        strong: "Defensa · apoyo a la party · bloqueo con escudo",
        weak: "Daño · juego en solitario",
      },
      {
        name: "Moonlight Sentinel",
        role: "Arquero",
        weapon: "Arco",
        strong: "Evasión · daño a distancia · autonomía",
        weak: "Daño máximo · aguante",
      },
      {
        name: "Mystic Muse",
        role: "Maga de agua",
        weapon: "Vara",
        strong: "Daño mágico con control · frenos · área",
        weak: "Aguante · pelea de cerca",
      },
      {
        name: "Swordmuse",
        role: "Bardo",
        weapon: "Espada o mazo a dos manos",
        strong: "Buffs únicos de party · daño decente · versatilidad",
        weak: "Daño máximo · defensa",
      },
      {
        name: "Wind Rider",
        role: "Daguero",
        weapon: "Daga",
        strong: "Evasión · golpe por la espalda · movilidad",
        weak: "Aguante · daño en área",
      },
    ],
  },
  {
    race: "Elfo Oscuro",
    classes: [
      {
        name: "Shillien Saint",
        role: "Sanador de veneno",
        weapon: "Maza",
        strong: "Veneno · curación sostenida · maná de la party",
        weak: "Daño directo · defensa propia",
      },
    ],
  },
  {
    race: "Humano",
    classes: [
      {
        name: "Adventurer",
        role: "Daguero",
        weapon: "Daga",
        strong: "Daño por la espalda · invisibilidad · trucos de control",
        weak: "Pelea de frente · aguante",
      },
      {
        name: "Arcana Lord",
        role: "Invocador",
        weapon: "Vara",
        strong: "Invocaciones · farmeo solo · control de servidores enemigos",
        weak: "Daño propio · aguante",
      },
      {
        name: "Archmage",
        role: "Mago de fuego",
        weapon: "Vara",
        strong: "Daño mágico · área · desgaste de maná",
        weak: "Aguante · pelea de cerca",
      },
      {
        name: "Cardinal",
        role: "Sanador",
        weapon: "Maza",
        strong: "Curación · resurrección · protección",
        weak: "Daño · juego en solitario",
      },
      {
        name: "Dreadnought",
        role: "Lancero",
        weapon: "Lanza",
        strong: "Daño en área · farmeo masivo · control de grupo",
        weak: "Objetivo único · defensa mágica",
      },
      {
        name: "Duelist",
        role: "Espadas dobles",
        weapon: "Espadas dobles",
        strong: "Duelo uno contra uno · daño sostenido · aguante",
        weak: "Alcance · movilidad",
      },
      {
        name: "Hell Knight",
        role: "Tanque oscuro",
        weapon: "Espada o mazo y escudo",
        strong: "Aguante · robo de vida · provocación",
        weak: "Daño puro · alcance",
      },
      {
        name: "Hierophant",
        role: "Buffer",
        weapon: "Maza",
        strong: "Buffs · aguante para un místico · inmunidad a debuffs",
        weak: "Daño · curación grande",
      },
      {
        name: "Phoenix Knight",
        role: "Tanque sagrado",
        weapon: "Espada o mazo y escudo",
        strong: "Defensa · protección de la party · curas de apoyo",
        weak: "Daño · velocidad",
      },
      {
        name: "Sagittarius",
        role: "Arquero",
        weapon: "Arco",
        strong: "Daño a distancia · crítico · evasión",
        weak: "Aguante · pelea cuerpo a cuerpo",
      },
      {
        name: "Soultaker",
        role: "Nigromante",
        weapon: "Vara",
        strong: "Maldiciones · control · daño oscuro",
        weak: "Aguante · daño directo rápido",
      },
    ],
  },
];
