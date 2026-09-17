import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";

export const metadata: Metadata = {
  title: "La Grieta Dimensional — Guía",
  description:
    "Cómo juntar Dimensional Fragments, elegir escalón, sobrevivir al reloj de salas y llegar a Anakazel en La Grieta Dimensional.",
};

const introStats = [
  { value: "20", label: "Nivel", sub: "sin tope por arriba" },
  { value: "2", label: "Grupo", sub: "mínimo, hasta 9" },
  { value: "18–33", label: "Fragmentos", sub: "por cada integrante" },
  { value: "~45", label: "Duración", sub: "minutos, 5 salas" },
  { value: "5 de 9", label: "Jefe", sub: "salas: 55,6% de chance" },
];

const escalones: [string, string, string, string][] = [
  ["Rift Post Recruit", "28–35", "18", "Equipo de grado D y materiales básicos"],
  ["Rift Post Private", "38–45", "21", "Equipo de grado C y sus patrones"],
  ["Rift Post Officer", "48–55", "24", "Armas C y B, y sus filos"],
  ["Rift Post Captain", "58–65", "27", "Armaduras B: Avadon y Blue Wolf"],
  ["Rift Post Commander", "68–75", "30", "Armas de grado A y sus partes"],
  ["Rift Post Hero", "78–85", "33", "Armas S, Enria, Asofe y patrones de Majestic y Nightmare"],
];

const anakazelLoot: [string, string][] = [
  ["Los seis", "4–6 Destruction Tombstone, garantizado"],
  ["Captain", "Sealed Nightmare Sigil — 10%"],
  ["Commander", "Una pieza Apella sellada — 5%"],
  ["Hero", "Pieza Apella sellada 5% + Sealed Nightmare Sigil 10%"],
];

const tombstoneCambio: [string, string][] = [
  ["3", "Adventurer's Box: Cradle of Creation"],
  ["10", "Adventurer's Box: C-Grade"],
  ["10", "Adventurer's Box: Hair Accessory"],
  ["20", "Adventurer's Box: B-Grade"],
  ["40", "Adventurer's Box: A-Grade"],
];

const faq: [string, string][] = [
  ["«No podés ir solo a la grieta. Tenés que estar en grupo»", "Hacen falta 2 personas como mínimo."],
  [
    "«No sos el líder del grupo. Solo el líder puede dar la orden»",
    "Entrar, saltar con la carta y salir los decide el líder.",
  ],
  ["«Tu grupo es demasiado débil para pelear en la Grieta»", "Son menos de 2 en el grupo."],
  [
    "«No todos los integrantes de tu grupo están en la sala de espera»",
    "Alguien quedó afuera. Todos tienen que estar parados en la zona de paz del centro.",
  ],
  [
    "«No tenés suficientes Fragmentos Dimensionales… cada uno necesita N»",
    "A alguien del grupo le faltan. La cuota es por persona, no del líder.",
  ],
  ["«Solo se permite un teletransporte»", "Ya gastaste los cinco saltos. La carta del azar no sirve más."],
  [
    "«Rift is full. Try later»",
    "Las nueve salas de ese escalón están ocupadas por otros grupos. Probá otro escalón o esperá unos minutos.",
  ],
  ["«No intentes hacer trampa en la Grieta Dimensional»", "Le hablaste al Border Guard sin estar adentro de una corrida."],
  [
    "Nos sacaron a todos de golpe",
    "Alguien invitó a una persona nueva, o el grupo bajó de dos. Las dos cosas cortan la corrida.",
  ],
];

