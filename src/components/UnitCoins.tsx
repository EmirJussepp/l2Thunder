import { prisma } from "@/lib/prisma";
import { UNIT_COINS_MAX, UNIT_COINS_SLUG } from "@/lib/coins";
import UnitCoinsClient from "./UnitCoinsClient";

// La sección "Coins of Luck sueltas". Si el paquete no existe o está desactivado, o la base no
// responde (el aviso de mantenimiento ya lo muestra DonationTiers), no se dibuja nada.
export default async function UnitCoins() {
  let pkg;
  try {
    pkg = await prisma.donationPackage.findFirst({
      where: { slug: UNIT_COINS_SLUG, kind: "COIN_PACK", active: true },
    });
  } catch (err) {
    console.error("UnitCoins: no se pudo leer la base", err);
    return null;
  }
  if (!pkg || !pkg.priceArsCents || !pkg.coinsGranted) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-center font-display text-2xl font-bold">Coins of Luck sueltas</h2>
      <UnitCoinsClient
        packageId={pkg.id}
        pesosPerCoin={pkg.priceArsCents / pkg.coinsGranted / 100}
        max={UNIT_COINS_MAX}
      />
    </section>
  );
}
