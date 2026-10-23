import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";
import ItemLabel from "@/components/guias/ItemLabel";
import ItemList from "@/components/guias/ItemList";

export const metadata: Metadata = {
  title: "La Subclase — Guía",
  description:
    "Las dos misiones que hay que terminar para habilitar una segunda clase: Fate's Whisper y Mimir's Elixir, con los cuatro raid bosses, el cuchillo, los cristales y los ingredientes del elixir.",
};

const introStats = [
  { value: "75", label: "Nivel", sub: "para empezar" },
  { value: "3", label: "Subclases", sub: "como máximo" },
  { value: "40", label: "Empieza en", sub: "y llega a 80" },
  { value: "4", label: "Raids", sub: "8 a 11 h de espera" },
];

const guardianes: [string, string, string, string][] = [
  ["Shilen’s Messenger Cabrio", "70", "Coffer of the Dead", "Reiria’s Soul Orb"],
  ["Kernon", "75", "Chest of Kernon", "Kernon’s Infernium Scepter"],
  ["Longhorn Golkonda", "79", "Chest of Golkonda", "Golkonda’s Infernium Scepter"],
  ["Death Lord Hallate", "73", "Chest of Hallate", "Hallate’s Infernium Scepter"],
];

const armas: [string, string][] = [
  ["Sword of Damascus", "Tallum Blade"],
  ["Lance", "Halberd"],
  ["Deadman's Glory", "Elemental Sword"],
  ["Art of Battle Axe", "Meteor Shower"],
  ["Staff of Evil Spirits", "Dasparion's Staff"],
  ["Demon's Dagger", "Bloody Orchid"],
  ["Bellion Cestus", "Blood Tornado"],
  ["Bow of Peril", "Carnage Bow"],
  ["Samurai Long Sword", "Keshanberk"],
  ["Guardian Sword", "Infernal Master"],
  ["Wizard's Tear", "Spiritual Eye"],
  ["Kaim Vanul's Bones", "Destroyer Hammer"],
  ["Star Buster", "Destroyer Hammer"],
];

const reglas: [string, string][] = [
  ["Subclases como máximo", "3"],
  ["Nivel en el que arranca", "40"],
  ["Nivel máximo que alcanza", "80"],
  ["¿Se cambia en cualquier lado?", "No: hay que ir a un Village Master"],
];

const faq: [string, string][] = [
  [
    "El Village Master no ofrece la subclase",
    "Te falta terminar Fate’s Whisper o Mimir’s Elixir. Tener nivel 75 no alcanza.",
  ],
  [
    "Golpeo al boss y el cuchillo no se llena",
    "Tenelo equipado, no en el inventario. Y seguí pegando: podés fallar el golpe.",
  ],
  [
    "Maté al boss y no veo el cofre",
    "Aparece junto al cuerpo y dura 30 minutos. Si ya pasó, hay que esperar la reaparición: de 36 a 60 horas.",
  ],
  [
    "No sé de dónde sacar 984 cristales",
    "Se compran en el grocery de cualquier ciudad a 4.120 adena. No hay que romper un arma.",
  ],
  [
    "La urna me rechaza la mezcla",
    "El orden está mal. No perdiste nada: volvé a intentar con otro orden.",
  ],
  [
    "No encuentro de dónde sacar el Pure Silver",
    "No cae de ningún monstruo. Se fabrica en Q373 Supplier of Reagents.",
  ],
];

const strong = "font-semibold text-foreground";
const gold = "font-semibold text-gold";

