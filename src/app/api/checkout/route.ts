import { NextRequest, NextResponse } from "next/server";
import { Preference } from "mercadopago";
import { mpClient } from "@/lib/mercadopago";
import { prisma } from "@/lib/prisma";
import { getArsPerCoin } from "@/lib/economy";

const CHARACTER_NAME_RE = /^[a-zA-Z0-9_]{3,40}$/;

export async function POST(req: NextRequest) {
  let body: { packageId?: string; characterName?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const packageId = body.packageId;
  const characterName = body.characterName?.trim();

  if (!packageId || !characterName) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }
  if (!CHARACTER_NAME_RE.test(characterName)) {
    return NextResponse.json(
      { error: "Nombre de personaje inválido (3-40 caracteres, sin espacios ni símbolos)" },
      { status: 400 },
    );
  }

  const pkg = await prisma.donationPackage.findUnique({ where: { id: packageId } });
  if (!pkg || !pkg.active) {
    return NextResponse.json({ error: "Paquete no encontrado" }, { status: 404 });
  }

  let amountArsCents: number;
  let coinsCredited: number;

  if (pkg.kind === "COIN_PACK") {
    if (!pkg.priceArsCents || !pkg.coinsGranted) {
      return NextResponse.json({ error: "Paquete mal configurado" }, { status: 500 });
    }
    amountArsCents = pkg.priceArsCents;
    coinsCredited = pkg.coinsGranted;
  } else {
    const arsPerCoin = await getArsPerCoin();
    if (!arsPerCoin || !pkg.priceCoins) {
      return NextResponse.json({ error: "No se pudo calcular el precio" }, { status: 500 });
    }
    amountArsCents = Math.round(pkg.priceCoins * arsPerCoin);
    coinsCredited = pkg.priceCoins;
  }

  const order = await prisma.donationOrder.create({
    data: {
      packageId: pkg.id,
      characterName,
      amountArsCents,
      coinsCredited,
      status: "PENDING_PAYMENT",
    },
  });

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const isLocal = siteUrl.startsWith("http://localhost");

  try {
    const preference = new Preference(mpClient);
    const result = await preference.create({
      body: {
        items: [
          {
            id: pkg.id,
            title: `L2Thunder — ${pkg.name}`,
            quantity: 1,
            unit_price: amountArsCents / 100,
            currency_id: "ARS",
          },
        ],
        external_reference: order.id,
        back_urls: {
          success: `${siteUrl}/donar?checkout=success`,
          pending: `${siteUrl}/donar?checkout=pending`,
          failure: `${siteUrl}/donar?checkout=failed`,
        },
        ...(isLocal ? {} : { auto_return: "approved" as const }),
        notification_url: `${siteUrl}/api/webhooks/mercadopago`,
      },
    });

    await prisma.donationOrder.update({
      where: { id: order.id },
      data: { mpPreferenceId: result.id },
    });

    const checkoutUrl = isLocal ? result.sandbox_init_point : result.init_point;

    return NextResponse.json({ checkoutUrl: checkoutUrl ?? result.init_point });
  } catch (err) {
    await prisma.donationOrder.update({
      where: { id: order.id },
      data: { status: "FAILED", bridgeError: err instanceof Error ? err.message : String(err) },
    });
    return NextResponse.json({ error: "No se pudo iniciar el pago con Mercado Pago" }, { status: 502 });
  }
}
