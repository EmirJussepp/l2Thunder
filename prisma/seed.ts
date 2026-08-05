import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const packages = [
  {
    slug: "caja-normal",
    name: "Caja Normal",
    priceArsCents: 4_000 * 100,
    perks: ["Sale cualquier skin de rareza Normal"],
    highlight: false,
  },
  {
    slug: "caja-epica",
    name: "Caja Épica",
    priceArsCents: 9_000 * 100,
    perks: ["Sale cualquier skin de rareza Épica"],
    highlight: true,
  },
  {
    slug: "caja-legendaria",
    name: "Caja Legendaria",
    priceArsCents: 22_000 * 100,
    perks: ["Sale cualquier skin de rareza Legendaria"],
    highlight: false,
  },
  {
    slug: "vip-thunder",
    name: "VIP Thunder",
    kind: "VIP" as const,
    priceArsCents: 10_000 * 100,
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
