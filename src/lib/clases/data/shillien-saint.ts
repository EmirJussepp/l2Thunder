// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const shillienSaint: ClassGuide = {
  "slug": "shillien-saint",
  "name": "Shillien Saint",
  "subtitle": "Elfo Oscuro · tercera clase de la rama mística de apoyo",
  "intro": "Especialista en veneno, de ataque y de defensa, con curación repartida en el tiempo, recuperación de maná para toda la party y un puñado de herramientas que deciden peleas: raíz, quema de maná y limpieza de debuffs.",
  "facts": [
    {
      "label": "Camino",
      "value": "DarkMystic → ShillienOracle → ShillienElder → Shillien Saint"
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
      "value": "72 en total: 50 activas y 22 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Veneno · curación sostenida · maná de la party"
    },
    {
      "label": "Floja en",
      "value": "Daño directo · defensa propia"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Shillien Saint, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 35,
          "icon": "heal",
          "desc": "Cura directa de 301. Barata y sin tiempo de espera."
        },
        {
          "name": "Cure Poison",
          "kind": "active",
          "learn": 7,
          "max": 58,
          "custom": true,
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
          "name": "Vampiric Touch",
          "kind": "active",
          "learn": 14,
          "icon": "vampiric-touch",
          "desc": "Absorbe vida: te cura el 40% del daño que hace."
        },
        {
          "name": "Wind Shackle",
          "kind": "active",
          "learn": 14,
          "max": 35,
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
      "id": "shillienoracle",
      "name": "ShillienOracle",
      "from": 20,
      "to": 39,
      "blurb": "El primer cambio de clase, y donde el personaje se vuelve de apoyo. Aparecen los dos venenos, el Recharge que le devuelve maná a la party, el control (Sleep y Dryad Root) y el grueso de los buffs.",
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
          "max": 30,
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
          "name": "Curse: Poison",
          "kind": "active",
          "learn": 20,
          "max": 72,
          "custom": true,
          "icon": "curse-poison",
          "desc": "Veneno concentrado sobre un solo enemigo: 2.800 de daño repartido en 18 segundos. Se acumula con Poisonous Cloud y puede rematar."
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
          "name": "Greater Empower",
          "kind": "active",
          "learn": 25,
          "max": 52,
          "icon": "greater-empower",
          "desc": "+75% de M.Atk. Para los magos de la party es el buff más grande que van a recibir."
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
          "name": "Focus",
          "kind": "active",
          "learn": 25,
          "max": 52,
          "icon": "focus",
          "desc": "+30% de probabilidad de crítico."
        },
        {
          "name": "Poisonous Cloud",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "custom": true,
          "icon": "poisonous-cloud",
          "desc": "Nube de veneno sobre un área: envenena hasta 8 enemigos en un radio de 200 por 2.264 de daño en 20 segundos. Se acumula con Curse: Poison."
        },
        {
          "name": "Dryad Root",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "icon": "dryad-root",
          "desc": "Raíces que inmovilizan al objetivo 6 segundos. No le impiden atacar ni castear, pero sí perseguirte."
        },
        {
          "name": "Surrender To Poison",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "icon": "surrender-to-poison",
          "desc": "Pudre las defensas del objetivo contra el veneno: sube un 30% la probabilidad de que le entren los venenos durante 30 segundos. Es el abridor."
        },
        {
          "name": "Recharge",
          "kind": "active",
          "learn": 30,
          "max": 74,
          "icon": "recharge",
          "desc": "Pasa tu propia energía a un compañero y le devuelve 782 de MP. No se puede usar sobre otra clase que también tenga Recharge."
        },
        {
          "name": "Vampiric Rage",
          "kind": "active",
          "learn": 30,
          "max": 72,
          "icon": "vampiric-rage",
          "desc": "+9 de absorción de vida al golpear."
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
          "name": "Resist Aqua",
          "kind": "active",
          "learn": 35,
          "max": 44,
          "icon": "resist-aqua",
          "desc": "+30 de resistencia al agua."
        }
      ]
    },
    {
      "id": "shillienelder",
      "name": "ShillienElder",
      "from": 40,
      "to": 75,
      "blurb": "La segunda clase consolida el rol: llegan las curas grandes, el Seal of Bloodsucker, la quema de maná y la meditación que te recarga a vos mismo.",
      "skills": [
        {
          "name": "Resist Poison",
          "kind": "active",
          "learn": 40,
          "max": 44,
          "icon": "resist-poison",
          "desc": "+50% de resistencia al veneno."
        },
        {
          "name": "Berserker Spirit",
          "kind": "active",
          "learn": 40,
          "max": 52,
          "icon": "berserker-spirit",
          "desc": "+16% de P.Atk. y M.Atk., +8% de velocidades, a cambio de -20% de defensas. Es para cuando hay que terminar rápido."
        },
        {
          "name": "Guidance",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "icon": "guidance",
          "desc": "+4 de precisión."
        },
        {
          "name": "Death Whisper",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "icon": "death-whisper",
          "desc": "+35% de daño crítico."
        },
        {
          "name": "Purify",
          "kind": "active",
          "learn": 44,
          "max": 62,
          "custom": true,
          "icon": "purify",
          "desc": "Saca veneno, sangrado, parálisis y aturdimiento. Es la limpieza amplia."
        },
        {
          "name": "Seal of Bloodsucker",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "icon": "seal-of-bloodsucker",
          "desc": "Maldición que hace fluir la vida del enemigo hacia vos: le drena el 2% de su HP máximo cada 2 segundos durante 40, y te lo da. Contra algo con mucha vida es la herramienta de desgaste más fuerte de la clase."
        },
        {
          "name": "Greater Heal",
          "kind": "active",
          "learn": 48,
          "max": 78,
          "custom": true,
          "icon": "greater-heal",
          "desc": "Cura 721 al instante y 993 más repartidos en el tiempo. La cura principal sobre un objetivo."
        },
        {
          "name": "Greater Group Heal",
          "kind": "active",
          "learn": 48,
          "max": 78,
          "custom": true,
          "icon": "greater-group-heal",
          "desc": "Lo mismo para toda la party: 577 al instante a cada uno y el resto en el tiempo."
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
          "name": "Invocation",
          "kind": "active",
          "learn": 56,
          "max": 72,
          "custom": true,
          "icon": "invocation",
          "desc": "Te sentás a meditar y recuperás 1.665 de MP cada 3,3 segundos durante 10: casi 5.000 en total. No podés moverte y te baja la P.Def. mientras dura."
        },
        {
          "name": "Holy Resistance",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "holy-resistance",
          "desc": "+20 de resistencia sagrada."
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
      "id": "shillien-saint",
      "name": "Shillien Saint",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase. Son pocas habilidades pero pesan: la profecía para la party, la limpieza de debuffs, el Mass Recharge, el Balance Life y las pasivas que hacen que el Saint pueda pelear con armadura ligera.",
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
          "name": "Shillien's Composure",
          "kind": "passive",
          "learn": 76,
          "custom": true,
          "icon": "shilliens-composure",
          "desc": "Con armadura ligera puesta, te cortan mucho menos el casteo cuando recibís daño. Es la pasiva que hace viable al Saint en armadura ligera."
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
          "name": "Block Shield",
          "kind": "active",
          "learn": 77,
          "icon": "block-shield",
          "desc": "Le baja un 15% la P.Def. al enemigo durante 10 segundos."
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
          "name": "Prophecy of Wind",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "prophecy-of-wind",
          "desc": "La profecía de la clase: +5% de P.Atk. y M.Atk., +8% de velocidad de ataque y casteo, +10% de crítico y de velocidad, más precisión."
        },
        {
          "name": "Cleanse",
          "kind": "active",
          "learn": 78,
          "icon": "cleanse",
          "desc": "Limpia los debuffs del objetivo. Consume un Einhasad Holy Water."
        },
        {
          "name": "Mass Recharge",
          "kind": "active",
          "learn": 80,
          "icon": "mass-recharge",
          "desc": "La versión para toda la party. Pide Spell Force nivel 3 y consume un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
