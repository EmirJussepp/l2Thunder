import Link from "next/link";
import CharacterScene from "@/components/CharacterScene";

export default function DonateTeaser() {
  return (
    <CharacterScene personaje="enano" side="right">
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <span className="rounded-none border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Servidor sostenido por la comunidad
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Convertite en Fundador de L2Thunder
        </h2>
        <p className="max-w-xl text-muted">
          Comprás Coins of Luck y los usás en lo que quieras: VIP (+30% de EXP y de Drop
          durante 15 días) o la Caja de Skins (una skin al azar: Rara, Épica o Legendaria) — nunca vendemos daño ni items que te hagan invencible en PvP.
        </p>
        <Link href="/donar" className="btn btn-primary btn-arrow">
          Ver beneficios de Fundador
        </Link>
      </div>
    </CharacterScene>
  );
}
