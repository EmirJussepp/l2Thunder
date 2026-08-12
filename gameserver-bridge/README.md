# L2Thunder — Bridge del gameserver

Servicio chico que corre **en el VPS del gameserver** (no en Vercel). Cada
`POLL_INTERVAL_MS` le pregunta a la web si hay pagos confirmados pendientes de
entregar, y si hay, le manda al personaje un correo in-game con sus Coins of Luck.
No toca el motor del juego (Java) — usa **CustomMailManager**, que ya viene con
L2jMobius (estaba desactivado), solo hubo que prenderlo.

## Por qué es polling y no un servidor escuchando

Versión anterior de este servicio esperaba que la web le pegara a él (necesitaba
puerto público + HTTPS + dominio). Se dio vuelta: **el bridge es el que pregunta**, la
web nunca inicia conexión hacia el VPS. Ventajas:

- El VPS no expone ningún puerto nuevo a internet. Nada que abrir en el firewall,
  nada de dominio ni certificado propio.
- Un `BRIDGE_SECRET` filtrado ya no alcanza para generar coins de la nada — el bridge
  solo puede leer/confirmar órdenes que la web *ya* marcó como pagadas (verificado
  contra la API de Mercado Pago del lado de Vercel). En el peor caso, alguien con el
  secreto podría leer nombres de personaje y montos, o confirmar entregas falsas de
  órdenes reales (lo cual banco lo nota rápido, no se pierde plata).

## Cómo entrega — CustomMailManager

L2jMobius trae un sistema de correo in-game que hace exactamente lo que necesitamos:
lee la tabla `custom_mail` cada `DatabaseQueryDelay` segundos, entrega los ítems al
personaje (`receiver`, el `charId`) si está online, manda un susurro con el `subject`,
y borra la fila. Si el personaje no está online, la fila espera hasta que entre — no
se pierde nada (salvo la excepción de inventario lleno, ver más abajo).

**Activar en el gameserver** (ya confirmado que está prendido en este VPS):

```ini
# config/Custom/CustomMailManager.ini
CustomMailManagerEnabled = True
```

## Instalación

```bash
cd gameserver-bridge
npm install
cp .env.example .env
```

Completar `.env`:
- `WEB_BASE_URL`: la URL de producción de la web.
- `BRIDGE_SECRET`: generar uno random y largo:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  El mismo valor va como `GAMESERVER_BRIDGE_SECRET` en las variables de entorno de
  Vercel.
- `DB_USER` / `DB_PASSWORD`: un usuario de MySQL **nuevo**, dedicado a esto (ver
  permisos abajo) — no el que usa el gameserver, que tiene acceso a todo.

### Preparar la base (una sola vez, a mano)

```sql
USE l2jmobius;

CREATE USER 'l2thunder_bridge'@'localhost' IDENTIFIED BY 'ELEGIR-UNA-CONTRASEÑA-FUERTE';

GRANT SELECT (charId, char_name) ON l2jmobius.characters TO 'l2thunder_bridge'@'localhost';
GRANT INSERT ON l2jmobius.custom_mail TO 'l2thunder_bridge'@'localhost';

FLUSH PRIVILEGES;
```

Confirmado contra el schema real de este VPS: `characters.charId` (PK, int
unsigned) y `characters.char_name` (varchar), `custom_mail(date, receiver, subject,
message, items)` con `date` como `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` (**no** pasarle
un valor a mano ahí — MySQL en modo estricto rechaza un epoch en milisegundos; se deja
que la columna se llene sola).

No hace falta tabla de idempotencia propia acá: la web es la que decide qué está
pendiente (columna `status` de `DonationOrder`), el bridge no guarda estado.

### Dejarlo corriendo

```bash
npm i -g pm2
pm2 start server.js --name l2thunder-bridge
pm2 save
pm2 startup
```

Ver que esté vivo y qué está haciendo:

```bash
pm2 logs l2thunder-bridge
```

## Endpoints que consume (del lado de la web, no acá)

- `GET {WEB_BASE_URL}/api/bridge/pending` — devuelve las órdenes pagadas pendientes
  de entregar y las marca `PROCESSING` (un lease de 5 minutos: si el bridge se cae a
  mitad de camino, la web las vuelve a ofrecer sola después de ese tiempo).
- `POST {WEB_BASE_URL}/api/bridge/ack` — confirma el resultado de cada una
  (`DELIVERED` o `FAILED` con el motivo).

Los dos requieren el header `X-Bridge-Secret`.

## Seguridad — decisiones tomadas a propósito

- El bridge **no tiene ni va a tener** su propio Access Token de Mercado Pago. La
  verificación de que el pago sea real se hace del lado de Vercel (re-consulta la API
  de MP, nunca confía en el body del webhook) antes de que la orden aparezca en
  `/api/bridge/pending`.
- El usuario de MySQL de este servicio no toca `accounts` ni `l2jmobius_login` — la
  entrega es por nombre de personaje, no de cuenta, y characters/custom_mail viven en
  `l2jmobius`.
- `MAX_COINS_PER_ORDER` es un sanity check extra del lado del bridge, por si algún día
  algo raro llega desde la web.

## Ítem entregado

`Coin of Luck`, id **4037**. Formato de `items` en `custom_mail`: `"4037 <cantidad>"`.

## Limitación conocida: inventario lleno

`CustomMailManager` entrega y borra la fila sin chequear si `addItem` funcionó. Si el
personaje tiene el inventario 100% lleno y ningún stack previo de Coin of Luck (es
apilable), la entrega se pierde silenciosamente. Riesgo bajo pero es plata real —
vale la pena avisarlo en la web ("dejá espacio libre en el inventario antes de
donar").

## Subject/mensaje: solo ASCII

El cliente Interlude no renderiza bien caracteres fuera de ASCII (tildes, rayas
largas, eñes) en el subject/mensaje del correo — ya pasó antes con una "ñ". El texto
que manda este servicio está en ASCII plano a propósito, no cambiarlo sin probarlo en
el cliente real.
