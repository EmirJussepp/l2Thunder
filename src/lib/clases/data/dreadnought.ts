// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const dreadnought: ClassGuide = {
  "slug": "dreadnought",
  "name": "Dreadnought",
  "subtitle": "Humano · tercera clase de la rama del guerrero",
  "intro": "El rey del área. Con lanza golpea a todo lo que tiene alrededor en cada barrido, y suma aturdimientos, provocaciones y un arsenal de posturas para elegir entre pegar más fuerte o aguantar más.",
  "facts": [
    {
      "label": "Camino",
      "value": "Human Fighter → Warrior → Warlord → Dreadnought"
    },
    {
      "label": "Armadura",
      "value": "Pesada o ligera"
    },
    {
      "label": "Arma",
      "value": "Lanza"
    },
    {
      "label": "Habilidades",
      "value": "57 en total: 38 activas y 19 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño en área · farmeo masivo · control de grupo"
    },
    {
      "label": "Floja en",
      "value": "Objetivo único · defensa mágica"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Dreadnought, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
      "id": "warrior",
      "name": "Warrior",
      "from": 20,
      "to": 39,
      "blurb": "El camino del guerrero puro: furia, rugidos, resistencias mentales y las primeras maestrías de armadura. Acá aparece el aguante que después distingue al Dreadnought y al Duelist.",
      "skills": [
        {
          "name": "War Cry",
          "kind": "active",
          "learn": 20,
          "max": 43,
          "icon": "war-cry",
          "desc": "+25% de P.Atk. por un momento."
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
          "max": 74,
          "icon": "polearm-mastery",
          "desc": "+129,3 de P.Atk. con lanza."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "light-armor-mastery-4d45b3",
          "desc": "+81,3 de P.Def. y +6 de evasión con armadura ligera."
        },
        {
          "name": "Heavy Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "heavy-armor-mastery-a46092",
          "desc": "+79,3 de P.Def. con armadura pesada."
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
          "name": "Power Smash",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "power-smash",
          "desc": "Golpe fuerte sobre un solo enemigo: 2.180 de potencia."
        },
        {
          "name": "Sword Blunt Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "icon": "sword-blunt-mastery",
          "desc": "+20,5 de P.Atk. con espada o mazo."
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
          "name": "Vital Force",
          "kind": "passive",
          "learn": 24,
          "max": 32,
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
          "name": "Accuracy",
          "kind": "toggle",
          "learn": 24,
          "icon": "accuracy",
          "desc": "Mientras lo tenés activo, +3 de precisión a cambio de un goteo de MP."
        },
        {
          "name": "Battle Roar",
          "kind": "active",
          "learn": 28,
          "max": 70,
          "custom": true,
          "icon": "battle-roar",
          "desc": "Un rugido que te hincha: +35% de HP máximo y te cura esa misma cantidad. Dura 600 segundos."
        },
        {
          "name": "Detect Insect Weakness",
          "kind": "active",
          "learn": 32,
          "icon": "detect-insect-weakness",
          "desc": "+P.Atk. contra insectos."
        },
        {
          "name": "Lionheart",
          "kind": "active",
          "learn": 36,
          "max": 62,
          "custom": true,
          "icon": "lionheart",
          "desc": "Tu ánimo no se quiebra: +60 de resistencia a aturdimiento, raíz, sueño y parálisis, y +60% contra el robo de buffs. Dura 30 segundos."
        }
      ]
    },
    {
      "id": "warlord",
      "name": "Warlord",
      "from": 40,
      "to": 75,
      "blurb": "La lanza y todo lo que viene con ella: barridos que agarran a varios enemigos a la vez, provocaciones y las posturas que deciden si pegás o aguantás.",
      "skills": [
        {
          "name": "Whirlwind",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "whirlwind",
          "desc": "Barrido amplio con lanza que pega a todos los que tengas alrededor: 4.100 de potencia, ignora el escudo."
        },
        {
          "name": "Thunder Storm",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "thunder-storm",
          "desc": "La versión grande del barrido: 6.320 de potencia sobre todo lo que te rodea."
        },
        {
          "name": "Detect Animal Weakness",
          "kind": "active",
          "learn": 40,
          "icon": "detect-animal-weakness",
          "desc": "+P.Atk. contra animales."
        },
        {
          "name": "Focus Attack",
          "kind": "toggle",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "focus-attack",
          "desc": "Postura de lanza: +6 de precisión y +30% de daño crítico."
        },
        {
          "name": "Howl",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "custom": true,
          "icon": "howl",
          "desc": "Aullido que baja 10% la P.Atk. a hasta 8 enemigos cercanos durante 15 segundos."
        },
        {
          "name": "Provoke",
          "kind": "active",
          "learn": 43,
          "max": 60,
          "icon": "provoke",
          "desc": "Atrae hacia vos a los monstruos que estén dentro de 900 de distancia."
        },
        {
          "name": "Final Frenzy",
          "kind": "passive",
          "learn": 43,
          "max": 74,
          "icon": "final-frenzy",
          "desc": "Cuando te baja la vida, sube sola la P.Atk. hasta +213,3."
        },
        {
          "name": "Detect Plant Weakness",
          "kind": "active",
          "learn": 46,
          "icon": "detect-plant-weakness",
          "desc": "+P.Atk. contra plantas."
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
          "name": "Detect Beast Weakness",
          "kind": "active",
          "learn": 52,
          "icon": "detect-beast-weakness",
          "desc": "+P.Atk. contra bestias."
        },
        {
          "name": "Revival",
          "kind": "active",
          "learn": 55,
          "icon": "revival",
          "desc": "Te deja la vida llena en una emergencia. Solo se puede usar con 15% de HP o menos."
        },
        {
          "name": "Shock Stomp",
          "kind": "active",
          "learn": 55,
          "max": 72,
          "icon": "shock-stomp",
          "desc": "Pisotón que sacude a los de alrededor y les cancela el objetivo."
        },
        {
          "name": "Detect Dragon Weakness",
          "kind": "active",
          "learn": 58,
          "icon": "detect-dragon-weakness",
          "desc": "+P.Atk. contra dragones."
        },
        {
          "name": "Fell Swoop",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "fell-swoop",
          "desc": "+10 de alcance con lanza durante 300 segundos."
        },
        {
          "name": "Polearm Accuracy",
          "kind": "toggle",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "polearm-accuracy",
          "desc": "Postura de lanza: +4 de precisión con un goteo de 4,2 de MP por segundo a nivel 80."
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
          "name": "Wrath",
          "kind": "active",
          "learn": 66,
          "max": 74,
          "icon": "wrath",
          "desc": "Barrido de lanza que además le saca la mitad del CP a los de adelante: 2.700 de potencia."
        }
      ]
    },
    {
      "id": "dreadnought",
      "name": "Dreadnought",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase lleva el juego de área a su máximo: onda de choque a distancia, pisotón y el alcance extendido de la lanza.",
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
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "icon": "skill-mastery",
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu STR."
        },
        {
          "name": "Eye of Hunter",
          "kind": "active",
          "learn": 77,
          "icon": "eye-of-hunter",
          "desc": "+P.Atk. contra insectos, plantas y animales, todo junto."
        },
        {
          "name": "Shock Blast",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "shock-blast",
          "desc": "Onda de choque a distancia con lanza: 3.800 de potencia, les cancela el objetivo, los aturde 3 segundos y les baja 15% las defensas por 10."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "icon": "battle-force",
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Parry Stance",
          "kind": "toggle",
          "learn": 78,
          "custom": true,
          "icon": "parry-stance",
          "desc": "Te cubrís con el arma: +25% de defensas a cambio de -20% de velocidad de ataque, -10% de movimiento y -4 de precisión. Consume MP."
        },
        {
          "name": "Earthquake",
          "kind": "active",
          "learn": 78,
          "icon": "earthquake",
          "desc": "Sacrificás HP para golpear a todo lo que te rodea y cancelarles el objetivo: 5.040 de potencia, ignora el escudo."
        },
        {
          "name": "Eye of Slayer",
          "kind": "active",
          "learn": 78,
          "icon": "eye-of-slayer",
          "desc": "+P.Atk. contra bestias, criaturas mágicas, gigantes y dragones."
        },
        {
          "name": "Master of Combat",
          "kind": "passive",
          "learn": 78,
          "icon": "master-of-combat",
          "desc": "+80 de P.Atk. y +5% de CP máximo con espada, mazo, lanza, espadas dobles o puños."
        },
        {
          "name": "Braveheart",
          "kind": "active",
          "learn": 78,
          "icon": "braveheart",
          "desc": "Recuperás 1.000 de CP de un saque."
        },
        {
          "name": "Symbol of Honor",
          "kind": "active",
          "learn": 80,
          "icon": "symbol-of-honor",
          "desc": "Planta un símbolo que maximiza la recuperación de HP y CP de los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
