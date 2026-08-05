import { prisma } from "@/lib/prisma";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

// Tiers de rareza del NPC de canje, en Coins of Luck.
// Pensados para que cada pack de coins alcance justo para un tier con algo de vuelto.
const SKIN_TIERS = [
  { name: "Común", coins: 300 },
  { name: "Épica", coins: 600 },
  { name: "Legendaria", coins: 1200 },
];

export default async function SkinPrices() {
  const coinPack = await prisma.donationPackage.findFirst({
    where: { active: true, kind: "COINS" },
  });

  if (!coinPack) return null;

  const arsPerCoin = coinPack.priceArsCents / coinPack.points;

  return (
    <div className="card-surface mt-10 rounded-none p-6">
      <h3 className="font-display text-lg font-bold">Precios de referencia en el NPC de canje</h3>
      <p className="mt-1 text-sm text-muted">
        Lo que vas a pagar en Coins of Luck por cada rareza de skin.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {SKIN_TIERS.map((tier) => (
          <div key={tier.name} className="border border-border-soft p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-2">
              {tier.name}
            </p>
            <p className="mt-1 font-display text-xl font-bold text-foreground">
              {tier.coins} Coins of Luck
            </p>
            <p className="mt-1 text-xs text-muted">
              ≈ {priceFormatter.format((tier.coins * arsPerCoin) / 100)} si los comprás
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted/70">
        El VIP también puede darte cualquiera de estas rarezas de regalo, pero al azar — comprar
        en el NPC es la única forma de elegir cuál querés.
      </p>
    </div>
  );
}
