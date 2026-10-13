import type { Metadata } from "next";
import ClassCard from "@/components/clases/ClassCard";
import { PANORAMA, PANORAMA_INTRO } from "@/lib/clases/panorama";

export const metadata: Metadata = {
  title: "Elegir clase — Guías de clase",
  description:
    "Qué hace cada clase de tercera en L2Thunder, en una línea: rol, arma, en qué es fuerte y en qué es floja, con la guía completa de habilidades de cada una.",
};

// El estilo de esta página es el de la hoja de clases del equipo: encabezado con el rótulo y su
// filete que se desvanece, título dorado, una sola línea bajo la portada y los grupos de raza
// uno detrás del otro, sin separadores.
export default function ElegirClasePage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-[860px]">
        <header className="mb-14 border-b border-border-soft pb-12">
          <p className="mb-[18px] flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-accent-2 after:h-px after:flex-1 after:bg-gradient-to-r after:from-accent-2 after:to-transparent after:content-['']">
            L2 Thunder · Guías de clase
          </p>
          <h1 className="font-display text-[clamp(2.375rem,7vw,3.75rem)] font-bold leading-[1.04] text-gold [text-wrap:balance]">
            Elegir clase
          </h1>
          <p className="mb-[30px] mt-1.5 font-display text-[clamp(1.0625rem,2.6vw,1.3125rem)] font-medium text-muted">
            Qué hace cada una, en una línea
          </p>
          <p className="max-w-[62ch] text-[19px] leading-[1.62] text-foreground">{PANORAMA_INTRO}</p>
        </header>

        {PANORAMA.map((group) => (
          <section key={group.race}>
            <h2 className="mb-3.5 mt-1 font-display text-[clamp(1.4375rem,3.4vw,1.8125rem)] font-bold leading-[1.2] text-foreground [text-wrap:balance]">
              <span aria-hidden="true">✦ </span>
              {group.race}
            </h2>
            <div className="mb-2 mt-[26px] grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[14px]">
              {group.classes.map((c) => (
                <ClassCard key={c.name} c={c} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
