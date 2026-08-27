"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Crest from "./Crest";

const links = [
  { href: "/#rates", label: "Rates", sectionId: "rates" },
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

  function isActive(link: (typeof links)[number]) {
    if (link.href === "/donar") return pathname === "/donar";
    return pathname === "/" && activeSection === link.sectionId;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Crest className="h-8 w-8" />
          <span className="brand text-xl font-bold text-glow">
            <small className="text-accent-2">L2</small>THUNDER
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={`transition-colors hover:text-foreground ${
                isActive(link) ? "font-semibold text-gold" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donar"
            className="hidden rounded-none bg-gradient-to-r from-gold to-accent-2 px-5 py-2 text-sm font-semibold text-background shadow-lg shadow-gold/20 transition hover:brightness-110 sm:inline-block"
          >
            Donar
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-9 w-9 items-center justify-center border border-border-soft text-foreground md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border-soft bg-background px-6 py-4 text-sm md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`block transition-colors hover:text-foreground ${
                    isActive(link) ? "font-semibold text-gold" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
