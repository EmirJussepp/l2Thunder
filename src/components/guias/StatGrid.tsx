export type Stat = { value: string; label: string; sub?: string };

export default function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-none border border-border-soft bg-border-soft sm:grid-cols-3 lg:grid-cols-5">
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
