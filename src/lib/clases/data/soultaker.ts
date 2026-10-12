// Generado a partir del texto de la guía (ver DESIGN.md y src/lib/clases/types.ts). Si se corrige
// un dato del juego, se corrige acá; las tildes ya están revisadas.
import type { ClassGuide } from "../types";

export const soultaker: ClassGuide = {
  "slug": "soultaker",
  "name": "Soultaker",
  "subtitle": "Humano · tercera clase de la rama del mago",
  "intro": "El especialista en romper al otro antes de matarlo. Maldiciones para todo: miedo, silencio, parálisis, ceguera y debilidad, más dos invocaciones no-muertas y un daño oscuro que crece cuanto peor estás.",
  "facts": [
    {
      "label": "Camino",
      "value": "HumanMystic → HumanWizard → Necromancer → Soultaker"
    },
    {
      "label": "Armadura",
      "value": "Túnica"
    },
    {
      "label": "Arma",
      "value": "Vara"
    },
    {
      "label": "Habilidades",
      "value": "78 en total: 57 activas y 21 pasivas"
    },
    {
      "label": "Fuerte en",
      "value": "Maldiciones · control · daño oscuro"
    },
    {
      "label": "Floja en",
      "value": "Aguante · daño directo rápido"
    }
  ],
  "notes": [
    "El árbol de una clase es el suyo más el de todas las clases anteriores, así que acá está todo lo que llega a saber un Soultaker, ordenado por el momento en que lo aprende. Lo marcado como propio de L2Thunder no funciona como en el Interlude original.",
    "Muchas habilidades aparecen temprano y siguen subiendo de nivel durante decenas de niveles. Cuando pasa eso figuran las dos cosas: el nivel al que la aprendés y el nivel al que termina de crecer."
  ],
  "tiers": [
    {
      "id": "humanmystic",
      "name": "HumanMystic",
      "from": 1,
      "to": 19,
      "blurb": "La base de todos los místicos humanos. Los primeros dardos mágicos, la cura inicial y las pasivas de túnica. De acá sale tanto el mago como el clérigo.",
      "skills": [
        {
          "name": "Magician's Movement",
          "kind": "passive",
          "learn": 1,
          "desc": "Más velocidad de ataque con túnica puesta."
        },
        {
          "name": "Spellcraft",
          "kind": "passive",
          "learn": 1,
          "desc": "Duplica la velocidad de casteo con túnica puesta."
        },
        {
          "name": "Lucky",
          "kind": "passive",
          "learn": 1,
          "desc": "Evita la penalización por muerte hasta nivel 9."
        },
        {
          "name": "Mana Recovery",
          "kind": "passive",
          "learn": 1,
          "desc": "Más regeneración de MP con túnica puesta."
        },
        {
          "name": "Wind Strike",
          "kind": "active",
          "learn": 1,
          "max": 14,
          "desc": "El ataque mágico básico de la rama."
        },
        {
          "name": "Self Heal",
          "kind": "active",
          "learn": 1,
          "desc": "La cura de arranque, sobre uno mismo."
        },
        {
          "name": "Common Craft",
          "kind": "active",
          "learn": 1,
          "desc": "Permite leer recetas comunes."
        },
        {
          "name": "Create Common Item",
          "kind": "passive",
          "learn": 5,
          "max": 70,
          "desc": "Fabrica ítems comunes hasta nivel 9."
        },
        {
          "name": "Anti Magic",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "desc": "+108 de M.Def."
        },
        {
          "name": "Armor Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 14,
          "desc": "+9,2 de P.Def."
        },
        {
          "name": "Weapon Mastery",
          "kind": "passive",
          "learn": 7,
          "max": 74,
          "desc": "+79,4 y +45% de P.Atk., +99,3 y +17% de M.Atk. Con arco o pole, -30% de velocidad de casteo y -9 de precisión."
        },
        {
          "name": "Heal",
          "kind": "active",
          "learn": 7,
          "max": 14,
          "desc": "Cura directa de 301. Barata y sin tiempo de espera."
        },
        {
          "name": "Cure Poison",
          "kind": "active",
          "learn": 7,
          "desc": "Saca el veneno. Cubre todos los venenos que puede tirar un jugador."
        },
        {
          "name": "Shield",
          "kind": "active",
          "learn": 7,
          "desc": "+15% de P.Def."
        },
        {
          "name": "Might",
          "kind": "active",
          "learn": 7,
          "desc": "+15% de P.Atk."
        },
        {
          "name": "Ice Bolt",
          "kind": "active",
          "learn": 7,
          "max": 20,
          "desc": "Golpe de hielo que además frena al objetivo."
        },
        {
          "name": "Battle Heal",
          "kind": "active",
          "learn": 14,
          "desc": "Misma potencia que Heal pero de casteo rápido: es la de emergencia."
        },
        {
          "name": "Group Heal",
          "kind": "active",
          "learn": 14,
          "desc": "Cura 241 a cada miembro de la party de una sola vez."
        },
        {
          "name": "Vampiric Touch",
          "kind": "active",
          "learn": 14,
          "max": 25,
          "desc": "Absorbe vida: te cura el 40% del daño que hace."
        },
        {
          "name": "Curse: Weakness",
          "kind": "active",
          "learn": 14,
          "max": 74,
          "custom": true,
          "desc": "-15% de P.Atk. durante 12 segundos."
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
      "id": "humanwizard",
      "name": "HumanWizard",
      "from": 20,
      "to": 39,
      "blurb": "El camino del mago: fuego, maldiciones elementales, el primer gato invocado y el Body To Mind para no quedarse nunca sin maná.",
      "skills": [
        {
          "name": "Quick Recovery",
          "kind": "passive",
          "learn": 20,
          "max": 48,
          "desc": "-30% al tiempo de espera de los skills mágicos."
        },
        {
          "name": "Boost Mana",
          "kind": "passive",
          "learn": 20,
          "max": 72,
          "custom": true,
          "desc": "+800 de MP máximo."
        },
        {
          "name": "Robe Mastery",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "+55,2 de P.Def. con túnica."
        },
        {
          "name": "Higher Mana Gain",
          "kind": "passive",
          "learn": 20,
          "max": 74,
          "desc": "Cada recarga que recibís rinde +39 de MP."
        },
        {
          "name": "Concentration",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "desc": "Hace mucho más difícil que a un mago le corten el casteo cuando recibe daño."
        },
        {
          "name": "Summon Kat the Cat",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "custom": true,
          "desc": "Invoca a Kat the Cat, servidor de nivel 76 que sabe Master Recharge. Pide 20 Spirit Ore y consume uno cada 4 minutos."
        },
        {
          "name": "Servitor Heal",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "desc": "Cura a tu invocación: 936 de potencia."
        },
        {
          "name": "Aura Burn",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "desc": "Ataque mágico de corto alcance."
        },
        {
          "name": "Flame Strike",
          "kind": "active",
          "learn": 20,
          "max": 30,
          "desc": "Llamarada que prende un área amplia."
        },
        {
          "name": "Blaze",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "desc": "Bola de fuego sobre un objetivo."
        },
        {
          "name": "Summon Mew the Cat",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "custom": true,
          "desc": "Invoca a Mew the Cat, servidor de nivel 76 que sabe Mega Storm Strike."
        },
        {
          "name": "Energy Bolt",
          "kind": "active",
          "learn": 20,
          "max": 35,
          "desc": "El dardo mágico más barato y más rápido de castear."
        },
        {
          "name": "Fast Spell Casting",
          "kind": "passive",
          "learn": 25,
          "max": 56,
          "desc": "+18% de velocidad de casteo."
        },
        {
          "name": "Fast Mana Recovery",
          "kind": "passive",
          "learn": 25,
          "max": 74,
          "desc": "+3,4 a la regeneración de MP."
        },
        {
          "name": "Sleep",
          "kind": "active",
          "learn": 25,
          "max": 74,
          "desc": "Duerme a un enemigo 8 segundos. Cualquier daño lo despierta, y una vez despierto es casi imposible volver a dormirlo."
        },
        {
          "name": "Surrender To Fire",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "custom": true,
          "desc": "Le abre la guardia al fuego: -30 de resistencia al fuego y +15 al agua, por 30 segundos."
        },
        {
          "name": "Servitor Recharge",
          "kind": "active",
          "learn": 25,
          "max": 35,
          "desc": "Le devuelve MP a tu invocación."
        },
        {
          "name": "Body To Mind",
          "kind": "active",
          "learn": 25,
          "max": 66,
          "custom": true,
          "desc": "Quemás tu propia carne para rellenar la cabeza: recuperás 296 de MP. En L2Thunder cuesta 1,12 de HP por cada MP, no 6: antes no valía la pena usarlo."
        },
        {
          "name": "Resist Wind",
          "kind": "active",
          "learn": 25,
          "desc": "+15 de resistencia al viento."
        },
        {
          "name": "Corpse Life Drain",
          "kind": "active",
          "learn": 30,
          "max": 74,
          "desc": "Absorbe la vida de un cadáver para curarte."
        },
        {
          "name": "Fast HP Recovery",
          "kind": "passive",
          "learn": 35,
          "max": 74,
          "desc": "+2,7 a la regeneración de HP."
        },
        {
          "name": "Servitor Wind Walk",
          "kind": "active",
          "learn": 35,
          "desc": "+33 de velocidad a la invocación."
        },
        {
          "name": "Slow",
          "kind": "active",
          "learn": 35,
          "desc": "-30% de velocidad de movimiento."
        },
        {
          "name": "Curse Chaos",
          "kind": "active",
          "learn": 35,
          "max": 74,
          "custom": true,
          "desc": "-12 de precisión durante 15 segundos."
        }
      ]
    },
    {
      "id": "necromancer",
      "name": "Necromancer",
      "from": 40,
      "to": 75,
      "blurb": "La rama de la muerte: huesos malditos, maldiciones que acumulan y las dos invocaciones no-muertas.",
      "skills": [
        {
          "name": "Silence",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "desc": "Le sella la magia 4 segundos: no puede castear, pero los skills físicos le siguen funcionando."
        },
        {
          "name": "Summon Corrupted Man",
          "kind": "active",
          "learn": 40,
          "max": 76,
          "custom": true,
          "desc": "Invoca un Corrupted Man de nivel 76 que sabe Steel Blood y Dark Empowerment. Pide 20 Cursed Bones y consume 4 cada 4 minutos."
        },
        {
          "name": "Curse Discord",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Confunde al enemigo y lo hace atacar a los suyos."
        },
        {
          "name": "Curse Fear",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "custom": true,
          "desc": "El terror lo agarra y lo hace huir 4 segundos."
        },
        {
          "name": "Vampiric Claw",
          "kind": "active",
          "learn": 40,
          "max": 74,
          "desc": "Garras de energía oscura: te curan el 40% del daño que hacen."
        },
        {
          "name": "Transfer Pain",
          "kind": "toggle",
          "learn": 40,
          "max": 70,
          "desc": "Tu invocación se come el dolor que era para vos: le pasa el 50% del daño que recibís. Consume MP mientras dure."
        },
        {
          "name": "Summon Reanimated Man",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "desc": "Invoca un Reanimated Man de nivel 76. En L2Thunder sacrifica su propia vida para curar al objetivo: antes era la única invocación del juego sin ningún skill."
        },
        {
          "name": "Death Spike",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "desc": "Le tirás un hueso maldito al enemigo. Requiere un Cursed Bone."
        },
        {
          "name": "Forget",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "desc": "Le saca al enemigo las ganas de atacar."
        },
        {
          "name": "Anchor",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "desc": "Paraliza al enemigo en el acto durante 4 segundos."
        },
        {
          "name": "Curse Gloom",
          "kind": "active",
          "learn": 44,
          "max": 74,
          "custom": true,
          "desc": "-10% de M.Def. durante 15 segundos."
        },
        {
          "name": "Corpse Burst",
          "kind": "active",
          "learn": 48,
          "max": 74,
          "desc": "Hace explotar un cadáver cercano."
        },
        {
          "name": "Curse Death Link",
          "kind": "active",
          "learn": 52,
          "max": 74,
          "desc": "Le pasás tu dolor al enemigo: cuanto menos vida te queda, más fuerte pega."
        },
        {
          "name": "Summon Cursed Man",
          "kind": "active",
          "learn": 56,
          "max": 74,
          "custom": true,
          "desc": "Invoca un Cursed Man de nivel 76 que sabe Cursed Strike y Cursed Blow."
        },
        {
          "name": "Curse Disease",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "desc": "Maldición que le corta la curación a la mitad durante 15 segundos."
        },
        {
          "name": "Mass Fear",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "Espanta a los enemigos cercanos y los hace huir 3 segundos."
        },
        {
          "name": "Mass Gloom",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "custom": true,
          "desc": "La versión en área: -10% de M.Def. a hasta 8 enemigos cercanos."
        },
        {
          "name": "Summon Cursed Bones",
          "kind": "active",
          "learn": 58,
          "max": 74,
          "desc": "Fabrica entre 100 y 400 huesos malditos. Consume 160 Spirit Ore."
        },
        {
          "name": "Mass Slow",
          "kind": "active",
          "learn": 62,
          "max": 74,
          "custom": true,
          "desc": "-45% de velocidad a hasta 8 enemigos durante 8 segundos."
        }
      ]
    },
    {
      "id": "soultaker",
      "name": "Soultaker",
      "from": 76,
      "to": 80,
      "blurb": "La tercera clase suma el Gehenna, el vórtice oscuro y las maldiciones en área que desarman a un grupo entero.",
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
          "name": "Dark Vortex",
          "kind": "active",
          "learn": 76,
          "custom": true,
          "desc": "Vórtice de oscuridad: hace daño oscuro, te cura el 50% de lo que pega y le baja 30 la resistencia a la oscuridad."
        },
        {
          "name": "Skill Mastery",
          "kind": "passive",
          "learn": 77,
          "custom": true,
          "desc": "Cada skill que lanzás tiene cerca de un 5% de salir sin tiempo de espera. La probabilidad sube con tu INT."
        },
        {
          "name": "Spell Force",
          "kind": "active",
          "learn": 77,
          "desc": "Transfiere tu poder mágico a un compañero. Se corta si recibís daño, y es el requisito de Mass Recharge."
        },
        {
          "name": "Curse of Doom",
          "kind": "active",
          "learn": 77,
          "desc": "Le bloquea el uso de skills, físicos y mágicos, durante 5 segundos."
        },
        {
          "name": "Mass Warrior Bane",
          "kind": "active",
          "learn": 77,
          "custom": true,
          "desc": "La versión en área: -5% de P.Atk. y velocidad de ataque a hasta 8 enemigos."
        },
        {
          "name": "Arcane Power",
          "kind": "toggle",
          "learn": 78,
          "desc": "Postura: +30% de M.Atk. a cambio de +10% de MP en los skills y un goteo constante."
        },
        {
          "name": "Necromancy",
          "kind": "passive",
          "learn": 78,
          "custom": true,
          "desc": "Comunión con los muertos: +3% de M.Atk. y +15 de resistencia a la oscuridad."
        },
        {
          "name": "Curse of Abyss",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "desc": "Maldición del abismo que le embota todo: -10% de M.Atk. y de crítico mágico, -5% de velocidad, P.Def. y casteo, y -6 de evasión. Dura 25 segundos."
        },
        {
          "name": "Mass Mage Bane",
          "kind": "active",
          "learn": 78,
          "custom": true,
          "desc": "La versión en área contra magos: -5% de M.Atk. y velocidad de casteo a hasta 8 enemigos."
        },
        {
          "name": "Day of Doom",
          "kind": "active",
          "learn": 80,
          "desc": "Planta un símbolo que maldice todo lo que entra en su área y le baja todas las estadísticas. Pide Spell Force nivel 3 y un Magic Symbol."
        },
        {
          "name": "Gehenna",
          "kind": "active",
          "learn": 80,
          "desc": "Cadena de golpes de oscuridad: no te podés mover mientras lo lanzás y consume MP con cada impacto. Pide Spell Force nivel 3 y un Magic Symbol."
        }
      ]
    }
  ],
  "footnote": "Los números se leyeron del servidor en funcionamiento y de las descripciones del propio cliente, no del diseño original ni de una wiki. La ventana de habilidades dentro del juego siempre va a ser la fuente más al día."
};
