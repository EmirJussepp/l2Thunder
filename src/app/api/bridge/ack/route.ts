import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthorizedBridgeRequest } from "@/lib/bridgeAuth";

// El bridge confirma acá el resultado de cada orden que le dimos en /pending.
export async function POST(req: NextRequest) {
  if (!isAuthorizedBridgeRequest(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { orderId?: string; status?: "DELIVERED" | "FAILED"; error?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { orderId, status, error } = body;
  if (!orderId || (status !== "DELIVERED" && status !== "FAILED")) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
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
