import type { ClassGuide } from "./types";
import { adventurer } from "./data/adventurer";
import { arcanaLord } from "./data/arcana-lord";
import { archmage } from "./data/archmage";
import { cardinal } from "./data/cardinal";
import { dominator } from "./data/dominator";
import { doomcryer } from "./data/doomcryer";
import { dreadnought } from "./data/dreadnought";
import { duelist } from "./data/duelist";
import { elementalMaster } from "./data/elemental-master";
import { evasSaint } from "./data/evas-saint";
import { evasTemplar } from "./data/evas-templar";
import { fortuneSeeker } from "./data/fortune-seeker";
import { ghostHunter } from "./data/ghost-hunter";
import { ghostSentinel } from "./data/ghost-sentinel";
import { grandKhavatari } from "./data/grand-khavatari";
import { hellKnight } from "./data/hell-knight";
import { hierophant } from "./data/hierophant";
import { maestro } from "./data/maestro";
import { moonlightSentinel } from "./data/moonlight-sentinel";
import { mysticMuse } from "./data/mystic-muse";
import { phoenixKnight } from "./data/phoenix-knight";
import { sagittarius } from "./data/sagittarius";
import { shillienSaint } from "./data/shillien-saint";
import { shillienTemplar } from "./data/shillien-templar";
import { soultaker } from "./data/soultaker";
import { spectralDancer } from "./data/spectral-dancer";
import { spectralMaster } from "./data/spectral-master";
import { stormScreamer } from "./data/storm-screamer";
import { swordmuse } from "./data/swordmuse";
import { titan } from "./data/titan";
import { windRider } from "./data/wind-rider";

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
  archmage,
  soultaker,
  cardinal,
  hierophant,
  shillienSaint,
  // Elfo
  elementalMaster,
  evasSaint,
  evasTemplar,
  moonlightSentinel,
  mysticMuse,
  swordmuse,
  windRider,
  // Elfo Oscuro
  ghostHunter,
  ghostSentinel,
  shillienTemplar,
  spectralDancer,
  spectralMaster,
  stormScreamer,
  // Orco
  dominator,
  doomcryer,
  grandKhavatari,
  titan,
  // Enano
  fortuneSeeker,
  maestro,
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
