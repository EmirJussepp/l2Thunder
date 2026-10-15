import { DISCORD_URL, FACEBOOK_URL } from "@/lib/social";
import { DiscordIcon, FacebookIcon } from "@/components/SocialIcons";

// Riel de redes pegado al borde derecho, centrado en altura. Solo desde 1280 px: más angosto taparía el
// contenido, y en el celular las redes ya están en el menú y en el pie. Solo van las redes que existen.
const REDES = [
  { name: "Discord", href: DISCORD_URL, Icon: DiscordIcon },
  { name: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon },
];

export default function SocialRail() {
  return (
    <nav
      aria-label="Redes de L2Thunder"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
    >
      {REDES.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`L2Thunder en ${name}`}
          title={name}
          className="btn-icon h-11 w-11 border-foreground/25 bg-background/75 text-foreground backdrop-blur-sm"
        >
          <Icon />
        </a>
      ))}
    </nav>
  );
}
