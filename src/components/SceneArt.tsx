"use client";

import { useEffect, useRef, type ReactNode } from "react";

// El marco del personaje: además de flotar y desplazarse al bajar (CSS), acompaña al mouse con un
// movimiento corto y suave. Solo con mouse (no en pantallas táctiles), y no si la persona pidió "reducir
// movimiento". Mientras la sección no se ve no corre nada.
export default function SceneArt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mouse || calm) return;

    const host = el.closest("section") ?? el;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, visible = false;

    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.setProperty("--px", `${x.toFixed(1)}px`);
      el.style.setProperty("--py", `${y.toFixed(1)}px`);
      const moving = Math.abs(tx - x) > 0.1 || Math.abs(ty - y) > 0.1;
      raf = visible && moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * -22;
      ty = ((e.clientY - r.top) / r.height - 0.5) * -12;
      kick();
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      kick();
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(host);
    host.addEventListener("pointermove", move as EventListener);
    host.addEventListener("pointerleave", leave);
    return () => {
      io.disconnect();
      host.removeEventListener("pointermove", move as EventListener);
      host.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <figure ref={ref} className={className}>
      {children}
    </figure>
  );
}
