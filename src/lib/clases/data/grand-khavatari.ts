// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const grandKhavatari: ClassGuide = {
  "slug": "grand-khavatari",
  "name": "Grand Khavatari",
  "subtitle": "Orco · tercera clase de la rama del monje",
  "intro": "Pelea a puño limpio y junta energía mientras lo hace. Cada carga es munición para los golpes de fuerza, y el Hurricane Assault ignora el escudo del enemigo. Arriba de todo eso tiene el Force Barrier: diez segundos de invulnerabilidad real.",
  "facts": [
    {
      "label": "Camino",
      "value": "OrcFighter → OrcMonk → Tyrant → Grand Khavatari"
    },
    {
      "label": "Armadura",
      "value": "Ligera"
    },
    {
      "label": "Arma",
      "value": "Puños"
    },
    {
      "label": "Habilidades",
      "value": "50 en total: 33 activas y 17 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño a quemarropa · ignora escudos · invulnerabilidad"
    },
    {
      "label": "Floja en",
      "value": "Alcance · apoyo a la party"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Grand Khavatari, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "orcfighter",
      "name": "OrcFighter",
      "from": 1,
      "to": 19,
      "blurb": "La base de los dos guerreros orcos. Acá están la dureza de la raza, la resistencia a los debuffs y el primer tótem.",
      "skills": [
        {
          "name": "Toughness",
          "kind": "passive",
          "learn": 1,
          "icon": "toughness",
          "desc": "+20% de resistencia a inmovilización, sueño y veneno. Es la dureza orca, y viene de arranque."
        },
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "icon": "lucky",
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "icon": "common-craft",
          "desc": "Permite leer recetas comunes."
        },
        {
          "name": "Power Strike",
          "kind": "active",
          "learn": 5,
          "max": 15,
          "custom": true,
          "icon": "power-strike",
          "desc": "El golpe cargado básico de espada o mazo: 870 de potencia."
        },
        {
          "name": "Iron Punch",
          "kind": "active",
          "learn": 5,
          "max": 36,
          "icon": "iron-punch",
          "desc": "El puñetazo básico del monje orco."
        },
        {
          "name": "Weapon Mastery",
          "kind": "passive",
          "learn": 5,
          "max": 15,
          "icon": "weapon-mastery",
          "desc": "+8,5% y +4 de P.Atk."
        },
        {
          "name": "Armor Mastery",
          "kind": "passive",
          "learn": 5,
          "max": 15,
          "icon": "armor-mastery-9bf297",
          "desc": "Más defensa con equipo pesado, y defensa y evasión con equipo ligero."
        },
        {
          "name": "Relax",
          "kind": "toggle",
          "learn": 5,
          "icon": "relax",
          "desc": "Sentado, +5 a la regeneración de HP."
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
          "name": "Iron Body",
          "kind": "passive",
          "learn": 15,
          "icon": "iron-body",
          "desc": "-40% al daño que recibís dentro de las zonas de daño."
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
      "id": "orcmonk",
      "name": "OrcMonk",
      "from": 20,
      "to": 39,
      "blurb": "El camino del monje: puños, los primeros golpes aturdidores y las pasivas de puño.",
      "skills": [
        {
          "name": "Wolf Spirit Totem",
          "kind": "active",
          "learn": 20,
          "custom": true,
          "icon": "wolf-spirit-totem",
          "desc": "El espíritu del lobo: +20% de P.Atk. y más velocidad durante 2 minutos."
        },
        {
          "name": "Cripple",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "cripple",
          "desc": "Le quiebra la pierna al enemigo: -25% de velocidad de movimiento durante 15 segundos. Acierta el 80%."
        },
        {
          "name": "Stunning Fist",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "stunning-fist",
          "desc": "Puñetazo que aturde 9 segundos. Acierta la mitad de las veces."
        },
        {
          "name": "Fist Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "fist-mastery",
          "desc": "+129 de P.Atk. con puños."
        },
        {
          "name": "Boost Mana",
          "kind": "passive",
          "learn": 20,
          "max": 60,
          "custom": true,
          "icon": "boost-mana",
          "desc": "+800 de MP máximo."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "light-armor-mastery-4d45b3",
          "desc": "Con armadura ligera: +65,6 de P.Def., +6 de velocidad, +7 de evasión y la mitad de MP en los skills. Con pesada en cambio perdés velocidad, ataque y evasión."
        },
        {
          "name": "Agile Movement",
          "kind": "passive",
          "learn": 20,
          "max": 40,
          "icon": "agile-movement",
          "desc": "Más velocidad de movimiento y de ataque. Es lo que compensa que el enano sea el más bajito del juego."
        },
        {
          "name": "Focused Force",
          "kind": "active",
          "learn": 24,
          "max": 72,
          "icon": "focused-force",
          "desc": "Acumula una carga de energía. Hasta 7, y son la munición de todos los golpes de fuerza."
        },
        {
          "name": "Force Blaster",
          "kind": "active",
          "learn": 24,
          "max": 74,
          "icon": "force-blaster",
          "desc": "Descarga de energía sobre un objetivo: 2.131 de potencia a 600 de distancia, con 15% de crítico garantizado."
        },
        {
          "name": "Bear Spirit Totem",
          "kind": "active",
          "learn": 28,
          "custom": true,
          "icon": "bear-spirit-totem",
          "desc": "El espíritu del oso: +20% de P.Def. y de HP durante 2 minutos."
        },
        {
          "name": "Boost Attack Speed",
          "kind": "passive",
          "learn": 36,
          "max": 58,
          "icon": "boost-attack-speed",
          "desc": "+10% de velocidad de ataque."
        },
        {
          "name": "Hurricane Assault",
          "kind": "active",
          "learn": 36,
          "max": 74,
          "custom": true,
          "icon": "hurricane-assault",
          "desc": "Asalto de 3.196 de potencia que ignora el escudo del enemigo. Es el golpe que no se bloquea."
        }
      ]
    },
    {
      "id": "tyrant",
      "name": "Tyrant",
      "from": 40,
      "to": 75,
      "blurb": "La segunda clase es donde aparece la energía: se acumulan cargas y se gastan en golpes de fuerza. También llegan los tótems grandes.",
      "skills": [
        {
          "name": "Burning Fist",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "burning-fist",
          "desc": "Puño ardiente de 3.090 de potencia a quemarropa."
        },
        {
          "name": "Soul Breaker",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "soul-breaker",
          "desc": "Rompe-almas de 4.200 de potencia que además aturde 3 segundos. Acierta el 85%."
        },
        {
          "name": "Puma Spirit Totem",
          "kind": "active",
          "learn": 40,
          "custom": true,
          "icon": "puma-spirit-totem",
          "desc": "El espíritu del puma: más velocidad y +20% de crítico durante 2 minutos."
        },
        {
          "name": "Force Burst",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "icon": "force-burst",
          "desc": "Descarga en cono frente a vos: hasta 8 enemigos y 533 de potencia cada uno."
        },
        {
          "name": "Fist Fury",
          "kind": "toggle",
          "learn": 43,
          "icon": "fist-fury",
          "desc": "Mientras lo tenés activo: +25% de velocidad de ataque, a cambio de que te vaya comiendo la vida."
        },
        {
          "name": "Ogre Spirit Totem",
          "kind": "active",
          "learn": 46,
          "custom": true,
          "icon": "ogre-spirit-totem",
          "desc": "El espíritu del ogro: +20% de ataque y defensa a cambio de 30% menos de velocidad de casteo. Dos minutos."
        },
        {
          "name": "Force Storm",
          "kind": "active",
          "learn": 49,
          "max": 74,
          "icon": "force-storm",
          "desc": "Tormenta de energía a 500 de distancia sobre hasta 8 enemigos."
        },
        {
          "name": "Punch of Doom",
          "kind": "active",
          "learn": 55,
          "max": 72,
          "custom": true,
          "icon": "punch-of-doom",
          "desc": "El golpe final: 9.132 de potencia y aturdimiento de 4 segundos. Dos minutos de espera."
        },
        {
          "name": "Zealot",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "zealot",
          "desc": "Fanatismo: +30 de velocidad, +30% de crítico, +150 de daño crítico y el doble de furia, a cambio de recibir la mitad de curación. Un minuto, y cinco de espera."
        },
        {
          "name": "Infernal Form",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "infernal-form",
          "desc": "A un compañero: +3% de P.Atk. y de M.Def. durante 5 minutos."
        },
        {
          "name": "War Frenzy",
          "kind": "toggle",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "war-frenzy",
          "desc": "Postura que te templa la cabeza: +15% de resistencia al aturdimiento y +20% al sueño, con goteo de MP."
        },
        {
          "name": "Break Duress",
          "kind": "active",
          "learn": 60,
          "max": 66,
          "icon": "break-duress",
          "desc": "Te sacás de encima las raíces y los frenos. Es la respuesta orca a que te quieran dejar quieto."
        },
        {
          "name": "Rabbit Spirit Totem",
          "kind": "active",
          "learn": 62,
          "custom": true,
          "icon": "rabbit-spirit-totem",
          "desc": "El espíritu del conejo: +30% de velocidad y mucha evasión, a cambio de pegar más flojo. Dos minutos."
        },
        {
          "name": "Bison Spirit Totem",
          "kind": "active",
          "learn": 68,
          "custom": true,
          "icon": "bison-spirit-totem",
          "desc": "El espíritu del bisonte: +43% de HP máximo y mucha defensa durante 3 minutos. Es el tótem de aguante."
        },
        {
          "name": "Hawk Spirit Totem",
          "kind": "active",
          "learn": 74,
          "custom": true,
          "icon": "hawk-spirit-totem",
          "desc": "El espíritu del halcón: +20% de precisión y alcance durante 2 minutos. Cinco minutos de espera."
        }
      ]
    },
    {
      "id": "grand-khavatari",
      "name": "Grand Khavatari",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra con el Raging Force, que recarga siete cargas de una vez, el Punch of Doom y el Force Barrier.",
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
          "name": "Fortitude",
          "kind": "toggle",
          "learn": 76,
          "custom": true,
          "icon": "fortitude",
          "desc": "Postura que te endurece: +10% de resistencia al aturdimiento y +20% a la parálisis, con goteo de MP."
        },
        {
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "icon": "skill-mastery",
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu STR."
        },
        {
          "name": "Riposte Stance",
          "kind": "toggle",
          "learn": 77,
          "custom": true,
          "icon": "riposte-stance",
          "desc": "Devolvés con el arma lo que te pegan, y tenés chance de reflejar también buffs y debuffs. A cambio perdés velocidad y precisión."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "icon": "battle-force",
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Raging Force",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "raging-force",
          "desc": "Golpe a distancia que te devuelve 7 cargas de energía de una vez. Es el botón de recarga del Khavatari."
        },
        {
          "name": "Master of Combat",
          "kind": "passive",
          "learn": 78,
          "icon": "master-of-combat",
          "desc": "+80 de P.Atk. y +5% de CP máximo con espada, mazo, lanza, espadas dobles o puños."
        },
        {
          "name": "Force Meditation",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "force-meditation",
          "desc": "Te plantás a meditar: no te podés mover y perdés el 80% de la P.Def., pero recuperás vida y maná sin parar durante un minuto."
        },
        {
          "name": "Force Barrier",
          "kind": "active",
          "learn": 79,
          "custom": true,
          "icon": "force-barrier",
          "desc": "Invulnerable durante 10 segundos. Quince minutos de espera: es la carta que se juega una vez por pelea."
        },
        {
          "name": "Symbol of Energy",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-energy",
          "desc": "Planta un símbolo que sube la P.Atk. y la carga de los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
