import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guías",
  description:
    "Guías de contenido de L2Thunder: instancias, jefes y misiones explicados paso a paso, con coordenadas y requisitos exactos.",
};

const guides = [
  {
    href: "/guias/los-cuatro-sepulcros",
    level: "Nivel 74+",
    title: "Los Cuatro Sepulcros",
    subtitle: "Cómo derrotar a Shadow of Halisha",
    text: "El pase, la misión del espíritu sin nombre, la ventana de cinco minutos y los cuatro guardianes — todo lo que hace falta para llegar al jefe.",
  },
  {
    href: "/guias/sailren-benom-frintezza",
    level: "Instancias",
    title: "Sailren, Benom y Frintezza",
    subtitle: "Las tres mazmorras privadas del servidor",
    text: "Cómo entrar a cada una, los mecanismos de la pelea y el botín — incluido el modo difícil de Benom y el Triol's Earring, exclusivo de L2Thunder.",
  },
  {
    href: "/guias/los-siete-signos",
    level: "Evento · Nivel 20+",
    title: "Los Siete Signos",
    subtitle: "Amanecer contra Ocaso, una semana por ciclo",
    text: "Cómo elegir bando y sello, juntar piedras, jugar el Festival de la Oscuridad y cobrar Adena Antigua — con las zonas abiertas a todos, propio de L2Thunder.",
  },
  {
    href: "/guias/la-grieta-dimensional",
    level: "Nivel 20+",
    title: "La Grieta Dimensional",
    subtitle: "Cinco salas, un reloj corriendo y un jefe en el fondo",
    text: "Cómo juntar Dimensional Fragments, elegir escalón, sobrevivir al reloj de salas y llegar a Anakazel — con dos jugadores alcanza.",
  },
  {
    href: "/guias/el-festival-de-la-oscuridad",
    level: "Evento · Nivel 20+",
    title: "El Festival de la Oscuridad",
    subtitle: "Dieciocho minutos de oleadas por el otro 50% de los Siete Signos",
    text: "Cómo elegir escalón, sobrevivir a las oleadas y registrar el puntaje para cobrar la bolsa de Adena Antigua — con dos jugadores alcanza.",
  },
];

export default function GuiasPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">Guías</p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Guías del servidor</h1>
          <p className="mt-4 text-muted">
            Instancias, jefes y misiones explicados paso a paso: qué hace falta, dónde queda y
            qué se rompe si te saltás un requisito.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="card-surface group block rounded-none p-6 transition hover:border-accent/50"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-accent-2">
                {g.level}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground group-hover:text-gold">
                {g.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-muted">{g.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{g.text}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                Ver guía →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
