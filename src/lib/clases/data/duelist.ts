// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const duelist: ClassGuide = {
  "slug": "duelist",
  "name": "Duelist",
  "subtitle": "Humano · tercera clase de la rama del guerrero",
  "intro": "Carga energía sónica golpe a golpe y la descarga en ataques cada vez más brutales. Es la clase de duelo por excelencia: todo su kit está pensado para ganar un uno contra uno largo.",
  "facts": [
    {
      "label": "Camino",
      "value": "Human Fighter → Warrior → Gladiator → Duelist"
    },
    {
      "label": "Armadura",
      "value": "Pesada o ligera"
    },
    {
      "label": "Arma",
      "value": "Espadas dobles"
    },
    {
      "label": "Habilidades",
      "value": "59 en total: 38 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Duelo uno contra uno · daño sostenido · aguante"
    },
    {
      "label": "Floja en",
      "value": "Alcance · movilidad"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Duelist, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 15,
          "desc": "El golpe mortal básico de daga."
        },
        {
          "name": "Power Shot",
          "kind": "active",
          "learn": 5,
          "max": 15,
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
          "desc": "+25% de P.Atk. por un momento."
        },
        {
          "name": "Stun Attack",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "desc": "Mazazo que deja al objetivo aturdido. Mientras dura no se lo puede volver a aturdir."
        },
        {
          "name": "Boost HP",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "desc": "+480 de HP máximo."
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
          "name": "Polearm Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 36,
          "desc": "+129,3 de P.Atk. con lanza."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "+81,3 de P.Def. y +6 de evasión con armadura ligera."
        },
        {
          "name": "Heavy Armor Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "+79,3 de P.Def. con armadura pesada."
        },
        {
          "name": "Wild Sweep",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "desc": "Barrido de lanza que agarra a varios enemigos de adelante: 1.820 de potencia."
        },
        {
          "name": "Power Smash",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "desc": "Golpe fuerte sobre un solo enemigo: 2.180 de potencia."
        },
        {
          "name": "Sword Blunt Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "+20,5 de P.Atk. con espada o mazo."
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
          "name": "Vital Force",
          "kind": "passive",
          "learn": 24,
          "max": 32,
          "desc": "Sentado recuperás +6,7 de HP y +2,5 de MP por tick."
        },
        {
          "name": "Fast HP Recovery",
          "kind": "passive",
          "learn": 24,
          "max": 74,
          "desc": "+2,7 a la regeneración de HP."
        },
        {
          "name": "Accuracy",
          "kind": "toggle",
          "learn": 24,
          "desc": "Mientras lo tenés activo, +3 de precisión a cambio de un goteo de MP."
        },
        {
          "name": "Battle Roar",
          "kind": "active",
          "learn": 28,
          "custom": true,
          "desc": "Un rugido que te hincha: +35% de HP máximo y te cura esa misma cantidad. Dura 600 segundos."
        },
        {
          "name": "Detect Insect Weakness",
          "kind": "active",
          "learn": 32,
          "desc": "+P.Atk. contra insectos."
        },
        {
          "name": "Lionheart",
          "kind": "active",
          "learn": 36,
          "max": 62,
          "custom": true,
          "desc": "Tu ánimo no se quiebra: +60 de resistencia a aturdimiento, raíz, sueño y parálisis, y +60% contra el robo de buffs. Dura 30 segundos."
        }
      ]
    },
    {
      "id": "gladiator",
      "name": "Gladiator",
      "from": 40,
      "to": 75,
      "blurb": "La energía sónica, que es el motor de la clase: se carga golpeando y se gasta en ataques grandes. También llegan las posturas y el juego de espadas dobles.",
      "skills": [
        {
          "name": "Triple Slash",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Tres tajos rápidos con espadas dobles: 2.131 de potencia, ignora el escudo."
        },
        {
          "name": "Sonic Focus",
          "kind": "active",
          "learn": 40,
          "max": 70,
          "desc": "Carga energía sónica para los demás skills Sonic. Se acumula hasta nivel 7 y se disipa a los 10 minutos sin usarla."
        },
        {
          "name": "Detect Animal Weakness",
          "kind": "active",
          "learn": 40,
          "desc": "+P.Atk. contra animales."
        },
        {
          "name": "Dual Weapon Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "desc": "+129,3 de P.Atk. con espadas dobles."
        },
        {
          "name": "Fatal Strike",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Golpe demoledor que ignora la defensa del escudo: 4.100 de potencia."
        },
        {
          "name": "Hammer Crush",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "desc": "Mazazo que sacude y hace daño a la vez: 3.870 de potencia, ignora el escudo."
        },
        {
          "name": "Two-handed Weapon Mastery",
          "kind": "passive",
          "learn": 40,
          "max": 74,
          "desc": "+129,3 de P.Atk. y +3 de precisión con armas a dos manos."
        },
        {
          "name": "Sonic Blaster",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "desc": "Dispara un haz de energía sónica a distancia: 1.827 de potencia. Pide carga 2."
        },
        {
          "name": "Sonic Buster",
          "kind": "active",
          "learn": 43,
          "max": 74,
          "desc": "Onda sónica sobre los que tengas cerca. Pide carga 2 y consume 3 Energy Stones."
        },
        {
          "name": "Final Frenzy",
          "kind": "passive",
          "learn": 43,
          "max": 66,
          "desc": "Cuando te baja la vida, sube sola la P.Atk. hasta +213,3."
        },
        {
          "name": "Detect Plant Weakness",
          "kind": "active",
          "learn": 46,
          "desc": "+P.Atk. contra plantas."
        },
        {
          "name": "Double Sonic Slash",
          "kind": "active",
          "learn": 49,
          "max": 74,
          "desc": "Tajo cargado de energía sónica: 3.196 de potencia. Pide carga 3."
        },
        {
          "name": "Sonic Storm",
          "kind": "active",
          "learn": 49,
          "max": 74,
          "desc": "Masa de energía sónica que golpea a varios a distancia. Pide carga 2 y consume 3 Energy Stones."
        },
        {
          "name": "Detect Beast Weakness",
          "kind": "active",
          "learn": 52,
          "desc": "+P.Atk. contra bestias."
        },
        {
          "name": "Triple Sonic Slash",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "desc": "Tres tajos con la energía sónica encima: 4.262 de potencia, ignora el escudo. Pide carga 4."
        },
        {
          "name": "Detect Dragon Weakness",
          "kind": "active",
          "learn": 58,
          "desc": "+P.Atk. contra dragones."
        },
        {
          "name": "War Frenzy",
          "kind": "toggle",
          "learn": 58,
          "max": 74,
          "custom": true,
          "desc": "Postura que te templa la cabeza: +15% de resistencia al aturdimiento y +20% al sueño, con goteo de MP."
        },
        {
          "name": "Sonic Move",
          "kind": "active",
          "learn": 62,
          "max": 68,
          "desc": "+66 de velocidad. Pide carga 3."
        },
        {
          "name": "Duelist Spirit",
          "kind": "active",
          "learn": 64,
          "max": 72,
          "custom": true,
          "desc": "Afila tu juego de espadas dobles: +12% de velocidad de ataque y +10% de daño en PvP, tanto con golpes normales como con skills. Dura 1 minuto."
        }
      ]
    },
    {
      "id": "duelist",
      "name": "Duelist",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra el ciclo sónico con los golpes de carga alta y la barrera, más el espíritu que sube el daño en PvP.",
      "skills": [
        {
          "name": "Wisdom",
          "kind": "passive",
          "learn": 76,
          "desc": "Más resistencia a Hold, Sleep y ataques mentales."
        },
        {
          "name": "Health",
          "kind": "passive",
          "learn": 76,
          "desc": "Más resistencia a veneno y sangrado."
        },
        {
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu STR."
        },
        {
          "name": "Riposte Stance",
          "kind": "toggle",
          "learn": 77,
          "custom": true,
          "desc": "Devolvés con el arma lo que te pegan, y tenés chance de reflejar también buffs y debuffs. A cambio perdés velocidad y precisión."
        },
        {
          "name": "Eye of Hunter",
          "kind": "active",
          "learn": 77,
          "desc": "+P.Atk. contra insectos, plantas y animales, todo junto."
        },
        {
          "name": "Battle Force",
          "kind": "active",
          "learn": 77,
          "desc": "Transfiere tu fuerza a un compañero de party. Se corta si recibís daño, y es el requisito de los símbolos."
        },
        {
          "name": "Sonic Rage",
          "kind": "active",
          "learn": 78,
          "desc": "Golpe de espadas dobles que ataca de lejos y de paso carga energía sónica."
        },
        {
          "name": "Eye of Slayer",
          "kind": "active",
          "learn": 78,
          "desc": "+P.Atk. contra bestias, criaturas mágicas, gigantes y dragones."
        },
        {
          "name": "Master of Combat",
          "kind": "passive",
          "learn": 78,
          "desc": "+80 de P.Atk. y +5% de CP máximo con espada, mazo, lanza, espadas dobles o puños."
        },
        {
          "name": "Braveheart",
          "kind": "active",
          "learn": 78,
          "desc": "Recuperás 1.000 de CP de un saque."
        },
        {
          "name": "Sonic Barrier",
          "kind": "active",
          "learn": 79,
          "desc": "Barrera que te vuelve inmune a golpes, skills y buffs por un momento. Pide carga 5."
        },
        {
          "name": "Symbol of Energy",
          "kind": "active",
          "learn": 80,
          "desc": "Planta un símbolo que sube la P.Atk. y la carga de los que estén cerca. Pide Battle Force nivel 2 y consume un Battle Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
