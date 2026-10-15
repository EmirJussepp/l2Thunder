import { findItemImage } from "@/lib/itemImages";

// El nombre de un ítem con su ícono al lado, en el mismo recuadro que usa Información de juego. Si el
// ítem no tiene imagen se ve solo el nombre. Es decorativo: el nombre va siempre, por eso el ícono no
// lleva alt. Solo en páginas estáticas (lee los archivos de public/ en el build).
export default function ItemLabel({ name }: { name: string }) {
  const src = findItemImage(name);
  if (!src) return <>{name}</>;
  return (
    <span className="inline-flex items-center gap-2 align-middle">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-soft bg-surface-2 p-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" loading="lazy" decoding="async" className="max-h-full max-w-full" />
      </span>
      <span>{name}</span>
    </span>
  );
}
