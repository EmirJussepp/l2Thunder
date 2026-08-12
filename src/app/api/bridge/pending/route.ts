import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthorizedBridgeRequest } from "@/lib/bridgeAuth";

// Si una orden quedó "PROCESSING" más de esto sin que llegue el ack, la damos por
// perdida (el bridge se cayó a mitad de camino) y la volvemos a ofrecer.
const STALE_PROCESSING_MS = 5 * 60 * 1000;

// El bridge del VPS pega acá cada N segundos preguntando qué hay para entregar.
// Marcamos lo que devolvemos como PROCESSING (un "lease") para que otra pasada no
// lo levante en paralelo, y para poder recuperarlo si el bridge nunca confirma.
export async function GET(req: NextRequest) {
  if (!isAuthorizedBridgeRequest(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const candidates = await prisma.donationOrder.findMany({
    where: {
      OR: [
        { status: "PAID" },
        { status: "PROCESSING", updatedAt: { lt: new Date(Date.now() - STALE_PROCESSING_MS) } },
      ],
    },
    orderBy: { createdAt: "asc" },
    take: 20,
  });

  const claimed: typeof candidates = [];
  for (const order of candidates) {
    const result = await prisma.donationOrder.updateMany({
      where: { id: order.id, status: order.status },
      data: { status: "PROCESSING" },
    });
    if (result.count === 1) claimed.push(order);
  }

  return NextResponse.json({
    orders: claimed.map((o) => ({
      orderId: o.id,
      characterName: o.characterName,
      coins: o.coinsCredited,
    })),
  });
}
