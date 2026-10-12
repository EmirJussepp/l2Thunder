// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const sagittarius: ClassGuide = {
  "slug": "sagittarius",
  "name": "Sagittarius",
  "subtitle": "Humano · tercera clase de la rama del ladrón",
  "intro": "El arquero puro. El mayor daño a distancia del servidor, con un kit entero dedicado a que nunca te alcancen: frenos, aturdimientos, evasión y alcance.",
  "facts": [
    {
      "label": "Camino",
      "value": "Human Fighter → Rogue → Hawkeye → Sagittarius"
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
      "value": "53 en total: 28 activas y 25 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño a distancia · crítico · evasión"
    },
    {
      "label": "Floja en",
      "value": "Aguante · pelea cuerpo a cuerpo"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Sagittarius, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "icon": "dash",
          "desc": "+25 de velocidad por un rato."
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
          "name": "Bleed",
          "kind": "active",
          "learn": 24,
          "max": 32,
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
          "name": "Critical Power",
          "kind": "passive",
          "learn": 24,
          "max": 32,
          "icon": "critical-power",
          "desc": "+384 de daño crítico."
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
          "name": "Critical Chance",
          "kind": "passive",
          "learn": 28,
          "icon": "critical-chance",
          "desc": "+40% de probabilidad de crítico."
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
          "name": "Stunning Shot",
          "kind": "active",
          "learn": 36,
          "max": 74,
          "custom": true,
          "icon": "stunning-shot",
          "desc": "Flecha que sacude: 1.133 de daño, 3 segundos de aturdimiento y 90% de cancelarle el objetivo."
        },
        {
          "name": "Boost Attack Speed",
          "kind": "passive",
          "learn": 36,
          "icon": "boost-attack-speed",
          "desc": "+10% de velocidad de ataque."
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
      "id": "hawkeye",
      "name": "Hawkeye",
      "from": 40,
      "to": 75,
      "blurb": "El arco pasa a ser el centro de todo: disparos cargados, frenos, aturdimientos y el alcance largo.",
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
          "name": "Hawk Eye",
          "kind": "active",
          "learn": 40,
          "max": 58,
          "custom": true,
          "icon": "hawk-eye",
          "desc": "Revela a los que están usando Silent Move cerca tuyo y te deja targetearlos."
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
          "name": "Pain of Sagittarius",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "pain-of-sagittarius",
          "desc": "Sacrifica 1.000 de HP para recuperar 1.200 de MP, y se puede repetir cada 5 segundos."
        },
        {
          "name": "Quiver of Holding",
          "kind": "passive",
          "learn": 58,
          "max": 74,
          "icon": "quiver-of-holding",
          "desc": "Duplica tu capacidad de carga."
        },
        {
          "name": "Snipe",
          "kind": "active",
          "learn": 60,
          "max": 74,
          "custom": true,
          "icon": "snipe",
          "desc": "Clavás los pies y apuntás: +199 de P.Atk., +6 de precisión, +20% de crítico y +300 de alcance, pero -80% de velocidad. Dura 10 segundos."
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
      "id": "sagittarius",
      "name": "Sagittarius",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase afina la puntería hasta el final: el disparo clavado, las bendiciones del arquero y el símbolo para la party.",
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
