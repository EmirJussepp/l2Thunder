import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// 1 Coin of Luck = $1.500 ARS, precio plano (sin descuento por volumen)
const ARS_PER_COIN = 1500;

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
    priceArsCents: 700_000 * 100,
    points: 600,
    durationDays: 15,
    perks: [
      "x2 EXP y SP durante 15 días",
      "1 caja de skins sorpresa de regalo",
      "600 Coins of Luck de regalo",
      "Cola prioritaria de ingreso",
      "No toca drop, spoil ni daño: el gareo y el PvP siguen parejos para todos",
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
