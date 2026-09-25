import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";

export const metadata: Metadata = {
  title: "Rework de Clases — Guía",
  description:
    "Qué cambia respecto del Interlude original: las seis reglas que aplican a todos y los cambios que modifican la manera de jugar de arqueros, dagueros, tanques, magos, invocadores, soporte y enanos.",
};

const introStats = [
  { value: "C6", label: "Base", sub: "Interlude" },
  { value: "450%", label: "Regeneración", sub: "HP, MP y CP" },
  { value: "20%", label: "Crítico mágico", sub: "techo, y se resiste" },
  { value: "20%", label: "Piso de debuffs", sub: "era 70%" },
];

const secciones: { id: string; label: string }[] = [
  { id: "todos", label: "Para todos" },
  { id: "arqueros", label: "Arqueros" },
  { id: "dagueros", label: "Dagueros" },
  { id: "tanques", label: "Tanques" },
  { id: "guerreros", label: "Guerreros de fuerza" },
  { id: "cantores", label: "Swordsinger y Bladedancer" },
  { id: "magos", label: "Magos elementales" },
  { id: "invocadores", label: "Invocadores" },
  { id: "soporte", label: "Soporte y sanación" },
  { id: "enanos", label: "Enanos" },
];

const paraTodos: [string, string, string][] = [
  [
    "Maná para los que pegan",
    "Un guerrero se quedaba seco a los cuatro skills",
    "Boost Mana llega a +800 y lo aprenden 29 clases de pelea; los guerreros cierran en +570",
  ],
  [
    "El MP de un skill",
    "Se cobraba dos veces: al empezar el casteo y al terminarlo, y si te interrumpían perdías la primera mitad",
    "Un solo cobro. El total no cambió",
  ],
  ["Regeneración", "La de retail", "450% de HP, MP y CP"],
  [
    "Skills físicos de corto alcance",
    "Si empezabas el golpe dentro de rango, impactaba aunque el enemigo se fuera corriendo",
    "Se valida al impactar, con 30 de tolerancia. Si se escapó, el skill se cancela y no perdés ni MP ni cooldown",
  ],
  [
    "Aterrizaje de stuns y debuffs",
    "Un piso del 70% hacía que hasta un stun de primera clase entrara contra un nivel 80",
    "El piso bajó a 20%: la diferencia de nivel vuelve a pesar",
  ],
  [
    "Crítico mágico",
    "No había forma de resistirlo: nadie tenía defensa contra él",
    "Existen dos stats nuevos de defensa, y el techo propio sigue en 20%",
  ],
];

const arqueros: [string, string, string, string][] = [
  ["Double Shot", "12.875", "15 s", "El de tirar seguido"],
  ["Lethal Shot", "13.830", "25 s", "Puede dejar al objetivo en 1 de HP"],
  [
    "Fatal Counter",
    "14.175",
    "120 s",
    "Escala con el HP que te falta: pega más cuanto peor estás",
  ],
  ["Burst Shot", "9.870", "25 s", "Área"],
  ["Stunning Shot", "6.480", "50 s", "Aturde 3 s y corta el casteo"],
  ["Hamstring Shot", "5.932", "90 s", "−55% de velocidad por 7 s, casi garantizado"],
  ["Evade Shot", "6.050", "180 s", "Pega y te deja +6 de evasión por 30 s"],
];

const stances: [string, string, string, string][] = [
  [
    "Focus Death",
    "+30% mire para donde mire",
    "−15% siempre, +50% de daño por la espalda",
    "El que no puede posicionarse",
  ],
  [
    "Focus Chance",
    "+30% detrás · +15% al costado · −15% de frente",
    "la tasa de crítico se mueve igual, por posición",
    "El que sabe ponerse detrás",
  ],
  [
    "Focus Power",
    "—",
    "+30% detrás · +15% al costado · −15% de frente",
    "El que ya acierta y quiere pegar más fuerte",
  ],
];

const dagueros: [string, string][] = [
  [
    "El apilamiento se recortó",
    "Antes el Backstab por la espalda llegaba al 100% y con el arma y el buff solos ya estaba en 98. Hoy va de 48% pelado a 89% con todo: el equipo suma, pero ya no garantiza.",
  ],
  ["Mortal Strike", "Dura 20 minutos. Es un buff que ponés y te olvidás."],
  [
    "Lethal Blow",
    "Contra un jugador, el medio letal le deja el CP en 1 y no le toca el HP; el completo deja HP y CP en 1.",
  ],
  [
    "Cuidado con la armadura pesada",
    "El pasivo de armadura ligera castiga ponerse heavy: −12 de velocidad, −20% de Atk. Spd. y −15 de evasión.",
  ],
];

