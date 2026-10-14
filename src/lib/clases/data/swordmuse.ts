// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const swordmuse: ClassGuide = {
  "slug": "swordmuse",
  "name": "Swordmuse",
  "subtitle": "Elfo · tercera clase de la rama del caballero",
  "intro": "Canta y pelea. Los cantos son buffs de party que ningún otro puede dar, y en L2Thunder están partidos en dos: la party recibe el grueso y el que canta recibe además su propio bono. Entre canto y canto reparte espadazos.",
  "facts": [
    {
      "label": "Camino",
      "value": "ElvenFighter → ElvenKnight → Swordsinger → Swordmuse"
    },
    {
      "label": "Armadura",
      "value": "Pesada o ligera"
    },
    {
      "label": "Arma",
      "value": "Espada o mazo a dos manos"
    },
    {
      "label": "Habilidades",
      "value": "54 en total: 39 activas y 15 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Buffs únicos de party · daño decente · versatilidad"
    },
    {
      "label": "Floja en",
      "value": "Daño máximo · defensa"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Swordmuse, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "elvenfighter",
      "name": "ElvenFighter",
      "from": 1,
      "to": 52,
      "blurb": "La base de todos los guerreros elfos. Las auras de ataque y defensa, las curas propias y las purgas de veneno y sangrado: todo lo que hace que un elfo se sostenga solo mucho más que un humano.",
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
          "name": "Elemental Heal",
          "kind": "active",
          "learn": 15,
          "max": 74,
          "icon": "elemental-heal",
          "desc": "Cura propia de 546 de potencia."
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
      "id": "elvenknight",
      "name": "ElvenKnight",
      "from": 20,
      "to": 36,
      "blurb": "El camino del caballero elfo: escudo, provocación con raíz y las primeras resistencias. De acá salen el templario y la bardo.",
      "skills": [
        {
          "name": "Charm",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "charm",
          "desc": "Confunde al enemigo: lo obliga a targetear y después le cancela el objetivo."
        },
        {
          "name": "Poison Recovery",
          "kind": "active",
          "learn": 20,
          "max": 60,
          "custom": true,
          "icon": "poison-recovery",
          "desc": "Te purgás el veneno de la sangre. Cubre todos los venenos que puede tirar un jugador."
        },
        {
          "name": "Ultimate Defense",
          "kind": "active",
          "learn": 20,
          "custom": true,
          "icon": "ultimate-defense",
          "desc": "Te parapetás: +3.600 de P.Def. y +2.700 de M.Def. durante 30 segundos, pero perdés el 70% de la velocidad."
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
          "max": 74,
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
          "name": "Aggression",
          "kind": "active",
          "learn": 24,
          "max": 36,
          "custom": true,
          "icon": "aggression",
          "desc": "Provoca al objetivo para que te ataque. 60% de dejarlo clavado en vos 3 segundos, y contra un jugador arrastra además a todo el que esté a 500 de distancia y no sea de tu party o clan."
        },
        {
          "name": "Cure Bleeding",
          "kind": "active",
          "learn": 24,
          "max": 62,
          "custom": true,
          "icon": "cure-bleeding",
          "desc": "Te cerrás la herida antes de que te desangre. Cubre todos los sangrados que puede tirar un jugador."
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
          "name": "Sprint",
          "kind": "active",
          "learn": 32,
          "max": 52,
          "icon": "sprint",
          "desc": "+33 de velocidad de movimiento."
        },
        {
          "name": "Entangle",
          "kind": "active",
          "learn": 36,
          "max": 74,
          "custom": true,
          "icon": "entangle",
          "desc": "Enredaderas que salen del piso: -30% de velocidad por 10 segundos."
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
      "id": "swordsinger",
      "name": "Swordsinger",
      "from": 40,
      "to": 74,
      "blurb": "Los cantos, que son el motivo de existir de la clase: buffs de party que no da nadie más, a cambio de tener las dos manos ocupadas.",
      "skills": [
        {
          "name": "Spirit Barrier",
          "kind": "active",
          "learn": 40,
          "max": 58,
          "icon": "spirit-barrier",
          "desc": "+30% de M.Def."
        },
        {
          "name": "Song of Warding",
          "kind": "active",
          "learn": 40,
          "custom": true,
          "icon": "song-of-warding",
          "desc": "Para toda la party: +30% de M.Def."
        },
        {
          "name": "Two-handed Weapon Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "icon": "two-handed-weapon-mastery",
          "desc": "+129,3 de P.Atk. y +3 de precisión con armas a dos manos."
        },
        {
          "name": "Holy Blade",
          "kind": "toggle",
          "learn": 43,
          "max": 51,
          "custom": true,
          "icon": "holy-blade",
          "desc": "Postura que envuelve tu hoja en poder sagrado: +5% de P.Atk. y +40 de poder sagrado. El atributo se aplica a los golpes normales y a los skills que no tengan elemento propio."
        },
        {
          "name": "Song of Invocation",
          "kind": "active",
          "learn": 43,
          "custom": true,
          "icon": "song-of-invocation",
          "desc": "Solo para vos: +20 de resistencia a la oscuridad."
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
          "name": "Song of Wind",
          "kind": "active",
          "learn": 46,
          "custom": true,
          "icon": "song-of-wind",
          "desc": "Para toda la party: +20 de velocidad."
        },
        {
          "name": "Song of Hunter",
          "kind": "active",
          "learn": 49,
          "custom": true,
          "icon": "song-of-hunter",
          "desc": "Para toda la party: el doble de probabilidad de crítico."
        },
        {
          "name": "Song of Life",
          "kind": "active",
          "learn": 52,
          "custom": true,
          "icon": "song-of-life",
          "desc": "Para toda la party: +20% de regeneración de HP."
        },
        {
          "name": "Sword Symphony",
          "kind": "active",
          "learn": 55,
          "max": 72,
          "custom": true,
          "icon": "sword-symphony",
          "desc": "Explosión sonora de 3.808 de daño que además hace huir a los enemigos 2 segundos."
        },
        {
          "name": "Song of Earth",
          "kind": "active",
          "learn": 55,
          "custom": true,
          "icon": "song-of-earth",
          "desc": "Para toda la party: +25% de P.Def. Requiere espada o mazo a dos manos."
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
          "name": "Psycho Symphony",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "custom": true,
          "icon": "psycho-symphony",
          "desc": "Golpe de 3.270 de potencia que le baja 10% la velocidad, el ataque y el casteo durante 30 segundos."
        },
        {
          "name": "Song of Water",
          "kind": "active",
          "learn": 58,
          "custom": true,
          "icon": "song-of-water",
          "desc": "Para toda la party: +3 de evasión."
        },
        {
          "name": "Song of Flame Guard",
          "kind": "active",
          "learn": 62,
          "custom": true,
          "icon": "song-of-flame-guard",
          "desc": "Solo para vos: +30 de resistencia al fuego."
        },
        {
          "name": "Song of Vitality",
          "kind": "active",
          "learn": 66,
          "custom": true,
          "icon": "song-of-vitality",
          "desc": "Para toda la party: +30% de HP máximo."
        },
        {
          "name": "Song of Storm Guard",
          "kind": "active",
          "learn": 70,
          "custom": true,
          "icon": "song-of-storm-guard",
          "desc": "Solo para vos: +30 de resistencia al viento."
        },
        {
          "name": "Song of Vengeance",
          "kind": "active",
          "learn": 74,
          "custom": true,
          "icon": "song-of-vengeance",
          "desc": "Para toda la party: devuelve el 50% del daño cuerpo a cuerpo al que lo hizo, durante 30 segundos."
        }
      ]
    },
    {
      "id": "swordmuse",
      "name": "Swordmuse",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma los cantos finales, el salto al frente y el lanzamiento de espadas.",
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
          "name": "Song of Renewal",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "song-of-renewal",
          "desc": "-30% a los tiempos de espera, mágicos y físicos, y -5% de MP, durante 2 minutos."
        },
        {
          "name": "Song of Meditation",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "song-of-meditation",
          "desc": "Para toda la party: +20% de regeneración de MP y -10% de MP en los skills mágicos."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "icon": "battle-force",
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Song of Champion",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "song-of-champion",
          "desc": "-30% a los tiempos de espera físicos y -20% de MP en ellos, durante 2 minutos."
        },
        {
          "name": "Song of Silence",
          "kind": "active",
          "learn": 79,
          "icon": "song-of-silence",
          "desc": "Canto que inhabilita los skills del enemigo, físicos y mágicos."
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
