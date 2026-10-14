// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const mysticMuse: ClassGuide = {
  "slug": "mystic-muse",
  "name": "Mystic Muse",
  "subtitle": "Elfo · tercera clase de la rama del mago",
  "intro": "La contraparte de agua del Archmage. Un poco menos de daño puro a cambio de mucho más control: casi todo lo que tira congela, frena o sangra además de pegar.",
  "facts": [
    {
      "label": "Camino",
      "value": "ElvenMystic → ElvenWizard → Spellsinger → Mystic Muse"
    },
    {
      "label": "Armadura",
      "value": "Túnica"
    },
    {
      "label": "Arma",
      "value": "Vara"
    },
    {
      "label": "Habilidades",
      "value": "72 en total: 51 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño mágico con control · frenos · área"
    },
    {
      "label": "Floja en",
      "value": "Aguante · pelea de cerca"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Mystic Muse, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 74,
          "custom": true,
          "icon": "curse-weakness",
          "desc": "-15% de P.Atk. durante 12 segundos."
        },
        {
          "name": "Wind Shackle",
          "kind": "active",
          "learn": 14,
          "max": 35,
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
          "max": 74,
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
          "max": 35,
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
          "max": 35,
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
          "max": 35,
          "custom": true,
          "icon": "summon-boxer-the-unicorn",
          "desc": "Invoca a Boxer the Unicorn, servidor de nivel 76 que sabe Master Recharge."
        },
        {
          "name": "Summon Mirage the Unicorn",
          "kind": "active",
          "learn": 20,
          "max": 35,
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
          "max": 74,
          "icon": "sleep",
          "desc": "Duerme a un enemigo 8 segundos. Cualquier daño lo despierta, y una vez despierto es casi imposible volver a dormirlo."
        },
        {
          "name": "Servitor Recharge",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "icon": "servitor-recharge",
          "desc": "Le devuelve MP a tu invocación."
        },
        {
          "name": "Resist Fire",
          "kind": "active",
          "learn": 25,
          "max": 44,
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
          "icon": "bright-servitor",
          "desc": "+75% de M.Atk. a la invocación."
        },
        {
          "name": "Surrender To Earth",
          "kind": "active",
          "learn": 35,
          "max": 74,
          "custom": true,
          "icon": "surrender-to-earth",
          "desc": "Le abre la guardia a la tierra: -30 de resistencia a la tierra y +15 al viento, por 30 segundos."
        }
      ]
    },
    {
      "id": "spellsinger",
      "name": "Spellsinger",
      "from": 40,
      "to": 72,
      "blurb": "El agua pasa a ser el arma: vórtices, semillas y los golpes que congelan además de pegar.",
      "skills": [
        {
          "name": "Mana Regeneration",
          "kind": "active",
          "learn": 40,
          "max": 70,
          "icon": "mana-regeneration",
          "desc": "+3,09 a la regeneración de MP durante 20 minutos."
        },
        {
          "name": "Surrender To Water",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "surrender-to-water",
          "desc": "Le abre la guardia al agua: -30 de resistencia al agua y +15 al fuego, por 30 segundos."
        },
        {
          "name": "Curse Fear",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "curse-fear",
          "desc": "El terror lo agarra y lo hace huir 4 segundos."
        },
        {
          "name": "Aura Flare",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "aura-flare",
          "desc": "Golpe mágico contra lo que tengas cerca."
        },
        {
          "name": "Hydro Blast",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "hydro-blast",
          "desc": "Rociada de agua a altísima presión."
        },
        {
          "name": "Frost Bolt",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "frost-bolt",
          "desc": "Congela donde pega: daño de agua y -30% de velocidad por 15 segundos."
        },
        {
          "name": "Freezing Skin",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "icon": "freezing-skin",
          "desc": "Devuelve daño al que te pega de cerca y suma +5% de P.Def."
        },
        {
          "name": "Solar Flare",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "solar-flare",
          "desc": "La versión grande del ataque sagrado."
        },
        {
          "name": "Aura Bolt",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "aura-bolt",
          "desc": "La versión mejorada del dardo barato: más potencia por el mismo gasto."
        },
        {
          "name": "Clear Mind",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "clear-mind",
          "desc": "Más regeneración de MP caminando o parado, y +10% de velocidad de casteo."
        },
        {
          "name": "Sleeping Cloud",
          "kind": "active",
          "learn": 44,
          "max": 70,
          "custom": true,
          "icon": "sleeping-cloud",
          "desc": "Nube que duerme a hasta 8 enemigos cercanos por 8 segundos. Cualquier daño los despierta."
        },
        {
          "name": "Freezing Shackle",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "icon": "freezing-shackle",
          "desc": "Congelamiento que le va comiendo la vida: 1.729 de daño en 15 segundos."
        },
        {
          "name": "Ice Dagger",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "icon": "ice-dagger",
          "desc": "Hoja de hielo que congela mientras corta: daño de agua más 679 de sangrado repartidos en 20 segundos."
        },
        {
          "name": "Cancellation",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "custom": true,
          "icon": "cancellation",
          "desc": "En L2Thunder no roba buffs: le alarga los tiempos de espera un 20% durante 20 segundos, físicos y mágicos. Nadie te va a vaciar la barra de buffs."
        },
        {
          "name": "Frost Wall",
          "kind": "active",
          "learn": 52,
          "max": 74,
          "icon": "frost-wall",
          "desc": "Muro de hielo contra tu objetivo."
        },
        {
          "name": "Aqua Splash",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "aqua-splash",
          "desc": "Ola que sirve contra varios enemigos a la vez."
        },
        {
          "name": "Aura Flash",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "aura-flash",
          "desc": "Estallido elemental sobre los de alrededor que además les cancela el objetivo. Consume 4 Spirit Ore."
        },
        {
          "name": "Seed of Water",
          "kind": "active",
          "learn": 66,
          "custom": true,
          "icon": "seed-of-water",
          "desc": "Absorbés la semilla del agua y el aturdimiento se te lava encima: se puede lanzar incluso aturdido y te libera. +800 de P.Def. y M.Def. por 15 segundos, y habilita el Blizzard."
        },
        {
          "name": "Blizzard",
          "kind": "active",
          "learn": 70,
          "icon": "blizzard",
          "desc": "Doble golpe invernal devastador que además frena al enemigo. Requiere una Seed of Water."
        },
        {
          "name": "Elemental Symphony",
          "kind": "active",
          "learn": 72,
          "icon": "elemental-symphony",
          "desc": "Pide fuerza de fuego y de viento a la vez, y pega muy fuerte."
        }
      ]
    },
    {
      "id": "mystic-muse",
      "name": "Mystic Muse",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra con el Raging Waves, el vórtice de luz y la sinfonía elemental.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Light Vortex",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "light-vortex",
          "desc": "Vórtice de luz: hace daño sagrado y le baja 30 la resistencia a la luz mientras le drena MP."
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
          "name": "Ice Vortex",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "ice-vortex",
          "desc": "Vórtice de agua: hace daño y le baja 30% la velocidad, 10% el ataque y 20 la resistencia al agua mientras le drena MP."
        },
        {
          "name": "Arcane Power",
          "kind": "toggle",
          "learn": 78,
          "icon": "arcane-power",
          "desc": "Postura: +30% de M.Atk. a cambio de +10% de MP en los skills y un goteo constante."
        },
        {
          "name": "Arcane Roar",
          "kind": "passive",
          "learn": 78,
          "custom": true,
          "icon": "arcane-roar",
          "desc": "+5% de M.Atk., +3% de casteo y +10 de resistencia a los cuatro elementos."
        },
        {
          "name": "Arcane Chaos",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "arcane-chaos",
          "desc": "Corrompe el flujo de maná del enemigo 15 segundos: le drena 320 de MP, le sube 30% el costo de los skills mágicos y hace que los debuffs le entren 30% más seguido."
        },
        {
          "name": "Raging Waves",
          "kind": "active",
          "learn": 80,
          "icon": "raging-waves",
          "desc": "Cadena de golpes de agua: no te podés mover mientras lo lanzás y consume MP con cada impacto. Pide Spell Force nivel 3 y un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
