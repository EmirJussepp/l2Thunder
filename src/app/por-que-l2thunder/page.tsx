import type { Metadata } from "next";
import Link from "next/link";
import Crest from "@/components/Crest";
import SectionHeader from "@/components/porque/SectionHeader";
import ComparisonTable from "@/components/porque/ComparisonTable";
import { CLIENT_URL, LAUNCHER_URL } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "¿Por qué L2Thunder?",
  description:
    "Rates, enchant sin romper el ítem, clases revisadas una por una, profesiones rehechas y contenido instanciado — todo lo que cambia respecto al Interlude original.",
};

const stats = [
  { value: "×15", label: "Experiencia y SP" },
  { value: "×10", label: "Probabilidad de drop" },
  { value: "+10", label: "Enchant máximo" },
  { value: "0", label: "Ítems destruidos" },
];

const ritmoRows = [
  {
    label: "Experiencia",
    original: "×1. Llegar a 76 es un trabajo de meses.",
    thunder: (
      <>
        <strong className="font-bold text-gold">×15</strong> en XP y SP, y también en las
        recompensas de quest.
      </>
    ),
  },
  {
    label: "Drops",
    original: "×1. Farmear una pieza puede llevar días.",
    thunder: (
      <>
        <strong className="font-bold text-gold">×10</strong> de probabilidad, y lo mismo en
        spoil. La adena cae con ×2 de chance y ×4 de cantidad.
      </>
    ),
  },
  {
    label: "Regeneración",
    original: "Sentarse a recuperar es media partida.",
    thunder: (
      <>
        <strong className="font-bold text-gold">450%</strong> en HP, MP y CP. Se descansa, no se
        espera.
      </>
    ),
  },
  {
    label: "Campeones",
    original: "No existen.",
    thunder: (
      <>
        <strong className="font-bold text-gold">2%</strong> de los monstruos entre nivel 20 y 87
        salen con aura, ×8 de vida y ×8 de experiencia.
      </>
    ),
  },
];

const enchantRows = [
  {
    label: "Al fallar",
    original: "El ítem se destruye y te deja cristales. Meses de juego en un clic.",
    thunder:
      "El ítem se queda. Con pergamino normal vuelve a +0; con bendito baja un solo nivel.",
  },
  {
    label: "Zona segura",
    original: "+3 en armadura completa, +2 en el resto.",
    thunder: (
      <>
        <strong className="font-bold text-gold">100%</strong> hasta +3 en todo: armas de
        guerrero, armas de mago, armadura y armadura completa.
      </>
    ),
  },
  {
    label: "Probabilidad",
    original: "Una sola tabla para todos los pergaminos.",
    thunder:
      "De +4 a +9: 60% con normal, 50% con bendito. Cada pergamino tiene su tabla.",
  },
  {
    label: "Techo",
    original: "+16, un número que casi nadie ve.",
    thunder: "+10. Alcanzable, y sigue siendo un logro.",
  },
];

const clases = [
  {
    n: "I",
    title: "Las descripciones dicen la verdad",
    text: "Más de mil habilidades reescritas con los números reales del servidor: el poder, el daño por segundo de cada veneno, la duración, la probabilidad de que caiga. Nada de «inflige daño» sin cifra.",
  },
  {
    n: "II",
    title: "Habilidades muertas, resucitadas",
    text: "Muchas existían y no servían para nada. Ahora hacen algo: Life Scavenge golpea en área de verdad, Silent Move es invisibilidad real que se rompe al atacar, los Seeds se pueden usar aturdido.",
  },
  {
    n: "III",
    title: "Tanques y dagas con identidad",
    text: "La rama de knight escala de punta a punta. Las dagas tienen sus posturas y sus golpes por la espalda con números que se entienden.",
  },
  {
    n: "IV",
    title: "Invocadores rehechos",
    text: (
      <>
        Las invocaciones suben hasta <strong className="font-bold text-gold">+15</strong>, tienen{" "}
        <strong className="font-bold text-gold">+500</strong> de vida y maná, iconos propios en
        todas sus habilidades y te avisan cuánto falta para volver a usarlas. Varias estrenan
        habilidades que antes no tenían.
      </>
    ),
  },
  {
    n: "V",
    title: "Habilidades nuevas donde faltaban",
    text: "El Prophet tiene ahora un combo de cargas al estilo Tyrant: acumulás con un golpe y detonás con otro. Los caballeros ganaron un Front Step. Y así.",
  },
  {
    n: "VI",
    title: "Venenos que conviven",
    text: "En retail un veneno pisa al otro. Acá cada familia tiene su lugar, así que un grupo con orcos y Shillien Elder suma en vez de estorbarse.",
  },
];

