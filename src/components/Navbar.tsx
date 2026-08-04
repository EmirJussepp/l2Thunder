import Link from "next/link";
import Crest from "./Crest";

const links = [
  { href: "/#rates", label: "Rates" },
  { href: "/#features", label: "Features" },
  { href: "/#jugar", label: "Cómo jugar" },
  { href: "/donar", label: "Donar" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Crest className="h-8 w-8" />
          <span className="brand text-xl font-bold text-glow">
            <small className="text-accent-2">L2</small>THUNDER
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/donar"
          className="rounded-full bg-gradient-to-r from-gold to-accent-2 px-5 py-2 text-sm font-semibold text-background shadow-lg shadow-gold/20 transition hover:brightness-110"
        >
          Donar
        </Link>
      </div>
    </header>
  );
}
