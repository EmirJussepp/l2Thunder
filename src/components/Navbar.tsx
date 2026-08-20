"use client";

import { useState } from "react";
import Link from "next/link";
import Crest from "./Crest";

const links = [
  { href: "/#rates", label: "Rates" },
  { href: "/#features", label: "Características" },
  { href: "/#jugar", label: "Cómo jugar" },
  { href: "/donar", label: "Donar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Crest className="h-8 w-8" />
          <span className="brand text-xl font-bold text-glow">
            <small className="text-accent-2">L2</small>THUNDER
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
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
        <nav className="border-t border-border-soft bg-background px-6 py-4 text-sm text-muted md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block transition-colors hover:text-foreground"
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
