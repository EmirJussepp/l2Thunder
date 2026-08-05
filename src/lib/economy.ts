import { prisma } from "@/lib/prisma";

// Tasa vigente de Coins of Luck, tomada del primer pack activo (precio plano, sin descuento por volumen).
export async function getArsPerCoin(): Promise<number | null> {
  const pack = await prisma.donationPackage.findFirst({
    where: { active: true, kind: "COIN_PACK" },
  });

  if (!pack || !pack.priceArsCents || !pack.coinsGranted) return null;

  return pack.priceArsCents / pack.coinsGranted;
}
