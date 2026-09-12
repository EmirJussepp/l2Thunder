import type { ReactNode } from "react";

export default function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  const cols = { gridTemplateColumns: `repeat(${headers.length}, minmax(0,1fr))` };

  return (
    <div className="card-surface overflow-hidden rounded-none">
      <div
        className="hidden border-b border-border-soft bg-surface-2/60 sm:grid"
        style={cols}
      >
        {headers.map((h, i) => (
          <div
            key={h}
            className={`px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted ${
              i !== 0 ? "border-l border-border-soft" : ""
            }`}
          >
            {h}
          </div>
        ))}
      </div>

      {rows.map((row, i) => (
        <div
          key={i}
          className={`px-5 py-4 sm:px-0 sm:py-0 ${
            i !== rows.length - 1 ? "border-b border-border-soft" : ""
          }`}
        >
          <div className="hidden sm:grid" style={cols}>
            {row.map((cell, j) => (
              <div
                key={j}
                className={`px-5 py-4 text-sm text-foreground ${
                  j !== 0 ? "border-l border-border-soft" : ""
                }`}
              >
                {cell}
              </div>
            ))}
          </div>
          <div className="space-y-3 sm:hidden">
            {row.map((cell, j) => (
              <div key={j}>
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted/60">
                  {headers[j]}
                </span>
                <span className="text-sm text-foreground">{cell}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
