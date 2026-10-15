import { readdirSync } from "node:fs";
import { join } from "node:path";
import { itemSlug } from "@/lib/items";

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

// La imagen de un ítem por su nombre, buscándola en public/items (los íconos originales del cliente) y
// en las secciones de Información de juego (armaduras, joyas, SA). Sirve para mostrar el ícono de un ítem nombrado en una guía sin repetir
// el archivo. Devuelve undefined si no hay imagen: el nombre se ve igual, sin ícono.
const SECTIONS = ["items", "armaduras", "joyas", "sa"] as const;

export function findItemImage(name: string): string | undefined {
  const slug = itemSlug(name);
  for (const folder of SECTIONS) {
    const found = loadItemImages(folder)[slug];
    if (found) return found;
  }
  return undefined;
}
