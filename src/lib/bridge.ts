// Llama al servicio puente que corre en el VPS del gameserver (ver /gameserver-bridge).
// Ese servicio escribe el balance de Coins of Luck directo en la base MySQL del juego.
export async function creditCoins({
  accountName,
  coins,
  orderId,
}: {
  accountName: string;
  coins: number;
  orderId: string;
}) {
  const url = process.env.GAMESERVER_BRIDGE_URL;
  const secret = process.env.GAMESERVER_BRIDGE_SECRET;

  if (!url || !secret) {
    throw new Error(
      "Bridge no configurado (faltan GAMESERVER_BRIDGE_URL / GAMESERVER_BRIDGE_SECRET)",
    );
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Bridge-Secret": secret,
    },
    body: JSON.stringify({ accountName, coins, orderId }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Bridge respondió ${res.status}: ${text.slice(0, 200)}`);
  }

  return res.json();
}
