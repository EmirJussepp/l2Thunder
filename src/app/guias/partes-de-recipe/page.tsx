import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";
import ItemLabel from "@/components/guias/ItemLabel";
import ItemList from "@/components/guias/ItemList";
import ScreenshotOpcional from "@/components/guias/ScreenshotOpcional";

export const metadata: Metadata = {
  title: "Partes de Recipe — Guía",
  description:
    "Cómo conseguir la receta al 100% de las armas de grado A: dos misiones repetibles en Wall of Argos, cien piezas por entrega y el canje de las Recipe Part con Gimli.",
};

// Las capturas viven en public/guias/partes-de-recipe/<nombre>.webp (o png/jpg): ScreenshotOpcional las muestra
// solo si el archivo existe. Nombres esperados: eye-of-argos, monumento, buffalo-slave, grendel-slave, gimli.
const CARPETA = "guias/partes-de-recipe";

const introStats = [
  { value: "68", label: "Nivel", sub: "para empezar" },
  { value: "21", label: "Recetas", sub: "a elección" },
  { value: "3 o 4", label: "Partes", sub: "según el arma" },
  { value: "2", label: "Misiones", sub: "repetibles" },
];

const esclavos: [string, string, string][] = [
  ["Buffalo Slave", "72", "45%"],
  ["Grendel Slave", "74", "50%"],
];

const discipulos: [string, string, string][] = [
  ["Disciples of Protection", "74", "50%"],
  ["Disciples of Punishment", "75", "50%"],
  ["Disciples of Authority", "76", "50%"],
];

const armasPorTres = [
  "Tallum Blade",
  "Halberd",
  "Elemental Sword",
  "Dasparion's Staff",
  "Bloody Orchid",
  "Blood Tornado",
  "Carnage Bow",
  "Infernal Master",
  "Spiritual Eye",
  "Destroyer Hammer",
];

const armasPorCuatro = [
  "Flaming Dragon Skull",
  "Doom Crusher",
  "Dragon Slayer",
  "Sword of Miracles",
  "Elysian",
  "Branch of the Mother Tree",
  "Soul Separator",
  "Dragon Grinder",
  "Soul Bow",
  "Tallum Glaive",
  "Dark Legion's Edge",
];

const faq: [string, string][] = [
  ["Eye of Argos no me ofrece la misión", "Shadow of Light pide nivel 68 y Watching Eyes 71."],
  [
    "Mato y no me cae nada",
    "Fijate que sea el monstruo de esa misión: los esclavos son de una y los Disciples de la otra.",
  ],
  [
    "Tengo 100 y no me los toma",
    "Hay que volver a hablarle a Eye of Argos y elegir la opción de entregar.",
  ],
  [
    "Gimli no me muestra el canje",
    "Es la tercera opción de su menú, debajo de los dos libros de recetas.",
  ],
  [
    "Tengo la receta y no puedo fabricar",
    "Te falta el skill Create Item en nivel suficiente. La receta sola no alcanza: la tiene que usar un artesano.",
  ],
];

const strong = "font-semibold text-foreground";
const gold = "font-semibold text-gold";
const sub = "font-display text-base font-bold text-foreground";

