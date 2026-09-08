import BuyButton from "./BuyButton";

export type TierView = {
  id: string;
  name: string;
  priceLabel: string;
  subLabel?: string | null;
  perks: string[];
  highlight: boolean;
};

export default function DonationTiersClient({ tiers }: { tiers: TierView[] }) {
  if (tiers.length === 0) {
    return (
      <p className="text-center text-sm text-muted">
        No hay cajas disponibles por el momento — volvé a mirar más tarde.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`card-surface flex flex-col rounded-none p-6 ${
            tier.highlight ? "border-gold/60 ring-1 ring-gold/30" : ""
          }`}
        >
          {tier.highlight && (
            <span className="mb-3 self-start rounded-none bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
              Más elegido
            </span>
          )}
          <h3 className="font-display text-xl font-bold">{tier.name}</h3>
          <p className="mt-1 text-2xl font-black text-accent">{tier.priceLabel}</p>
          {tier.subLabel && <p className="text-xs text-muted/70">{tier.subLabel}</p>}

          <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
            {tier.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <BuyButton
              packageId={tier.id}
              label={`Elegir ${tier.name}`}
              fullWidthButton
              buttonClassName={
                tier.highlight
                  ? "btn-impact bg-gold px-5 py-2.5 text-sm text-background hover:brightness-110"
                  : "rounded-none border border-border-soft px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              }
            />
          </div>
        </div>
      ))}

      <p className="text-center text-xs text-muted/70 sm:col-span-3">
        Precios y cantidades de ejemplo — se ajustan antes de lanzar el checkout real.
      </p>
    </div>
  );
}
