"use client";

import { useEffect, useRef, useState } from "react";

// Fondo de la portada: las cinco razas en el campo de batalla, en bucle. La imagen de respaldo (el primer
// cuadro del video, 124 KB) se ve de inmediato y es lo que cuenta para la velocidad de carga; el video
// (1,9 MB) empieza recién cuando la página terminó de cargar y entra en fundido sobre la imagen. No se
// carga con "reducir movimiento" ni con ahorro de datos o conexión lenta, y se pausa cuando el hero sale de
// la pantalla. Es decorativo (sin sonido, aria-hidden).
// Hay dos versiones: 1280x720 (1,9 MB) y 1920x1080 reescalada con nitidez (4,4 MB). La grande se pide solo con
// ventanas de 1500 px o más, donde la chica se vería blanda; el original de Flow es de 720p, así que la de 1080p
// mejora los bordes pero no inventa detalle.
const ANCHO_PARA_HD = 1500;

export default function HeroVideo({ className = "" }: { className?: string }) {
  const [fuente, setFuente] = useState<string | null>(null);
  const [sonando, setSonando] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conexion = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const ahorro =
      Boolean(conexion?.saveData) || /^(slow-2g|2g|3g)$/.test(conexion?.effectiveType ?? "");
    if (quieto || ahorro) return;

    const iniciar = () =>
      setFuente(window.innerWidth >= ANCHO_PARA_HD ? "/video/portada-1080.mp4" : "/video/portada.mp4");
    if (document.readyState === "complete") {
      iniciar();
      return;
    }
    window.addEventListener("load", iniciar, { once: true });
    return () => window.removeEventListener("load", iniciar);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, [fuente]);

  return (
    <div className={`hero-video ${className}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/video/portada-poster.webp"
        srcSet="/video/portada-poster.webp 1280w, /video/portada-poster-1080.webp 1920w"
        sizes="100vw"
        alt=""
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {fuente && (
        <video
          ref={ref}
          src={fuente}
          poster={fuente.includes("1080") ? "/video/portada-poster-1080.webp" : "/video/portada-poster.webp"}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          onPlaying={() => setSonando(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
            sonando ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
