// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const stormScreamer: ClassGuide = {
  "slug": "storm-screamer",
  "name": "Storm Screamer",
  "subtitle": "Elfo Oscuro · tercera clase de la rama del mago",
  "intro": "El mago de viento. Es el que más rápido castea de los tres magos de ataque: el Hurricane tiene 2 segundos de espera. Cambia el control del Mystic Muse y la potencia bruta del Archmage por cadencia.",
  "facts": [
    {
      "label": "Camino",
      "value": "DarkMystic → DarkWizard → Spellhowler → Storm Screamer"
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
      "value": "68 en total: 46 activas y 22 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Cadencia de casteo · daño sostenido · área"
    },
    {
      "label": "Floja en",
      "value": "Aguante · pelea de cerca"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Storm Screamer, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "name": "Summon Shadow",
          "kind": "active",
          "learn": 20,
          "max": 35,
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
          "max": 35,
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
          "max": 35,
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
          "name": "Body To Mind",
          "kind": "active",
          "learn": 25,
          "max": 66,
          "custom": true,
          "icon": "body-to-mind",
          "desc": "Quemás tu propia carne para rellenar la cabeza: recuperás 296 de MP. En L2Thunder cuesta 1,12 de HP por cada MP, no 6: antes no valía la pena usarlo."
        },
        {
          "name": "Resist Aqua",
          "kind": "active",
          "learn": 25,
          "max": 44,
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
          "max": 74,
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
          "icon": "mighty-servitor",
          "desc": "+15% de P.Atk. a la invocación durante 2 horas."
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
          "max": 74,
          "custom": true,
          "icon": "curse-chaos",
          "desc": "-12 de precisión durante 15 segundos."
        }
      ]
    },
    {
      "id": "spellhowler",
      "name": "Spellhowler",
      "from": 40,
      "to": 75,
      "blurb": "El viento pasa a ser el arma: el Hurricane, la tormenta en área y los golpes de oscuridad.",
      "skills": [
        {
          "name": "Silence",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "silence",
          "desc": "Le sella la magia 4 segundos: no puede castear, pero los skills físicos le siguen funcionando."
        },
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
          "name": "Vampiric Claw",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "vampiric-claw",
          "desc": "Garras de energía oscura: te curan el 40% del daño que hacen."
        },
        {
          "name": "Hurricane",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "hurricane",
          "desc": "Huracán de 900 de alcance. El ataque de viento principal del Storm Screamer."
        },
        {
          "name": "Shadow Flare",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "shadow-flare",
          "desc": "La versión grande del ataque oscuro, con 900 de alcance."
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
          "name": "Tempest",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "icon": "tempest",
          "desc": "Tormenta sobre un área: alcanza hasta 8 enemigos en un radio de 200."
        },
        {
          "name": "Curse Death Link",
          "kind": "active",
          "learn": 52,
          "max": 74,
          "icon": "curse-death-link",
          "desc": "Le pasás tu dolor al enemigo: cuanto menos vida te queda, más fuerte pega."
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
          "name": "Seed of Wind",
          "kind": "active",
          "learn": 66,
          "custom": true,
          "icon": "seed-of-wind",
          "desc": "Absorbés la semilla del viento y el aturdimiento se te sacude de encima: se puede lanzar incluso aturdido y te libera. +800 de P.Def. y M.Def. por 15 segundos, y habilita el Demon Wind."
        },
        {
          "name": "Demon Wind",
          "kind": "active",
          "learn": 70,
          "custom": true,
          "icon": "demon-wind",
          "desc": "Viento demoníaco de 220 de potencia que además le corta a la mitad la curación que recibe durante 30 segundos. Pide Seed of Wind."
        },
        {
          "name": "Elemental Storm",
          "kind": "active",
          "learn": 72,
          "icon": "elemental-storm",
          "desc": "Tormenta elemental de 150 de potencia y 900 de alcance."
        }
      ]
    },
    {
      "id": "storm-screamer",
      "name": "Storm Screamer",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra con el Demon Wind, el vórtice de viento, la sinfonía elemental y el Cyclone.",
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
          "name": "Dark Vortex",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "dark-vortex",
          "desc": "Vórtice de oscuridad: hace daño oscuro, te cura el 50% de lo que pega y le baja 30 la resistencia a la oscuridad."
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
          "name": "Wind Vortex",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "wind-vortex",
          "desc": "Vórtice de viento: hace daño y le baja 10% la velocidad, 6% el ataque, 8% el casteo y 20 la resistencia al viento."
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
          "name": "Cyclone",
          "kind": "active",
          "learn": 80,
          "custom": true,
          "icon": "cyclone",
          "desc": "Ciclón que se planta en el piso y castiga a todo lo que haya en un radio de 200 con 500 de potencia. Media hora de espera."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
