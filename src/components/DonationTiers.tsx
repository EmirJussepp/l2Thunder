import { prisma } from "@/lib/prisma";
import { getArsPerCoin } from "@/lib/economy";
import DonationTiersClient from "./DonationTiersClient";
import DonationsUnavailable from "./DonationsUnavailable";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

function loadTiers() {
  return Promise.all([
    prisma.donationPackage.findMany({
      where: { active: true, kind: "BOX" },
      orderBy: { priceCoins: "asc" },
    }),
    getArsPerCoin(),
  ]);
}

export default async function DonationTiers() {
  // Si la base no responde (cuota agotada, caída) el build de /donar no puede
  // romper todo el deploy: se muestra el aviso y la página se regenera sola
  // (revalidate) apenas la base vuelva.
  let data: Awaited<ReturnType<typeof loadTiers>>;
  try {
    data = await loadTiers();
  } catch (err) {
    console.error("DonationTiers: no se pudo leer la base", err);
    return <DonationsUnavailable />;
  }
  const [packages, arsPerCoin] = data;

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
