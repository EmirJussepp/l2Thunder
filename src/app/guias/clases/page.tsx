import type { Metadata } from "next";
import Link from "next/link";
import { classSlug, getClassGuide } from "@/lib/clases";
import { PANORAMA, PANORAMA_INTRO, type PanoramaClass } from "@/lib/clases/panorama";

export const metadata: Metadata = {
  title: "Elegir clase — Guías de clase",
  description:
    "Qué hace cada clase de tercera en L2Thunder, en una línea: rol, arma, en qué es fuerte y en qué es floja, con la guía completa de habilidades de cada una.",
};

function ClassCard({ c }: { c: PanoramaClass }) {
  const hasGuide = Boolean(getClassGuide(classSlug(c.name)));
  // Algunas clases se llaman igual que su arma (Duelist: espadas dobles): no repetirlo.
  const roleLine = c.role === c.weapon ? c.weapon : `${c.role} · ${c.weapon}`;

  const body = (
    <>
      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-gold">
        {c.name}
      </h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
        {roleLine}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        <strong className="font-semibold text-foreground">Fuerte:</strong> {c.strong}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        <strong className="font-semibold text-foreground">Floja:</strong> {c.weak}
      </p>
      <span
        className={`mt-4 inline-block text-xs font-semibold uppercase tracking-widest ${
          hasGuide ? "text-gold" : "text-muted"
        }`}
      >
        {hasGuide ? "Ver guía →" : "Guía próximamente"}
      </span>
    </>
  );

  if (!hasGuide) {
    return <div className="card-surface rounded-none p-5">{body}</div>;
  }
  return (
    <Link
      href={`/guias/clases/${classSlug(c.name)}`}
      className="card-surface group block rounded-none p-5 transition hover:border-accent/50"
    >
      {body}
    </Link>
  );
}

export default function ElegirClasePage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/guias"
          className="-my-3 inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Guías
        </Link>

        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            L2 Thunder · Guías de clase
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Elegir clase</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Qué hace cada una, en una línea
          </p>
          <p className="mt-6 max-w-[38rem] text-muted">{PANORAMA_INTRO}</p>
        </div>

        {PANORAMA.map((group) => (
          <section key={group.race} className="mt-14 border-t border-border-soft pt-14">
            <h2 className="font-display text-xl font-bold text-foreground">
              <span aria-hidden="true" className="mr-2 text-accent-2">
                ✦
              </span>
              {group.race}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.classes.map((c) => (
                <ClassCard key={c.name} c={c} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
