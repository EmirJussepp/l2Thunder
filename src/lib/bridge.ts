// Llama al servicio puente que corre en el VPS del gameserver (ver /gameserver-bridge).
// Ese servicio encola la entrega de Coins of Luck (ítem 4037) vía custom_mail, para
// el personaje indicado — no la cuenta, custom_mail entrega por objectId de personaje.
export async function creditCoins({
  characterName,
  coins,
  orderId,
}: {
  characterName: string;
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
    body: JSON.stringify({ characterName, coins, orderId }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Bridge respondió ${res.status}: ${text.slice(0, 200)}`);
  }

  return res.json();
}
