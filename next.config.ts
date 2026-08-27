import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
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
        ],
      },
    ];
  },
};

export default nextConfig;
