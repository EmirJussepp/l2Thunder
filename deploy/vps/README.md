# Mudanza de la web de L2Thunder al VPS del juego

Se mueve **solo la web (Next.js) y la base de la web**. El juego, su MySQL, el patcher del
launcher (puerto 80) y el bridge actual **no se tocan**.

## Reglas de hierro

1. Nada de lo que ya existe se reinicia ni se recarga: ni el gameserver, ni MySQL, ni sshd,
   ni el bridge, ni el patcher.
2. Todo es aditivo: se instalan cosas nuevas al lado y se abre un solo puerto (443).
3. Lo nuevo corre con límite de memoria y prioridad baja (`MemoryMax`, `Nice=10`,
   `OOMScoreAdjust` alto): si falta RAM, el sistema mata primero a la web, nunca al juego.
4. Cada paso verifica antes de seguir y **aborta** si algo no es como se espera.
5. No se cambia el DNS del dominio principal hasta pasar una compra real en la copia nueva.

## Orden

| Paso | Qué hace | Toca algo existente |
|---|---|---|
| `00-preflight.sh` | Mira RAM, disco, puertos y que el juego y el bridge estén vivos | No (solo lectura) |
| `01-backup.sh` | `mysqldump` de todas las bases + copia de firewall/pm2/cron | No (solo lee) |
| `02-install.sh` | Instala PostgreSQL (solo 127.0.0.1) y Caddy, crea usuario y base de la web, abre el 443 | Solo agrega una regla de firewall |
| `03-service.sh` | Crea el servicio `l2web` (sin arrancarlo) | No |
| subir build | Se arma en la PC (`BUILD_TARGET=vps npm run build`) y se sube; el VPS no compila | No |
| migraciones + datos | `prisma migrate deploy` y copia de paquetes/órdenes desde el backup de Neon | No |
| staging | `app.l2thunder.online` → VPS; Caddy pide el certificado por el 443 | No |
| compra real de prueba | Pago real en la copia nueva y entrega in-game con un segundo bridge | No |
| cutover | DNS del dominio principal al VPS (TTL 60 s) | No |

## Por qué Caddy no usa el puerto 80

El 80 lo usa el patcher del launcher. Caddy se configura con `http_port 8081` y
`auto_https disable_redirects`, y pide el certificado por TLS-ALPN en el 443. Consecuencia:
quien escriba `http://` a mano cae en el patcher; los navegadores van a `https://` por defecto.

## Cómo se deshace (en orden inverso)

- Cutover: devolver el registro A del dominio a `76.76.21.21` (Vercel). Con TTL 60 s son minutos.
- Web: `systemctl disable --now l2web`
- HTTPS: `systemctl disable --now caddy` y `ufw delete allow 443/tcp`
- Base: `systemctl disable --now postgresql` (los datos quedan; para borrar todo, `apt remove --purge postgresql* caddy`)
- Backups: quedan en `/root/backups/pre-web-*` (no se borran solos).

## Dos webs, dos bridges

Mientras dure la transición corren los dos bridges: el actual (apunta a Vercel) entrega lo que
se pagó en la web vieja, y el nuevo (apunta a `http://127.0.0.1:3001`) lo de la web nueva. El
`notification_url` de cada pago apunta al host de **su** stack, así que un rollback del DNS no
pierde pagos. Pasadas ≥48 h del cutover y sin órdenes pendientes en Neon, se apaga el viejo.

## Secretos

Ningún secreto está en este repo. `02-install.sh` genera la contraseña de la base y la deja solo
en `/opt/l2-web/.env.production` (modo 600), copia el secreto del bridge de archivo a archivo, y
el `MP_ACCESS_TOKEN` lo escribe el dueño a mano en ese mismo archivo.
