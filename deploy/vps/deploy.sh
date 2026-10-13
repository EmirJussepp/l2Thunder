#!/usr/bin/env bash
# Publica la web en el VPS. Se corre en la PC, desde la raíz del repo, en Git Bash:
#     bash deploy/vps/deploy.sh
# Arma el build en la PC (el VPS no compila: tiene poca RAM y es la del juego), lo sube a una carpeta
# nueva de versiones, cambia el enlace "current" y reinicia SOLO la web. Si la web nueva no pasa el
# chequeo de salud, vuelve sola a la versión anterior. Guarda las 4 últimas versiones.
# Qué NO hace: migrar la base. Si cambia prisma/schema.prisma hay que aplicar la migración aparte.
# ALLOW_DIRTY=1 permite publicar con cambios sin commitear (por defecto se frena, para que lo
# publicado sea siempre lo que está en git).
set -euo pipefail

VPS="${VPS:-root@216.238.112.99}"
KEY="${KEY:-$HOME/.ssh/id_ed25519_vps}"
SSHO=(-o BatchMode=yes -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=20 -i "$KEY")
REL="web-$(date +%Y%m%d-%H%M%S)"

[ -f package.json ] && [ -d src/app ] || { echo "Corré esto desde la raíz del repo."; exit 1; }
if [ -z "${ALLOW_DIRTY:-}" ] && [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "Hay cambios sin commitear. Hacé commit (o ALLOW_DIRTY=1 si es a propósito)."; git status --short --untracked-files=no; exit 1
fi
echo "Publicando $REL (commit $(git rev-parse --short HEAD))"

echo "== 1/5 Build para el VPS =="
BUILD_TARGET=vps npm run build 2>&1 | grep -E "Compiled|error|Error|Failed|\([0-9]+/[0-9]+\)" | tail -5
[ -f .next/standalone/server.js ] || { echo "No se generó .next/standalone/server.js"; exit 1; }

echo "== 2/5 Armo el paquete (con las imágenes de Linux, sin claves ni binarios de Windows) =="
WORK="$(mktemp -d)"
STAGE="$WORK/stage"
cp -a .next/standalone "$STAGE"
mkdir -p "$STAGE/public"
cp -a public/. "$STAGE/public/"   # el contenido, no la carpeta (si no, queda public/public)
mkdir -p "$STAGE/.next"
cp -a .next/static "$STAGE/.next/static"
SHARP_JSON="$STAGE/node_modules/sharp/package.json"
if [ -f "$SHARP_JSON" ]; then
  SJ="$(cygpath -m "$SHARP_JSON")"   # Node no entiende las rutas /tmp de Git Bash
  SV="$(node -p "require('$SJ').optionalDependencies['@img/sharp-linux-x64']")"
  LV="$(node -p "require('$SJ').optionalDependencies['@img/sharp-libvips-linux-x64']")"
  CACHE="deploy/vps/.cache/sharp-$SV-$LV"
  if [ ! -d "$CACHE/sharp/package" ]; then
    echo "  bajo @img/sharp-linux-x64@$SV y @img/sharp-libvips-linux-x64@$LV de npm"
    mkdir -p "$CACHE/sharp" "$CACHE/vips"
    ( cd "$CACHE" && npm pack "@img/sharp-linux-x64@$SV" "@img/sharp-libvips-linux-x64@$LV" >/dev/null 2>&1 \
      && tar --force-local -xzf "img-sharp-linux-x64-$SV.tgz" -C sharp \
      && tar --force-local -xzf "img-sharp-libvips-linux-x64-$LV.tgz" -C vips )
  fi
  mkdir -p "$STAGE/node_modules/@img"
  cp -a "$CACHE/sharp/package" "$STAGE/node_modules/@img/sharp-linux-x64"
  cp -a "$CACHE/vips/package" "$STAGE/node_modules/@img/sharp-libvips-linux-x64"
fi
PKG="$WORK/$REL.tgz"
tar --force-local -czf "$PKG" -C "$STAGE" \
  --exclude='./.env' --exclude='./.env.*' --exclude='./node_modules/@img/sharp-win32-*' .
if tar --force-local -tzf "$PKG" | grep -qE '(^|/)\.env'; then echo "ABORTO: el paquete trae un .env"; exit 1; fi
echo "  paquete: $(du -h "$PKG" | cut -f1)"

echo "== 3/5 Subo al VPS =="
scp -q "${SSHO[@]}" "$PKG" "$VPS:/root/l2web-deploy/$REL.tgz"

echo "== 4/5 Cambio de versión en el VPS (con chequeo y vuelta atrás automática) =="
cat > "$WORK/remote.sh" <<'REMOTE'
set -euo pipefail
R=/opt/l2-web/releases
D="$R/$REL"
[ -f "/root/l2web-deploy/$REL.tgz" ] || { echo "no llegó el paquete"; exit 1; }
mkdir -p "$D"
tar -xzf "/root/l2web-deploy/$REL.tgz" -C "$D"
# Turbopack deja atajos con rutas absolutas de la PC: se reapuntan relativos a esta versión.
if [ -d "$D/.next/node_modules" ]; then
  cd "$D/.next/node_modules"
  find . -maxdepth 2 -type l | while read -r l; do
    base="$(basename "$l")"; pkg="$(echo "$base" | sed -E 's/-[0-9a-f]{16}$//')"; dir="$(dirname "$l")"
    if [ "$dir" = "./@prisma" ]; then target="../../../node_modules/@prisma/$pkg"; else target="../../node_modules/$pkg"; fi
    [ -e "$dir/$target" ] || { echo "falta el destino $target para $l"; exit 1; }
    ln -sfn "$target" "$l"
  done
fi
chown -R l2web:l2web "$D"
PREV="$(readlink -f /opt/l2-web/current 2>/dev/null || true)"
ln -sfn "$D" /opt/l2-web/current
chown -h l2web:l2web /opt/l2-web/current
systemctl restart l2web
ok=0
for _ in $(seq 1 25); do
  sleep 2
  a="$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3001/ || true)"
  b="$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3001/api/bridge/pending || true)"
  c="$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3001/donar || true)"
  if [ "$a" = 200 ] && [ "$b" = 401 ] && [ "$c" = 200 ]; then ok=1; break; fi
done
if [ "$ok" != 1 ]; then
  echo "FALLÓ el chequeo de salud (/=$a, bridge=$b, donar=$c): vuelvo a la versión anterior"
  if [ -n "$PREV" ] && [ -d "$PREV" ]; then
    ln -sfn "$PREV" /opt/l2-web/current; chown -h l2web:l2web /opt/l2-web/current; systemctl restart l2web
    echo "restaurada: $PREV"
  fi
  exit 1
fi
echo "chequeo de salud OK (/=200, bridge sin secreto=401, donar=200)"
rm -f "/root/l2web-deploy/$REL.tgz"
# Se guardan las 4 versiones más nuevas; se borra el resto (solo carpetas web-AAAAMMDD-HHMMSS de este directorio).
CUR="$(readlink -f /opt/l2-web/current)"
ls -1dt "$R"/web-* | tail -n +5 | while read -r old; do
  case "$old" in
    /opt/l2-web/releases/web-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9])
      [ "$old" = "$CUR" ] || { rm -rf -- "$old"; echo "versión vieja borrada: $(basename "$old")"; } ;;
  esac
done
echo "versiones guardadas: $(ls -1 "$R" | tr '\n' ' ')"
REMOTE
ssh "${SSHO[@]}" "$VPS" "REL=$REL bash -s" < "$WORK/remote.sh"

echo "== 5/5 Chequeo desde internet =="
for u in https://l2thunder.online/ https://l2thunder.online/donar https://l2thunder.online/guias/clases; do
  printf '  %-42s %s\n' "$u" "$(curl -s -o /dev/null --max-time 25 -w '%{http_code}' "$u")"
done
echo "PUBLICADO $REL"
