"use client";

import { useState } from "react";
import DataTable from "@/components/guias/DataTable";
import { ARMOR_GRADES, ARMOR_TYPES, type ArmorData, type ArmorGrade } from "@/lib/armaduras";

export default function ArmorExplorer({ data }: { data: ArmorData }) {
  const [grade, setGrade] = useState<ArmorGrade>("C");
  const byType = data[grade];
  const total = ARMOR_TYPES.reduce((n, t) => n + byType[t.id].length, 0);

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
          <div className="space-y-10">
            {ARMOR_TYPES.map((t) => {
              const sets = byType[t.id];
              return (
                <section key={t.id}>
                  <h3 className="font-display text-lg font-bold text-foreground">{t.label}</h3>
                  <div className="mt-3">
                    {sets.length === 0 ? (
                      <p className="text-sm text-muted">Sin sets cargados.</p>
                    ) : (
                      <DataTable
                        headers={["Set", "Bonus"]}
                        rows={sets.map((s) => [
                          <strong key="name" className="font-semibold text-gold">
                            {s.name}
                          </strong>,
                          <ul key="bonuses" className="space-y-1">
                            {s.bonuses.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>,
                        ])}
                      />
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
