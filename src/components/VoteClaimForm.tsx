"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { DISCORD_URL } from "@/lib/social";

type Phase =
  | { kind: "form" }
  | { kind: "checking" }
  | { kind: "waiting"; claimId: string }
  | { kind: "delivered" }
  | { kind: "message"; tone: "info" | "danger"; text: string };

const POLL_EVERY_MS = 4_000;
// El bridge levanta los pendientes cada pocos segundos; pasado esto lo damos por "en cola" y le decimos
// al jugador que lo mire en el juego en vez de dejarlo esperando en la pantalla.
const POLL_GIVE_UP_MS = 4 * 60 * 1000;

const FAILED_TEXT: Record<string, string> = {
  character_not_found:
    "No encontramos ese personaje en el juego. Revisá el nombre letra por letra (ojo con la I mayúscula, la l minúscula, el 0 y la O) y probá de nuevo: este intento no cuenta.",
  recent_claim:
    "Esa cuenta o esa conexión ya recibió un amuleto hace poco. Podés volver a votar y reclamar pasadas 12 horas desde tu último voto.",
  error: "No pudimos entregarlo por un problema nuestro. Probá de nuevo en unos minutos o escribinos por Discord.",
};

export default function VoteClaimForm() {
  const [characterName, setCharacterName] = useState("");
  const [phase, setPhase] = useState<Phase>({ kind: "form" });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function backToForm() {
    setPhase({ kind: "form" });
  }

  function poll(claimId: string, startedAt: number) {
    timer.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/vote/claim?id=${encodeURIComponent(claimId)}`, { cache: "no-store" });
        const data = await res.json();
        if (res.ok && data.status === "DELIVERED") {
          setPhase({ kind: "delivered" });
          return;
        }
        if (res.ok && data.status === "FAILED") {
          setPhase({ kind: "message", tone: "danger", text: FAILED_TEXT[data.reason] ?? FAILED_TEXT.error });
          return;
        }
      } catch {
        // un corte de red no cancela el reclamo: se sigue preguntando hasta el límite
      }
      if (Date.now() - startedAt > POLL_GIVE_UP_MS) {
        setPhase({
          kind: "message",
          tone: "info",
          text: "Tu voto está verificado y el amuleto está en cola. Entrá al juego y revisá tu correo en unos minutos: va a llegar solo.",
        });
        return;
      }
      poll(claimId, startedAt);
    }, POLL_EVERY_MS);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPhase({ kind: "checking" });
    try {
      const res = await fetch("/api/vote/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ characterName }),
      });
      const data = await res.json();

      if (!res.ok) {
        setPhase({ kind: "message", tone: "danger", text: data.error ?? "No se pudo verificar el voto. Probá de nuevo." });
        return;
      }
      if (data.status === "not_voted") {
        setPhase({
          kind: "message",
          tone: "danger",
          text: "Todavía no encontramos tu voto desde esta conexión. Votá en HopZone y en Dragones Negros, esperá un minuto y probá de nuevo. Tiene que ser la misma red (la misma IP) desde la que reclamás ahora.",
        });
        return;
      }
      if (data.status === "already_claimed") {
        setPhase({
          kind: "message",
          tone: "info",
          text: "Ya reclamaste el amuleto de esta ronda de votos. Podés votar de nuevo pasadas 12 horas y reclamar el próximo.",
        });
        return;
      }
      if (data.status === "character_recent") {
        setPhase({
          kind: "message",
          tone: "info",
          text: "Ese personaje ya recibió un amuleto en las últimas 12 horas.",
        });
        return;
      }
      if (data.status === "created" && typeof data.claimId === "string") {
        setPhase({ kind: "waiting", claimId: data.claimId });
        poll(data.claimId, Date.now());
        return;
      }
      setPhase({ kind: "message", tone: "danger", text: "Respuesta inesperada. Probá de nuevo." });
    } catch {
      setPhase({ kind: "message", tone: "danger", text: "No pudimos conectarnos. Probá de nuevo en unos segundos." });
    }
  }

  if (phase.kind === "delivered") {
    return (
      <div className="space-y-3 border-l-2 border-gold/60 bg-gold/[0.06] p-5">
        <p className="brand text-xs font-bold uppercase tracking-widest text-gold">Listo</p>
        <p className="text-sm leading-relaxed text-foreground">
          Te mandamos el Amuleto de Votación por correo a <span translate="no" className="font-mono font-bold">{characterName}</span>.
          Entrá al juego, abrí el correo y retirá el amuleto: llega apenas el personaje está conectado.
        </p>
      </div>
    );
  }

  if (phase.kind === "waiting") {
    return (
      <div className="space-y-2 border-l-2 border-accent/60 bg-accent/[0.06] p-5" role="status" aria-live="polite">
        <p className="brand text-xs font-bold uppercase tracking-widest text-accent">Voto verificado</p>
        <p className="text-sm leading-relaxed text-muted">Lo estamos mandando por correo al juego. Dejá esta página abierta unos segundos…</p>
      </div>
    );
  }

  if (phase.kind === "message") {
    const danger = phase.tone === "danger";
    return (
      <div className="space-y-4">
        <div
          className={`border-l-2 p-5 ${danger ? "border-danger/60 bg-danger/[0.06]" : "border-accent/60 bg-accent/[0.06]"}`}
          role="status"
          aria-live="polite"
        >
          <p className={`text-sm leading-relaxed text-muted`}>{phase.text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button type="button" onClick={backToForm} className="btn btn-outline btn-sm">
            Volver
          </button>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-xs text-accent underline decoration-border-soft underline-offset-4 transition hover:text-foreground"
          >
            ¿Necesitás ayuda? Discord
          </a>
        </div>
      </div>
    );
  }

  const checking = phase.kind === "checking";
  return (
    <form onSubmit={handleSubmit} className="max-w-[38rem] space-y-4">
      <label className="block text-xs text-muted">
        Nombre de tu personaje en el juego
        <input
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value.replace(/\s/g, ""))}
          required
          minLength={3}
          maxLength={40}
          pattern="[a-zA-Z0-9_]{3,40}"
          placeholder="tu_personaje"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          translate="no"
          disabled={checking}
          className="mt-1 min-h-11 w-full border border-border-soft bg-background px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-gold"
        />
      </label>
      <p className="text-xs leading-relaxed text-muted">
        Es el nombre del personaje, no el de la cuenta: el amuleto le llega a ese personaje por correo.
      </p>
      <button type="submit" disabled={checking} className="btn btn-primary">
        {checking ? "Verificando tu voto…" : "Ya voté, reclamar"}
      </button>
    </form>
  );
}
