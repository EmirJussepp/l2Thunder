import type { Metadata } from "next";
import Link from "next/link";
import ItemExplorer from "@/components/informacion/ItemExplorer";
import { ARMOR_GRADES, ARMOR_TYPES, armorSets } from "@/lib/armaduras";
import { loadItemImages } from "@/lib/itemImages";

export const metadata: Metadata = {
  title: "Armaduras — Información de juego",
  description:
    "Sets de armadura de grado B, A y S en L2Thunder, con el nombre de cada set y los bonus que da, separados en Heavy, Light y Robe.",
};

export default function ArmadurasPage() {
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
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Armaduras</h1>
          <p className="mt-4 text-muted">
            Elegí un grado, abrí Heavy, Light o Robe y tocá cada set para ver sus bonus.
          </p>
        </div>

        <div className="mt-10">
          <ItemExplorer
            idPrefix="armor"
            tabsLabel="Grado de armadura"
            tabs={ARMOR_GRADES.map((g) => ({
              id: g,
              label: `Grado ${g}`,
              emptyText: `Los sets de grado ${g} se están cargando. Pronto vas a ver acá el nombre de cada uno y los bonus que dan.`,
            }))}
            groups={ARMOR_TYPES}
            data={armorSets}
            images={loadItemImages("armaduras")}
            noun={{ one: "set", many: "sets", groupEmpty: "Sin sets cargados." }}
          />
        </div>
      </div>
    </div>
  );
}
