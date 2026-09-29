import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import Screenshot from "@/components/guias/Screenshot";

export const metadata: Metadata = {
  title: "Cambios de Clase — Guía",
  description:
    "Los tres cambios de clase en L2Thunder: el primero a nivel 20 sin quest, los libros de skill que se compran en la iglesia hasta el 40, la quest de Ascalon para el segundo cambio, el drop de libros de ahí en adelante y el tercer cambio con la quest original.",
};

const introStats = [
  { value: "20", label: "1er cambio", sub: "en el NPC de inicio" },
  { value: "40", label: "2do cambio", sub: "quest de Ascalon" },
  { value: "76", label: "3er cambio", sub: "quest original" },
  { value: "C", label: "Arma shadow", sub: "cupón de la quest" },
  { value: "~20%", label: "Drop de libros", sub: "+30% que el original" },
];

const resumen: [string, string, string, string][] = [
  ["1er cambio", "Nivel 20", "En el NPC de inicio, sin quest", "Cupones de intercambio grado D"],
  [
    "2do cambio",
    "Nivel 40",
    "Quest de Ascalon",
    "Experiencia, adena y un cupón de arma grado C shadow",
  ],
  ["3er cambio", "Nivel 76", "La quest original de Interlude, con facilidades", "—"],
];

export default function CambiosDeClasePage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/guias"
          className="text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Guías
        </Link>

        {/* Intro */}
        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Guía de progreso · Del 1 al 76
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Cambios de Clase</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Los tres cambios, los libros de skill y cómo no trabarte en el camino
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Del nivel 1 al 76 hay tres cambios de clase y dos formas distintas de conseguir los
            libros de skill. Acá está el orden exacto: cuándo hablás con quién, qué te dan y en
            qué momento dejás de comprar los libros para salir a buscarlos.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>

          <div className="mt-8">
            <DataTable
              headers={["Cambio", "Nivel", "Cómo se hace", "Qué te da"]}
              rows={resumen}
            />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-16">
          <GuideStep n="I" title="Primer cambio — nivel 20, sin quest">
            <p>
              Apenas llegás a nivel 20, andá a los instructores de tu aldea inicial. No hay quest:
              el cambio se hace hablando, elegís tu clase y listo.
            </p>
            <p>
              Al confirmarlo te dan Exchange Coupons de grado D, para arrancar equipado sin perder
              tiempo farmeando lo básico.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Screenshot
                src="/guias/cambios-de-clase/primer-cambio-kakai.webp"
                alt="Diálogo del primer cambio de clase con el instructor, mostrando los cupones de grado D recibidos"
                caption="El instructor de primer cambio: al confirmarlo, entregan los cupones de grado D."
              />
              <Screenshot
                src="/guias/cambios-de-clase/npc-inicio-cupon-shadow.webp"
                alt="Menú de diálogo del NPC de la aldea inicial con las opciones de cambio de clase y canje de arma shadow"
                caption="El mismo tipo de NPC en la aldea inicial: ahí también se canjea el cupón de arma shadow más adelante."
              />
            </div>
          </GuideStep>

          <GuideStep n="II" title="Del 20 al 40 — los libros se compran en la iglesia">
            <p>
              En este tramo no hay que salir a buscar nada: todos los libros de skill de estos
              niveles se venden directamente en la iglesia de cada pueblo. Los comprás con adena y
              los aprendés ahí mismo.
            </p>
          </GuideStep>

          <GuideStep n="III" title="Nivel 40 — segundo cambio, la quest de Ascalon">
            <p>
              Al llegar a 40 te espera la quest de Ascalon, el instructor de segundo cambio.
              Cumplirla te da experiencia y adena — la adena alcanza para equiparte bien de
              entrada — más un cupón para canjear un arma de grado C shadow.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Screenshot
                src="/guias/cambios-de-clase/ascalon-mision.webp"
                alt="Diálogo de Ascalon ofreciendo la misión de segundo cambio de clase"
                caption="Ascalon, el instructor de segundo cambio: ahí está el link a la misión."
              />
              <Screenshot
                src="/guias/cambios-de-clase/quest-ascalon-diario.webp"
                alt="Diario de misiones mostrando el progreso de la cadena de quests hasta la carta para Ascalon"
                caption="El progreso de la cadena en el diario de misiones, camino a la carta para Ascalon."
              />
            </div>
          </GuideStep>

          <GuideStep n="IV" title="Del 40 en adelante — a cazar los libros">
            <p>
              A partir de acá los libros de skill ya no se compran: hay que conseguirlos como drop
              mientras subís de nivel. No hace falta salir especialmente a cazarlos, van cayendo en
              el farmeo normal.
            </p>

            <Screenshot
              src="/guias/cambios-de-clase/ascalon-instructor.webp"
              alt="Personaje de nivel alto frente al instructor de segundo cambio, Ascalon"
              caption="El instructor de segundo cambio queda como referencia el resto de la partida."
            />

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                El drop de estos libros ronda el 20% por kill, un 30% más alto que en el
                original, para que buscarlos no te trabe la subida de nivel.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="V" title="Nivel 76 — tercer cambio, la quest original" last>
            <p>
              El tercer cambio no se tocó: es la misma quest del Interlude original. Lo que sí
              tiene son algunas facilidades propias de L2Thunder para hacerla más llevadera, sin
              salirse del camino de siempre.
            </p>
          </GuideStep>
        </div>
      </div>
    </div>
  );
}
