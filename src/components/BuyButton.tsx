"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { DISCORD_URL } from "@/lib/social";
import { NPC_DONACIONES, NPC_DONACIONES_LUGARES } from "@/lib/donaciones";

type Step = "closed" | "form" | "confirm" | "submitted";

// El aviso del nombre del personaje: es el error que más caro sale, porque el pago se hace igual y las
// Coins no llegan si ese personaje no existe. Mismo molde que los avisos de "cuidado" (filete rosa a la
// izquierda, tinte del 6 %), en tamaño compacto para entrar en la tarjeta.
function NameWarning({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-danger/60 bg-danger/[0.06] p-3">
      <p className="brand text-xs font-bold uppercase tracking-widest text-danger">{title}</p>
      <div className="mt-1.5 space-y-1.5 text-xs leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export default function BuyButton({
  packageId,
  label,
  buttonClassName,
  fullWidthButton = false,
  quantity,
  summary,
}: {
  packageId: string;
  label: string;
  buttonClassName: string;
  fullWidthButton?: boolean;
  // Solo para las Coins sueltas: la cantidad elegida y una línea que la resume en la confirmación.
  quantity?: number;
  summary?: string;
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
        body: JSON.stringify({ packageId, characterName, ...(quantity !== undefined ? { quantity } : {}) }),
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
      <div className="w-full space-y-3 text-left">
        <p className="text-sm text-foreground">
          Se abrió Mercado Pago en una pestaña nueva — completá el pago ahí. Los Coins
          of Luck llegan solos por correo in-game, en unos minutos desde que se confirma el
          pago, siempre que tu personaje esté conectado. Después las canjeás con {NPC_DONACIONES}, en{" "}
          {NPC_DONACIONES_LUGARES}.
        </p>
        <p className="text-xs text-muted">
          ¿Pasaron más de 10 minutos con tu personaje conectado, o te equivocaste con el
          nombre?{" "}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-border-soft underline-offset-4 transition hover:text-foreground"
          >
            Escribinos por Discord
          </a>{" "}
          con el comprobante de Mercado Pago y lo revisamos.
        </p>
      </div>
    );
  }

  if (step === "confirm") {
    return (
      <div className="w-full space-y-3 text-left">
        {summary && <p className="text-sm font-semibold text-foreground">{summary}</p>}
        <p className="text-sm text-foreground">Las Coins of Luck van a llegar a este personaje:</p>
        {/* En letra monoespaciada y espaciada para que se distingan la I mayúscula, la l minúscula y el 1,
            y el 0 de la O: son los errores de tipeo más comunes con los nombres del juego. */}
        <p
          translate="no"
          className="break-all border border-gold/40 bg-gold/[0.06] px-3 py-2 font-mono text-lg font-bold tracking-[0.18em] text-gold"
        >
          {characterName}
        </p>
        <NameWarning title="Revisalo letra por letra">
          <p>
            Si ese personaje no existe, el pago se acredita igual en Mercado Pago pero las
            Coins no llegan. Compará con el nombre que ves en el juego, sobre tu personaje.
          </p>
        </NameWarning>

        {error && <p className="text-xs text-danger">{error}</p>}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setStep("form")}
            disabled={loading}
            className="btn btn-outline btn-sm flex-1"
          >
            Corregir
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className={`${buttonClassName} flex-1`}
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
        {/* Sin espacios (los nombres no los llevan: pegar uno con espacio de más rompía el formulario) y sin el
            autocorrector ni la mayúscula automática del teclado del celular, que cambian el nombre. */}
        <input
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value.replace(/\s/g, ""))}
          required
          minLength={3}
          maxLength={40}
          pattern="[a-zA-Z0-9_]{3,40}"
          placeholder="tu_personaje"
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          translate="no"
          className="mt-1 w-full border border-border-soft bg-background px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-gold"
        />
      </label>

      <NameWarning title="Es el personaje, no la cuenta">
        <p>
          Escribilo igual que lo ves en el juego, sobre tu personaje: ahí llegan las Coins of
          Luck por correo. Ojo con la I mayúscula y la l minúscula, y con el 0 y la O.
        </p>
        <p>Si ese personaje no existe, el pago se acredita igual pero las Coins no llegan.</p>
      </NameWarning>

      <button type="submit" className={`${buttonClassName} w-full`}>
        Continuar
      </button>
    </form>
  );
}
