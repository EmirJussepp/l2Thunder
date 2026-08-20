import Link from "next/link";
import Crest from "./Crest";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Crest className="h-8 w-8 shrink-0" />
          <div>
            <p className="brand text-base font-bold text-foreground">
              <small className="text-accent-2">L2</small>THUNDER
            </p>
            <p className="mt-1">Lineage II — Servidor Privado</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/#features" className="hover:text-foreground">
            Características
          </Link>
          <Link href="/donar" className="hover:text-foreground">
            Donar
          </Link>
          <a
            href="https://discord.gg/6W6EJjXSa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Discord
          </a>
          <span className="cursor-not-allowed opacity-60">Foro (próximamente)</span>
        </div>

        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} L2Thunder. No afiliado con NCSoft.
        </p>
      </div>
    </footer>
  );
}
