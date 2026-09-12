import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";
import WindowClock from "@/components/guias/WindowClock";

export const metadata: Metadata = {
  title: "Los Cuatro Sepulcros — Guía",
  description:
    "Cómo conseguir el pase, entrar en la ventana de los cinco minutos y derrotar a Shadow of Halisha en Los Cuatro Sepulcros.",
};

const introStats = [
  { value: "74", label: "Nivel", sub: "mínimo, todos" },
  { value: "4", label: "Grupo", sub: "a 9 jugadores" },
  { value: ":55", label: "Entrada", sub: "al :59 de cada hora" },
  { value: "50", label: "Duración", sub: "minutos adentro" },
  { value: "1", label: "Repetición", sub: "vez por día" },
];

const guardianChecklist: [string, string][] = [
  ["Grupo", "Mínimo 4 integrantes, y habla el líder"],
  ["Sepulcro libre", "Un solo grupo por sepulcro a la vez"],
  ["Misión 620", "Empezada o terminada, por cada integrante"],
  ["Pase", "Uno por integrante, se consume al entrar"],
  ["Límite diario", "Que nadie del grupo lo haya completado hoy"],
  ["Distancia", "Todos a menos de 700 del guardián"],
  ["Peso", "Inventario por debajo del 80%"],
];

const guardians: [string, string, string, string][] = [
  ["Conquerors", "Conquerors' Sepulcher Manager", "181061, −85595, −7200", "Goblet of Alectia"],
  ["Emperors", "Emperors' Sepulcher Manager", "179292, −88981, −7200", "Goblet of Tishas"],
  ["Great Sages", "Great Sages' Sepulcher Manager", "173202, −87004, −7200", "Goblet of Mekara"],
  ["Judges", "Judges' Sepulcher Manager", "175606, −82853, −7200", "Goblet of Morigul"],
];

const bossStats = [
  { value: "213.848", label: "Vida" },
  { value: "1.300", label: "P. Atk" },
  { value: "377", label: "M. Atk" },
  { value: "1.047", label: "P. Def" },
  { value: "511", label: "M. Def" },
];

const loot: [string, string][] = [
  ["Arma", "Demon Splinter, Demon Splinter Blade"],
  [
    "Grado S sellado",
    "Major Arcana Circlet, Draconic Leather Helmet, Imperial Crusader Helmet, Imperial Crusader Shield — y sus patterns",
  ],
  ["Pergaminos", "Enchant Weapon S, Blessed Enchant Weapon S, Enchant Armor S"],
];

const faq: [string, string][] = [
  ["Visiting hours are over!", "No estás en la ventana. Esperá al minuto :55."],
  ["Your party must consist of at least four members", "Faltan integrantes: el mínimo es 4."],
  ["Contact must be initiated by the party leader", "Tiene que hablar el líder, no cualquiera."],
  ["hasn't fulfilled the request of the nameless soul", "A ese integrante le falta empezar la misión 620."],
  ["doesn't have a pass", "A ese integrante le falta el Entrance Pass."],
  ["Ya completó un sepulcro hoy", "Límite diario. Vuelve a estar disponible a las 06:30."],
  ["Nada, no pasa nada", "Hay otro grupo adentro de ese sepulcro. Probá con otro de los cuatro."],
];

