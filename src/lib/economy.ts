import { prisma } from "@/lib/prisma";

// Tasa vigente de Coins of Luck, tomada del primer pack activo (precio plano, sin descuento por volumen).
// Los packs COIN_PACK ya no se muestran como producto aparte (VIP y Cajas se compran directo),
// pero se mantienen en la DB únicamente como referencia de tasa para el equivalente en pesos.
export async function getArsPerCoin(): Promise<number | null> {
  const pack = await prisma.donationPackage.findFirst({
    where: { active: true, kind: "COIN_PACK" },
  });

  if (!pack || !pack.priceArsCents || !pack.coinsGranted) return null;

  return pack.priceArsCents / pack.coinsGranted;
}
