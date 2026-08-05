import Link from "next/link";

export default function DonateTeaser() {
  return (
    <section className="px-6 py-24">
      <div className="card-surface mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-none p-10 text-center">
        <span className="rounded-none border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Servidor sostenido por la comunidad
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Convertite en Fundador de L2Thunder
        </h2>
        <p className="max-w-xl text-muted">
          Tu aporte financia hosting y desarrollo. El VIP da un empujón chico de EXP y Drop
          (5%) más una caja de skin de regalo, y las Cajas de Skins te dejan elegir la rareza
          exacta — nunca vendemos daño ni items que te hagan invencible en PvP.
        </p>
        <Link
          href="/donar"
          className="rounded-none bg-gradient-to-r from-gold to-accent-2 px-7 py-3 font-semibold text-background transition hover:brightness-110"
        >
          Ver beneficios de Fundador
        </Link>
      </div>
    </section>
  );
}
