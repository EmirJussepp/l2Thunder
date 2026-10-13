#!/usr/bin/env bash
# Vuelve la web a la versión anterior (o a la que le indiques) en el VPS. Reinicia SOLO la web.
#     bash deploy/vps/rollback.sh              # a la versión inmediatamente anterior
#     bash deploy/vps/rollback.sh web-AAAAMMDD-HHMMSS   # a una en particular
# Lista las versiones guardadas con:  bash deploy/vps/rollback.sh --lista
set -euo pipefail

VPS="${VPS:-root@216.238.112.99}"
KEY="${KEY:-$HOME/.ssh/id_ed25519_vps}"
SSHO=(-o BatchMode=yes -o ConnectTimeout=30 -o ServerAliveInterval=15 -i "$KEY")
TARGET="${1:-}"

ssh "${SSHO[@]}" "$VPS" "TARGET='$TARGET' bash -s" <<'REMOTE'
set -euo pipefail
R=/opt/l2-web/releases
CUR="$(readlink -f /opt/l2-web/current)"
echo "versión actual: $(basename "$CUR")"
echo "versiones guardadas (la más nueva primero):"; ls -1t "$R" | sed 's/^/  /'
[ "$TARGET" = "--lista" ] && exit 0
if [ -z "$TARGET" ]; then
  TARGET="$(ls -1t "$R" | grep -v -x "$(basename "$CUR")" | head -1)"
fi
[ -n "$TARGET" ] && [ -d "$R/$TARGET" ] || { echo "No encuentro esa versión."; exit 1; }
echo "vuelvo a: $TARGET"
ln -sfn "$R/$TARGET" /opt/l2-web/current
chown -h l2web:l2web /opt/l2-web/current
systemctl restart l2web
for _ in $(seq 1 20); do
  sleep 2
  [ "$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3001/ || true)" = 200 ] && { echo "web OK en $TARGET"; exit 0; }
done
echo "ATENCIÓN: la web no respondió 200 después de volver. Revisar: journalctl -u l2web -n 40"; exit 1
REMOTE
