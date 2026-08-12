# L2Thunder — Bridge del gameserver

Servicio chico que corre **en el VPS del gameserver** (no en Vercel). Recibe un aviso de
la web cuando se confirma un pago y le manda al personaje un correo in-game con sus Coins
of Luck. No toca el motor del juego (Java) — usa **CustomMailManager**, que ya viene con
L2jMobius (hoy desactivado), solo hay que prenderlo.

## Por qué existe

MySQL está (bien) atado a `127.0.0.1` en el VPS del juego, y la web vive en Vercel. Este
servicio es el único que necesita estar expuesto a internet, y solo expone UN endpoint
protegido por secreto compartido — así no hay que abrir el puerto 3306 de la base a nadie.

## Cómo entrega — CustomMailManager

L2jMobius trae un sistema de correo in-game que ya hace exactamente lo que necesitamos:
lee la tabla `custom_mail` cada `DatabaseQueryDelay` segundos, entrega los ítems al
personaje (`receiver`, el `charId`) si está online, manda un susurro con el `subject`, y
borra la fila. Si el personaje no está online, la fila espera hasta que entre — no se
pierde nada.

**Antes de usar este servicio, activar en el gameserver:**

```ini
# config/Custom/CustomMailManager.ini
CustomMailManagerEnabled = True
```

Este servicio solo hace `INSERT INTO custom_mail (...)` — la entrega la hace el juego
solo, no hay ningún otro paso Java que escribir.

## Instalación

```bash
cd gameserver-bridge
npm install
cp .env.example .env
```

Completar `.env`:
- `DB_USER` / `DB_PASSWORD`: un usuario de MySQL **nuevo**, dedicado a esto (ver
  permisos abajo) — no el que usa el gameserver, que tiene acceso a todo.
- `BRIDGE_SECRET`: generar uno random y largo:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  Este mismo valor va como `GAMESERVER_BRIDGE_SECRET` en las variables de entorno de
  Vercel.

### Preparar la base (una sola vez, a mano)

Este servicio nunca crea tablas por sí solo — evita darle permiso de `CREATE`. Correr
esto una vez como el usuario admin de MySQL:

```sql
USE l2jmobius;

CREATE TABLE IF NOT EXISTS l2thunder_bridge_log (
  order_id VARCHAR(64) PRIMARY KEY,
  character_name VARCHAR(64) NOT NULL,
  coins INT NOT NULL,
  sent_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE USER 'l2thunder_bridge'@'localhost' IDENTIFIED BY 'ELEGIR-UNA-CONTRASEÑA-FUERTE';

-- Solo lo que el servicio necesita de verdad, nada de accounts ni l2jmobius_login:
GRANT SELECT (charId, char_name) ON l2jmobius.characters TO 'l2thunder_bridge'@'localhost';
GRANT INSERT ON l2jmobius.custom_mail TO 'l2thunder_bridge'@'localhost';
GRANT SELECT, INSERT ON l2jmobius.l2thunder_bridge_log TO 'l2thunder_bridge'@'localhost';

FLUSH PRIVILEGES;
```

**Antes de correr esto, confirmar los nombres reales de columnas** (pueden variar según
la versión exacta del datapack):

```sql
DESCRIBE characters;
DESCRIBE custom_mail;
```

El código asume `charId` (PK) y `char_name` en `characters`, y
`(date, receiver, subject, message, items)` en `custom_mail`. Si difiere, ajustar tanto
el `GRANT` de arriba como las queries marcadas `AJUSTAR ACÁ` en `server.js`.

### Dejarlo corriendo

```bash
npm i -g pm2
pm2 start server.js --name l2thunder-bridge
pm2 save
pm2 startup
```

Verificar:

```bash
curl http://127.0.0.1:4001/health
# {"ok":true}
```

## ⚠️ Antes de usarlo con pagos reales: HTTPS obligatorio

El servicio escucha en el puerto 4001 sin TLS propio. Si lo exponés tal cual, el
`BRIDGE_SECRET` viaja en texto plano — cualquiera que esté en el medio de la red lo puede
leer y usar para mandarse coins gratis. La forma más simple es
**[Caddy](https://caddyserver.com/)** (un solo binario, certificado automático):

```
# /etc/caddy/Caddyfile
bridge.tudominio.com {
    reverse_proxy 127.0.0.1:4001
}
```

```bash
sudo systemctl reload caddy
```

Y `GAMESERVER_BRIDGE_URL` en Vercel apunta a `https://bridge.tudominio.com/credit-coins`,
no a la IP directa. Si no hay dominio todavía, avisar antes de conectar pagos reales.

## Endpoint

`POST /credit-coins`

Headers: `X-Bridge-Secret: <el secreto>`

Body:
```json
{ "characterName": "nombre_del_personaje", "coins": 10, "orderId": "cmsp1z1..." }
```

- Si el personaje no existe en `characters`, responde 404.
- Si la misma `orderId` ya se procesó antes, no manda un segundo correo (responde
  `{"ok": true, "alreadySent": true}`) — los reintentos del webhook de Mercado Pago
  nunca duplican la entrega.
- Límite de `coins` por pedido: `MAX_COINS_PER_REQUEST` (default 100).
- Límite global de pedidos por minuto: 20 (protección extra si el secreto se filtra).

## Seguridad — decisiones tomadas a propósito

- El bridge **no tiene ni va a tener** su propio Access Token de Mercado Pago. La
  verificación de que el pago sea real se hace del lado de Vercel (que re-consulta la
  API de MP, nunca confía en el body del webhook) antes de llamar acá. Darle al VPS su
  propio token de MP repartiría el riesgo en vez de reducirlo.
- El usuario de MySQL de este servicio no toca `accounts` ni `l2jmobius_login` — la
  entrega es por nombre de personaje, no de cuenta.
