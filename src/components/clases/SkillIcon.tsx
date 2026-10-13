// Ícono de una habilidad (el PNG de 32 px de public/skills) en el mismo marco que los íconos de
// ítems. Es decorativo: el nombre de la habilidad va siempre al lado, por eso no lleva alt.
export default function SkillIcon({ icon, className = "" }: { icon: string; className?: string }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center border border-border-soft bg-surface-2 p-1 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/skills/${icon}.png`}
        alt=""
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className="h-8 w-8"
      />
    </span>
  );
}
