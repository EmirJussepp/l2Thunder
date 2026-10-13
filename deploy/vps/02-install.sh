#!/usr/bin/env bash
# Instala PostgreSQL (solo en 127.0.0.1) y Caddy, crea el usuario y la base de la web, y abre
# SOLO el puerto 443. Reglas:
#   - No reinicia ni recarga NADA que ya exista (ni MySQL, ni el juego, ni el bridge, ni sshd).
#   - Aborta si apt quisiera actualizar o quitar algún paquete que ya está instalado.
#   - Los servicios nuevos arrancan con límite de memoria y prioridad baja: si falta RAM,
#     el sistema mata primero a la web, nunca al juego.
#   - Caddy NO usa el puerto 80 (lo usa el patcher del launcher): pide el certificado por el 443.
#   - Ubuntu 22.04 no trae Caddy: se baja el binario oficial de GitHub y se verifica su checksum
#     (así no se agrega ningún repositorio de terceros al sistema).
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive NEEDRESTART_MODE=l NEEDRESTART_SUSPEND=1

WEB_HOST="${WEB_HOST:-app.l2thunder.online}"
CADDY_VERSION="${CADDY_VERSION:-2.11.7}"
PKGS="postgresql"

cleanup() { rm -f /usr/sbin/policy-rc.d; if [ -n "${TMP:-}" ]; then rm -rf "$TMP"; fi; }
trap cleanup EXIT

[ -e /opt/l2-web/.env.production ] && { echo "Ya existe /opt/l2-web/.env.production: este script es de una sola vez. No sigo."; exit 1; }

echo "== 1/6 Simulación: qué instalaría apt (no instala nada) =="
SIM="$(apt-get -s install --no-install-recommends --no-upgrade $PKGS)"
echo "$SIM" | grep -E '^Inst ' | awk '{print "  nuevo:", $2}'
if echo "$SIM" | grep -qE '^Remv '; then echo "ABORTO: apt quitaría paquetes:"; echo "$SIM" | grep -E '^Remv '; exit 1; fi
if echo "$SIM" | grep -qE '^Inst [^ ]+ \['; then echo "ABORTO: apt actualizaría paquetes ya instalados:"; echo "$SIM" | grep -E '^Inst [^ ]+ \['; exit 1; fi
echo "  ok: solo paquetes nuevos, nada que actualizar ni quitar"

echo "== 2/6 Instalación de PostgreSQL (sin arrancar servicios todavía) =="
printf '#!/bin/sh\nexit 101\n' > /usr/sbin/policy-rc.d
chmod +x /usr/sbin/policy-rc.d
apt-get install -y --no-install-recommends --no-upgrade $PKGS
rm -f /usr/sbin/policy-rc.d

echo "== 3/6 PostgreSQL: solo local, poca memoria, prioridad baja =="
PGV="$(ls /etc/postgresql | sort -V | tail -1)"
cat > "/etc/postgresql/$PGV/main/conf.d/90-l2web.conf" <<EOF
listen_addresses = '127.0.0.1'
port = 5432
max_connections = 20
shared_buffers = 64MB
effective_cache_size = 192MB
work_mem = 2MB
maintenance_work_mem = 32MB
wal_buffers = 4MB
max_wal_size = 256MB
log_min_duration_statement = 2000
EOF
mkdir -p "/etc/systemd/system/postgresql@$PGV-main.service.d"
cat > "/etc/systemd/system/postgresql@$PGV-main.service.d/override.conf" <<EOF
[Service]
MemoryMax=300M
OOMScoreAdjust=700
Nice=10
EOF
systemctl daemon-reload
systemctl enable postgresql
systemctl start "postgresql@$PGV-main"
sleep 3
runuser -u postgres -- psql -tAc 'select version()' | head -1

echo "== 4/6 Usuario del sistema, usuario y base de Postgres (la contraseña NO se muestra) =="
id l2web >/dev/null 2>&1 || useradd --system --create-home --home-dir /opt/l2-web --shell /usr/sbin/nologin l2web
mkdir -p /opt/l2-web/releases
chown -R l2web:l2web /opt/l2-web
PGPASS="$(openssl rand -hex 24)"
if ! runuser -u postgres -- psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='l2web'" | grep -q 1; then
  runuser -u postgres -- psql -v ON_ERROR_STOP=1 -q -c "CREATE ROLE l2web LOGIN"
fi
# La contraseña viaja por stdin (no queda en la lista de procesos).
runuser -u postgres -- psql -v ON_ERROR_STOP=1 -q <<SQL
ALTER ROLE l2web PASSWORD '$PGPASS';
SQL
if ! runuser -u postgres -- psql -tAc "SELECT 1 FROM pg_database WHERE datname='l2web'" | grep -q 1; then
  runuser -u postgres -- createdb -O l2web l2web
