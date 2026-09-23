"use client";

import { useState } from "react";
import Collapsible from "./Collapsible";
import { itemSlug, type ItemEntry } from "@/lib/items";

type Tab = { id: string; label: string; emptyText: string };
type Group = { id: string; label: string };

// Pantalla común de las secciones de Información de juego (armaduras, joyas):
// pestañas arriba, grupos desplegables adentro y cada ítem desplegable con su
// imagen si existe. idPrefix mantiene únicos los ids del DOM.
type Props = {
  idPrefix: string;
  tabsLabel: string;
  tabs: Tab[];
  groups: Group[];
  data: Record<string, Record<string, ItemEntry[]>>;
  images: Record<string, string>;
  noun: { one: string; many: string; groupEmpty: string };
};

const itemKey = (tab: string, group: string, name: string) => `${tab}:${group}:${name}`;
const groupKey = (tab: string, group: string) => `${tab}:${group}`;

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

function ItemRow({
  id,
  item,
  image,
  open,
  onToggle,
}: {
  id: string;
  item: ItemEntry;
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
              <img src={image} alt="" className="max-h-full max-w-full" />
            </span>
          )}
          <span className="flex-1 font-display text-sm font-bold text-gold sm:text-base">
            {item.name}
          </span>
          <Chevron open={open} />
        </button>
      </h4>

      <Collapsible open={open} id={`${id}-panel`} labelledBy={`${id}-btn`}>
        <ul className="space-y-1.5 px-4 pb-4 pt-1 text-sm text-foreground">
          {item.bonuses.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Collapsible>
    </div>
  );
}

export default function ItemExplorer({
  idPrefix,
  tabsLabel,
  tabs,
  groups,
  data,
  images,
  noun,
}: Props) {
  const [tabId, setTabId] = useState(tabs[0].id);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [closedGroups, setClosedGroups] = useState<Set<string>>(new Set());

  const tab = tabs.find((t) => t.id === tabId) ?? tabs[0];
  const byGroup = data[tab.id] ?? {};
  const itemsOf = (groupId: string) => byGroup[groupId] ?? [];
  const total = groups.reduce((n, g) => n + itemsOf(g.id).length, 0);

  function toggle(setter: typeof setOpenItems, key: string) {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const tabItemKeys = groups.flatMap((g) => itemsOf(g.id).map((it) => itemKey(tab.id, g.id, it.name)));

  function expandAll() {
    setOpenItems((prev) => new Set([...prev, ...tabItemKeys]));
    setClosedGroups((prev) => {
      const next = new Set(prev);
      groups.forEach((g) => next.delete(groupKey(tab.id, g.id)));
      return next;
    });
  }

  function collapseAll() {
    setOpenItems((prev) => {
      const next = new Set(prev);
      tabItemKeys.forEach((k) => next.delete(k));
      return next;
    });
  }

  return (
    <div>
      <div role="tablist" aria-label={tabsLabel} className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const active = t.id === tab.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${t.id}`}
              aria-selected={active}
              aria-controls={`${idPrefix}-panel`}
              onClick={() => setTabId(t.id)}
              className={`rounded-none border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-widest transition ${
                active
                  ? "border-gold bg-gold text-background"
                  : "border-border-soft text-muted hover:border-gold/60 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${idPrefix}-panel`}
        aria-labelledby={`${idPrefix}-tab-${tab.id}`}
        className="mt-8"
      >
        {total === 0 ? (
          <div className="card-surface rounded-none p-8 text-center">
            <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
              {tab.label}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-muted">{tab.emptyText}</p>
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
              {groups.map((g) => {
                const items = itemsOf(g.id);
                const gKey = groupKey(tab.id, g.id);
                const groupOpen = !closedGroups.has(gKey);
                const gId = `${idPrefix}-group-${tab.id}-${g.id}`;

                return (
                  <section key={g.id}>
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
                          {g.label}
                        </span>
                        <span className="text-xs text-muted">
                          {items.length} {items.length === 1 ? noun.one : noun.many}
                        </span>
                        <span className="ml-auto">
                          <Chevron open={groupOpen} />
                        </span>
                      </button>
                    </h3>

                    <Collapsible open={groupOpen} id={`${gId}-panel`} labelledBy={`${gId}-btn`}>
                      <div className="pt-4">
                        {items.length === 0 ? (
                          <p className="text-sm text-muted">{noun.groupEmpty}</p>
                        ) : (
                          <div className="card-surface rounded-none">
                            {items.map((it) => {
                              const key = itemKey(tab.id, g.id, it.name);
                              const slug = itemSlug(it.name);
                              return (
                                <ItemRow
                                  key={key}
                                  id={`${idPrefix}-set-${tab.id}-${slug}`}
                                  item={it}
                                  image={images[slug]}
                                  open={openItems.has(key)}
                                  onToggle={() => toggle(setOpenItems, key)}
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
