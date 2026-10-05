import Callout from "@/components/guias/Callout";
import { DOWNLOAD_FILES } from "@/lib/downloads";

// Bloque desplegable "Verificá tu descarga": la huella SHA-256 de cada archivo
// y cómo comprobarla en Windows. Va debajo de los botones de descarga (home y
// ¿Por qué L2Thunder?). Es un <details> nativo: se abre sin JavaScript, y los
// hashes son `select-all` para copiarlos de un clic. Los valores salen de
// DOWNLOAD_FILES (src/lib/downloads.ts), que hay que actualizar al cambiar un
// archivo.

// 3412758526 -> "3.412.758.526"
const formatBytes = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const CMD =
  "block select-all break-all border border-border-soft bg-surface-2 px-3 py-2 font-mono text-[12px] text-accent";

export default function VerifyDownload({ className = "" }: { className?: string }) {
  return (
    <details className={`card-surface group rounded-none text-left ${className}`}>
      <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 transition hover:bg-surface-2/60 [&::-webkit-details-marker]:hidden">
        <span className="flex-1">
          <span className="block font-display text-sm font-bold text-foreground sm:text-base">
            Verificá tu descarga
          </span>
          <span className="mt-0.5 block text-xs text-muted">
            La huella SHA-256 del cliente y del launcher, para comprobar que no se tocaron
          </span>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
        >
          <path d="M5 8l5 5 5-5" strokeLinecap="square" />
        </svg>
      </summary>

      <div className="space-y-6 border-t border-border-soft px-5 py-5">
        <p className="text-sm leading-relaxed text-muted">
          Cada archivo tiene una huella única. Si la que calcula tu PC coincide con la de abajo, es
          exactamente el que subimos nosotros, lo hayas bajado de donde lo hayas bajado.
        </p>

        <ul className="space-y-5">
          {DOWNLOAD_FILES.map((f) => (
            <li key={f.name}>
              <p className="font-display text-sm font-bold text-gold">{f.name}</p>
              <p className="mt-0.5 text-xs text-muted">
                {f.size} ({formatBytes(f.bytes)} bytes) · subido el {f.updated}
              </p>
              <code className={`mt-2 ${CMD}`}>{f.sha256}</code>
            </li>
          ))}
        </ul>

        <div>
          <p className="font-display text-sm font-bold text-foreground">Cómo comprobarlo</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-muted">
            <li>Abrí PowerShell en la carpeta donde guardaste el archivo.</li>
            <li>Corré este comando, cambiando el nombre por el del archivo que bajaste:</li>
          </ol>
          <code className={`mt-3 ${CMD}`}>Get-FileHash -Algorithm SHA256 .\L2ThunderLauncher.exe</code>
          <p className="mt-3 text-sm text-muted">
            Si preferís el símbolo del sistema (cmd):{" "}
            <code className="select-all break-all font-mono text-[12px] text-accent">
              certutil -hashfile L2ThunderLauncher.exe SHA256
            </code>
          </p>
          <p className="mt-3 text-sm text-muted">
            Compará el resultado con la huella de arriba, letra por letra. El cliente pesa más de 3
            GB, así que calcularlo puede tardar un minuto.
          </p>
        </div>

        <Callout title="Si no coincide" variant="warn">
          <p>
            No lo abras. Volvé a descargarlo, y si sigue sin coincidir avisanos en el Discord antes
            de ejecutar nada.
          </p>
        </Callout>
      </div>
    </details>
  );
}
