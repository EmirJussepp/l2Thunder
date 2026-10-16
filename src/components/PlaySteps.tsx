import CharacterScene from "@/components/CharacterScene";
import { CLIENT_MEGA_URL, CLIENT_URL, LAUNCHER_MEGA_URL, LAUNCHER_URL } from "@/lib/downloads";

const steps = [
  {
    step: "1",
    title: "Descargá el cliente y el launcher",
    description: "Interlude completo (3.99 GB) + el launcher para conectarte al server.",
  },
  {
    step: "2",
    title: "Creá tu cuenta",
    description: "Es autocuenta: poné el usuario y contraseña que quieras en la pantalla de login del launcher y se crea sola.",
  },
  {
    step: "3",
    title: "Entrá al server",
    description: "Elegí raza y clase libremente: todas están pensadas para rendir.",
  },
];

export default function PlaySteps() {
  return (
    <CharacterScene id="jugar" personaje="humano" side="left" band>
      <div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Cómo empezar</h2>
        <p className="mt-4 text-muted">
          Estamos en beta: podés entrar ya mismo a testear el server.
        </p>

        <ol className="mt-10">
          {steps.map((s) => (
            <li key={s.step} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 bg-gold/10 font-display text-xl font-black text-gold">
                  {s.step}
                </span>
                {s.step !== String(steps.length) && (
                  <span aria-hidden="true" className="mt-2 w-px flex-1 bg-gradient-to-b from-gold/40 to-border-soft" />
                )}
              </div>
              <div className="min-w-0 flex-1 pb-9">
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.description}</p>

                {s.step === "1" && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={CLIENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Descargar cliente (3.99 GB)
                    </a>
                    <a
                      href={LAUNCHER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      Descargar launcher
                    </a>
                  </div>
                )}

                {s.step === "1" && (
                  <p className="mt-3 text-xs text-muted">
                    ¿Drive no te deja bajar? Probá con Mega:{" "}
                    <a href={CLIENT_MEGA_URL} target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-border-soft underline-offset-4 transition hover:text-foreground">
                      cliente
                    </a>{" "}
                    ·{" "}
                    <a href={LAUNCHER_MEGA_URL} target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-border-soft underline-offset-4 transition hover:text-foreground">
                      launcher
                    </a>
                    .
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </CharacterScene>
  );
}
