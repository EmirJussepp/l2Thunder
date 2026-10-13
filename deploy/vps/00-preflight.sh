#!/usr/bin/env bash
# SOLO LECTURA: no modifica nada. Termina con código 1 si el VPS no está en condiciones
# de recibir la web (poca RAM, poco disco, un puerto que necesito ya está ocupado, o el
# juego/bridge no están corriendo como se espera).
set -u
ok=1
good() { printf '  [ok] %s\n' "$*"; }
fail() { printf '  [NO] %s\n' "$*"; ok=0; }

echo "== Sistema =="
uname -srm
. /etc/os-release && echo "$PRETTY_NAME"

echo "== RAM / swap / disco =="
free -m
df -h / | tail -1
avail=$(awk '/MemAvailable/ {print int($2/1024)}' /proc/meminfo)
if [ "$avail" -ge 700 ]; then good "RAM disponible: ${avail} MB"; else fail "RAM disponible baja: ${avail} MB (se pide 700 o más)"; fi
free_gb=$(df --output=avail -BG / | tail -1 | tr -dc '0-9')
if [ "$free_gb" -ge 10 ]; then good "Disco libre: ${free_gb} GB"; else fail "Disco libre bajo: ${free_gb} GB (se pide 10 o más)"; fi

echo "== El juego y el bridge siguen como deben =="
if pgrep -x java >/dev/null; then good "java (gameserver) corriendo"; else fail "no veo el proceso java del gameserver"; fi
if systemctl is-active --quiet mysql; then good "mysql activo"; else fail "mysql NO está activo"; fi
if screen -ls 2>/dev/null | grep -q gameserver; then good "screen 'gameserver' presente"; else fail "no veo el screen 'gameserver'"; fi
if command -v pm2 >/dev/null && pm2 jlist 2>/dev/null | node -e '
  let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const l=JSON.parse(s);
  const b=l.find(p=>p.name==="l2thunder-bridge");process.exit(b&&b.pm2_env.status==="online"?0:1)}catch{process.exit(1)}})'; then
  good "pm2: l2thunder-bridge online"
else
  fail "pm2: l2thunder-bridge NO está online"
fi

echo "== Puertos que voy a usar (deben estar libres) =="
for p in 443 3001 5432 8081; do
  if ss -ltn "( sport = :$p )" | grep -q LISTEN; then fail "el puerto $p ya está en uso"; else good "puerto $p libre"; fi
done

echo "== Puertos que NO se tocan (deben seguir escuchando) =="
for p in 22 80 2106 7777; do
  if ss -ltn "( sport = :$p )" | grep -q LISTEN; then good "puerto $p escuchando"; else fail "el puerto $p NO está escuchando"; fi
done

echo "== Ya instalado? =="
for c in psql caddy; do command -v "$c" >/dev/null && echo "  $c ya está instalado" || echo "  $c no está instalado"; done
getent passwd l2web >/dev/null && echo "  el usuario l2web ya existe" || echo "  el usuario l2web no existe"
[ -e /opt/l2-web/.env.production ] && echo "  /opt/l2-web/.env.production YA EXISTE" || echo "  /opt/l2-web/.env.production no existe"

echo
if [ "$ok" -eq 1 ]; then echo "PREFLIGHT OK"; exit 0; else echo "PREFLIGHT CON PROBLEMAS: no sigo hasta resolverlos"; exit 1; fi
