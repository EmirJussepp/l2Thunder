import type { Metadata } from "next";
import Link from "next/link";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import ArmorExplorer from "@/components/informacion/ArmorExplorer";
import { armorSets } from "@/lib/armaduras";

export const metadata: Metadata = {
  title: "Armaduras — Información de juego",
  description:
    "Sets de armadura de grado B, A y S en L2Thunder, con el nombre de cada set y los bonus que da, separados en Heavy, Light y Robe.",
};

// Imágenes de cada set: los archivos de public/armaduras/ cuyo nombre (sin
// extensión) coincide con armorSlug(nombre del set). La página es estática, así
// que esto se lee en el build: agregar una imagen es soltar el archivo y
// redeployar. Sin imagen, el set se muestra igual, solo con el nombre.
function loadArmorImages(): Record<string, string> {
  try {
    const images: Record<string, string> = {};
    for (const file of readdirSync(join(process.cwd(), "public", "armaduras"))) {
      const match = file.match(/^(.+)\.(png|webp|jpe?g|gif|avif)$/i);
      if (match) images[match[1].toLowerCase()] = `/armaduras/${file}`;
    }
    return images;
  } catch {
    return {};
  }
}

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
          <ArmorExplorer data={armorSets} images={loadArmorImages()} />
        </div>
      </div>
    </div>
  );
}
