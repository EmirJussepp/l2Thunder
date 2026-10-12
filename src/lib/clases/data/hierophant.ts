// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const hierophant: ClassGuide = {
  "slug": "hierophant",
  "name": "Hierophant",
  "subtitle": "Humano · tercera clase de la rama del clérigo",
  "intro": "El que levanta a toda la party. Tiene la lista de buffs más larga del juego y la Prophecy of Fire, y en L2Thunder puede usar armadura pesada sin perder velocidad de casteo: es un soporte que aguanta la primera línea.",
  "facts": [
    {
      "label": "Camino",
      "value": "HumanMystic → Cleric → Prophet → Hierophant"
    },
    {
      "label": "Armadura",
      "value": "Pesada, túnica o ligera"
    },
    {
      "label": "Arma",
      "value": "Maza"
    },
    {
      "label": "Habilidades",
      "value": "75 en total: 52 activas y 23 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Buffs · aguante para un místico · inmunidad a debuffs"
    },
    {
      "label": "Floja en",
      "value": "Daño · curación grande"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Hierophant, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "desc": "Más velocidad de ataque con túnica puesta."
        },
        {
          "name": "Spellcraft",
          "kind": "passive",
          "learn": 1,
          "desc": "Duplica la velocidad de casteo con túnica puesta."
        },
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Mana Recovery",
          "kind": "passive",
          "learn": 1,
          "desc": "Más regeneración de MP con túnica puesta."
        },
        {
          "name": "Wind Strike",
          "kind": "active",
          "learn": 1,
          "max": 14,
          "desc": "El ataque mágico básico de la rama."
        },
        {
          "name": "Self Heal",
          "kind": "active",
          "learn": 1,
          "desc": "La cura de arranque, sobre uno mismo."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "desc": "Permite leer recetas comunes."
        },
        {
          "name": "Create Common Item",
          "kind": "passive",
          "learn": 5,
          "max": 70,
          "desc": "Fabrica ítems comunes hasta nivel 9."
        },
        {
          "name": "Anti Magic",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "desc": "+108 de M.Def."
        },
        {
          "name": "Armor Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 14,
          "desc": "+9,2 de P.Def."
        },
        {
          "name": "Weapon Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "desc": "+79,4 y +45% de P.Atk., +99,3 y +17% de M.Atk. Con arco o pole, -30% de velocidad de casteo y -9 de precisión."
        },
        {
          "name": "Heal",
          "kind": "active",
          "learn": 7,
          "max": 35,
          "desc": "Cura directa de 301. Barata y sin tiempo de espera."
        },
        {
          "name": "Cure Poison",
          "kind": "active",
          "learn": 7,
          "max": 35,
          "desc": "Saca el veneno. Cubre todos los venenos que puede tirar un jugador."
        },
        {
          "name": "Shield",
          "kind": "active",
          "learn": 7,
          "max": 44,
          "desc": "+15% de P.Def."
        },
        {
          "name": "Might",
          "kind": "active",
          "learn": 7,
          "max": 40,
          "desc": "+15% de P.Atk."
        },
        {
          "name": "Ice Bolt",
          "kind": "active",
          "learn": 7,
          "max": 14,
          "desc": "Golpe de hielo que además frena al objetivo."
        },
        {
          "name": "Battle Heal",
          "kind": "active",
          "learn": 14,
          "max": 35,
          "desc": "Misma potencia que Heal pero de casteo rápido: es la de emergencia."
        },
        {
          "name": "Group Heal",
          "kind": "active",
          "learn": 14,
          "max": 35,
          "desc": "Cura 241 a cada miembro de la party de una sola vez."
        },
        {
          "name": "Vampiric Touch",
          "kind": "active",
          "learn": 14,
          "desc": "Absorbe vida: te cura el 40% del daño que hace."
        },
        {
          "name": "Curse: Weakness",
          "kind": "active",
          "learn": 14,
          "custom": true,
          "desc": "-15% de P.Atk. durante 12 segundos."
        },
        {
          "name": "Expertise",
          "kind": "passive",
          "learn": 20,
          "max": 76,
          "desc": "Te deja usar equipo de grados cada vez más altos sin penalización, hasta el grado S."
        },
        {
          "name": "Divine Inspiration",
          "kind": "passive",
          "learn": 52,
          "max": 76,
          "desc": "Sube la cantidad de buffs que podés tener encima."
        }
      ]
    },
    {
      "id": "cleric",
      "name": "Cleric",
      "from": 20,
      "to": 39,
      "blurb": "La base del clérigo: curas, resurrección, los primeros buffs de party y el daño sagrado contra no-muertos.",
      "skills": [
        {
          "name": "Quick Recovery",
          "kind": "passive",
          "learn": 20,
          "max": 48,
          "desc": "-30% al tiempo de espera de los skills mágicos."
        },
        {
          "name": "Boost Mana",
          "kind": "passive",
          "learn": 20,
          "max": 72,
          "custom": true,
          "desc": "+800 de MP máximo."
        },
        {
          "name": "Robe Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "+87,4 de P.Def. con túnica."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "custom": true,
          "desc": "Con armadura ligera: +69,6 de P.Def., +91% de velocidad de casteo, +25% de velocidad de ataque y +20% de recuperación de MP."
        },
        {
          "name": "Resurrection",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "desc": "Revive un cadáver y le devuelve cerca del 20% de la experiencia perdida."
        },
        {
          "name": "Disrupt Undead",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "desc": "Daño sagrado contra no-muertos. En zonas de undead pega mucho más que Wind Strike."
        },
        {
          "name": "Kiss of Eva",
          "kind": "active",
          "learn": 20,
          "max": 52,
          "desc": "Multiplica por 7 el tiempo que se aguanta bajo el agua."
        },
        {
          "name": "Concentration",
          "kind": "active",
          "learn": 20,
          "max": 68,
          "desc": "Hace mucho más difícil que a un mago le corten el casteo cuando recibe daño."
        },
        {
          "name": "Acumen",
          "kind": "active",
          "learn": 20,
          "max": 48,
          "desc": "+23% de velocidad de casteo."
        },
        {
          "name": "Wind Walk",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "desc": "+33 de velocidad de movimiento."
        },
        {
          "name": "Fast Spell Casting",
          "kind": "passive",
          "learn": 25,
          "max": 56,
          "desc": "+18% de velocidad de casteo."
        },
        {
          "name": "Fast Mana Recovery",
          "kind": "passive",
          "learn": 25,
          "max": 74,
          "desc": "+3,4 a la regeneración de MP."
        },
        {
          "name": "Mental Shield",
          "kind": "active",
          "learn": 25,
          "max": 56,
          "desc": "+25% de resistencia a Hold, Sleep, Fear y ataques mentales."
        },
        {
          "name": "Holy Weapon",
          "kind": "active",
          "learn": 25,
          "custom": true,
          "desc": "Bendice el arma de un compañero: +80 de poder sagrado, que se aplica a los golpes normales y a los skills sin elemento propio."
        },
        {
          "name": "Sleep",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "desc": "Duerme a un enemigo 8 segundos. Cualquier daño lo despierta, y una vez despierto es casi imposible volver a dormirlo."
        },
        {
          "name": "Focus",
          "kind": "active",
          "learn": 25,
          "max": 52,
          "desc": "+30% de probabilidad de crítico."
        },
        {
          "name": "Dryad Root",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "desc": "Raíces que inmovilizan al objetivo 6 segundos. No le impiden atacar ni castear, pero sí perseguirte."
        },
        {
          "name": "Resist Wind",
          "kind": "active",
          "learn": 30,
          "max": 44,
          "desc": "+15 de resistencia al viento."
        },
        {
          "name": "Fast HP Recovery",
          "kind": "passive",
          "learn": 35,
          "max": 74,
          "desc": "+2,7 a la regeneración de HP."
        },
        {
          "name": "Berserker Spirit",
          "kind": "active",
          "learn": 35,
          "max": 52,
          "desc": "+16% de P.Atk. y M.Atk., +8% de velocidades, a cambio de -20% de defensas. Es para cuando hay que terminar rápido."
        },
        {
          "name": "Peace",
          "kind": "active",
          "learn": 35,
          "desc": "Le apacigua la mente al objetivo y le baja las ganas de atacar."
        }
      ]
    },
    {
      "id": "prophet",
      "name": "Prophet",
      "from": 40,
      "to": 75,
      "blurb": "La rama de los buffs: la lista larga que hace fuerte a toda la party, más las resistencias elementales.",
      "skills": [
        {
          "name": "Boost HP",
          "kind": "passive",
          "learn": 40,
          "max": 80,
          "desc": "+480 de HP máximo."
        },
        {
          "name": "Heavy Armor Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "custom": true,
          "desc": "Con armadura pesada: +56,1 de P.Def., +68% de velocidad de casteo y +25% de ataque. Es lo que hace viable al Hierophant de primera línea."
        },
        {
          "name": "Spiritual Guidance",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "desc": "Junta los espíritus que rodean al enemigo y se los tira encima. Cada impacto que entra suma una carga de fuerza, hasta 5."
        },
        {
          "name": "Explosion of Light",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "desc": "Detona las cargas acumuladas en un estallido de luz: cada carga extra suma un 25% de potencia, y con 5 duplica el golpe. Gasta todas las cargas."
        },
        {
          "name": "Invigor",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "custom": true,
          "desc": "Hace que los sangrados entren la mitad de las veces."
        },
        {
          "name": "Return",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "desc": "Te teletransporta al pueblo más cercano."
        },
        {
          "name": "Guidance",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "desc": "+4 de precisión."
        },
        {
          "name": "Death Whisper",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "desc": "+35% de daño crítico."
        },
        {
          "name": "Bless Shield",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "desc": "+50% de probabilidad de bloquear con escudo."
        },
        {
          "name": "Magic Barrier",
          "kind": "active",
          "learn": 44,
          "max": 52,
          "desc": "+30% de M.Def."
        },
        {
          "name": "Blessed Body",
          "kind": "active",
          "learn": 44,
          "max": 72,
          "desc": "+35% de HP máximo."
        },
        {
          "name": "Blessed Soul",
          "kind": "active",
          "learn": 44,
          "max": 70,
          "desc": "+20% de MP máximo."
        },
        {
          "name": "Haste",
          "kind": "active",
          "learn": 44,
          "max": 52,
          "desc": "+30% de velocidad de ataque."
        },
        {
          "name": "Word of Fear",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "desc": "Un grito que quiebra la voluntad de todos: hasta 8 enemigos cercanos huyen aterrados 6 segundos."
        },
        {
          "name": "Erase",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "desc": "Manda la invocación del enemigo a otra dimensión. Consume 5 Spirit Ore."
        },
        {
          "name": "Mana Burn",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "desc": "Quema 210 de MP del objetivo. Contra un mago o un sanador vale más que cualquier golpe."
        },
        {
          "name": "Greater Might",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "+10% de P.Atk. a tu objetivo. Consume 3 Spirit Ore."
        },
        {
          "name": "Greater Shield",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "+15% de P.Def. a tu objetivo. Consume 3 Spirit Ore."
        },
        {
          "name": "Holy Resistance",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "+20 de resistencia sagrada."
        },
        {
          "name": "Unholy Resistance",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "desc": "Escuda al aliado contra la oscuridad: +20 de resistencia."
        }
      ]
    },
    {
      "id": "hierophant",
      "name": "Hierophant",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase trae la Prophecy of Fire, la inmunidad a debuffs y la maestría de armadura pesada que lo pone en primera línea.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Health",
          "kind": "passive",
          "learn": 76,
          "desc": "Más resistencia a veneno y sangrado."
        },
        {
          "name": "Elemental Protection",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "desc": "Envuelve al aliado en guardas elementales: +15 de resistencia a los cuatro elementos."
        },
        {
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu INT."
        },
        {
          "name": "Spell Force",
          "kind": "active",
          "learn": 77,
          "desc": "Transfiere tu poder mágico a un compañero. Se corta si recibís daño, y es el requisito de Mass Recharge."
        },
        {
          "name": "Block Shield",
          "kind": "active",
          "learn": 77,
          "desc": "Le baja un 15% la P.Def. al enemigo durante 10 segundos."
        },
        {
          "name": "Block Wind Walk",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "desc": "Una ráfaga que le traba las piernas: -40% de velocidad por 10 segundos."
        },
        {
          "name": "Arcane Wisdom",
          "kind": "toggle",
          "learn": 78,
          "desc": "Mientras lo tenés activo: +10% de velocidad de casteo, +10% de P.Def. y -5% de MP en los skills. Consume 12 de MP cada 3,3 segundos."
        },
        {
          "name": "Divine Lore",
          "kind": "passive",
          "learn": 78,
          "desc": "-5% al costo de MP de los skills mágicos."
        },
        {
          "name": "Prophecy of Fire",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "desc": "La profecía del guerrero: +15% de HP y MP máximos, +12% de P.Atk., +10% de P.Def., +8% de velocidades y +5 de precisión para la party. El que la lanza suma además regeneración y M.Atk."
        },
        {
          "name": "Mystic Immunity",
          "kind": "active",
          "learn": 79,
          "custom": true,
          "desc": "Blinda el espíritu de un aliado: inmune a todos los debuffs durante 30 segundos. No frena el daño ni los efectos instantáneos como el robo de objetivo."
        },
        {
          "name": "Spell Turning",
          "kind": "active",
          "learn": 79,
          "desc": "Le corta el casteo a un objetivo cercano."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
