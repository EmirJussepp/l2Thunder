// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const moonlightSentinel: ClassGuide = {
  "slug": "moonlight-sentinel",
  "name": "Moonlight Sentinel",
  "subtitle": "Elfo · tercera clase de la rama del explorador",
  "intro": "El arquero que no se deja agarrar. Pega menos que el Sagittarius pero esquiva muchísimo más, y tiene las auras y curas élficas para sostenerse solo mucho tiempo.",
  "facts": [
    {
      "label": "Camino",
      "value": "ElvenFighter → ElvenScout → SilverRanger → Moonlight Sentinel"
    },
    {
      "label": "Armadura",
      "value": "Ligera"
    },
    {
      "label": "Arma",
      "value": "Arco"
    },
    {
      "label": "Habilidades",
      "value": "57 en total: 35 activas y 22 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Evasión · daño a distancia · autonomía"
    },
    {
      "label": "Floja en",
      "value": "Daño máximo · aguante"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Moonlight Sentinel, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
      "id": "elvenscout",
      "name": "ElvenScout",
      "from": 20,
      "to": 36,
      "blurb": "El camino del explorador: arco, daga, evasión y velocidad. La rama se parte después entre el arquero y el daguero.",
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
          "name": "Unlock",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "unlock",
          "desc": "Abre puertas de nivel 1 a 3 y cofres. Consume 17 Thief Keys."
        },
        {
          "name": "Long Shot",
          "kind": "passive",
          "learn": 20,
          "max": 40,
          "icon": "long-shot",
          "desc": "+200 de alcance con arco."
        },
        {
          "name": "Acrobatics",
          "kind": "passive",
          "learn": 20,
          "icon": "acrobatics",
          "desc": "Sabés caer: el daño por caída baja 100 puntos."
        },
        {
          "name": "Breath Boost",
          "kind": "passive",
          "learn": 20,
          "icon": "breath-boost",
          "desc": "+300 de capacidad pulmonar bajo el agua."
        },
        {
          "name": "Bow Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "bow-mastery",
          "desc": "+92,4 de P.Atk. con arco."
        },
        {
          "name": "Dagger Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
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
          "name": "Poison Recovery",
          "kind": "active",
          "learn": 24,
          "max": 60,
          "custom": true,
          "icon": "poison-recovery",
          "desc": "Te purgás el veneno de la sangre. Cubre todos los venenos que puede tirar un jugador."
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
          "name": "Bleed",
          "kind": "active",
          "learn": 24,
          "max": 32,
          "custom": true,
          "icon": "bleed",
          "desc": "Herida que sangra: 210 de daño cada 3,3 segundos durante 15 (840 en total) y -20% de velocidad."
        },
        {
          "name": "Boost Evasion",
          "kind": "passive",
          "learn": 24,
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
          "max": 55,
          "custom": true,
          "icon": "rapid-shot",
          "desc": "+5% de velocidad de ataque con arco durante 20 minutos."
        },
        {
          "name": "Critical Chance",
          "kind": "passive",
          "learn": 32,
          "max": 40,
          "icon": "critical-chance",
          "desc": "+40% de probabilidad de crítico."
        },
        {
          "name": "Sprint",
          "kind": "active",
          "learn": 32,
          "icon": "sprint",
          "desc": "+33 de velocidad de movimiento."
        },
        {
          "name": "Stunning Shot",
          "kind": "active",
          "learn": 36,
          "max": 74,
          "custom": true,
          "icon": "stunning-shot",
          "desc": "Flecha que sacude: 1.133 de daño, 3 segundos de aturdimiento y 90% de cancelarle el objetivo."
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
      "id": "silverranger",
      "name": "SilverRanger",
      "from": 40,
      "to": 72,
      "blurb": "El arco se vuelve el centro: disparos cargados, el tiro que te corre del medio y el alcance largo.",
      "skills": [
        {
          "name": "Double Shot",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "double-shot",
          "desc": "Dos flechas seguidas, 12.875 de potencia."
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
          "name": "Hawk Eye",
          "kind": "active",
          "learn": 40,
          "max": 62,
          "custom": true,
          "icon": "hawk-eye",
          "desc": "Revela a los que están usando Silent Move cerca tuyo y te deja targetearlos."
        },
        {
          "name": "Critical Power",
          "kind": "passive",
          "learn": 40,
          "icon": "critical-power",
          "desc": "+384 de daño crítico."
        },
        {
          "name": "Burst Shot",
          "kind": "active",
          "learn": 46,
          "max": 74,
          "icon": "burst-shot",
          "desc": "Flechas explosivas que pegan a varios enemigos a distancia: 9.870 de potencia."
        },
        {
          "name": "Soul of Sagittarius",
          "kind": "active",
          "learn": 46,
          "max": 70,
          "icon": "soul-of-sagittarius",
          "desc": "+25% de MP máximo."
        },
        {
          "name": "Spirit of Sagittarius",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "spirit-of-sagittarius",
          "desc": "-50% al costo de MP de los skills físicos durante 20 minutos."
        },
        {
          "name": "Blessing of Sagittarius",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "blessing-of-sagittarius",
          "desc": "-30% al tiempo de espera de los skills físicos durante 20 minutos."
        },
        {
          "name": "Rapid Fire",
          "kind": "active",
          "learn": 60,
          "max": 74,
          "custom": true,
          "icon": "rapid-fire",
          "desc": "Disparás más rápido a costa de alcance: +100 de P.Atk. y +20% de velocidad de ataque, pero -300 de alcance. Dura 120 segundos."
        },
        {
          "name": "Quiver of Arrow: Grade A",
          "kind": "active",
          "learn": 66,
          "icon": "quiver-of-arrow-grade-a",
          "desc": "Fabrica entre 700 y 2.800 flechas de mithril. Consume un cristal de grado A."
        },
        {
          "name": "Quiver of Arrow: Grade S",
          "kind": "active",
          "learn": 72,
          "icon": "quiver-of-arrow-grade-s",
          "desc": "Fabrica entre 900 y 3.600 flechas brillantes. Consume un cristal de grado S."
        }
      ]
    },
    {
      "id": "moonlight-sentinel",
      "name": "Moonlight Sentinel",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase afina la cadencia y la evasión hasta el final.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "icon": "wisdom",
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Lethal Shot",
          "kind": "active",
          "learn": 76,
          "icon": "lethal-shot",
          "desc": "Flecha con posibilidad de golpe letal: 13.830 de potencia."
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
          "name": "Hamstring Shot",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "hamstring-shot",
          "desc": "Flecha a la pierna: hace daño y le baja 55% la velocidad por 7 segundos."
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
          "name": "Evade Shot",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "evade-shot",
          "desc": "Disparás y te corrés: 6.050 de potencia y +6 de evasión por 30 segundos."
        },
        {
          "name": "Archery",
          "kind": "passive",
          "learn": 78,
          "custom": true,
          "icon": "archery",
          "desc": "+300 de P.Atk. y +100 de alcance con arco."
        },
        {
          "name": "Symbol of the Sniper",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-the-sniper",
          "desc": "Planta un símbolo que mejora la puntería de todos los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
