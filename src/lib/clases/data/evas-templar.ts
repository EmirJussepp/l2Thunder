// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const evasTemplar: ClassGuide = {
  "slug": "evas-templar",
  "name": "Eva's Templar",
  "subtitle": "Elfo · tercera clase de la rama del caballero",
  "intro": "El tanque que además sostiene a la party. Menos defensa bruta que un caballero humano, pero trae la Prophecy of Water, cúbicos de apoyo y las auras élficas. Es el que te mantiene parado mientras aguanta los golpes.",
  "facts": [
    {
      "label": "Camino",
      "value": "ElvenFighter → ElvenKnight → TempleKnight → Eva's Templar"
    },
    {
      "label": "Armadura",
      "value": "Pesada"
    },
    {
      "label": "Arma",
      "value": "Espada o mazo y escudo"
    },
    {
      "label": "Habilidades",
      "value": "55 en total: 36 activas y 19 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Defensa · apoyo a la party · bloqueo con escudo"
    },
    {
      "label": "Floja en",
      "value": "Daño · juego en solitario"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Eva's Templar, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "elvenfighter",
      "name": "ElvenFighter",
      "from": 1,
      "to": 19,
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
          "max": 74,
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
      "to": 39,
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
          "max": 46,
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
          "max": 52,
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
          "max": 74,
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
      "id": "templeknight",
      "name": "TempleKnight",
      "from": 40,
      "to": 75,
      "blurb": "La rama de protección: cúbicos de apoyo, el espejo mágico y la postura de guardia.",
      "skills": [
        {
          "name": "Summon Storm Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-storm-cubic",
          "desc": "Invoca un cúbico de tormenta que elige tu objetivo y pega solo por unos 861 de daño, con su propia potencia mágica: la tuya no entra en la cuenta. Dura 30 minutos."
        },
        {
          "name": "Aura of Hate",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "aura-of-hate",
          "desc": "Provoca a todos los enemigos cercanos para que te ataquen."
        },
        {
          "name": "Spirit Barrier",
          "kind": "active",
          "learn": 40,
          "max": 58,
          "icon": "spirit-barrier",
          "desc": "+30% de M.Def."
        },
        {
          "name": "Holy Armor",
          "kind": "toggle",
          "learn": 40,
          "max": 46,
          "icon": "holy-armor",
          "desc": "Postura que resiste un 10% los ataques oscuros y mentales."
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
          "name": "Resurrection",
          "kind": "active",
          "learn": 40,
          "icon": "resurrection",
          "desc": "Revive un cadáver y le devuelve cerca del 20% de la experiencia perdida."
        },
        {
          "name": "Summon Life Cubic",
          "kind": "active",
          "learn": 43,
          "max": 72,
          "custom": true,
          "icon": "summon-life-cubic",
          "desc": "Invoca un cúbico que vigila a la party y cura 382 de vida por vez. Dura 30 minutos."
        },
        {
          "name": "Cubic Mastery",
          "kind": "passive",
          "learn": 43,
          "max": 55,
          "custom": true,
          "icon": "cubic-mastery",
          "desc": "Te permite tener 3 cúbicos a la vez."
        },
        {
          "name": "Guard Stance",
          "kind": "toggle",
          "learn": 43,
          "max": 70,
          "custom": true,
          "icon": "guard-stance",
          "desc": "Postura de guardia: +256,5 de P.Def. y la probabilidad de bloquear sube a la mitad otra vez, del 20% al 30%. Consume unos 5 de MP por segundo."
        },
        {
          "name": "Final Fortress",
          "kind": "passive",
          "learn": 52,
          "max": 74,
          "icon": "final-fortress",
          "desc": "Cuando te baja la vida, sube sola la P.Def. hasta +237,3."
        },
        {
          "name": "Tribunal",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "custom": true,
          "icon": "tribunal",
          "desc": "Golpe sagrado que obliga al enemigo a volverse contra vos: 3.609 de potencia y -50% de probabilidad de crítico por 30 segundos."
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
          "name": "Holy Aura",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "holy-aura",
          "desc": "Daño mágico sagrado con chance de aturdir un momento."
        },
        {
          "name": "Aegis",
          "kind": "passive",
          "learn": 60,
          "icon": "aegis",
          "desc": "Con escudo equipado, te defiende de todas las direcciones."
        },
        {
          "name": "Summon Attractive Cubic",
          "kind": "active",
          "learn": 62,
          "max": 74,
          "custom": true,
          "icon": "summon-attractive-cubic",
          "desc": "Invoca un cúbico que o bien obliga a tu objetivo a volverse contra vos, o bien lo deja clavado 8 segundos. Acierta el 40% de las veces y dura 30 minutos."
        },
        {
          "name": "Shield Fortress",
          "kind": "toggle",
          "learn": 64,
          "max": 74,
          "custom": true,
          "icon": "shield-fortress",
          "desc": "Plantás el escudo y aguantás: +560 de defensa de escudo con un goteo de MP."
        }
      ]
    },
    {
      "id": "evas-templar",
      "name": "Eva's Templar",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase trae la Prophecy of Water, el bloqueo avanzado y el cúbico que provoca por vos.",
      "skills": [
        {
          "name": "Sacrifice",
          "kind": "active",
          "learn": 76,
          "icon": "sacrifice",
          "desc": "Cura a otro sacrificando tu propia vida: 1.170 de potencia."
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
          "name": "Fortitude",
          "kind": "toggle",
          "learn": 76,
          "custom": true,
          "icon": "fortitude",
          "desc": "Postura que te endurece: +10% de resistencia al aturdimiento y +20% a la parálisis, con goteo de MP."
        },
        {
          "name": "Angelic Icon",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "angelic-icon",
          "desc": "Por voluntad de tu dios tu capacidad de pelea se dispara durante un minuto: +30% de defensas, +30% de velocidad de ataque, +100 de crítico, +30 de velocidad — pero las curas casi no te hacen efecto. Solo desde 30% de vida o menos."
        },
        {
          "name": "Shield Bash",
          "kind": "active",
          "learn": 77,
          "icon": "shield-bash",
          "desc": "Escudazo que interrumpe el ataque del enemigo y le hace perder el objetivo."
        },
        {
          "name": "Vengeance",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "vengeance",
          "desc": "Levantás el escudo, atraés la furia de todos y la aguantás: les hacés daño, provocás hasta 8, y te subís +5.400 de P.Def. y +4.050 de M.Def. por 30 segundos a cambio de -70% de velocidad."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "icon": "battle-force",
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Touch of Life",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "touch-of-life",
          "desc": "Volcás tu propia vida en un aliado: le curás el 50% del HP de golpe y 5.994 más en 120 segundos, le subís 30% la curación que recibe y le hacés más difícil que le entren debuffs y que le roben buffs. Te cuesta 1.215 de HP."
        },
        {
          "name": "Magical Mirror",
          "kind": "active",
          "learn": 78,
          "icon": "magical-mirror",
          "desc": "Devuelve el 30% de los debuffs que te llegan por magia y el 10% de los físicos. Requiere escudo."
        },
        {
          "name": "Knighthood",
          "kind": "passive",
          "learn": 78,
          "icon": "knighthood",
          "desc": "Más P.Def. con armadura pesada y más defensa de escudo."
        },
        {
          "name": "Symbol of Defense",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-defense",
          "desc": "Planta un símbolo que maximiza la defensa de los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
