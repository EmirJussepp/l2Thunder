-- CreateTable
CREATE TABLE "VoteTicket" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "startTotal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usedAt" TIMESTAMP(3),

    CONSTRAINT "VoteTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VoteTicket_createdAt_idx" ON "VoteTicket"("createdAt");
