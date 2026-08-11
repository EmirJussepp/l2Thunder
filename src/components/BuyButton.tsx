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
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId, gameAccountName: accountName }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "No se pudo iniciar el pago");
      }

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado, probá de nuevo");
      setLoading(false);
    }
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
        Nombre de tu cuenta en el juego
        <input
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          required
          minLength={3}
          maxLength={40}
          pattern="[a-zA-Z0-9_]{3,40}"
          placeholder="tu_cuenta"
          autoFocus
          className="mt-1 w-full border border-border-soft bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-gold"
        />
      </label>

      <p className="text-xs text-muted/70">
        Revisá que esté bien escrito — ahí se acreditan los Coins of Luck.
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
