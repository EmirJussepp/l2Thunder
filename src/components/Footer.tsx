import Link from "next/link";
import Crest from "./Crest";
import { DISCORD_URL, DRAGONES_NEGROS_VOTE_URL } from "@/lib/social";
import { HOPZONE_VOTE_URL } from "@/lib/hopzone";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Crest className="h-8 w-8 shrink-0" variant="solid" />
          <div>
            <p className="brand text-base font-bold text-foreground">
              <span className="text-accent-2">L2</span>THUNDER
            </p>
            <p className="mt-1">Lineage II — Servidor Privado</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <Link href="/por-que-l2thunder" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            ¿Por qué L2Thunder?
          </Link>
          <Link href="/guias" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Guías
          </Link>
          <Link href="/guias/clases" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Clases
          </Link>
          <Link href="/informacion-de-juego" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Información de juego
          </Link>
          <Link href="/apertura-escalonada" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Apertura escalonada
          </Link>
          <Link href="/seguridad" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Seguridad
          </Link>
          <Link href="/donar" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Donar
          </Link>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center px-2 hover:text-foreground"
          >
            Discord
          </a>
          <Link href="/votar" className="inline-flex min-h-11 items-center px-2 hover:text-foreground">
            Votar
          </Link>
          <span className="inline-flex min-h-11 cursor-not-allowed items-center px-2 italic">Foro (próximamente)</span>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} L2Thunder. No afiliado con NCSoft.
        </p>
      </div>

      {/* Los banners oficiales de los rankings: HopZone exige el suyo visible en el sitio para mantener el
          listado. El badge de Dragones Negros es un archivo propio en public/ (con el formato grande de 728x90
          las listas de bloqueo de anuncios lo ocultaban por el tamaño en el nombre del archivo). */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 pb-10">
        <a
          href={DRAGONES_NEGROS_VOTE_URL}
          target="_blank"
          rel="noopener"
          className="block transition hover:brightness-110"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dragones-negros-voto.png"
            alt="Votá por nosotros en Dragones Negros"
            title="Dragones Negros - Ranking de servidores privados"
            width={150}
            height={40}
          />
        </a>
        <a href={HOPZONE_VOTE_URL} target="_blank" rel="noopener noreferrer" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://l2.hopzone.net/assets/img/banners/vote_banners/simple_banner_3.png"
            alt="Vote for L2THUNDER.ONLINE"
            title="L2.HOPZONE.NET – Lineage 2 Servers ranking"
            width={140}
            height={30}
          />
        </a>
      </div>
    </footer>
  );
}
