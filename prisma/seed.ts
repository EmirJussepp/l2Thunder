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
    perks: ["Alcanza justo para la Caja Normal o para arrancar a juntar para más"],
    highlight: false,
  },
  {
    slug: "coins-25",
    name: "25 Coins of Luck",
    kind: "COIN_PACK" as const,
    priceArsCents: 25 * ARS_PER_COIN * 100,
    coinsGranted: 25,
    perks: ["Alcanza para el VIP Thunder o la Caja Épica, con vuelto"],
    highlight: true,
  },
  {
    slug: "coins-60",
    name: "60 Coins of Luck",
    kind: "COIN_PACK" as const,
    priceArsCents: 60 * ARS_PER_COIN * 100,
    coinsGranted: 60,
    perks: ["Alcanza para la Caja Legendaria, con coins de sobra"],
    highlight: false,
  },
  {
    slug: "caja-normal",
    name: "Caja Normal",
    kind: "BOX" as const,
    priceCoins: 4,
    perks: ["Sale cualquier skin de rareza Normal"],
    highlight: false,
  },
  {
    slug: "caja-epica",
    name: "Caja Épica",
    kind: "BOX" as const,
    priceCoins: 9,
    perks: ["Sale cualquier skin de rareza Épica"],
    highlight: true,
  },
  {
    slug: "caja-legendaria",
    name: "Caja Legendaria",
    kind: "BOX" as const,
    priceCoins: 22,
    perks: ["Sale cualquier skin de rareza Legendaria"],
    highlight: false,
  },
  {
    slug: "vip-thunder",
    name: "VIP Thunder",
    kind: "VIP" as const,
    priceCoins: 10,
    durationDays: 15,
    perks: [
      "5% de EXP extra durante 15 días",
      "5% de Drop extra durante 15 días",
      "1 caja de skin de regalo (rareza al azar: Normal, Épica o Legendaria)",
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
