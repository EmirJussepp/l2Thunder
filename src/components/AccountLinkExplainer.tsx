const steps = [
  {
    step: "1",
    title: "Escribí .donatecode en el juego",
    description: "Tu personaje recibe un código de 6 dígitos por chat, válido por unos minutos.",
  },
  {
    step: "2",
    title: "Pegalo acá antes de pagar",
    description: "Así vinculamos la compra a tu cuenta sin pedirte nunca tu contraseña de L2.",
  },
  {
    step: "3",
    title: "Pagás y recibís los puntos al instante",
    description: "El servidor te acredita los puntos apenas se confirma el pago.",
  },
];

export default function AccountLinkExplainer() {
  return (
    <div className="card-surface mx-auto max-w-3xl rounded-2xl p-8">
      <h3 className="font-display text-xl font-bold">¿Cómo se vincula tu cuenta?</h3>
      <p className="mt-2 text-sm text-muted">
        Por seguridad, la web nunca te pide la contraseña de tu cuenta de juego. Usamos un
        código temporal que generás vos mismo desde adentro del server.
      </p>

      <ol className="mt-6 space-y-4">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display font-bold text-accent">
              {s.step}
            </span>
            <div>
              <p className="font-semibold text-foreground">{s.title}</p>
              <p className="text-sm text-muted">{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
