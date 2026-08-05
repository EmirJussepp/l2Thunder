-- AlterEnum
ALTER TYPE "PackageKind" ADD VALUE 'COIN_PACK';

-- AlterTable
ALTER TABLE "DonationOrder" ADD COLUMN     "coinsSpent" INTEGER,
ALTER COLUMN "amountArsCents" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DonationPackage" ADD COLUMN     "coinsGranted" INTEGER,
ADD COLUMN     "priceCoins" INTEGER,
ALTER COLUMN "priceArsCents" DROP NOT NULL,
ALTER COLUMN "kind" SET DEFAULT 'COIN_PACK';

