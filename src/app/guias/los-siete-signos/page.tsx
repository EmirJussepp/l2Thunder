import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";

export const metadata: Metadata = {
  title: "Los Siete Signos — Guía",
  description:
    "Amanecer contra Ocaso: cómo elegir bando y sello, juntar piedras, jugar el Festival de la Oscuridad y cobrar Adena Antigua en Los Siete Signos.",
};

const introStats = [
  { value: "20", label: "Nivel", sub: "con 1º cambio de clase" },
  { value: "2", label: "Bandos", sub: "Amanecer u Ocaso" },
  { value: "7", label: "Ciclo", sub: "días, se reinicia solo" },
  { value: "Vie 21", label: "Competencia", sub: "hasta el lunes 21:00" },
  { value: "Lun 21", label: "Validación", sub: "hasta el viernes 21:00" },
];

const bandos: [string, string, string][] = [
  ["Clan o alianza con castillo", "Entrás gratis", "No podés"],
  ["Sin castillo", "50.000 adena, o un Lord of Manor's Certificate", "Entrás gratis"],
  ["Sin 1º cambio de clase", "No podés, en ninguno de los dos", "No podés, en ninguno de los dos"],
];

const sellos: [string, string][] = [
  [
    "Avaricia",
    "Las 8 necrópolis pasan a ser exclusivas de tu bando. Aparece el Merchant of Mammon y se abre el Santuario Prohibido, donde duermen Lilith y Anakim.",
  ],
  [
    "Gnosis",
    "Las 6 catacumbas pasan a ser exclusivas de tu bando. Aparece el Blacksmith of Mammon, los teletransportes salen más baratos y en cada pueblo aparece un orador que bendice a los tuyos y un predicador que maldice a los del otro bando.",
  ],
  [
    "Discordia",
    "Cambia las reglas de los asedios: más defensa en puertas y murallas, mercenarios más fuertes, impuesto máximo más alto y +10% de CP para todo tu bando (−10% para el otro).",
  ],
];

const zonas: [string, string, string, string][] = [
  ["Sacrifice", "20–30", "Heretic", "30–40"],
  ["Pilgrim's", "32–40", "Branded", "40–51"],
  ["Worshipper's", "42–51", "Apostate", "50–60"],
  ["Patriot's", "52–60", "Witch", "60–72"],
  ["Ascetic's", "60–67", "Dark Omens", "72–80"],
  ["Martyr's", "65–72", "Forbidden Path", "75–80"],
  ["Saint's", "70–78", "—", "—"],
  ["Disciple's", "70–80", "—", "—"],
];

const piedras: [string, string, string][] = [
  ["Blue Seal Stone", "3", "Hasta nivel 60; arriba de ahí deja de caer."],
  ["Green Seal Stone", "5", "Desde nivel 33, y en las zonas altas cae de a cientos."],
  ["Red Seal Stone", "10", "En todos los niveles, pero de a poquitas."],
];

const festival: [string, string, string, string, string][] = [
  ["Nivel 31 o menos", "900", "540", "270", "60"],
  ["Nivel 42 o menos", "1.500", "900", "450", "70"],
  ["Nivel 53 o menos", "3.000", "1.800", "900", "100"],
  ["Nivel 64 o menos", "4.500", "2.700", "1.350", "120"],
  ["Sin límite", "6.000", "3.600", "1.800", "150"],
];

const faq: [string, string][] = [
  [
    "«No tenés la experiencia suficiente… volvé cuando hayas hecho tu primer cambio de clase»",
    "Te falta el 1º cambio de clase. No alcanza con ser nivel 20.",
  ],
  [
    "«Nadie que pertenezca al clan que conquistó el castillo puede unirse a nosotros»",
    "Estás en un clan o alianza con castillo: solo podés entrar al Amanecer.",
  ],
  [
    "«No tenés suficiente adena. Traeme 50.000»",
    "Querés entrar al Amanecer sin castillo. Pagá la cuota o conseguí un Lord of Manor's Certificate con el chambelán de un castillo.",
  ],
  ["«No estás participando ya en los Siete Signos…»", "Ya estás anotado en ese bando. Es solo un aviso."],
  ["«Solo un Señor del Amanecer puede aportar piedras de sello»", "Le estás hablando al sacerdote del bando contrario."],
  [
    "«No se aceptan inscripciones al Festival mientras el sello esté vigente»",
    "Estás en la validación de sellos. El festival vuelve el viernes a las 21:00.",
  ],
  ["«Tenés que estar en un grupo de al menos 2 integrantes»", "Para el festival hace falta grupo. Solo no se puede."],
  [
    "«Todos los integrantes de tu grupo tienen que ser…»",
    "Alguien del grupo se pasa del escalón de nivel de ese guía. Probá con el guía del escalón siguiente.",
  ],
  [
    "«No aportaste ninguna piedra de sello durante la competencia»",
    "Fuiste a cobrar sin haber entregado nada, o entregaste después del lunes 21:00.",
  ],
  [
    "«Pensabas que me ibas a engañar? No vas a pasar»",
    "Es el Gatekeeper Ziggurat. Acá no debería salirte nunca: las catacumbas y necrópolis están abiertas. Si te sale, avisá.",
  ],
];

