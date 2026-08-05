const steps = [
  {
    step: "1",
    title: "Descargá el cliente",
    description: "Interlude oficial + patch de L2Thunder (link próximamente).",
  },
  {
    step: "2",
    title: "Creá tu cuenta",
    description: "Registro rápido desde la web, sin vueltas.",
  },
  {
    step: "3",
    title: "Entrá al server",
    description: "Elegí raza y clase libremente: todas están pensadas para rendir.",
  },
];

export default function PlaySteps() {
  return (
    <section id="jugar" className="border-t border-border-soft bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Cómo empezar</h2>
          <p className="mt-4 text-muted">
            Estamos en beta: podés entrar ya mismo a testear el server.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="card-surface rounded-none p-6 text-center">
              <span className="font-display text-3xl font-black text-accent">{s.step}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
