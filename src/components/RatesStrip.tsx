const rates = [
  { label: "Experiencia", value: "x15" },
  { label: "SP", value: "x15" },
  { label: "Drop", value: "x10" },
  { label: "Spoil", value: "x10" },
  { label: "Auto-loot", value: "Sí" },
  { label: "Chronicle", value: "Interlude" },
];

export default function RatesStrip() {
  return (
    <section id="rates" className="border-y border-border-soft bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 md:grid-cols-6">
        {rates.map((rate) => (
          <div key={rate.label} className="text-center">
            <p className="font-display text-2xl font-bold text-accent">{rate.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted">{rate.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
