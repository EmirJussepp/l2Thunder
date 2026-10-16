import { prisma } from "@/lib/prisma";
import { UNIT_COINS_SLUG } from "@/lib/coins";

// Tasa vigente de Coins of Luck, tomada del primer pack activo (precio plano, sin descuento por volumen). Las
// Coins sueltas quedan afuera a propósito: valen un poco más, y no tienen que fijar el precio del VIP ni de las Cajas.
// Los packs COIN_PACK ya no se muestran como producto aparte (VIP y Cajas se compran directo),
// pero se mantienen en la DB únicamente como referencia de tasa para el equivalente en pesos.
export async function getArsPerCoin(): Promise<number | null> {
  const pack = await prisma.donationPackage.findFirst({
    where: { active: true, kind: "COIN_PACK", slug: { not: UNIT_COINS_SLUG } },
    orderBy: { slug: "asc" }, // siempre el mismo de referencia; los packs tienen el mismo precio por Coin
  });

  if (!pack || !pack.priceArsCents || !pack.coinsGranted) return null;

  return pack.priceArsCents / pack.coinsGranted;
}
