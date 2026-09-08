import Link from "next/link";
import Image from "next/image";
import Crest from "./Crest";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-10 text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/header_bg.jpg"
          alt=""
          fill
          priority
          className="hero-bg-animate object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/55 to-background" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-[2.2] rounded-full bg-gold/25 blur-2xl" aria-hidden="true" />
          <Crest className="crest-epic h-24 w-24 sm:h-28 sm:w-28" />
        </div>

        <h1 className="brand text-5xl font-black leading-tight text-glow sm:text-6xl">
          <span className="text-accent-2">L2</span>THUNDER
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#jugar"
            className="btn-impact bg-gradient-to-r from-gold to-accent-2 px-7 py-3 text-background hover:brightness-110"
          >
            Jugar la beta
          </Link>
          <Link
            href="/donar"
            className="rounded-none border border-border-soft px-7 py-3 font-semibold text-foreground transition hover:border-gold hover:text-gold"
          >
            Apoyar el proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