fi
runuser -u postgres -- psql -v ON_ERROR_STOP=1 -q -c "REVOKE ALL ON DATABASE l2web FROM PUBLIC"
umask 077
{
  echo "DATABASE_URL=\"postgresql://l2web:${PGPASS}@127.0.0.1:5432/l2web\""
  echo "NEXT_PUBLIC_SITE_URL=\"https://${WEB_HOST}\""
  echo "WEBHOOK_BASE_URL=\"https://${WEB_HOST}\""
} > /opt/l2-web/.env.production
# El secreto del bridge es el mismo que usa el bridge actual: se copia de archivo a archivo, sin mostrarlo.
BS="$(grep -E '^BRIDGE_SECRET=' /opt/l2thunder-bridge/.env | head -1 | cut -d= -f2-)"
[ -n "$BS" ] && echo "GAMESERVER_BRIDGE_SECRET=\"$BS\"" >> /opt/l2-web/.env.production
chown l2web:l2web /opt/l2-web/.env.production
chmod 600 /opt/l2-web/.env.production
unset PGPASS BS
# Se vuelve al umask normal: lo que se crea después (config de Caddy, servicios) tiene que ser legible.
umask 022
echo "  /opt/l2-web/.env.production creado (600). Falta MP_ACCESS_TOKEN: lo escribe el dueño, no yo."

echo "== 5/6 Caddy ${CADDY_VERSION}: binario oficial de GitHub, con checksum verificado =="
TMP="$(mktemp -d)"
BASE="https://github.com/caddyserver/caddy/releases/download/v${CADDY_VERSION}"
ASSET="caddy_${CADDY_VERSION}_linux_amd64.tar.gz"
curl -fsSL -o "$TMP/$ASSET" "$BASE/$ASSET"
curl -fsSL -o "$TMP/checksums.txt" "$BASE/caddy_${CADDY_VERSION}_checksums.txt"
EXPECT="$(grep -E " \*?${ASSET}\$" "$TMP/checksums.txt" | awk '{print $1}' | head -1)"
case "${#EXPECT}" in 128) ALGO=sha512sum ;; 64) ALGO=sha256sum ;; *) echo "ABORTO: no encuentro el checksum de $ASSET"; exit 1 ;; esac
ACTUAL="$($ALGO "$TMP/$ASSET" | awk '{print $1}')"
[ "$EXPECT" = "$ACTUAL" ] || { echo "ABORTO: el checksum de Caddy NO coincide"; exit 1; }
echo "  checksum ok ($ALGO)"
tar -xzf "$TMP/$ASSET" -C "$TMP" caddy
install -m 0755 "$TMP/caddy" /usr/local/bin/caddy
/usr/local/bin/caddy version

id caddy >/dev/null 2>&1 || useradd --system --home-dir /var/lib/caddy --create-home --shell /usr/sbin/nologin caddy
mkdir -p /etc/caddy /var/lib/caddy/data /var/lib/caddy/config
chown -R caddy:caddy /var/lib/caddy
cat > /etc/caddy/Caddyfile <<EOF
{
	# El 80 es del patcher del launcher: Caddy no lo usa. El certificado se pide por el 443 (TLS-ALPN).
	http_port 8081
	https_port 443
	auto_https disable_redirects
}

${WEB_HOST} {
	tls {
		issuer acme {
			disable_http_challenge
		}
	}
	# Host de pruebas y de avisos de pago: que los buscadores no lo indexen.
	header X-Robots-Tag "noindex, nofollow"
	encode zstd gzip
	reverse_proxy 127.0.0.1:3001
}
EOF
runuser -u caddy -- env XDG_DATA_HOME=/var/lib/caddy/data XDG_CONFIG_HOME=/var/lib/caddy/config \
  /usr/local/bin/caddy validate --config /etc/caddy/Caddyfile
cat > /etc/systemd/system/caddy.service <<'EOF'
[Unit]
Description=Caddy (HTTPS de la web de L2Thunder)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=caddy
Group=caddy
Environment=XDG_DATA_HOME=/var/lib/caddy/data
Environment=XDG_CONFIG_HOME=/var/lib/caddy/config
ExecStart=/usr/local/bin/caddy run --config /etc/caddy/Caddyfile
ExecReload=/usr/local/bin/caddy reload --config /etc/caddy/Caddyfile --force
TimeoutStopSec=10s
LimitNOFILE=65536
AmbientCapabilities=CAP_NET_BIND_SERVICE
NoNewPrivileges=true
ProtectSystem=full
MemoryMax=150M
OOMScoreAdjust=700
Nice=10
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
echo "  Caddy queda instalado pero SIN arrancar: se arranca cuando la web ya está subida."

echo "== 6/6 Firewall: solo se agrega el 443 (las reglas existentes no se tocan) =="
ufw allow 443/tcp comment 'L2Thunder web HTTPS'
ufw status | head -20

echo
echo "INSTALACION OK"