export default function LosCuatroSepulcrosPage() {
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
            Guía de contenido · Nivel 74+
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Los Cuatro Sepulcros</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Cómo derrotar a Shadow of Halisha
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Cuatro cámaras funerarias bajo la Tumba Imperial, cada una custodiada por una sombra
            de Halisha. Se abren cinco minutos por hora y no perdonan la desorganización: sin
            pase no entrás, sin grupo no entrás, y si llegás tarde esperás una hora entera.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-20">
          <GuideStep n="I" title="Conseguir el pase">
            <p>
              Para cruzar la puerta hace falta un{" "}
              <strong className="font-semibold text-gold">Entrance Pass to the Sepulcher</strong>,
              y hace falta uno por cada integrante del grupo. Se consume al entrar, así que es un
              consumible: conviene juntar varios.
            </p>

            <Callout title="Lo que traba a casi todos" variant="warn">
              <p>
                El pase <strong className="font-semibold text-foreground">no se compra en
                ninguna tienda y no lo regala ningún NPC</strong>. Cae únicamente de los
                monstruos de la Tumba Imperial, y sólo si tenés la misión activa. Sin la misión
                podés farmear ahí una semana y no ver uno solo.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Cómo se activa el drop
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Hablá con el <strong className="font-semibold text-foreground">Ghost of
                  Adventurer</strong> en la entrada de la Tumba Imperial —{" "}
                  <CoordChip>181611, −75293, −2728</CoordChip>.
                </li>
                <li>
                  Aceptá la misión{" "}
                  <strong className="font-semibold text-gold">Relics of the Old Empire</strong>{" "}
                  (619).
                </li>
                <li>
                  Matá monstruos dentro de la Tumba Imperial. Cada muerte tiene{" "}
                  <strong className="font-semibold text-gold">30%</strong> de soltar un pase,
                  además de las Broken Relics.
                </li>
              </ol>
            </div>

            <p>
              Las relics no son necesarias para entrar, pero no las tires: cada{" "}
              <strong className="font-semibold text-foreground">1.000</strong> se cambian con el
              mismo fantasma por una receta de arma de grado A.
            </p>
          </GuideStep>

          <GuideStep n="II" title="Aceptar el encargo del espíritu">
            <p>
              El pase abre la puerta, pero el guardián no te deja pasar si no venís por encargo
              del espíritu sin nombre. Todos los del grupo tienen que tener la misión{" "}
              <strong className="font-semibold text-gold">Four Goblets</strong> (620) empezada —
              o ya terminada.
            </p>

            <p>
              La da el <strong className="font-semibold text-foreground">Nameless Spirit</strong>,
              en el hall de los Cuatro Sepulcros: <CoordChip>178292, −85577, −7200</CoordChip>.
            </p>

            <Callout title="La primera vez se baja a pie" variant="warn">
              <p>
                El <strong className="font-semibold text-foreground">Ghost Chamberlain of
                Elmoreden</strong> teletransporta al hall, pero sólo a quien ya estuvo adentro
                alguna vez: pide el pase usado o el Antique Brooch. La primera bajada es
                caminando, desde la entrada de la Tumba Imperial en{" "}
                <CoordChip>186942, −75602, −2834</CoordChip>.
              </p>
            </Callout>

            <p>
              Después de tu primera entrada ya podés usar el atajo. Hay un chamberlain junto a la
              puerta del Wall of Argos — <CoordChip>170279, −88244, −2896</CoordChip> — y otro en
              Goddard — <CoordChip>164304, −47600, −3507</CoordChip>.
            </p>
          </GuideStep>

          <GuideStep n="III" title="Entrar en la ventana">
            <div className="card-surface flex flex-col items-center gap-5 rounded-none p-6 text-center sm:flex-row sm:text-left">
              <WindowClock />
              <div className="space-y-3">
                <p>
                  Las puertas de los cuatro sepulcros se abren{" "}
                  <strong className="font-semibold text-foreground">del minuto 55 al 59</strong>{" "}
                  de cada hora. Ni un minuto antes, ni uno después.
                </p>
                <p>
                  Si el líder habla con el guardián a las <CoordChip>14:54</CoordChip>, el
                  guardián responde{" "}
                  <span className="text-foreground">&ldquo;Visiting hours are over!&rdquo;</span>{" "}
                  y hay que esperar hasta las <CoordChip>14:55</CoordChip>.
                </p>
                <p>
                  Una vez adentro tenés <strong className="font-semibold text-foreground">50
                  minutos</strong> para llegar al fondo. Al cumplirse, el sepulcro expulsa a todo
                  el mundo.
                </p>
              </div>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Lo que revisa el guardián, en orden
              </p>
              <div className="mt-3">
                <DataTable
                  headers={["Requisito", "Detalle"]}
                  rows={guardianChecklist.map(([a, b]) => [a, b])}
                />
              </div>
            </div>

            <Callout title="Si uno falla, no entra nadie" variant="info">
              <p>
                El guardián corta la entrada completa y nombra a quien no cumple. Es a propósito:
                el pase se gasta al cruzar, y que un compañero se quede afuera después de haberlo
                gastado es peor que no abrir la puerta.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Los cuatro guardianes
              </p>
              <div className="mt-3">
                <DataTable
                  headers={["Sepulcro", "Guardián", "Coordenadas", "Cáliz"]}
                  rows={guardians.map(([sep, g, coord, caliz]) => [
                    sep,
                    g,
                    <CoordChip key={coord}>{coord}</CoordChip>,
                    caliz,
                  ])}
                />
              </div>
            </div>
          </GuideStep>

          <GuideStep n="IV" title="Las siete oleadas">
            <p>
              Adentro se avanza sala por sala. Cada oleada limpia abre la siguiente, y el reloj
              de 50 minutos no se detiene. En el camino hay cofres: el Mysterious Chest y el Key
              Chest, que dan la llave de la capilla, y salas con trampas y estatuas que petrifican
              si tocás lo que no corresponde.
            </p>
            <p>
              La séptima oleada es el jefe. Al morir aparece un teletransportador para salir sin
              correr de vuelta.
            </p>

            <Callout title="De paso" variant="info">
              <p>
                Todo lo que matés adentro también cuenta para las misiones 619 y 620: seguís
                juntando pases para la próxima vuelta y Sealed Boxes, que el chamberlain abre por
                vos.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="V" title="Shadow of Halisha" last>
            <p>
              Una sombra de nivel 81 con dos Knight of Shadow a su lado. No es un jefe cuerpo a
              cuerpo: ataca a distancia, con un alcance de 1.100, y castiga a quien se queda
              quieto en el rango.
            </p>

            <div>
              <StatGrid stats={bossStats} />
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Qué tener en cuenta
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-semibold text-foreground">Flamestrike</strong> es su
                  golpe fuerte: magia de fuego a distancia.
                </li>
                <li>
                  Es de raza demoníaca y resiste el elemento oscuro. Traé daño sagrado si podés.
                </li>
                <li>
                  Los dos Knight of Shadow reaparecen; conviene que alguien los sostenga en vez
                  de matarlos una y otra vez.
                </li>
                <li>Su evasión es negativa: le pegan hasta los que fallan seguido.</li>
              </ul>
            </div>

            <div>
              <p className="brand text-xs font-bold uppercase tracking-widest text-gold">
                ✦ Lo que deja
              </p>

              <p className="mt-3">
                <span className="font-semibold text-foreground">Para todos los del grupo: </span>
                el cáliz del sepulcro que acabás de limpiar, más{" "}
                <strong className="font-semibold text-gold">2.172.012</strong> de experiencia y{" "}
                <strong className="font-semibold text-gold">523.301</strong> SP.
              </p>

              <div className="mt-4">
                <DataTable headers={["Categoría", "Objetos"]} rows={loot} />
              </div>
            </div>

            <div className="card-surface rounded-none border-gold/30 p-5">
              <p className="brand text-xs font-bold uppercase tracking-widest text-gold">
                El premio de fondo: el Antique Brooch
              </p>
              <p className="mt-2 text-sm">
                Los cuatro cálices — uno por sepulcro — se entregan juntos al Nameless Spirit a
                cambio del Antique Brooch. A partir de ahí no necesitás pase nunca más: el broche
                te deja entrar y usar el teletransporte del chamberlain para siempre.
              </p>
              <p className="mt-2 text-sm">
                Con el límite de una entrada por día, el broche es un objetivo de cuatro días
                como mínimo. Es la meta de la zona.
              </p>
            </div>
          </GuideStep>
        </div>

        {/* Una entrada por día */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ⏱ Una entrada por día
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            En L2Thunder, quien completa un sepulcro no vuelve a entrar a ninguno de los cuatro
            hasta el reinicio diario de las <strong className="font-semibold text-foreground">06:30</strong>.
            Es la única regla que se aparta del comportamiento clásico.
          </p>

          <div className="mt-6 max-w-3xl space-y-3 text-sm text-muted">
            <p className="font-display text-base font-bold text-foreground">
              Cómo funciona exactamente
            </p>
            <p>
              El día se cobra al matar al jefe, no al entrar. Si el grupo fracasa, se le acaban
              los 50 minutos o decide salir antes, no pierde la entrada del día: puede volver a
              intentarlo en la ventana siguiente.
            </p>
            <p>
              Lo paga todo el que esté dentro del sepulcro cuando cae la sombra, esté en el grupo
              del que dio el golpe final o no.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ? Por qué no me deja entrar
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Lo que dice el guardián", "Qué significa"]}
              rows={faq.map(([a, b]) => [
                <span key={a} className="italic text-muted">
                  {a}
                </span>,
                b,
              ])}
            />
          </div>

          <p className="mt-8 text-xs text-muted/70">
            Todo lo descrito acá corresponde al comportamiento vigente del servidor. La única
            regla propia de L2Thunder es el límite de una entrada por día; el resto sigue el
            diseño original de la zona.
          </p>
        </section>
      </div>
    </div>
  );
}
