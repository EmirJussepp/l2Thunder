import { prisma } from "@/lib/prisma";
import VipPassClient from "./VipPassClient";

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default async function VipPass() {
  const pkg = await prisma.donationPackage.findFirst({
    where: { active: true, kind: "VIP" },
  });

  if (!pkg) return null;

  return (
    <VipPassClient
      vip={{
        id: pkg.id,
        name: pkg.name,
        priceLabel: priceFormatter.format(pkg.priceArsCents / 100),
        durationDays: pkg.durationDays,
        perks: pkg.perks,
      }}
    />
  );
}
