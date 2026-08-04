"use client";

import { useState } from "react";

export type TierView = {
  id: string;
  name: string;
  priceLabel: string;
  perks: string[];
  highlight: boolean;
};

export default function DonationTiersClient({ tiers }: { tiers: TierView[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`card-surface flex flex-col rounded-2xl p-6 ${
            tier.highlight ? "border-gold/60 ring-1 ring-gold/30" : ""
          }`}
        >
          {tier.highlight && (
            <span className="mb-3 self-start rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
              Más elegido
            </span>
          )}
          <h3 className="font-display text-xl font-bold">{tier.name}</h3>
          <p className="mt-1 text-2xl font-black text-accent">{tier.priceLabel}</p>

          <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
            {tier.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSelected(tier.name)}
            className={`mt-6 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              tier.highlight
                ? "bg-gradient-to-r from-gold to-accent-2 text-background hover:brightness-110"
                : "border border-border-soft text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            Elegir {tier.name}
          </button>
        </div>
      ))}

      {selected && (
        <div className="sm:col-span-3">
          <div className="card-surface mt-2 rounded-2xl border-accent/40 p-6 text-center">
            <p className="text-sm text-muted">
              Elegiste el paquete <span className="text-foreground">{selected}</span>. El
              checkout de Mercado Pago todavía no está conectado en esta maqueta — cuando
              tengamos las credenciales, este botón te va a pedir vincular tu cuenta in-game
              (código de un solo uso) y después te va a llevar al pago.
            </p>
          </div>
        </div>
      )}

      <p className="mx-auto max-w-2xl text-center text-sm text-muted sm:col-span-3">
        Los primeros Fundadores quedarán inmortalizados en un NPC conmemorativo dentro del
        server, en reconocimiento a quienes hicieron posible el proyecto desde el día uno.
      </p>

      <p className="text-center text-xs text-muted/70 sm:col-span-3">
        Precios, puntos y beneficios de ejemplo — se ajustan antes de lanzar el checkout real.
      </p>
    </div>
  );
}
