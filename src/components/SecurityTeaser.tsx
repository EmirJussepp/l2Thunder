import Link from "next/link";
import CharacterScene from "@/components/CharacterScene";
import StatGrid from "@/components/guias/StatGrid";

// Cuatro cifras: con tres, la grilla de 2 columnas del celular deja una celda vacía.
const stats = [
  { value: "Nube", label: "Host profesional", sub: "en São Paulo, solo para L2Thunder" },
  { value: "6 h", label: "Entre copias del juego", sub: "personajes, ítems y cuentas" },
  { value: "100%", label: "De los pagos", sub: "confirmados con Mercado Pago" },
  { value: "HTTPS", label: "En toda la web", sub: "sin excepciones" },
];

// Una pieza de confianza para la home, justo después de la invitación a donar: resume el
// trabajo de seguridad y lleva a /seguridad, donde está el detalle.
export default function SecurityTeaser() {
  return (
    <CharacterScene personaje="elfo-oscuro" side="left">
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <span className="rounded-none border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Antes de abrir
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Un servidor en el que podés confiar
        </h2>
        <p className="max-w-xl text-muted">
          Dedicamos días a revisar todo antes de la apertura: un host profesional, el acceso de
          administración cerrado con llaves, copias de seguridad cada 6 horas y cada pago
          comprobado contra Mercado Pago antes de entregar nada.
        </p>

        <div className="w-full">
          <StatGrid stats={stats} compact />
        </div>

        <Link href="/seguridad" className="btn btn-primary btn-arrow">
          Cómo cuidamos tu cuenta
        </Link>
      </div>
    </CharacterScene>
  );
}