const tanques: [string, string][] = [
  ["Power Strike", "9 → 32 niveles, hasta 4.150 de potencia"],
  [
    "Tribunal y Judgment",
    "Ahora pueden critear, llegan a 3.609 y bajan crítico o daño crítico del enemigo por 30 s",
  ],
  ["Shield Stun", "El aturdimiento pasó de 2 a 4 segundos"],
  [
    "Ultimate Defense y Vengeance",
    "Ya no te clavan en el lugar: ahora es −70% de velocidad, pero podés caminar",
  ],
  ["Guard Stance", "Sube el bloqueo del escudo de 20% a 30%"],
  [
    "Los tres toggles",
    "Guard Stance, Shield Fortress y Fortitude cuestan ~5 MP por segundo; antes eran los tres más caros del juego",
  ],
  [
    "Angelic Icon",
    "+100 de crítico, +30% de daño crítico, +30 de velocidad y +30% de Atk. Spd., con 4 minutos de reuso en vez de 10",
  ],
];

const guerreros: [string, string, string, string][] = [
  ["Zealot", "15 min", "5 min", "Dura 60 s, pide HP ≤30%"],
  ["Frenzy", "10 min", "3 min", "Dura 90 s. +100% de P. Atk. con espada, maza o pole"],
  ["Guts", "10 min", "3 min", "Dura 90 s. Hasta +100% de P. Def."],
  ["Wrath", "25 s", "120 s", "Le saca 30 a 50% del CP al enemigo"],
  ["Fell Swoop", "—", "—", "+10 de alcance con pole"],
  ["Soul Breaker", "13 s", "30 s", "Tyrant. Aturde 3 s con 85% de aterrizaje"],
];

const duelist: [string, string][] = [
  [
    "Duelist",
    "Los cinco sónicos son los únicos skills del juego que todos pueden critear, así que llevan −15% de daño en PvP para compensar. El PvE no se toca.",
  ],
];

const cantores: [string, string][] = [
  [
    "Front Step",
    "Skill nuevo. Te teletransporta junto al objetivo desde 900 de distancia, con 25 s de reuso. Nivel 43",
  ],
  [
    "Throw Swords",
    "37 niveles hasta 8.547 de potencia. Era solo del Bladedancer y ahora también lo tiene el Swordsinger",
  ],
  ["Psycho Symphony", "Exclusivo del Swordsinger. De 5 minutos de reuso a 90 segundos"],
  [
    "Dance of Protection",
    "Dejó de dar defensa y ahora da inmunidad total a debuffs por 30 s, cada 2 minutos",
  ],
];

const magos: [string, string][] = [
  [
    "Vampiric Claw",
    "Un nuke normal que además te cura el 40% del daño. No es sustain que cueste daño: es daño que cura",
  ],
  ["Steal Essence", "Cura el 60% del daño, cada 4 s"],
  [
    "Immolation",
    "Antes se llamaba Decay. Pasó de 1.861 de daño cada 60 s a 2.347 cada 20 s",
  ],
  ["Wild Magic", "Nivel 2 multiplica el crítico mágico ×4, y está gratis en el buffer"],
  [
    "Los SA del arma",
    "Empower ×1,32 y Magic Critical ×4. Para un mago sin collar de boss, Magic Critical es el mejor SA que puede llevar",
  ],
];

const invocadores: [string, string][] = [
  [
    "Servitor Cure",
    "Los topes de limpieza subieron a 6 / 8 / 10, que alcanza todos los debuffs de jugador. El tope viejo de 3 no servía para nada",
  ],
  ["Betray", "De 30 segundos de reuso a 8 minutos"],
  [
    "Mass Surrender",
    "Ya no necesita servitor vivo, y suma −8% de defensa además de la resistencia",
  ],
  [
    "Feline Queen y Unicorn Seraphim",
    "Sus buffs duran 15 s con 40 s de reuso, y cada uno lleva el ícono del buff que da. La pareja comparte ranura: sostiene uno u otro",
  ],
  [
    "Reanimated Man",
    "Era la única invocación del juego sin ningún skill. Ahora sacrifica HP propio para curar al objetivo",
  ],
];

