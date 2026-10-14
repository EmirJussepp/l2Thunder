// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const elementalMaster: ClassGuide = {
  "slug": "elemental-master",
  "name": "Elemental Master",
  "subtitle": "Elfo · tercera clase de la rama del mago",
  "intro": "El invocador de unicornios. Mismo rol que el Arcana Lord pero con el agua como elemento y un servidor sanador propio, el Unicorn Seraphim, que cura y bendice a la party entera.",
  "facts": [
    {
      "label": "Camino",
      "value": "ElvenMystic → ElvenWizard → ElementalSummoner → Elemental Master"
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
      "value": "70 en total: 48 activas y 22 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Invocaciones · apoyo indirecto · farmeo solo"
    },
    {
      "label": "Floja en",
      "value": "Daño propio · aguante"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Elemental Master, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "elvenmystic",
      "name": "ElvenMystic",
      "from": 1,
      "to": 52,
      "blurb": "La base de todos los místicos elfos: los primeros ataques de agua, la cura inicial y las pasivas de túnica.",
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
          "name": "Curse: Weakness",
          "kind": "active",
          "learn": 14,
          "max": 35,
          "custom": true,
          "icon": "curse-weakness",
          "desc": "-15% de P.Atk. durante 12 segundos."
        },
        {
          "name": "Wind Shackle",
          "kind": "active",
          "learn": 14,
          "max": 74,
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
      "id": "elvenwizard",
      "name": "ElvenWizard",
      "from": 20,
      "to": 35,
      "blurb": "El camino del mago elfo: agua y luz, los primeros unicornios y las maldiciones elementales.",
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
          "name": "Aura Burn",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "icon": "aura-burn",
          "desc": "Ataque mágico de corto alcance."
        },
        {
          "name": "Aqua Swirl",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "aqua-swirl",
          "desc": "Chorro de agua sobre un objetivo."
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
          "name": "Summon Boxer the Unicorn",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "summon-boxer-the-unicorn",
          "desc": "Invoca a Boxer the Unicorn, servidor de nivel 76 que sabe Master Recharge."
        },
        {
          "name": "Summon Mirage the Unicorn",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "summon-mirage-the-unicorn",
          "desc": "Invoca a Mirage the Unicorn, servidor de nivel 76 que sabe Mega Storm Strike."
        },
        {
          "name": "Energy Bolt",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "icon": "energy-bolt",
          "desc": "El dardo mágico más barato y más rápido de castear."
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
          "name": "Resist Fire",
          "kind": "active",
          "learn": 25,
          "icon": "resist-fire",
          "desc": "+15 de resistencia al fuego."
        },
        {
          "name": "Solar Spark",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "icon": "solar-spark",
          "desc": "Ataque mágico sagrado."
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
          "name": "Bright Servitor",
          "kind": "active",
          "learn": 35,
          "max": 56,
          "icon": "bright-servitor",
          "desc": "+75% de M.Atk. a la invocación."
        },
        {
          "name": "Surrender To Earth",
          "kind": "active",
          "learn": 35,
          "custom": true,
          "icon": "surrender-to-earth",
          "desc": "Le abre la guardia a la tierra: -30 de resistencia a la tierra y +15 al viento, por 30 segundos."
        }
      ]
    },
    {
      "id": "elementalsummoner",
      "name": "ElementalSummoner",
      "from": 40,
      "to": 62,
      "blurb": "La rama de invocación: los unicornios grandes, los cúbicos de agua y los buffs del servidor.",
      "skills": [
        {
          "name": "Summon Life Cubic",
          "kind": "active",
          "learn": 40,
          "max": 72,
          "custom": true,
          "icon": "summon-life-cubic",
          "desc": "Invoca un cúbico que vigila a la party y cura 382 de vida por vez. Dura 30 minutos."
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
          "name": "Summon Merrow the Unicorn",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-merrow-the-unicorn",
          "desc": "Invoca a Merrow the Unicorn, servidor de nivel 76 que sabe Hydro Screw."
        },
        {
          "name": "Summon Aqua Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-aqua-cubic",
          "desc": "Invoca un cúbico de agua que congela a tu objetivo por unos 2.310 de daño en 15 segundos. Acierta el 40% de las veces y dura 30 minutos."
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
          "name": "Mass Summon Aqua Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "mass-summon-aqua-cubic",
          "desc": "Un cúbico de agua para cada miembro de la party."
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
          "name": "Summon Unicorn Seraphim",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "icon": "summon-unicorn-seraphim",
          "desc": "Invoca al Unicorn Seraphim, servidor de nivel 76 que cura y bendice a la party."
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
          "name": "Mass Surrender to Water",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "mass-surrender-to-water",
          "desc": "La versión en área: a hasta 8 enemigos, -15 de resistencia al agua y -8% de defensas durante 15 segundos. Consume 3 Spirit Ore."
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
      "id": "elemental-master",
      "name": "Elemental Master",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma a Magnus the Unicorn y el cúbico de agua para toda la party.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Wizard Servitor",
          "kind": "active",
          "learn": 76,
          "max": 77,
          "custom": true,
          "icon": "wizard-servitor",
          "desc": "Le mete el espíritu de un mago antiguo: +15% de M.Atk., +13% de casteo y de M.Def. Consume 10 Spirit Ore."
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
          "name": "Warrior Bane",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "warrior-bane",
          "desc": "-10% de P.Atk. y de velocidad de ataque durante 20 segundos."
        },
        {
          "name": "Summon Magnus the Unicorn",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "summon-magnus-the-unicorn",
          "desc": "Invoca a Magnus the Unicorn, servidor de nivel 80 que sabe Whiplash y Tidal Wave."
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
