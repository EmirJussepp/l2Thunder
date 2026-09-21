import type { Metadata } from "next";
import Link from "next/link";
import ArmorExplorer from "@/components/informacion/ArmorExplorer";
import { armorSets } from "@/lib/armaduras";

export const metadata: Metadata = {
  title: "Armaduras — Información de juego",
  description:
    "Sets de armadura de grado C, B, A y S en L2Thunder, con el nombre de cada set y los bonus que da, separados en Heavy, Light y Robe.",
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
            Los sets de cada grado, con el nombre y los bonus que dan. Elegí un grado y mirá los
            de Heavy, Light y Robe.
          </p>
        </div>

        <div className="mt-10">
          <ArmorExplorer data={armorSets} />
        </div>
      </div>
    </div>
  );
}
