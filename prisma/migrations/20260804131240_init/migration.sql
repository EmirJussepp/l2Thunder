-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING_LINK', 'PENDING_PAYMENT', 'PAID', 'DELIVERED', 'FAILED', 'CANCELED');

-- CreateTable
CREATE TABLE "DonationPackage" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceArsCents" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "perks" TEXT[],
    "highlight" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonationPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationOrder" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "gameAccountName" TEXT NOT NULL,
    "accountVerifiedAt" TIMESTAMP(3),
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING_LINK',
    "mpPreferenceId" TEXT,
    "mpPaymentId" TEXT,
    "amountArsCents" INTEGER NOT NULL,
    "pointsGranted" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "paidAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),

    CONSTRAINT "DonationOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonationPackage_slug_key" ON "DonationPackage"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "DonationOrder_mpPaymentId_key" ON "DonationOrder"("mpPaymentId");

-- CreateIndex
CREATE INDEX "DonationOrder_gameAccountName_idx" ON "DonationOrder"("gameAccountName");

-- CreateIndex
CREATE INDEX "DonationOrder_status_idx" ON "DonationOrder"("status");

-- AddForeignKey
ALTER TABLE "DonationOrder" ADD CONSTRAINT "DonationOrder_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "DonationPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
