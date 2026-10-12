// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const phoenixKnight: ClassGuide = {
  "slug": "phoenix-knight",
  "name": "Phoenix Knight",
  "subtitle": "Humano · tercera clase de la rama del caballero",
  "intro": "El tanque de luz. Es el que mejor protege a los demás: cura, limpia, se pone adelante y tiene las defensas más altas del juego. Y si todo sale mal, revive solo.",
  "facts": [
    {
      "label": "Camino",
      "value": "Human Fighter → Human Knight → Paladin → Phoenix Knight"
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
      "value": "54 en total: 37 activas y 17 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Defensa · protección de la party · curas de apoyo"
    },
    {
      "label": "Floja en",
      "value": "Daño · velocidad"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Phoenix Knight, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
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
      "id": "human-knight",
      "name": "Human Knight",
      "from": 20,
      "to": 39,
      "blurb": "La base del caballero: escudo, provocación, las primeras curas y la armadura pesada. Acá se decide si vas por la luz o por la sombra.",
      "skills": [
        {
          "name": "Drain Health",
          "kind": "active",
          "learn": 20,
          "max": 36,
          "icon": "drain-health",
          "desc": "Transfiere vida del objetivo hacia vos: te cura el 80% del daño que hacés."
        },
        {
          "name": "Majesty",
          "kind": "active",
          "learn": 20,
          "max": 58,
          "icon": "majesty",
          "desc": "+15% de P.Def. a cambio de -6 de evasión."
        },
        {
          "name": "Shield Stun",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "shield-stun",
          "desc": "Escudazo brutal que aturde 4 segundos. No hace daño. Se resiste por CON."
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
          "name": "Deflect Arrow",
          "kind": "active",
          "learn": 24,
          "max": 49,
          "icon": "deflect-arrow",
          "desc": "+8% de defensa contra ataques de arco."
        },
        {
          "name": "Divine Heal",
          "kind": "active",
          "learn": 28,
          "max": 36,
          "icon": "divine-heal",
          "desc": "Cura de emergencia: 219 de potencia."
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
      "id": "paladin",
      "name": "Paladin",
      "from": 40,
      "to": 75,
      "blurb": "El camino de la luz: daño sagrado contra no-muertos, curas de apoyo y las posturas benditas.",
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
          "name": "Remedy",
          "kind": "active",
          "learn": 40,
          "max": 62,
          "custom": true,
          "icon": "remedy",
          "desc": "Te corta el sangrado a vos mismo. Cubre todos los sangrados que puede tirar un jugador."
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
          "name": "Holy Blessing",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "holy-blessing",
          "desc": "Cura a tu objetivo: 546 de potencia."
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
          "name": "Iron Will",
          "kind": "active",
          "learn": 43,
          "max": 55,
          "icon": "iron-will",
          "desc": "+30% de M.Def."
        },
        {
          "name": "Holy Blade",
          "kind": "toggle",
          "learn": 43,
          "custom": true,
          "icon": "holy-blade",
          "desc": "Postura que envuelve tu hoja en poder sagrado: +5% de P.Atk. y +40 de poder sagrado. El atributo se aplica a los golpes normales y a los skills que no tengan elemento propio."
        },
        {
          "name": "Holy Strike",
          "kind": "active",
          "learn": 46,
          "max": 74,
          "custom": true,
          "icon": "holy-strike",
          "desc": "Daño sagrado que además atrae la atención del enemigo."
        },
        {
          "name": "Aegis Stance",
          "kind": "toggle",
          "learn": 46,
          "icon": "aegis-stance",
          "desc": "Postura con escudo: te defiende de todas las direcciones a cambio de bajar la fuerza del bloqueo."
        },
        {
          "name": "Sacrifice",
          "kind": "active",
          "learn": 52,
          "max": 74,
          "icon": "sacrifice",
          "desc": "Cura a otro sacrificando tu propia vida: 1.170 de potencia."
        },
        {
          "name": "Sanctuary",
          "kind": "active",
          "learn": 52,
          "max": 74,
          "custom": true,
          "icon": "sanctuary",
          "desc": "-23% de P.Atk. a los no-muertos de alrededor durante 15 segundos."
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
          "name": "Shackle",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "icon": "shackle",
          "desc": "Provoca al enemigo y lo deja inmovilizado. Mientras dura no se lo puede volver a inmovilizar."
        },
        {
          "name": "Banish Undead",
          "kind": "active",
          "learn": 55,
          "max": 74,
          "icon": "banish-undead",
          "desc": "Los no-muertos huyen al ver tu naturaleza divina. Puede matar de un golpe. Consume 10 Soul Ore."
        },
        {
          "name": "Mass Shackling",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "icon": "mass-shackling",
          "desc": "La versión en área: provoca a los de alrededor y los deja inmovilizados."
        },
        {
          "name": "Angelic Icon",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "angelic-icon",
          "desc": "Por voluntad de tu dios tu capacidad de pelea se dispara durante un minuto: +30% de defensas, +30% de velocidad de ataque, +100 de crítico, +30 de velocidad — pero las curas casi no te hacen efecto. Solo desde 30% de vida o menos."
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
      "id": "phoenix-knight",
      "name": "Phoenix Knight",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase trae lo que lo vuelve irrompible: la defensa definitiva, el ícono angelical y la resurrección propia.",
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
          "name": "Shield Slam",
          "kind": "active",
          "learn": 77,
          "icon": "shield-slam",
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
          "name": "Physical Mirror",
          "kind": "active",
          "learn": 78,
          "icon": "physical-mirror",
          "desc": "Devuelve el 30% de los debuffs que te llegan por skills físicos y el 10% de los mágicos. Requiere escudo."
        },
        {
          "name": "Knighthood",
          "kind": "passive",
          "learn": 78,
          "icon": "knighthood",
          "desc": "Más P.Def. con armadura pesada y más defensa de escudo."
        },
        {
          "name": "Soul of the Phoenix",
          "kind": "active",
          "learn": 79,
          "icon": "soul-of-the-phoenix",
          "desc": "Te permite revivir solo, con la vida llena y conservando los buffs. Consume una Blood of the Phoenix."
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
