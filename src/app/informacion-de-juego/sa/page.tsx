import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import ItemExplorer from "@/components/informacion/ItemExplorer";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";
import ItemLabel from "@/components/guias/ItemLabel";
import { SA_GRIPS, SA_TABS, saWeapons } from "@/lib/sa";
import { loadItemImages } from "@/lib/itemImages";

export const metadata: Metadata = {
  title: "Special Abilities (SA) — Información de juego",
  description:
    "Guía completa de los SA de las armas de grado C, B y A, y lo que ya está listo del grado S: qué cristal usar, cómo subirlo, cuánto cuesta, dónde se aplica y se saca, y qué hace cada SA con los valores reales del servidor.",
};

const introStats = [
  { value: "127", label: "Armas con SA", sub: "grados C, B y A" },
  { value: "3", label: "Opciones por arma", sub: "una por color de cristal" },
  { value: "18", label: "SA distintos", sub: "según el arma" },
  { value: "5 a 12", label: "Etapa del cristal", sub: "según el arma" },
];

const strong = "font-semibold text-foreground";
const subtitulo = "font-display text-base font-bold text-foreground";

// Una columna de coordenadas: una por línea.
function coords(...lista: string[]): ReactNode {
  return (
    <>
      {lista.map((c) => (
        <span key={c} className="block py-0.5">
          <CoordChip>{c}</CoordChip>
        </span>
      ))}
    </>
  );
}

// El mismo arma con cada color de cristal: la misma opción no cae en el mismo color en todas las armas.
const mismoColor: ReactNode[][] = [
  [<ItemLabel key="s" name="Stormbringer" note="(espada)" />, "Haste", "Focus", "Health"],
  [<ItemLabel key="d" name="Dark Screamer" note="(daga)" />, "Bluff", "Focus", "Critical Damage"],
  [<ItemLabel key="c" name="Crystal Staff" note="(bastón)" />, "Acumen", "Mana Up", "Empower"],
];

const costos: string[][] = [
  ["Grado C", "5", "97 Gemstone C", "291.000", "873.000", "18"],
  ["Grado C", "6", "238 Gemstone C", "714.000", "2.142.000", "12"],
  ["Grado C", "7", "306 Gemstone C (3 armas piden 225)", "918.000 (675.000)", "2.754.000 (2.025.000)", "26"],
  ["Grado C", "8", "555 Gemstone C", "1.665.000", "4.995.000", "13"],
  ["Grado B", "9", "222 Gemstone B", "2.220.000", "6.660.000", "12"],
  ["Grado B", "10", "339 Gemstone B", "3.390.000", "10.170.000", "12"],
  ["Grado A", "11", "147 o 157 Gemstone A", "No cobra adena", "8.820.000 a 9.420.000", "11"],
  ["Grado A", "12", "140 a 157 Gemstone A", "No cobra adena", "8.400.000 a 9.420.000", "23"],
];

const fisicos: [string, string, string][] = [
  [
    "Focus",
    "Crit. Rate +90",
    "Son +9 puntos de probabilidad de crítico, no +90%: el motor tira un dado sobre 1000. Sirve para cualquier arma física.",
  ],
  [
    "Critical Damage",
    "Crit. Damage +425",
    "Suma un valor plano al daño crítico. En una daga rinde muchísimo más, porque el blow multiplica ese plano por 6,1.",
  ],
  ["Haste", "Atk. Spd. +12%", "Velocidad de ataque."],
  [
    "Rsk. Haste",
    "Atk. Spd. +18% con menos del 60% de HP",
    "Rsk. es de riesgo: sólo rinde cuando estás herido. Pide acompañarlo con vida o con un healer.",
  ],
  [
    "Rsk. Focus",
    "Crit. Rate de +99.9 a +138.7 con menos del 60% de HP",
    "Cambia según el arma; en grado A es +130. Sólo rinde herido.",
  ],
  [
    "Back Blow",
    "Crit. Rate de +37% a +67% por la espalda",
    "Es un multiplicador de tu probabilidad de crítico y sólo cuenta si pegás desde atrás. En grado A es +37%; en B y C va de +40% a +67% según el arma.",
  ],
  ["Mortal Strike", "Blow Success Rate +15%", "Para dagas: sube la chance de que el blow acierte."],
  [
    "Skill Power",
    "Skill Power +15%",
    "Daño de habilidades físicas +15%. No toca el golpe normal ni los blows de daga, que van por otra fórmula.",
  ],
  ["Anger", "P. Atk. +15%, Max HP −15%", "Pegás más y aguantás menos. En PvP se nota."],
];

