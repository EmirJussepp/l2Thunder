"use client";

import { useState } from "react";
import SkillIcon from "@/components/clases/SkillIcon";
import Collapsible from "@/components/informacion/Collapsible";
import type { ClassSkill, ClassTier, SkillKind } from "@/lib/clases/types";

// El árbol de habilidades de una clase: un tramo desplegable por cada clase del camino, con
// sus habilidades en orden de aprendizaje, y filtros arriba para ver solo las activas, las
// pasivas o las que funcionan distinto del Interlude original. Todo el texto está siempre en
// el HTML (los tramos cerrados quedan inert), así que se lee y se indexa aunque estén plegados.

type FilterId = "all" | "active" | "passive" | "custom";

const FILTERS: { id: FilterId; label: string; test: (s: ClassSkill) => boolean }[] = [
  { id: "all", label: "Todas", test: () => true },
  { id: "active", label: "Activas", test: (s) => s.kind !== "passive" },
  { id: "passive", label: "Pasivas", test: (s) => s.kind === "passive" },
  { id: "custom", label: "Propias de L2Thunder", test: (s) => Boolean(s.custom) },
];

const KIND_LABEL: Record<SkillKind, string> = {
  passive: "Pasivo",
  active: "Activo",
  toggle: "Alternable",
};

const BADGE =
  "inline-flex items-center border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="square" />
    </svg>
  );
}

function SkillRow({ skill }: { skill: ClassSkill }) {
  return (
    <li className="flex gap-3 border-b border-border-soft px-4 py-4 last:border-b-0 sm:gap-4 sm:px-5">
      {skill.icon && <SkillIcon icon={skill.icon} className="mt-0.5" />}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="font-display text-sm font-bold text-gold sm:text-base">{skill.name}</h3>
          <span className={`${BADGE} border-border-soft text-muted`}>{KIND_LABEL[skill.kind]}</span>
          {skill.custom && (
            <span className={`${BADGE} border-gold/60 bg-gold/[0.06] text-gold`}>
              Propio de L2Thunder
            </span>
          )}
        </div>
        <p className="mt-1.5 text-xs text-muted">
          Se aprende a nivel {skill.learn}
          {skill.max !== undefined && <> · sube hasta nivel {skill.max}</>}
        </p>
        <p className="mt-2 max-w-[38rem] text-sm leading-relaxed text-muted">{skill.desc}</p>
      </div>
    </li>
  );
}

export default function ClassSkillTree({ tiers }: { tiers: ClassTier[] }) {
  const [filterId, setFilterId] = useState<FilterId>("all");
  const [closed, setClosed] = useState<Set<string>>(new Set());

  const filter = FILTERS.find((f) => f.id === filterId) ?? FILTERS[0];
  const all = tiers.flatMap((t) => t.skills);
  const shown = all.filter(filter.test).length;

  function toggle(id: string) {
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function open(id: string) {
    setClosed((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  const textButton = "btn-quiet";

  return (
    <div>
      <div role="group" aria-label="Filtrar habilidades" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f.id === filterId;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilterId(f.id)}
              className="btn-chip"
            >
              {f.label}
              <span className={active ? "text-background" : "text-muted"}>
                {all.filter(f.test).length}
              </span>
            </button>
          );
        })}
      </div>

      <nav aria-label="Tramos de la clase" className="mt-4">
        <ul className="flex flex-wrap gap-2">
          {tiers.map((t) => (
            <li key={t.id}>
              <a
                href={`#tramo-${t.id}`}
                onClick={() => open(t.id)}
                className="btn-chip px-3 text-xs uppercase tracking-wider"
              >
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-4 mt-4 flex flex-wrap items-center justify-between gap-x-4">
        <p aria-live="polite" className="text-xs text-muted">
          Mostrando {shown} de {all.length} habilidades
        </p>
        <div className="flex gap-1">
          <button type="button" onClick={() => setClosed(new Set())} className={textButton}>
            Expandir todo
          </button>
          <button
            type="button"
            onClick={() => setClosed(new Set(tiers.map((t) => t.id)))}
            className={textButton}
          >
            Contraer todo
          </button>
        </div>
      </div>

      <div className="space-y-10">
        {tiers.map((t) => {
          const isOpen = !closed.has(t.id);
          const visible = t.skills.filter(filter.test);
          const countText =
            visible.length === t.skills.length
              ? `${t.skills.length} habilidades`
              : `${visible.length} de ${t.skills.length} habilidades`;
          const btnId = `tramo-${t.id}-btn`;
          const panelId = `tramo-${t.id}-panel`;

          return (
            <section key={t.id} id={`tramo-${t.id}`}>
              <h2>
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(t.id)}
                  className="flex min-h-11 w-full items-center gap-3 border-b border-border-soft pb-3 text-left"
                >
                  <span className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span className="font-display text-xl font-bold text-foreground">{t.name}</span>
                    <span className="text-xs text-muted">
                      Niveles {t.from} a {t.to} · {countText}
                    </span>
                  </span>
                  <Chevron open={isOpen} />
                </button>
              </h2>

              <Collapsible open={isOpen} id={panelId} labelledBy={btnId}>
                <div className="space-y-4 pt-4">
                  <p className="max-w-[38rem] text-sm leading-relaxed text-muted">{t.blurb}</p>
                  {visible.length === 0 ? (
                    <p className="text-sm text-muted">
                      Ninguna habilidad de este tipo en este tramo.
                    </p>
                  ) : (
                    <ul className="card-surface rounded-none">
                      {visible.map((s) => (
                        <SkillRow key={s.name} skill={s} />
                      ))}
                    </ul>
                  )}
                </div>
              </Collapsible>
            </section>
          );
        })}
      </div>
    </div>
  );
}
