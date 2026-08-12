const steps = [
  {
    step: "1",
    title: "Escribí el nombre exacto de tu personaje",
    description: "No tu cuenta — el personaje que va a recibir los Coins of Luck.",
  },
  {
    step: "2",
    title: "Pagás con Mercado Pago",
    description: "Nunca te pedimos la contraseña de tu cuenta de L2, en ningún paso.",
  },
  {
    step: "3",
    title: "Te llega por correo in-game",
    description:
      "Cuando confirmamos el pago, tu personaje recibe un correo con los Coins of Luck. Tiene que estar online para recibirlo — si no, te espera hasta que entres.",
  },
];

export default function AccountLinkExplainer() {
  return (
    <div className="card-surface mx-auto max-w-3xl rounded-none p-8">
      <h2 className="font-display text-xl font-bold">¿Cómo llega mi compra?</h2>
      <p className="mt-2 text-sm text-muted">
        Por seguridad, la web nunca te pide la contraseña de tu cuenta de juego — ni acá ni
        en ningún otro paso.
      </p>

      <ol className="mt-6 space-y-4">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-accent/15 font-display font-bold text-accent">
              {s.step}
            </span>
            <div>
              <p className="font-semibold text-foreground">{s.title}</p>
              <p className="text-sm text-muted">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 border-t border-border-soft pt-4 text-xs text-muted/70">
        Dejá espacio libre en el inventario antes de donar — si está lleno, el correo
        no se puede entregar.
      </p>
    </div>
  );
}
