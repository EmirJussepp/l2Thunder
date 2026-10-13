#!/usr/bin/env bash
# Activa el dominio principal en el VPS. Se corre DESPUÉS de cambiar el registro A de "@" a la IP de
# este servidor. No hace nada si el DNS todavía no apunta acá (espera hasta 3 minutos y aborta).
#   1. verifica que l2thunder.online y www apunten a este servidor;
#   2. activa el Caddyfile con el dominio principal (guarda una copia del anterior) y recarga Caddy;
#   3. espera el certificado de Let's Encrypt de los dos nombres;
#   4. pasa NEXT_PUBLIC_SITE_URL al dominio principal (los avisos de pago siguen yendo a app.) y reinicia la web.
# Para deshacer: volver el registro A a 76.76.21.21 y, si se quiere, dejar el Caddyfile anterior
# (/etc/caddy/Caddyfile.pre-cutover) y NEXT_PUBLIC_SITE_URL=https://app.l2thunder.online.
set -euo pipefail

MYIP="${MYIP:-216.238.112.99}"
HOSTS="l2thunder.online www.l2thunder.online"
ENVF=/opt/l2-web/.env.production

[ -f /etc/caddy/Caddyfile.cutover ] || { echo "Falta /etc/caddy/Caddyfile.cutover"; exit 1; }

echo "== 1/4 ¿El DNS ya apunta a este servidor? (espero hasta 3 min) =="
ok=0
for i in $(seq 1 36); do
  all=1
  for h in $HOSTS; do
    ips="$(getent ahostsv4 "$h" | awk '{print $1}' | sort -u | tr '\n' ' ')"
    [ "$ips" = "$MYIP " ] || all=0
  done
  if [ "$all" = 1 ]; then ok=1; break; fi
  sleep 5
done
for h in $HOSTS; do echo "  $h -> $(getent ahostsv4 "$h" | awk '{print $1}' | sort -u | tr '\n' ' ')"; done
[ "$ok" = 1 ] || { echo "ABORTO: el DNS todavía no apunta a $MYIP. No toqué nada."; exit 1; }

echo "== 2/4 Activo el dominio principal en Caddy =="
cp -a /etc/caddy/Caddyfile "/etc/caddy/Caddyfile.pre-cutover"
cp /etc/caddy/Caddyfile.cutover /etc/caddy/Caddyfile
runuser -u caddy -- env XDG_DATA_HOME=/var/lib/caddy/data XDG_CONFIG_HOME=/var/lib/caddy/config /usr/local/bin/caddy validate --config /etc/caddy/Caddyfile 2>&1 | tail -1
systemctl reload caddy

echo "== 3/4 Espero el certificado (hasta 2 min) =="
got=0
for i in $(seq 1 24); do
  sleep 5
  n="$(journalctl -u caddy --no-pager -o cat --since '-3min' | grep -c 'certificate obtained successfully' || true)"
  if [ "$n" -ge 2 ]; then got=1; break; fi
done
journalctl -u caddy --no-pager -o cat --since '-3min' | grep -E 'certificate obtained successfully|challenge failed' | grep -o -E '"identifier":"[^"]+"|certificate obtained successfully|challenge failed' | paste -sd' ' | cut -c1-300
[ "$got" = 1 ] || echo "AVISO: todavía no veo los 2 certificados; Caddy sigue reintentando solo. Revisar con: journalctl -u caddy -n 40"

echo "== 4/4 La web pasa a usar el dominio principal =="
sed -i 's#^NEXT_PUBLIC_SITE_URL=.*#NEXT_PUBLIC_SITE_URL="https://l2thunder.online"#' "$ENVF"
grep -E '^(NEXT_PUBLIC_SITE_URL|WEBHOOK_BASE_URL)=' "$ENVF"
systemctl restart l2web
sleep 6
echo "web: $(systemctl is-active l2web) | caddy: $(systemctl is-active caddy)"
for u in https://l2thunder.online/ https://www.l2thunder.online/ https://app.l2thunder.online/; do
  printf '  %-34s %s\n' "$u" "$(curl -s -o /dev/null --max-time 20 -w '%{http_code}' "$u" || echo error)"
done
echo "CUTOVER OK"
