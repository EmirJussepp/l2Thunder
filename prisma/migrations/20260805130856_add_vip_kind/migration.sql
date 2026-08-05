-- CreateEnum
CREATE TYPE "PackageKind" AS ENUM ('COINS', 'VIP');

-- AlterTable
ALTER TABLE "DonationPackage" ADD COLUMN     "durationDays" INTEGER,
ADD COLUMN     "kind" "PackageKind" NOT NULL DEFAULT 'COINS';