export default function LaSubclasePage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/guias"
          className="-my-3 inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Guías
        </Link>

        {/* Intro */}
        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Guía de sistema · Nivel 75+
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">La Subclase</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Las dos misiones que hay que terminar para poder elegir una segunda clase
          </p>
          <p className="mt-6 max-w-[38rem] text-muted">
            Una subclase es un personaje entero dentro del tuyo: empieza en nivel 40, sube aparte y
            te da sus skills. Para habilitarla hay que completar Fate’s Whisper y Mimir’s Elixir. No
            son largas por la cantidad de pasos, sino por una sola cosa: cuatro raid bosses, que en
            nuestro servidor vuelven cada 8 a 11 horas.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-20">
          <GuideStep n="I" title="Qué te van a pedir">
            <p>
              Cuando le pidas la subclase a un Village Master, el servidor revisa que tengas las dos
              misiones terminadas. No alcanza con el nivel.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className={gold}>Q234 — Fate’s Whisper:</strong> termina con un arma de grado
                A y la Star of Destiny.
              </li>
              <li>
                <strong className={gold}>Q235 — Mimir’s Elixir:</strong> consume esa estrella y te
                deja un Scroll: Enchant Weapon A-Grade.
              </li>
            </ul>

            <Callout title="Si sos noble" variant="info">
              <p>
                El chequeo se saltea entero: un personaje noble pide la subclase sin hacer ninguna
                de las dos.
              </p>
            </Callout>

            <p>
              Las dos pagan bien por sí solas —un arma A y un pergamino de encantamiento A—, así que
              el trabajo no se hace sólo por la subclase.
            </p>
          </GuideStep>

          <GuideStep n="II" title="Fate’s Whisper — los cuatro guardianes">
            <p>
              Arranca con <strong className={strong}>Reorin</strong> en la Herrería de Hardin —{" "}
              <CoordChip>92743, 55523, −3370</CoordChip>. Te va a mandar a matar cuatro raid bosses:
              cada uno deja un cofre y de cada cofre sale una pieza.
            </p>

            <DataTable
              headers={["Raid boss", "Nivel", "Cofre", "Pieza"]}
              rows={guardianes.map(([boss, nivel, cofre, pieza]) => [boss, nivel, cofre, pieza])}
            />

            <ItemList
              items={[
                { name: "Reiria's Soul Orb" },
                { name: "Kernon's Infernium Scepter" },
                { name: "Golkonda's Infernium Scepter" },
                { name: "Hallate's Infernium Scepter" },
              ]}
            />

            <Callout title="Propio de L2Thunder · los cofres duran 30 minutos" variant="custom">
              <p>
                En el diseño original el cofre se desvanecía a los 2 minutos: si no estabas parado
                ahí en el momento exacto, perdías la pieza y te tocaba esperar la reaparición
                entera. Acá dura media hora.
              </p>
              <p>
                Y el cofre no tiene dueño: cada jugador que haya llegado a ese punto de la misión
                saca el suyo del mismo cofre. No hay que repartir ni hacer cola.
              </p>
            </Callout>

            <Callout title="Propio de L2Thunder · reaparecen entre 8 y 11 horas" variant="custom">
              <p>
                En el diseño original estos cuatro tardaban 36 a 60 horas en volver: si llegabas
                tarde a uno, el día estaba perdido. Acá reaparecen con 8 horas fijas más hasta 3 al
                azar, o sea entre 8 y 11 horas. Entran los cuatro en el mismo día.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="III" title="El cuchillo y la sangre">
            <p>Con las cuatro piezas, la misión te pasea por tres NPC que no cobran nada:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className={strong}>Cliff</strong> — <CoordChip>81318, 54995, −1508</CoordChip>,
                te da el barniz.
              </li>
              <li>
                <strong className={strong}>Ferris</strong> — <CoordChip>150337, 28398, −2246</CoordChip>,
                te da el martillo.
              </li>
              <li>
                <strong className={strong}>Zenkin</strong> — <CoordChip>79111, 53657, −1548</CoordChip>,
                y de ahí a <strong className={strong}>Kaspar</strong> —{" "}
                <CoordChip>104870, 113221, −3184</CoordChip>, que te entrega el cuchillo.
              </li>
            </ul>

            <ItemList
              items={[
                { name: "Infernium Varnish" },
                { name: "Maestro Reorin's Hammer" },
                { name: "Pipette Knife" },
                { name: "Red Pipette Knife" },
                { name: "Maestro Reorin's Mold" },
              ]}
            />

            <p>
              El <strong className={strong}>Pipette Knife</strong> hay que llenarlo de sangre de un
              boss. Cuando se llena se convierte en{" "}
              <strong className={strong}>Red Pipette Knife</strong> y volvés con Kaspar, que te da el
              molde.
            </p>

            <Callout title="Esto traba a todos" variant="warn">
              <p>
                El cuchillo tiene que estar <strong className={strong}>equipado</strong> cuando
                golpeás al boss. Llevarlo en el inventario no sirve: no pasa nada y parece que la
                misión está rota.
              </p>
              <p>
                Es un arma de daga con 10 de P. Atk. y precisión negativa, así que podés fallar el
                golpe. Si no se llena a la primera, seguí pegando.
              </p>
            </Callout>

            <Callout title="Propio de L2Thunder · 13 bosses sirven, no sólo Baium" variant="custom">
              <p>
                En el diseño original la sangre salía únicamente de Baium. Acá sirve cualquiera de
                estos trece: los nueve grandes — Queen Ant, Core, Orfen, Gigantic Chaos Golem, Zaken,
                Baium, Antharas, Valakas y Frintezza — y los cuatro guardianes que ya tenés que matar
                igual para los cetros.
              </p>
              <p>
                O sea que en la práctica no agrega una sola pelea: aprovechás la misma salida.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="El arma de grado B y los cristales">
            <p>El último tramo con Reorin pide dos cosas:</p>
            <ul className="mt-1 flex list-none flex-col gap-3 pl-0 text-sm">
              <li>
                <ItemLabel name="Crystal: B-Grade" note="— hacen falta 984, y se compran en el grocery." />
              </li>
              <li>
                <ItemLabel
                  name="Maestro Reorin's Mold"
                  note="— te lo da Kaspar cuando le llevás el cuchillo lleno."
                />
              </li>
            </ul>

            <Callout title="Los cristales se compran, no hace falta romper nada" variant="info">
              <p>
                Los 984 cristales los vende cualquier grocery: en Giran es{" "}
                <strong className={strong}>Helvetia</strong> — <CoordChip>80518, 147922, −3506</CoordChip>{" "}
                — a <strong className={gold}>4.120</strong> adena cada uno, o sea{" "}
                <strong className={gold}>4.054.080</strong> adena en total.
              </p>
              <p>
                Así que te alcanza con un arma de grado B, la que vas a entregar. No hay que
                cristalizar nada.
              </p>
            </Callout>

            <p>
              Elegís un arma de la lista y Reorin te la cambia por su equivalente de grado A, más la
              pieza que abre la segunda misión:
            </p>
            <ItemList items={[{ name: "Star of Destiny" }]} />

            <DataTable
              headers={["Entregás (grado B)", "Recibís (grado A)"]}
              rows={armas.map(([b, a]) => [b, a])}
            />
          </GuideStep>

          <GuideStep n="V" title="Mimir’s Elixir — los cuatro ingredientes">
            <p>
              Con la estrella en la mano, <strong className={strong}>Ladd</strong> —{" "}
              <CoordChip>84985, 15991, −1769</CoordChip> en la Torre de Marfil— te pide preparar un
              elixir. Son cuatro ingredientes y cada uno sale de un lado distinto.
            </p>

            <ul className="mt-1 flex list-none flex-col gap-3 pl-0 text-sm">
              <li>
                <ItemLabel name="Pure Silver" note="— no cae de nadie: se fabrica en Q373 Supplier of Reagents." />
              </li>
              <li>
                <ItemLabel name="Sage's Stone" note="— 20% matando Chimera Piece." />
              </li>
              <li>
                <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
                  <ItemLabel name="True Gold" />
                  <span className="text-muted">
                    — Joan te lo cambia por la piedra — <CoordChip>84985, 15991, −2285</CoordChip>.
                  </span>
                </span>
              </li>
              <li>
                <ItemLabel name="Blood Fire" note="— 20% matando Bloody Guardian en la guarida de Antharas." />
              </li>
            </ul>

            <div>
              <p className="font-display text-base font-bold text-foreground">Dónde se mezcla</p>
              <p className="mt-2">
                En la <strong className={strong}>Alchemist’s Mixing Urn</strong> del sótano de la
                Torre de Marfil — <CoordChip>85515, 16192, −4272</CoordChip>. Hay que echar los
                cuatro en el orden correcto.
              </p>
              <div className="card-surface mt-4 flex flex-wrap items-center gap-x-3 gap-y-3 rounded-none p-5 text-sm">
                <ItemLabel name="Pure Silver" />
                <span aria-hidden="true" className="text-muted">+</span>
                <ItemLabel name="Sage's Stone" />
                <span aria-hidden="true" className="text-muted">+</span>
                <ItemLabel name="True Gold" />
                <span aria-hidden="true" className="text-muted">+</span>
                <ItemLabel name="Blood Fire" />
                <span aria-hidden="true" className="text-gold">→</span>
                <ItemLabel name="Mimir's Elixir" />
              </div>
            </div>

            <Callout title="Equivocarse no cuesta nada" variant="info">
              <p>
                Si el orden está mal, la urna te lo dice y no consume ningún ingrediente. Se vuelve
                a intentar sin perder nada.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                El ingrediente que no cae de nadie
              </p>
              <p className="mt-2">
                El <strong className={strong}>Pure Silver</strong> no lo dropea ningún monstruo: se
                fabrica en otra misión, <strong className={gold}>Q373 Supplier of Reagents</strong>{" "}
                (nivel 57), en esa misma urna. Primero se hace Lunargent y después la plata. Si
                estás planificando, empezá por ahí.
              </p>
            </div>
          </GuideStep>

          <GuideStep n="VI" title="Pedir la subclase" last>
            <p>
              Con las dos misiones terminadas, cualquier Village Master te la habilita. Lo que
              conviene saber antes de elegir:
            </p>
            <DataTable headers={["Regla", "Valor"]} rows={reglas.map(([a, b]) => [a, b])} />
          </GuideStep>
        </div>

        {/* FAQ */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ? Por qué no me deja
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Lo que pasa", "Qué arreglar"]}
              rows={faq.map(([a, b]) => [
                <span key={a} className="italic text-muted">
                  {a}
                </span>,
                b,
              ])}
            />
          </div>

          <p className="mt-8 text-xs text-muted">
            Todo lo descrito corresponde al comportamiento vigente del servidor. Lo propio de
            L2Thunder son tres cambios que ablandan la cadena: los cuatro guardianes reaparecen
            entre 8 y 11 horas en vez de 36 a 60, sus cofres duran 30 minutos en vez de 2, y la
            sangre del cuchillo se consigue de trece bosses en vez de sólo Baium. El resto — los
            ingredientes, el orden de la mezcla, las armas y los requisitos de la subclase — sigue
            el diseño original.
          </p>
          <p className="mt-3 text-xs text-muted">
            Las dos misiones están en inglés dentro del juego: los nombres de objetos y NPC de esta
            guía son los que vas a leer en pantalla.
          </p>
        </section>
      </div>
    </div>
  );
}
