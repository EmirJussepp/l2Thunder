import Link from "next/link";
import SkillIcon from "@/components/clases/SkillIcon";
import { classSlug, getClassGuide } from "@/lib/clases";
import type { PanoramaClass } from "@/lib/clases/panorama";

// La tarjeta de "Elegir clase": nombre en Cinzel dorado oscuro, rol y arma en mono celeste,
// y en una línea lo fuerte y lo flojo. Es el estilo de la hoja de clases del equipo; la
// usan la página /guias/clases y la sección de clases de la home.
// icons: archivos de ícono (public/skills) para una tira de habilidades bajo el rol.
// cta: agrega "Ver guía →" al pie (la página de clases no lo lleva; la home sí).
export default function ClassCard({
  c,
  icons,
  cta = false,
}: {
  c: PanoramaClass;
  icons?: string[];
  cta?: boolean;
}) {
  const slug = classSlug(c.name);
  const hasGuide = Boolean(getClassGuide(slug));
  // Las clases que todavía no tienen su panorama van solo con el nombre.
  const hasDetails = Boolean(c.role && c.weapon && c.strong && c.weak);
  // Algunas clases se llaman igual que su arma (Duelist: espadas dobles): no repetirlo.
  const roleLine = c.role === c.weapon ? c.weapon : `${c.role} · ${c.weapon}`;

  const body = (
    <>
      <h3
        className={`font-display text-[19px] font-bold leading-tight tracking-[0.04em] ${
          hasGuide
            ? "text-accent-2 underline decoration-accent-2/40 underline-offset-4 group-hover:text-gold group-hover:decoration-gold"
            : "text-muted"
        }`}
      >
        {c.name}
      </h3>
      {hasDetails && (
        <p className="mt-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-accent">
          {roleLine}
        </p>
      )}
      {icons && icons.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {icons.map((icon, i) => (
            <SkillIcon key={`${icon}-${i}`} icon={icon} />
          ))}
        </div>
      )}
      {hasDetails && (
        <div className="mt-2 text-[15.5px] leading-[1.62] text-muted">
          <p>
            <strong className="font-semibold text-foreground">Fuerte:</strong> {c.strong}
          </p>
          <p>
            <strong className="font-semibold text-foreground">Floja:</strong> {c.weak}
          </p>
        </div>
      )}
      {!hasGuide && (
        <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-muted">
          Guía próximamente
        </p>
      )}
      {hasGuide && cta && (
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
          Ver guía →
        </span>
      )}
    </>
  );

  const box = "rounded-none border border-border-soft bg-surface px-[18px] py-4";

  if (!hasGuide) return <div className={box}>{body}</div>;
  return (
    <Link href={`/guias/clases/${slug}`} className={`${box} group block transition hover:border-accent/50`}>
      {body}
    </Link>
  );
}
