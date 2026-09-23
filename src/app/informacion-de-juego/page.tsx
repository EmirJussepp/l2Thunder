import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Información de juego",
  description:
    "Datos del servidor L2Thunder para consultar mientras jugás: armaduras y los bonus de cada set.",
};

const apartados = [
  {
    href: "/informacion-de-juego/armaduras",
    title: "Armaduras",
    subtitle: "Sets de grado B, A y S",
    text: "El nombre de cada set y los bonus que da, en Heavy, Light y Robe.",
  },
  {
    href: "/informacion-de-juego/joyas",
    title: "Joyas",
    subtitle: "Grado S y Raid Boss",
    text: "Collares, aros y anillos con el nombre de cada joya y los bonus que da.",
  },
];

export default function InformacionDeJuegoPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Información de juego
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Información de juego</h1>
          <p className="mt-4 text-muted">
            Datos del servidor para consultar mientras jugás. Elegí un apartado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apartados.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="card-surface group block rounded-none p-6 transition hover:border-accent/50"
            >
              <h2 className="font-display text-xl font-bold text-foreground group-hover:text-gold">
                {a.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-muted">{a.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                Ver →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
