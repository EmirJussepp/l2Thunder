// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const cardinal: ClassGuide = {
  "slug": "cardinal",
  "name": "Cardinal",
  "subtitle": "Humano · tercera clase de la rama del clérigo",
  "intro": "El sanador puro. Las curas más grandes del juego, resurrección en masa, limpieza de debuffs y la invulnerabilidad que salva a quien esté por caer. Es la clase que hace que una party aguante lo que no debería.",
  "facts": [
    {
      "label": "Camino",
      "value": "HumanMystic → Cleric → Bishop → Cardinal"
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
      "value": "79 en total: 58 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Curación · resurrección · protección"
    },
    {
      "label": "Floja en",
      "value": "Daño · juego en solitario"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Cardinal, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 58,
          "desc": "Saca el veneno. Cubre todos los venenos que puede tirar un jugador."
        },
        {
          "name": "Shield",
          "kind": "active",
          "learn": 7,
          "max": 25,
          "desc": "+15% de P.Def."
        },
        {
          "name": "Might",
          "kind": "active",
          "learn": 7,
          "max": 20,
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
          "max": 74,
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
          "desc": "Multiplica por 7 el tiempo que se aguanta bajo el agua."
        },
        {
          "name": "Concentration",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "desc": "Hace mucho más difícil que a un mago le corten el casteo cuando recibe daño."
        },
        {
          "name": "Acumen",
          "kind": "active",
          "learn": 20,
          "max": 35,
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
          "max": 74,
          "desc": "Duerme a un enemigo 8 segundos. Cualquier daño lo despierta, y una vez despierto es casi imposible volver a dormirlo."
        },
        {
          "name": "Focus",
          "kind": "active",
          "learn": 25,
          "desc": "+30% de probabilidad de crítico."
        },
        {
          "name": "Dryad Root",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "desc": "Raíces que inmovilizan al objetivo 6 segundos. No le impiden atacar ni castear, pero sí perseguirte."
        },
        {
          "name": "Resist Wind",
          "kind": "active",
          "learn": 30,
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
          "desc": "+16% de P.Atk. y M.Atk., +8% de velocidades, a cambio de -20% de defensas. Es para cuando hay que terminar rápido."
        },
        {
          "name": "Peace",
          "kind": "active",
          "learn": 35,
          "max": 74,
          "desc": "Le apacigua la mente al objetivo y le baja las ganas de atacar."
        }
      ]
    },
    {
      "id": "bishop",
      "name": "Bishop",
      "from": 40,
      "to": 75,
      "blurb": "La rama de curación pura: las curas grandes, la limpieza de debuffs y el escudo celestial.",
      "skills": [
        {
          "name": "Might of Heaven",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Daño sagrado contra no-muertos."
        },
        {
          "name": "Requiem",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Un réquiem que calma a los no-muertos de alrededor."
        },
        {
          "name": "Greater Battle Heal",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Cura rápida de emergencia: 858 de potencia."
        },
        {
          "name": "Mass Resurrection",
          "kind": "active",
          "learn": 40,
          "max": 68,
          "desc": "Revive a los miembros caídos de la alianza y les devuelve cerca del 55% de la experiencia."
        },
        {
          "name": "Purify",
          "kind": "active",
          "learn": 44,
          "max": 62,
          "desc": "Saca veneno, sangrado, parálisis y aturdimiento. Es la limpieza amplia."
        },
        {
          "name": "Repose",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "desc": "Le baja las ganas de atacar a un no-muerto."
        },
        {
          "name": "Restore Life",
          "kind": "active",
          "learn": 44,
          "max": 56,
          "desc": "Le devuelve el 30% de la vida al objetivo."
        },
        {
          "name": "Vitalize",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "custom": true,
          "desc": "Energía vital que cierra la herida y quema lo que la infecta: cura 780 y además saca veneno y sangrado. Cubre todos los que puede tirar un jugador."
        },
        {
          "name": "Hold Undead",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "desc": "Paraliza no-muertos en el acto."
        },
        {
          "name": "Body of Avatar",
          "kind": "active",
          "learn": 48,
          "max": 72,
          "desc": "Sube un 35% el HP máximo de la party y la cura por esa misma cantidad en el acto."
        },
        {
          "name": "Trance",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "desc": "Arrastra al objetivo a un trance: dormido 15 segundos, y cualquier daño lo despierta."
        },
        {
          "name": "Erase",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "desc": "Manda la invocación del enemigo a otra dimensión. Consume 5 Spirit Ore."
        },
        {
          "name": "Magical Backfire",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "desc": "Le retuerce la magia para que todo le cueste el doble de MP durante 10 segundos."
        },
        {
          "name": "Mana Burn",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "desc": "Quema 210 de MP del objetivo. Contra un mago o un sanador vale más que cualquier golpe."
        },
        {
          "name": "Turn Undead",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "desc": "Los no-muertos huyen al ver tu naturaleza divina. Puede matar de un golpe. Consume 5 Spirit Ore."
        },
        {
          "name": "Major Heal",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "desc": "La cura grande sobre un objetivo: 946 de potencia. Consume un Spirit Ore."
        },
        {
          "name": "Invocation",
          "kind": "active",
          "learn": 56,
          "max": 72,
          "custom": true,
          "desc": "Te sentás a meditar y recuperás 1.665 de MP cada 3,3 segundos durante 10: casi 5.000 en total. No podés moverte y te baja la P.Def. mientras dura."
        },
        {
          "name": "Mana Storm",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "Les baja el MP a todos los enemigos cercanos."
        },
        {
          "name": "Major Group Heal",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "La cura grande para toda la party de un saque: 1.170 de potencia. Consume 4 Spirit Ore."
        },
        {
          "name": "Celestial Shield",
          "kind": "active",
          "learn": 64,
          "custom": true,
          "desc": "Vuelve invulnerable a tu objetivo durante 10 segundos: no se le puede hacer daño, no le entran debuffs y no le pueden robar los buffs."
        },
        {
          "name": "Benediction",
          "kind": "active",
          "learn": 66,
          "desc": "Regenera la vida de toda la party. Solo se puede usar con menos del 25% de tu MP."
        },
        {
          "name": "Prayer",
          "kind": "active",
          "learn": 66,
          "max": 74,
          "desc": "Bendice a la party para que las curas que reciba rindan un 12% más."
        }
      ]
    },
    {
      "id": "cardinal",
      "name": "Cardinal",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra con la resurrección en masa, el campo de purificación y el milagro para toda la alianza.",
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
          "name": "Balance Life",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "desc": "Reparte la vida entre todos los de la party: los que están a punto de morir suben y los que están enteros bajan. Salva situaciones que ninguna cura salva."
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
          "name": "Divine Protection",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "desc": "Envuelve al aliado en luz divina: +20 de resistencia sagrada y oscura."
        },
        {
          "name": "Mass Block Shield",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "desc": "Derriba la guardia de los de alrededor: -10% de P.Def. a hasta 8 enemigos."
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
          "name": "Mass Block Wind Walk",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "desc": "Les pesa las piernas a los de alrededor: -10% de velocidad a hasta 8 enemigos."
        },
        {
          "name": "Cleanse",
          "kind": "active",
          "learn": 78,
          "desc": "Limpia los debuffs del objetivo. Consume un Einhasad Holy Water."
        },
        {
          "name": "Salvation",
          "kind": "active",
          "learn": 79,
          "desc": "Revive al objetivo con la vida llena y conservando sus buffs. Consume 2 Einhasad Holy Water."
        },
        {
          "name": "Purification Field",
          "kind": "active",
          "learn": 80,
          "desc": "Planta un símbolo que limpia los debuffs de todos los aliados del área. Pide Spell Force nivel 2 y un Magic Symbol."
        },
        {
          "name": "Miracle",
          "kind": "active",
          "learn": 80,
          "desc": "Planta un símbolo que cura a todos los aliados del área. Pide Spell Force nivel 2 y un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
