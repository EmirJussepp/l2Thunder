import type { ReactNode } from "react";
import SceneArt from "@/components/SceneArt";
import { PERSONAJES, type PersonajeId } from "@/lib/personajes";

// Una sección de la portada con un personaje a un lado y el contenido al otro. La imagen es un WebP con
// fondo transparente: se muestra con un resplandor y un marco en rombo detrás, una flotación lenta, un
// desplazamiento propio al bajar (CSS puro) y un movimiento corto que acompaña al mouse. Con "reducir
// movimiento" queda quieta. En el celular el personaje va arriba del texto. La imagen es decorativa (alt
// vacío): lo que importa se dice en el texto.
export default function CharacterScene({
  personaje,
  side = "left",
  id,
  band = false,
  children,
}: {
  personaje: PersonajeId;
  side?: "left" | "right";
  id?: string;
  band?: boolean;
  children: ReactNode;
}) {
  const p = PERSONAJES[personaje];
  const right = side === "right";
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t border-border-soft px-6 py-20 sm:py-28 ${
        band ? "bg-surface/40" : ""
      }`}
    >
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 lg:gap-16 ${
          right ? "lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]" : "lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
        }`}
      >
        <SceneArt className={`scene-art ${right ? "lg:order-2" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} width={p.w} height={p.h} alt="" loading="lazy" decoding="async" />
        </SceneArt>
        <div className={`min-w-0 ${right ? "lg:order-1" : ""}`}>{children}</div>
      </div>
    </section>
  );
}
