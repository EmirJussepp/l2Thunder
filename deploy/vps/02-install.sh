#!/usr/bin/env bash
# Instala PostgreSQL (solo en 127.0.0.1) y Caddy, crea el usuario y la base de la web, y abre
# SOLO el puerto 443. Reglas:
#   - No reinicia ni recarga NADA que ya exista (ni MySQL, ni el juego, ni el bridge, ni sshd).
#   - Aborta si apt quisiera actualizar o quitar algún paquete que ya está instalado.
#   - Los servicios nuevos arrancan con límite de memoria y prioridad baja: si falta RAM,
#     el sistema mata primero a la web, nunca al juego.
#   - Caddy NO usa el puerto 80 (lo usa el patcher del launcher): pide el certificado por el 443.
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive NEEDRESTART_MODE=l NEEDRESTART_SUSPEND=1

WEB_HOST="${WEB_HOST:-app.l2thunder.online}"
PKGS="postgresql caddy"

[ -e /opt/l2-web/.env.production ] && { echo "Ya existe /opt/l2-web/.env.production: este script es de una sola vez. No sigo."; exit 1; }

echo "== 1/6 Simulación: qué instalaría apt (no instala nada) =="
SIM="$(apt-get -s install --no-install-recommends --no-upgrade $PKGS)"
echo "$SIM" | grep -E '^Inst ' | awk '{print "  nuevo:", $2}'
if echo "$SIM" | grep -qE '^Remv '; then echo "ABORTO: apt quitaría paquetes:"; echo "$SIM" | grep -E '^Remv '; exit 1; fi
if echo "$SIM" | grep -qE '^Inst [^ ]+ \['; then echo "ABORTO: apt actualizaría paquetes ya instalados:"; echo "$SIM" | grep -E '^Inst [^ ]+ \['; exit 1; fi
echo "  ok: solo paquetes nuevos, nada que actualizar ni quitar"

echo "== 2/6 Instalación (sin arrancar servicios todavía) =="
printf '#!/bin/sh\nexit 101\n' > /usr/sbin/policy-rc.d
chmod +x /usr/sbin/policy-rc.d
trap 'rm -f /usr/sbin/policy-rc.d' EXIT
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
runuser -u postgres -- psql -v ON_ERROR_STOP=1 -q <<SQL
CREATE ROLE l2web LOGIN PASSWORD '$PGPASS';
CREATE DATABASE l2web OWNER l2web;
REVOKE ALL ON DATABASE l2web FROM PUBLIC;
SQL
umask 077
{
  echo "DATABASE_URL=\"postgresql://l2web:${PGPASS}@127.0.0.1:5432/l2web\""
  echo "NEXT_PUBLIC_SITE_URL=\"https://${WEB_HOST}\""
} > /opt/l2-web/.env.production
# El secreto del bridge es el mismo que usa el bridge actual: se copia de archivo a archivo, sin mostrarlo.
BS="$(grep -E '^BRIDGE_SECRET=' /opt/l2thunder-bridge/.env | head -1 | cut -d= -f2-)"
[ -n "$BS" ] && echo "GAMESERVER_BRIDGE_SECRET=\"$BS\"" >> /opt/l2-web/.env.production
chown l2web:l2web /opt/l2-web/.env.production
chmod 600 /opt/l2-web/.env.production
unset PGPASS BS
echo "  /opt/l2-web/.env.production creado (600). Falta MP_ACCESS_TOKEN: lo escribe el dueño, no yo."

echo "== 5/6 Caddy: HTTPS por el 443, sin tocar el puerto 80 =="
cat > /etc/caddy/Caddyfile <<EOF
{
	# El 80 es del patcher del launcher: Caddy no lo usa. El certificado se pide por el 443 (TLS-ALPN).
	http_port 8081
	https_port 443
	auto_https disable_redirects
}

${WEB_HOST} {
	encode zstd gzip
	reverse_proxy 127.0.0.1:3001
}
EOF
caddy validate --config /etc/caddy/Caddyfile
mkdir -p /etc/systemd/system/caddy.service.d
cat > /etc/systemd/system/caddy.service.d/override.conf <<EOF
[Service]
MemoryMax=150M
OOMScoreAdjust=700
Nice=10
EOF
systemctl daemon-reload
echo "  Caddy queda configurado pero SIN arrancar: se arranca cuando el DNS de ${WEB_HOST} ya apunta acá."

echo "== 6/6 Firewall: solo se agrega el 443 (las reglas existentes no se tocan) =="
ufw allow 443/tcp comment 'L2Thunder web HTTPS'
ufw status | head -20

echo
echo "INSTALACION OK"
