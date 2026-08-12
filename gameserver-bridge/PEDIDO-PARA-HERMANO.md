# L2Thunder — Lo que necesito del VPS y de Mercado Pago

Antes que nada: gracias por el audit, encontraste el problema de fondo (`account_data`
vacía, sin lectores) antes de que instaláramos algo que no iba a funcionar. Y encontrar
`CustomMailManager` ya armado nos ahorró escribir código Java de cero. Cambié el diseño
según lo que encontraste — este documento ya está actualizado, no hace falta que
releas el anterior.

Para conectar los pagos con la entrega en el juego necesito **acceso al VPS del
gameserver** (o que instales vos un servicio chico que ya tengo armado) y **las
credenciales de Mercado Pago** de tu cuenta. El bridge no toca el motor del juego para
nada — es un servicio aparte que solo inserta filas en `custom_mail`, que ya existe.

---

## Parte 1 — VPS del gameserver

### 1.1 — Confirmar CustomMailManager y el esquema exacto

```ini
# config/Custom/CustomMailManager.ini
CustomMailManagerEnabled = True
```

Y confirmame estas dos con `DESCRIBE`:

```sql
USE l2jmobius;
DESCRIBE characters;
DESCRIBE custom_mail;
```

El código que armé asume `charId` (PK) y `char_name` en `characters`, y
`(date, receiver, subject, message, items)` en `custom_mail` — si algún nombre de
columna es distinto, avisame antes de instalar nada (es un ajuste de una línea, pero
mejor confirmarlo antes que después de que falle en producción).

### 1.2 — Preparar la base (esto reemplaza el paso viejo de `account_data`)

Correr esto una vez, como el usuario admin de MySQL — crea la tabla propia que el
servicio usa para no mandar el mismo correo dos veces, y un usuario nuevo con el mínimo
permiso posible (nada de `accounts`, nada de `l2jmobius_login`):

```sql
USE l2jmobius;

CREATE TABLE IF NOT EXISTS l2thunder_bridge_log (
  order_id VARCHAR(64) PRIMARY KEY,
  character_name VARCHAR(64) NOT NULL,
  coins INT NOT NULL,
  sent_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE USER 'l2thunder_bridge'@'localhost' IDENTIFIED BY 'ELEGIR-UNA-CONTRASEÑA-FUERTE';

GRANT SELECT (charId, char_name) ON l2jmobius.characters TO 'l2thunder_bridge'@'localhost';
GRANT INSERT ON l2jmobius.custom_mail TO 'l2thunder_bridge'@'localhost';
GRANT SELECT, INSERT ON l2jmobius.l2thunder_bridge_log TO 'l2thunder_bridge'@'localhost';

FLUSH PRIVILEGES;
```

Pasame el usuario y la contraseña que elegiste (por un canal privado si podés — WhatsApp
está bien, pero evitá dejarlo en un chat grupal o algo público).

### 1.3 — ¿Tenés Node.js instalado en el VPS?

Corré `node -v`. Si no da nada (ya sabemos que no estaba instalado la última vez que
revisamos), instalar Node 20:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 1.4 — Instalar el servicio

Te paso la carpeta `gameserver-bridge/` (mismo repo de la web, `l2-web`):

```bash
cd gameserver-bridge
npm install
cp .env.example .env
nano .env   # completar con el usuario/contraseña de 1.2 y generar el BRIDGE_SECRET
```

```bash
npm i -g pm2
pm2 start server.js --name l2thunder-bridge
pm2 save
pm2 startup
```

Probar:

```bash
curl http://127.0.0.1:4001/health
# {"ok":true}
```

El detalle técnico completo (formato del endpoint, por qué las decisiones de seguridad
que tomamos) está en `gameserver-bridge/README.md`.

### 1.5 — HTTPS (obligatorio antes de conectar pagos reales)

Sin esto, el `BRIDGE_SECRET` viaja sin cifrar. **¿Tenés algún dominio o subdominio que
apunte a este VPS?** Si sí, lo más simple es
[Caddy](https://caddyserver.com/) (certificado automático, sin tocar certbot a mano):

```bash
sudo apt install -y caddy
```

```
# /etc/caddy/Caddyfile
bridge.tudominio.com {
    reverse_proxy 127.0.0.1:4001
}
```

```bash
sudo systemctl reload caddy
```

Si no tenés dominio para esto, avisame y vemos otra forma.

### 1.6 — Firewall

Con Caddy delante, lo único que hace falta abierto al público son **80 y 443**. El 4001
en sí NO hace falta exponerlo — Caddy le habla por localhost.

```bash
sudo ufw allow 80
sudo ufw allow 443
```

(la última vez que revisamos tenían abiertos 22, 2106, 7777 y 8080 — 80/443 están
cerrados, hay que abrirlos)

### Lo que necesito que me pases de vuelta (Parte 1)

- [ ] Resultado del `DESCRIBE characters` y `DESCRIBE custom_mail` (paso 1.1)
- [ ] Confirmación de que `CustomMailManagerEnabled = True` (paso 1.1)
- [ ] Usuario y contraseña de MySQL que creaste en 1.2
- [ ] Confirmación de que el servicio quedó corriendo (`curl` de 1.4)
- [ ] La URL final con HTTPS, por ejemplo `https://bridge.tudominio.com` (paso 1.5)
- [ ] El `BRIDGE_SECRET` que generaste (paso 1.4)

---

## Parte 2 — Mercado Pago

Vamos a usar tu cuenta de Mercado Pago para cobrar las donaciones. Necesito el
**Access Token** de producción de una aplicación creada en el panel de desarrolladores.

Ya quedó claro que esto lo manejás vos directo con quien lleva la web — no hace falta que
lo gestiones ni lo mandes por acá.

### 2.1 — Crear la aplicación (si no tenés una ya)

1. Entrá a [mercadopago.com.ar/developers/panel](https://www.mercadopago.com.ar/developers/panel).
2. "Tus integraciones" → "Crear aplicación".
3. Nombre: algo tipo "L2Thunder Web". Tipo de solución: **Pagos online** → **Checkout Pro**.

### 2.2 — Sacar las credenciales

"Credenciales de producción" (no las de test) → copiar el **Access Token**
(`APP_USR-...`).

### 2.3 — Cómo pasarlo

Es sensible — mejor por un canal privado, nunca en un chat grupal ni pegado en código.
Se carga directo como variable de entorno en Vercel, nunca queda en el repositorio.

---

Cualquier duda con algún paso, preguntá. Gracias de nuevo por el audit — nos salvó de
instalar algo que no iba a funcionar.
