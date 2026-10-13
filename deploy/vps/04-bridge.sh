#!/usr/bin/env bash
# Segundo bridge: entrega lo que se compra en la web NUEVA (la del VPS). Corre al lado del bridge
# actual (pm2 de /opt/l2thunder-bridge), que NO se toca ni se reinicia: este va por systemd, así no
# se mezcla con la lista de procesos de pm2.
#   - Mismo usuario MySQL y mismo secreto que el bridge actual (se copian de archivo a archivo).
#   - Apunta a http://127.0.0.1:3001 (la web local), nunca a Vercel: si no, los dos bridges
#     entregarían las mismas órdenes y las coins saldrían duplicadas.
#   - Usa el server.js parcheado (reintenta la confirmación y anota lo entregado en delivered.json).
# Requiere que antes se haya copiado el server.js parcheado a /root/l2web-deploy/bridge-server.js
set -euo pipefail

SRC=/opt/l2thunder-bridge
DST=/opt/l2-web/bridge
PATCHED=/root/l2web-deploy/bridge-server.js

[ -d "$SRC/node_modules" ] || { echo "No encuentro $SRC/node_modules"; exit 1; }
[ -f "$SRC/.env" ] || { echo "No encuentro $SRC/.env"; exit 1; }
[ -f "$PATCHED" ] || { echo "Falta $PATCHED (el server.js parcheado)"; exit 1; }
[ -e "$DST/server.js" ] && { echo "Ya existe $DST/server.js: este script es de una sola vez. No sigo."; exit 1; }

mkdir -p "$DST"
cp -a "$SRC/node_modules" "$DST/"
cp -a "$SRC/package.json" "$DST/"
cp "$PATCHED" "$DST/server.js"

umask 077
grep -v -E '^(WEB_BASE_URL|POLL_INTERVAL_MS|STATE_FILE)=' "$SRC/.env" > "$DST/.env"
{
  echo "WEB_BASE_URL=http://127.0.0.1:3001"
  echo "POLL_INTERVAL_MS=30000"
  echo "STATE_FILE=$DST/delivered.json"
} >> "$DST/.env"
umask 022
chown -R l2web:l2web "$DST"
chmod 600 "$DST/.env"

cat > /etc/systemd/system/l2bridge-vps.service <<'EOF'
[Unit]
Description=L2Thunder bridge (web nueva en el VPS)
After=network.target mysql.service l2web.service

[Service]
Type=simple
User=l2web
Group=l2web
WorkingDirectory=/opt/l2-web/bridge
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=10
SuccessExitStatus=143
MemoryMax=120M
OOMScoreAdjust=700
Nice=10
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now l2bridge-vps
sleep 6
echo "estado: $(systemctl is-active l2bridge-vps)"
journalctl -u l2bridge-vps --no-pager -o cat -n 5 | cut -c1-160
