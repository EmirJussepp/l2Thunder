# L2Thunder — Bridge del gameserver

Servicio chico que corre **en el VPS del gameserver** (no en Vercel). Recibe un aviso de la
web cuando se confirma un pago y acredita Coins of Luck directo en la base MySQL del juego.
No toca el motor del juego (Java) para nada — es un proceso aparte que solo escribe en
`account_data`.

## Por qué existe

MySQL está (bien) atado a `127.0.0.1` en el VPS del juego, y la web vive en Vercel. Este
servicio es el único que necesita estar expuesto a internet, y solo expone UN endpoint
protegido por secreto compartido — así no hay que abrir el puerto 3306 de la base a nadie.

## Instalación

```bash
cd gameserver-bridge
npm install
cp .env.example .env
```

Completar `.env`:
- `DB_USER` / `DB_PASSWORD`: el usuario de MySQL que ya usa el gameserver (acceso a
  `l2jmobius_login`).
- `BRIDGE_SECRET`: generar uno random y largo:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  Este mismo valor va como `GAMESERVER_BRIDGE_SECRET` en las variables de entorno de Vercel.

## ⚠️ Antes de usarlo con pagos reales: HTTPS obligatorio

El servicio escucha en el puerto 4001 sin TLS propio. Si lo exponés tal cual, el
`BRIDGE_SECRET` viaja en texto plano — cualquiera que esté en el medio de la red lo puede
leer y usar para acreditarse coins gratis. Antes de conectarlo a pagos de verdad, ponerlo
detrás de HTTPS. La forma más simple es con **Caddy** (un solo binario, certificado
automático, sin configurar certbot a mano):

```
# /etc/caddy/Caddyfile
bridge.tudominio.com {
    reverse_proxy 127.0.0.1:4001
}
```

Y `GAMESERVER_BRIDGE_URL` en Vercel apunta a `https://bridge.tudominio.com/credit-coins`
en vez de a la IP directa.

Si no hay dominio todavía, como mínimo restringí el puerto 4001 por firewall a IPs
conocidas mientras se prueba, y no lo dejes así en producción.

## Correrlo

Para dejarlo corriendo siempre (se reinicia si se cae o si reinicia el VPS), con `pm2`:

```bash
npm i -g pm2
pm2 start server.js --name l2thunder-bridge
pm2 save
pm2 startup
```

## Verificar que arrancó bien

```bash
curl http://127.0.0.1:4001/health
# {"ok":true}
```

## Endpoint

`POST /credit-coins`

Headers: `X-Bridge-Secret: <el secreto>`

Body:
```json
{ "accountName": "cuenta_del_jugador", "coins": 10, "orderId": "cmsp1z1..." }
```

- Si la cuenta no existe en `accounts`, responde 404.
- Si la misma `orderId` ya se procesó antes, no vuelve a acreditar (responde
  `{"ok": true, "alreadyCredited": true}`) — así los reintentos del webhook de Mercado
  Pago nunca duplican el crédito.

## Si `account_data` no es como se asumió acá

El script asume una tabla clave-valor `account_data(account_name, var, value)` en
`l2jmobius_login`, con `var = 'donate_coins'` como convención para el balance de Coins of
Luck. Si la tabla real tiene otro nombre de columnas, correr:

```sql
DESCRIBE account_data;
```

y ajustar las tres queries marcadas en `server.js` (buscar el comentario
`AJUSTAR ACÁ`).
