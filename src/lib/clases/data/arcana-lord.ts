// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const arcanaLord: ClassGuide = {
  "slug": "arcana-lord",
  "name": "Arcana Lord",
  "subtitle": "Humano · tercera clase de la rama del mago",
  "intro": "No pelea solo nunca. Tiene el mejor repertorio de invocaciones del juego, tres cúbicos a la vez y una batería de buffs que solo valen para su servidor. Bien jugado, es un grupo entero en un personaje.",
  "facts": [
    {
      "label": "Camino",
      "value": "HumanMystic → HumanWizard → Warlock → Arcana Lord"
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
      "value": "75 en total: 53 activas y 22 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Invocaciones · farmeo solo · control de servidores enemigos"
    },
    {
      "label": "Floja en",
      "value": "Daño propio · aguante"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Arcana Lord, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "name": "Summon Kat the Cat",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "summon-kat-the-cat",
          "desc": "Invoca a Kat the Cat, servidor de nivel 76 que sabe Master Recharge. Pide 20 Spirit Ore y consume uno cada 4 minutos."
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
          "max": 74,
          "icon": "blaze",
          "desc": "Bola de fuego sobre un objetivo."
        },
        {
          "name": "Summon Mew the Cat",
          "kind": "active",
          "learn": 20,
          "max": 74,
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
          "max": 35,
          "icon": "sleep",
          "desc": "Duerme a un enemigo 8 segundos. Cualquier daño lo despierta, y una vez despierto es casi imposible volver a dormirlo."
        },
        {
          "name": "Surrender To Fire",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "custom": true,
          "icon": "surrender-to-fire",
          "desc": "Le abre la guardia al fuego: -30 de resistencia al fuego y +15 al agua, por 30 segundos."
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
          "name": "Resist Wind",
          "kind": "active",
          "learn": 25,
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
          "max": 48,
          "icon": "servitor-wind-walk",
          "desc": "+33 de velocidad a la invocación."
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
      "id": "warlock",
      "name": "Warlock",
      "from": 40,
      "to": 75,
      "blurb": "La rama de invocación de verdad: los gatos grandes, los cúbicos y los buffs que solo le sirven al servidor.",
      "skills": [
        {
          "name": "Summon Storm Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-storm-cubic",
          "desc": "Invoca un cúbico de tormenta que elige tu objetivo y pega solo por unos 861 de daño, con su propia potencia mágica: la tuya no entra en la cuenta. Dura 30 minutos."
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
          "name": "Summon Kai the Cat",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-kai-the-cat",
          "desc": "Invoca a Kai the Cat, servidor de nivel 76 que sabe Reflect Shield."
        },
        {
          "name": "Summon Binding Cubic",
          "kind": "active",
          "learn": 40,
          "max": 72,
          "custom": true,
          "icon": "summon-binding-cubic",
          "desc": "Invoca un cúbico que paraliza a tu objetivo 3 segundos, con 40% de probabilidad. Dura 30 minutos."
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
          "name": "Mass Summon Storm Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "mass-summon-storm-cubic",
          "desc": "Un cúbico de tormenta para cada miembro de la party."
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
          "name": "Summon Feline Queen",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "icon": "summon-feline-queen",
          "desc": "Invoca a la Feline Queen, servidora de nivel 76 que cura y bendice a la party."
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
          "name": "Arcane Disruption",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "icon": "arcane-disruption",
          "desc": "Cadenas arcanas que le frenan el casteo: -10% durante 10 segundos."
        },
        {
          "name": "Summon Friend",
          "kind": "active",
          "learn": 56,
          "icon": "summon-friend",
          "desc": "Trae a un compañero de party a donde estés. El que viene tiene que tener un Summoning Crystal."
        },
        {
          "name": "Mass Surrender to Fire",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "mass-surrender-to-fire",
          "desc": "La versión en área: a hasta 8 enemigos, -15 de resistencia al fuego y -8% de defensas durante 15 segundos. Consume 3 Spirit Ore."
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
      "id": "arcana-lord",
      "name": "Arcana Lord",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma el Feline King, los espíritus antiguos que transforman al servidor y el campo que destierra invocaciones enemigas.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Warrior Servitor",
          "kind": "active",
          "learn": 76,
          "max": 77,
          "custom": true,
          "icon": "warrior-servitor",
          "desc": "Le mete el espíritu de un guerrero antiguo: +30% de HP, +25% de P.Def., +20% de velocidad de ataque y mucha resistencia a debuffs. Consume 10 Spirit Ore."
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
          "name": "Summon Feline King",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "summon-feline-king",
          "desc": "Invoca al Feline King, servidor de nivel 80 que sabe Slash, Spin Slash y Hold of King."
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
