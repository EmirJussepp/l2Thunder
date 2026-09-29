// Captura de pantalla del juego dentro de una guía. Se usa en pares o solas,
// con un pie que explica qué se ve. El marco (borde + fondo) sigue el mismo
// lenguaje visual que el resto del sitio: sin bordes redondeados.
export default function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden border border-border-soft bg-surface-2/40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
      {caption && (
        <figcaption className="border-t border-border-soft px-3 py-2 text-xs text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
