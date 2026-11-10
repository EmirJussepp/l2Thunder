"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import type { MotivoId, MotivoVista } from "@/lib/porque-elegir";

// El carrusel "Por qué elegir L2Thunder": rombos en círculo (el del centro es el elegido) y debajo el texto de la
// razón elegida. Avanza solo cada ~7 s (el tiempo lo marca la barrita de abajo: su animación CSS termina y recién
// ahí pasa al siguiente, así que pausar la barra pausa el avance), se frena si el mouse o el teclado están encima,
// si la sección no se ve o si el visitante lo pausa, y no avanza solo con "reducir movimiento". Es un grupo de
// pestañas accesible: flechas del teclado, Inicio/Fin, y en el celular se desliza con el dedo.

const EMBLEMAS: Record<MotivoId, ReactNode> = {
  // Rayo: el de la marca.
  ritmo: <path d="M37 5 15 37h14l-3 22 23-33H34z" />,
  // Dos espadas cruzadas.
  clases: (
    <>
      <path d="M17 47 49 15M13 41l10 10M16 48l-5 5" />
      <path d="M47 47 15 15M51 41 41 51M48 48l5 5" />
    </>
  ),
  // Escudo con cruz.
  equipo: (
    <>
      <path d="M32 6 54 14v18c0 14-10 22-22 26C20 54 10 46 10 32V14z" />
      <path d="M32 18v26M20 30h24" />
    </>
  ),
  // Gema tallada.
  enchant: (
    <>
      <path d="M20 14h24l12 14-24 28L8 28z" />
      <path d="M8 28h48M20 14l6 14 6 28 6-28 6-14M26 28l6-14 6 14" />
    </>
  ),
  // Frasco de poción.
  comodidad: (
    <>
      <path d="M26 8h12M28 8v16L14 50c-2 4 0 8 4 8h28c4 0 6-4 4-8L36 24V8" />
      <path d="M20 42h24" />
      <circle cx="30" cy="48" r="1.6" />
      <circle cx="37" cy="46" r="1.2" />
    </>
  ),
  // Corona: los jefes.
  contenido: (
    <>
      <path d="M10 48 8 20l14 12 10-18 10 18 14-12-2 28z" />
      <path d="M10 55h44" />
    </>
  ),
  // Reloj de arena: por etapas.
  apertura: (
    <>
      <path d="M16 8h32M16 56h32" />
      <path d="M18 8c0 18 12 20 14 24 2-4 14-6 14-24M18 56c0-18 12-20 14-24 2 4 14 6 14 24" />
    </>
  ),
  // Balanza: apoyar sin comprar ventaja.
  fundadores: (
    <>
      <path d="M32 8v46M20 54h24M12 18h40" />
      <path d="M12 18 5 36M12 18l7 18M52 18l-7 18M52 18l7 18" />
      <path d="M5 36c0 8 14 8 14 0zM45 36c0 8 14 8 14 0z" />
    </>
  ),
};

function Emblema({ id }: { id: MotivoId }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="why-emblem"
      aria-hidden="true"
    >
      {EMBLEMAS[id]}
    </svg>
  );
}

// Posición de cada rombo según su distancia al elegido: el elegido al centro y grande, los vecinos más chicos,
// más bajos y más apagados; de la tercera posición en adelante no se ven (entran y salen por los costados).
const PASOS = [
  { x: 0, y: 0, s: 1, op: 1 },
  { x: 12.5, y: 1.2, s: 0.7, op: 0.78 },
  { x: 21, y: 2.4, s: 0.5, op: 0.42 },
  { x: 26, y: 3.2, s: 0.34, op: 0 },
  { x: 28, y: 3.6, s: 0.3, op: 0 },
];

