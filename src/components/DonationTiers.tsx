import { prisma } from "@/lib/prisma";
import DonationTiersClient from "./DonationTiersClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default async function DonationTiers() {
  const packages = await prisma.donationPackage.findMany({
    where: { active: true, kind: "COINS" },
    orderBy: { priceArsCents: "asc" },
  });

  const rates = packages.map((p) => p.priceArsCents / p.points);
  const bestArsPerCoin = rates.length ? Math.min(...rates) : null;
  const worstArsPerCoin = rates.length ? Math.max(...rates) : null;
  // sólo tiene sentido destacar "mejor precio" si los packs realmente tienen tarifas distintas
  const ratesVary = bestArsPerCoin !== null && worstArsPerCoin !== null && bestArsPerCoin < worstArsPerCoin;

  const tiers = packages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    priceLabel: priceFormatter.format(pkg.priceArsCents / 100),
    perks: pkg.perks,
    highlight: pkg.highlight,
    bestValue: ratesVary && pkg.priceArsCents / pkg.points === bestArsPerCoin,
  }));

  return <DonationTiersClient tiers={tiers} />;
}
