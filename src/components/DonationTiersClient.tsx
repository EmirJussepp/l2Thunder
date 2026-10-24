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
    // Una tarjeta va centrada y angosta, dos van en pareja y tres en tres columnas.
    <div
      className={
        tiers.length === 1
          ? "mx-auto grid max-w-md gap-6"
          : tiers.length === 2
            ? "mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"
            : "grid gap-6 sm:grid-cols-3"
      }
    >
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`card-surface relative flex flex-col rounded-none p-6 transition hover:border-accent/50 ${
            tier.highlight ? "border-gold/60 ring-1 ring-gold/30" : ""
          }`}
        >
          {/* La etiqueta (la de la promoción) flota sobre el borde de la tarjeta: si ocupara lugar adentro, empujaría el
              título, el precio y la descripción y las tres tarjetas no quedarían alineadas. */}
          {tier.highlight && (
            <span className="absolute -top-3 left-6 rounded-none bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-background">
              Promoción
            </span>
          )}
          <h3 className="font-display text-xl font-bold">{tier.name}</h3>
          <p className="mt-1 text-2xl font-black text-accent">{tier.priceLabel}</p>
          {tier.subLabel && <p className="text-xs text-muted">{tier.subLabel}</p>}

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
              summary={`Vas a comprar ${tier.name} por ${tier.priceLabel}${tier.subLabel ? ` (${tier.subLabel})` : ""}.`}
              fullWidthButton
              buttonClassName={
                tier.highlight
                  ? "btn btn-primary btn-sm"
                  : "btn btn-outline btn-sm"
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
