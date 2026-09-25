import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";
import SkillLevelTable, { type SkillRow } from "@/components/guias/SkillLevelTable";

export const metadata: Metadata = {
  title: "Contrato de Mercenario — Guía",
  description:
    "Las habilidades de clan sin pertenecer a un clan: cómo conseguir ranuras con Destruction Tombstone, contratar y subir las veinte pasivas y dónde está cada Corredor de Mercenarios.",
};

const introStats = [
  { value: "6", label: "Ranuras", sub: "máximo por personaje" },
  { value: "3", label: "Niveles", sub: "sin gastar otra ranura" },
  { value: "25", label: "Corredores", sub: "en los almacenes" },
  { value: "—", label: "Clan", sub: "suspende el contrato" },
];

const ranuras: [string, string, string][] = [
  ["1a", "10", "10"],
  ["2a", "20", "30"],
  ["3a", "30", "60"],
  ["4a", "50", "110"],
  ["5a", "75", "185"],
  ["6a", "100", "285"],
];

const niveles: [string, string, string, string][] = [
  ["1", "5.000.000", "5.000.000", "ocupa una"],
  ["2", "7.500.000", "12.500.000", "no gasta"],
  ["3", "10.000.000", "22.500.000", "no gasta"],
];

const habilidades: SkillRow[] = [
  { name: "Clan Vitality", gives: "HP máxima", levels: ["+3%", "+5%", "+6%"] },
  { name: "Clan Spirituality", gives: "CP máximo", levels: ["+6%", "+10%", "+12%"] },
  { name: "Clan Essence", gives: "MP máximo", levels: ["+6%", "+10%", "+12%"] },
  { name: "Clan Lifeblood", gives: "Regeneración de HP", levels: ["+3%", "+5%", "+7%"] },
  { name: "Clan Morale", gives: "Regeneración de CP", levels: ["+3%", "+5%", "+7%"] },
  { name: "Clan Clarity", gives: "Regeneración de MP", levels: ["+1%", "+2%", "+3%"] },
  { name: "Clan Might", gives: "P. Atk.", levels: ["+3%", "+5%", "+6%"] },
  { name: "Clan Aegis", gives: "P. Def.", levels: ["+3%", "+5%", "+6%"] },
  { name: "Clan Empowerment", gives: "M. Atk.", levels: ["+3%", "+4%", "+5%"] },
  { name: "Clan Magic Protection", gives: "M. Def.", levels: ["+6%", "+10%", "+11%"] },
  { name: "Clan Guidance", gives: "Precisión (plano)", levels: ["+1", "+1", "+2"] },
  { name: "Clan Agility", gives: "Evasión (plano)", levels: ["+1", "+1", "+2"] },
  {
    name: "Clan Withstand-Attack",
    gives: "Probabilidad de bloqueo",
    levels: ["+4%", "+7%", "+10%"],
  },
  { name: "Clan Shield Boost", gives: "Defensa del escudo", levels: ["+5%", "+10%", "+15%"] },
  {
    name: "Clan Cyclonic Resistance",
    gives: "Resistencia a viento / agua",
    levels: ["+10 / +5", "+20 / +10", "+30 / +15"],
  },
  {
    name: "Clan Magmatic Resistance",
    gives: "Resistencia a fuego / tierra",
    levels: ["+10 / +5", "+20 / +10", "+30 / +15"],
  },
  { name: "Clan Fortitude", gives: "Resistencia a aturdimiento", levels: ["+4%", "+7%", "+10%"] },
  { name: "Clan Freedom", gives: "Resistencia a inmovilización", levels: ["+4%", "+7%", "+10%"] },
  { name: "Clan Vigilance", gives: "Resistencia a sueño", levels: ["+4%", "+7%", "+10%"] },
  { name: "Clan March", gives: "Velocidad de movimiento (plano)", levels: ["+1", "+2", "+3"] },
];

