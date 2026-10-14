// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const maestro: ClassGuide = {
  "slug": "maestro",
  "name": "Maestro",
  "subtitle": "Enano · tercera clase de la rama del herrero",
  "intro": "El que fabrica todo lo que el servidor usa. Sin un Maestro no hay equipo crafteado, y eso lo convierte en una pieza central de la economía más que en un peleador. Igual se defiende: golem mecánico, bombas andantes y un mazazo que rompe armaduras.",
  "facts": [
    {
      "label": "Camino",
      "value": "DwarvenFighter → Artisan → Warsmith → Maestro"
    },
    {
      "label": "Armadura",
      "value": "Pesada o ligera"
    },
    {
      "label": "Arma",
      "value": "Mazo"
    },
    {
      "label": "Habilidades",
      "value": "54 en total: 30 activas y 24 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Fabricación · máquinas de guerra · economía"
    },
    {
      "label": "Floja en",
      "value": "Daño propio · movilidad"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Maestro, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "dwarvenfighter",
      "name": "DwarvenFighter",
      "from": 1,
      "to": 19,
      "blurb": "La base de los dos enanos. Acá están la capacidad de carga, la velocidad que compensa el tamaño y el primer nivel de Create Item.",
      "skills": [
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "icon": "lucky",
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Dwarven Craft",
          "kind": "active",
          "learn": 1,
          "icon": "dwarven-craft",
          "desc": "Abre el libro de recetas enanas. Es la puerta de entrada a todo el oficio."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "icon": "common-craft",
          "desc": "Permite leer recetas comunes."
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
          "name": "Create Item",
          "kind": "passive",
          "learn": 5,
          "max": 62,
          "custom": true,
          "icon": "create-item",
          "desc": "Fabrica objetos a partir de recetas. Cada nivel habilita un grado más de equipo. ⚠ Mientras el grado S esté capeado, el tope de fabricación es el grado A."
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
          "name": "Expand Dwarven Craft",
          "kind": "passive",
          "learn": 5,
          "max": 62,
          "icon": "expand-dwarven-craft",
          "desc": "Sube a 48 la cantidad de recetas enanas que podés tener registradas al mismo tiempo."
        },
        {
          "name": "Sweeper",
          "kind": "active",
          "learn": 10,
          "icon": "sweeper",
          "desc": "Recoge el botín del cadáver que marcaste con Spoil. Sin esto, el Spoil no sirve de nada."
        },
        {
          "name": "Weight Limit",
          "kind": "passive",
          "learn": 10,
          "max": 46,
          "icon": "weight-limit",
          "desc": "Multiplica por 4 lo que podés cargar. Es la pasiva que convierte al enano en la mula del servidor."
        },
        {
          "name": "Spoil",
          "kind": "active",
          "learn": 10,
          "icon": "spoil",
          "desc": "Marca al enemigo para robarle. Si muere marcado, el Sweeper le saca un botín que no suelta de otra forma. Es el motivo de existir de la clase."
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
      "id": "artisan",
      "name": "Artisan",
      "from": 20,
      "to": 39,
      "blurb": "El camino del artesano: el libro de recetas enanas, el Crystallize para desarmar objetos y el primer Golem Mecánico.",
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
          "name": "Blunt Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "icon": "blunt-mastery",
          "desc": "+129 de P.Atk. con mazo, más probabilidad de aturdir y más daño crítico."
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
          "name": "Crystallize",
          "kind": "passive",
          "learn": 20,
          "max": 70,
          "icon": "crystallize",
          "desc": "Deshace un objeto y te devuelve sus cristales. Cada nivel permite desarmar un grado más alto."
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
          "name": "Summon Mechanic Golem",
          "kind": "active",
          "learn": 28,
          "max": 72,
          "custom": true,
          "icon": "summon-mechanic-golem",
          "desc": "Invoca el Golem Mecánico, el ayudante de combate del enano. Consume 4 Blacksmith's Frame y dura 20 minutos. En L2Thunder se lo reforzó: +50% de P.Def. y M.Def. y +1.000 de HP sobre los valores originales."
        }
      ]
    },
    {
      "id": "warsmith",
      "name": "Warsmith",
      "from": 40,
      "to": 75,
      "blurb": "La segunda clase es donde el oficio se vuelve serio: más grados de fabricación, más recetas registradas y el Big Boom.",
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
          "name": "Hammer Crush",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "hammer-crush",
          "desc": "Mazazo que sacude y hace daño a la vez: 3.870 de potencia, ignora el escudo."
        },
        {
          "name": "Summon Siege Golem",
          "kind": "active",
          "learn": 49,
          "icon": "summon-siege-golem",
          "desc": "Invoca el Golem de Asedio, la máquina pesada para tirar puertas. Consume 70 Siege Golem Shards y dura 20 minutos. Tarda 5 minutos en armarse."
        },
        {
          "name": "Summon Big Boom",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "summon-big-boom",
          "desc": "Invoca un Big Boom, la bomba andante enana. Consume 5 Blacksmith's Frame y dura 20 minutos."
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
        },
        {
          "name": "Summon Wild Hog Cannon",
          "kind": "active",
          "learn": 68,
          "icon": "summon-wild-hog-cannon",
          "desc": "Invoca el Cañón Jabalí, artillería de asedio. Consume 30 Wild Hog Cannon Shards y dura 20 minutos. Tarda 5 minutos en armarse."
        },
        {
          "name": "Summon Swoop Cannon",
          "kind": "active",
          "learn": 68,
          "icon": "summon-swoop-cannon",
          "desc": "Invoca el Cañón Swoop, la artillería ligera del Fortune Seeker. Consume 21 Wild Hog Cannon Shards y dura 20 minutos."
        }
      ]
    },
    {
      "id": "maestro",
      "name": "Maestro",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase cierra con el Armor Crush, que aturde casi siempre, y el Symbol of Resistance.",
      "skills": [
        {
          "name": "War Cry",
          "kind": "active",
          "learn": 76,
          "icon": "war-cry",
          "desc": "+25% de P.Atk. por un momento."
        },
        {
          "name": "Power Break",
          "kind": "active",
          "learn": 76,
          "icon": "power-break",
          "desc": "Le arranca el arma de las manos al enemigo durante 6 segundos. Acierta el 80% de las veces."
        },
        {
          "name": "Fatal Strike",
          "kind": "active",
          "learn": 76,
          "icon": "fatal-strike",
          "desc": "Golpe demoledor que ignora la defensa del escudo: 4.100 de potencia."
        },
        {
          "name": "Provoke",
          "kind": "active",
          "learn": 76,
          "icon": "provoke",
          "desc": "Atrae hacia vos a los monstruos que estén dentro de 900 de distancia."
        },
        {
          "name": "Final Frenzy",
          "kind": "passive",
          "learn": 76,
          "icon": "final-frenzy",
          "desc": "Cuando te baja la vida, sube sola la P.Atk. hasta +213,3."
        },
        {
          "name": "Two-handed Weapon Mastery",
          "kind": "passive",
          "learn": 76,
          "icon": "two-handed-weapon-mastery",
          "desc": "+129,3 de P.Atk. y +3 de precisión con armas a dos manos."
        },
        {
          "name": "Crush of Doom",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "crush-of-doom",
          "desc": "Mazazo de 7.635 de potencia a quemarropa. El golpe fuerte del Fortune Seeker."
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
          "name": "Spoil Crush",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "icon": "spoil-crush",
          "desc": "Golpe de 5.976 de potencia que además marca al enemigo. Pegar y robar en el mismo movimiento."
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
          "name": "Riposte Stance",
          "kind": "toggle",
          "learn": 77,
          "custom": true,
          "icon": "riposte-stance",
          "desc": "Devolvés con el arma lo que te pegan, y tenés chance de reflejar también buffs y debuffs. A cambio perdés velocidad y precisión."
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
