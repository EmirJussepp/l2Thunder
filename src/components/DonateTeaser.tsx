import Link from "next/link";

export default function DonateTeaser() {
  return (
    <section className="px-6 py-24">
      <div className="card-surface mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl p-10 text-center">
        <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Servidor sostenido por la comunidad
        </span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Convertite en Fundador de L2Thunder
        </h2>
        <p className="max-w-xl text-muted">
          Tu aporte financia hosting y desarrollo. A cambio, sumás puntos que se acreditan
          directo en tu cuenta in-game para cosméticos y comodidad. Nada de pay-to-win: nunca
          vendemos daño, experiencia ni ítems que rompan el PvP.
        </p>
        <Link
          href="/donar"
          className="rounded-full bg-gradient-to-r from-gold to-accent-2 px-7 py-3 font-semibold text-background transition hover:brightness-110"
        >
          Ver beneficios de Fundador
        </Link>
      </div>
    </section>
  );
}
