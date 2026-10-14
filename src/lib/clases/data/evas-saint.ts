// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const evasSaint: ClassGuide = {
  "slug": "evas-saint",
  "name": "Eva's Saint",
  "subtitle": "Elfo · tercera clase de la rama mística de apoyo",
  "intro": "El sanador elfo. Mismo lugar que el Cardinal, con el agua y la luz como elementos: curas grandes, limpieza, resurrección y las resistencias élficas.",
  "facts": [
    {
      "label": "Camino",
      "value": "ElvenMystic → ElvenOracle → ElvenElder → Eva's Saint"
    },
    {
      "label": "Armadura",
      "value": "Túnica o ligera"
    },
    {
      "label": "Arma",
      "value": "Maza"
    },
    {
      "label": "Habilidades",
      "value": "76 en total: 55 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Curación · limpieza · resistencias"
    },
    {
      "label": "Floja en",
      "value": "Daño · juego en solitario"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Eva's Saint, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 35,
          "icon": "heal",
          "desc": "Cura directa de 301. Barata y sin tiempo de espera."
        },
        {
          "name": "Cure Poison",
          "kind": "active",
          "learn": 7,
          "max": 58,
          "icon": "cure-poison",
          "desc": "Saca el veneno. Cubre todos los venenos que puede tirar un jugador."
        },
        {
          "name": "Shield",
          "kind": "active",
          "learn": 7,
          "max": 44,
          "icon": "shield",
          "desc": "+15% de P.Def."
        },
        {
          "name": "Might",
          "kind": "active",
          "learn": 7,
          "max": 40,
          "icon": "might",
          "desc": "+15% de P.Atk."
        },
        {
          "name": "Ice Bolt",
          "kind": "active",
          "learn": 7,
          "max": 14,
          "icon": "ice-bolt",
          "desc": "Golpe de hielo que además frena al objetivo."
        },
        {
          "name": "Battle Heal",
          "kind": "active",
          "learn": 14,
          "max": 35,
          "icon": "battle-heal",
          "desc": "Misma potencia que Heal pero de casteo rápido: es la de emergencia."
        },
        {
          "name": "Group Heal",
          "kind": "active",
          "learn": 14,
          "max": 35,
          "icon": "group-heal",
          "desc": "Cura 241 a cada miembro de la party de una sola vez."
        },
        {
          "name": "Curse: Weakness",
          "kind": "active",
          "learn": 14,
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
      "id": "elvenoracle",
      "name": "ElvenOracle",
      "from": 20,
      "to": 35,
      "blurb": "La base del sanador elfo: curas, resurrección y los primeros buffs de party.",
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
          "desc": "+87,4 de P.Def. con túnica."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "light-armor-mastery-4d45b3",
          "desc": "Con armadura ligera: +69,6 de P.Def., +91% de velocidad de casteo, +25% de velocidad de ataque y +20% de recuperación de MP."
        },
        {
          "name": "Resurrection",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "resurrection",
          "desc": "Revive un cadáver y le devuelve cerca del 20% de la experiencia perdida."
        },
        {
          "name": "Disrupt Undead",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "icon": "disrupt-undead",
          "desc": "Daño sagrado contra no-muertos. En zonas de undead pega mucho más que Wind Strike."
        },
        {
          "name": "Kiss of Eva",
          "kind": "active",
          "learn": 20,
          "max": 52,
          "icon": "kiss-of-eva",
          "desc": "Multiplica por 7 el tiempo que se aguanta bajo el agua."
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
          "name": "Wind Walk",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "icon": "wind-walk",
          "desc": "+33 de velocidad de movimiento."
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
          "name": "Mental Shield",
          "kind": "active",
          "learn": 25,
          "max": 56,
          "icon": "mental-shield",
          "desc": "+25% de resistencia a Hold, Sleep, Fear y ataques mentales."
        },
        {
          "name": "Holy Weapon",
          "kind": "active",
          "learn": 25,
          "custom": true,
          "icon": "holy-weapon",
          "desc": "Bendice el arma de un compañero: +80 de poder sagrado, que se aplica a los golpes normales y a los skills sin elemento propio."
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
          "name": "Agility",
          "kind": "active",
          "learn": 25,
          "max": 52,
          "icon": "agility",
          "desc": "+4 de evasión."
        },
        {
          "name": "Dryad Root",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "icon": "dryad-root",
          "desc": "Raíces que inmovilizan al objetivo 6 segundos. No le impiden atacar ni castear, pero sí perseguirte."
        },
        {
          "name": "Recharge",
          "kind": "active",
          "learn": 30,
          "max": 74,
          "icon": "recharge",
          "desc": "Pasa tu propia energia a un compañero y le devuelve 782 de MP. No se puede usar sobre otra clase que tambien tenga Recharge."
        },
        {
          "name": "Resist Fire",
          "kind": "active",
          "learn": 30,
          "max": 44,
          "icon": "resist-fire",
          "desc": "+15 de resistencia al fuego."
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
          "name": "Decrease Weight",
          "kind": "active",
          "learn": 35,
          "max": 52,
          "icon": "decrease-weight",
          "desc": "+9.000 de capacidad de carga durante 20 minutos."
        }
      ]
    },
    {
      "id": "elvenelder",
      "name": "ElvenElder",
      "from": 40,
      "to": 62,
      "blurb": "La rama de sanación pura: las curas grandes, la limpieza y las resistencias elementales.",
      "skills": [
        {
          "name": "Might of Heaven",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "might-of-heaven",
          "desc": "Daño sagrado contra no-muertos."
        },
        {
          "name": "Bless Shield",
          "kind": "active",
          "learn": 40,
          "max": 70,
          "icon": "bless-shield",
          "desc": "+50% de probabilidad de bloquear con escudo."
        },
        {
          "name": "Resist Shock",
          "kind": "active",
          "learn": 40,
          "max": 72,
          "custom": true,
          "icon": "resist-shock",
          "desc": "Templa los nervios del aliado: 14% menos de probabilidad de ser aturdido."
        },
        {
          "name": "Return",
          "kind": "active",
          "learn": 44,
          "max": 56,
          "icon": "return",
          "desc": "Te teletransporta al pueblo más cercano."
        },
        {
          "name": "Serenade of Eva",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "icon": "serenade-of-eva",
          "desc": "Calma a los enemigos de alrededor y les quita las ganas de atacar."
        },
        {
          "name": "Vitalize",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "custom": true,
          "icon": "vitalize",
          "desc": "Energía vital que cierra la herida y quema lo que la infecta: cura 780 y además saca veneno y sangrado. Cubre todos los que puede tirar un jugador."
        },
        {
          "name": "Party Recall",
          "kind": "active",
          "learn": 48,
          "max": 56,
          "icon": "party-recall",
          "desc": "Teletransporta a toda la party a un pueblo."
        },
        {
          "name": "Trance",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "icon": "trance",
          "desc": "Arrastra al objetivo a un trance: dormido 15 segundos, y cualquier daño lo despierta."
        },
        {
          "name": "Erase",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "icon": "erase",
          "desc": "Manda la invocación del enemigo a otra dimensión. Consume 5 Spirit Ore."
        },
        {
          "name": "Mana Burn",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "icon": "mana-burn",
          "desc": "Quema 210 de MP del objetivo. Contra un mago o un sanador vale más que cualquier golpe."
        },
        {
          "name": "Turn Undead",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "icon": "turn-undead",
          "desc": "Los no-muertos huyen al ver tu naturaleza divina. Puede matar de un golpe. Consume 5 Spirit Ore."
        },
        {
          "name": "Major Heal",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "icon": "major-heal",
          "desc": "La cura grande sobre un objetivo: 946 de potencia. Consume un Spirit Ore."
        },
        {
          "name": "Invocation",
          "kind": "active",
          "learn": 56,
          "max": 72,
          "custom": true,
          "icon": "invocation",
          "desc": "Te sentás a meditar y recuperás 1.665 de MP cada 3,3 segundos durante 10: casi 5.000 en total. No podés moverte y te baja la P.Def. mientras dura."
        },
        {
          "name": "Advanced Block",
          "kind": "active",
          "learn": 58,
          "max": 72,
          "icon": "advanced-block",
          "desc": "Duplica la fuerza del bloqueo con escudo."
        },
        {
          "name": "Unholy Resistance",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "unholy-resistance",
          "desc": "Escuda al aliado contra la oscuridad: +20 de resistencia."
        },
        {
          "name": "Clarity",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "clarity",
          "desc": "Le abarata los skills al objetivo: -10% de MP en los mágicos y -20% en los físicos. Consume 3 Spirit Ore."
        },
        {
          "name": "Wild Magic",
          "kind": "active",
          "learn": 62,
          "max": 70,
          "icon": "wild-magic",
          "desc": "Multiplica por 4 la probabilidad de crítico mágico."
        }
      ]
    },
    {
      "id": "evas-saint",
      "name": "Eva's Saint",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra con lo que le faltaba al sanador: resurrección mejorada, limpieza amplia y las protecciones finales.",
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
          "name": "Mass Resurrection",
          "kind": "active",
          "learn": 76,
          "icon": "mass-resurrection",
          "desc": "Revive a los miembros caídos de la alianza y les devuelve cerca del 55% de la experiencia."
        },
        {
          "name": "Body of Avatar",
          "kind": "active",
          "learn": 76,
          "icon": "body-of-avatar",
          "desc": "Sube un 35% el HP máximo de la party y la cura por esa misma cantidad en el acto."
        },
        {
          "name": "Balance Life",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "balance-life",
          "desc": "Reparte la vida entre todos los de la party: los que están a punto de morir suben y los que están enteros bajan. Salva situaciones que ninguna cura salva."
        },
        {
          "name": "Arcane Protection",
          "kind": "active",
          "learn": 76,
          "icon": "arcane-protection",
          "desc": "-30% de vulnerabilidad a que te roben los buffs y -20% a los debuffs."
        },
        {
          "name": "Major Group Heal",
          "kind": "active",
          "learn": 76,
          "icon": "major-group-heal",
          "desc": "La cura grande para toda la party de un saque: 1.170 de potencia. Consume 4 Spirit Ore."
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
          "name": "Divine Protection",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "divine-protection",
          "desc": "Envuelve al aliado en luz divina: +20 de resistencia sagrada y oscura."
        },
        {
          "name": "Block Wind Walk",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "block-wind-walk",
          "desc": "Una ráfaga que le traba las piernas: -40% de velocidad por 10 segundos."
        },
        {
          "name": "Arcane Wisdom",
          "kind": "toggle",
          "learn": 78,
          "icon": "arcane-wisdom",
          "desc": "Mientras lo tenés activo: +10% de velocidad de casteo, +10% de P.Def. y -5% de MP en los skills. Consume 12 de MP cada 3,3 segundos."
        },
        {
          "name": "Divine Lore",
          "kind": "passive",
          "learn": 78,
          "icon": "divine-lore",
          "desc": "-5% al costo de MP de los skills mágicos."
        },
        {
          "name": "Prophecy of Water",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "prophecy-of-water",
          "desc": "La profecía del mago: +15% de MP máximo, +8% de M.Atk., +10% de M.Def. y de casteo, y el doble de crítico mágico para la party. El que la lanza suma además resistencia a que le corten el casteo."
        },
        {
          "name": "Cleanse",
          "kind": "active",
          "learn": 78,
          "icon": "cleanse",
          "desc": "Limpia los debuffs del objetivo. Consume un Einhasad Holy Water."
        },
        {
          "name": "Salvation",
          "kind": "active",
          "learn": 79,
          "icon": "salvation",
          "desc": "Revive al objetivo con la vida llena y conservando sus buffs. Consume 2 Einhasad Holy Water."
        },
        {
          "name": "Mass Recharge",
          "kind": "active",
          "learn": 80,
          "icon": "mass-recharge",
          "desc": "La version para toda la party. Pide Spell Force nivel 3 y consume un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
