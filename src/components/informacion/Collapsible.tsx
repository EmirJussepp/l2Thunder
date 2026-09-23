import type { ReactNode } from "react";

// Panel que se despliega animando el alto (grid-template-rows 0fr -> 1fr, sin
// medir nada en JS). Cerrado queda "inert": no se puede enfocar y los lectores
// de pantalla no lo leen, aunque siga en el DOM para poder animar.
export default function Collapsible({
  open,
  id,
  labelledBy,
  children,
}: {
  open: boolean;
  id: string;
  labelledBy: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden" inert={!open}>
        {children}
      </div>
    </div>
  );
}
