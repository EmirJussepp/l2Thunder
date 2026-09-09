import Link from "next/link";
import Crest from "./Crest";
import HeroSlideshow from "./HeroSlideshow";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-36 text-center">
      <HeroSlideshow />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-[2.2] rounded-full bg-gold/25 blur-2xl" aria-hidden="true" />
          <Crest className="crest-epic h-24 w-24 sm:h-28 sm:w-28" />
        </div>

        <h1 className="brand text-5xl font-black leading-tight text-glow sm:text-6xl">
          <span className="text-accent-2">L2</span>THUNDER
        </h1>

        <div className="-mt-3">
          <p className="brand text-lg font-bold tracking-widest text-accent-2">
            Nuestra visión
          </p>
          <h2 className="mt-5 font-display text-base font-semibold leading-relaxed text-foreground sm:text-lg">
            Thunder no es &ldquo;un Interlude con rates medios&rdquo;. Es la pregunta de qué
            habría pasado si Interlude hubiera seguido evolucionando por otro camino: revisamos
            cada raza, cada clase y cada skill para que nada quede obsoleto, sin perder la
            esencia del combate que hizo grande a Lineage II.
          </h2>
        </div>

        <div className="pt-2">
          <Countdown />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#jugar"
            className="btn-impact bg-gold px-7 py-3 text-background hover:brightness-110"
          >
            Jugar la beta
          </Link>
          <Link
            href="/donar"
            className="rounded-none border border-gold px-7 py-3 font-semibold text-gold transition hover:border-border-soft hover:text-foreground"
          >
            Apoyar el proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
