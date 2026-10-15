"use client";

import { useState } from "react";
import BuyButton from "./BuyButton";

const QUICK = [1, 5, 10, 20];

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const STEP_BUTTON =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-none border border-border-soft text-lg font-semibold text-foreground transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border-soft disabled:hover:text-foreground";

function coinsLabel(n: number) {
  return `${n} ${n === 1 ? "Coin" : "Coins"} of Luck`;
}

// La tarjeta de "Coins of Luck sueltas": el jugador elige cuántas (de 1 a `max`) y ve el total
// al instante. El precio por Coin viene de la base; el cobro lo vuelve a calcular el servidor.
export default function UnitCoinsClient({
  packageId,
  pesosPerCoin,
  max,
}: {
  packageId: string;
  pesosPerCoin: number;
  max: number;
}) {
  const [text, setText] = useState("1");
  const parsed = parseInt(text, 10);
  const qty = Number.isFinite(parsed) ? Math.min(max, Math.max(1, parsed)) : 1;
  const total = qty * pesosPerCoin;

  function setQty(n: number) {
    setText(String(Math.min(max, Math.max(1, n))));
  }

  return (
    <div className="card-surface mx-auto flex max-w-md flex-col rounded-none p-6">
      <h3 className="font-display text-xl font-bold">Coins of Luck</h3>
      <p className="mt-1 text-sm text-muted">1 Coin of Luck = {priceFormatter.format(pesosPerCoin)}</p>

      <ul className="mt-4 space-y-2 text-sm text-muted">
        <li className="flex items-start gap-2">
          <span className="mt-1 text-accent">•</span>
          <span>Comprás las que necesites, de 1 a {max} por compra</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-accent">•</span>
          <span>Llegan por correo in-game al personaje que elijas</span>
        </li>
      </ul>

      <div className="mt-5">
        <p id="unit-coins-label" className="text-xs font-semibold uppercase tracking-wider text-muted">
          Cantidad
        </p>

        <div role="group" aria-label="Cantidades frecuentes" className="mt-2 flex flex-wrap gap-2">
          {QUICK.filter((q) => q <= max).map((q) => {
            const active = qty === q && text === String(q);
            return (
              <button
                key={q}
                type="button"
                aria-pressed={active}
                onClick={() => setQty(q)}
                className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-none border px-3 text-sm font-semibold transition ${
                  active
                    ? "border-gold bg-gold text-background"
                    : "border-border-soft text-muted hover:border-gold/60 hover:text-foreground"
                }`}
              >
                {q}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            aria-label="Una menos"
            disabled={qty <= 1}
            onClick={() => setQty(qty - 1)}
            className={STEP_BUTTON}
          >
            −
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            aria-labelledby="unit-coins-label"
            value={text}
            onChange={(e) => setText(e.target.value.replace(/\D/g, "").slice(0, 3))}
            onBlur={() => setQty(qty)}
            className="min-h-11 w-20 rounded-none border border-border-soft bg-background px-3 text-center text-base font-semibold text-foreground outline-none focus:border-gold"
          />
          <button
            type="button"
            aria-label="Una más"
            disabled={qty >= max}
            onClick={() => setQty(qty + 1)}
            className={STEP_BUTTON}
          >
            +
          </button>
        </div>
      </div>

      <div aria-live="polite" className="mt-5">
        <p className="text-2xl font-black text-accent">{coinsLabel(qty)}</p>
        <p className="text-sm text-muted">Total: {priceFormatter.format(total)}</p>
      </div>

      <div className="mt-6">
        <BuyButton
          packageId={packageId}
          label={`Comprar ${coinsLabel(qty)}`}
          fullWidthButton
          quantity={qty}
          summary={`Vas a comprar ${coinsLabel(qty)} por ${priceFormatter.format(total)}.`}
          buttonClassName="btn btn-primary btn-sm"
        />
      </div>
    </div>
  );
}
