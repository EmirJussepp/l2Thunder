import { findItemImage } from "@/lib/itemImages";

// El nombre de un ítem con su ícono al lado, en el mismo recuadro que usa Información de juego. Si el
// ítem no tiene imagen se ve solo el nombre. Es decorativo: el nombre va siempre, por eso el ícono no
// lleva alt. label cambia el texto que se ve (por ejemplo "Enchant Weapon S") y note suma una
// aclaración chica al lado. Solo en páginas estáticas (lee los archivos de public/ en el build).
export default function ItemLabel({
  name,
  label,
  note,
}: {
  name: string;
  label?: string;
  note?: string;
}) {
  const src = findItemImage(name);
  const text = label ?? name;
  if (!src) {
    return (
      <>
        {text}
        {note && <span className="text-muted"> {note}</span>}
      </>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 align-middle">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-soft bg-surface-2 p-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" loading="lazy" decoding="async" className="max-h-full max-w-full" />
      </span>
      <span>
        {text}
        {note && <span className="text-muted"> {note}</span>}
      </span>
    </span>
  );
}
