"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Crest from "./Crest";

const links = [
  { href: "/#features", label: "Características", sectionId: "features" },
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

  // El menú es a pantalla completa — bloqueamos el scroll de atrás mientras
  // está abierto, si no el fondo se sigue moviendo detrás del overlay.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(link: (typeof links)[number]) {
    if (link.href === "/donar") return pathname === "/donar";
    return pathname === "/" && activeSection === link.sectionId;
  }

  return (
    <>
      <header className="navbar-edge sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/">
            <Crest className="h-14 w-14" variant="solid" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Abrir menú"
            className="flex h-12 w-12 items-center justify-center border border-border-soft text-foreground transition hover:border-gold hover:text-gold"
          >
            <span className="relative block h-3 w-6">
              <span className="absolute left-0 top-0 h-px w-6 bg-current" />
              <span className="absolute left-0 top-1.5 h-px w-6 bg-current" />
              <span className="absolute left-0 top-3 h-px w-6 bg-current" />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background/98 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => setOpen(false)}>
              <Crest className="h-14 w-14" variant="solid" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center border border-border-soft text-foreground transition hover:border-gold hover:text-gold"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link) ? "page" : undefined}
                className={`brand text-4xl font-black tracking-wide transition sm:text-5xl ${
                  isActive(link) ? "text-gold" : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-6 px-6 py-8 text-sm text-muted">
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
      )}
    </>
  );
}
