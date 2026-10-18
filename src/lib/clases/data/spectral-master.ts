// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const spectralMaster: ClassGuide = {
  "slug": "spectral-master",
  "name": "Spectral Master",
  "subtitle": "Elfo Oscuro · tercera clase de la rama del mago",
  "intro": "El invocador oscuro. Su servidor es el más agresivo de los tres invocadores: con Assassin Servitor lo convierte en una máquina de crítico. Suma cúbicos y los ataques de oscuridad de la rama.",
  "facts": [
    {
      "label": "Camino",
      "value": "DarkMystic → DarkWizard → PhantomSummoner → Spectral Master"
    },
    {
      "label": "Armadura",
      "value": "Túnica o ligera"
    },
    {
      "label": "Arma",
      "value": "Vara"
    },
    {
      "label": "Habilidades",
      "value": "74 en total: 51 activas y 23 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Invocaciones ofensivas · cúbicos · farmeo solo"
    },
    {
      "label": "Floja en",
      "value": "Daño propio · aguante"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Spectral Master, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "darkmystic",
      "name": "DarkMystic",
      "from": 1,
      "to": 19,
      "blurb": "La base que comparten todos los místicos elfos oscuros, incluido el Spellhowler. Acá están el ataque mágico básico, las primeras curas, los primeros buffs y las pasivas de túnica.",
      "skills": [
        {
          "name": "Magician's Movement",
          "kind": "passive",
          "learn": 1,
          "icon": "magicians-movement",
          "desc": "Más velocidad de ataque con túnica puesta."
        },
        {
          "name": "Spellcraft",
          "kind": "passive",
          "learn": 1,
          "icon": "spellcraft",
          "desc": "Duplica la velocidad de casteo con túnica puesta."
        },
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "icon": "lucky",
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Mana Recovery",
          "kind": "passive",
          "learn": 1,
          "icon": "mana-recovery",
          "desc": "Más regeneración de MP con túnica puesta."
        },
        {
          "name": "Wind Strike",
          "kind": "active",
          "learn": 1,
          "max": 14,
          "icon": "wind-strike",
          "desc": "El ataque mágico básico de la rama."
        },
        {
          "name": "Self Heal",
          "kind": "active",
          "learn": 1,
          "icon": "self-heal",
          "desc": "La cura de arranque, sobre uno mismo."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "icon": "common-craft",
          "desc": "Permite leer recetas comunes."
        },
        {
          "name": "Create Common Item",
          "kind": "passive",
          "learn": 5,
          "max": 70,
          "icon": "create-common-item",
          "desc": "Fabrica ítems comunes hasta nivel 9."
        },
        {
          "name": "Anti Magic",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "icon": "anti-magic",
          "desc": "+108 de M.Def."
        },
        {
          "name": "Armor Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 14,
          "icon": "armor-mastery-89aa31",
          "desc": "+9,2 de P.Def."
        },
        {
          "name": "Weapon Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "icon": "weapon-mastery",
          "desc": "+79,4 y +45% de P.Atk., +99,3 y +17% de M.Atk. Con arco o pole, -30% de velocidad de casteo y -9 de precisión."
        },
        {
          "name": "Heal",
          "kind": "active",
          "learn": 7,
          "max": 14,
          "icon": "heal",
          "desc": "Cura directa de 301. Barata y sin tiempo de espera."
        },
        {
          "name": "Cure Poison",
          "kind": "active",
          "learn": 7,
          "custom": true,
          "icon": "cure-poison",
          "desc": "Saca el veneno. Cubre todos los venenos que puede tirar un jugador."
        },
        {
          "name": "Shield",
          "kind": "active",
          "learn": 7,
          "icon": "shield",
          "desc": "+15% de P.Def."
        },
        {
          "name": "Might",
          "kind": "active",
          "learn": 7,
          "icon": "might",
          "desc": "+15% de P.Atk."
        },
        {
          "name": "Ice Bolt",
          "kind": "active",
          "learn": 7,
          "max": 20,
          "icon": "ice-bolt",
          "desc": "Golpe de hielo que además frena al objetivo."
        },
        {
          "name": "Battle Heal",
          "kind": "active",
          "learn": 14,
          "icon": "battle-heal",
          "desc": "Misma potencia que Heal pero de casteo rápido: es la de emergencia."
        },
        {
          "name": "Group Heal",
          "kind": "active",
          "learn": 14,
          "icon": "group-heal",
          "desc": "Cura 241 a cada miembro de la party de una sola vez."
        },
        {
          "name": "Vampiric Touch",
          "kind": "active",
          "learn": 14,
          "max": 25,
          "icon": "vampiric-touch",
          "desc": "Absorbe vida: te cura el 40% del daño que hace."
        },
        {
          "name": "Wind Shackle",
          "kind": "active",
          "learn": 14,
          "max": 74,
          "custom": true,
          "icon": "wind-shackle",
          "desc": "Cadenas de viento: -15% de velocidad de ataque por 15 segundos."
        },
        {
          "name": "Expertise",
          "kind": "passive",
          "learn": 20,
          "max": 76,
          "icon": "expertise",
          "desc": "Te deja usar equipo de grados cada vez más altos sin penalización, hasta el grado S."
        },
        {
          "name": "Divine Inspiration",
          "kind": "passive",
          "learn": 52,
          "max": 76,
          "icon": "divine-inspiration",
          "desc": "Sube la cantidad de buffs que podés tener encima."
        }
      ]
    },
    {
      "id": "darkwizard",
      "name": "DarkWizard",
      "from": 20,
      "to": 39,
      "blurb": "El camino del mago oscuro: viento y oscuridad, los primeros servidores y las maldiciones.",
      "skills": [
        {
          "name": "Quick Recovery",
          "kind": "passive",
          "learn": 20,
          "max": 48,
          "icon": "quick-recovery",
          "desc": "-30% al tiempo de espera de los skills mágicos."
        },
        {
          "name": "Boost Mana",
          "kind": "passive",
          "learn": 20,
          "max": 72,
          "custom": true,
          "icon": "boost-mana",
          "desc": "+800 de MP máximo."
        },
        {
          "name": "Robe Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "robe-mastery",
          "desc": "+55,2 de P.Def. con túnica."
        },
        {
          "name": "Higher Mana Gain",
          "kind": "passive",
          "learn": 20,
          "max": 35,
          "icon": "higher-mana-gain",
          "desc": "Cada recarga que recibís rinde +39 de MP."
        },
        {
          "name": "Concentration",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "icon": "concentration",
          "desc": "Hace mucho más difícil que a un mago le corten el casteo cuando recibe daño."
        },
        {
          "name": "Servitor Heal",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "servitor-heal",
          "desc": "Cura a tu invocación: 936 de potencia."
        },
        {
          "name": "Summon Shadow",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "summon-shadow",
          "desc": "Invoca a la Sombra, el servidor de ataque de la rama. Consume un Crystal: D."
        },
        {
          "name": "Aura Burn",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "icon": "aura-burn",
          "desc": "Ataque mágico de corto alcance."
        },
        {
          "name": "Twister",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "twister",
          "desc": "Torbellino de viento sobre un objetivo. Es el ataque rápido y barato de la rama."
        },
        {
          "name": "Flame Strike",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "icon": "flame-strike",
          "desc": "Llamarada que prende un área amplia."
        },
        {
          "name": "Summon Silhouette",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "summon-silhouette",
          "desc": "Invoca a la Silueta, más resistente que la Sombra. Consume un Crystal: D."
        },
        {
          "name": "Fast Spell Casting",
          "kind": "passive",
          "learn": 25,
          "max": 56,
          "icon": "fast-spell-casting",
          "desc": "+18% de velocidad de casteo."
        },
        {
          "name": "Fast Mana Recovery",
          "kind": "passive",
          "learn": 25,
          "max": 74,
          "icon": "fast-mana-recovery",
          "desc": "+3,4 a la regeneración de MP."
        },
        {
          "name": "Sleep",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "icon": "sleep",
          "desc": "Duerme a un enemigo 8 segundos. Cualquier daño lo despierta, y una vez despierto es casi imposible volver a dormirlo."
        },
        {
          "name": "Servitor Recharge",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "icon": "servitor-recharge",
          "desc": "Le devuelve MP a tu invocación."
        },
        {
          "name": "Body To Mind",
          "kind": "active",
          "learn": 25,
          "custom": true,
          "icon": "body-to-mind",
          "desc": "Quemás tu propia carne para rellenar la cabeza: recuperás 296 de MP. En L2Thunder cuesta 1,12 de HP por cada MP, no 6: antes no valía la pena usarlo."
        },
        {
          "name": "Resist Aqua",
          "kind": "active",
          "learn": 25,
          "icon": "resist-aqua",
          "desc": "+30 de resistencia al agua."
        },
        {
          "name": "Shadow Spark",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "icon": "shadow-spark",
          "desc": "Chispa de oscuridad sobre un objetivo."
        },
        {
          "name": "Corpse Life Drain",
          "kind": "active",
          "learn": 30,
          "max": 35,
          "icon": "corpse-life-drain",
          "desc": "Absorbe la vida de un cadáver para curarte."
        },
        {
          "name": "Fast HP Recovery",
          "kind": "passive",
          "learn": 35,
          "max": 74,
          "icon": "fast-hp-recovery",
          "desc": "+2,7 a la regeneración de HP."
        },
        {
          "name": "Mighty Servitor",
          "kind": "active",
          "learn": 35,
          "max": 56,
          "icon": "mighty-servitor",
          "desc": "+15% de P.Atk. a la invocación durante 2 horas."
        },
        {
          "name": "Slow",
          "kind": "active",
          "learn": 35,
          "icon": "slow",
          "desc": "-30% de velocidad de movimiento."
        },
        {
          "name": "Curse Chaos",
          "kind": "active",
          "learn": 35,
          "custom": true,
          "icon": "curse-chaos",
          "desc": "-12 de precisión durante 15 segundos."
        }
      ]
    },
    {
      "id": "phantomsummoner",
      "name": "PhantomSummoner",
      "from": 40,
      "to": 75,
      "blurb": "La rama de invocación: los servidores grandes, los cúbicos y los buffs del servidor.",
      "skills": [
        {
          "name": "Summon Phantom Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-phantom-cubic",
          "desc": "Invoca un cúbico fantasma que ataca solo a tu objetivo. Es el que más seguido golpea de todos los cúbicos. Dura 30 minutos."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "light-armor-mastery-2051b1",
          "desc": "Con armadura ligera: +46 de P.Def., +88% de velocidad de casteo, +25% de ataque y +20% de recuperación de MP."
        },
        {
          "name": "Servitor Physical Shield",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "icon": "servitor-physical-shield",
          "desc": "+15% de P.Def. a la invocación."
        },
        {
          "name": "Transfer Pain",
          "kind": "toggle",
          "learn": 40,
          "max": 70,
          "icon": "transfer-pain",
          "desc": "Tu invocación se come el dolor que era para vos: le pasa el 50% del daño que recibís. Consume MP mientras dure."
        },
        {
          "name": "Summon Soulless",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "summon-soulless",
          "desc": "Invoca al Soulless, el servidor de nivel alto de la rama."
        },
        {
          "name": "Summon Spark Cubic",
          "kind": "active",
          "learn": 40,
          "max": 72,
          "custom": true,
          "icon": "summon-spark-cubic",
          "desc": "Invoca un cúbico de chispas que ataca a tu objetivo. Dura 30 minutos."
        },
        {
          "name": "Servitor Cure",
          "kind": "active",
          "learn": 40,
          "max": 60,
          "custom": true,
          "icon": "servitor-cure",
          "desc": "Le saca a la invocación un sangrado y un veneno de cualquier fuerza. No se puede resistir."
        },
        {
          "name": "Mass Summon Phantom Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "mass-summon-phantom-cubic",
          "desc": "Un cúbico fantasma para cada miembro de la party, de una sola vez."
        },
        {
          "name": "Cubic Mastery",
          "kind": "passive",
          "learn": 44,
          "max": 56,
          "custom": true,
          "icon": "cubic-mastery",
          "desc": "Te permite tener 3 cúbicos a la vez."
        },
        {
          "name": "Servitor Magic Shield",
          "kind": "active",
          "learn": 44,
          "max": 52,
          "icon": "servitor-magic-shield",
          "desc": "+30% de M.Def. a la invocación."
        },
        {
          "name": "Servitor Haste",
          "kind": "active",
          "learn": 44,
          "max": 52,
          "icon": "servitor-haste",
          "desc": "+30% de velocidad de ataque y +15% de casteo a la invocación."
        },
        {
          "name": "Servitor Empowerment",
          "kind": "active",
          "learn": 52,
          "max": 70,
          "custom": true,
          "icon": "servitor-empowerment",
          "desc": "+2.500 de P.Def. y M.Def. a la invocación durante 30 segundos, a cambio de -65% de velocidad."
        },
        {
          "name": "Summon Nightshade",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "icon": "summon-nightshade",
          "desc": "Invoca al Nightshade, el último servidor antes del Spectral Lord."
        },
        {
          "name": "Betray",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "icon": "betray",
          "desc": "Da vuelta a la invocación del enemigo contra su propio dueño durante 10 segundos: la ataca e ignora todas sus órdenes. Consume 5 Spirit Ore."
        },
        {
          "name": "Summon Friend",
          "kind": "active",
          "learn": 56,
          "icon": "summon-friend",
          "desc": "Trae a un compañero de party a donde estés. El que viene tiene que tener un Summoning Crystal."
        },
        {
          "name": "Mass Surrender to Wind",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "mass-surrender-to-wind",
          "desc": "En área, a hasta 8 enemigos: -15 de resistencia al viento y -8% de defensas durante 15 segundos."
        },
        {
          "name": "Servitor Blessing",
          "kind": "active",
          "learn": 62,
          "custom": true,
          "icon": "servitor-blessing",
          "desc": "Libera a la invocación de raíces, inmovilizaciones, parálisis y frenos. Cubre todos los que puede tirar un jugador y no se puede resistir."
        }
      ]
    },
    {
      "id": "spectral-master",
      "name": "Spectral Master",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma al Señor Espectral y el Assassin Servitor, que convierte al servidor en una máquina de crítico.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Health",
          "kind": "passive",
          "learn": 76,
          "icon": "health",
          "desc": "Más resistencia a veneno y sangrado."
        },
        {
          "name": "Wizard Servitor",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "wizard-servitor",
          "desc": "Le mete el espíritu de un mago antiguo: +15% de M.Atk., +13% de casteo y de M.Def. Consume 10 Spirit Ore."
        },
        {
          "name": "Assassin Servitor",
          "kind": "active",
          "learn": 76,
          "max": 77,
          "custom": true,
          "icon": "assassin-servitor",
          "desc": "Convierte al servidor en un asesino durante 2 horas: +15% de P.Def., +20% de M.Def., +30% de velocidad de ataque, +30% de crítico, +20% de daño crítico y +8 de precisión."
        },
        {
          "name": "Final Servitor",
          "kind": "active",
          "learn": 76,
          "max": 78,
          "custom": true,
          "icon": "final-servitor",
          "desc": "Le mete el espíritu de un héroe: +20% de casi todo, incluido el crítico y su daño. Consume 10 Spirit Ore."
        },
        {
          "name": "Summon Spectral Lord",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "summon-spectral-lord",
          "desc": "Invoca al Señor Espectral, el servidor de nivel 76 de la clase. Cinco minutos de espera."
        },
        {
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "icon": "skill-mastery",
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu INT."
        },
        {
          "name": "Spell Force",
          "kind": "active",
          "learn": 77,
          "icon": "spell-force",
          "desc": "Transfiere tu poder mágico a un compañero. Se corta si recibís daño, y es el requisito de Mass Recharge."
        },
        {
          "name": "Mage Bane",
          "kind": "active",
          "learn": 77,
          "icon": "mage-bane",
          "desc": "Le rompe la magia al enemigo: -10% de M.Atk. y -10% de velocidad de casteo durante 20 segundos. Acierta el 95%."
        },
        {
          "name": "Arcane Agility",
          "kind": "toggle",
          "learn": 78,
          "icon": "arcane-agility",
          "desc": "Postura: +20% de velocidad de casteo y -10% de espera entre skills, a cambio de +10% de MP y un goteo constante."
        },
        {
          "name": "Summon Lore",
          "kind": "passive",
          "learn": 78,
          "custom": true,
          "icon": "summon-lore",
          "desc": "Profundiza tu dominio de la invocación: con armadura ligera +80 de P.Def. y +5% de casteo; con túnica +60, +7% y -3% de MP en los skills mágicos."
        },
        {
          "name": "Anti-Summoning Field",
          "kind": "active",
          "learn": 80,
          "icon": "anti-summoning-field",
          "desc": "Planta un campo que manda a otra dimensión a toda invocación que entre. Pide Spell Force nivel 2 y un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
