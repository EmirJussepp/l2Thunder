import { readdirSync } from "node:fs";
import { join } from "node:path";

// Imágenes de una sección: los archivos de public/<carpeta>/ indexados por su
// nombre sin extensión (que tiene que coincidir con itemSlug del ítem). Solo se
// usa desde páginas estáticas, o sea que se lee en el build: agregar una imagen
// es soltar el archivo y redeployar. Sin imagen, el ítem se ve igual, solo con
// el nombre.
export function loadItemImages(folder: string): Record<string, string> {
  try {
    const images: Record<string, string> = {};
    for (const file of readdirSync(join(process.cwd(), "public", folder))) {
      const match = file.match(/^(.+)\.(png|webp|jpe?g|gif|avif)$/i);
      if (match) images[match[1].toLowerCase()] = `/${folder}/${file}`;
    }
    return images;
  } catch {
    return {};
  }
}