export default function LaGrietaDimensionalPage() {
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
            Guía de contenido · Nivel 20+
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">La Grieta Dimensional</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Cinco salas, un reloj corriendo y un jefe en el fondo
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Una mazmorra por tiempo para grupos chicos. Entrás con dos personas, te tiran en una
            sala al azar, matás todo lo que aparece y cada ocho o diez minutos la dimensión se
            corre y te arrastra a la siguiente. Visitás cinco salas de nueve, y en una de esas
            nueve duerme un jefe. No hay reuso: se puede entrar todas las veces que te alcancen
            los fragmentos.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-16">
          <GuideStep n="I" title="Firmá el contrato">
            <p>
              Adentro de cada catacumba y cada necrópolis hay un{" "}
              <strong className="font-semibold text-foreground">Dimensional Gate
              Keeper</strong>, a unos pasos de donde te deja el teletransporte. Hablale, escuchá
              la historia y aceptale las dos misiones: una te habilita a juntar{" "}
              <strong className="font-semibold text-gold">Dimensional Fragments</strong> y la
              otra te deja entrar a la Grieta.
            </p>
            <p>
              Para llegar, hablale a <strong className="font-semibold text-foreground">
              Fiorella</strong> en Giran (<CoordChip>83370, 147902, −3431</CoordChip>) y entrá
              por SEVEN SIGNS → Catacumbas o Necropolis. Elegí la zona de tu nivel: el Gate
              Keeper está ahí mismo.
            </p>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Cómo se juntan los fragmentos
              </p>
              <p className="mt-3">
                Con la misión activa, matando cualquier cosa dentro de catacumbas y necrópolis.
                Cae el <strong className="font-semibold text-gold">8%</strong> de las veces, y
                cuando cae te da entre 5 y 15 fragmentos según el nivel del monstruo. En grupo,
                cada drop le toca a un integrante al azar que tenga la misión.
              </p>
            </div>

            <Callout title="Se junta solo" variant="info">
              <p>
                Los fragmentos caen en las mismas zonas donde se farmean las{" "}
                <strong className="font-semibold text-foreground">piedras de sello</strong> de
                los Siete Signos. Si ya estás haciendo eso, los fragmentos se te acumulan sin
                hacer nada extra.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="II" title="Armá el grupo y andá a la sala de espera">
            <p>
              Hacen falta dos personas como mínimo, y todas tienen que tener sus propios
              fragmentos: la cuota se cobra por cabeza, no por grupo.
            </p>
            <p>
              Volvé con el Dimensional Gate Keeper y decile que estás listo. Te manda a la sala
              de espera, una zona de paz redonda con seis puestos alrededor. También se llega
              desde el Festival Guide del Oráculo, con la opción «Ir a la Grieta Dimensional».
            </p>

            <Callout title="Todos adentro de la sala" variant="warn">
              <p>
                Al entrar, el juego revisa que todos los integrantes estén parados en la sala de
                espera. Si uno se quedó afuera, en la catacumba o en el pueblo, no entra nadie y
                vas a ver «No todos los integrantes de tu grupo están en la sala de espera».
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="III" title="Elegí tu escalón">
            <p>
              Los seis puestos de la sala de espera son las seis áreas de la Grieta, de menor a
              mayor. El líder del grupo le habla al que corresponda y paga la entrada.
            </p>

            <DataTable
              headers={["Puesto", "Nivel de los mobs", "Fragmentos c/u", "Qué sale de las salas"]}
              rows={escalones}
            />

            <Callout title="Nadie te va a frenar" variant="warn">
              <p>
                No hay chequeo de nivel para entrar a ningún área. Un grupo de nivel 40 puede
                pagar la entrada al escalón Hero y lo van a hacer pedazos en la primera sala.
                Elegí por el nivel de los mobs de la tabla, no por lo que te alcanza a pagar.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="Adentro: cómo funciona el reloj">
            <p>
              Cada área tiene 9 salas y vos vas a pasar por 5, sorteadas y sin repetir. En una de
              las nueve está el jefe: son <strong className="font-semibold text-foreground">5
              de 9</strong>, o sea un <strong className="font-semibold text-foreground">
              55,6%</strong> de que te toque.
            </p>
            <p>
              Al llegar a una sala tenés 10 segundos antes de que aparezcan los monstruos.
              Después corren entre 8 y 10 minutos hasta el salto siguiente. En la sala del jefe
              el reloj dura una vez y media más.
            </p>
            <p>Siete segundos antes de cada salto vas a sentir un temblor. Es el único aviso.</p>

            <Callout title="La carta del azar" variant="info">
              <p>
                En cada sala hay un Border Guard. Si la sala no te gustó —o querés seguir
                buscando al jefe— el líder le pide «Usar la carta del azar» y saltan de inmediato
                a otra sala.
              </p>
            </Callout>

            <Callout title="La carta gasta un salto" variant="warn">
              <p>
                El salto manual consume uno de los cinco, no es gratis. Si la usás tres veces, te
                quedan dos salas y el reloj se termina antes. Sirve para buscar al jefe, no para
                explorar.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Lo que corta la corrida
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-semibold text-foreground">Se acaban los cinco
                  saltos</strong> — a todos los devuelve a la sala de espera. Es el final normal.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">El grupo baja de dos</strong>{" "}
                  — si alguien se va o lo echan, la corrida termina para todos al instante.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">Invitás a alguien
                  nuevo</strong> — en 5 segundos los sacan a todos. No se puede agrandar el grupo
                  adentro.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">Volvés al pueblo al
                  morir</strong> — si los que quedan adentro son menos de dos, se acaba para el
                  grupo entero.
                </li>
              </ul>
            </div>

            <Callout title="Morir no es el fin" variant="info">
              <p>
                Podés quedarte muerto en el piso y el grupo sigue; los saltos te arrastran igual.
                Lo que corta todo es apretar «volver al pueblo», porque ahí sí salís de la cuenta
                de los que están adentro.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="V" title="Anakazel, el jefe" last>
            <p>
              Si te toca la sala del jefe te vas a encontrar con{" "}
              <strong className="font-semibold text-foreground">Anakazel</strong>, un raid de
              nivel 28, 38, 48, 58, 68 o 78 según el escalón. Está solo y tenés el reloj de la
              sala —un 50% más largo que el de una sala normal— para bajarlo.
            </p>

            <DataTable headers={["Escalón", "Además de su propio drop"]} rows={anakazelLoot} />

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                Las Tombstone, las piezas Apella y el Sigil son agregados nuestros: en el diseño
                original Anakazel dropea solamente su tabla de raid. El resto de la Grieta —las
                nueve salas, el sorteo, los relojes— es tal cual el original.
              </p>
            </Callout>
          </GuideStep>
        </div>

        {/* Qué hacés con lo que sacaste */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ Qué hacés con lo que sacaste
          </p>

          <div className="mt-6 max-w-3xl">
            <p className="font-display text-base font-bold text-foreground">
              Destruction Tombstone
            </p>
            <p className="mt-2 text-muted">
              Se cambian con el <strong className="font-semibold text-foreground">Adventure
              Guildsman</strong> de Giran (<CoordChip>82814, 147758, −3464</CoordChip>), en la
              opción «Intercambiar Destruction Tombstone».
            </p>
          </div>

          <div className="mt-4 max-w-2xl">
            <DataTable headers={["Cuesta", "Te llevás"]} rows={tombstoneCambio} />
          </div>

          <p className="mt-4 max-w-3xl text-sm text-muted">
            Con 4 a 6 por jefe, cada dos jefes te sale una caja de grado C y cada ocho, una de
            grado A.
          </p>

          <div className="mt-8 max-w-3xl">
            <p className="font-display text-base font-bold text-foreground">
              Las piezas Apella selladas
            </p>
            <p className="mt-2 text-muted">
              Se desellan con el Blacksmith of Mammon de Giran, pagando Adena Antigua —alrededor
              de <strong className="font-semibold text-foreground">198.000</strong> por pieza—.
              Y la Adena Antigua sale de los Siete Signos: los dos contenidos se alimentan entre
              sí. La otra forma de conseguir Apella es comprándolas con Medallas del Caído en el
              Custodio de Medallas.
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
            L2Thunder son dos cosas: los cinco saltos en vez de cuatro —que suben la chance de
            encontrar al jefe del 44,4% al 55,6%— y los drops agregados a Anakazel (Tombstone,
            Apella y Sigil). Las nueve salas por área, el sorteo sin repetición, los relojes de 8
            a 10 minutos, el ×1,5 de la sala del jefe y el costo en fragmentos siguen el diseño
            original.
          </p>
        </section>
      </div>
    </div>
  );
}
