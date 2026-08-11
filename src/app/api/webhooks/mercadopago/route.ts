import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { mpClient } from "@/lib/mercadopago";
import { prisma } from "@/lib/prisma";
import { creditCoins } from "@/lib/bridge";

// Mercado Pago pega acá cuando cambia el estado de un pago. Nunca confiamos en el
// body de la notificación para el monto/estado: volvemos a pedirle el pago a la
// API de MP con el id que nos pasan, y actuamos según lo que MP diga.
export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type") ?? url.searchParams.get("topic");
  const paymentId = url.searchParams.get("data.id") ?? url.searchParams.get("id");

  if (type !== "payment" || !paymentId) {
    return NextResponse.json({ received: true });
  }

  let payment;
  try {
    payment = await new Payment(mpClient).get({ id: paymentId });
  } catch {
    // MP a veces manda la notificación antes de que el pago esté disponible por API.
    return NextResponse.json({ received: true });
  }

  const orderId = payment.external_reference;
  if (!orderId) return NextResponse.json({ received: true });

  const order = await prisma.donationOrder.findUnique({ where: { id: orderId } });
  if (!order) return NextResponse.json({ received: true });

  if (payment.status === "approved") {
    if (order.status === "PENDING_PAYMENT") {
      await prisma.donationOrder.update({
        where: { id: order.id },
        data: { status: "PAID", mpPaymentId: String(payment.id), paidAt: new Date() },
      });

      try {
        await creditCoins({
          accountName: order.gameAccountName,
          coins: order.coinsCredited,
          orderId: order.id,
        });
        await prisma.donationOrder.update({
          where: { id: order.id },
          data: { status: "DELIVERED", deliveredAt: new Date(), bridgeError: null },
        });
      } catch (err) {
        await prisma.donationOrder.update({
          where: { id: order.id },
          data: { bridgeError: err instanceof Error ? err.message : String(err) },
        });
      }
    }
  } else if (payment.status === "rejected" || payment.status === "cancelled") {
    if (order.status === "PENDING_PAYMENT") {
      await prisma.donationOrder.update({ where: { id: order.id }, data: { status: "FAILED" } });
    }
  }

  return NextResponse.json({ received: true });
}
