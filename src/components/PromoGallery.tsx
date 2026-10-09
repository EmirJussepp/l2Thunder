"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Cuatro afiches que cuentan lo esencial del server de un vistazo (rates y
// enchant, clases, PvP, beta abierta). Reemplazan a la sección de texto
// "Interlude, repensado de raíz": dicen lo mismo, así que el detalle completo
// sigue en ¿Por qué L2Thunder? (navbar y link de Características).
//
// Las imágenes traen texto adentro, por eso el alt lo repite: es lo que leen
// los lectores de pantalla y los buscadores. Si se cambia un afiche, hay que
// actualizar también su alt. Todos están recortados a 3:2 (public/promo/).
//
// Al tocar un afiche se abre ampliado en un <dialog> modal, con botón de
// cerrar, Esc, clic afuera y flechas para pasar al siguiente. Antes abría la
// imagen suelta en otra pestaña y desde el celular no había forma de volver.
const posters = [
  {
    src: "/promo/un-interlude-pensado-para-hoy.jpg",
    width: 706,
    height: 471,
    alt: "Un Interlude pensado para hoy: sistemas clásicos con una experiencia renovada. XP/SP x15, drop x10, enchant sin destrucción y NPC buffer de 2da profesión (BD / WS / PP).",
  },
  {
    src: "/promo/tu-clase-nuevas-posibilidades.jpg",
    width: 760,
    height: 507,
    alt: "Tu clase, nuevas posibilidades: clases y habilidades rediseñadas para un combate más dinámico y equilibrado. Warriors, más daño y utilidad; Healers, soporte único por clase; Daggers, invisibilidad total; Archers, mayor daño y kiteo; Mages, DPS directo y defensivos; Summoners, daño propio y control.",
  },
  {
    src: "/promo/volve-a-sentir-el-pvp.jpg",
    width: 706,
    height: 471,
    alt: "Volvé a sentir el PvP: nuevas estrategias, combates reales y zonas de conflicto. Zonas de conflicto, eventos competitivos, raids y minibosses, recompensas exclusivas.",
  },
  {
    src: "/promo/la-beta-ya-esta-abierta.jpg",
    width: 753,
    height: 502,
    alt: "La beta ya está abierta. La esencia permanece, todo evoluciona: clases rediseñadas, PvP más dinámico, raids y eventos, progresión pensada para vos.",
  },
];

const navBtn =
  "flex h-11 items-center justify-center border border-border-soft bg-surface px-4 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export default function PromoGallery() {
  const [current, setCurrent] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const isOpen = current !== null;

  // El estado manda: abre o cierra el <dialog> nativo según `current`. Todos
  // los caminos de cierre (botón, clic afuera, Esc) terminan en setCurrent(null)
  // en vez de esperar el evento "close" del navegador, así el estado nunca
  // queda desfasado de lo que se ve.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) {
      dialog.close();
      // Safari no enfoca los botones al hacer clic, así que no alcanza con
      // que el navegador devuelva el foco solo.
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Con el visor abierto la página de atrás no tiene que scrollear.
  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = previous;
    };
  }, [isOpen]);

  function open(index: number, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setCurrent(index);
  }

  function close() {
    setCurrent(null);
  }

  function step(direction: 1 | -1) {
    setCurrent((c) => (c === null ? c : (c + direction + posters.length) % posters.length));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  const poster = current === null ? null : posters[current];

  return (
    <section className="border-t border-border-soft bg-surface/40 px-6 py-24">
      <h2 className="sr-only">Qué es L2Thunder</h2>

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {posters.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-haspopup="dialog"
            title="Ampliar"
            onClick={(e) => open(i, e.currentTarget)}
            className="card-surface aspect-[3/2] cursor-zoom-in overflow-hidden rounded-none text-left transition hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes="(min-width: 896px) 424px, (min-width: 640px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Afiche ampliado"
        onCancel={(e) => {
          // Esc: lo cerramos nosotros por estado. (Si el navegador igual lo
          // cierra, por ejemplo sin interacción previa, lo recoge onClose.)
          e.preventDefault();
          close();
        }}
        onClose={() => {
          // Solo cuenta si el diálogo quedó realmente cerrado: un "close" viejo
          // que llega tarde (pestaña en segundo plano) no tiene que cerrar un
          // visor que el usuario ya volvió a abrir.
          if (!dialogRef.current?.open) close();
        }}
        onKeyDown={handleKeyDown}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 text-foreground backdrop:bg-black/85"
      >
        {poster && current !== null && (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-8"
            onClick={(e) => {
              // Un clic en el fondo (no en la imagen ni en los botones) cierra.
              if (e.target === e.currentTarget) close();
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center border border-border-soft bg-surface text-foreground transition hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-5 sm:top-5"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M4 4l12 12M16 4L4 16" strokeLinecap="square" />
              </svg>
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster.src}
              alt={poster.alt}
              width={poster.width}
              height={poster.height}
              className="max-h-[76dvh] w-auto max-w-full border border-border-soft"
            />

            <div className="flex w-full max-w-md items-center justify-between gap-3">
              <button type="button" onClick={() => step(-1)} className={navBtn}>
                ‹ Anterior
              </button>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                {current + 1} / {posters.length}
              </span>
              <button type="button" onClick={() => step(1)} className={navBtn}>
                Siguiente ›
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
