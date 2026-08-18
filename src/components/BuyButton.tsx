"use client";

import { useState, type FormEvent } from "react";

type Step = "closed" | "form" | "confirm" | "submitted";

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
  const [step, setStep] = useState<Step>("closed");
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleContinue(e: FormEvent) {
    e.preventDefault();
    setStep("confirm");
  }

  async function handleConfirm() {
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
      setStep("submitted");
    } catch (err) {
      checkoutWindow?.close();
      setError(err instanceof Error ? err.message : "Error inesperado, probá de nuevo");
      setLoading(false);
      setStep("form");
    }
  }

  if (step === "submitted") {
    return (
      <p className="text-sm text-foreground">
        Se abrió Mercado Pago en una pestaña nueva — completá el pago ahí. Los Coins
        of Luck llegan solos por correo in-game a los pocos segundos de confirmarse.
      </p>
    );
  }

  if (step === "confirm") {
    return (
      <div className="w-full space-y-3 text-left">
        <p className="text-sm text-foreground">
          Tu personaje es <span className="font-semibold text-gold">{characterName}</span>
          , ¿confirmás?
        </p>
        <p className="text-xs text-muted/70">
          Ahí llegan los Coins of Luck — si está mal escrito, no hay forma de corregirlo
          después del pago.
        </p>

        {error && <p className="text-xs text-danger">{error}</p>}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setStep("form")}
            disabled={loading}
            className="flex-1 border border-border-soft px-3 py-2 text-sm text-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-60"
          >
            Corregir
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className={`${buttonClassName} flex-1 disabled:cursor-not-allowed disabled:opacity-60`}
          >
            {loading ? "Redirigiendo…" : "Sí, es correcto"}
          </button>
        </div>
      </div>
    );
  }

  if (step === "closed") {
    return (
      <button
        type="button"
        onClick={() => setStep("form")}
        className={`${buttonClassName} ${fullWidthButton ? "w-full" : ""}`}
      >
        {label}
      </button>
    );
  }

  return (
    <form onSubmit={handleContinue} className="w-full space-y-3 text-left">
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

      <button type="submit" className={`${buttonClassName} w-full`}>
        Continuar
      </button>
    </form>
  );
}
