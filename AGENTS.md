<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Diseño

Antes de crear o cambiar una pantalla, un componente o una guía, leé [DESIGN.md](DESIGN.md): tokens de color y tipografía, reglas de composición y los componentes que ya existen (`StatGrid`, `GuideStep`, `Callout`, `DataTable`, `Screenshot`, `ItemExplorer`). Reutilizalos antes de inventar uno nuevo. El texto de las páginas va en español rioplatense (voseo).

## Publicar (producción corre en el VPS, ya no en Vercel)

Desde el 13/10/2026 `https://l2thunder.online` lo sirve el VPS del juego (Caddy → Next en `127.0.0.1:3001`, base Postgres local). **No uses `vercel --prod`**: el sitio viejo de Vercel (`l2-web-nu.vercel.app`) queda solo como respaldo y para el bridge viejo.

- Publicar: commit y `bash deploy/vps/deploy.sh` desde la raíz, en Git Bash. Arma el build en la PC, lo sube a una versión nueva, reinicia solo la web y vuelve sola a la anterior si falla el chequeo de salud.
- Volver atrás: `bash deploy/vps/rollback.sh` (o `--lista` para ver las versiones guardadas).
- Si cambia `prisma/schema.prisma`: hay que crear la migración y aplicarla a la base del VPS aparte (el deploy no migra). La base de Neon ya no es la de producción.
- El VPS es el del juego: nunca reiniciar ni tocar el gameserver, MySQL, el patcher del puerto 80 ni el bridge de pm2. Ver `deploy/vps/README.md`.
- Las claves (`MP_ACCESS_TOKEN`, la base, el secreto del bridge) viven solo en `/opt/l2-web/.env.production` del VPS; nunca en el repo ni en el chat.
