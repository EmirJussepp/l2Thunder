import Link from "next/link";

const points = [
  { label: "Rates", value: "×15 XP/SP, ×10 drop" },
  { label: "Enchant", value: "El ítem nunca se destruye" },
  { label: "Clases", value: "Revisadas una por una" },
];

export default function WhyTeaser() {
  return (
    <section className="border-t border-border-soft bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
          ¿Por qué L2Thunder?
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          No es Interlude con las tasas subidas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Rates pensadas para llegar al contenido, un enchant que no te rompe el equipo y clases
          revisadas una por una — no con una planilla.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.label} className="card-surface rounded-none p-6">
              <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
                {p.label}
              </p>
              <p className="mt-2 font-display text-lg font-bold text-foreground">{p.value}</p>
            </div>
          ))}
        </div>

        <Link
          href="/por-que-l2thunder"
          className="btn-impact mt-10 inline-block bg-gold px-7 py-3 text-background hover:brightness-110"
        >
          Ver todo lo que cambia
        </Link>
      </div>
    </section>
  );
}
