#!/usr/bin/env bash
# Se corre en la PC, desde la raíz del repo (Git Bash). Abre un túnel SSH al Postgres del VPS y:
#   1. genera el esquema actual desde el modelo de Prisma y lo aplica en la base NUEVA (vacía);
#   2. marca las migraciones históricas como ya aplicadas (baseline): el historial no se puede
#      reproducir desde cero (la 2.ª usa un tipo que recién crea la 6.ª), por eso se parte del modelo;
#   3. comprueba que Neon y la base nueva tienen EXACTAMENTE el esquema del modelo;
#   4. copia paquetes y órdenes desde Neon y verifica con una huella (sync-from-neon.js).
# La contraseña de la base nueva se lee del VPS y vive solo en memoria: no se imprime ni se guarda.
# Para repetir solo la copia de datos (p. ej. antes de cambiar el DNS): SOLO_DATOS=1 bash deploy/vps/db-migrate-sync.sh
set -euo pipefail

VPS="${VPS:-root@216.238.112.99}"
KEY="${KEY:-$HOME/.ssh/id_ed25519_vps}"
LPORT="${LPORT:-55432}"
SSHO=(-o BatchMode=yes -o ConnectTimeout=25 -o ServerAliveInterval=15 -i "$KEY")

# DESPUÉS del cambio de dominio (13/10/2026) la base de producción es la del VPS y Neon quedó vieja:
# copiar de Neon al VPS PISARÍA los paquetes y precios actuales con los de Neon. Solo se permite a propósito.
if [ -z "${SOBRESCRIBIR_VPS_CON_NEON:-}" ]; then
  echo "ABORTO: este script copia Neon -> VPS y pisaría los paquetes/precios actuales del VPS."
  echo "Ya no se usa después del cambio de dominio. Si de verdad querés hacerlo: SOBRESCRIBIR_VPS_CON_NEON=1 bash deploy/vps/db-migrate-sync.sh"
  exit 1
fi
[ -f .env ] || { echo "Corré esto desde la raíz del repo (no encuentro .env)"; exit 1; }
SRC_URL="$(grep -E '^DATABASE_URL' .env | head -1 | sed -E 's/^DATABASE_URL *= *//; s/^"//; s/"$//')"
[ -n "$SRC_URL" ] || { echo "No encuentro DATABASE_URL de Neon en .env"; exit 1; }

DST_URL="$(ssh "${SSHO[@]}" "$VPS" "grep '^DATABASE_URL=' /opt/l2-web/.env.production | cut -d= -f2- | tr -d '\"'")"
[ -n "$DST_URL" ] || { echo "No pude leer la DATABASE_URL del VPS"; exit 1; }
DST_LOCAL="${DST_URL/127.0.0.1:5432/127.0.0.1:$LPORT}"

ssh "${SSHO[@]}" -N -L "$LPORT:127.0.0.1:5432" -o ExitOnForwardFailure=yes "$VPS" &
TUN=$!
trap 'kill "$TUN" 2>/dev/null || true' EXIT
for _ in $(seq 1 30); do
  (exec 3<>"/dev/tcp/127.0.0.1/$LPORT") 2>/dev/null && break
  sleep 0.5
done

mask() { echo "$1" | sed -E 's#//[^@]*@#//***@#'; }
echo "origen : $(mask "$SRC_URL" | sed -E 's#@[^./]*#@***#')"
echo "destino: $(mask "$DST_LOCAL")"
case "$DST_LOCAL" in *127.0.0.1:$LPORT/*) ;; *) echo "ABORTO: el destino no es el túnel local"; exit 1 ;; esac

if [ -z "${SOLO_DATOS:-}" ]; then
  echo "== 1/4 Esquema actual del modelo -> base NUEVA (vacía) =="
  npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script -o .next/schema.generated.sql
  DST_URL="$DST_LOCAL" node deploy/vps/apply-sql.js .next/schema.generated.sql

  echo "== 2/4 Baseline: las migraciones históricas se marcan como ya aplicadas =="
  for d in $(ls prisma/migrations | grep -E '^[0-9]{14}_' | sort); do
    DATABASE_URL="$DST_LOCAL" npx prisma migrate resolve --applied "$d" 2>&1 | grep -E "marked as applied|Error" || true
  done
  DATABASE_URL="$DST_LOCAL" npx prisma migrate status 2>&1 | grep -E "up to date|pending|not yet|Error|failed" || true

  echo "== 3/4 ¿Neon y la base nueva tienen el esquema del modelo? (sin diferencias = 0) =="
  set +e
  DATABASE_URL="$SRC_URL"  npx prisma migrate diff --from-config-datasource --to-schema prisma/schema.prisma --exit-code >/dev/null 2>&1; A=$?
  DATABASE_URL="$DST_LOCAL" npx prisma migrate diff --from-config-datasource --to-schema prisma/schema.prisma --exit-code >/dev/null 2>&1; B=$?
  set -e
  echo "  Neon     vs modelo: $([ "$A" = 0 ] && echo 'IGUAL' || echo "DIFIERE (código $A)")"
  echo "  base nueva vs modelo: $([ "$B" = 0 ] && echo 'IGUAL' || echo "DIFIERE (código $B)")"
  [ "$B" = 0 ] || { echo "ABORTO: la base nueva no coincide con el modelo"; exit 1; }
fi

echo "== 4/4 Copia de paquetes y órdenes desde Neon =="
SRC_URL="$SRC_URL" DST_URL="$DST_LOCAL" node deploy/vps/sync-from-neon.js
