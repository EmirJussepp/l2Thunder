import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// 1 Coin of Luck = $1.000 ARS, precio plano (sin descuento por volumen)
const ARS_PER_COIN = 1000;

const packages = [
  {
    slug: "coins-500",
    name: "500 Coins of Luck",
    priceArsCents: 500 * ARS_PER_COIN * 100,
    points: 500,
    perks: ["Se canjean por skins en el NPC de canje"],
    highlight: false,
  },
  {
    slug: "coins-1400",
    name: "1400 Coins of Luck",
    priceArsCents: 1400 * ARS_PER_COIN * 100,
    points: 1400,
    perks: ["Se canjean por skins en el NPC de canje"],
    highlight: true,
  },
  {
    slug: "coins-3000",
    name: "3000 Coins of Luck",
    priceArsCents: 3000 * ARS_PER_COIN * 100,
    points: 3000,
    perks: ["Se canjean por skins en el NPC de canje"],
    highlight: false,
  },
  {
    slug: "vip-thunder",
    name: "VIP Thunder",
    kind: "VIP" as const,
    priceArsCents: 10_000 * 100,
    points: 0,
    durationDays: 15,
    perks: [
      "5% de EXP extra durante 15 días",
      "5% de Drop extra durante 15 días",
      "1 caja de skin de regalo (rareza al azar: común, épica o legendaria)",
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
