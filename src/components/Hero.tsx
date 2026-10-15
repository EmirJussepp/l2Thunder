import Link from "next/link";
import Crest from "./Crest";
import HeroVideo from "./HeroVideo";
import Countdown from "./Countdown";

// La primera pantalla: el video de las cinco razas de fondo, el logo y el título arriba (sobre el cielo) y la
// cuenta regresiva con los botones abajo (sobre el suelo), para que nada tape a los personajes. En el celular
// el video no puede ser fondo (es apaisado): va en el flujo, entre el título y los botones. El texto de
// "Nuestra visión" está en Vision, la franja que sigue.
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col items-center overflow-hidden px-6 pb-10 pt-28 text-center md:justify-between md:pb-12 md:pt-32">
      <HeroVideo className="relative order-2 -mx-6 mt-6 aspect-video w-[calc(100%+3rem)] md:absolute md:inset-0 md:order-none md:mx-0 md:mt-0 md:aspect-auto md:w-full" />
      <div className="hero-veil" aria-hidden="true" />

      <div className="relative order-1 flex flex-col items-center gap-4">
        <Crest className="h-20 w-20 sm:h-24 sm:w-24" shine />

        <h1 className="brand text-4xl font-black leading-tight text-glow sm:text-5xl md:text-6xl">
          <span className="text-accent-2">L2</span>
          <wbr />
          THUNDER
        </h1>
      </div>

      <div className="relative order-3 mt-6 flex flex-col items-center gap-6 md:mt-0">
        <Countdown />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#jugar" className="btn btn-primary btn-arrow btn-shine">
            Jugar la beta
          </Link>
          <Link href="/donar" className="btn btn-ghost btn-arrow">
            Apoyar el proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
