import SkillIcon from "@/components/clases/SkillIcon";
import { skillIconFor } from "@/lib/clases/skillIcons";

// El nombre de una habilidad con su ícono al lado. Si el texto nombra varias ("Tribunal y Judgment")
// se muestran los íconos de las que existen, una al lado de la otra. Si ninguna tiene ícono, queda
// solo el texto: no se inventa nada. Solo para páginas estáticas.
export default function SkillLabel({ name }: { name: string }) {
  const icons = name
    .split(/ y |, /)
    .map((part) => skillIconFor(part.trim()))
    .filter((icon): icon is string => Boolean(icon))
    .slice(0, 3);
  if (icons.length === 0) return <>{name}</>;
  return (
    <span className="flex items-center gap-3">
      <span className="flex shrink-0 gap-1.5">
        {icons.map((icon) => (
          <SkillIcon key={icon} icon={icon} />
        ))}
      </span>
      <span>{name}</span>
    </span>
  );
}
