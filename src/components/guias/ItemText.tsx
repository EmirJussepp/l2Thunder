import ItemLabel from "@/components/guias/ItemLabel";
import { ITEMS_CON_ICONO } from "@/lib/itemNames";

// Un texto en el que los nombres de ítems con ícono (ver itemNames.ts) se muestran con su imagen al
// lado; el resto queda como texto. Para celdas de tabla y listas, no para párrafos corridos (el recuadro
// del ícono agranda la línea). Primero los nombres más largos, para que "Adventurer's Box: Cradle of
// Creation" no se corte en "Cradle of Creation".
const NOMBRES = [...ITEMS_CON_ICONO].sort((a, b) => b.length - a.length);
const RE = new RegExp(`(${NOMBRES.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);

export default function ItemText({ text }: { text: string }) {
  const parts = text.split(RE);
  return <>{parts.map((p, i) => (i % 2 === 1 ? <ItemLabel key={i} name={p} /> : p))}</>;
}
