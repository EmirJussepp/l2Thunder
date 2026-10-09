export type Band = { label: string; cut: number; note: string };

// El largo de cada franja es proporcional a su corte; la pista representa
// SCALE niveles de diferencia, que alcanza para el corte más alto (21).
const SCALE = 24;

// Barras comparadas de los límites de nivel (party, mobs, Raid Curse): en
// dorado lo que todavía se cobra, el resto vacío. Es un apoyo visual: los
// números exactos están escritos arriba de cada barra y en las tablas de la
// guía, por eso las barras van aria-hidden.
export default function LevelBands({ bands, caption }: { bands: Band[]; caption: string }) {
  return (
    <figure className="card-surface rounded-none p-5">
      <div className="space-y-5">
        {bands.map((b) => (
          <div key={b.label}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="brand shrink-0 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-muted">
                {b.label}
              </p>
              <p className="text-right text-xs text-muted">
                <span className="mr-1.5 font-display text-lg font-black text-gold">{b.cut}</span>
                {b.note}
              </p>
            </div>
            <div
              aria-hidden="true"
              className="mt-2 h-3 border border-border-soft bg-surface-2"
            >
              <div className="h-full bg-gold" style={{ width: `${(b.cut / SCALE) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="mt-3 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-muted"
      >
        <span>0</span>
        <span>diferencia de nivel →</span>
      </div>

      <figcaption className="mt-4 border-t border-border-soft pt-4 text-xs leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