// Lugar, quién atiende el almacén y coordenadas del corredor. Van en el orden
// del listado original (de oeste a este).
const corredores: [string, string, string][] = [
  ["Talking Island", "Rant · Rolfe · Wilford", "−81855, 243957, −3712"],
  ["Gludin", "Norman · Raut", "−81817, 153585, −3171"],
  ["Aldea Orca", "Grookin · Imantu", "−43074, −113364, −216"],
  ["Gludio", "Ballin · Haprock", "−13009, 124777, −3118"],
  ["Aldea Élfica Oscura", "Carlon · Dorankus · Erviante", "13504, 17791, −4536"],
  ["Floran", "Barder · Sonin", "17828, 169882, −3496"],
  ["Dion", "Aldo · Holvas", "20790, 144472, −3068"],
  ["Rune", "Daisy · Durin · Hugin · Lunin", "43596, −48600, −800"],
  ["Aldea Élfica", "Chad · Julia · Markius", "47908, 50207, −2983"],
  ["Giran", "Collob", "79288, 149592, −3531"],
  ["Giran", "Pochi", "80369, 145522, −3533"],
  ["Giran", "Taurin", "80792, 146440, −3533"],
  ["Oren", "Cliff · Hagger", "81817, 55163, −1506"],
  ["Giran", "Randolf", "82445, 149945, −3520"],
  ["Giran", "Parman · Valkon", "83304, 146642, −3464"],
  ["Torre de Marfil", "Marty · Radic", "85045, 15678, −4271"],
  ["Schuttgart", "Axel · Cherbal · Rydel", "88666, −141166, −1527"],
  ["Varka Silenos", "Hagos", "107416, −55384, −2393"],
  ["Heine", "Kluck · Mia", "109663, 220131, −3520"],
  ["Aldea Enana", "Airy · Murdoc", "114756, −179978, −872"],
  ["Hunters Village", "Silva · Sorint", "115311, 76745, −2650"],
  ["Goddard", "Hakon · Lietta · Stefano", "146480, −57460, −2965"],
  ["Aden", "Walderal", "148195, 26294, −2217"],
  ["Aden", "Romp", "148899, 27298, −2216"],
  ["Ketra Orc", "Jaff", "149144, −80504, −5635"],
];

const faq: [string, string][] = [
  ["No aparece Ver las habilidades", "Todavía no compraste ninguna ranura."],
  [
    "La lista se abre vacía",
    "Tenés todas las ranuras ocupadas y todo al nivel 3. Comprá otra ranura.",
  ],
  [
    "«No tenés los materiales o requisitos»",
    "Te falta la adena, o querés un nivel sin tener el anterior.",
  ],
  [
    "El corredor dice que estás en un clan",
    "El contrato está suspendido. Vuelve solo cuando salgas del clan.",
  ],
  [
    "Te devolvió la adena sola",
    "La habilidad entró sin ranura libre y el contrato se canceló.",
  ],
];

