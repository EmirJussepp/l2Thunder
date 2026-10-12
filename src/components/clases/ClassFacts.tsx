import type { ClassFact } from "@/lib/clases/types";

// Ficha de la clase: camino, armadura, arma, cantidad de habilidades y en qué es fuerte o floja.
// Camino y Habilidades ocupan la fila entera; el resto va de a dos.
const FULL_ROW = new Set(["Camino", "Habilidades"]);

export default function ClassFacts({ facts }: { facts: ClassFact[] }) {
  return (
    <dl className="card-surface grid gap-x-8 gap-y-5 rounded-none p-5 sm:grid-cols-2 sm:p-6">
      {facts.map((f) => (
        <div key={f.label} className={FULL_ROW.has(f.label) ? "sm:col-span-2" : undefined}>
          <dt className="font-display text-xs font-bold uppercase tracking-[0.18em] text-muted">
            {f.label}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground sm:text-base">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
