// Copia paquetes y órdenes de la base vieja (Neon) a la nueva (Postgres del VPS) y verifica.
// Uso (lo arma db-migrate-sync.sh): SRC_URL=<neon> DST_URL=<vps por túnel> node sync-from-neon.js
// Es repetible: usa INSERT ... ON CONFLICT (id) DO UPDATE, así que sirve también para la
// sincronización final justo antes de cambiar el DNS. No borra nada del destino.
process.env.TZ = "UTC"; // las columnas son timestamp sin zona: se copian tal cual, sin corrimientos
const { Client } = require("pg");

const { SRC_URL, DST_URL } = process.env;
if (!SRC_URL || !DST_URL) { console.error("Faltan SRC_URL / DST_URL"); process.exit(1); }

const ENUMS = { kind: "PackageKind", status: "OrderStatus" };

async function upsert(dst, table, row) {
  const cols = Object.keys(row);
  const vals = cols.map((c) => row[c]);
  const ph = cols.map((c, i) => `$${i + 1}` + (ENUMS[c] ? `::"${ENUMS[c]}"` : ""));
  const set = cols.filter((c) => c !== "id").map((c) => `"${c}" = EXCLUDED."${c}"`).join(", ");
  await dst.query(
    `INSERT INTO "${table}" (${cols.map((c) => `"${c}"`).join(", ")}) VALUES (${ph.join(", ")}) ON CONFLICT (id) DO UPDATE SET ${set}`,
    vals,
  );
}

const SIG = {
  DonationPackage: `select count(*)::int n, md5(coalesce(string_agg(id||'|'||slug||'|'||name||'|'||kind::text||'|'||coalesce("priceCoins"::text,'')||'|'||active::text||'|'||array_to_string(perks,'~'), ',' order by id),'')) h from "DonationPackage"`,
  DonationOrder: `select count(*)::int n, md5(coalesce(string_agg(id||'|'||"packageId"||'|'||"characterName"||'|'||status::text||'|'||"amountArsCents"::text||'|'||coalesce("mpPaymentId",'')||'|'||coalesce("mpPreferenceId",''), ',' order by id),'')) h from "DonationOrder"`,
};

(async () => {
  const src = new Client({ connectionString: SRC_URL, ssl: { rejectUnauthorized: false } });
  const dst = new Client({ connectionString: DST_URL });
  await src.connect();
  await dst.connect();
  try {
    const pk = (await src.query(`select * from "DonationPackage" order by slug`)).rows;
    const ord = (await src.query(`select * from "DonationOrder" order by "createdAt"`)).rows;
    console.log(`origen (Neon): ${pk.length} paquetes, ${ord.length} órdenes`);

    await dst.query("BEGIN");
    for (const r of pk) await upsert(dst, "DonationPackage", r);
    for (const r of ord) await upsert(dst, "DonationOrder", r);
    await dst.query("COMMIT");

    let ok = true;
    for (const t of Object.keys(SIG)) {
      const a = (await src.query(SIG[t])).rows[0];
      const b = (await dst.query(SIG[t])).rows[0];
      const same = a.n === b.n && a.h === b.h;
      if (!same) ok = false;
      console.log(`${t.padEnd(16)} origen ${a.n} | destino ${b.n} | huella ${same ? "IGUAL" : "DISTINTA"}`);
    }
    console.log(ok ? "SINCRONIZACION OK" : "SINCRONIZACION CON DIFERENCIAS");
    process.exitCode = ok ? 0 : 2;
  } catch (e) {
    try { await dst.query("ROLLBACK"); } catch {}
    console.error("ERROR:", e.message);
    process.exitCode = 1;
  } finally {
    await src.end();
    await dst.end();
  }
})();
