import { prisma } from "@/lib/prisma";
import { getArsPerCoin } from "@/lib/economy";
import VipPassClient from "./VipPassClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default async function VipPass() {
  const [pkg, arsPerCoin] = await Promise.all([
    prisma.donationPackage.findFirst({ where: { active: true, kind: "VIP" } }),
    getArsPerCoin(),
  ]);

  if (!pkg) return null;

  const priceLabel = `${pkg.priceCoins} Coins of Luck`;
  const subLabel =
    arsPerCoin && pkg.priceCoins
      ? `≈ ${priceFormatter.format((pkg.priceCoins * arsPerCoin) / 100)}`
      : null;

  return (
    <VipPassClient
      vip={{
        id: pkg.id,
        name: pkg.name,
        priceLabel,
        subLabel,
        durationDays: pkg.durationDays,
        perks: pkg.perks,
      }}
    />
  );
}
