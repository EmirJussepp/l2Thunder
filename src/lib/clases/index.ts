import type { ClassGuide } from "./types";
import { adventurer } from "./data/adventurer";
import { arcanaLord } from "./data/arcana-lord";
import { dreadnought } from "./data/dreadnought";
import { duelist } from "./data/duelist";
import { hellKnight } from "./data/hell-knight";
import { phoenixKnight } from "./data/phoenix-knight";
import { sagittarius } from "./data/sagittarius";
import { shillienSaint } from "./data/shillien-saint";

// Orden en el que se listan las guías publicadas (el de "Elegir clase" lo define panorama.ts).
// Para sumar una clase: agregar su archivo en ./data y una línea acá.
const GUIDES = [
  duelist,
  dreadnought,
  phoenixKnight,
  hellKnight,
  adventurer,
  sagittarius,
  arcanaLord,
  shillienSaint,
];

export const CLASS_GUIDES: Record<string, ClassGuide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export const CLASS_GUIDE_SLUGS: string[] = GUIDES.map((g) => g.slug);

export function getClassGuide(slug: string): ClassGuide | undefined {
  return CLASS_GUIDES[slug];
}

// "Eva's Saint" -> "evas-saint": el mismo slug que usan las guías.
export function classSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
