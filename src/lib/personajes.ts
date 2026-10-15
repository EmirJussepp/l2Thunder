// Los personajes de la portada (public/personajes/<id>.webp): WebP con fondo transparente, sacados de las
// ilustraciones de cada raza. w/h son las medidas reales (evitan que la página salte al cargar); k es la
// altura relativa en la fila de las cinco razas (el enano es más bajo).
export const PERSONAJES = {
  humano: { src: "/personajes/humano.webp", w: 377, h: 1141, nombre: "Humano", k: 1 },
  elfo: { src: "/personajes/elfo.webp", w: 327, h: 976, nombre: "Elfo", k: 1.02 },
  "elfo-oscuro": { src: "/personajes/elfo-oscuro.webp", w: 329, h: 993, nombre: "Elfo oscuro", k: 1.02 },
  orco: { src: "/personajes/orco.webp", w: 491, h: 987, nombre: "Orco", k: 1.06 },
  enano: { src: "/personajes/enano.webp", w: 471, h: 991, nombre: "Enano", k: 0.78 },
} as const;

export type PersonajeId = keyof typeof PERSONAJES;
