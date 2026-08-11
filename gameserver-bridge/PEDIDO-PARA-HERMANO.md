# L2Thunder — Lo que necesito del VPS y de Mercado Pago

Hola! Estamos conectando la web de donaciones (l2thunder) con el server para que cuando
alguien done por Mercado Pago, se le acrediten Coins of Luck en su cuenta automáticamente.

Para eso necesito dos cosas de tu lado: **acceso al VPS del gameserver** (o que instales
vos un servicio chico que ya tengo armado) y **las credenciales de Mercado Pago** de tu
cuenta, que es la que vamos a usar para cobrar.

No hace falta tocar nada del motor del juego (Java) para esto — es un servicio aparte,
chiquito, que solo escribe en la base de datos.

---

## Parte 1 — VPS del gameserver

### 1.1 — Contame la base de puntos/cuenta que ya existe

Corré esto en la base y pasame el resultado (tal cual, para saber si ya existe algo
armado o hay que crear la tabla):

```sql
USE l2jmobius_login;
DESCRIBE account_data;
SELECT * FROM account_data LIMIT 5;
```

Si por algún motivo esa tabla no existe o el server ya tiene su propio sistema de puntos
de donación armado de antes, avisame — mejor reusar eso que inventar uno nuevo.

### 1.2 — Un usuario de MySQL para este servicio

Necesito un usuario de MySQL con permiso de lectura/escritura sobre la base
`l2jmobius_login` (solo esa, no hace falta que toque `l2jmobius` ni nada del juego en sí).
Puede ser nuevo, así este servicio no tiene más permisos de los que necesita:

```sql
CREATE USER 'l2thunder_bridge'@'localhost' IDENTIFIED BY 'ELEGIR-UNA-CONTRASEÑA-FUERTE';
GRANT SELECT, INSERT, UPDATE ON l2jmobius_login.* TO 'l2thunder_bridge'@'localhost';
FLUSH PRIVILEGES;
```

Pasame el usuario y la contraseña que elegiste (por un canal privado, no por acá en texto
plano si podés — WhatsApp está bien, pero evitá dejarlo en un chat grupal o algo público).

### 1.3 — ¿Tenés Node.js instalado en el VPS?

Corré `node -v`. Si no da nada, hay que instalarlo (Node 20 o superior):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 1.4 — Instalar el servicio

Te paso la carpeta `gameserver-bridge/` (está en el repo de la web, `l2-web`). Los pasos
son:

```bash
cd gameserver-bridge
npm install
cp .env.example .env
nano .env   # completar con los datos de 1.2
```

En el `.env`, además del usuario/contraseña de MySQL, hay que generar un secreto random
para `BRIDGE_SECRET` (esto es la "clave" que va a usar la web para autenticarse con este
servicio — sin ella nadie puede pegarle):

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Pegá ese valor en `BRIDGE_SECRET=` del `.env`, y pasámelo a mí también (lo voy a
necesitar como variable de entorno del lado de la web, en Vercel).

Para dejarlo corriendo siempre (se reinicia solo si se cae o si reiniciás el VPS):

```bash
npm i -g pm2
pm2 start server.js --name l2thunder-bridge
pm2 save
pm2 startup
```

Probar que arrancó:

```bash
curl http://127.0.0.1:4001/health
# tiene que devolver {"ok":true}
```

### 1.5 — HTTPS (importante, no saltear)

Este servicio tiene que quedar accesible desde internet (la web corre en Vercel, no en
este VPS), pero **nunca sin HTTPS** — si no, el `BRIDGE_SECRET` viaja sin cifrar y
cualquiera en el medio de la red lo podría leer y acreditarse coins gratis.

**¿Tenés algún dominio o subdominio que apunte a este VPS?** Si sí, lo más simple es
[Caddy](https://caddyserver.com/) (un solo binario, certificado HTTPS automático, sin
tocar certbot a mano):

```bash
sudo apt install -y caddy   # o el método de instalación que prefieras
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

Si no tenés dominio para esto, avisame y vemos otra forma (por ejemplo, agregar HTTPS
con un certificado autofirmado + IP fija, aunque es menos prolijo).

### 1.6 — Firewall

El servicio escucha en el puerto **4001** internamente, pero con Caddy delante, lo único
que necesita estar abierto al público son los puertos **80 y 443** (HTTP/HTTPS estándar)
si no los tenés ya abiertos. El 4001 en sí NO hace falta exponerlo — Caddy habla con él
por localhost.

```bash
sudo ufw allow 80
sudo ufw allow 443
```

(ajustá el comando si usás otro firewall que no sea `ufw`)

### Lo que necesito que me pases de vuelta (Parte 1)

- [ ] Resultado del `DESCRIBE account_data` (paso 1.1)
- [ ] Usuario y contraseña de MySQL que creaste (paso 1.2)
- [ ] Confirmación de que el servicio quedó corriendo (`pm2 status` o el `curl` de 1.4)
- [ ] La URL final con HTTPS, por ejemplo `https://bridge.tudominio.com` (paso 1.5)
- [ ] El `BRIDGE_SECRET` que generaste (paso 1.4)

---

## Parte 2 — Mercado Pago

Vamos a usar tu cuenta de Mercado Pago para cobrar las donaciones. Necesito el
**Access Token** de producción de una aplicación creada en el panel de desarrolladores.

### 2.1 — Crear la aplicación (si no tenés una ya)

1. Entrá a [mercadopago.com.ar/developers/panel](https://www.mercadopago.com.ar/developers/panel)
   con tu cuenta.
2. "Tus integraciones" → "Crear aplicación".
3. Nombre: algo tipo "L2Thunder Web". Tipo de solución: **Pagos online** → **Checkout Pro**.

### 2.2 — Sacar las credenciales

Dentro de la aplicación, andá a "Credenciales de producción" (no las de test, ya que
vamos a cobrar de verdad) y copiá:

- **Access Token** (empieza con `APP_USR-...`) — esto es lo importante, lo necesito.
- Public Key (por si la necesitamos más adelante para algo del lado del navegador).

### 2.3 — Cómo pasármelo

El Access Token es sensible (con eso se pueden mover los pagos de tu cuenta) — si podés,
mejor pasámelo por un canal privado y no dejarlo escrito en ningún lado público. Yo lo
voy a cargar directo como variable de entorno en Vercel, nunca va a quedar en el código
ni en el repositorio de GitHub.

### Lo que necesito que me pases de vuelta (Parte 2)

- [ ] Access Token de producción (`APP_USR-...`)

---

Cualquier duda con algún paso, me preguntás. Gracias!