const recursos: [string, string, string][] = [
  ["Health", "Max HP +25%", "El SA defensivo."],
  ["Mana Up", "Max MP +30%, MP Regen +15%", "Más maná y más rápida la recuperación."],
];

const magicos: [string, string, string][] = [
  ["Empower", "M. Atk. +32%", "El SA de daño para magos."],
  ["Acumen", "Casting Spd. +15%", "Lanzás más rápido."],
  [
    "Magic Critical",
    "M. Crit. Rate +300%",
    "Es ×4. Se multiplica con Wild Magic: con el buff nivel 2, que también es ×4, el total es ×16 sobre tu probabilidad base.",
  ],
  [
    "Servitor Sharing",
    "P. Atk. +25%, M. Atk. +12%",
    "Tu servitor también recibe el 25% de tu P. Atk. y el 12% de tu M. Atk. Es para invocadores.",
  ],
];

const alGolpear: [string, string, string][] = [
  [
    "Critical Stun",
    "Chance de aturdir 3 segundos con un golpe crítico",
    "La chance base es 30%, y después el aturdimiento tiene que entrar contra la resistencia del objetivo: en la práctica es menos.",
  ],
  ["Bluff", "Chance de girar al objetivo con un golpe crítico", "Lo da vuelta de espaldas a vos."],
  [
    "Critical Slow",
    "Speed −30% al objetivo con un golpe crítico",
    "Le baja un 30% la velocidad de movimiento. La chance base es 16%, y también pasa por la resistencia.",
  ],
];

const encabezadoSa = ["SA", "Qué da", "Para tener en cuenta"];

const etapasMonstruos: string[][] = [
  ["2", "Timak Orc (todos los tipos), Blade Stakato, Nos, Light Worm"],
  [
    "3",
    "Timak Orc Overlord y Shaman, Blade Stakato Drone, Forest of Mirrors Ghost, Light Bringer, Queen Undine Lad, Water Giant",
  ],
  ["4", "Mirror, Theeder Piker y Mage, Eva's Seeker, Garden Guard, Death Flyer, Fiend Archer, Musveren"],
  ["5", "Harit Lizardman (todos), Doll Master, Kaim Vanul, Zaken's Guard, Pirate Zombie Captain, Garden Guard Leader"],
  ["6", "Halingka, Yintzu, Doll Blader, Vale Master, Sairon y sus muñecos"],
  ["7", "Paliote, Hamrut"],
  ["8", "Kranrot, Doom Servant"],
  ["9", "Doom Guard, Doom Archer"],
  [
    "10",
    "Malruk (Knight, Berserker, Lord), Limal Karinness, Karik, Doom Knight, Trooper y Warrior, Pytan, los Platinum (Guardian y Tribe), los ángeles de los Sellos y Erin Ediunce",
  ],
];

const jefes: ReactNode[][] = [
  ["Beast Lord Behemoth", "70", coords("123504, −23696, −3481")],
  ["Roaring Skylancer", "70", coords("130500, 59098, 3584")],
  ["Meanas Anor", "70", coords("156704, −6096, −4185")],
  ["Antharas Priest Cloe", "74", coords("152660, 110387, −5520")],
  ["Krokian Padisha Sobekk", "74", coords("119760, 157392, −3744")],
];

const npcQuest: ReactNode[][] = [
  ["Jurek (Grand Magister)", "Giran", coords("85823, 153248, −3494")],
  ["Gideon (Magister)", "Oren", coords("82930, 54911, −1509")],
  ["Winonin (Magister)", "Aden", coords("145646, 23568, −2116")],
];

