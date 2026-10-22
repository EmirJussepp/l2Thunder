import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthorizedBridgeRequest } from "@/lib/bridgeAuth";

// El bridge confirma acá el resultado de cada orden (orderId) o reclamo de voto (claimId) que le dimos
// en /pending.
export async function POST(req: NextRequest) {
  if (!isAuthorizedBridgeRequest(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { orderId?: string; claimId?: string; status?: "DELIVERED" | "FAILED"; error?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { orderId, claimId, status, error } = body;
  if ((!orderId && !claimId) || (status !== "DELIVERED" && status !== "FAILED")) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  if (claimId) {
    const claim = await prisma.voteClaim.findUnique({ where: { id: claimId } });
    if (!claim) {
      return NextResponse.json({ error: "claim_not_found" }, { status: 404 });
    }
    // Mismo criterio que las órdenes: solo se toca lo que nosotros entregamos vía /pending.
    if (claim.status !== "PROCESSING") {
      return NextResponse.json({ ok: true, ignored: true });
    }
    if (status === "DELIVERED") {
      await prisma.voteClaim.update({
        where: { id: claimId },
        data: { status: "DELIVERED", deliveredAt: new Date(), bridgeError: null },
      });
    } else {
      await prisma.voteClaim.update({
        where: { id: claimId },
        data: { status: "FAILED", bridgeError: error?.slice(0, 500) ?? "El bridge reportó un error" },
      });
    }
    return NextResponse.json({ ok: true });
  }

  const order = await prisma.donationOrder.findUnique({ where: { id: orderId } });
  if (!order) {
    return NextResponse.json({ error: "order_not_found" }, { status: 404 });
  }

  // Sólo tocamos órdenes que nosotros mismos entregamos vía /pending — evita que un
  // ack viejo o repetido pise el estado de una orden que ya se resolvió de otra forma.
  if (order.status !== "PROCESSING") {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (status === "DELIVERED") {
    await prisma.donationOrder.update({
      where: { id: orderId },
      data: { status: "DELIVERED", deliveredAt: new Date(), bridgeError: null },
    });
  } else {
    await prisma.donationOrder.update({
      where: { id: orderId },
      data: { status: "FAILED", bridgeError: error?.slice(0, 500) ?? "El bridge reportó un error" },
    });
  }

  return NextResponse.json({ ok: true });
}
