# L2Thunder — Lo que falta del VPS

Gracias de nuevo por las dos rondas de audit — encontraste `account_data` sin uso,
`CustomMailManager` ya armado, el bug del `TIMESTAMP` que rompía cada entrega, y lo del
subject no-ASCII. Todo corregido. Y tenías razón con lo de dar vuelta la arquitectura:
ya está hecho — el bridge ahora le pregunta a la web por polling, no al revés. Con esto:

- **No hace falta dominio ni HTTPS propio en el VPS.** El bridge solo hace pedidos
  salientes hacia la web (que ya tiene HTTPS de Vercel), nunca escucha nada.
- **No hace falta tocar el firewall.** No hay ningún puerto nuevo que abrir.
- Confirmé de mi lado (probé el flujo completo contra la web en local, con el bug del
  `pool.getConnection()` fuera del `try` — lo encontré probando esto, ya corregido en
  el zip que te paso ahora) que el circuito pedido → intento → confirmación funciona
  bien de punta a punta.

Con esto el pedido se achica bastante:

## Lo único que falta

### 1 — Preparar la base (una sola vez)

```sql
USE l2jmobius;

CREATE USER 'l2thunder_bridge'@'localhost' IDENTIFIED BY 'ELEGIR-UNA-CONTRASEÑA-FUERTE';

GRANT SELECT (charId, char_name) ON l2jmobius.characters TO 'l2thunder_bridge'@'localhost';
GRANT INSERT ON l2jmobius.custom_mail TO 'l2thunder_bridge'@'localhost';

FLUSH PRIVILEGES;
```

Ya no hace falta la tabla propia de idempotencia (`l2thunder_bridge_log`) — ese estado
ahora lo maneja la web, el bridge quedó sin memoria propia. Grant más chico que antes.

### 2 — Node.js (si todavía no está)

```bash
node -v
```

Si no da nada:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3 — Instalar el servicio

```bash
cd gameserver-bridge
npm install
cp .env.example .env
nano .env   # WEB_BASE_URL, el usuario/contraseña del paso 1, y generar BRIDGE_SECRET
```

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
# pegar el resultado en BRIDGE_SECRET del .env
```

```bash
npm i -g pm2
pm2 start server.js --name l2thunder-bridge
pm2 save
pm2 startup
pm2 logs l2thunder-bridge
```

Con eso alcanza — el detalle técnico completo está en `README.md` si hace falta.

### Lo que necesito de vuelta

- [ ] Usuario y contraseña de MySQL que creaste (paso 1)
- [ ] El `BRIDGE_SECRET` que generaste (paso 3)
- [ ] Confirmación de que `pm2 logs` muestra el mensaje de arranque sin errores

Lo de Mercado Pago sigue como quedamos — eso lo manejo yo directo, no hace falta que
lo toques.

Gracias de nuevo por el laburo de revisión, en serio nos ahorró varios problemas.
