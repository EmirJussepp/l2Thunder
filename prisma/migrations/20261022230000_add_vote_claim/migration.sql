-- CreateEnum
CREATE TYPE "VoteClaimStatus" AS ENUM ('PENDING', 'PROCESSING', 'DELIVERED', 'FAILED');

-- CreateTable
CREATE TABLE "VoteClaim" (
    "id" TEXT NOT NULL,
    "characterName" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "votedAt" TIMESTAMP(3),
    "status" "VoteClaimStatus" NOT NULL DEFAULT 'PENDING',
    "bridgeError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deliveredAt" TIMESTAMP(3),

    CONSTRAINT "VoteClaim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VoteClaim_ip_createdAt_idx" ON "VoteClaim"("ip", "createdAt");

-- CreateIndex
CREATE INDEX "VoteClaim_characterName_createdAt_idx" ON "VoteClaim"("characterName", "createdAt");

-- CreateIndex
CREATE INDEX "VoteClaim_status_idx" ON "VoteClaim"("status");
