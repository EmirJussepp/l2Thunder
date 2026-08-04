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
      "30 días de Premium Thunder (cola prioritaria y warehouse extra — sin bonus de daño ni experiencia)",
    ],
    highlight: false,
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
