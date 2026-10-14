// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const doomcryer: ClassGuide = {
  "slug": "doomcryer",
  "name": "Doomcryer",
  "subtitle": "Orco · tercera clase de la rama del gritador",
  "intro": "El buffer orco. Los cantos cubren casi todo lo que una party necesita —ataque, defensa, crítico, precisión, evasión, velocidad— y encima cura y devuelve CP. Las Flames of Invincibility hacen invulnerable a la party entera durante medio minuto.",
  "facts": [
    {
      "label": "Camino",
      "value": "OrcMystic → OrcShaman → Warcryer → Doomcryer"
    },
    {
      "label": "Armadura",
      "value": "Túnica o ligera"
    },
    {
      "label": "Arma",
      "value": "Maza"
    },
    {
      "label": "Habilidades",
      "value": "66 en total: 43 activas y 23 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Buffs de party y clan · CP · invulnerabilidad de grupo"
    },
    {
      "label": "Floja en",
      "value": "Daño · curación de HP grande"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Doomcryer, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "orcmystic",
      "name": "OrcMystic",
      "from": 1,
      "to": 19,
      "blurb": "La base de los dos místicos orcos: el drenaje de vida, el miedo, el sueño y los primeros venenos.",
      "skills": [
        {
          "name": "Magician's Movement",
          "kind": "passive",
          "learn": 1,
          "icon": "magicians-movement",
          "desc": "Más velocidad de ataque con túnica puesta."
        },
        {
          "name": "Toughness",
          "kind": "passive",
          "learn": 1,
          "icon": "toughness",
          "desc": "+20% de resistencia a inmovilización, sueño y veneno. Es la dureza orca, y viene de arranque."
        },
        {
          "name": "Spellcraft",
          "kind": "passive",
          "learn": 1,
          "icon": "spellcraft",
          "desc": "Duplica la velocidad de casteo con túnica puesta."
        },
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "icon": "lucky",
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Mana Recovery",
          "kind": "passive",
          "learn": 1,
          "icon": "mana-recovery",
          "desc": "Más regeneración de MP con túnica puesta."
        },
        {
          "name": "Soul Cry",
          "kind": "toggle",
          "learn": 1,
          "max": 72,
          "icon": "soul-cry",
          "desc": "Mientras lo tenés activo: +375 de P.Atk., a cambio de maná constante."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "icon": "common-craft",
          "desc": "Permite leer recetas comunes."
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
          "name": "Anti Magic",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "icon": "anti-magic",
          "desc": "+108 de M.Def."
        },
        {
          "name": "Weapon Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "icon": "weapon-mastery",
          "desc": "+79 y +45% de P.Atk., +99 y +17% de M.Atk. Con arco o pole, menos casteo y menos precisión."
        },
        {
          "name": "Robe Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "icon": "robe-mastery",
          "desc": "+128,8 de P.Def. con túnica."
        },
        {
          "name": "Light Armor Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "custom": true,
          "icon": "light-armor-mastery-4d45b3",
          "desc": "Con armadura ligera: +118 de P.Def., casi el doble de velocidad de casteo, +25% de velocidad de ataque y +20% de recuperación de MP."
        },
        {
          "name": "Soul Shield",
          "kind": "active",
          "learn": 7,
          "max": 35,
          "icon": "soul-shield",
          "desc": "+15% de P.Def. a un compañero durante 20 minutos."
        },
        {
          "name": "Life Drain",
          "kind": "active",
          "learn": 7,
          "max": 35,
          "icon": "life-drain",
          "desc": "Drena la vida del enemigo y te la pasa."
        },
        {
          "name": "Venom",
          "kind": "active",
          "learn": 7,
          "max": 52,
          "custom": true,
          "icon": "venom",
          "desc": "Veneno sobre un objetivo durante 30 segundos."
        },
        {
          "name": "Dreaming Spirit",
          "kind": "active",
          "learn": 7,
          "max": 74,
          "icon": "dreaming-spirit",
          "desc": "Duerme al objetivo 6 segundos. Cualquier daño lo despierta."
        },
        {
          "name": "Chill Flame",
          "kind": "active",
          "learn": 7,
          "max": 14,
          "custom": true,
          "icon": "chill-flame",
          "desc": "Llama helada que va quemando al objetivo durante 15 segundos."
        },
        {
          "name": "Heavy Armor Mastery",
          "kind": "passive",
          "learn": 14,
          "max": 74,
          "custom": true,
          "icon": "heavy-armor-mastery-a46092",
          "desc": "Con armadura pesada: +93,3 de P.Def., +71% de bloqueo y +25% de recuperación de HP."
        },
        {
          "name": "Chant of Battle",
          "kind": "active",
          "learn": 14,
          "max": 44,
          "custom": true,
          "icon": "chant-of-battle",
          "desc": "Para toda la party: +15% de P.Atk."
        },
        {
          "name": "Fear",
          "kind": "active",
          "learn": 14,
          "max": 74,
          "icon": "fear",
          "desc": "El enemigo sale corriendo 5 segundos. Acierta el 90% de las veces."
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
      "id": "orcshaman",
      "name": "OrcShaman",
      "from": 20,
      "to": 39,
      "blurb": "El primer cambio de clase. Aparecen los buffs básicos, los DoT elementales y las dos posturas de maná que suben ataque o defensa.",
      "skills": [
        {
          "name": "Stun Attack",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "icon": "stun-attack",
          "desc": "Mazazo que deja al objetivo aturdido. Mientras dura no se lo puede volver a aturdir."
        },
        {
          "name": "Quick Recovery",
          "kind": "passive",
          "learn": 20,
          "max": 48,
          "icon": "quick-recovery",
          "desc": "-30% al tiempo de espera de los skills mágicos."
        },
        {
          "name": "Boost Mana",
          "kind": "passive",
          "learn": 20,
          "max": 72,
          "custom": true,
          "icon": "boost-mana",
          "desc": "+800 de MP máximo."
        },
        {
          "name": "Chant of Fire",
          "kind": "active",
          "learn": 20,
          "max": 52,
          "custom": true,
          "icon": "chant-of-fire",
          "desc": "Para toda la party: +30% de M.Def."
        },
        {
          "name": "Chant of Shielding",
          "kind": "active",
          "learn": 20,
          "max": 40,
          "custom": true,
          "icon": "chant-of-shielding",
          "desc": "Para toda la party: +15% de P.Def."
        },
        {
          "name": "Madness",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "icon": "madness",
          "desc": "Lo vuelve loco: ataca a cualquiera, incluso a los suyos."
        },
        {
          "name": "Frost Flame",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "custom": true,
          "icon": "frost-flame",
          "desc": "La versión grande de la llama helada: 60 de potencia en 15 segundos."
        },
        {
          "name": "Seal of Poison",
          "kind": "active",
          "learn": 20,
          "max": 70,
          "custom": true,
          "icon": "seal-of-poison",
          "desc": "Sello venenoso en un radio de 450: 81 de potencia en 30 segundos."
        },
        {
          "name": "Chant of Life",
          "kind": "active",
          "learn": 20,
          "max": 74,
          "custom": true,
          "icon": "chant-of-life",
          "desc": "Cura a toda la party con 132 de potencia repartidos en el tiempo."
        },
        {
          "name": "Fast Spell Casting",
          "kind": "passive",
          "learn": 25,
          "max": 56,
          "icon": "fast-spell-casting",
          "desc": "+18% de velocidad de casteo."
        },
        {
          "name": "Fast Mana Recovery",
          "kind": "passive",
          "learn": 25,
          "max": 74,
          "icon": "fast-mana-recovery",
          "desc": "+3,4 a la regeneración de MP."
        },
        {
          "name": "Blaze Quake",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "custom": true,
          "icon": "blaze-quake",
          "desc": "Temblor de fuego sobre hasta 8 enemigos alrededor, que los quema 15 segundos."
        },
        {
          "name": "Aura Sink",
          "kind": "active",
          "learn": 25,
          "max": 70,
          "custom": true,
          "icon": "aura-sink",
          "desc": "Le drena el maná al objetivo durante 30 segundos."
        },
        {
          "name": "Seal of Binding",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "custom": true,
          "icon": "seal-of-binding",
          "desc": "Sello que clava en el piso a hasta 8 enemigos durante 5 segundos. Acierta el 80%."
        },
        {
          "name": "Flame Chant",
          "kind": "active",
          "learn": 30,
          "max": 56,
          "custom": true,
          "icon": "flame-chant",
          "desc": "Para toda la party: +30% de velocidad de casteo."
        },
        {
          "name": "Pa'agrian Gift",
          "kind": "active",
          "learn": 30,
          "custom": true,
          "icon": "paagrian-gift",
          "desc": "Para la party y el clan: +15% de P.Atk."
        },
        {
          "name": "Seal of Chaos",
          "kind": "active",
          "learn": 30,
          "max": 35,
          "custom": true,
          "icon": "seal-of-chaos",
          "desc": "Sello en un radio de 450: -8 de precisión a todos los enemigos durante 15 segundos."
        },
        {
          "name": "Fast HP Recovery",
          "kind": "passive",
          "learn": 35,
          "max": 74,
          "icon": "fast-hp-recovery",
          "desc": "+2,7 a la regeneración de HP."
        },
        {
          "name": "Blessings of Pa'agrio",
          "kind": "active",
          "learn": 35,
          "custom": true,
          "icon": "blessings-of-paagrio",
          "desc": "Para la party y el clan: +15% de P.Def."
        },
        {
          "name": "Seal of Slow",
          "kind": "active",
          "learn": 35,
          "custom": true,
          "icon": "seal-of-slow",
          "desc": "Sello que les baja un 45% la velocidad a hasta 8 enemigos durante 30 segundos."
        }
      ]
    },
    {
      "id": "warcryer",
      "name": "Warcryer",
      "from": 40,
      "to": 75,
      "blurb": "La rama del gritador: los cantos, que son los buffs de party de la clase, más la curación orca.",
      "skills": [
        {
          "name": "Boost HP",
          "kind": "passive",
          "learn": 40,
          "max": 70,
          "icon": "boost-hp",
          "desc": "+480 de HP máximo."
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
          "name": "Freezing Flame",
          "kind": "active",
          "learn": 40,
          "max": 72,
          "custom": true,
          "icon": "freezing-flame",
          "desc": "Llama congelante de 160 de potencia repartidos en 15 segundos, a 900 de distancia."
        },
        {
          "name": "Steal Essence",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "icon": "steal-essence",
          "desc": "La versión grande del drenaje: 108 de potencia a 900 de distancia y te cura con el 60% del daño."
        },
        {
          "name": "Chant of Evasion",
          "kind": "active",
          "learn": 40,
          "max": 56,
          "custom": true,
          "icon": "chant-of-evasion",
          "desc": "Para toda la party: +4 de evasión."
        },
        {
          "name": "Chant of Rage",
          "kind": "active",
          "learn": 44,
          "max": 56,
          "custom": true,
          "icon": "chant-of-rage",
          "desc": "Para toda la party: +35% de daño crítico."
        },
        {
          "name": "Chant of Vampire",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "icon": "chant-of-vampire",
          "desc": "Para toda la party: +9 de absorción de vida al golpear."
        },
        {
          "name": "Seal of Flame",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "custom": true,
          "icon": "seal-of-flame",
          "desc": "Sello de fuego: quema a hasta 8 enemigos por 118 de potencia en 15 segundos."
        },
        {
          "name": "Chant of Fury",
          "kind": "active",
          "learn": 48,
          "max": 56,
          "custom": true,
          "icon": "chant-of-fury",
          "desc": "Para toda la party: +33% de velocidad de ataque."
        },
        {
          "name": "Chant of Predator",
          "kind": "active",
          "learn": 48,
          "max": 68,
          "custom": true,
          "icon": "chant-of-predator",
          "desc": "Para toda la party: +30% de probabilidad de crítico."
        },
        {
          "name": "Chant of Eagle",
          "kind": "active",
          "learn": 48,
          "max": 64,
          "custom": true,
          "icon": "chant-of-eagle",
          "desc": "Para toda la party: +4 de precisión."
        },
        {
          "name": "War Chant",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "war-chant",
          "desc": "Para toda la party: +10% de P.Atk."
        },
        {
          "name": "Earth Chant",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "icon": "earth-chant",
          "desc": "Para toda la party: +15% de P.Def."
        },
        {
          "name": "Chant of Revenge",
          "kind": "active",
          "learn": 62,
          "max": 74,
          "custom": true,
          "icon": "chant-of-revenge",
          "desc": "Para toda la party: devuelve 20 de daño al que te pega."
        }
      ]
    },
    {
      "id": "doomcryer",
      "name": "Doomcryer",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma los cantos finales, el Chant of Victory y las Victories of Pa'agrio.",
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
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu INT."
        },
        {
          "name": "Spell Force",
          "kind": "active",
          "learn": 77,
          "icon": "spell-force",
          "desc": "Transfiere tu poder mágico a un compañero. Se corta si recibís daño, y es el requisito de Mass Recharge."
        },
        {
          "name": "Chant of Spirit",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "icon": "chant-of-spirit",
          "desc": "Para toda la party: -30% de vulnerabilidad a que te roben los buffs y -20% a los debuffs."
        },
        {
          "name": "Arcane Wisdom",
          "kind": "toggle",
          "learn": 78,
          "icon": "arcane-wisdom",
          "desc": "Mientras lo tenés activo: +10% de velocidad de casteo, +10% de P.Def. y -5% de MP en los skills. Consume 12 de MP cada 3,3 segundos."
        },
        {
          "name": "Divine Lore",
          "kind": "passive",
          "learn": 78,
          "icon": "divine-lore",
          "desc": "-5% al costo de MP de los skills mágicos."
        },
        {
          "name": "Chant of Victory",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "icon": "chant-of-victory",
          "desc": "Canto propio: +20% de crítico, +20% de daño crítico, +10% de P.Def. y +10 de precisión durante 2 minutos. Además alcanza a la party."
        },
        {
          "name": "Gate Chant",
          "kind": "active",
          "learn": 78,
          "icon": "gate-chant",
          "desc": "Trae a toda la party hasta donde estás. Diez minutos de espera."
        },
        {
          "name": "Magnus' Chant",
          "kind": "active",
          "learn": 79,
          "custom": true,
          "icon": "magnus-chant",
          "desc": "Canto propio: menos vulnerabilidad a los debuffs y más aguante. Dura 2 minutos y además alcanza a la party."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