const herreros: ReactNode[][] = [
  ["Gludin", "Kluto", coords("−83172, 155483, −3174")],
  ["Gludio", "Pinter", coords("−15349, 124763, −3113")],
  ["Dion", "Poitan", coords("19737, 143122, −3028")],
  ["Giran", "Pushkin · Rupio", coords("77458, 148169, −3595", "77712, 148288, −3595", "82178, 148662, −3464")],
  ["Oren", "Helton", coords("83684, 55631, −1509")],
  ["Hunters Village", "Duning", coords("117613, 75310, −2648")],
  ["Aden", "Wilbert", coords("150608, 28510, −2247")],
  ["Heine", "Morning", coords("107763, 218725, −3659")],
  ["Goddard", "Hilda · Feynn", coords("146396, −58696, −2976", "146428, −58880, −2976")],
  ["Rune", "Vincenz", coords("45072, −48784, −800")],
  ["Schuttgart", "Byron · Siger", coords("88467, −139841, −1533", "88447, −139675, −1533")],
];

const problemas: string[][] = [
  [
    "El cristal dice que rechaza el alma",
    "El monstruo es demasiado flojo para la etapa que tiene tu cristal. Pasá a uno de la tabla de la etapa siguiente.",
  ],
  [
    "El cristal no absorbe nada",
    "Revisá que la quest esté activa, que tengas un solo cristal en la mochila, que hayas usado el cristal con el monstruo por debajo de la mitad de su vida y que el golpe final sea tuyo. Aun así la chance es 15%: seguí con el siguiente.",
  ],
  [
    "El herrero no me deja canjear",
    "Pide la etapa exacta del cristal, todas las Gemstone y el adena. Si el arma ya tiene un SA, primero hay que sacarlo en el Blacksmith of Mammon. Y las armas de grado A sólo se hacen con Mammon.",
  ],
  [
    "Me pasé de etapa",
    "El cristal no baja de etapa y un cristal de etapa 7 no vale para un arma que pide la 5. Te va a servir para un arma que pida esa etapa: elegí otra de ese tramo.",
  ],
  [
    "Perdí o vendí el cristal",
    "Volvé con Jurek, Gideon o Winonin. Si no tenés ningún cristal de etapa 0 a 10, te dan uno nuevo, de etapa 0 y del color que elijas.",
  ],
  [
    "Tengo un cristal de etapa 11 o 12 y el NPC me ofrece otro",
    "El NPC no reconoce los de etapa 11 y 12 como tuyos. No aceptes el nuevo: con dos cristales encima, ninguno de los dos absorbe.",
  ],
];

