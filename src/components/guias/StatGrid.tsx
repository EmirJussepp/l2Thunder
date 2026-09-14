export type Stat = { value: string; label: string; sub?: string };

// Columnas en sm+ según cuántas stats haya — son clases literales (no
// template strings) a propósito: Tailwind escanea el código fuente en busca
// de nombres de clase completos, así que "sm:grid-cols-" + n no generaría
// el CSS.
const SM_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-3 lg:grid-cols-5",
  6: "sm:grid-cols-3 lg:grid-cols-6",
};

export default function StatGrid({ stats }: { stats: Stat[] }) {
  const cols = SM_COLS[stats.length] ?? "sm:grid-cols-3";

  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-none border border-border-soft bg-border-soft ${cols}`}
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-surface px-4 py-6 text-center">
          <p className="font-display text-2xl font-black text-gold sm:text-3xl">{s.value}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{s.label}</p>
          {s.sub && <p className="mt-0.5 text-[10px] text-muted/60">{s.sub}</p>}
        </div>
      ))}
    </div>
  );
}
