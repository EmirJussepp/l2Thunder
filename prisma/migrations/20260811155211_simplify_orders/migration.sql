-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING_PAYMENT', 'PAID', 'DELIVERED', 'FAILED', 'CANCELED');
ALTER TABLE "public"."DonationOrder" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "DonationOrder" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "public"."OrderStatus_old";
ALTER TABLE "DonationOrder" ALTER COLUMN "status" SET DEFAULT 'PENDING_PAYMENT';
COMMIT;

-- AlterTable
ALTER TABLE "DonationOrder" DROP COLUMN "accountVerifiedAt",
DROP COLUMN "coinsSpent",
ADD COLUMN     "bridgeError" TEXT,
ADD COLUMN     "coinsCredited" INTEGER NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING_PAYMENT',
ALTER COLUMN "amountArsCents" SET NOT NULL;

