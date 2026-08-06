import { prisma } from "@/lib/prisma";
import { getArsPerCoin } from "@/lib/economy";
import DonationTiersClient from "./DonationTiersClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default async function DonationTiers() {
  const [packages, arsPerCoin] = await Promise.all([
    prisma.donationPackage.findMany({
      where: { active: true, kind: "BOX" },
      orderBy: { priceCoins: "asc" },
    }),
    getArsPerCoin(),
  ]);

  const tiers = packages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    priceLabel: `${pkg.priceCoins} Coins of Luck`,
    subLabel:
      arsPerCoin && pkg.priceCoins
        ? `≈ ${priceFormatter.format((pkg.priceCoins * arsPerCoin) / 100)}`
        : null,
    perks: pkg.perks,
    highlight: pkg.highlight,
  }));

  return <DonationTiersClient tiers={tiers} />;
}
