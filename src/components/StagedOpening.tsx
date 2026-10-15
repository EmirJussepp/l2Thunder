import Link from "next/link";
import CharacterScene from "@/components/CharacterScene";
import StatGrid from "@/components/guias/StatGrid";
import { OPENING_STATS } from "@/lib/apertura";

// Resumen de las reglas de apertura para la home: lo justo para entender el esquema y un
// camino a la página completa. Reemplaza al afiche "Un Interlude pensado para hoy".
export default function StagedOpening() {
  return (
    <CharacterScene id="apertura" personaje="orco" side="left">
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <span className="rounded-none border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Reglas del servidor
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Apertura escalonada</h2>
        <p className="max-w-xl text-muted">
          No abrimos con todo el contenido desde el primer día. El tope de nivel, el equipo de
          grado S y los raids épicos entran por etapas, para que la economía y la carrera por el
          primer nivel máximo no se resuelvan en una semana.{" "}
          <strong className="font-bold text-foreground">
            Nada de esto es un error ni un bug.
          </strong>
        </p>

        <div className="w-full">
          <StatGrid stats={OPENING_STATS} compact />
        </div>

        <Link href="/apertura-escalonada" className="btn btn-primary btn-arrow">
          Ver todo el detalle
        </Link>
      </div>
    </CharacterScene>
  );
}
