import type { ReactNode } from "react";

const VARIANTS = {
  warn: "border-danger/60 bg-danger/[0.06] text-danger",
  info: "border-accent/60 bg-accent/[0.06] text-accent",
  // Para las reglas que son propias de L2Thunder y no del diseño original
  // del evento — se repite bastante en las guías de eventos, merece su
  // propio color en vez de pedir prestado el warn o el info.
  custom: "border-gold/60 bg-gold/[0.06] text-gold",
};

export default function Callout({
  title,
  children,
  variant = "warn",
}: {
  title: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
}) {
  return (
    <div className={`border-l-2 bg-surface-2/60 p-5 ${VARIANTS[variant]}`}>
      <p className="brand text-xs font-bold uppercase tracking-widest">{title}</p>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}
