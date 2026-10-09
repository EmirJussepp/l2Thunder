import type { ReactNode } from "react";

export type ComparisonRow = {
  label: string;
  original: ReactNode;
  thunder: ReactNode;
};

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div role="table" className="card-surface overflow-hidden rounded-none">
      <div
        role="row"
        className="hidden grid-cols-[minmax(0,0.7fr)_1fr_1fr] border-b border-border-soft bg-surface-2/60 sm:grid"
      >
        <div role="columnheader" aria-label="Aspecto" />
        <div
          role="columnheader"
          className="border-l border-border-soft px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted"
        >
          Interlude original
        </div>
        <div
          role="columnheader"
          className="border-l border-border-soft px-5 py-3 text-xs font-semibold uppercase tracking-widest text-gold"
        >
          L2 Thunder
        </div>
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          role="row"
          className="grid grid-cols-1 gap-2 border-b border-border-soft px-5 py-4 last:border-b-0 sm:grid-cols-[minmax(0,0.7fr)_1fr_1fr] sm:gap-0 sm:px-0 sm:py-0"
        >
          <p
            role="rowheader"
            className="font-display text-sm font-bold text-accent-2 sm:flex sm:items-center sm:px-5 sm:py-4"
          >
            {row.label}
          </p>
          <div
            role="cell"
            className="text-sm leading-relaxed text-muted sm:border-l sm:border-border-soft sm:px-5 sm:py-4"
          >
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted sm:hidden">
              Interlude original
            </span>
            {row.original}
          </div>
          <div
            role="cell"
            className="text-sm leading-relaxed text-foreground sm:border-l sm:border-border-soft sm:px-5 sm:py-4"
          >
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-gold/70 sm:hidden">
              L2 Thunder
            </span>
            {row.thunder}
          </div>
        </div>
      ))}
    </div>
  );
}
