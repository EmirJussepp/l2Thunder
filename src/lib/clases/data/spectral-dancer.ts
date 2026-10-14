// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const spectralDancer: ClassGuide = {
  "slug": "spectral-dancer",
  "name": "Spectral Dancer",
  "subtitle": "Elfo Oscuro · tercera clase de la rama del asesino",
  "intro": "Baila con dos dagas y la party entera se beneficia. Los bailes son buffs que no da nadie más, y en L2Thunder están partidos en dos: la party recibe el grueso y el bailarín suma además su propio bono. El Dance of Medusa petrifica a ocho enemigos.",
  "facts": [
    {
      "label": "Camino",
      "value": "DarkFighter → PalusKnight → Bladedancer → Spectral Dancer"
    },
    {
      "label": "Armadura",
      "value": "Ligera"
    },
    {
      "label": "Arma",
      "value": "Dos dagas"
    },
    {
      "label": "Habilidades",
      "value": "52 en total: 36 activas y 16 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Buffs únicos de party · control en área"
    },
    {
      "label": "Floja en",
      "value": "Daño propio · defensa"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Spectral Dancer, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 36,
          "custom": true,
          "icon": "power-strike",
          "desc": "El golpe cargado básico de espada o mazo: 870 de potencia."
        },
        {
          "name": "Mortal Blow",
          "kind": "active",
          "learn": 5,
          "max": 15,
          "icon": "mortal-blow",
          "desc": "El golpe mortal básico de daga."
        },
        {
          "name": "Power Shot",
          "kind": "active",
          "learn": 5,
          "max": 15,
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
      "id": "palusknight",
      "name": "PalusKnight",
      "from": 20,
      "to": 39,
      "blurb": "El camino del caballero oscuro: escudo, provocación y los primeros cúbicos. De acá salen el Shillien Templar y el Spectral Dancer.",
      "skills": [
        {
          "name": "Ultimate Defense",
          "kind": "active",
          "learn": 20,
          "custom": true,
          "icon": "ultimate-defense",
          "desc": "Te parapetás: +3.600 de P.Def. y +2.700 de M.Def. durante 30 segundos, pero perdés el 70% de la velocidad."
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
          "name": "Magic Resistance",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "magic-resistance",
          "desc": "+108 de M.Def."
        },
        {
          "name": "Shield Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 28,
          "icon": "shield-mastery",
          "desc": "Duplica la probabilidad de bloquear con escudo."
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
          "name": "Sword Blunt Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "icon": "sword-blunt-mastery",
          "desc": "+76,4 de P.Atk. con espada o mazo."
        },
        {
          "name": "Heavy Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "heavy-armor-mastery-a46092",
          "desc": "+172,6 de P.Def. con armadura pesada."
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
          "name": "Aggression",
          "kind": "active",
          "learn": 24,
          "max": 36,
          "custom": true,
          "icon": "aggression",
          "desc": "Provoca al objetivo para que te ataque. 60% de dejarlo clavado en vos 3 segundos, y contra un jugador arrastra además a todo el que esté a 500 de distancia y no sea de tu party o clan."
        },
        {
          "name": "Deflect Arrow",
          "kind": "active",
          "learn": 24,
          "max": 49,
          "icon": "deflect-arrow",
          "desc": "+8% de defensa contra ataques de arco."
        },
        {
          "name": "Sting",
          "kind": "active",
          "learn": 24,
          "max": 74,
          "icon": "sting",
          "desc": "Puntazo que abre una herida: 2.900 de potencia más sangrado durante 20 segundos. Acierta el 95% de las veces."
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
          "name": "Focus Mind",
          "kind": "passive",
          "learn": 36,
          "max": 72,
          "icon": "focus-mind",
          "desc": "+3,1 a la regeneración de MP."
        }
      ]
    },
    {
      "id": "bladedancer",
      "name": "Bladedancer",
      "from": 40,
      "to": 75,
      "blurb": "Los bailes, que son el motivo de existir de la clase: buffs de party que no da nadie más, a cambio de tener las dos manos ocupadas con dagas.",
      "skills": [
        {
          "name": "Hex",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "hex",
          "desc": "Maldición que le baja un 15% la P.Def. al objetivo durante 10 segundos. Acierta el 80%."
        },
        {
          "name": "Dual Weapon Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "icon": "dual-weapon-mastery",
          "desc": "+129,3 de P.Atk. con espadas dobles."
        },
        {
          "name": "Dance of Fire",
          "kind": "active",
          "learn": 40,
          "custom": true,
          "icon": "dance-of-fire",
          "desc": "Para toda la party: +35% de daño crítico."
        },
        {
          "name": "Dance of Light",
          "kind": "active",
          "learn": 43,
          "custom": true,
          "icon": "dance-of-light",
          "desc": "Solo para vos: +15% de HP máximo."
        },
        {
          "name": "Front Step",
          "kind": "active",
          "learn": 43,
          "custom": true,
          "icon": "front-step",
          "desc": "Te teletransporta al instante delante de tu objetivo."
        },
        {
          "name": "Throw Swords",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "custom": true,
          "icon": "throw-swords",
          "desc": "Arrojás las espadas contra un objetivo lejano: 8.547 de potencia."
        },
        {
          "name": "Dance of Inspiration",
          "kind": "active",
          "learn": 46,
          "custom": true,
          "icon": "dance-of-inspiration",
          "desc": "Para toda la party: +4 de precisión."
        },
        {
          "name": "Dance of the Mystic",
          "kind": "active",
          "learn": 49,
          "custom": true,
          "icon": "dance-of-the-mystic",
          "desc": "Para toda la party: +20% de M.Atk."
        },
        {
          "name": "Dance of Concentration",
          "kind": "active",
          "learn": 52,
          "custom": true,
          "icon": "dance-of-concentration",
          "desc": "Para toda la party: +30% de velocidad de casteo y mucha menos probabilidad de que te corten el hechizo."
        },
        {
          "name": "Poison Blade Dance",
          "kind": "active",
          "learn": 55,
          "max": 72,
          "custom": true,
          "icon": "poison-blade-dance",
          "desc": "Giro envenenado sobre los enemigos de alrededor: los envenena 30 segundos mientras les pega."
        },
        {
          "name": "Dance of the Warrior",
          "kind": "active",
          "learn": 55,
          "custom": true,
          "icon": "dance-of-the-warrior",
          "desc": "Para toda la party: +12% de P.Atk. Requiere dos dagas."
        },
        {
          "name": "Arrest",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "icon": "arrest",
          "desc": "Provoca al enemigo y lo deja clavado 3 segundos. Mientras dura no se lo puede volver a inmovilizar."
        },
        {
          "name": "Demonic Blade Dance",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "custom": true,
          "icon": "demonic-blade-dance",
          "desc": "Giro demoníaco sobre hasta 8 enemigos en un radio de 400: 2.970 de potencia y les baja un 10% el ataque físico y mágico durante 30 segundos."
        },
        {
          "name": "Dance of Fury",
          "kind": "active",
          "learn": 58,
          "custom": true,
          "icon": "dance-of-fury",
          "desc": "Para toda la party: +15% de velocidad de ataque."
        },
        {
          "name": "Dance of Earth Guard",
          "kind": "active",
          "learn": 62,
          "custom": true,
          "icon": "dance-of-earth-guard",
          "desc": "Solo para vos: +30 de resistencia a la tierra."
        },
        {
          "name": "Dance of Protection",
          "kind": "active",
          "learn": 66,
          "custom": true,
          "icon": "dance-of-protection",
          "desc": "Solo para vos: inmunidad a los debuffs durante 30 segundos. Dos minutos de espera."
        },
        {
          "name": "Dance of Aqua Guard",
          "kind": "active",
          "learn": 70,
          "custom": true,
          "icon": "dance-of-aqua-guard",
          "desc": "Solo para vos: +30 de resistencia al agua."
        },
        {
          "name": "Dance of the Vampire",
          "kind": "active",
          "learn": 74,
          "custom": true,
          "icon": "dance-of-the-vampire",
          "desc": "Para toda la party: +10 de absorción de vida al golpear."
        }
      ]
    },
    {
      "id": "spectral-dancer",
      "name": "Spectral Dancer",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma los bailes finales y el Dance of Medusa, que petrifica a ocho enemigos durante 15 segundos.",
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
          "name": "Dance of Shadows",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "dance-of-shadows",
          "desc": "Para toda la party: se mueven sin ser detectados, sin perder velocidad."
        },
        {
          "name": "Dance of Medusa",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "dance-of-medusa",
          "desc": "Petrifica a hasta 8 enemigos en un radio de 200 durante 15 segundos. Acierta el 90% de las veces. Es el control más fuerte de la clase."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "icon": "battle-force",
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Siren's Dance",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "sirens-dance",
          "desc": "Para toda la party: el doble de probabilidad de crítico mágico."
        },
        {
          "name": "Symbol of Noise",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-noise",
          "desc": "Planta un símbolo que anula los cantos y bailes de todos los que entren en su área. Pide Battle Force nivel 2 y un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
