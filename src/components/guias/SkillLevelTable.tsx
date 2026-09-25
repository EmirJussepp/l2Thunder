export type SkillRow = {
  name: string;
  gives: string;
  levels: [string, string, string];
};

// Una habilidad con sus tres niveles. En sm+ es una tabla de cinco columnas; en
// el celular DataTable pondría cada dato en su propia línea (cinco por
// habilidad, veinte habilidades), así que ahí cada habilidad es una tarjeta
// chica con los tres niveles lado a lado.
const COLS =
  "sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]";

const HEADERS = ["Habilidad", "Qué da", "Nivel 1", "Nivel 2", "Nivel 3"];

export default function SkillLevelTable({ rows }: { rows: SkillRow[] }) {
  return (
    <div className="card-surface overflow-hidden rounded-none">
      <div className={`hidden border-b border-border-soft bg-surface-2/60 sm:grid ${COLS}`}>
        {HEADERS.map((h, i) => (
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

      {rows.map((r) => (
        <div key={r.name} className="border-b border-border-soft last:border-b-0">
          <div className={`hidden sm:grid ${COLS}`}>
            <div className="px-5 py-4 text-sm font-semibold text-foreground">{r.name}</div>
            <div className="border-l border-border-soft px-5 py-4 text-sm text-muted">
              {r.gives}
            </div>
            {r.levels.map((v, i) => (
              <div
                key={i}
                className="border-l border-border-soft px-5 py-4 text-sm text-foreground"
              >
                {v}
              </div>
            ))}
          </div>

          <div className="px-5 py-4 sm:hidden">
            <p className="text-sm font-semibold text-foreground">{r.name}</p>
            <p className="mt-0.5 text-xs text-muted">{r.gives}</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {r.levels.map((v, i) => (
                <div key={i} className="border border-border-soft bg-surface-2/60 px-1 py-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted/60">
                    Nivel {i + 1}
                  </span>
                  <span className="mt-0.5 block text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
