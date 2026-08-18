const CLIENT_URL = "https://drive.google.com/file/d/1GaIgsoBCGghch0QhcNxHcwFXi38J_XWB/view?usp=sharing";
const LAUNCHER_URL = "https://drive.google.com/file/d/1dpcs8oKKN-yq3xXjwgIcD6f8tPLpkvdk/view?usp=sharing";

const steps = [
  {
    step: "1",
    title: "Descargá el cliente y el launcher",
    description: "Interlude completo (3.7 GB) + el launcher para conectarte al server.",
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

              {s.step === "1" && (
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={CLIENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-none bg-gradient-to-r from-gold to-accent-2 px-4 py-2 text-sm font-semibold text-background shadow-lg shadow-gold/30 transition hover:brightness-110"
                  >
                    Descargar cliente (3.7 GB)
                  </a>
                  <a
                    href={LAUNCHER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-none border border-border-soft px-4 py-2 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold"
                  >
                    Descargar launcher
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
