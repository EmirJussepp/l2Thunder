import { NextRequest, NextResponse } from "next/server";
import { Payment } from "mercadopago";
import { mpClient } from "@/lib/mercadopago";
import { prisma } from "@/lib/prisma";

// Mercado Pago pega acá cuando cambia el estado de un pago. Nunca confiamos en el
// body de la notificación para el monto/estado: volvemos a pedirle el pago a la
// API de MP con el id que nos pasan, y actuamos según lo que MP diga.
//
// Este endpoint SOLO marca la orden como pagada. La entrega en el juego la hace el
// bridge del VPS por polling (ver /api/bridge/pending y /api/bridge/ack) — así el
// VPS no necesita exponer nada a internet, y un secreto filtrado del lado del bridge
// no alcanza para generar coins de la nada (solo lee/confirma lo que ya está pagado).
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
  } catch (err) {
    // MP a veces manda la notificación antes de que el pago esté disponible por API, o la
    // API tiene un hipo. Si acá devolviéramos 200, MP lo daría por recibido y no volvería a
    // avisar: un pago aprobado se quedaría sin acreditar para siempre. Con un 5xx reintenta solo.
    console.error(`Webhook MP: no se pudo leer el pago ${paymentId}`, err);
    return NextResponse.json({ error: "payment_unavailable" }, { status: 502 });
  }

  const orderId = payment.external_reference;
  if (!orderId) return NextResponse.json({ received: true });

  const order = await prisma.donationOrder.findUnique({ where: { id: orderId } });
  if (!order) return NextResponse.json({ received: true });

  // Todos los cambios de estado son compare-and-set (updateMany con el estado en el where):
  // MP manda notificaciones duplicadas y fuera de orden, y un update pelado podría volver a
  // PAID una orden que el bridge ya levantó (o pisar una aprobada con un rechazo viejo).
  if (payment.status === "approved") {
    // Checkout Pro deja reintentar con otra tarjeta después de un rechazo, y el pago nuevo
    // llega con el mismo external_reference: por eso también rescatamos una orden FAILED que
    // nunca tuvo pago. Un FAILED por error del bridge ya tiene mpPaymentId y no entra acá.
    await prisma.donationOrder.updateMany({
      where: {
        id: order.id,
        OR: [{ status: "PENDING_PAYMENT" }, { status: "FAILED", mpPaymentId: null }],
      },
      data: { status: "PAID", mpPaymentId: String(payment.id), paidAt: new Date(), bridgeError: null },
    });
  } else if (payment.status === "rejected" || payment.status === "cancelled") {
    await prisma.donationOrder.updateMany({
      where: { id: order.id, status: "PENDING_PAYMENT" },
      data: { status: "FAILED" },
    });
  }

  return NextResponse.json({ received: true });
}
