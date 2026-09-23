"use client";

import { useState } from "react";
import Collapsible from "./Collapsible";
import {
  ARMOR_GRADES,
  ARMOR_TYPES,
  armorSlug,
  type ArmorData,
  type ArmorGrade,
  type ArmorSet,
  type ArmorType,
} from "@/lib/armaduras";

const setKey = (grade: ArmorGrade, type: ArmorType, name: string) => `${grade}:${type}:${name}`;
const groupKey = (grade: ArmorGrade, type: ArmorType) => `${grade}:${type}`;

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

function SetRow({
  id,
  set,
  image,
  open,
  onToggle,
}: {
  id: string;
  set: ArmorSet;
  image?: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-soft last:border-b-0">
      <h4>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-4 py-3 text-left transition hover:bg-surface-2/60"
        >
          {image && (
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-border-soft bg-surface-2 p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className="h-full w-full object-contain" />
            </span>
          )}
          <span className="flex-1 font-display text-sm font-bold text-gold sm:text-base">
            {set.name}
          </span>
          <Chevron open={open} />
        </button>
      </h4>

      <Collapsible open={open} id={`${id}-panel`} labelledBy={`${id}-btn`}>
        <ul className="space-y-1.5 px-4 pb-4 pt-1 text-sm text-foreground">
          {set.bonuses.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Collapsible>
    </div>
  );
}

export default function ArmorExplorer({
  data,
  images,
}: {
  data: ArmorData;
  images: Record<string, string>;
}) {
  const [grade, setGrade] = useState<ArmorGrade>(ARMOR_GRADES[0]);
  const [openSets, setOpenSets] = useState<Set<string>>(new Set());
  const [closedGroups, setClosedGroups] = useState<Set<string>>(new Set());

  const byType = data[grade];
  const total = ARMOR_TYPES.reduce((n, t) => n + byType[t.id].length, 0);

  function toggle(setter: typeof setOpenSets, key: string) {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const gradeSetKeys = ARMOR_TYPES.flatMap((t) =>
    byType[t.id].map((s) => setKey(grade, t.id, s.name)),
  );

  function expandAll() {
    setOpenSets((prev) => new Set([...prev, ...gradeSetKeys]));
    setClosedGroups((prev) => {
      const next = new Set(prev);
      ARMOR_TYPES.forEach((t) => next.delete(groupKey(grade, t.id)));
      return next;
    });
  }

  function collapseAll() {
    setOpenSets((prev) => {
      const next = new Set(prev);
      gradeSetKeys.forEach((k) => next.delete(k));
      return next;
    });
  }

  return (
    <div>
      <div role="tablist" aria-label="Grado de armadura" className="flex flex-wrap gap-2">
        {ARMOR_GRADES.map((g) => {
          const active = g === grade;
          return (
            <button
              key={g}
              type="button"
              role="tab"
              id={`armor-tab-${g}`}
              aria-selected={active}
              aria-controls="armor-panel"
              onClick={() => setGrade(g)}
              className={`rounded-none border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-widest transition ${
                active
                  ? "border-gold bg-gold text-background"
                  : "border-border-soft text-muted hover:border-gold/60 hover:text-foreground"
              }`}
            >
              Grado {g}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="armor-panel"
        aria-labelledby={`armor-tab-${grade}`}
        className="mt-8"
      >
        {total === 0 ? (
          <div className="card-surface rounded-none p-8 text-center">
            <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
              Grado {grade}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Los sets de grado {grade} se están cargando. Pronto vas a ver acá el nombre de
              cada uno y los bonus que dan.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-end gap-5 text-xs font-semibold uppercase tracking-widest">
              <button
                type="button"
                onClick={expandAll}
                className="text-muted transition hover:text-gold"
              >
                Expandir todo
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="text-muted transition hover:text-gold"
              >
                Contraer todo
              </button>
            </div>

            <div className="space-y-8">
              {ARMOR_TYPES.map((t) => {
                const sets = byType[t.id];
                const gKey = groupKey(grade, t.id);
                const groupOpen = !closedGroups.has(gKey);
                const gId = `armor-group-${grade}-${t.id}`;

                return (
                  <section key={t.id}>
                    <h3>
                      <button
                        type="button"
                        id={`${gId}-btn`}
                        aria-expanded={groupOpen}
                        aria-controls={`${gId}-panel`}
                        onClick={() => toggle(setClosedGroups, gKey)}
                        className="flex w-full items-center gap-3 border-b border-border-soft pb-3 text-left"
                      >
                        <span className="font-display text-lg font-bold text-foreground">
                          {t.label}
                        </span>
                        <span className="text-xs text-muted">
                          {sets.length} {sets.length === 1 ? "set" : "sets"}
                        </span>
                        <span className="ml-auto">
                          <Chevron open={groupOpen} />
                        </span>
                      </button>
                    </h3>

                    <Collapsible open={groupOpen} id={`${gId}-panel`} labelledBy={`${gId}-btn`}>
                      <div className="pt-4">
                        {sets.length === 0 ? (
                          <p className="text-sm text-muted">Sin sets cargados.</p>
                        ) : (
                          <div className="card-surface rounded-none">
                            {sets.map((s) => {
                              const key = setKey(grade, t.id, s.name);
                              const slug = armorSlug(s.name);
                              return (
                                <SetRow
                                  key={key}
                                  id={`armor-set-${grade}-${slug}`}
                                  set={s}
                                  image={images[slug]}
                                  open={openSets.has(key)}
                                  onToggle={() => toggle(setOpenSets, key)}
                                />
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </Collapsible>
                  </section>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