export default function LosSieteSignosPage() {
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
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Los Siete Signos</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Amanecer contra Ocaso, una semana por ciclo
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Todo el servidor se parte en dos bandos y compite por el control de tres sellos. Se
            junta puntaje matando en catacumbas y necrópolis, el bando que gana cobra en Adena
            Antigua y se queda con beneficios hasta el ciclo siguiente. Se entra en cinco minutos
            y no hay nada que perder: si tu bando pierde, tus piedras siguen en tu inventario.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-16">
          <GuideStep n="I" title="Elegí tu bando">
            <p>
              En cada pueblo hay dos sacerdotes, uno por bando. Hablales y pedí «Quiero
              participar en los Siete Signos».
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-foreground">Priest of Dawn</strong> — los
                Señores del Amanecer. En Giran está en{" "}
                <CoordChip>83264, 149337, −3431</CoordChip>.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Dusk Priestess</strong> — los
                Revolucionarios del Ocaso. En Giran está en{" "}
                <CoordChip>83563, 149684, −3431</CoordChip>.
              </li>
            </ul>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Quién puede entrar a cada bando
              </p>
              <div className="mt-3">
                <DataTable headers={["Tu situación", "Amanecer", "Ocaso"]} rows={bandos} />
              </div>
            </div>

            <Callout title="No hay vuelta atrás" variant="warn">
              <p>
                Una vez que te anotás, no podés cambiar de bando ni darte de baja hasta que
                arranque el ciclo siguiente. Cuando termina el ciclo se borran todas las
                afiliaciones y hay que volver a anotarse.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="II" title="Elegí por qué sello peleás">
            <p>
              Apenas te anotás, el sacerdote te hace elegir uno de los tres sellos. No cambia lo
              que hacés durante la semana: define qué se lleva tu bando si gana.
            </p>

            <DataTable
              headers={["Sello", "Lo que da si tu bando lo controla"]}
              rows={sellos}
            />

            <Callout title="Cómo se gana un sello" variant="info">
              <p>
                Ganar la competencia no alcanza. Para quedarse con un sello, al menos el{" "}
                <strong className="font-semibold text-foreground">35%</strong> de los miembros
                del bando ganador tiene que haber elegido ese sello. Si tu bando ya lo tenía del
                ciclo anterior, le alcanza con el{" "}
                <strong className="font-semibold text-foreground">10%</strong> para conservarlo.
                Por eso conviene ponerse de acuerdo y concentrarse en uno.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="III" title="Juntá piedras de sello">
            <p>
              Las piedras caen de los mobs de las catacumbas y las necrópolis. Es el{" "}
              <strong className="font-semibold text-foreground">50%</strong> del puntaje de tu
              bando y lo podés hacer solo.
            </p>

            <div>
              <p className="font-display text-base font-bold text-foreground">Cómo llegar</p>
              <p className="mt-3">
                Hablale a <strong className="font-semibold text-foreground">Fiorella, la
                Guardiana de Giran</strong> (<CoordChip>83370, 147902, −3431</CoordChip>), y
                entrá por SEVEN SIGNS → Catacumbas o Necropolis. Cada destino muestra el nivel de
                sus monstruos y te deja adentro, no en la puerta.
              </p>
              <div className="mt-3">
                <DataTable
                  headers={["Necrópolis", "Nivel", "Catacumba", "Nivel"]}
                  rows={zonas}
                />
              </div>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">Los tres colores</p>
              <div className="mt-3">
                <DataTable headers={["Piedra", "Vale", "Dónde cae"]} rows={piedras} />
              </div>
              <p className="mt-3">
                Ese número es a la vez el puntaje que le suma a tu bando y la Adena Antigua que
                cobrás si ganan. Por volumen, las zonas de nivel alto rinden mucho más: la verde
                vale menos por unidad pero cae en pilas enormes.
              </p>
            </div>

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                Acá las catacumbas y las necrópolis están abiertas siempre y para todos, estés o
                no anotado en un bando. En el diseño original te las cerraban si perdías, y era
                la queja número uno del evento.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="Entregá las piedras antes del lunes">
            <p>
              Volvé con el sacerdote de tu bando y elegí «Quiero aportar Piedras de Sello».
              Podés entregar de a un color o todas juntas. Se puede entregar todas las veces que
              quieras durante la competencia.
            </p>

            <Callout title="Lo que traba a casi todos" variant="warn">
              <p>
                Las piedras que quedan en tu inventario no suman nada. El puntaje se cuenta el
                lunes a las 21:00 y lo que no entregaste antes de esa hora no entra en la cuenta
                de esta semana. No se pierden: te quedan para el ciclo siguiente, pero no ayudan
                a ganar este.
              </p>
            </Callout>

            <p className="text-sm text-muted">
              Hay un tope de <strong className="font-semibold text-foreground">1.000.000</strong>{" "}
              de puntos de aporte por jugador y por ciclo. Es altísimo, no lo vas a tocar.
            </p>
          </GuideStep>

          <GuideStep n="V" title="El Festival de la Oscuridad" last>
            <p>
              Es el otro 50% del puntaje, y va aparte de las piedras. Tu grupo entra a una arena
              cerrada, pelea 18 minutos contra oleadas de monstruos y junta Blood Offerings:
              cuantas más junten, más alto el puntaje. Acá va lo esencial; el minuto a minuto de
              la arena, las oleadas y la Festival Witch están en{" "}
              <Link
                href="/guias/el-festival-de-la-oscuridad"
                className="underline decoration-accent/40 underline-offset-2 hover:text-foreground"
              >
                su propia guía
              </Link>
              .
            </p>

            <div>
              <p className="font-display text-base font-bold text-foreground">Cómo se entra</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Pedile al sacerdote de tu bando que te lleve al Oráculo.</li>
                <li>Ahí hablale al Festival Guide del escalón que te corresponda por nivel.</li>
                <li>
                  El líder del grupo se anota y paga la cuota en piedras de sello —una sola vez,
                  por todo el grupo—.
                </li>
                <li>Al salir, el líder vuelve con el mismo guía a registrar el puntaje.</li>
              </ol>
            </div>

            <div>
              <div className="mt-3">
                <DataTable
                  headers={["Escalón", "Azules", "Verdes", "Rojas", "Puntos si ganan"]}
                  rows={festival}
                />
              </div>
              <p className="mt-3">
                Pagás en uno solo de los tres colores, el que elijas. Todas las cuotas que se
                juntan durante la semana se acumulan y se las lleva entera, en Adena Antigua, el
                grupo con el puntaje más alto de cada escalón que pertenezca al bando ganador.
              </p>
            </div>

            <Callout title="Dos relojes que corren" variant="warn">
              <p>
                El puntaje hay que registrarlo dentro de los 40 minutos desde que arrancó el
                festival, y solo lo puede registrar el líder. Pasado ese rato no se acepta por
                ningún motivo. Además, las inscripciones se abren cada 20 minutos y no hay
                festival durante la validación de sellos: solo corre de viernes a lunes.
              </p>
            </Callout>

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                Alcanza con un grupo de 2 jugadores. En el diseño original hacían falta 5, y en
                la práctica eso dejaba el festival muerto. Lo que sí se mantiene: todos del mismo
                bando y todos dentro del mismo escalón de nivel.
              </p>
            </Callout>
          </GuideStep>
        </div>

        {/* Cómo corre la semana */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ⏱ Cómo corre la semana
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            El ciclo completo dura <strong className="font-semibold text-foreground">1
            semana</strong> y se reinicia solo.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="card-surface rounded-none p-5">
              <p className="font-display text-sm font-bold text-gold">Competencia</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-accent-2">
                Viernes 21:00 a lunes 21:00
              </p>
              <p className="mt-2 text-sm text-muted">
                Te anotás, juntás piedras, las entregás y jugás el festival. Tres días, con el
                fin de semana entero adentro.
              </p>
            </div>
            <div className="card-surface rounded-none p-5">
              <p className="font-display text-sm font-bold text-gold">Validación de sellos</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-accent-2">
                Lunes 21:00 a viernes 21:00
              </p>
              <p className="mt-2 text-sm text-muted">
                Se cobran las recompensas y el bando ganador disfruta los beneficios de los
                sellos que se quedó.
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted/70">
            Entre un período y el otro hay 15 minutos en los que el sacerdote no te atiende: está
            contando los puntajes.
          </p>

          <div className="mt-6">
            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                El ciclo original dura dos semanas y cambia los lunes a las 18:00 del servidor.
                Acá dura una, y los dos cambios caen a las 21:00 hora argentina, en horario pico,
                para que el anuncio del ganador lo vea la mayor cantidad de gente posible.
              </p>
            </Callout>
          </div>
        </section>

        {/* Qué se cobra */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ Qué se cobra y en qué se gasta
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            Durante la validación, volvé con el sacerdote de tu bando y pedí «Quiero mi
            recompensa por juntar Piedras de Sello». Cobrás Adena Antigua:{" "}
            <strong className="font-semibold text-foreground">3</strong> por cada piedra azul,{" "}
            <strong className="font-semibold text-foreground">5</strong> por cada verde y{" "}
            <strong className="font-semibold text-foreground">10</strong> por cada roja que
            hayas entregado.
          </p>

          <div className="mt-6">
            <Callout title="Solo cobra el que gana" variant="warn">
              <p>
                Si tu bando pierde la competencia, no cobrás nada por las piedras que
                entregaste. Por eso el bando importa tanto como el farmeo.
              </p>
            </Callout>
          </div>

          <div className="mt-6 max-w-3xl">
            <p className="text-muted">La Adena Antigua se gasta en tres lugares:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>
                <strong className="font-semibold text-foreground">El sacerdote de tu
                bando</strong> — pociones de velocidad y de casteo, pergaminos de SP y otros
                consumibles.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Merchant of Mammon</strong> —
                más de 70 artículos: pergaminos de encantar de todos los grados, cristales de
                grado A, gemas y tinturas.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Blacksmith of Mammon</strong> —
                cambia armas de grado C, D y algo de B, y le pone habilidad especial a un arma de
                grado A.
              </li>
            </ul>
            <p className="mt-4 text-muted">
              Si te sobraron piedras y tu bando ganó, el sacerdote también te las cambia por
              Adena Antigua con «Quiero canjear Piedras de Sello», al mismo precio.
            </p>
          </div>

          <div className="mt-6">
            <Callout title="Los Mammon, acá" variant="custom">
              <p>
                En Giran los tres Mammon están parados de forma permanente y los puede usar
                cualquiera, gane quien gane. En el diseño original aparecen y desaparecen según
                quién controle cada sello.
              </p>
            </Callout>
          </div>
        </section>

        {/* La Grieta Dimensional */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ De paso: la Grieta Dimensional
          </p>
          <div className="mt-3 max-w-3xl space-y-3 text-muted">
            <p>
              Adentro de cada catacumba y cada necrópolis hay un{" "}
              <strong className="font-semibold text-foreground">Dimensional Gate
              Keeper</strong>. No tiene nada que ver con el puntaje de los Siete Signos, pero es
              la puerta a la Grieta Dimensional: seis áreas por nivel, con salas que se van
              corriendo solas y un jefe en una de ellas.
            </p>
            <p>
              Se entra en grupo de 2 o más, cada uno con sus Dimensional Fragments (entre 18 y 33
              según el área). Los fragmentos los conseguís aceptándole la misión al mismo Gate
              Keeper y matando en esas zonas.
            </p>
          </div>

          <div className="mt-6">
            <Callout title="Tiene su propia guía" variant="info">
              <p>
                La Grieta tiene su nota aparte:{" "}
                <Link href="/guias/la-grieta-dimensional" className="underline decoration-accent/40 underline-offset-2 hover:text-foreground">
                  cómo elegir escalón, sobrevivir al reloj y llegar a Anakazel
                </Link>
                . Lo que te interesa saber acá: mientras farmeás piedras de sello estás juntando
                fragmentos para entrar.
              </p>
            </Callout>
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
            Todo lo descrito acá corresponde al comportamiento vigente del servidor. Las reglas
            propias de L2Thunder son cuatro: el ciclo dura una semana en vez de dos y cambia a
            las 21:00 hora argentina; las catacumbas y necrópolis están abiertas a todos siempre;
            el Festival arranca con 2 jugadores en vez de 5; y los Mammon de Giran atienden a
            cualquiera. Todo lo demás —los tres sellos, el 35% y el 10%, el valor de las
            piedras, las cuotas del festival y las recompensas— sigue el diseño original del
            evento.
          </p>
        </section>
      </div>
    </div>
  );
}
