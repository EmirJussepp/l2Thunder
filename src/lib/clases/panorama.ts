// "Elegir clase": una línea por clase de tercera, agrupadas por raza, las 31 del Interlude.
// Las que ya tienen guía (están en ./index.ts) se enlazan; el resto muestra "Guía próximamente".
// Rol, arma, fuerte y floja: el panorama del equipo llegó para 19 clases. En las otras 12 (las
// de Orco, Enano y Elfo Oscuro) el arma, lo fuerte y lo flojo salen
// tal cual de la ficha de su guía, y el rol es una etiqueta corta sacada de la primera frase
// de esa guía. Si el equipo quiere otra etiqueta, se cambia acá.
export type PanoramaClass = {
  name: string;
  role?: string;
  weapon?: string;
  strong?: string;
  weak?: string;
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
        name: "Ghost Hunter",
        role: "Daguero",
        weapon: "Daga",
        strong: "Daño por la espalda · golpe mortal · remate",
        weak: "Aguante · daño en área",
      },
      {
        name: "Ghost Sentinel",
        role: "Arquero oscuro",
        weapon: "Arco",
        strong: "Daño a distancia · postura de francotirador",
        weak: "Pelea de cerca · aguante",
      },
      {
        name: "Shillien Saint",
        role: "Sanador de veneno",
        weapon: "Maza",
        strong: "Veneno · curación sostenida · maná de la party",
        weak: "Daño directo · defensa propia",
      },
      {
        name: "Shillien Templar",
        role: "Tanque de control",
        weapon: "Espada o mazo y escudo",
        strong: "Defensa · parálisis · cúbicos · castigo en área",
        weak: "Daño sostenido · apoyo a la party",
      },
      {
        name: "Spectral Dancer",
        role: "Bailarín",
        weapon: "Dos dagas",
        strong: "Buffs únicos de party · control en área",
        weak: "Daño propio · defensa",
      },
      {
        name: "Spectral Master",
        role: "Invocador oscuro",
        weapon: "Vara",
        strong: "Invocaciones ofensivas · cúbicos · farmeo solo",
        weak: "Daño propio · aguante",
      },
      {
        name: "Storm Screamer",
        role: "Mago de viento",
        weapon: "Vara",
        strong: "Cadencia de casteo · daño sostenido · área",
        weak: "Aguante · pelea de cerca",
      },
    ],
  },
  {
    race: "Enano",
    classes: [
      {
        name: "Fortune Seeker",
        role: "Cazador de botín",
        weapon: "Mazo o espada",
        strong: "Botín exclusivo · economía · daño decente",
        weak: "Apoyo a la party · defensa mágica",
      },
      {
        name: "Maestro",
        role: "Artesano",
        weapon: "Mazo",
        strong: "Fabricación · máquinas de guerra · economía",
        weak: "Daño propio · movilidad",
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
  {
    race: "Orco",
    classes: [
      {
        name: "Dominator",
        role: "Debuffer",
        weapon: "Maza",
        strong: "Debuffs en área · buffs de clan · asedios",
        weak: "Daño directo · juego en solitario",
      },
      {
        name: "Doomcryer",
        role: "Buffer",
        weapon: "Maza",
        strong: "Buffs de party y clan · CP · invulnerabilidad de grupo",
        weak: "Daño · curación de HP grande",
      },
      {
        name: "Grand Khavatari",
        role: "Monje",
        weapon: "Puños",
        strong: "Daño a quemarropa · ignora escudos · invulnerabilidad",
        weak: "Alcance · apoyo a la party",
      },
      {
        name: "Titan",
        role: "Guerrero",
        weapon: "Arma a dos manos",
        strong: "Daño bruto · furia al borde de la muerte",
        weak: "Defensa · control · aguante si la pelea se estira",
      },
    ],
  },
];
