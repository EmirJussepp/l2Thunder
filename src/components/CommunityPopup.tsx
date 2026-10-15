"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Crest from "@/components/Crest";
import { DiscordIcon, FacebookIcon } from "@/components/SocialIcons";
import { DISCORD_URL, FACEBOOK_URL } from "@/lib/social";

// Aviso de comunidad: una tarjeta que invita a Discord y a Facebook. No salta apenas se entra (taparía el video
// de la portada y el botón de "Jugar la beta", y Google penaliza en el celular los carteles que tapan la pantalla
// al llegar): aparece a los 15 segundos o cuando se baja de la primera pantalla, lo que pase primero. Se muestra
// una sola vez y se acuerda que se cerró (14 días; 60 si entraron a una red). Nunca en /donar, donde se paga.
// En pantallas anchas es un modal centrado con velo; en el celular, una tarjeta baja pegada abajo que no tapa la
// página ni bloquea el scroll.
const CLAVE = "l2thunder_comunidad_hasta";
const ESPERA_MS = 15000;
const DIAS = 24 * 60 * 60 * 1000;

function recordar(dias: number) {
  try {
    localStorage.setItem(CLAVE, String(Date.now() + dias * DIAS));
  } catch {
    // En navegación privada el almacenamiento puede fallar: en el peor caso vuelve a aparecer.
  }
}

function yaCerrado(): boolean {
  try {
    return Number(localStorage.getItem(CLAVE)) > Date.now();
  } catch {
    return false;
  }
}

export default function CommunityPopup() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  const [modal, setModal] = useState(false);
  const tarjeta = useRef<HTMLDivElement>(null);
  const volverA = useRef<HTMLElement | null>(null);
  const yaSalio = useRef(false);
  const enDonar = pathname.startsWith("/donar");

  const cerrar = useCallback((dias = 14) => {
    recordar(dias);
    setAbierto(false);
  }, []);

  // Cuándo aparece
  useEffect(() => {
    if (enDonar || yaSalio.current || yaCerrado()) return;
    let listo = false;
    const salir = () => {
      if (listo) return;
      listo = true;
      yaSalio.current = true;
      volverA.current = document.activeElement as HTMLElement | null;
      setModal(window.matchMedia("(min-width: 768px)").matches);
      setAbierto(true);
    };
    const timer = window.setTimeout(salir, ESPERA_MS);
    const alBajar = () => {
      if (window.scrollY > window.innerHeight * 0.9) salir();
    };
    window.addEventListener("scroll", alBajar, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", alBajar);
    };
  }, [enDonar]);

  // En /donar no se muestra aunque estuviera abierto
  const visible = abierto && !enDonar;

  // Teclado, foco y scroll mientras está abierto
  useEffect(() => {
    if (!visible) return;
    const caja = tarjeta.current;
    const foco = () =>
      Array.from(
        caja?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
    foco()[0]?.focus();

    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cerrar();
        return;
      }
      if (e.key !== "Tab" || !modal) return;
      const items = foco();
      if (items.length === 0) return;
      const primero = items[0];
      const ultimo = items[items.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    document.addEventListener("keydown", alTeclear);

    const html = document.documentElement;
    const antes = html.style.overflow;
    if (modal) html.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", alTeclear);
      html.style.overflow = antes;
      volverA.current?.focus?.();
    };
  }, [visible, modal, cerrar]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-end justify-center p-3 md:items-center md:p-6 ${
        modal ? "" : "pointer-events-none"
      }`}
    >
      {/* El velo solo en pantallas anchas; en el celular la página sigue a la vista y usable */}
      <div
        aria-hidden="true"
        onClick={() => cerrar()}
        className="popup-veil absolute inset-0 hidden bg-black/65 backdrop-blur-sm md:block"
      />

      <div
        ref={tarjeta}
        role="dialog"
        aria-modal={modal}
        aria-labelledby="comunidad-titulo"
        className="popup-card card-surface pointer-events-auto relative w-full max-w-md overflow-hidden rounded-none border-gold/40 p-4 pr-14 md:p-8 md:text-center"
      >
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <button
          type="button"
          onClick={() => cerrar()}
          aria-label="Cerrar"
          className="btn-icon absolute right-1 top-1 h-11 w-11 text-xl md:right-2 md:top-2"
        >
          ×
        </button>

        {/* En el celular el escudo y el título van en una fila y no hay párrafo: la tarjeta ocupa poco */}
        <div className="flex items-center gap-3 md:block">
          <Crest className="h-9 w-9 shrink-0 md:mx-auto md:h-12 md:w-12" shine />
          <div>
            <p className="brand text-[11px] font-bold uppercase tracking-widest text-accent-2 md:mt-4 md:text-xs">
              Comunidad
            </p>
            <h2 id="comunidad-titulo" className="mt-0.5 font-display text-lg font-bold md:mt-2 md:text-2xl">
              Sumate a la comunidad
            </h2>
          </div>
        </div>

        <p className="mx-auto mt-3 hidden max-w-xs text-sm text-muted md:block">
          Novedades de la apertura, soporte y la gente con la que vas a jugar: todo pasa ahí
          primero.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:flex md:flex-col md:gap-3">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cerrar(60)}
            className="btn btn-primary btn-shine btn-sm w-full md:text-base"
          >
            <DiscordIcon />
            <span className="md:hidden">Discord</span>
            <span className="hidden md:inline">Unirme al Discord</span>
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cerrar(60)}
            className="btn btn-ghost btn-sm w-full md:text-base"
          >
            <FacebookIcon />
            <span className="md:hidden">Facebook</span>
            <span className="hidden md:inline">Seguinos en Facebook</span>
          </a>
          {/* Contenedor aparte: .btn-quiet define su propio display y pisaría al "hidden" de Tailwind */}
          <div className="hidden md:flex md:justify-center">
            <button type="button" onClick={() => cerrar()} className="btn-quiet">
              Ahora no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
