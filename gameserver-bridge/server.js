require("dotenv/config");
const crypto = require("crypto");
const express = require("express");
const mysql = require("mysql2/promise");

const PORT = process.env.PORT || 4001;
const BRIDGE_SECRET = process.env.BRIDGE_SECRET;
// Tope de seguridad: aunque se filtre el secreto, un solo pedido no puede pedir
// más de esto. Ajustar según el paquete más caro que vendan (hoy el más caro
// son 22 coins, dejamos margen).
const MAX_COINS_PER_REQUEST = Number(process.env.MAX_COINS_PER_REQUEST) || 100;

if (!BRIDGE_SECRET) {
  console.error("Falta BRIDGE_SECRET en .env — no arranco sin eso.");
  process.exit(1);
}

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "l2jmobius_login",
  waitForConnections: true,
  connectionLimit: 5,
});

// Cola de entregas pendientes. Este servicio SOLO encola — la entrega real
// (dar el ítem Coin of Luck, id 4037, o lo que se decida) la hace un proceso
// del lado del datapack (Java) que lee esta tabla y marca DELIVERED. Ver
// PEDIDO-PARA-HERMANO.md: escribir directo en account_data no sirve, nada la lee.
async function ensureQueueTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS l2thunder_donation_queue (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id VARCHAR(64) NOT NULL UNIQUE,
      account_name VARCHAR(64) NOT NULL,
      coins INT NOT NULL,
      status ENUM('PENDING', 'DELIVERED') NOT NULL DEFAULT 'PENDING',
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      delivered_at DATETIME NULL
    )
  `);
}

function safeEqual(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

const app = express();
app.use(express.json());

app.post("/credit-coins", async (req, res) => {
  const secret = req.header("X-Bridge-Secret") || "";
  if (!safeEqual(secret, BRIDGE_SECRET)) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const { accountName, coins, orderId } = req.body || {};

  if (
    typeof accountName !== "string" ||
    !accountName.trim() ||
    typeof coins !== "number" ||
    !Number.isInteger(coins) ||
    coins <= 0 ||
    coins > MAX_COINS_PER_REQUEST ||
    typeof orderId !== "string" ||
    !orderId.trim()
  ) {
    return res.status(400).json({ error: "invalid_payload" });
  }

  const login = accountName.trim();

  const conn = await pool.getConnection();
  try {
    const [accountRows] = await conn.query(
      "SELECT login FROM accounts WHERE login = ? LIMIT 1",
      [login],
    );
    if (accountRows.length === 0) {
      return res.status(404).json({ error: "account_not_found" });
    }

    // order_id es UNIQUE: si la web reintenta la misma orden, esto no duplica
    // la fila, así que tampoco se duplica la entrega del lado del juego.
    await conn.query(
      `INSERT INTO l2thunder_donation_queue (order_id, account_name, coins)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE order_id = order_id`,
      [orderId, login, coins],
    );

    return res.json({ ok: true, queued: true });
  } catch (err) {
    console.error("Error encolando la entrega:", err);
    return res.status(500).json({ error: "internal_error" });
  } finally {
    conn.release();
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

// Escucha en todas las interfaces porque Vercel le tiene que pegar desde afuera.
// OBLIGATORIO: poner esto detrás de HTTPS (ver README) antes de usarlo con pagos reales —
// sin TLS el BRIDGE_SECRET viaja en texto plano.
ensureQueueTable()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Bridge escuchando en 0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo preparar la tabla de cola:", err);
    process.exit(1);
  });
