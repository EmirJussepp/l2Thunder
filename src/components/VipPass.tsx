import { prisma } from "@/lib/prisma";
import VipPassClient from "./VipPassClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default async function VipPass() {
  const [pkg, coinPacks] = await Promise.all([
    prisma.donationPackage.findFirst({ where: { active: true, kind: "VIP" } }),
    prisma.donationPackage.findMany({ where: { active: true, kind: "COINS" } }),
  ]);

  if (!pkg) return null;

  const bestArsPerCoin = coinPacks.length
    ? Math.min(...coinPacks.map((p) => p.priceArsCents / p.points))
    : null;

  const includedCoinsValueLabel =
    bestArsPerCoin && pkg.points > 0
      ? priceFormatter.format((bestArsPerCoin * pkg.points) / 100)
      : null;

  return (
    <VipPassClient
      vip={{
        id: pkg.id,
        name: pkg.name,
        priceLabel: priceFormatter.format(pkg.priceArsCents / 100),
        durationDays: pkg.durationDays,
        perks: pkg.perks,
        includedCoins: pkg.points,
        includedCoinsValueLabel,
      }}
    />
  );
}
