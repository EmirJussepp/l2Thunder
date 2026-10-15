"use client";

import { useEffect, useRef, useState } from "react";

// Fondo de la portada: las cinco razas en el campo de batalla, en bucle. La imagen de respaldo (el primer
// cuadro del video, 124 KB) se ve de inmediato y es lo que cuenta para la velocidad de carga; el video
// (1,9 MB) empieza recién cuando la página terminó de cargar y entra en fundido sobre la imagen. No se
// carga con "reducir movimiento" ni con ahorro de datos o conexión lenta, y se pausa cuando el hero sale de
// la pantalla. Es decorativo (sin sonido, aria-hidden).
export default function HeroVideo({ className = "" }: { className?: string }) {
  const [montar, setMontar] = useState(false);
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

    const iniciar = () => setMontar(true);
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
  }, [montar]);

  return (
    <div className={`hero-video ${className}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/video/portada-poster.webp"
        alt=""
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {montar && (
        <video
          ref={ref}
          src="/video/portada.mp4"
          poster="/video/portada-poster.webp"
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