export default function ContratoDeMercenarioPage() {
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
            Sistema propio de L2Thunder · Cualquier nivel
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Contrato de Mercenario</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Las habilidades de clan, sin pertenecer a un clan
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Un clan reparte pasivas entre sus miembros. Si jugás solo, hasta ahora eso era una
            diferencia que no había forma de cerrar. El Corredor de Mercenarios te vende veinte de
            esas mismas pasivas a título personal: se compran ranuras con Destruction Tombstone y
            cada ranura sostiene una habilidad, que se paga en adena. No reemplaza al clan — jugar
            en clan sigue dando más — pero deja de castigarte por no tener uno.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-16">
          <GuideStep n="I" title="Conseguir una ranura">
            <p>
              Hablá con el Corredor de Mercenarios: está parado al lado del Warehouse Keeper, en
              los veinticinco almacenes del mundo. La primera ranura cuesta 10 Destruction
              Tombstone y cada una siguiente sale más cara.
            </p>

            <DataTable headers={["Ranura", "Destruction Tombstone", "Acumulado"]} rows={ranuras} />

            <p>
              Sin ranuras el corredor no te muestra nada. Las seis completas salen 285 Destruction
              Tombstone.
            </p>
          </GuideStep>

          <GuideStep n="II" title="Contratar la habilidad">
            <p>
              Con al menos una ranura libre aparece{" "}
              <strong className="font-semibold text-foreground">Ver las habilidades</strong>. Se
              abre la misma ventana que usan los maestros de habilidades: la lista a la izquierda
              y, al tocar una, el precio abajo. El precio es adena y lo cobra el servidor en el
              momento de aprender, igual que cualquier skill de clase.
            </p>
            <p>
              El nivel 1 cuesta 5.000.000 de adena y ocupa la ranura. Desde ahí la habilidad es
              tuya y funciona como pasiva, sin activarla.
            </p>
          </GuideStep>

          <GuideStep n="III" title="Subirla a nivel 2 y 3">
            <p>
              Subir de nivel no gasta otra ranura. Volvés al corredor, abrís la misma ventana y la
              habilidad aparece con el nivel siguiente.
            </p>

            <DataTable headers={["Nivel", "Adena", "Acumulado", "Ranura"]} rows={niveles} />

            <p>
              Hay que ir en orden: el corredor no te ofrece el nivel 3 si no tenés el 2. Llevar
              las seis ranuras a nivel 3 son 135.000.000 de adena además de los 285 Tombstone.
            </p>

            <Callout title="Una ranura ocupada no se libera" variant="warn">
              <p>
                No hay forma de cancelar una habilidad para poner otra en su lugar. Elegí pensando
                en las seis que vas a querer, no en la primera que te tiente.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="Si entrás a un clan" last>
            <p>
              El contrato se suspende, no se pierde. En el momento en que entrás a un clan se te
              sacan las habilidades contratadas, porque el clan ya te da las suyas y no tendría
              sentido cobrar dos veces. Queda guardado exactamente lo que tenías.
            </p>
            <p>
              El día que te vas del clan, vuelve solo y completo, con el nivel que habías pagado.
              No hay que volver al corredor ni pagar de nuevo. Mientras estés en un clan el
              corredor no te vende nada.
            </p>
          </GuideStep>
        </div>

        {/* Las veinte habilidades */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ Las veinte habilidades
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            Son las mismas del árbol de clan, con los mismos valores. Las tres resistencias del
            final trabajan sobre aturdimiento, inmovilización y sueño, que es donde más se nota
            jugando sin apoyo.
          </p>

          <div className="mt-6">
            <SkillLevelTable rows={habilidades} />
          </div>

          <div className="mt-6">
            <Callout title="Dos que no están" variant="info">
              <p>
                El árbol de clan tiene veintidós habilidades y el corredor ofrece veinte. Clan
                Imperium queda afuera porque sin clan no hace nada: para armar un Command Channel
                el juego pide además ser Noblesse, así que sería una ranura y 5.000.000 de adena
                tirados. Clan Luck queda afuera por decisión del servidor.
              </p>
            </Callout>
          </div>
        </section>

        {/* Dónde está el corredor */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ Dónde está el corredor
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            Siempre al lado de un Warehouse Keeper. Las ciudades con varios almacenes tienen un
            corredor en cada uno: en Giran hay cinco.
          </p>

          <div className="mt-6">
            <DataTable
              headers={["Lugar", "Junto a", "Coordenadas"]}
              rows={corredores.map(([lugar, junto, coord]) => [
                lugar,
                junto,
                <CoordChip key={coord}>{coord}</CoordChip>,
              ])}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ? Por qué no me deja
          </p>
          <div className="mt-4">
            <DataTable headers={["Lo que ves", "Qué está pasando"]} rows={faq} />
          </div>
        </section>

        {/* Por qué existe */}
        <section className="mt-14 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Por qué existe
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            La idea no es que dé lo mismo tener clan o no tenerlo: jugar en clan sigue teniendo
            ventajas que esto no toca. Es que la diferencia deje de ser un muro para el que
            prefiere jugar solo.
          </p>

          <p className="mt-8 text-xs text-muted/70">
            El sistema de mercenarios es propio de L2Thunder: no existe en el juego original. Las
            habilidades, sus tres niveles y sus valores son los del árbol de clan original, sin
            cambios. Los precios, las ranuras, qué habilidades se ofrecen y la suspensión al
            entrar a un clan son reglas de este servidor.
          </p>
        </section>
      </div>
    </div>
  );
}
