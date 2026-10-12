// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const adventurer: ClassGuide = {
  "slug": "adventurer",
  "name": "Adventurer",
  "subtitle": "Humano · tercera clase de la rama del ladrón",
  "intro": "El especialista en golpes por la espalda y en no estar donde lo buscan. Pega poco de frente y muchísimo desde atrás, se vuelve invisible de verdad y tiene el mejor juego sucio del servidor: fintas, robo de objetivo, ceguera y trampas.",
  "facts": [
    {
      "label": "Camino",
      "value": "Human Fighter → Rogue → Treasure Hunter → Adventurer"
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
      "value": "58 en total: 34 activas y 24 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño por la espalda · invisibilidad · trucos de control"
    },
    {
      "label": "Floja en",
      "value": "Pelea de frente · aguante"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Adventurer, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "human-fighter",
      "name": "Human Fighter",
      "from": 1,
      "to": 19,
      "blurb": "La base de todos los guerreros humanos. Golpes básicos de espada, mazo, arco y daga, las primeras maestrías y las pasivas de recuperación. Todo lo de acá lo comparten las seis clases.",
      "skills": [
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "desc": "Permite leer recetas comunes."
        },
        {
          "name": "Power Strike",
          "kind": "active",
          "learn": 5,
          "max": 15,
          "custom": true,
          "desc": "El golpe cargado básico de espada o mazo: 870 de potencia."
        },
        {
          "name": "Mortal Blow",
          "kind": "active",
          "learn": 5,
          "max": 36,
          "desc": "El golpe mortal básico de daga."
        },
        {
          "name": "Power Shot",
          "kind": "active",
          "learn": 5,
          "max": 36,
          "desc": "El disparo cargado básico: 3.675 de potencia."
        },
        {
          "name": "Weapon Mastery",
          "kind": "passive",
          "learn": 5,
          "max": 15,
          "desc": "+8,5% y +4 de P.Atk."
        },
        {
          "name": "Armor Mastery",
          "kind": "passive",
          "learn": 5,
          "max": 15,
          "desc": "Más defensa con equipo pesado, y defensa y evasión con equipo ligero."
        },
        {
          "name": "Relax",
          "kind": "toggle",
          "learn": 5,
          "desc": "Sentado, +5 a la regeneración de HP."
        },
        {
          "name": "Create Common Item",
          "kind": "passive",
          "learn": 5,
          "max": 70,
          "desc": "Fabrica ítems comunes hasta nivel 9."
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
      "id": "rogue",
      "name": "Rogue",
      "from": 20,
      "to": 39,
      "blurb": "El camino del ladrón: daga, arco, evasión y los primeros trucos para sacarse gente de encima. La rama se parte después entre el Adventurer y el Sagittarius.",
      "skills": [
        {
          "name": "Dash",
          "kind": "active",
          "learn": 20,
          "max": 46,
          "desc": "+25 de velocidad por un rato."
        },
        {
          "name": "Unlock",
          "kind": "active",
          "learn": 20,
          "max": 72,
          "desc": "Abre puertas de nivel 1 a 3 y cofres. Consume 17 Thief Keys."
        },
        {
          "name": "Long Shot",
          "kind": "passive",
          "learn": 20,
          "desc": "+200 de alcance con arco."
        },
        {
          "name": "Acrobatics",
          "kind": "passive",
          "learn": 20,
          "max": 55,
          "desc": "Sabés caer: el daño por caída baja 100 puntos."
        },
        {
          "name": "Breath Boost",
          "kind": "passive",
          "learn": 20,
          "max": 55,
          "desc": "+300 de capacidad pulmonar bajo el agua."
        },
        {
          "name": "Bow Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "desc": "+92,4 de P.Atk. con arco."
        },
        {
          "name": "Dagger Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "+112,8 de P.Atk. con daga."
        },
        {
          "name": "Boost Mana",
          "kind": "passive",
          "learn": 20,
          "max": 60,
          "custom": true,
          "desc": "+800 de MP máximo."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "custom": true,
          "desc": "Con armadura ligera: +65,6 de P.Def., +6 de velocidad, +7 de evasión y la mitad de MP en los skills. Con pesada en cambio perdés velocidad, ataque y evasión."
        },
        {
          "name": "Vicious Stance",
          "kind": "toggle",
          "learn": 20,
          "max": 74,
          "custom": true,
          "desc": "Postura despiadada: +609 de daño crítico con un goteo continuo de MP."
        },
        {
          "name": "Bleed",
          "kind": "active",
          "learn": 24,
          "max": 70,
          "custom": true,
          "desc": "Herida que sangra: 210 de daño cada 3,3 segundos durante 15 (840 en total) y -20% de velocidad."
        },
        {
          "name": "Vital Force",
          "kind": "passive",
          "learn": 24,
          "max": 72,
          "desc": "Sentado recuperás +6,7 de HP y +2,5 de MP por tick."
        },
        {
          "name": "Critical Power",
          "kind": "passive",
          "learn": 24,
          "max": 72,
          "desc": "+384 de daño crítico."
        },
        {
          "name": "Boost Evasion",
          "kind": "passive",
          "learn": 24,
          "max": 58,
          "desc": "+4 de evasión."
        },
        {
          "name": "Accuracy",
          "kind": "toggle",
          "learn": 24,
          "desc": "Mientras lo tenés activo, +3 de precisión a cambio de un goteo de MP."
        },
        {
          "name": "Ultimate Evasion",
          "kind": "active",
          "learn": 28,
          "max": 55,
          "custom": true,
          "desc": "+25 de evasión, +80% de resistencia al robo de buffs y 30% de esquivar skills, físicos y mágicos. Dura 30 segundos."
        },
        {
          "name": "Critical Chance",
          "kind": "passive",
          "learn": 28,
          "max": 49,
          "desc": "+40% de probabilidad de crítico."
        },
        {
          "name": "Quick Step",
          "kind": "passive",
          "learn": 28,
          "max": 43,
          "desc": "+11 de velocidad de movimiento, siempre."
        },
        {
          "name": "Acrobatic Move",
          "kind": "passive",
          "learn": 28,
          "max": 55,
          "desc": "+6 de evasión mientras corrés."
        },
        {
          "name": "Rapid Shot",
          "kind": "active",
          "learn": 32,
          "custom": true,
          "desc": "+5% de velocidad de ataque con arco durante 20 minutos."
        },
        {
          "name": "Stunning Shot",
          "kind": "active",
          "learn": 36,
          "custom": true,
          "desc": "Flecha que sacude: 1.133 de daño, 3 segundos de aturdimiento y 90% de cancelarle el objetivo."
        },
        {
          "name": "Boost Attack Speed",
          "kind": "passive",
          "learn": 36,
          "max": 58,
          "desc": "+10% de velocidad de ataque."
        },
        {
          "name": "Esprit",
          "kind": "passive",
          "learn": 36,
          "max": 74,
          "desc": "Corriendo recuperás más: +6 de HP y +1,5 de MP por tick."
        }
      ]
    },
    {
      "id": "treasure-hunter",
      "name": "Treasure Hunter",
      "from": 40,
      "to": 75,
      "blurb": "El juego de daga se vuelve serio: golpes por la espalda, posturas de enfoque, invisibilidad y las herramientas de cofres.",
      "skills": [
        {
          "name": "Backstab",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Puñalada por la espalda: 5.479 de potencia y puede matar de un golpe. Requiere daga."
        },
        {
          "name": "Fake Death",
          "kind": "toggle",
          "learn": 40,
          "custom": true,
          "desc": "Te tirás al piso como muerto y los monstruos te pierden el interés. Además te saca hasta 10 debuffs."
        },
        {
          "name": "Silent Move",
          "kind": "toggle",
          "learn": 40,
          "custom": true,
          "desc": "Desaparecés de la vista: jugadores y monstruos te pierden de vista y el que te tenía targeteado te suelta. Se rompe al atacar. -60% de velocidad y goteo de MP. No se puede activar en combate."
        },
        {
          "name": "Deadly Blow",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Golpe de daga de 5.479 de potencia con posibilidad de golpe letal."
        },
        {
          "name": "Switch",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "desc": "Confunde al enemigo y le hace cambiar de objetivo. Requiere daga."
        },
        {
          "name": "Veil",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "desc": "Le nubla la vista al enemigo y lo desanima de atacar."
        },
        {
          "name": "Summon Treasure Key",
          "kind": "active",
          "learn": 46,
          "max": 74,
          "desc": "Fabrica 2 o 3 llaves de cofre de grado 6 a 8. Consume 6 Thief Keys."
        },
        {
          "name": "Trick",
          "kind": "active",
          "learn": 49,
          "max": 74,
          "desc": "Le saca al enemigo las ganas de atacar y le quita el objetivo. Requiere daga."
        },
        {
          "name": "Lure",
          "kind": "active",
          "learn": 52,
          "desc": "Atrae a un enemigo sin alborotar al resto."
        },
        {
          "name": "Critical Blow",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "desc": "Golpe crítico de daga de 3.653 de potencia, con 1% de muerte instantánea y 1% de partir HP y CP a la mitad."
        },
        {
          "name": "Sand Bomb",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "custom": true,
          "desc": "Una bocanada de arena ciega al objetivo: -12 de precisión por 20 segundos."
        },
        {
          "name": "Stealth",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "Te movés entre las sombras y los monstruos tardan en reaccionar, pero mientras dure peleás mucho peor: -45% de P.Atk. y -15% de defensas."
        },
        {
          "name": "Escape Shackle",
          "kind": "active",
          "learn": 60,
          "desc": "Te libera de un estado de inmovilización."
        }
      ]
    },
    {
      "id": "adventurer",
      "name": "Adventurer",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma lo que faltaba para desaparecer y reaparecer donde más duele: ceguera, espejismo y el golpe letal.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Lethal Blow",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "desc": "Daga directa a un punto vital: 9.814 de potencia, 1% de muerte instantánea y 2% de partirle el HP y el CP a la mitad."
        },
        {
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu STR."
        },
        {
          "name": "Bluff",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "desc": "Una finta que gira al objetivo, le cancela el target y lo aturde 3 segundos. 40% de borrarle además el odio que te tiene. Requiere daga."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Focus Skill Mastery",
          "kind": "toggle",
          "learn": 78,
          "custom": true,
          "desc": "Postura que multiplica por 3 la probabilidad del Skill Mastery, con un costo continuo de MP."
        },
        {
          "name": "Focus Chance",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "desc": "Postura de daga: tu crítico y tus golpes dependen de dónde estés parado. +30% por detrás, +15% de costado, -15% de frente. Solo podés tener una postura Focus activa."
        },
        {
          "name": "Focus Power",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "desc": "La otra postura: el mismo esquema por posición pero sobre el daño crítico. Elegís una o la otra, no las dos."
        },
        {
          "name": "Assassination",
          "kind": "passive",
          "learn": 78,
          "desc": "+70 de P.Atk. con daga y +20% de probabilidad de que entren los golpes de espalda."
        },
        {
          "name": "Mirage",
          "kind": "active",
          "learn": 79,
          "desc": "Tiene chance de cancelarle el objetivo al que te ataca."
        },
        {
          "name": "Symbol of the Assassin",
          "kind": "active",
          "learn": 80,
          "desc": "Planta un símbolo que maximiza la evasión y la probabilidad de golpe mortal de los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
