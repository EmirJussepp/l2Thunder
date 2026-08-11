require("dotenv/config");
const crypto = require("crypto");
const express = require("express");
const mysql = require("mysql2/promise");

const PORT = process.env.PORT || 4001;
const BRIDGE_SECRET = process.env.BRIDGE_SECRET;

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

// Tabla propia para que el crédito sea idempotente: si la web reintenta la
// misma orden (timeout, retry del webhook de MP, etc.) no se acredita dos veces.
async function ensureLogTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS l2thunder_bridge_log (
      order_id VARCHAR(64) PRIMARY KEY,
      account_name VARCHAR(64) NOT NULL,
      coins INT NOT NULL,
      credited_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
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
    typeof orderId !== "string" ||
    !orderId.trim()
  ) {
    return res.status(400).json({ error: "invalid_payload" });
  }

  const login = accountName.trim();

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // Idempotencia: si esta orden ya se procesó, no hacemos nada de nuevo.
    const [already] = await conn.query(
      "SELECT 1 FROM l2thunder_bridge_log WHERE order_id = ? FOR UPDATE",
      [orderId],
    );
    if (already.length > 0) {
      await conn.commit();
      return res.json({ ok: true, alreadyCredited: true });
    }

    const [accountRows] = await conn.query(
      "SELECT login FROM accounts WHERE login = ? LIMIT 1",
      [login],
    );
    if (accountRows.length === 0) {
      await conn.rollback();
      return res.status(404).json({ error: "account_not_found" });
    }

    // account_data es una tabla clave-valor (account_name, var, value).
    // AJUSTAR ACÁ si el nombre real de las columnas/tabla es distinto.
    const [existing] = await conn.query(
      "SELECT value FROM account_data WHERE account_name = ? AND var = 'donate_coins' FOR UPDATE",
      [login],
    );

    if (existing.length === 0) {
      await conn.query(
        "INSERT INTO account_data (account_name, var, value) VALUES (?, 'donate_coins', ?)",
        [login, String(coins)],
      );
    } else {
      const current = parseInt(existing[0].value, 10) || 0;
      const next = current + coins;
      await conn.query(
        "UPDATE account_data SET value = ? WHERE account_name = ? AND var = 'donate_coins'",
        [String(next), login],
      );
    }

    await conn.query(
      "INSERT INTO l2thunder_bridge_log (order_id, account_name, coins) VALUES (?, ?, ?)",
      [orderId, login, coins],
    );

    await conn.commit();
    return res.json({ ok: true, alreadyCredited: false });
  } catch (err) {
    await conn.rollback();
    console.error("Error acreditando coins:", err);
    return res.status(500).json({ error: "internal_error" });
  } finally {
    conn.release();
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

// Escucha en todas las interfaces porque Vercel le tiene que pegar desde afuera.
// OBLIGATORIO: poner esto detrás de HTTPS (ver README) antes de usarlo con pagos reales —
// sin TLS el BRIDGE_SECRET viaja en texto plano.
ensureLogTable()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Bridge escuchando en 0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo preparar la tabla de log:", err);
    process.exit(1);
  });
