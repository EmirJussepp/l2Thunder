import { CLIENT_MIRRORS, LAUNCHER_MIRRORS } from "@/lib/downloads";

// Línea chica con los espejos de descarga ("Cliente: MEGA · Launcher: MEGA"),
// para ir debajo de los botones principales. Si no hay espejos cargados no
// muestra nada. Las listas viven en src/lib/downloads.ts.
export default function DownloadMirrors({ className = "" }: { className?: string }) {
  const groups = [
    { label: "Cliente", mirrors: CLIENT_MIRRORS },
    { label: "Launcher", mirrors: LAUNCHER_MIRRORS },
  ].filter((g) => g.mirrors.length > 0);

  if (groups.length === 0) return null;

  return (
    <p className={`text-xs leading-relaxed text-muted ${className}`}>
      ¿Drive no te anda? Espejos:{" "}
      {groups.map((g, gi) => (
        <span key={g.label}>
          {gi > 0 && " · "}
          {g.label}:{" "}
          {g.mirrors.map((m, mi) => (
            <span key={m.name}>
              {mi > 0 && ", "}
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border-soft underline-offset-2 transition hover:text-gold"
              >
                {m.name}
              </a>
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
