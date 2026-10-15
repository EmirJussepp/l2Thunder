import Link from "next/link";
import CharacterScene from "@/components/CharacterScene";

const features = [
  "Títulos de colores según la cantidad de PvP",
  "+450% de regeneración de HP, MP y CP",
  "Pociones de HP, MP y CP con reuso de dos minutos",
  "Comida: recupera HP y MP rápido mientras estás sentado",
  "Dyes sin penalización — las clases de soporte suman INT sin resignar nada",
  "Límites de nivel claros: la party cobra hasta 20 niveles de diferencia y los mobs hasta 10",
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
    <CharacterScene personaje="elfo" side="right">
      <div>
        <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
          Características
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Todo lo que suma, de un vistazo
        </h2>

        <ul className="mt-8 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-muted">
              <span className="mt-0.5 shrink-0 text-gold">✦</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link href="/por-que-l2thunder" className="btn btn-ghost btn-sm btn-arrow mt-10">
          Ver el detalle completo
        </Link>
      </div>
    </CharacterScene>
  );
}
