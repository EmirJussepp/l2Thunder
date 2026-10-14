// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const ghostHunter: ClassGuide = {
  "slug": "ghost-hunter",
  "name": "Ghost Hunter",
  "subtitle": "Elfo Oscuro · tercera clase de la rama del asesino",
  "intro": "El daguero que pega más fuerte de los tres. No se esconde como el Adventurer ni esquiva como el Wind Rider: entra, revienta por la espalda y se banca el cambio. El Fatal Counter le da un último golpe brutal cuando está por morir.",
  "facts": [
    {
      "label": "Camino",
      "value": "DarkFighter → Assassin → AbyssWalker → Ghost Hunter"
    },
    {
      "label": "Armadura",
      "value": "Ligera"
    },
    {
      "label": "Arma",
      "value": "Daga"
    },
    {
      "label": "Habilidades",
      "value": "60 en total: 37 activas y 23 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño por la espalda · golpe mortal · remate"
    },
    {
      "label": "Floja en",
      "value": "Aguante · daño en área"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Ghost Hunter, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "darkfighter",
      "name": "DarkFighter",
      "from": 1,
      "to": 19,
      "blurb": "La base de todos los guerreros elfos oscuros. El veneno, la confusión, el robo de vida y el Shadow Sense, que es la visión nocturna propia de la raza.",
      "skills": [
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
          "name": "Mortal Blow",
          "kind": "active",
          "learn": 5,
          "max": 36,
          "icon": "mortal-blow",
          "desc": "El golpe mortal básico de daga."
        },
        {
          "name": "Power Shot",
          "kind": "active",
          "learn": 5,
          "max": 36,
          "icon": "power-shot",
          "desc": "El disparo cargado básico: 3.675 de potencia."
        },
        {
          "name": "Defense Aura",
          "kind": "active",
          "learn": 5,
          "max": 20,
          "icon": "defense-aura",
          "desc": "+12% de P.Def."
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
          "name": "Create Common Item",
          "kind": "passive",
          "learn": 5,
          "max": 70,
          "icon": "create-common-item",
          "desc": "Fabrica ítems comunes hasta nivel 9."
        },
        {
          "name": "Attack Aura",
          "kind": "active",
          "learn": 10,
          "max": 28,
          "icon": "attack-aura",
          "desc": "+12% de P.Atk."
        },
        {
          "name": "Drain Health",
          "kind": "active",
          "learn": 15,
          "max": 74,
          "icon": "drain-health",
          "desc": "Transfiere vida del objetivo hacia vos: te cura el 80% del daño que hacés."
        },
        {
          "name": "Shadow Sense",
          "kind": "passive",
          "learn": 15,
          "icon": "shadow-sense",
          "desc": "De noche ves más lejos. Es pasivo y propio de los elfos oscuros."
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
      "id": "assassin",
      "name": "Assassin",
      "from": 20,
      "to": 39,
      "blurb": "El camino del asesino: daga, golpe por la espalda y las primeras pasivas de letalidad. De acá salen el Ghost Hunter, el Ghost Sentinel y el Spectral Dancer.",
      "skills": [
        {
          "name": "Dash",
          "kind": "active",
          "learn": 20,
          "icon": "dash",
          "desc": "+25 de velocidad por un rato."
        },
        {
          "name": "Unlock",
          "kind": "active",
          "learn": 20,
          "max": 72,
          "icon": "unlock",
          "desc": "Abre puertas de nivel 1 a 3 y cofres. Consume 17 Thief Keys."
        },
        {
          "name": "Long Shot",
          "kind": "passive",
          "learn": 20,
          "icon": "long-shot",
          "desc": "+200 de alcance con arco."
        },
        {
          "name": "Poison",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "poison",
          "desc": "Veneno sobre un objetivo: 240 de daño repartidos en 15 segundos."
        },
        {
          "name": "Acrobatics",
          "kind": "passive",
          "learn": 20,
          "max": 55,
          "icon": "acrobatics",
          "desc": "Sabés caer: el daño por caída baja 100 puntos."
        },
        {
          "name": "Breath Boost",
          "kind": "passive",
          "learn": 20,
          "max": 55,
          "icon": "breath-boost",
          "desc": "+300 de capacidad pulmonar bajo el agua."
        },
        {
          "name": "Bow Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "icon": "bow-mastery",
          "desc": "+92,4 de P.Atk. con arco."
        },
        {
          "name": "Dagger Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "dagger-mastery",
          "desc": "+112,8 de P.Atk. con daga."
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
          "name": "Vicious Stance",
          "kind": "toggle",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "vicious-stance",
          "desc": "Postura despiadada: +609 de daño crítico con un goteo continuo de MP."
        },
        {
          "name": "Confusion",
          "kind": "active",
          "learn": 24,
          "max": 74,
          "icon": "confusion",
          "desc": "Confunde al enemigo y lo manda a atacar a otro. Acierta el 80% de las veces."
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
          "name": "Critical Power",
          "kind": "passive",
          "learn": 24,
          "max": 72,
          "icon": "critical-power",
          "desc": "+384 de daño crítico."
        },
        {
          "name": "Boost Evasion",
          "kind": "passive",
          "learn": 24,
          "max": 58,
          "icon": "boost-evasion",
          "desc": "+4 de evasión."
        },
        {
          "name": "Accuracy",
          "kind": "toggle",
          "learn": 24,
          "icon": "accuracy",
          "desc": "Mientras lo tenés activo, +3 de precisión a cambio de un goteo de MP."
        },
        {
          "name": "Ultimate Evasion",
          "kind": "active",
          "learn": 28,
          "max": 55,
          "custom": true,
          "icon": "ultimate-evasion",
          "desc": "+25 de evasión, +80% de resistencia al robo de buffs y 30% de esquivar skills, físicos y mágicos. Dura 30 segundos."
        },
        {
          "name": "Quick Step",
          "kind": "passive",
          "learn": 28,
          "max": 43,
          "icon": "quick-step",
          "desc": "+11 de velocidad de movimiento, siempre."
        },
        {
          "name": "Acrobatic Move",
          "kind": "passive",
          "learn": 28,
          "max": 55,
          "icon": "acrobatic-move",
          "desc": "+6 de evasión mientras corrés."
        },
        {
          "name": "Rapid Shot",
          "kind": "active",
          "learn": 32,
          "custom": true,
          "icon": "rapid-shot",
          "desc": "+5% de velocidad de ataque con arco durante 20 minutos."
        },
        {
          "name": "Stunning Shot",
          "kind": "active",
          "learn": 36,
          "custom": true,
          "icon": "stunning-shot",
          "desc": "Flecha que sacude: 1.133 de daño, 3 segundos de aturdimiento y 90% de cancelarle el objetivo."
        },
        {
          "name": "Freezing Strike",
          "kind": "active",
          "learn": 36,
          "max": 74,
          "icon": "freezing-strike",
          "desc": "Golpe de hielo que además le baja un 20% la velocidad de movimiento durante 5 segundos."
        },
        {
          "name": "Esprit",
          "kind": "passive",
          "learn": 36,
          "max": 74,
          "icon": "esprit",
          "desc": "Corriendo recuperás más: +6 de HP y +1,5 de MP por tick."
        }
      ]
    },
    {
      "id": "abysswalker",
      "name": "AbyssWalker",
      "from": 40,
      "to": 75,
      "blurb": "La daga se vuelve el centro: los golpes mortales, las posturas y el Sting, que abre una herida que no para de sangrar.",
      "skills": [
        {
          "name": "Backstab",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "backstab",
          "desc": "Puñalada por la espalda: 5.479 de potencia y puede matar de un golpe. Requiere daga."
        },
        {
          "name": "Hex",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "hex",
          "desc": "Maldición que le baja un 15% la P.Def. al objetivo durante 10 segundos. Acierta el 80%."
        },
        {
          "name": "Critical Chance",
          "kind": "passive",
          "learn": 40,
          "icon": "critical-chance",
          "desc": "+40% de probabilidad de crítico."
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
          "name": "Veil",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "icon": "veil",
          "desc": "Le nubla la vista al enemigo y lo desanima de atacar."
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
          "name": "Sand Bomb",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "custom": true,
          "icon": "sand-bomb",
          "desc": "Una bocanada de arena ciega al objetivo: -12 de precisión por 20 segundos."
        },
        {
          "name": "Mortal Strike",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "mortal-strike",
          "desc": "+15% de probabilidad de golpe mortal con daga durante 1.200 segundos."
        },
        {
          "name": "Escape Shackle",
          "kind": "active",
          "learn": 60,
          "icon": "escape-shackle",
          "desc": "Te libera de un estado de inmovilización."
        },
        {
          "name": "Blinding Blow",
          "kind": "active",
          "learn": 66,
          "max": 74,
          "icon": "blinding-blow",
          "desc": "Golpe a los puntos vitales que además le da vuelta al enemigo y te acelera mucho a vos. Puede matar de un golpe."
        }
      ]
    },
    {
      "id": "ghost-hunter",
      "name": "Ghost Hunter",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase trae el Fatal Counter —cuanta menos vida te queda, más pega— y el Counterattack, que devuelve todo el daño físico durante 15 segundos.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
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
          "name": "Focus Skill Mastery",
          "kind": "toggle",
          "learn": 78,
          "custom": true,
          "icon": "focus-skill-mastery",
          "desc": "Postura que multiplica por 3 la probabilidad del Skill Mastery, con un costo continuo de MP."
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
          "name": "Focus Power",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "focus-power",
          "desc": "La otra postura: el mismo esquema por posición pero sobre el daño crítico. Elegís una o la otra, no las dos."
        },
        {
          "name": "Assassination",
          "kind": "passive",
          "learn": 78,
          "icon": "assassination",
          "desc": "+70 de P.Atk. con daga y +20% de probabilidad de que entren los golpes de espalda."
        },
        {
          "name": "Counterattack",
          "kind": "active",
          "learn": 79,
          "custom": true,
          "icon": "counterattack",
          "desc": "Durante 15 segundos devolvés el 100% del daño físico que recibís. Tiene 10 minutos de espera: se guarda para el momento exacto."
        },
        {
          "name": "Symbol of the Assassin",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-the-assassin",
          "desc": "Planta un símbolo que maximiza la evasión y la probabilidad de golpe mortal de los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
