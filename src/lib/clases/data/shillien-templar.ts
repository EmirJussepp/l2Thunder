// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const shillienTemplar: ClassGuide = {
  "slug": "shillien-templar",
  "name": "Shillien Templar",
  "subtitle": "Elfo Oscuro · tercera clase de la rama del caballero",
  "intro": "El tanque que además molesta. Aguanta como caballero pero trae cúbicos que atacan por él, un rayo que paraliza y un giro de espada que le baja el ataque a todo lo que tenga alrededor. Es el tanque que no se queda quieto.",
  "facts": [
    {
      "label": "Camino",
      "value": "DarkFighter → PalusKnight → ShillienKnight → Shillien Templar"
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
      "value": "54 en total: 34 activas y 20 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Defensa · parálisis · cúbicos · castigo en área"
    },
    {
      "label": "Floja en",
      "value": "Daño sostenido · apoyo a la party"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Shillien Templar, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
          "max": 46,
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
          "max": 74,
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
      "id": "shillienknight",
      "name": "ShillienKnight",
      "from": 40,
      "to": 75,
      "blurb": "La rama de castigo: el rayo que paraliza, más cúbicos y el aguante de armadura pesada.",
      "skills": [
        {
          "name": "Aura of Hate",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "aura-of-hate",
          "desc": "Provoca a todos los enemigos cercanos para que te ataquen."
        },
        {
          "name": "Summon Phantom Cubic",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "icon": "summon-phantom-cubic",
          "desc": "Invoca un cúbico fantasma que ataca solo a tu objetivo. Es el que más seguido golpea de todos los cúbicos. Dura 30 minutos."
        },
        {
          "name": "Hex",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "hex",
          "desc": "Maldición que le baja un 15% la P.Def. al objetivo durante 10 segundos. Acierta el 80%."
        },
        {
          "name": "Life Leech",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "life-leech",
          "desc": "Chupa la vida del objetivo: le hace daño y te cura con todo lo que le sacás."
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
          "name": "Summon Vampiric Cubic",
          "kind": "active",
          "learn": 43,
          "max": 72,
          "custom": true,
          "icon": "summon-vampiric-cubic",
          "desc": "Invoca un cúbico vampírico que ataca por vos y te devuelve parte del daño como vida. Dura 30 minutos."
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
          "name": "Corpse Plague",
          "kind": "active",
          "learn": 46,
          "max": 70,
          "custom": true,
          "icon": "corpse-plague",
          "desc": "Del cadáver se levanta una nube de peste que lo consume: envenena hasta 8 enemigos cercanos por 5.100 de daño en 30 segundos."
        },
        {
          "name": "Summon Viper Cubic",
          "kind": "active",
          "learn": 49,
          "max": 72,
          "custom": true,
          "icon": "summon-viper-cubic",
          "desc": "Invoca un cúbico víbora que envenena a tu objetivo. Dura 30 minutos."
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
          "name": "Judgment",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "custom": true,
          "icon": "judgment",
          "desc": "Golpe de energía oscura que obliga al enemigo a volverse contra vos: 3.609 de potencia y -35% de daño crítico por 30 segundos."
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
          "name": "Banish Seraph",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "icon": "banish-seraph",
          "desc": "Los ángeles huyen de tu presencia. Puede matar de un golpe. Consume 10 Soul Ore."
        },
        {
          "name": "Lightning Strike",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "lightning-strike",
          "desc": "Rayo que paraliza al objetivo 5 segundos además de hacerle daño. Acierta hasta el 80% y tiene 2 minutos de espera."
        },
        {
          "name": "Aegis",
          "kind": "passive",
          "learn": 60,
          "icon": "aegis",
          "desc": "Con escudo equipado, te defiende de todas las direcciones."
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
      "id": "shillien-templar",
      "name": "Shillien Templar",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma el Demonic Blade Dance, que castiga a ocho enemigos a la vez, y el cúbico para toda la party.",
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
          "name": "Touch of Death",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "touch-of-death",
          "desc": "Maldición oscura que cuesta 600 de HP: le parte el CP máximo a la mitad, le destruye el 60% del que le queda, le entran los debuffs un 31% más seguido, se cura la mitad y sus skills tardan 20% más. Nunca falla. Solo desde 45% de vida o menos."
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
