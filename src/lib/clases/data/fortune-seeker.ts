// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const fortuneSeeker: ClassGuide = {
  "slug": "fortune-seeker",
  "name": "Fortune Seeker",
  "subtitle": "Enano · tercera clase de la rama del carroñero",
  "intro": "El que saca del juego lo que nadie más puede sacar. Marca al enemigo con Spoil y, cuando muere, le arranca un botín que no suelta de ninguna otra forma. Con Spoil Festival marca a ocho de una vez, así que no es un truco: es una profesión. Y pega bastante más de lo que su fama sugiere.",
  "facts": [
    {
      "label": "Camino",
      "value": "DwarvenFighter → Scavenger → BountyHunter → Fortune Seeker"
    },
    {
      "label": "Armadura",
      "value": "Ligera o pesada"
    },
    {
      "label": "Arma",
      "value": "Mazo o espada"
    },
    {
      "label": "Habilidades",
      "value": "59 en total: 33 activas y 26 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Botín exclusivo · economía · daño decente"
    },
    {
      "label": "Floja en",
      "value": "Apoyo a la party · defensa mágica"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Fortune Seeker, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "dwarvenfighter",
      "name": "DwarvenFighter",
      "from": 1,
      "to": 19,
      "blurb": "La base de los dos enanos. Acá están la capacidad de carga, la velocidad que compensa el tamaño y el primer nivel de Create Item.",
      "skills": [
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "icon": "lucky",
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Dwarven Craft",
          "kind": "active",
          "learn": 1,
          "icon": "dwarven-craft",
          "desc": "Abre el libro de recetas enanas. Es la puerta de entrada a todo el oficio."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "icon": "common-craft",
          "desc": "Permite leer recetas comunes."
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
          "name": "Create Item",
          "kind": "passive",
          "learn": 5,
          "custom": true,
          "icon": "create-item",
          "desc": "Fabrica objetos a partir de recetas. Cada nivel habilita un grado más de equipo. ⚠ Mientras el grado S esté capeado, el tope de fabricación es el grado A."
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
          "name": "Expand Dwarven Craft",
          "kind": "passive",
          "learn": 5,
          "max": 62,
          "icon": "expand-dwarven-craft",
          "desc": "Sube a 48 la cantidad de recetas enanas que podés tener registradas al mismo tiempo."
        },
        {
          "name": "Sweeper",
          "kind": "active",
          "learn": 10,
          "icon": "sweeper",
          "desc": "Recoge el botín del cadáver que marcaste con Spoil. Sin esto, el Spoil no sirve de nada."
        },
        {
          "name": "Weight Limit",
          "kind": "passive",
          "learn": 10,
          "max": 46,
          "icon": "weight-limit",
          "desc": "Multiplica por 4 lo que podés cargar. Es la pasiva que convierte al enano en la mula del servidor."
        },
        {
          "name": "Spoil",
          "kind": "active",
          "learn": 10,
          "max": 72,
          "icon": "spoil",
          "desc": "Marca al enemigo para robarle. Si muere marcado, el Sweeper le saca un botín que no suelta de otra forma. Es el motivo de existir de la clase."
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
      "id": "scavenger",
      "name": "Scavenger",
      "from": 20,
      "to": 39,
      "blurb": "El camino del carroñero: el Spoil y el Sweeper, que son el motivo de existir de la rama, más las primeras pasivas de mazo.",
      "skills": [
        {
          "name": "Dash",
          "kind": "active",
          "learn": 20,
          "icon": "dash",
          "desc": "+25 de velocidad por un rato."
        },
        {
          "name": "Mortal Blow",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "mortal-blow",
          "desc": "El golpe mortal básico de daga."
        },
        {
          "name": "Bandage",
          "kind": "active",
          "learn": 20,
          "max": 62,
          "icon": "bandage",
          "desc": "Te vendás la herida y te cortás el sangrado."
        },
        {
          "name": "Stun Attack",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "stun-attack",
          "desc": "Mazazo que deja al objetivo aturdido. Mientras dura no se lo puede volver a aturdir."
        },
        {
          "name": "Blunt Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "icon": "blunt-mastery",
          "desc": "+129 de P.Atk. con mazo, más probabilidad de aturdir y más daño crítico."
        },
        {
          "name": "Boost HP",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "boost-hp",
          "desc": "+480 de HP máximo."
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
          "name": "Polearm Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "icon": "polearm-mastery",
          "desc": "+129,3 de P.Atk. con lanza."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 72,
          "custom": true,
          "icon": "light-armor-mastery-4d45b3",
          "desc": "Con armadura ligera: +65,6 de P.Def., +6 de velocidad, +7 de evasión y la mitad de MP en los skills. Con pesada en cambio perdés velocidad, ataque y evasión."
        },
        {
          "name": "Wild Sweep",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "wild-sweep",
          "desc": "Barrido de lanza que agarra a varios enemigos de adelante: 1.820 de potencia."
        },
        {
          "name": "Vicious Stance",
          "kind": "toggle",
          "learn": 20,
          "max": 76,
          "custom": true,
          "icon": "vicious-stance",
          "desc": "Postura despiadada: +609 de daño crítico con un goteo continuo de MP."
        },
        {
          "name": "Bleed",
          "kind": "active",
          "learn": 24,
          "max": 70,
          "custom": true,
          "icon": "bleed",
          "desc": "Herida que sangra: 210 de daño cada 3,3 segundos durante 15 (840 en total) y -20% de velocidad."
        },
        {
          "name": "Vital Force",
          "kind": "passive",
          "learn": 24,
          "max": 72,
          "icon": "vital-force",
          "desc": "Sentado recuperás +6,7 de HP y +2,5 de MP por tick."
        },
        {
          "name": "Fast HP Recovery",
          "kind": "passive",
          "learn": 24,
          "max": 74,
          "icon": "fast-hp-recovery",
          "desc": "+2,7 a la regeneración de HP."
        },
        {
          "name": "Ultimate Evasion",
          "kind": "active",
          "learn": 28,
          "max": 76,
          "custom": true,
          "icon": "ultimate-evasion",
          "desc": "+25 de evasión, +80% de resistencia al robo de buffs y 30% de esquivar skills, físicos y mágicos. Dura 30 segundos."
        },
        {
          "name": "Spoil Festival",
          "kind": "active",
          "learn": 28,
          "max": 74,
          "icon": "spoil-festival",
          "desc": "Marca de una sola vez a hasta 8 enemigos en un radio de 200. Es lo que convierte el robo de un truco en una profesión."
        }
      ]
    },
    {
      "id": "bountyhunter",
      "name": "BountyHunter",
      "from": 40,
      "to": 75,
      "blurb": "La segunda clase profesionaliza el robo: el Spoil Festival marca a ocho enemigos de una vez, y llegan las máquinas de asedio.",
      "skills": [
        {
          "name": "Unlock",
          "kind": "active",
          "learn": 40,
          "max": 72,
          "icon": "unlock",
          "desc": "Abre puertas de nivel 1 a 3 y cofres. Consume 17 Thief Keys."
        },
        {
          "name": "Backstab",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "backstab",
          "desc": "Puñalada por la espalda: 5.479 de potencia y puede matar de un golpe. Requiere daga."
        },
        {
          "name": "Fake Death",
          "kind": "toggle",
          "learn": 40,
          "custom": true,
          "icon": "fake-death",
          "desc": "Te tirás al piso como muerto y los monstruos te pierden el interés. Además te saca hasta 10 debuffs."
        },
        {
          "name": "Power Break",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "power-break",
          "desc": "Le arranca el arma de las manos al enemigo durante 6 segundos. Acierta el 80% de las veces."
        },
        {
          "name": "Battle Roar",
          "kind": "active",
          "learn": 40,
          "max": 70,
          "custom": true,
          "icon": "battle-roar",
          "desc": "Un rugido que te hincha: +35% de HP máximo y te cura esa misma cantidad. Dura 600 segundos."
        },
        {
          "name": "Critical Chance",
          "kind": "passive",
          "learn": 40,
          "max": 49,
          "icon": "critical-chance",
          "desc": "+40% de probabilidad de crítico."
        },
        {
          "name": "Critical Power",
          "kind": "passive",
          "learn": 40,
          "max": 64,
          "icon": "critical-power",
          "desc": "+384 de daño crítico."
        },
        {
          "name": "Dagger Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "icon": "dagger-mastery",
          "desc": "+112,8 de P.Atk. con daga."
        },
        {
          "name": "Silent Move",
          "kind": "toggle",
          "learn": 40,
          "custom": true,
          "icon": "silent-move",
          "desc": "Desaparecés de la vista: jugadores y monstruos te pierden de vista y el que te tenía targeteado te suelta. Se rompe al atacar. -60% de velocidad y goteo de MP. No se puede activar en combate."
        },
        {
          "name": "Deadly Blow",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "deadly-blow",
          "desc": "Golpe de daga de 5.479 de potencia con posibilidad de golpe letal."
        },
        {
          "name": "Agile Movement",
          "kind": "passive",
          "learn": 40,
          "icon": "agile-movement",
          "desc": "Más velocidad de movimiento y de ataque. Es lo que compensa que el enano sea el más bajito del juego."
        },
        {
          "name": "Thrill Fight",
          "kind": "active",
          "learn": 46,
          "max": 55,
          "custom": true,
          "icon": "thrill-fight",
          "desc": "+15 de velocidad y +10% de velocidad de ataque a cambio de -8% de P.Def., durante 5 minutos."
        },
        {
          "name": "Boost Evasion",
          "kind": "passive",
          "learn": 46,
          "max": 58,
          "icon": "boost-evasion",
          "desc": "+4 de evasión."
        },
        {
          "name": "Summon Treasure Key",
          "kind": "active",
          "learn": 46,
          "max": 74,
          "icon": "summon-treasure-key",
          "desc": "Fabrica 2 o 3 llaves de cofre de grado 6 a 8. Consume 6 Thief Keys."
        },
        {
          "name": "Trick",
          "kind": "active",
          "learn": 49,
          "max": 74,
          "icon": "trick",
          "desc": "Le saca al enemigo las ganas de atacar y le quita el objetivo. Requiere daga."
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
          "name": "Escape Shackle",
          "kind": "active",
          "learn": 60,
          "icon": "escape-shackle",
          "desc": "Te libera de un estado de inmovilización."
        }
      ]
    },
    {
      "id": "fortune-seeker",
      "name": "Fortune Seeker",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase trae el Spoil Crush —pegar y marcar en el mismo golpe—, el Crush of Doom y el Cañón Swoop.",
      "skills": [
        {
          "name": "Acrobatic Move",
          "kind": "passive",
          "learn": 76,
          "icon": "acrobatic-move",
          "desc": "+6 de evasión mientras corrés."
        },
        {
          "name": "Lionheart",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "lionheart",
          "desc": "Tu ánimo no se quiebra: +60 de resistencia a aturdimiento, raíz, sueño y parálisis, y +60% contra el robo de buffs. Dura 30 segundos."
        },
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
          "name": "Lethal Blow",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "lethal-blow",
          "desc": "Daga directa a un punto vital: 9.814 de potencia, 1% de muerte instantánea y 2% de partirle el HP y el CP a la mitad."
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
          "name": "Bluff",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "bluff",
          "desc": "Una finta que gira al objetivo, le cancela el target y lo aturde 3 segundos. 40% de borrarle además el odio que te tiene. Requiere daga."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "icon": "battle-force",
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Focus Death",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "focus-death",
          "desc": "Postura que cambia precisión por letalidad: +30% de probabilidad de golpe y -15% de crítico, con +50% de daño crítico por la espalda. Solo una postura Focus a la vez."
        },
        {
          "name": "Focus Chance",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "focus-chance",
          "desc": "Postura de daga: tu crítico y tus golpes dependen de dónde estés parado. +30% por detrás, +15% de costado, -15% de frente. Solo podés tener una postura Focus activa."
        },
        {
          "name": "Assassination",
          "kind": "passive",
          "learn": 78,
          "icon": "assassination",
          "desc": "+70 de P.Atk. con daga y +20% de probabilidad de que entren los golpes de espalda."
        },
        {
          "name": "Symbol of Resistance",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-resistance",
          "desc": "Planta un símbolo que protege a los que estén cerca. Media hora de espera."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
