// Un ítem de las secciones de Información de juego: su nombre y una línea por
// cada dato o bonus. Ejemplo:
//   { name: "Nombre del ítem", bonuses: ["P. Def. +5%", "Vel. de ataque +3%"] }
export type ItemEntry = { name: string; bonuses: string[] };

// Nombre de archivo esperado para la imagen de un ítem, sin extensión:
// "Zubei's Breastplate" -> "zubeis-breastplate". Cada sección busca ese nombre
// en su carpeta de public/ (ver loadItemImages), así que agregar una imagen es
// soltar el archivo ahí y redeployar, sin tocar los datos.
export function itemSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
