import { CLASS_GUIDES } from "./index";

// Nombre de habilidad -> archivo de ícono (public/skills), sacado de las guías de clase. Sirve para
// mostrar el ícono de una habilidad nombrada en cualquier otra guía. Si dos habilidades se llaman
// igual con íconos distintos (las Armor Mastery), queda el de la primera guía publicada.
const ICON_BY_NAME = new Map<string, string>();
for (const guide of Object.values(CLASS_GUIDES)) {
  for (const tier of guide.tiers) {
    for (const skill of tier.skills) {
      if (skill.icon && !ICON_BY_NAME.has(skill.name)) ICON_BY_NAME.set(skill.name, skill.icon);
    }
  }
}

export function skillIconFor(name: string): string | undefined {
  return ICON_BY_NAME.get(name);
}