const soporte: [string, string][] = [
  ["Body To Mind", "Pasó de costar 6 HP por cada MP a costar 1,12. Antes no valía la pena"],
  [
    "Seal of Bloodsucker",
    "Drena 1% del HP máximo del objetivo cada 2 s durante 40 s y te lo suma. No funciona contra raids",
  ],
  [
    "Seal of Suspension",
    "Pasó de triplicar los cooldowns de 8 enemigos casi sin pausa a +20% durante 25 s cada 2 minutos",
  ],
  ["Celestial Shield", "De 30 minutos de reuso a 4"],
  ["Balance Life", "De 2 minutos a 1 minuto y medio"],
  [
    "Los cantos y profecías",
    "Los seis se partieron en dos: la party recibe el grueso y el que lo lanza recibe además un bono propio",
  ],
];

const enanos: [string, string][] = [
  ["Spoil Crush", "Potencia 5.976"],
  [
    "El Maestro",
    "No podía encantar skills por un defecto en la lista de maestros. Arreglado: ahora encanta como cualquier otra clase",
  ],
];

function Seccion({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-28 border-t border-border-soft pt-14">
      <h2 className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
        ✦ {title}
      </h2>
      <div className="mt-3 space-y-6">{children}</div>
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl text-muted">{children}</p>;
}

export default function ReworkDeClasesPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/guias"
          className="text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Guías
        </Link>

        {/* Intro */}
        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Guía de clases · L2Thunder
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Rework de Clases</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Qué cambia respecto del Interlude original
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            L2Thunder parte de Interlude, pero casi ninguna clase se juega igual. Esta guía no es
            el listado completo de cambios: son los que cambian la manera de jugar, agrupados por
            el tipo de personaje. Si venís de otro servidor, leé primero el bloque «Lo que cambió
            para todos»: esas seis cosas aplican a todos.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>

          <nav aria-label="Secciones de la guía" className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {secciones.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block border border-border-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted transition hover:border-gold/60 hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Seccion id="todos" title="Lo que cambió para todos">
          <P>
            Antes de mirar tu clase conviene saber estas seis, porque cambian cómo se siente pelear
            sin importar qué juegues.
          </P>
          <DataTable headers={["Qué", "Cómo era", "Cómo es"]} rows={paraTodos} />
        </Seccion>

        <Seccion id="arqueros" title="Arqueros">
          <div className="max-w-3xl space-y-3 text-muted">
            <p>
              El arquero de retail pega con el golpe común y usa los skills de apoyo. Acá es al
              revés: el daño está en los skills y el golpe común es lo que hacés entre uno y otro.
              Todos los de ataque subieron mucho de potencia.
            </p>
            <p>
              Además el pasivo Archery da +300 de P. Atk. y +100 de alcance con arco, y los arcos se
              unificaron: la categoría Very Slow dejó de existir, todos disparan a la misma
              velocidad.
            </p>
          </div>
          <DataTable
            headers={["Skill", "Potencia máxima", "Reuso", "Lo que hace"]}
            rows={arqueros}
          />
        </Seccion>

        <Seccion id="dagueros" title="Dagueros">
          <div className="max-w-3xl space-y-3 text-muted">
            <p>
              Silent Move no es el de retail. Acá es invisibilidad de verdad, también para los demás
              jugadores. Al activarla todo lo que te tenía apuntado te suelta. Se rompe en cuanto
              atacás, no se puede activar estando en combate, y mientras dura vas al 40% de tu
              velocidad. Hay once monstruos en el mundo que la atraviesan igual.
            </p>
            <p>
              Lo otro que cambió la forma de jugar son las stances Focus: comparten ranura, así que
              solo podés tener una activa, y elegir cuál es una decisión de estilo, no de poder.
            </p>
            <p>
              Y el daguero es frágil a propósito: recibe 18% más daño en PvP. Su daño de salida no
              se tocó.
            </p>
          </div>
          <DataTable
            headers={["Stance", "Probabilidad de blow", "Crítico", "Para quién"]}
            rows={stances}
          />
          <DataTable headers={["También", "Detalle"]} rows={dagueros} />
        </Seccion>

        <Seccion id="tanques" title="Tanques">
          <div className="max-w-3xl space-y-3 text-muted">
            <p>
              El tanque de retail aguanta y agarra aggro. Acá además pega, y se mueve mientras lo
              hace.
            </p>
            <p>
              El cambio de diseño más grande es Power Strike: era un skill de novato que se
              terminaba a nivel 15 y ahora tiene 32 niveles que acompañan toda la rama, de 870 a
              4.150 de potencia. Es el golpe que usás siempre.
            </p>
          </div>
          <DataTable headers={["Skill", "Qué cambió"]} rows={tanques} />
        </Seccion>

        <Seccion id="guerreros" title="Guerreros de fuerza">
          <P>
            Gladiator, Warlord, Destroyer y Tyrant. Los tres botones de emergencia — Zealot, Frenzy
            y Guts — vuelven mucho más seguido, así que pasaron de ser un recurso por pelea a parte
            de la rotación.
          </P>
          <Callout title="Frenzy y Guts comparten ranura" variant="warn">
            <p>Tirar uno saca al otro. Zealot convive con los dos.</p>
          </Callout>
          <DataTable
            headers={["Skill", "Reuso antes", "Reuso ahora", "Detalle"]}
            rows={guerreros}
          />
          <DataTable headers={["Además", "Detalle"]} rows={duelist} />
        </Seccion>

        <Seccion id="cantores" title="Swordsinger y Bladedancer">
          <P>
            Eran las dos clases más flojas del servidor y se reforzaron con movilidad y con un
            golpe propio, además de darles Ultimate Defense y la maestría de armadura pesada, que
            antes no tenían.
          </P>
          <DataTable headers={["Skill", "Qué es"]} rows={cantores} />
        </Seccion>

        <Seccion id="magos" title="Magos elementales">
          <div className="max-w-3xl space-y-3 text-muted">
            <p>
              El rediseño más grande del servidor. En retail el mago tira un nuke y espera; acá los
              seis nukes grandes tienen 2 segundos de reuso, así que el límite pasó a ser la
              velocidad de casteo y el maná, no el cooldown.
            </p>
            <p>
              A cambio, el WIT dejó de ser el único stat que importa: su curva pasó a rendimientos
              decrecientes y el reuso mágico escala a la mitad de tasa. Apilar diez puntos de WIT
              valía ×1,63 y hoy vale ×1,34. La compensación está en Clear Mind, que ahora da +10%
              de velocidad de casteo y lo aprenden solo los tres magos elementales.
            </p>
          </div>
          <DataTable headers={["Skill", "Qué hace ahora"]} rows={magos} />
          <Callout title="El CP bloquea el drenaje" variant="warn">
            <p>
              Los skills que absorben vida no curan nada mientras el objetivo tenga CP: primero hay
              que bajárselo. Contra un jugador recién buffeado, un Vampiric Claw cura cero.
            </p>
          </Callout>
        </Seccion>

        <Seccion id="invocadores" title="Invocadores">
          <div className="max-w-3xl space-y-3 text-muted">
            <p>
              La invocación sale ya buffeada: al aparecer recibe sola los escudos, la prisa y los
              buffs de servitor, sin que tengas que tirárselos uno por uno. Todas ganaron además
              +500 de HP.
            </p>
            <p>
              El encantamiento de invocaciones pasó de 30 pasos a 15, quedándose con uno de cada
              dos: el techo es el mismo y cada nivel vale el doble.
            </p>
          </div>
          <DataTable headers={["Skill", "Qué cambió"]} rows={invocadores} />
        </Seccion>

        <Seccion id="soporte" title="Soporte y sanación">
          <P>
            Lo que más cambia la forma de jugar acá es que Cancellation no quita buffs. En este
            servidor es un debuff de recarga: le alarga los cooldowns al enemigo un 20% durante 20
            segundos. Nadie te va a robar la barra de buffs.
          </P>
          <DataTable headers={["Skill", "Qué cambió"]} rows={soporte} />
        </Seccion>

        <Seccion id="enanos" title="Enanos">
          <div className="max-w-3xl space-y-3 text-muted">
            <p>
              El Bounty Hunter pasó a la maestría de armadura ligera de los dagueros. Pierde unos 16
              puntos de P. Def. de tope y la maestría de pesada, y a cambio gana +6 de velocidad y
              la mitad del costo de MP en todos sus skills.
            </p>
            <p>
              El Fortune Seeker quedó con un kit de tipo Treasure Hunter: Dash, Ultimate Evasion,
              Vicious Stance y Acrobatic Move. Perdió Fist Fury, que quedó solo para el Tyrant.
            </p>
          </div>
          <DataTable headers={["Skill", "Qué cambió"]} rows={enanos} />
        </Seccion>

        {/* Cierre */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <h2 className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Lo que no ves en la lista
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            Las descripciones de los skills dentro del juego están reescritas con los valores
            reales del servidor, no con los de retail. Si un skill dice un número, ese número es el
            que usa el servidor. Cuando tengas una duda puntual, la ventana de habilidades es la
            fuente más confiable que esta guía.
          </p>

          <p className="mt-8 text-xs text-muted/70">
            Todos los valores de esta guía se leyeron del servidor en funcionamiento, no del diseño
            original ni de una wiki. Los skills mencionados conservan su nombre de Interlude salvo
            donde se aclare que se renombraron.
          </p>
        </section>
      </div>
    </div>
  );
}
