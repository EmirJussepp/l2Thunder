"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = ["/hero.jpg", "/hero2.jpg", "/hero4.jpg"];
const INTERVAL_MS = 7000;
// La segunda diapositiva se pide recién a mitad del primer intervalo, no al
// abrir la página: así el fondo que se ve primero no compite con ella por ancho
// de banda. Después, cada cambio deja pedida la siguiente.
const PRELOAD_AFTER_MS = 3500;

export default function HeroSlideshow() {
  // `shown` es el índice más alto que ya se montó: no se montan (ni se bajan)
  // las diapositivas que todavía no tocan.
  const [slide, setSlide] = useState({ active: 0, shown: 0 });

  useEffect(() => {
    // Con "reducir movimiento" el fondo se queda quieto en la primera imagen y
    // las otras dos no se descargan nunca.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const last = IMAGES.length - 1;
    const preload = setTimeout(() => {
      setSlide((s) => ({ ...s, shown: Math.max(s.shown, 1) }));
    }, PRELOAD_AFTER_MS);
    const timer = setInterval(() => {
      setSlide((s) => {
        const active = (s.active + 1) % IMAGES.length;
        return { active, shown: Math.min(last, Math.max(s.shown, active + 1)) };
      });
    }, INTERVAL_MS);

    return () => {
      clearTimeout(preload);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {IMAGES.slice(0, slide.shown + 1).map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          quality={80}
          sizes="100vw"
          className={`hero-bg-animate object-cover transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none ${
            i === slide.active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/55 to-background" />
    </div>
  );
}
