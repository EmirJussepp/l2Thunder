// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const titan: ClassGuide = {
  "slug": "titan",
  "name": "Titan",
  "subtitle": "Orco · tercera clase de la rama del saqueador",
  "intro": "El que más fuerte pega del juego, y el que menos se cuida. Frenzy y Guts se encienden cuando está por morir y lo convierten en otra cosa; el Zealot le suma velocidad y crítico a cambio de recibir la mitad de curación. Pelear con un Titan es una carrera contra su barra de vida.",
  "facts": [
    {
      "label": "Camino",
      "value": "OrcFighter → OrcRaider → Destroyer → Titan"
    },
    {
      "label": "Armadura",
      "value": "Pesada"
    },
    {
      "label": "Arma",
      "value": "Arma a dos manos"
    },
    {
      "label": "Habilidades",
      "value": "52 en total: 31 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Daño bruto · furia al borde de la muerte"
    },
    {
      "label": "Floja en",
      "value": "Defensa · control · aguante si la pelea se estira"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Titan, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 15,
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
      "id": "orcraider",
      "name": "OrcRaider",
      "from": 20,
      "to": 39,
      "blurb": "El camino del saqueador: armas a dos manos, furia y las pasivas de armadura pesada.",
      "skills": [
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
          "max": 74,
          "icon": "sword-blunt-mastery",
          "desc": "+20,5 de P.Atk. con espada o mazo."
        },
        {
          "name": "Two-handed Weapon Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "two-handed-weapon-mastery",
          "desc": "+129,3 de P.Atk. y +3 de precisión con armas a dos manos."
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
          "name": "Rage",
          "kind": "active",
          "learn": 24,
          "max": 55,
          "custom": true,
          "icon": "rage",
          "desc": "Furia ciega: +20% de P.Atk., +30% de daño crítico y más velocidad, a cambio de -20% de P.Def. y -8 de evasión. Dura 90 segundos."
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
          "name": "Frenzy",
          "kind": "active",
          "learn": 32,
          "max": 55,
          "custom": true,
          "icon": "frenzy",
          "desc": "Con poca vida te volvés una bestia: +50% de P.Atk. y el doble de velocidad de ataque durante 90 segundos. En L2Thunder tiene camino de encantamiento Power: al +15 llega a 1,65 veces de ataque y 2,15 de velocidad."
        },
        {
          "name": "Guts",
          "kind": "active",
          "learn": 36,
          "max": 52,
          "custom": true,
          "icon": "guts",
          "desc": "Cuando estás por morir, el cuerpo se endurece: hasta el doble de P.Def. durante 90 segundos. En L2Thunder tiene camino de encantamiento Power: cada nivel suma 1% y al +15 llega a 2,15 veces."
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
      "id": "destroyer",
      "name": "Destroyer",
      "from": 40,
      "to": 75,
      "blurb": "La segunda clase trae lo que define al Titan: Frenzy y Guts, que se encienden con poca vida, más el Zealot.",
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
          "name": "Fatal Strike",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "fatal-strike",
          "desc": "Golpe demoledor que ignora la defensa del escudo: 4.100 de potencia."
        },
        {
          "name": "Hammer Crush",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "hammer-crush",
          "desc": "Mazazo que sacude y hace daño a la vez: 3.870 de potencia, ignora el escudo."
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
          "name": "Polearm Accuracy",
          "kind": "toggle",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "polearm-accuracy",
          "desc": "Postura de lanza: +4 de precisión con un goteo de 4,2 de MP por segundo a nivel 80."
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
          "name": "Crush of Doom",
          "kind": "active",
          "learn": 60,
          "max": 74,
          "custom": true,
          "icon": "crush-of-doom",
          "desc": "Mazazo de 7.635 de potencia a quemarropa. El golpe fuerte del Fortune Seeker."
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
      "id": "titan",
      "name": "Titan",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase afina la furia hasta el final y suma los últimos tótems.",
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
          "name": "Armor Crush",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "armor-crush",
          "desc": "Rompe la armadura del objetivo: 3.500 de potencia y lo aturde. Acierta el 99% de las veces."
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
