import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// 1 Coin of Luck = $1.000 ARS, precio plano (sin descuento por volumen)
const ARS_PER_COIN = 1000;

const packages = [
  {
    slug: "coins-10",
    name: "10 Coins of Luck",
    kind: "COIN_PACK" as const,
    priceArsCents: 10 * ARS_PER_COIN * 100,
    coinsGranted: 10,
    perks: ["Alcanza para el VIP o para la Caja de Skins (8 Coins cada uno)"],
    highlight: false,
  },
  {
    slug: "coins-25",
    name: "25 Coins of Luck",
    kind: "COIN_PACK" as const,
    priceArsCents: 25 * ARS_PER_COIN * 100,
    coinsGranted: 25,
    perks: ["Alcanza para el Pack VIP + Caja (14 Coins), con vuelto"],
    highlight: true,
  },
  {
    slug: "coins-60",
    name: "60 Coins of Luck",
    kind: "COIN_PACK" as const,
    priceArsCents: 60 * ARS_PER_COIN * 100,
    coinsGranted: 60,
    perks: ["Alcanza para el VIP Thunder y la Caja de Skins, con coins de sobra"],
    highlight: false,
  },
  {
    // La única caja de la tienda: una skin al azar (Rara 60%, Épica 30%, Legendaria 10%).
    // El slug quedó de cuando había tres cajas ("Caja Normal"): no se cambia porque las órdenes ya
    // creadas apuntan a este paquete y el seed borra los slugs que no están en la lista.
    slug: "caja-normal",
    name: "Caja de Skins",
    kind: "BOX" as const,
    priceCoins: 8,
    perks: [
      "60% de probabilidad: skin Rara",
      "30% de probabilidad: skin Épica",
      "10% de probabilidad: skin Legendaria",
    ],
    highlight: false,
  },
  {
    // Promoción: VIP + Caja de Skins por 14 Coins en vez de 16. Es un paquete de tipo BOX solo para que
    // aparezca en la grilla de la tienda (no hay un tipo "pack"); se cobra y se entrega como cualquier otro.
    slug: "pack-vip-caja",
    name: "Pack VIP + Caja de Skins",
    kind: "BOX" as const,
    priceCoins: 14,
    perks: [
      "VIP Thunder: +30% de EXP y de Drop durante 15 días",
      "Caja de Skins: una skin al azar (Rara 60%, Épica 30%, Legendaria 10%)",
      "Ahorrás 2 Coins: por separado suman 16",
    ],
    highlight: true,
  },
  {
    // Ya no se vende (hay una sola caja): queda desactivada, no borrada, por el historial.
    slug: "caja-epica",
    name: "Caja Épica",
    kind: "BOX" as const,
    priceCoins: 9,
    perks: ["Sale cualquier skin de rareza Épica"],
    highlight: false,
    active: false,
  },
  {
    // Ya no se vende (hay una sola caja): queda desactivada, no borrada, por el historial.
    slug: "caja-legendaria",
    name: "Caja Legendaria",
    kind: "BOX" as const,
    priceCoins: 22,
    perks: ["Sale cualquier skin de rareza Legendaria"],
    highlight: false,
    active: false,
  },
  {
    slug: "vip-thunder",
    name: "VIP Thunder",
    kind: "VIP" as const,
    priceCoins: 8,
    durationDays: 15,
    perks: [
      "+30% de EXP durante 15 días",
      "+30% de Drop durante 15 días",
      "1 Cofre de armadura de regalo (puede salir una skin Rara, Épica o Legendaria)",
    ],
    highlight: true,
  },
];

async function main() {
  for (const pkg of packages) {
    await prisma.donationPackage.upsert({
      where: { slug: pkg.slug },
      update: pkg,
      create: pkg,
    });
  }

  await prisma.donationPackage.deleteMany({
    where: { slug: { notIn: packages.map((pkg) => pkg.slug) } },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
