import { prisma } from "@/lib/prisma";
import DonationTiersClient from "./DonationTiersClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default async function DonationTiers() {
  const packages = await prisma.donationPackage.findMany({
    where: { active: true },
    orderBy: { priceArsCents: "asc" },
  });

  const tiers = packages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    priceLabel: priceFormatter.format(pkg.priceArsCents / 100),
    perks: pkg.perks,
    highlight: pkg.highlight,
  }));

  return <DonationTiersClient tiers={tiers} />;
}