export default function SaPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/informacion-de-juego"
          className="-my-3 inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Información de juego
        </Link>

        {/* Intro */}
        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Guía de sistema · Armas de grado C, B y A, y el grado S que viene
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Special Abilities</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Cómo ponerle un SA a tu arma, paso a paso, y qué da cada uno
          </p>
          <p className="mt-6 max-w-[38rem] text-muted">
            Un Soul Crystal le agrega una habilidad permanente a un arma: más crítico, más
            velocidad de ataque, más vida, más daño mágico. Acá está todo junto: qué cristal usar,
            cómo subirlo, cuánto sale cada arma, dónde se aplica, cómo se saca y qué hace cada SA
            con los valores reales del servidor.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        <div className="mt-16">
          <GuideStep n="I" title="Qué es un SA y cómo se elige">
            <p>
              Un SA (Special Ability) es una habilidad que queda grabada en el arma y funciona
              mientras la tengas equipada. El arma con SA es otro ítem, por ejemplo{" "}
              <strong className={strong}>Stormbringer - Haste</strong>, y se hace a partir del arma
              base. Cada arma lleva un solo SA, y el encantamiento que tenga se mantiene.
            </p>
            <p>
              No elegís el SA: elegís el <strong className={strong}>color del cristal</strong>. Cada
              arma base tiene tres opciones, una por color (rojo, verde y azul), y la combinación es
              propia de cada arma. Con el mismo color, dos armas distintas dan SA distintos:
            </p>

            <DataTable
              headers={["Arma", "Cristal rojo", "Cristal verde", "Cristal azul"]}
              rows={mismoColor}
            />

            <Callout title="Cómo ver las tres opciones de tu arma" variant="info">
              <p>
                Pasá el mouse por el arma base: el tooltip lista sus tres SA, cada uno pintado del
                color de su cristal. En el arma que ya tiene el SA puesto se ve solamente el suyo,
                con los valores. También lo ves en la lista del herrero, que muestra qué se necesita
                para cada variante.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="II" title="Paso a paso">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className={strong}>Empezá la quest Enhance Your Weapon.</strong> Hace falta
                nivel 40. Se hace con Jurek, Gideon o Winonin, y ahí elegís el color del cristal.
                Te dan un Soul Crystal de etapa 0.
              </li>
              <li>
                <strong className={strong}>Subí el cristal.</strong> Cada alma que absorbe lo pasa a
                la etapa siguiente. Tiene que llegar justo a la etapa que pide tu arma (ver la
                tabla de costos).
              </li>
              <li>
                <strong className={strong}>Juntá las Gemstone y el adena</strong> que pide el
                tramo de tu arma.
              </li>
              <li>
                <strong className={strong}>Llevá el arma base y el cristal al herrero.</strong> En
                un herrero de pueblo se hacen las armas C y B; el Blacksmith of Mammon hace las de
                grado A. Abrí la lista, elegí tu arma y el color del cristal, y confirmá.
              </li>
            </ol>

            <p>Lo que vas a necesitar, en resumen:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Un <ItemLabel name="Red Soul Crystal" />, un{" "}
                <ItemLabel name="Green Soul Crystal" /> o un{" "}
                <ItemLabel name="Blue Soul Crystal" />, en la etapa del arma.
              </li>
              <li>
                <ItemLabel name="Gemstone C" /> para las armas C, <ItemLabel name="Gemstone B" />{" "}
                para las B y <ItemLabel name="Gemstone A" /> para las A.
              </li>
              <li>El arma base, sin SA. Con encantamiento no hay problema.</li>
            </ul>
          </GuideStep>

          <GuideStep n="III" title="Qué cristal pide cada arma y cuánto cuesta">
            <p>
              El tramo de cada arma sube con su grado y con lo poderosa que es. Es el cristal de
              esa etapa, ni uno más alto ni uno más bajo: <strong className={strong}>el herrero
              pide la etapa exacta</strong>. En la lista del herrero se ve el tramo de cada arma.
            </p>

            <DataTable
              headers={[
                "Grado",
                "Etapa del cristal",
                "Gemstone",
                "Adena",
                "Total comprando todo",
                "Armas",
              ]}
              rows={costos}
            />

            <p>
              El adena de la tabla es el precio base. Los herreros de pueblo le suman el impuesto
              del castillo; el Blacksmith of Mammon, que hace las armas A, no cobra adena. El total
              usa los precios de Mr. Cat: Gemstone C a 6.000, B a 20.000 y A a 60.000 cada una. Las
              Gemstone C y B también las venden los comerciantes de los pueblos.
            </p>

            <Callout title="Pará en la etapa justa" variant="warn">
              <p>
                El cristal sólo sube, no baja. Si lo llevás a la etapa 7 pero tu arma pide la 5, ese
                cristal ya no te sirve para ella. Antes de seguir cazando, fijate qué etapa pide el
                arma que querés.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="Armas de ejemplo">
            <p>
              Algunas armas con sus tres opciones y su costo, para que veas cómo se combina todo.
              Elegí un grado, abrí una mano o dos manos y tocá cada arma. Los valores son los reales
              del servidor. El grado S todavía no se puede aplicar, pero sus opciones ya están
              definidas: mirá la pestaña Grado S.
            </p>

            <ItemExplorer
              idPrefix="sa"
              tabsLabel="Grado del arma"
              tabs={SA_TABS}
              groups={SA_GRIPS}
              data={saWeapons}
              images={loadItemImages("sa")}
              noun={{ one: "arma", many: "armas", groupEmpty: "Sin ejemplos cargados." }}
              headingLevel={3}
            />

            <Callout title="Las de grado A y S suman daño en PvP" variant="info">
              <p>
                Todas las opciones de las armas de grado A y S agregan además un +5% de daño contra
                jugadores. Es el renglón Increases damage inflicted during PvP del tooltip. Las de B
                y C no lo llevan.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="V" title="Qué hace cada SA">
            <p>
              Son 18 en total. Los números de abajo son los que aplica el servidor, y coinciden con
              lo que dice el tooltip del juego.
            </p>

            <div className="space-y-3">
              <h3 className={subtitulo}>Ataque físico</h3>
              <DataTable headers={encabezadoSa} rows={fisicos} />
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Vida y maná</h3>
              <DataTable headers={encabezadoSa} rows={recursos} />
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Magia e invocaciones</h3>
              <DataTable headers={encabezadoSa} rows={magicos} />
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Efectos al pegar un crítico</h3>
              <DataTable headers={encabezadoSa} rows={alGolpear} />
            </div>

            <Callout title="Los efectos al golpear tiran dos dados" variant="info">
              <p>
                Critical Stun, Bluff y Critical Slow primero tiran si el arma intenta lanzar el
                efecto, y después si ese efecto entra contra la resistencia del objetivo. Por eso
                un SA con 30% de chance no aturde el 30% de las veces: aturde bastante menos.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="VI" title="Cómo subir el cristal">
            <p>
              El cristal arranca en la etapa 0 y sube de a una etapa por cada alma que absorbe. Hay
              etapas hasta la 13, pero ninguna arma pide más de la 12. Las etapas 1 a 10 se suben
              con monstruos comunes, y la 11 y la 12 con jefes de raid.
            </p>

            <div className="space-y-3">
              <h3 className={subtitulo}>Con quién empezar</h3>
              <DataTable headers={["NPC", "Pueblo", "Coordenadas"]} rows={npcQuest} />
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Cómo se absorbe un alma</h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  La quest tiene que estar activa y tenés que llevar{" "}
                  <strong className={strong}>un solo cristal</strong> en la mochila, del color que
                  sea. Con dos, se interfieren y ninguno absorbe.
                </li>
                <li>
                  Pegale al monstruo hasta dejarlo por debajo de la mitad de su vida y usá el
                  cristal sobre él. Después tenés que darle vos el golpe final: el alma se la lleva
                  quien lo remata.
                </li>
                <li>
                  La chance es 15% por monstruo. Si falla, el cristal queda igual: probás con el
                  siguiente. En L2Thunder el cristal no se rompe.
                </li>
                <li>
                  Si el cristal dice que rechaza el alma, el monstruo es demasiado flojo para su
                  etapa. Hay que pasar a uno más fuerte.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Etapas 1 a 10: monstruos comunes</h3>
              <p>
                Cada monstruo sube el cristal hasta cierta etapa y no más. La tabla dice hasta cuál
                lleva cada grupo, y cada grupo sirve también para todas las etapas anteriores.
              </p>
              <DataTable headers={["Lleva el cristal hasta la etapa", "Monstruos"]} rows={etapasMonstruos} />
              <p>
                Jurek nombra las zonas donde buscarlos: el norte de Oren, el Forest of Mirrors, la
                Cave of Giants, el Devastated Castle, los pisos altos de la Tower of Insolence, lo
                profundo de la Lair of Antharas, el Eva&apos;s Underwater Garden y la Devil&apos;s
                Isle.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Etapas 11 y 12: jefes de raid</h3>
              <p>
                Con estos jefes no hace falta usar el cristal sobre ellos: cada integrante del grupo
                que esté cerca y lleve su cristal tira por su cuenta, con un 40% de chance. Cada
                éxito sube una etapa, así que para la 11 hace falta un éxito sobre un cristal de
                etapa 10, y para la 12, otro más. Hoy están abiertos estos cinco:
              </p>
              <DataTable headers={["Jefe", "Nivel", "Coordenadas"]} rows={jefes} />
              <p>
                Reaparecen más o menos cada 36 horas. Sólo funcionan para cristales de etapa 10 y
                11: con uno de etapa más baja no pasa nada.
              </p>
            </div>

            <Callout title="Los jefes épicos todavía están cerrados" variant="info">
              <p>
                Zaken, Baium y el resto de los épicos también suben cristales, y con el 100% de
                chance, pero hoy no están disponibles. Cuándo se abre cada uno está en{" "}
                <Link
                  href="/apertura-escalonada"
                  className="text-accent underline underline-offset-2 hover:text-gold"
                >
                  Apertura escalonada
                </Link>
                .
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="VII" title="Dónde se aplica y cómo se saca">
            <div className="space-y-3">
              <h3 className={subtitulo}>Grados C y B: herreros de pueblo</h3>
              <p>
                Cualquiera de estos herreros te hace el canje. Hablá con él y abrí la lista de
                habilidades especiales.
              </p>
              <DataTable headers={["Pueblo", "Herrero", "Coordenadas"]} rows={herreros} />
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Grado A: el Blacksmith of Mammon</h3>
              <p>
                Está en Giran, en dos lugares. En su menú elegí Grado A y la opción de otorgar
                habilidad especial a un arma de grado A. Paga con cristal y Gemstone A, sin adena.
              </p>
              <DataTable
                headers={["Pueblo", "NPC", "Coordenadas"]}
                rows={[
                  [
                    "Giran",
                    "Blacksmith of Mammon",
                    coords("82650, 149766, −3495", "79692, 145031, −3522"),
                  ],
                ]}
              />
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Cómo se saca un SA</h3>
              <p>
                Se saca en el Blacksmith of Mammon, con cualquier arma, sea del grado que sea:
                elegí Remove a weapon&apos;s special capability. Es gratis y el arma vuelve a ser la
                base, con su encantamiento. El cristal se pierde. Los herreros de pueblo no sacan
                SA.
              </p>
              <p>
                Para cambiar el SA de un arma hay que sacarlo y volver a aplicar otro con un cristal
                nuevo, y se paga otra vez todo.
              </p>
            </div>

            <Callout title="Antes de mejorar o cambiar un arma en Mammon" variant="warn">
              <p>
                El SA no se transfiere cuando mejorás un arma, y las armas con SA no se pueden
                intercambiar. Si vas a hacer cualquiera de las dos cosas, sacale el SA antes.
              </p>
            </Callout>

          </GuideStep>

          <GuideStep n="VIII" title="Grado S: lo que ya está y lo que falta">
            <p>
              Las armas de grado S todavía no se abren, y por eso hoy no se les puede poner un SA:
              el Blacksmith of Mammon dice que los secretos del grado S todavía no le fueron
              revelados. Cuándo se abre el grado S está en{" "}
              <Link
                href="/apertura-escalonada"
                className="text-accent underline underline-offset-2 hover:text-gold"
              >
                Apertura escalonada
              </Link>
              .
            </p>

            <div className="space-y-3">
              <h3 className={subtitulo}>Lo que ya está definido</h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Las armas S tienen sus tres opciones por color, igual que las demás: Forgotten
                  Blade, Basalt Battlehammer, Imperial Staff, Angel Slayer, Dragon Hunter Axe, Saint
                  Spear, Demon Splinter, Heaven&apos;s Divider, Arcana Mace y Draconic Bow. Cinco
                  están en la pestaña Grado S de las armas de ejemplo.
                </li>
                <li>
                  Son los mismos SA de la tabla de arriba, con los mismos valores, y todos suman el
                  +5% de daño en PvP.
                </li>
                <li>
                  El Blacksmith of Mammon ya está preparado para sacar el SA de estas armas, gratis,
                  igual que en las otras.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className={subtitulo}>Lo que falta definir</h3>
              <p>
                La receta: qué etapa de cristal, cuántas Gemstone S y cuánto cobra Mammon para
                ponerle el SA a un arma S. Eso se decide y se anuncia cuando se abra el grado S.
              </p>
            </div>

            <Callout title="La etapa 13 existe, pero hoy nada la pide" variant="info">
              <p>
                El cristal llega hasta la etapa 13, y esa última etapa sólo la suben los jefes más
                fuertes: Antharas, Valakas, Scarlet van Halisha, Ember y Anakazel, todos cerrados
                hoy. Ninguna receta de las armas C, B y A la usa.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IX" title="Si algo no sale" last>
            <DataTable headers={["Qué pasa", "Qué hacer"]} rows={problemas} />

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                Todos los valores de esta página salen del servidor en funcionamiento y se
                contrastaron uno por uno con el tooltip del juego. Lo propio de L2Thunder es el
                catálogo de SA: se rehizo entero, con valores unificados, tres SA nuevos, la baja de
                los obsoletos y tres opciones en cada arma. Qué cambió y por qué está en{" "}
                <Link
                  href="/informacion-de-juego/sa-reworkeados"
                  className="text-gold underline underline-offset-2 hover:text-foreground"
                >
                  SA Reworkeados
                </Link>
                .
              </p>
            </Callout>
          </GuideStep>
        </div>
      </div>
    </div>
  );
}
