require("dotenv/config");
const crypto = require("crypto");
const express = require("express");
const rateLimit = require("express-rate-limit");
const mysql = require("mysql2/promise");

const PORT = process.env.PORT || 4001;
const BRIDGE_SECRET = process.env.BRIDGE_SECRET;
const COIN_OF_LUCK_ITEM_ID = 4037;
// Tope de seguridad por pedido: aunque se filtre el secreto, un solo pedido no puede
// pedir más de esto. Ajustar según el paquete más caro que vendan.
const MAX_COINS_PER_REQUEST = Number(process.env.MAX_COINS_PER_REQUEST) || 100;

if (!BRIDGE_SECRET) {
  console.error("Falta BRIDGE_SECRET en .env — no arranco sin eso.");
  process.exit(1);
}

// Se conecta SOLO a l2jmobius (la base del juego) — ya no hace falta tocar
// l2jmobius_login/accounts para nada, la entrega es por personaje.
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "l2jmobius",
  waitForConnections: true,
  connectionLimit: 5,
});

function safeEqual(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

const app = express();
app.use(express.json());

// Límite global (no por IP: el único caller esperado es nuestro propio webhook,
// así que un pico de pedidos ya es sospechoso en sí mismo). Segunda barrera además
// del tope por pedido, para que un secreto filtrado no permita spam ilimitado.
app.use(
  rateLimit({
    windowMs: 60_000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.post("/credit-coins", async (req, res) => {
  const secret = req.header("X-Bridge-Secret") || "";
  if (!safeEqual(secret, BRIDGE_SECRET)) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const { characterName, coins, orderId } = req.body || {};

  if (
    typeof characterName !== "string" ||
    !characterName.trim() ||
    typeof coins !== "number" ||
    !Number.isInteger(coins) ||
    coins <= 0 ||
    coins > MAX_COINS_PER_REQUEST ||
    typeof orderId !== "string" ||
    !orderId.trim()
  ) {
    return res.status(400).json({ error: "invalid_payload" });
  }

  const charName = characterName.trim();

  let conn;
  try {
    conn = await pool.getConnection();

    // Idempotencia: si esta orden ya se procesó antes, no mandamos un segundo correo.
    // La tabla l2thunder_bridge_log se crea una sola vez a mano (ver README), este
    // servicio no tiene ni necesita permiso de CREATE TABLE.
    const [already] = await conn.query(
      "SELECT 1 FROM l2thunder_bridge_log WHERE order_id = ? LIMIT 1",
      [orderId],
    );
    if (already.length > 0) {
      return res.json({ ok: true, alreadySent: true });
    }

    // AJUSTAR ACÁ si el nombre real de las columnas es distinto (confirmar con
    // `DESCRIBE characters;` — asumimos charId como PK y char_name como el nombre).
    const [charRows] = await conn.query(
      "SELECT charId FROM characters WHERE char_name = ? LIMIT 1",
      [charName],
    );
    if (charRows.length === 0) {
      return res.status(404).json({ error: "character_not_found" });
    }
    const receiverId = charRows[0].charId;

    // CustomMailManager entrega esto solo (poll cada DatabaseQueryDelay segundos),
    // manda un susurro con el asunto, y borra la fila. Formato de items: "id cantidad".
    await conn.query(
      "INSERT INTO custom_mail (date, receiver, subject, message, items) VALUES (?, ?, ?, ?, ?)",
      [
        Date.now(),
        receiverId,
        "L2Thunder — Gracias por tu aporte",
        "Se acreditaron tus Coins of Luck. Gracias por bancar el server!",
        `${COIN_OF_LUCK_ITEM_ID} ${coins}`,
      ],
    );

    await conn.query(
      "INSERT INTO l2thunder_bridge_log (order_id, character_name, coins) VALUES (?, ?, ?)",
      [orderId, charName, coins],
    );

    return res.json({ ok: true, alreadySent: false });
  } catch (err) {
    console.error("Error mandando el correo de coins:", err);
    return res.status(500).json({ error: "internal_error" });
  } finally {
    if (conn) conn.release();
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

// Red de seguridad: un error que se nos escape no debería tirar el proceso entero
// abajo y cortar la entrega de TODAS las donaciones hasta que pm2 lo reinicie.
process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection:", err);
});
process.on("uncaughtException", (err) => {
  console.error("uncaughtException:", err);
});

// Escucha en todas las interfaces porque Vercel le tiene que pegar desde afuera.
// OBLIGATORIO: poner esto detrás de HTTPS (ver README) antes de usarlo con pagos reales —
// sin TLS el BRIDGE_SECRET viaja en texto plano.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Bridge escuchando en 0.0.0.0:${PORT}`);
});