const pescaRows = [
  {
    label: "Qué pescás",
    original: "278 pescados. «Large Ugly Green Fish» no te dice si es bueno.",
    thunder: "Cinco rarezas que se leen por el color: común, poco común, raro, épico y legendario.",
  },
  {
    label: "Qué ganás",
    original: "Un pescado. Ni experiencia ni adena.",
    thunder: "Experiencia en cada captura, escalada por rareza, más puntos de profesión.",
  },
  {
    label: "El minijuego",
    original: "Siempre igual de difícil, desde el primer día.",
    thunder: "Empieza en 3 tirones y llega a 10, cambiando cada vez más rápido a medida que aprendés.",
  },
  {
    label: "Para qué sirve",
    original: "Vender el pescado. Poco más.",
    thunder:
      "Se canjean por cofres con life stones, pergaminos de enchant y los accesorios de pesca que en retail eran inalcanzables.",
  },
  {
    label: "Progreso",
    original: "Comprás niveles de habilidad con adena.",
    thunder:
      "Un Nivel de Pescador que sube pescando y abre inventario, almacén, puestos de venta, capacidad de carga y más.",
  },
];

const jefes = [
  {
    title: "Sailren, instanciado",
    text: "Con ritmo guionado y sus tres escalones previos. No hace falta competir por el spawn.",
  },
  {
    title: "Benom, instanciado y con modo difícil",
    text: "En retail era prácticamente inalcanzable por tres errores del propio juego. Ahora se entra por grupo, y el modo difícil suma su corte y un botín aparte.",
  },
  {
    title: "Cofres con motor propio",
    text: "Reescritos para que abrir uno signifique algo y las probabilidades sean las que se anuncian.",
  },
  {
    title: "Invasores",
    text: "Mini jefes que aparecen por el mundo cada dos horas, con variación, entre el mediodía y la medianoche.",
  },
];

const eventos = [
  { name: "Team vs Team", when: "20:00 y 00:00", text: "Dos equipos en la arena del Coliseo, con sus accesos exteriores." },
  { name: "Capture the Flag", when: "21:30 y 01:30", text: "Instancia propia. Gana el que aguanta, no el que mata más." },
  { name: "Deathmatch", when: "en rotación", text: "Todos contra todos, sin equipos." },
  { name: "Torneo de Pesca", when: "semanal", text: "Gana el que saca el mejor pescado — la rareza decide, no el azar." },
];

const comodidades = [
  { title: "Buffs sin pedir favores", text: "Un buffer con esquemas guardados en el Community Board. Armás tu combinación una vez y la repetís con un clic." },
  { title: "El daño, en castellano y con el nombre del skill", text: "El chat te dice qué habilidad pegó y cuánto, con el veneno tick a tick. En retail es un número suelto." },
  { title: "Ver los drops antes de farmear", text: "Shift-click sobre un monstruo y te muestra qué suelta y qué se le puede robar." },
  { title: "192 apariencias", text: "Sistema de transmog: tu equipo mantiene sus estadísticas y se ve como vos quieras. Disfraces, armaduras y armas." },
  { title: "Quests diarias", text: "Tres por día desde nivel 40, se piden y se entregan desde el Community Board." },
  { title: "El comando .stat", text: "Una ventana con tus estadísticas reales, las que el cliente no te muestra." },
  { title: "Títulos por PvP", text: "Tu cuenta de muertes se ve, y cambia de color a medida que sube." },
  { title: "Pociones automáticas", text: "HP y CP, opcionales, para que pelear no sea apretar una tecla mil veces." },
];

