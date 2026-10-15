import ItemLabel from "@/components/guias/ItemLabel";

// Una fila de ítems con su ícono: el botín de un jefe, el premio de un canje. Se acomoda en varias
// líneas en el celular.
export default function ItemList({
  items,
}: {
  items: { name: string; label?: string; note?: string }[];
}) {
  return (
    <ul className="mt-3 flex list-none flex-wrap gap-x-6 gap-y-3 pl-0 text-sm">
      {items.map((i) => (
        <li key={i.name}>
          <ItemLabel name={i.name} label={i.label} note={i.note} />
        </li>
      ))}
    </ul>
  );
}
