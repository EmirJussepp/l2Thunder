import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Para correr en el VPS (BUILD_TARGET=vps) se arma una carpeta autosuficiente con
  // `node server.js`. En Vercel no se usa: ahí queda el build normal.
  ...(process.env.BUILD_TARGET === "vps" ? { output: "standalone" as const } : {}),
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Next.js 16 solo permite quality=75 por default: cualquier otro valor se
    // ignora en silencio y sirve 75. El fondo del hero usa 80; en escenas
    // oscuras como esas, subir de ahí pesa mucho y no se nota.
    qualities: [75, 80],
  },
  // No anunciar qué framework corre atrás: no es un secreto, pero tampoco hay por qué regalarlo.
  poweredByHeader: false,
  // La guía de límites de nivel pasó de Guías a Características: la dirección vieja sigue funcionando.
  async redirects() {
    return [
      {
        source: "/guias/limites-de-nivel",
        destination: "/por-que-l2thunder/limites-de-nivel",
        permanent: true,
      },
    ];
  },
  async headers() {
    // La política de contenido. Next incrusta scripts en línea para hidratar las páginas, así que
    // 'unsafe-inline' hace falta en script-src (sin eval). Lo que sí queda cerrado: nada de
    // frames ni de <object>, formularios y <base> solo hacia este sitio, y las únicas imágenes
    // de afuera son las de Hopzone (el banner de votos). En desarrollo no se aplica: React usa
    // eval y el hot-reload abre un websocket, y la política lo rompería.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://l2.hopzone.net",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        // No hay auth por cookies en este sitio, así que la superficie de estas
        // cabeceras es acotada — igual sirven contra clickjacking (embeber /donar
        // en un iframe invisible para hacer clic en "Sí, es correcto" a ciegas) y
        // MIME-sniffing.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // HTTPS obligatorio por un año. Sin includeSubDomains ni preload a propósito: el puerto 80
          // de este dominio es del patcher del juego y no se puede dar por hecho que todo lo que
          // cuelgue del dominio hable HTTPS.
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          ...(process.env.NODE_ENV === "production"
            ? [{ key: "Content-Security-Policy", value: csp }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