export default function PartesDeRecipePage() {
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
            Guía de sistema · Nivel 68+
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Partes de Recipe</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Cómo conseguir las recetas al 100% de las armas de grado A
          </p>
          <p className="mt-6 max-w-[38rem] text-muted">
            Veintiuna armas de grado A sólo tenían receta al 60%: el artesano arriesgaba la mitad
            de los materiales en cada intento. Ahora hay un camino para conseguir la receta al 100%,
            y el arma que te llevás la elegís vos.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-20">
          <GuideStep n="I" title="La moneda del sistema">
            <p>Todo gira alrededor de un solo objeto:</p>
            <ItemList items={[{ name: "Recipe Part" }]} />
            <p>
              Se consigue terminando cualquiera de dos misiones repetibles, y se cambia por la
              receta que quieras. No se vende, no se tira y no se puede pasar a otro personaje: es
              tuya y se gasta sólo en el canje.
            </p>
          </GuideStep>

          <GuideStep n="II" title="Dónde se empieza">
            <p>
              Las dos misiones arrancan en el mismo NPC: <strong className={strong}>Eye of Argos</strong>,
              en Wall of Argos, al este de Goddard — <CoordChip>183584, −53552, −1903</CoordChip>.
            </p>

            <Callout title="Hay que subir" variant="warn">
              <p>
                Wall of Argos no está al nivel del campo: la zona de caza queda arriba, y se llega
                por un camino en subida. Si te quedás dando vueltas por la parte baja no vas a
                encontrar ni al NPC ni a los monstruos de las misiones.
              </p>
            </Callout>

            <ScreenshotOpcional
              carpeta={CARPETA}
              nombre="eye-of-argos"
              alt="Eye of Argos, el NPC que da las dos misiones"
              caption="Eye of Argos. Cuando le hablás te saluda con “The forest is quiet but the wind won’t give me any peace!” y te deja el enlace Quest. Abajo a la izquierda, el mapa confirma Current Position: Wall of Argos."
            />

            <div>
              <p className={sub}>El monumento, para ubicarte</p>
              <p className="mt-2">
                Apenas terminás de subir vas a ver este arco de piedra. Es la referencia más clara
                de toda la zona: si lo tenés a la vista, estás en el lugar correcto y los monstruos
                de las misiones están alrededor.
              </p>
            </div>

            <ScreenshotOpcional
              carpeta={CARPETA}
              nombre="monumento"
              alt="El monumento de Wall of Argos"
              caption="El arco de piedra, cerca de la subida. Los ojos flotantes que se ven alrededor son Eye of Restrainer, que no sirven para ninguna de las dos misiones."
            />

            <div>
              <p className={sub}>Las dos a la vez</p>
              <p className="mt-2">
                Eye of Argos da las dos y las dos son repetibles: las terminás, te paga, y las
                volvés a tomar en el acto. Podés elegir la que te quede mejor de nivel, o
                alternarlas.
              </p>
            </div>
          </GuideStep>

          <GuideStep n="III" title="Shadow of Light — desde nivel 68">
            <p>Hay que juntar 100 de esto:</p>
            <ItemList items={[{ name: "Eye of Darkness" }]} />

            <DataTable
              headers={["Monstruo", "Nivel", "Probabilidad"]}
              rows={esclavos.map(([m, n, p]) => [m, n, p])}
            />

            <p>
              Con esas probabilidades, una entrega son unas{" "}
              <strong className={gold}>210</strong> muertes. Los encontrás en la mitad oeste de Wall
              of Argos, y los dos están cerca del monumento.
            </p>

            <ScreenshotOpcional
              carpeta={CARPETA}
              nombre="buffalo-slave"
              alt="Buffalo Slave junto al monumento"
              caption="Buffalo Slave de nivel 72, al lado del arco. Los Eye of Restrainer que se mezclan ahí no cuentan."
            />
            <ScreenshotOpcional
              carpeta={CARPETA}
              nombre="grendel-slave"
              alt="Grendel Slave"
              caption="Grendel Slave de nivel 74, el de mejor probabilidad. El Homunculus que lo acompaña tampoco cuenta."
            />
          </GuideStep>

          <GuideStep n="IV" title="Watching Eyes — desde nivel 71">
            <p>La otra misión pide 100 de esto:</p>
            <ItemList items={[{ name: "Proof of Avenger" }]} />

            <DataTable
              headers={["Monstruo", "Nivel", "Probabilidad"]}
              rows={discipulos.map(([m, n, p]) => [m, n, p])}
            />

            <p>
              Son unas <strong className={gold}>200</strong> muertes por entrega. Están en la mitad
              este de Wall of Argos y pegan más fuerte que los esclavos.
            </p>

            <Callout title="Lo que ya pagaban sigue estando" variant="info">
              <p>
                La parte de recipe es un agregado: las dos misiones siguen dando su adena y su
                chance de pieza Tateossian como siempre. No se les sacó nada.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="V" title="El canje con Gimli">
            <p>
              Con las partes en la mochila, andá a ver al{" "}
              <strong className={strong}>Maestro Artesano Gimli</strong>. Está en Aden —{" "}
              <CoordChip>147744, 27401, −2231</CoordChip> — y también en Giran —{" "}
              <CoordChip>82168, 148605, −3493</CoordChip>.
            </p>

            <ScreenshotOpcional
              carpeta={CARPETA}
              nombre="gimli"
              alt="Gimli, el Maestro Artesano"
              caption="Gimli, el Maestro Artesano. En su menú, la tercera opción es Cambiar Partes de recipe."
            />

            <div className="card-surface flex flex-wrap items-center gap-x-3 gap-y-3 rounded-none p-5 text-sm">
              <ItemLabel name="Recipe Part" label="Recipe Part ×3" />
              <span className="text-muted">o</span>
              <ItemLabel name="Recipe Part" label="Recipe Part ×4" />
              <span aria-hidden="true" className="text-gold">→</span>
              <span className="text-foreground">la receta al 100% que elijas</span>
            </div>

            <div>
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="brand text-xs font-bold uppercase tracking-widest text-gold">
                  Por 3 partes
                </span>
                <span className="text-xs text-muted">A bajo</span>
              </p>
              <ItemList items={armasPorTres.map((name) => ({ name }))} />
            </div>

            <div>
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="brand text-xs font-bold uppercase tracking-widest text-gold">
                  Por 4 partes
                </span>
                <span className="text-xs text-muted">A medio</span>
              </p>
              <ItemList items={armasPorCuatro.map((name) => ({ name }))} />
            </div>
          </GuideStep>

          <GuideStep n="VI" title="Después de tener la receta" last>
            <p>La receta es el permiso, no el arma. Para fabricarla hacen falta tres cosas:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong className={strong}>La receta al 100% aprendida:</strong> usás el pergamino
                que canjeaste, se consume, y la receta te queda en el libro.
              </li>
              <li>
                <strong className={strong}>Los materiales del arma.</strong>
              </li>
              <li>
                <strong className={strong}>Un personaje con Create Item en nivel suficiente:</strong>{" "}
                un Warsmith o un Artisan.
              </li>
            </ol>

            <Callout title="Al 100% no se falla" variant="custom">
              <p>
                Esa es la diferencia con la receta al 60%, que cuando sale mal se lleva la mitad de
                los materiales. Con la del 100% el arma sale siempre al primer intento.
              </p>
            </Callout>
          </GuideStep>
        </div>

        {/* FAQ */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ? Por qué no me sale
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
            Los números de esta guía salen del servidor: las probabilidades de caída y las
            cantidades son las que corren, y el precio en partes lo decide el grado del arma — 3 las
            de 1464-65 cristales y 4 las de 2156-60.
          </p>
          <p className="mt-3 text-xs text-muted">
            Las dos misiones están en inglés dentro del juego: los nombres de objetos y monstruos de
            esta guía son los que vas a leer en pantalla.
          </p>
        </section>
      </div>
    </div>
  );
}
