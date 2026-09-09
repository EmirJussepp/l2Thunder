"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Crest from "./Crest";

const links = [
  { href: "/por-que-l2thunder", label: "¿Por qué L2Thunder?", sectionId: null },
  { href: "/#jugar", label: "Cómo jugar", sectionId: "jugar" },
  { href: "/donar", label: "Donar", sectionId: null },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // isActive() ya chequea pathname === "/" antes de mirar activeSection, así
    // que no hace falta resetear el estado acá cuando cambiamos de página.
    if (pathname !== "/") return;

    const sectionIds = links.map((l) => l.sectionId).filter((id): id is string => id !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-84px 0px -70% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // El panel es fixed encima de todo — bloqueamos el scroll de atrás mientras
  // está abierto, si no el fondo se sigue moviendo detrás. El salto del botón
  // de la esquina (el header es fixed, así que el padding del body no lo
  // afecta) se resuelve aparte, con scrollbar-gutter: stable en globals.css.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(link: (typeof links)[number]) {
    if (link.sectionId === null) return pathname === link.href;
    return pathname === "/" && activeSection === link.sectionId;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[120]">
        <div className="flex w-full items-center justify-between px-6 py-5 sm:px-10">
          <Link href="/">
            <Crest className="h-14 w-14" variant="solid" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-12 w-12 items-center justify-center text-foreground transition hover:text-gold"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-6 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Fondo oscuro atrás del panel — clic afuera cierra el menú. Siempre
          montado (no solo cuando open) para poder animar la entrada Y la
          salida con transición, en vez de aparecer/desaparecer de golpe. */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[100] flex w-full max-w-sm flex-col overflow-y-auto border-l border-border-soft bg-background shadow-2xl transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-1 flex-col gap-2 px-8 pb-6 pt-24">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link) ? "page" : undefined}
              className={`brand py-2 text-2xl font-black tracking-wide transition sm:text-3xl ${
                isActive(link) ? "text-gold" : "text-foreground hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6 px-8 py-8 text-sm text-muted">
          <a
            href="https://www.facebook.com/profile.php?id=61589483216047"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gold"
          >
            Facebook
          </a>
          <a
            href="https://discord.gg/6W6EJjXSa"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gold"
          >
            Discord
          </a>
        </div>
      </div>
    </>
  );
}
