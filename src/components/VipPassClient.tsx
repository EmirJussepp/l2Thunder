import BuyButton from "./BuyButton";

export type VipView = {
  id: string;
  name: string;
  priceLabel: string;
  subLabel?: string | null;
  durationDays: number | null;
  perks: string[];
};

export default function VipPassClient({ vip }: { vip: VipView | null }) {
  if (!vip) return null;

  return (
    <div className="card-surface border-gold/60 p-8 ring-1 ring-gold/30">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-none bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
            {vip.durationDays} días de boost
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold">{vip.name}</h2>
          <p className="mt-1 text-3xl font-black text-gold">{vip.priceLabel}</p>
          {vip.subLabel && <p className="text-xs text-muted/70">{vip.subLabel}</p>}

          <ul className="mt-4 space-y-2 text-sm text-muted">
            {vip.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2">
                <span className="mt-1 text-gold">•</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 md:w-72">
          <BuyButton
            packageId={vip.id}
            label={`Activar ${vip.name}`}
            buttonClassName="rounded-none bg-gradient-to-r from-gold to-accent-2 px-8 py-3 text-sm font-semibold text-background transition hover:brightness-110 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
