import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const packages = [
  {
    slug: "fundador-bronce",
    name: "Fundador Bronce",
    priceArsCents: 200_000,
    points: 500,
    perks: ["500 puntos para cosméticos", "Título exclusivo de Fundador", "Tag de color en el chat"],
    highlight: false,
  },
  {
    slug: "fundador-plata",
    name: "Fundador Plata",
    priceArsCents: 500_000,
    points: 1400,
    perks: [
      "1400 puntos para cosméticos",
      "Título exclusivo de Fundador",
      "Tag de color",
      "Acceso a NPC de skins/monturas cosméticas",
    ],
    highlight: true,
  },
  {
    slug: "fundador-oro",
    name: "Fundador Oro",
    priceArsCents: 1_000_000,
    points: 3000,
    perks: [
      "3000 puntos para cosméticos",
      "Título exclusivo de Fundador",
      "Acceso a NPC de skins/monturas cosméticas",
    ],
    highlight: false,
  },
  {
    slug: "vip-thunder",
    name: "VIP Thunder",
    kind: "VIP" as const,
    priceArsCents: 900_000,
    points: 300,
    durationDays: 15,
    perks: [
      "x2 EXP y SP durante 15 días",
      "1 caja de skins sorpresa de regalo",
      "300 puntos de cosméticos de regalo",
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
