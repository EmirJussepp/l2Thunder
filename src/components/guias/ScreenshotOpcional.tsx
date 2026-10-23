import { existsSync } from "node:fs";
import { join } from "node:path";
import Screenshot from "@/components/guias/Screenshot";

// Una captura que se muestra solo si el archivo existe en public/<carpeta>/<nombre>.<ext>. Sirve para dejar
// el lugar de cada captura ya armado y que la guía salga completa en cuanto se suelta la imagen (y se
// vuelve a publicar), sin tocar el código; mientras tanto no se ve nada, ni un cuadro vacío.
// Solo en páginas estáticas: lee public/ en el build, igual que findItemImage.
const EXTENSIONES = ["webp", "png", "jpg", "jpeg"];

export default function ScreenshotOpcional({
  carpeta,
  nombre,
  alt,
  caption,
}: {
  carpeta: string;
  nombre: string;
  alt: string;
  caption?: string;
}) {
  const ext = EXTENSIONES.find((e) => existsSync(join(process.cwd(), "public", carpeta, `${nombre}.${e}`)));
  if (!ext) return null;
  return <Screenshot src={`/${carpeta}/${nombre}.${ext}`} alt={alt} caption={caption} />;
}
