import type { ReactNode } from "react";

// Una sección de la portada con un personaje a un lado y el contenido al otro. La imagen va con fondo
// transparente (WebP o PNG): se muestra con un resplandor detrás, una flotación lenta y, en los
// navegadores que lo soportan, un desplazamiento propio al bajar (CSS puro, sin JavaScript). Con "reducir
// movimiento" queda quieta. En el celular el personaje va arriba del texto. La imagen es decorativa
// (alt vacío): lo que importa se dice en el texto.
export default function CharacterScene({
  src,
  side = "left",
  children,
}: {
  src: string;
  side?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border-soft px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className={`scene-art ${side === "right" ? "lg:order-2" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" loading="lazy" decoding="async" />
        </figure>
        <div className={`mx-auto max-w-xl ${side === "right" ? "lg:order-1" : ""}`}>{children}</div>
      </div>
    </section>
  );
}