export default function WhyChooseClient({ motivos }: { motivos: MotivoVista[] }) {
  const n = motivos.length;
  const uid = useId();
  const [activo, setActivo] = useState(0);
  const [encima, setEncima] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pausadoPorMi, setPausadoPorMi] = useState(false);
  const raiz = useRef<HTMLElement>(null);
  const pestanas = useRef<(HTMLButtonElement | null)[]>([]);
  const toque = useRef<{ x: number; y: number } | null>(null);

  // Solo avanza solo mientras la sección se ve.
  useEffect(() => {
    const el = raiz.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pausado = encima || !visible || pausadoPorMi;

  function ir(i: number, enfocar = false) {
    const destino = ((i % n) + n) % n;
    setActivo(destino);
    if (enfocar) pestanas.current[destino]?.focus();
  }

  function teclas(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      ir(activo + 1, true);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      ir(activo - 1, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      ir(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      ir(n - 1, true);
    }
  }

  const mitad = Math.floor(n / 2);
  const m = motivos[activo];

  return (
    <section
      ref={raiz}
      id="por-que-elegir"
      aria-labelledby={`${uid}-titulo`}
      className="why relative isolate overflow-hidden border-t border-border-soft px-6 py-20 sm:py-28"
      data-pausado={pausado}
    >
      <div className="why-bg" aria-hidden="true" />

      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2 sm:text-sm">
            Por qué elegir
          </p>
          <h2
            id={`${uid}-titulo`}
            className="brand mt-3 text-4xl font-black text-gold text-glow sm:text-6xl"
          >
            L2 Thunder
          </h2>
        </header>

        <div
          onMouseEnter={() => setEncima(true)}
          onMouseLeave={() => setEncima(false)}
          onFocus={() => setEncima(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setEncima(false);
          }}
        >
          <div
            className="why-stage"
            onTouchStart={(e) => {
              const t = e.touches[0];
              toque.current = { x: t.clientX, y: t.clientY };
            }}
            onTouchEnd={(e) => {
              const ini = toque.current;
              toque.current = null;
              if (!ini) return;
              const t = e.changedTouches[0];
              const dx = t.clientX - ini.x;
              const dy = t.clientY - ini.y;
              if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) ir(activo + (dx < 0 ? 1 : -1));
            }}
          >
            <button
              type="button"
              className="why-arrow why-arrow-prev"
              aria-label="Razón anterior"
              onClick={() => ir(activo - 1)}
            >
              <svg viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M34 6 10 32l24 26" strokeLinecap="square" />
                <path d="M44 32H18" strokeLinecap="square" opacity="0.6" />
              </svg>
            </button>
            <button
              type="button"
              className="why-arrow why-arrow-next"
              aria-label="Razón siguiente"
              onClick={() => ir(activo + 1)}
            >
              <svg viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m14 6 24 26-24 26" strokeLinecap="square" />
                <path d="M4 32h26" strokeLinecap="square" opacity="0.6" />
              </svg>
            </button>

            <div className="why-tablist" role="tablist" aria-label="Por qué elegir L2Thunder" onKeyDown={teclas}>
              {motivos.map((mo, i) => {
                const o = ((i - activo + n + mitad) % n) - mitad;
                const p = PASOS[Math.min(Math.abs(o), PASOS.length - 1)];
                const sel = i === activo;
                return (
                  <button
                    key={mo.id}
                    ref={(el) => {
                      pestanas.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`${uid}-tab-${mo.id}`}
                    aria-selected={sel}
                    aria-controls={`${uid}-panel`}
                    tabIndex={sel ? 0 : -1}
                    className="why-item"
                    data-lejos={Math.abs(o) > 2}
                    data-d={Math.abs(o)}
                    style={
                      {
                        "--x": `${o < 0 ? -p.x : p.x}rem`,
                        "--y": `${p.y}rem`,
                        "--s": p.s,
                        "--op": p.op,
                        "--z": 10 - Math.abs(o),
                      } as CSSProperties
                    }
                    onClick={() => ir(i)}
                  >
                    <span className="why-diamond">
                      <span className="why-ring">
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="why-frame">
                        <span className="why-inner">
                          {mo.imagen ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={mo.imagen} alt="" loading="lazy" decoding="async" />
                          ) : (
                            <Emblema id={mo.id} />
                          )}
                        </span>
                      </span>
                    </span>
                    <span className="why-cap">{mo.titulo}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={m.id}
            id={`${uid}-panel`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${m.id}`}
            className="why-panel"
          >
            <h3 className="why-title">{m.encabezado}</h3>
            <p className="why-text">{m.texto}</p>
            <ul className="why-chips">
              {m.datos.map((d) => (
                <li key={d} className="why-chip">
                  {d}
                </li>
              ))}
            </ul>
            <Link href={m.href} className="btn btn-primary btn-arrow mt-8">
              {m.cta}
            </Link>
          </div>

          <div className="why-timer">
            <div className="why-progress" aria-hidden="true">
              <span key={activo} onAnimationEnd={() => ir(activo + 1)} />
            </div>
            <button
              type="button"
              className="why-pause"
              aria-pressed={pausadoPorMi}
              aria-label={pausadoPorMi ? "Reanudar el avance automático" : "Pausar el avance automático"}
              onClick={() => setPausadoPorMi((v) => !v)}
            >
              {pausadoPorMi ? (
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
