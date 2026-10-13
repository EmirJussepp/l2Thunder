#!/usr/bin/env bash
# Crea el servicio de la web (systemd). No lo arranca: primero hay que subir el build.
# Límites: 350 MB de memoria y prioridad baja; si el sistema se queda sin RAM, mata primero esto.
set -euo pipefail

cat > /etc/systemd/system/l2web.service <<'EOF'
[Unit]
Description=L2Thunder web (Next.js)
After=network.target postgresql.service

[Service]
Type=simple
User=l2web
Group=l2web
WorkingDirectory=/opt/l2-web/current
EnvironmentFile=/opt/l2-web/.env.production
Environment=NODE_ENV=production
Environment=PORT=3001
Environment=HOSTNAME=127.0.0.1
ExecStart=/usr/bin/node server.js
Restart=always
SuccessExitStatus=143
RestartSec=5
MemoryMax=350M
OOMScoreAdjust=800
Nice=10
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable l2web
echo "SERVICIO CREADO (habilitado, sin arrancar)"
