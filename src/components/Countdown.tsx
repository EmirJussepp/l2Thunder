"use client";

import { useEffect, useState } from "react";

// Gran apertura confirmada: 16/10/2026 19:00 (hora Argentina), mismo dato
// que figura en la ficha de HopZone.
const TARGET = new Date("2026-10-16T19:00:00-03:00").getTime();

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(): Remaining | null {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  // undefined = todavía no hidrató (el server no sabe la hora exacta del
  // cliente, así que el primer cálculo real se hace acá, solo en cliente).
  // null = ya llegó la fecha. Un solo estado, así el effect solo llama a
  // setState una vez por tick en vez de encadenar dos actualizaciones.
  const [remaining, setRemaining] = useState<Remaining | null | undefined>(undefined);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining());
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  if (remaining === undefined) return null;

  if (!remaining) {
    return (
      <p className="brand text-sm font-bold uppercase tracking-widest text-gold">
        ¡Ya estamos online!
      </p>
    );
  }

  const units = [
    { label: "Días", value: remaining.days },
    { label: "Horas", value: remaining.hours },
    { label: "Min", value: remaining.minutes },
    { label: "Seg", value: remaining.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="brand text-base font-bold uppercase tracking-widest text-gold sm:text-lg">
        Gran apertura — 16 de octubre
      </p>
      <div className="flex gap-3 sm:gap-4">
        {units.map((u) => (
          <div
            key={u.label}
            className="card-surface flex w-16 flex-col items-center rounded-none border-gold/40 py-3 sm:w-24"
          >
            <span className="font-display text-3xl font-black text-gold sm:text-4xl">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
