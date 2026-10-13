// Aplica un archivo .sql completo (varias sentencias) en una sola transacción.
// Uso: DST_URL=<postgres> node apply-sql.js <archivo.sql>
const fs = require("fs");
const { Client } = require("pg");

const file = process.argv[2];
if (!file || !process.env.DST_URL) { console.error("Uso: DST_URL=... node apply-sql.js archivo.sql"); process.exit(1); }

(async () => {
  const sql = fs.readFileSync(file, "utf8");
  const c = new Client({ connectionString: process.env.DST_URL });
  await c.connect();
  try {
    const empty = (await c.query(`select count(*)::int n from information_schema.tables where table_schema = 'public'`)).rows[0].n;
    if (empty !== 0) { console.error(`ABORTO: la base destino ya tiene ${empty} tablas; este script es solo para una base vacía`); process.exit(2); }
    await c.query("BEGIN");
    await c.query(sql);
    await c.query("COMMIT");
    const t = (await c.query(`select table_name from information_schema.tables where table_schema = 'public' order by 1`)).rows.map((r) => r.table_name);
    console.log("esquema aplicado. Tablas:", t.join(", "));
  } catch (e) {
    try { await c.query("ROLLBACK"); } catch {}
    console.error("ERROR:", e.message);
    process.exit(1);
  } finally {
    await c.end();
  }
})();
