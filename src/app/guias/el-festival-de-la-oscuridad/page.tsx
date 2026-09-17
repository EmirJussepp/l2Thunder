import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";

export const metadata: Metadata = {
  title: "El Festival de la Oscuridad — Guía",
  description:
    "Cómo elegir escalón, sobrevivir a las oleadas de dieciocho minutos y registrar el puntaje en el Festival de la Oscuridad, la otra mitad de los Siete Signos.",
};

const introStats = [
  { value: "20", label: "Nivel", sub: "con 1º cambio de clase" },
  { value: "2", label: "Grupo", sub: "mínimo, mismo bando" },
  { value: "18", label: "Dura", sub: "minutos adentro" },
  { value: "c/38", label: "Inscripción", sub: "minutos, en tandas" },
  { value: "Vie–Lun", label: "Cuándo", sub: "solo en competencia" },
];

const escalones: [string, string, string, string, string, string][] = [
  ["Nivel 31 o menos", "28–39", "900", "540", "270", "60"],
  ["Nivel 42 o menos", "39–50", "1.500", "900", "450", "70"],
  ["Nivel 53 o menos", "50–61", "3.000", "1.800", "900", "100"],
  ["Nivel 64 o menos", "61–72", "4.500", "2.700", "1.350", "120"],
  ["Sin límite", "76–81", "6.000", "3.600", "1.800", "150"],
];

const timeline = [
  { min: "2", label: "monstruos" },
  { min: "5", label: "al centro" },
  { min: "9", label: "2ª camada" },
  { min: "12", label: "al centro" },
  { min: "15", label: "cofres" },
  { min: "18", label: "fin" },
];

const puntaje: [string, string, string][] = [
  ["Monstruo normal", "1", "5"],
  ["Monstruo extra de la Bruja", "2", "10"],
  ["Cofre del minuto 15", "5", "25"],
];

const faq: [string, string][] = [
  ["«No se aceptan inscripciones mientras el sello esté vigente»", "Estás en la validación de sellos. Volvé el viernes a las 21:00."],
  ["«Tenés que estar en un grupo de al menos 2 integrantes»", "Solo no se entra, ni siquiera a mirar."],
  ["«Solo el líder del grupo puede inscribir al equipo»", "Que se anote el líder, no vos."],
  [
    "«Todos los integrantes de tu grupo tienen que ser…»",
    "Alguien se pasa del tope de nivel de ese guía. Probá con el guía del escalón siguiente.",
  ],
  [
    "«Ya estás anotado… los integrantes actuales fueron agregados»",
    "No es un error: te sumó a la lista la gente que entró al grupo después de anotarte.",
  ],
  [
    "«Solo el líder del grupo que participó puede registrar el puntaje»",
    "O no sos el líder que firmó, o no estuviste en esa corrida, o ya pasaron los 40 minutos.",
  ],
  [
    "«No tenés ofrendas para aportar»",
    "No mataron nada, o el que está hablando no es quien las recibió. Las ofrendas van todas al líder.",
  ],
  ["«No podés registrar un puntaje mientras un festival está en curso»", "Esperá a que termine la tanda y volvé."],
  ["«No puedo dejarte ir a la Ofrenda de Sangre»", "No estás anotado en ningún bando. Andá al sacerdote y anotate primero."],
  [
    "«Las bonificaciones no se pagan durante el período de competencia»",
    "La bolsa se cobra recién en la validación, del lunes 21:00 al viernes 21:00.",
  ],
];

