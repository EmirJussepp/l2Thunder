// Guías de clase: cada clase de tercera es un archivo en ./data (el texto que escribe el
// equipo, ya parseado) y se registra en ./index.ts. La página /guias/clases/[slug] las
// dibuja todas igual, así que sumar una clase nueva es sumar un archivo de datos.

// passive = Pasivo, active = Activo, toggle = Alternable (se prende y se apaga).
export type SkillKind = "passive" | "active" | "toggle";

export type ClassSkill = {
  name: string;
  kind: SkillKind;
  // Nivel de personaje al que se aprende.
  learn: number;
  // Nivel de personaje hasta el que sigue subiendo de nivel (si es que sube).
  max?: number;
  // Funciona distinto del Interlude original.
  custom?: boolean;
  desc: string;
};

// Un tramo es lo que enseña cada clase del camino (Human Fighter, Rogue, ...). Ojo: el
// rango de niveles es el de esa clase, y hay habilidades del tramo base que se aprenden
// más tarde (Expertise a nivel 20, Divine Inspiration a 52).
export type ClassTier = {
  id: string;
  name: string;
  from: number;
  to: number;
  blurb: string;
  skills: ClassSkill[];
};

export type ClassFact = { label: string; value: string };

export type ClassGuide = {
  slug: string;
  name: string;
  subtitle: string;
  intro: string;
  // Camino, Armadura, Arma, Habilidades, Fuerte en, Floja en (en ese orden).
  facts: ClassFact[];
  notes: string[];
  tiers: ClassTier[];
  footnote: string;
};
