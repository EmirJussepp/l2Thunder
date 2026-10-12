// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const archmage: ClassGuide = {
  "slug": "archmage",
  "name": "Archmage",
  "subtitle": "Humano · tercera clase de la rama del mago",
  "intro": "El daño mágico más alto del servidor, todo concentrado en fuego. Pega durísimo y de lejos, pero si lo alcanzan se cae enseguida: su juego es nunca dejar que lleguen.",
  "facts": [
    {
      "label": "Camino",
      "value": "HumanMystic → HumanWizard → Sorcerer → Archmage"
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
      "value": "71 en total: 50 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño mágico · área · desgaste de maná"
    },
    {
      "label": "Floja en",
      "value": "Aguante · pelea de cerca"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Archmage, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "humanmystic",
      "name": "HumanMystic",
      "from": 1,
      "to": 19,
      "blurb": "La base de todos los místicos humanos. Los primeros dardos mágicos, la cura inicial y las pasivas de túnica. De acá sale tanto el mago como el clérigo.",
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
          "name": "Vampiric Touch",
          "kind": "active",
          "learn": 14,
          "max": 25,
          "icon": "vampiric-touch",
          "desc": "Absorbe vida: te cura el 40% del daño que hace."
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
      "id": "humanwizard",
      "name": "HumanWizard",
      "from": 20,
      "to": 39,
      "blurb": "El camino del mago: fuego, maldiciones elementales, el primer gato invocado y el Body To Mind para no quedarse nunca sin maná.",
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
          "max": 68,
          "icon": "concentration",
          "desc": "Hace mucho más difícil que a un mago le corten el casteo cuando recibe daño."
        },
        {
          "name": "Summon Kat the Cat",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "custom": true,
          "icon": "summon-kat-the-cat",
          "desc": "Invoca a Kat the Cat, servidor de nivel 76 que sabe Master Recharge. Pide 20 Spirit Ore y consume uno cada 4 minutos."
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
          "name": "Flame Strike",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "icon": "flame-strike",
          "desc": "Llamarada que prende un área amplia."
        },
        {
          "name": "Blaze",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "icon": "blaze",
          "desc": "Bola de fuego sobre un objetivo."
        },
        {
          "name": "Summon Mew the Cat",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "custom": true,
          "icon": "summon-mew-the-cat",
          "desc": "Invoca a Mew the Cat, servidor de nivel 76 que sabe Mega Storm Strike."
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
          "name": "Surrender To Fire",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "custom": true,
          "icon": "surrender-to-fire",
          "desc": "Le abre la guardia al fuego: -30 de resistencia al fuego y +15 al agua, por 30 segundos."
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
          "name": "Body To Mind",
          "kind": "active",
          "learn": 25,
          "max": 66,
          "custom": true,
          "icon": "body-to-mind",
          "desc": "Quemás tu propia carne para rellenar la cabeza: recuperás 296 de MP. En L2Thunder cuesta 1,12 de HP por cada MP, no 6: antes no valía la pena usarlo."
        },
        {
          "name": "Resist Wind",
          "kind": "active",
          "learn": 25,
          "max": 44,
          "icon": "resist-wind",
          "desc": "+15 de resistencia al viento."
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
          "name": "Servitor Wind Walk",
          "kind": "active",
          "learn": 35,
          "icon": "servitor-wind-walk",
          "desc": "+33 de velocidad a la invocación."
        },
        {
          "name": "Slow",
          "kind": "active",
          "learn": 35,
          "max": 74,
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
      "id": "sorcerer",
      "name": "Sorcerer",
      "from": 40,
      "to": 75,
      "blurb": "El fuego pasa a ser el centro de todo: vórtices, semillas elementales y los ataques en área que definen el farmeo del mago.",
      "skills": [
        {
          "name": "Surrender To Wind",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "surrender-to-wind",
          "desc": "Le abre la guardia al viento: -30 de resistencia al viento y +15 a la tierra, por 30 segundos."
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
          "name": "Blazing Circle",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "blazing-circle",
          "desc": "Anillo de llamas alrededor tuyo."
        },
        {
          "name": "Prominence",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "prominence",
          "desc": "Junta el aire de alrededor para armar una bola de fuego enorme."
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
          "name": "Blazing Skin",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "icon": "blazing-skin",
          "desc": "Devuelve daño al que te pega de cerca y suma +5% de P.Def."
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
          "name": "Cancellation",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "custom": true,
          "icon": "cancellation",
          "desc": "En L2Thunder no roba buffs: le alarga los tiempos de espera un 20% durante 20 segundos, físicos y mágicos. Nadie te va a vaciar la barra de buffs."
        },
        {
          "name": "Immolation",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "custom": true,
          "icon": "immolation",
          "desc": "Envuelve en llamas a un solo enemigo: 2.348 de daño de fuego en 15 segundos. No puede matarlo."
        },
        {
          "name": "Rain of Fire",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "rain-of-fire",
          "desc": "Granizo de fuego: sirve contra varios enemigos a la vez."
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
          "name": "Seed of Fire",
          "kind": "active",
          "learn": 66,
          "custom": true,
          "icon": "seed-of-fire",
          "desc": "Absorbés la semilla del fuego y el aturdimiento se te quema encima: se puede lanzar incluso aturdido y te libera. +800 de P.Def. y M.Def. por 15 segundos, y habilita el Inferno."
        },
        {
          "name": "Aura Symphony",
          "kind": "active",
          "learn": 68,
          "icon": "aura-symphony",
          "desc": "Combina dos fuerzas elementales en un golpe grande."
        },
        {
          "name": "Inferno",
          "kind": "active",
          "learn": 70,
          "icon": "inferno",
          "desc": "Doble golpe de fuego devastador. Requiere una Seed of Fire."
        },
        {
          "name": "Elemental Assault",
          "kind": "active",
          "learn": 72,
          "icon": "elemental-assault",
          "desc": "Pide fuerza de agua y de viento a la vez, y pega muy fuerte."
        }
      ]
    },
    {
      "id": "archmage",
      "name": "Archmage",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase trae el Volcano, la sinfonía de auras y el caos arcano que le deja sin maná al enemigo.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
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
          "name": "Fire Vortex",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "fire-vortex",
          "desc": "Vórtice de fuego: hace daño y le baja al enemigo velocidad, ataque, casteo y resistencia al fuego mientras le drena MP durante 12 segundos."
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
          "name": "Volcano",
          "kind": "active",
          "learn": 80,
          "icon": "volcano",
          "desc": "Cadena de golpes de fuego: no te podés mover mientras lo lanzás y consume MP con cada impacto. Pide Spell Force nivel 3 y un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