export default function ElFestivalDeLaOscuridadPage() {
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
            Guía de evento · Nivel 20+
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">
            El Festival de la Oscuridad
          </h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Dieciocho minutos de oleadas por el otro 50% de los Siete Signos
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Tu grupo entra a una arena cerrada, los monstruos aparecen solos y vienen a
            buscarte. Cada uno que matás le da una Ofrenda de Sangre al líder, y esas ofrendas
            son el puntaje. Es la mitad de lo que decide quién gana los Siete Signos, y la única
            forma de cobrar la bolsa de cuotas que se junta toda la semana.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-16">
          <GuideStep n="I" title="Anotate en un bando y viajá al Oráculo">
            <p>
              El Festival es parte de los Siete Signos: no se puede entrar sin pertenecer a un
              bando. Si todavía no te anotaste, hablale al{" "}
              <strong className="font-semibold text-foreground">Priest of Dawn</strong> o a la{" "}
              <strong className="font-semibold text-foreground">Dusk Priestess</strong> de
              cualquier pueblo.
            </p>
            <p>
              Ya con bando, pedile al mismo sacerdote «Quiero ir al Oráculo». Te deja en el
              Oráculo del Amanecer o el del Ocaso según tu bando, y ahí están los cinco Festival
              Guide, uno por escalón de nivel.
            </p>

            <Callout title="Solo de viernes a lunes" variant="warn">
              <p>
                El Festival únicamente corre durante el período de competencia, o sea del
                viernes a las 21:00 al lunes a las 21:00. Durante la validación de sellos los
                guías no te anotan y tampoco aceptan puntajes.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="II" title="Elegí el escalón y pagá la cuota">
            <p>
              Hay cinco escalones por nivel. El del grupo lo define el integrante de nivel más
              alto: si uno se pasa del tope, ese guía no los anota y hay que subir de escalón.
            </p>

            <DataTable
              headers={["Escalón", "Mobs", "Azules", "Verdes", "Rojas", "Puntos al bando"]}
              rows={escalones}
            />

            <p>
              Mirá bien la columna de los mobs: siempre están arriba del tope del escalón. En el
              de «nivel 31 o menos» te vas a cruzar bichos de hasta 39, y en el de sin límite
              llegan a 81. El Festival pega por encima de tu nivel a propósito.
            </p>

            <p>
              La cuota la paga el líder, una sola vez, por todo el grupo, y en uno solo de los
              tres colores de piedra de sello. Fijate que la roja siempre sale la mitad que la
              verde y la sexta parte que la azul: pagando en rojas gastás menos puntaje del que
              vale la piedra.
            </p>

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                Alcanza con dos jugadores. En el diseño original hacían falta cinco, y en un
                servidor chico eso dejaba el Festival vacío toda la semana.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="III" title="Los dieciocho minutos">
            <p>
              Apenas se acepta la inscripción los teletransportan a la arena y arranca la
              espera. Los monstruos son agresivos siempre: no hace falta ir a buscarlos, vienen.
            </p>

            <div className="flex flex-wrap gap-3">
              {timeline.map((t) => (
                <div
                  key={t.min}
                  className="flex items-center gap-2 border border-border-soft bg-surface-2 px-3 py-2"
                >
                  <span className="font-display text-sm font-black text-gold">{t.min}</span>
                  <span className="text-xs text-muted">{t.label}</span>
                </div>
              ))}
            </div>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-foreground">Minuto 2</strong> — aparecen
                los 16 monstruos principales. Todo lo que muere vuelve a aparecer al minuto, así
                que la arena no se vacía nunca.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Minuto 5 y minuto
                12</strong> — los monstruos que nadie enganchó corren hacia el centro, donde
                estás parado. Si te quedaste quieto, te llegan todos juntos.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Minuto 9</strong> — entra una
                segunda camada de 10, con respawn cada 30 segundos.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Minuto 15</strong> — aparecen
                12 cofres alrededor del centro. Valen 5 ofrendas cada uno y además sueltan
                pergaminos de encantar.
              </li>
            </ul>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Cuánto vale cada cosa
              </p>
              <p className="mt-3">
                El puntaje final es <strong className="font-semibold text-gold">
                ofrendas × 5</strong>, y cada cosa que matás le entrega las ofrendas directo al
                inventario del líder: no caen al piso, no se pierden y no hay que repartirlas.
              </p>
              <div className="mt-3">
                <DataTable headers={["Lo que matás", "Ofrendas", "Puntaje"]} rows={puntaje} />
              </div>
            </div>

            <Callout title="Entrar te borra los buffs" variant="warn">
              <p>
                El teletransporte a la arena te saca todos los efectos que no sobrevivan a la
                muerte. Buffearse antes de que el guía los anote es tirar la plata: buffeate
                adentro, en los dos minutos de calma del arranque. Y si traías Ofrendas de
                Sangre de otra corrida, también se borran al entrar.
              </p>
            </Callout>

            <Callout title="Pelear lejos del centro te seca" variant="warn">
              <p>
                La regeneración de HP y MP baja con la distancia al centro de la arena: al medio
                regeneras normal, y va cayendo hasta cortarse del todo a unos 2.000 de distancia.
                En las esquinas regeneras alrededor de la mitad. No es un mito del folklore: está
                en la fórmula.
              </p>
            </Callout>

            <Callout title="Morir sale barato" variant="info">
              <p>
                Adentro del Festival no se te cae el equipo y perdés solo un cuarto de la
                experiencia habitual. Pero no podés volver al pueblo mientras el Festival corra:
                o alguien te revive, o esperás tirado hasta el minuto 18.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="Subir la dificultad">
            <p>
              En el medio de la arena está la <strong className="font-semibold text-foreground">
              Festival Witch</strong>. El líder le puede pedir «Queremos más desafío» y ella
              suelta una tanda entera de monstruos extra.
            </p>

            <div>
              <p>Conviene más de lo que parece:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Esos monstruos dan el doble de ofrendas cada uno.</li>
                <li>También respawnean cada minuto, igual que los originales.</li>
                <li>No traen arqueros, así que es todo cuerpo a cuerpo que viene a ustedes.</li>
              </ul>
            </div>

            <Callout title="Una sola vez, y no se deshace" variant="warn">
              <p>
                La dificultad se sube una vez por corrida y no hay vuelta atrás. Si el grupo no
                aguanta, la única salida es pedirle a la Bruja que los saque, y ahí el puntaje
                queda en lo que hayan juntado hasta ese momento.
              </p>
            </Callout>

            <p className="text-sm text-muted">
              La misma Bruja es la puerta de salida: «Quiero salir del festival» los
              teletransporta afuera. Si lo pide el líder, sale el grupo entero.
            </p>
          </GuideStep>

          <GuideStep n="V" title="Registrá el puntaje" last>
            <p>
              Al minuto 18 los devuelven al lugar exacto donde estaban antes de entrar. Ahí el
              trabajo no terminó: el líder tiene que volver con el mismo Festival Guide y elegir
              «Quiero registrar un puntaje».
            </p>

            <Callout title="Cuarenta minutos y nada más" variant="warn">
              <p>
                El puntaje se registra dentro de los 40 minutos desde que arrancó el Festival, y
                solo lo puede hacer el líder que firmó la inscripción. Pasado ese rato no se
                acepta por ningún motivo y las ofrendas no sirvieron para nada. Tampoco se puede
                registrar mientras haya otro Festival en curso: hay una ventana entre tanda y
                tanda.
              </p>
            </Callout>

            <Callout title="Dos vallas distintas" variant="info">
              <p>
                Al registrar pasan dos cosas por separado. Si tu puntaje supera el récord de tu
                propio bando en ese escalón, tu grupo queda anotado como el candidato a cobrar la
                bolsa. Y si además supera el récord del bando rival, recién ahí tu bando se lleva
                los 60 a 150 puntos de la tabla. Ojo: las ofrendas se consumen igual, hayas
                batido el récord o no.
              </p>
            </Callout>
          </GuideStep>
        </div>

        {/* Qué se cobra */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ Qué se cobra
          </p>
          <div className="mt-3 max-w-3xl space-y-3 text-muted">
            <p>
              Todas las cuotas de inscripción de la semana se juntan en una bolsa por escalón.
              Al terminar la competencia, esa bolsa entera se paga en Adena Antigua al grupo que
              tenga el puntaje más alto de su escalón y pertenezca al bando ganador.
            </p>
            <p>
              Se cobra durante la validación de sellos (lunes 21:00 a viernes 21:00) con el
              Festival Guide del Oráculo, en «Cuánta bonificación acumulé». Cuantos más grupos
              hayan jugado esa semana, más grande es la bolsa.
            </p>
            <p>
              Aparte de eso, adentro se llevan lo que suelten los cofres: pociones y pergaminos
              de encantar del grado que le toca al escalón —D en el de nivel 31, C en los de 42 y
              53, B en el de 64 y A en el de sin límite—. Y si el grupo es de clan, los
              integrantes del clan ganador suman 200 puntos de reputación.
            </p>
          </div>

          <div className="mt-6 max-w-3xl">
            <p className="font-display text-base font-bold text-foreground">
              Para qué sirve la Adena Antigua
            </p>
            <p className="mt-2 text-muted">
              Es la moneda de los Siete Signos: se gasta en el Merchant of Mammon, en el
              Blacksmith of Mammon —que es quien desella las piezas Apella de la Grieta
              Dimensional— y en consumibles con el sacerdote de tu bando.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ? Por qué no me deja
          </p>
          <div className="mt-4">
            <DataTable headers={["Lo que ves", "Qué pasa"]} rows={faq} />
          </div>

          <p className="mt-8 text-xs text-muted/70">
            Todo lo descrito acá corresponde al comportamiento vigente del servidor. Lo propio de
            L2Thunder son dos cosas: el Festival arranca con 2 jugadores en vez de 5, y corre de
            viernes a lunes a las 21:00 hora argentina porque el ciclo de los Siete Signos acá
            dura una semana en vez de dos. La arena, los dieciocho minutos, las oleadas, los
            cofres, el valor de las ofrendas, las cuotas y el reparto de la bolsa siguen el
            diseño original del evento.
          </p>
        </section>
      </div>
    </div>
  );
}
