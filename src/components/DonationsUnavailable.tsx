export default function DonationsUnavailable() {
  return (
    <div className="card-surface mx-auto max-w-xl rounded-none p-8 text-center">
      <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
        En mantenimiento
      </p>
      <p className="mt-3 text-muted">
        El sistema de donaciones está en mantenimiento en este momento y no se puede comprar.
        Volvé a pasar en un rato.
      </p>
    </div>
  );
}
