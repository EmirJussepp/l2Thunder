import { prisma } from "@/lib/prisma";
import { getArsPerCoin } from "@/lib/economy";
import VipPassClient from "./VipPassClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

function loadVip() {
  return Promise.all([
    prisma.donationPackage.findFirst({ where: { active: true, kind: "VIP" } }),
    getArsPerCoin(),
  ]);
}

export default async function VipPass() {
  // Con la base caída no se muestra nada acá: el aviso de mantenimiento ya lo
  // pone DonationTiers una sola vez en la página.
  let data: Awaited<ReturnType<typeof loadVip>>;
  try {
    data = await loadVip();
  } catch (err) {
    console.error("VipPass: no se pudo leer la base", err);
    return null;
  }
  const [pkg, arsPerCoin] = data;

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
