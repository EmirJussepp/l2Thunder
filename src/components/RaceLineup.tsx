import { PERSONAJES, type PersonajeId } from "@/lib/personajes";

// Las cinco razas juntas, para la sección de clases. Cada una flota a su ritmo; el enano es más bajo.
// En el celular es una tira que se desliza de costado.
const ORDEN: PersonajeId[] = ["orco", "elfo-oscuro", "humano", "elfo", "enano"];

export default function RaceLineup() {
  return (
    <div className="scene-lineup" role="list" aria-label="Las cinco razas">
      {ORDEN.map((id, i) => {
        const p = PERSONAJES[id];
        return (
          <figure
            key={id}
            role="listitem"
            className="scene-mini"
            style={{ ["--k" as string]: p.k, animationDelay: `${i * -1.4}s` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} width={p.w} height={p.h} alt="" loading="lazy" decoding="async" />
            <figcaption>{p.nombre}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
