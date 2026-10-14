import type { Stat } from "@/components/guias/StatGrid";

// Las cifras de la apertura escalonada. Las usan la franja de la home y la página
// /apertura-escalonada: si cambia el tope o se abre un épico, se actualiza acá y en los dos lugares.
// Son seis (y no cinco) para que la grilla de 2 columnas del celular no deje una celda vacía.
export const OPENING_STATS: Stat[] = [
  { value: "75", label: "Nivel máximo", sub: "por ahora" },
  { value: "2.º", label: "Cambio de clase", sub: "el tercero, cerrado" },
  { value: "A", label: "Grado de equipo", sub: "el S, cerrado" },
  { value: "0 / 8", label: "Raids épicos", sub: "se abren de a uno" },
  { value: "Sí", label: "Subclase", sub: "a nivel 75" },
  { value: "8", label: "Nivel de clan", sub: "el máximo del servidor" },
];

// Fecha del estado que describe la página: va a la vista para que nadie lea reglas viejas.
export const OPENING_AS_OF = "14 de octubre de 2026";
