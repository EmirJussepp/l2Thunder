import Image from "next/image";
import { POSTERS, type PosterId } from "@/lib/posters";

// Franja con un afiche grande, para intercalar entre las secciones de la home.
// Se sirve sin optimizar a propósito: los afiches son texto sobre arte y el
// recompresor de Next les saca nitidez; el JPG ya viene a calidad 92 y pesa
// ~100 KB. El ancho máximo (896 px) no pasa de ~1,27× el tamaño real de la
// imagen (706-760 px), que es lo más que se puede ampliar sin que se note.
export default function PosterBand({ id }: { id: PosterId }) {
  const p = POSTERS[id];

  return (
    <section className="border-t border-border-soft px-6 py-12 sm:py-16">
      <figure className="card-surface mx-auto aspect-[3/2] max-w-4xl overflow-hidden rounded-none">
        <Image
          src={p.src}
          alt={p.alt}
          width={p.width}
          height={p.height}
          unoptimized
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  );
}
