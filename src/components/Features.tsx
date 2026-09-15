import Link from "next/link";

const features = [
  "Títulos de colores según la cantidad de PvP",
  "+450% de regeneración de HP, MP y CP",
  "Pociones de HP, MP y CP con reuso de dos minutos",
  "Comida: recupera HP y MP rápido mientras estás sentado",
  "Dyes sin penalización — las clases de soporte suman INT sin resignar nada",
  "Clases y skills reworkeados cuidando el balance del juego",
  "Buffers reworkeados: ya no hace falta cargar mochila",
  "Life stones con color según su calidad",
  "SA reworkeados para ser competitivos",
  "Bonus nuevos en los sets C, B, A y S",
  "Set Apella, el nuevo techo del grado A",
  "Sigils para los magos",
  "Joyería boss y S, repensada",
];

export default function Features() {
  return (
    <section className="border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Características
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Todo lo que suma, de un vistazo
          </h2>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-muted">
              <span className="mt-0.5 shrink-0 text-gold">✦</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/por-que-l2thunder"
          className="mt-10 inline-block text-sm text-muted underline decoration-border-soft underline-offset-4 transition hover:text-gold"
        >
          Ver el detalle completo
        </Link>
      </div>
    </section>
  );
}
