require("dotenv/config");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

const WEB_BASE_URL = process.env.WEB_BASE_URL;
const BRIDGE_SECRET = process.env.BRIDGE_SECRET;
// 30s tenía a la base de Neon despierta las 24hs sin parar (consume horas de
// compute aunque no haya donaciones). 2 minutos sigue siendo rápido para el
// jugador y le da a Neon ventanas para hacer auto-suspend entre consultas.
const POLL_INTERVAL_MS = Number(process.env.POLL_INTERVAL_MS) || 120_000;
const COIN_OF_LUCK_ITEM_ID = 4037;
// Sanity check por las dudas — nunca debería llegar algo fuera de rango si la web
// está bien, pero es gratis chequearlo antes de mandar el correo.
const MAX_COINS_PER_ORDER = Number(process.env.MAX_COINS_PER_ORDER) || 100;
// Sin esto, un fetch() que se cuelga (red caída, DNS raro) nunca resuelve ni rechaza:
// pm2 ve el proceso vivo, los logs quedan mudos, y las donaciones dejan de entregarse
// para siempre hasta que alguien lo reinicie a mano. Con AbortSignal.timeout se corta
// solo y el error cae en el catch de siempre.
const FETCH_TIMEOUT_MS = 15_000;

if (!WEB_BASE_URL || !BRIDGE_SECRET) {
  console.error("Faltan WEB_BASE_URL / BRIDGE_SECRET en .env — no arranco sin eso.");
  process.exit(1);
}

// Se conecta SOLO a l2jmobius (la base del juego), solo lee characters e inserta
// en custom_mail — nunca toca accounts ni l2jmobius_login.
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "l2jmobius",
  waitForConnections: true,
  connectionLimit: 5,
});

async function fetchPending() {
  const res = await fetch(`${WEB_BASE_URL}/api/bridge/pending`, {
    headers: { "X-Bridge-Secret": BRIDGE_SECRET },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`/api/bridge/pending respondió ${res.status}`);
  const data = await res.json();
  return data.orders || [];
}

// Registro local de las órdenes que YA se insertaron en custom_mail. Sin esto, si el ack no
// llega (la web devolvió un 5xx, un corte de red) la orden vuelve a ofrecerse a los 5 minutos
// y el bridge insertaría un segundo correo con las mismas coins.
const STATE_FILE = process.env.STATE_FILE || path.join(__dirname, "delivered.json");

function loadDelivered() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return []; // primera vez, o archivo ilegible: se arranca vacío
  }
}

const delivered = new Set(loadDelivered());

function markDelivered(orderId) {
  delivered.add(orderId);
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify([...delivered]));
  } catch (err) {
    // El correo ya está insertado: no hay que reportarlo como fallo por no poder anotarlo.
    console.error(`No se pudo guardar ${STATE_FILE}:`, err);
  }
}

const ACK_ATTEMPTS = 3;

// Devuelve true si la web confirmó que recibió el resultado. fetch() solo tira error si se cae
// la red: un 500 de la web (p. ej. la base despertando) vuelve como respuesta normal, así que
// hay que mirar res.ok y reintentar.
async function ack(orderId, status, error) {
  for (let attempt = 1; attempt <= ACK_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(`${WEB_BASE_URL}/api/bridge/ack`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Bridge-Secret": BRIDGE_SECRET },
        body: JSON.stringify({ orderId, status, error }),
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (res.ok) return true;
      console.error(`Ack de ${orderId}: la web respondió ${res.status} (intento ${attempt}/${ACK_ATTEMPTS})`);
    } catch (err) {
      console.error(`Ack de ${orderId}: intento ${attempt}/${ACK_ATTEMPTS} falló:`, err);
    }
    if (attempt < ACK_ATTEMPTS) await new Promise((r) => setTimeout(r, 3000 * attempt));
  }
  // Si no llega, la orden queda PROCESSING y /pending la vuelve a ofrecer sola después de un
  // rato (ver STALE_PROCESSING_MS del lado de la web); delivered.json evita que se reenvíe.
  console.error(`Ack de ${orderId} (${status}) NO llegó: la web la va a volver a ofrecer.`);
  return false;
}

async function deliverOrder({ orderId, characterName, coins }) {
  if (delivered.has(orderId)) {
    console.log(`Orden ${orderId}: ya estaba entregada, solo se vuelve a confirmar`);
    await ack(orderId, "DELIVERED");
    return;
  }

  if (typeof characterName !== "string" || !characterName.trim()) {
    console.error(`Orden ${orderId}: characterName inválido`);
    await ack(orderId, "FAILED", "characterName inválido");
    return;
  }
  if (!Number.isInteger(coins) || coins <= 0 || coins > MAX_COINS_PER_ORDER) {
    console.error(`Orden ${orderId}: coins fuera de rango (${coins}), no se entrega`);
    await ack(orderId, "FAILED", "coins fuera de rango");
    return;
  }

  let conn;
  try {
    conn = await pool.getConnection();

    // Confirmado contra el schema real del VPS: characters.charId (PK) y char_name.
    const [charRows] = await conn.query(
      "SELECT charId FROM characters WHERE char_name = ? LIMIT 1",
      [characterName],
    );
    if (charRows.length === 0) {
      console.error(`Orden ${orderId}: personaje "${characterName}" no encontrado`);
      await ack(orderId, "FAILED", "character_not_found");
      return;
    }

    // CustomMailManager entrega esto solo (cada DatabaseQueryDelay segundos), manda
    // un susurro con el subject y borra la fila. Nada de tildes ni rayas largas acá
    // adentro — el cliente Interlude no renderiza fuera de ASCII.
    // OJO: date NO va en el INSERT, la columna tiene DEFAULT CURRENT_TIMESTAMP y
    // MySQL en modo estricto rechaza un epoch en milisegundos ahí.
    await conn.query(
      "INSERT INTO custom_mail (receiver, subject, message, items) VALUES (?, ?, ?, ?)",
      [
        charRows[0].charId,
        "L2Thunder - Gracias por tu aporte",
        "Se acreditaron tus Coins of Luck. Gracias por bancar el server!",
        `${COIN_OF_LUCK_ITEM_ID} ${coins}`,
      ],
    );

    markDelivered(orderId);
    console.log(`Orden ${orderId}: ${coins} Coins of Luck enviados a "${characterName}"`);
    await ack(orderId, "DELIVERED");
  } catch (err) {
    console.error(`Orden ${orderId}: error entregando:`, err);
    await ack(orderId, "FAILED", err instanceof Error ? err.message : String(err));
  } finally {
    if (conn) conn.release();
  }
}

let polling = false;

async function pollOnce() {
  if (polling) return; // evita pasadas superpuestas si una tanda tarda más que el intervalo
  polling = true;
  try {
    const orders = await fetchPending();
    for (const order of orders) {
      await deliverOrder(order);
    }
  } catch (err) {
    console.error("No se pudo consultar /api/bridge/pending:", err);
  } finally {
    polling = false;
  }
}

process.on("unhandledRejection", (err) => console.error("unhandledRejection:", err));
process.on("uncaughtException", (err) => console.error("uncaughtException:", err));

console.log(`Bridge iniciado. Consultando ${WEB_BASE_URL} cada ${POLL_INTERVAL_MS / 1000}s.`);

pollOnce();
setInterval(pollOnce, POLL_INTERVAL_MS);
