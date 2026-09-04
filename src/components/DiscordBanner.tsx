"use client";

import { useEffect, useState } from "react";

const DISCORD_URL = "https://discord.gg/6W6EJjXSa";
const DISMISSED_KEY = "l2thunder_discord_banner_dismissed";

export default function DiscordBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISSED_KEY) === "1";
    } catch {
      // localStorage/sessionStorage puede fallar en navegación privada — no bloquear por eso.
    }
    if (dismissed) return;

    const timer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // idem — si falla, en el peor caso vuelve a aparecer, no rompe nada.
    }
    setTimeout(() => setMounted(false), 300);
  }

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 sm:inset-x-auto sm:right-6 sm:w-80 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="card-surface relative rounded-none border-accent-2/40 p-5">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center text-muted transition hover:text-foreground"
        >
          ×
        </button>

        <p className="pr-5 font-display text-sm font-bold text-foreground">
          Sumate al Discord
        </p>
        <p className="mt-1 text-xs text-muted">
          Novedades, soporte y la comunidad de L2Thunder — todo pasa ahí primero.
        </p>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="mt-4 block rounded-none bg-gradient-to-r from-gold to-accent-2 px-4 py-2 text-center text-sm font-semibold text-background transition hover:brightness-110"
        >
          Unirme al Discord
        </a>
      </div>
    </div>
  );
}
