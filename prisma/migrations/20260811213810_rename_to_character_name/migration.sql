-- DropIndex
DROP INDEX "DonationOrder_gameAccountName_idx";

-- AlterTable
ALTER TABLE "DonationOrder" DROP COLUMN "gameAccountName",
ADD COLUMN     "characterName" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "DonationOrder_characterName_idx" ON "DonationOrder"("characterName");

