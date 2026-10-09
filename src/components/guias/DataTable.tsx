import type { ReactNode } from "react";

// Tabla de las guías. Se dibuja con divs porque en celular cada fila pasa a ser
// una pila de "etiqueta + valor", así que no puede ser un <table> real; los roles
// ARIA le devuelven a los lectores de pantalla la estructura de tabla (filas,
// encabezados de columna y primera celda como encabezado de fila).
export default function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  const cols = { gridTemplateColumns: `repeat(${headers.length}, minmax(0,1fr))` };

  return (
    <div role="table" className="card-surface overflow-hidden rounded-none">
      <div
        role="row"
        className="hidden border-b border-border-soft bg-surface-2/60 sm:grid"
        style={cols}
      >
        {headers.map((h, i) => (
          <div
            key={i}
            role="columnheader"
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
          role="row"
          className={`px-5 py-4 sm:px-0 sm:py-0 ${
            i !== rows.length - 1 ? "border-b border-border-soft" : ""
          }`}
        >
          <div className="hidden sm:grid" style={cols}>
            {row.map((cell, j) => (
              <div
                key={j}
                role={j === 0 ? "rowheader" : "cell"}
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
              <div key={j} role={j === 0 ? "rowheader" : "cell"}>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-muted">
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
