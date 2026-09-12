import type { ReactNode } from "react";

const VARIANTS = {
  warn: "border-danger/60 bg-danger/[0.06] text-danger",
  info: "border-accent/60 bg-accent/[0.06] text-accent",
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
