import type { Metadata } from "next";
import Link from "next/link";
import ItemExplorer from "@/components/informacion/ItemExplorer";
import { JEWEL_CATEGORIES, JEWEL_TYPES, jewelry } from "@/lib/joyas";
import { loadItemImages } from "@/lib/itemImages";

export const metadata: Metadata = {
  title: "Joyas — Información de juego",
  description:
    "Joyas de grado S y de Raid Boss en L2Thunder: collares, aros y anillos con el nombre de cada una y los bonus que da.",
};

export default function JoyasPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/informacion-de-juego"
          className="text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Información de juego
        </Link>

        <div className="mt-6 max-w-2xl">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Información de juego
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Joyas</h1>
          <p className="mt-4 text-muted">
            Elegí grado S o Raid Boss, abrí Collares, Aros o Anillos y tocá cada joya para ver sus
            bonus.
          </p>
        </div>

        <div className="mt-10">
          <ItemExplorer
            idPrefix="joyas"
            tabsLabel="Tipo de joya"
            tabs={JEWEL_CATEGORIES}
            groups={JEWEL_TYPES}
            data={jewelry}
            images={loadItemImages("joyas")}
            noun={{ one: "joya", many: "joyas", groupEmpty: "Sin joyas cargadas." }}
          />
        </div>
      </div>
    </div>
  );
}
