#!/usr/bin/env bash
# Backup ANTES de tocar nada. Solo lee: el dump usa --single-transaction, que no bloquea las
# tablas InnoDB del juego. Deja todo en /root/backups/pre-web-<fecha> (solo root puede leerlo).
set -euo pipefail
umask 077

D="/root/backups/pre-web-$(date +%Y%m%d-%H%M)"
mkdir -p "$D"
echo "Backup en $D"

echo "== Tamaño de las bases =="
du -sh /var/lib/mysql 2>/dev/null || true
echo "== Motores de las tablas (MyISAM no se bloquea con --single-transaction) =="
mysql -N -e "SELECT engine, COUNT(*) FROM information_schema.tables WHERE table_schema NOT IN ('mysql','sys','information_schema','performance_schema') GROUP BY engine" || true

echo "== Dump de TODAS las bases MySQL (juego incluido) =="
mysqldump --all-databases --single-transaction --quick --routines --events --triggers \
  | gzip -9 > "$D/mysql-all.sql.gz"
gzip -t "$D/mysql-all.sql.gz"
if ! zcat "$D/mysql-all.sql.gz" | tail -n 5 | grep -q 'Dump completed'; then
  echo "El dump NO terminó bien: no sigo."; exit 1
fi
echo "dump verificado (gzip íntegro y 'Dump completed' al final)"

echo "== Configuración que voy a tocar o que me importa =="
ufw status verbose > "$D/ufw-status.txt" 2>&1 || true
cp -a /etc/ufw "$D/etc-ufw"
crontab -l > "$D/crontab-root.txt" 2>/dev/null || true
cp -a /root/.pm2/dump.pm2 "$D/" 2>/dev/null || true
dpkg --get-selections > "$D/paquetes-instalados.txt"
ss -ltn > "$D/puertos-escuchando.txt"
systemctl list-unit-files --state=enabled --no-pager > "$D/servicios-habilitados.txt" 2>&1 || true
ps -eo pid,user,rss,comm --sort=-rss | head -20 > "$D/procesos-top.txt"
free -m > "$D/memoria.txt"

echo
ls -la "$D"
echo "BACKUP OK en $D"
