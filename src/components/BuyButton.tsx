"use client";

import { useState, type FormEvent } from "react";

export default function BuyButton({
  packageId,
  label,
  buttonClassName,
  fullWidthButton = false,
}: {
  packageId: string;
  label: string;
  buttonClassName: string;
  fullWidthButton?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Se abre la pestaña en blanco ACÁ, todavía dentro del gesto de click del
    // usuario — si se espera al fetch para recién ahí abrir, el navegador lo
    // trata como popup y lo bloquea. Después solo le cambiamos la URL.
    const checkoutWindow = window.open("", "_blank");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId, characterName }),
      });
      const data = await res.json();

      if (!res.ok) {
        checkoutWindow?.close();
        throw new Error(data.error ?? "No se pudo iniciar el pago");
      }

      if (checkoutWindow) {
        checkoutWindow.location.href = data.checkoutUrl;
      } else {
        window.open(data.checkoutUrl, "_blank", "noopener,noreferrer");
      }
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      checkoutWindow?.close();
      setError(err instanceof Error ? err.message : "Error inesperado, probá de nuevo");
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p className="text-sm text-foreground">
        Se abrió Mercado Pago en una pestaña nueva — completá el pago ahí. Los Coins
        of Luck llegan solos por correo in-game a los pocos segundos de confirmarse.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${buttonClassName} ${fullWidthButton ? "w-full" : ""}`}
      >
        {label}
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 text-left">
      <label className="block text-xs text-muted">
        Nombre de tu personaje en el juego
        <input
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          required
          minLength={3}
          maxLength={40}
          pattern="[a-zA-Z0-9_]{3,40}"
          placeholder="tu_personaje"
          autoFocus
          className="mt-1 w-full border border-border-soft bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
        />
      </label>

      <p className="text-xs text-muted/70">
        Tiene que ser el personaje exacto (no la cuenta) — ahí llegan los Coins of Luck
        por correo in-game. Revisá que esté bien escrito.
      </p>

      {error && <p className="text-xs text-danger">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`${buttonClassName} w-full disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {loading ? "Redirigiendo a Mercado Pago…" : `Pagar — ${label}`}
      </button>
    </form>
  );
}
