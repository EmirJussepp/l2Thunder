import type { ReactNode } from "react";

export default function GuideStep({
  n,
  title,
  children,
  last = false,
}: {
  n: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div className="relative flex gap-5 sm:gap-6">
      {!last && (
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-[52px] bottom-[-56px] w-px bg-border-soft sm:left-[23px]"
        />
      )}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/60 font-display text-base font-black text-gold sm:h-12 sm:w-12 sm:text-lg">
        {n}
      </div>
      <div className="min-w-0 flex-1 pb-14">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