export default function PorQueL2ThunderPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      {/* Intro */}
      <div className="mx-auto max-w-3xl text-center">
        <Crest className="mx-auto h-14 w-14" />
        <h1 className="brand mt-5 text-4xl font-black sm:text-5xl">
          <span className="text-accent-2">L2</span> Thunder
        </h1>
        <p className="brand mt-2 text-xs font-bold uppercase tracking-widest text-accent-2">
          Interlude, reimaginado
        </p>
        <p className="mt-6 text-muted">
          No es Interlude con las tasas subidas. Es Interlude con{" "}
          <strong className="font-bold text-foreground">cada clase revisada a mano</strong>, un
          enchant que no te rompe el equipo, profesiones que valen la pena y contenido nuevo —
          sobre la crónica que ya sabés jugar.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-none border border-border-soft bg-border-soft sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-4 py-6 text-center">
              <p className="font-display text-2xl font-black text-gold sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* El ritmo */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="El ritmo"
          title="Progresás sin dejar de jugar"
          intro="Las tasas están puestas para que llegues al contenido, no para que lo saltees. Subís rápido, pero el equipo se sigue ganando."
        />
        <ComparisonTable rows={ritmoRows} />
        <div className="card-surface mt-6 rounded-none border-gold/30 p-5">
          <p className="brand text-xs font-bold uppercase tracking-widest text-gold">
            Sin trampa en la letra chica
          </p>
          <p className="mt-2 text-sm text-muted">
            La diferencia de nivel con el monstruo sigue contando hasta{" "}
            <strong className="font-semibold text-foreground">11 niveles</strong>: no se sube a
            otro llevándote de la mano en una zona que no te corresponde.
          </p>
        </div>
      </section>

      {/* El enchant */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="El enchant"
          title="Tu arma no se rompe. Nunca."
          intro="Es el cambio que más se nota. En Interlude original, fallar un enchant convierte tu arma en cristales y se terminó. Acá eso no pasa."
        />
        <ComparisonTable rows={enchantRows} />
        <div className="mt-6 max-w-3xl">
          <p className="font-display text-lg font-bold text-foreground">Por qué importa</p>
          <p className="mt-2 text-sm text-muted">
            Encantar deja de ser una ruleta rusa y pasa a ser una decisión: arriesgás progreso, no
            el ítem. Y los pergaminos se apilan, así que el inventario no se te llena de filas
            sueltas.
          </p>
        </div>
      </section>

      {/* Las clases */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Las clases"
          title="Revisadas una por una, no con una planilla"
          intro="Interlude tiene clases que nadie juega y habilidades que nadie usa. En vez de subirle un porcentaje a todo, fuimos rama por rama."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {clases.map((c) => (
            <div key={c.n} className="card-surface flex gap-4 rounded-none p-6">
              <span className="font-display text-2xl font-black text-accent-2">{c.n}</span>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            La idea de fondo
          </p>
          <p className="mt-2 text-sm text-muted">
            No queremos que elijas tu clase por lo que dice una guía de 2007. Queremos que la
            elijas porque leíste lo que hace y te gustó.
          </p>
        </div>
      </section>

      {/* Las profesiones */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Las profesiones"
          title="La pesca dejó de ser una curiosidad"
          intro="En Interlude original la pesca son 278 pescados con nombres que no dicen nada, cero experiencia y un torneo que se gana por azar. La rehicimos entera."
        />
        <ComparisonTable rows={pescaRows} />
        <div className="mt-6 max-w-3xl">
          <p className="font-display text-lg font-bold text-foreground">Y se ve dónde vas</p>
          <p className="mt-2 text-sm text-muted">
            El Community Board tiene una pestaña Profesiones con tu nivel, la barra hacia el
            siguiente, tus puntos y cada habilidad con lo que cuesta el próximo escalón. Nada de
            adivinar.
          </p>
        </div>
      </section>

      {/* El contenido */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="El contenido"
          title="Jefes que se pueden pelear"
          intro="Los jefes épicos de Interlude son de quien llega primero con cincuenta personas. Acá varios pasaron a instancia: entrás con tu grupo y la pelea es tuya."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {jefes.map((j) => (
            <div key={j.title} className="card-surface rounded-none p-6">
              <h3 className="font-display text-base font-bold text-gold">{j.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{j.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-display text-lg font-bold text-foreground">Eventos, todos los días</p>
          <div className="card-surface mt-4 overflow-hidden rounded-none">
            {eventos.map((e, i) => (
              <div
                key={e.name}
                className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4 ${
                  i !== eventos.length - 1 ? "border-b border-border-soft" : ""
                }`}
              >
                <span className="w-40 shrink-0 font-display text-sm font-bold text-gold">
                  {e.name}
                </span>
                <span className="w-28 shrink-0 text-xs uppercase tracking-wider text-accent-2">
                  {e.when}
                </span>
                <span className="text-sm text-muted">{e.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Caer en un evento deja Medallas del Caído, que también salen del PvP abierto y se
            canjean con un vendedor propio.
          </p>
        </div>
      </section>

      {/* La comodidad */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="La comodidad"
          title="Lo que no deberías tener que sufrir"
          intro="Ninguna de estas cosas te hace más fuerte. Todas te sacan una molestia de encima."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comodidades.map((c) => (
            <div
              key={c.title}
              className="card-surface rounded-none p-5 transition hover:border-accent/50"
            >
              <h3 className="font-display text-sm font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Empezar */}
      <section className="mx-auto mt-24 max-w-3xl text-center">
        <SectionHeader
          eyebrow="Empezar"
          title="Bajás el launcher y jugás"
          intro="El launcher se encarga del parche y de mantenerte al día. No hace falta tocar archivos ni buscar clientes por ahí."
        />
        <p className="-mt-4 text-muted">
          Si venís de retail vas a reconocer todo. Si nunca jugaste Interlude, esta es la versión
          que se explica sola.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-impact bg-gold px-7 py-3 text-background hover:brightness-110"
          >
            Descargar cliente (3.7 GB)
          </a>
          <a
            href={LAUNCHER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none border border-gold px-7 py-3 font-semibold text-gold transition hover:border-border-soft hover:text-foreground"
          >
            Descargar launcher
          </a>
        </div>

        <Link
          href="/donar"
          className="mt-6 inline-block text-sm text-muted underline decoration-border-soft underline-offset-4 transition hover:text-gold"
        >
          O conocé los beneficios de Fundador
        </Link>

        <p className="brand mt-16 text-xs font-bold uppercase tracking-widest text-muted/60">
          L2 Thunder · Interlude reimaginado
        </p>
      </section>
    </div>
  );
}
