import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Crest from "@/components/Crest";
import SectionHeader from "@/components/porque/SectionHeader";
import StatGrid from "@/components/guias/StatGrid";
import DataTable from "@/components/guias/DataTable";
import Callout from "@/components/guias/Callout";
import { OPENING_AS_OF, OPENING_STATS } from "@/lib/apertura";

export const metadata: Metadata = {
  title: "Apertura escalonada",
  description:
    "Qué está abierto, qué está cerrado y qué se abre después: tope de nivel 75, equipo hasta grado A y los ocho raids épicos que se habilitan de a uno.",
};

const gradoS = [
  ["Las quests que dan recetas de grado S", "7 quests de nivel alto", "Cerrado"],
  ["El Libro de Recetas Grado S", "Gimli, el Maestro Artesano", "Cerrado"],
  ["Create Item nivel 9", "Árbol del Warsmith enano", "Cerrado"],
  [
    "Capacidad especial en armas S, liberar el sello de armaduras y accesorios S, y espadas duales de grado S",
    "Menú Grado S del Herrero de Mammon",
    "Cerrado",
  ],
];

const epicos = [
  ["Queen Ant", "40", "Cerrado"],
  ["Core", "50", "Cerrado"],
  ["Orfen", "50", "Cerrado"],
  ["Zaken", "60", "Cerrado"],
  ["Baium", "75", "Cerrado"],
  ["Antharas", "79", "Cerrado"],
  ["Valakas", "85", "Cerrado"],
  ["Frintezza", "90", "Cerrado"],
];

const abiertos = [
  "Niveles 1 al 75, primer y segundo cambio de clase, subclase y Noblesse.",
  "Todo el equipo hasta grado A, con capacidad especial, sellos y duales.",
  "Clanes hasta el nivel 8, que es el máximo del servidor, con sus habilidades de clan, academia, sub-unidades y alianzas de hasta 3 clanes.",
  "Seven Signs y las catacumbas y necrópolis con sus Seal Stones.",
  "Los Cuatro Sepulcros, la Grieta Dimensional y el Festival de la Oscuridad.",
  "Pesca rediseñada, recolección, mercenarios y la tienda privada.",
  "Los eventos de TvT y CTF, y las quests diarias del tablero de la comunidad.",
  "Sitios de castillo y Clan Halls.",
];

const raidsAbiertos: ReactNode[] = [
  "Todos los raid bosses normales del juego, con su teletransporte desde el Guía del Aventurero, ordenados por nivel.",
  <>
    <strong className="font-semibold text-foreground">Dr. Chaos</strong>, en las Ruinas de Pavel.
    Es un raid de nivel 52 con una particularidad: Dr. Chaos es un NPC que no pelea, y hay que
    quedarse cerca molestándolo hasta que se enoje y se transforme en el Gigantic Chaos Golem.
    Está en la lista de teletransporte, en el tramo 50-59.
  </>,
  "El evento de Invasores, con sus mini raids repartidos por el mapa.",
  "Sailren sigue habilitado, aunque en la práctica es contenido de nivel 80 y queda fuera de alcance hasta que suba el tope.",
];

const porQueNoMeDeja = [
  [
    "Llegué a 75 y no gano más experiencia",
    "Es el tope actual. No es un bug ni un castigo: el contador está donde tiene que estar.",
  ],
  [
    "El Village Master no me ofrece el tercer cambio de clase",
    "Pide nivel 76. Se habilita cuando suba el tope.",
  ],
  [
    "No puedo empezar la quest de Saga de mi clase",
    "Lo mismo: son las quests del tercer cambio.",
  ],
  [
    "No puedo encantar mis habilidades",
    "El encantamiento de habilidades pide nivel 76. Se habilita junto con el tercer cambio de clase.",
  ],
  [
    "Gimli no me muestra el Libro de Recetas Grado S",
    "Está cerrado. Los libros de grado B y A sí están.",
  ],
  [
    "Soy Warsmith y no puedo aprender Create Item nivel 9",
    "Está cerrado. El nivel 8, que habilita el grado A, se aprende normal.",
  ],
  [
    'El Herrero de Mammon no tiene la opción "Grado S"',
    "Está cerrada. El menú de Grado A funciona completo, igual que quitar la capacidad especial, mejorar e intercambiar armas.",
  ],
  [
    "Tengo una armadura S sellada y no puedo abrirla",
    "Liberar el sello de grado S está cerrado. Guardala: cuando se habilite, se abre.",
  ],
  ["Fui a la zona de un épico y no está", "Ninguno de los ocho está abierto todavía."],
  [
    "Mi clan no puede pasar de nivel 5",
    "El nivel 6 pide 30 miembros y 5.000 de reputación. La fuente de reputación más accesible hoy es la academia de clan: cada alumno que hace el segundo cambio de clase deja entre 190 y 650 puntos.",
  ],
];

// Lista con viñeta cian, la misma de las tarjetas de compra de /donar.
function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 max-w-[38rem] space-y-2 text-muted">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 text-accent">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AperturaEscalonadaPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      {/* Intro */}
      <div className="mx-auto max-w-3xl text-center">
        <Crest className="mx-auto h-14 w-14" />
        <p className="brand mt-5 text-xs font-bold uppercase tracking-widest text-accent-2">
          Reglas del servidor · Vigente desde el lanzamiento
        </p>
        <h1 className="brand mt-2 text-3xl font-black sm:text-5xl">Apertura escalonada</h1>
        <p className="brand mt-3 text-sm font-bold tracking-widest text-muted">
          Qué está abierto, qué está cerrado y qué se abre después
        </p>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          L2Thunder no abre con todo el contenido disponible desde el primer día. El tope de
          nivel, el equipo de grado S y los raids épicos entran por etapas, para que la economía
          y la carrera por el primer nivel máximo no se resuelvan en una semana. Acá está el
          detalle exacto, sin sorpresas:{" "}
          <strong className="font-bold text-foreground">
            nada de esto es un error ni un bug.
          </strong>
        </p>

        <div className="mt-10">
          <StatGrid stats={OPENING_STATS} />
        </div>
      </div>

      {/* El tope de nivel */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader eyebrow="Nivel máximo" title="El tope de nivel es 75" />
        <div className="max-w-[38rem] space-y-4 text-muted">
          <p>
            Se puede subir del nivel 1 al 75 con normalidad. El primer cambio de clase sigue
            estando a los 20 y el segundo a los 40, sin cambios.
          </p>
          <p>
            Lo que no está disponible es el{" "}
            <strong className="font-semibold text-foreground">tercer cambio de clase</strong>,
            porque pide nivel 76. Mientras el tope sea 75 no hay Duelist, Titan, Archmage,
            Adventurer ni ninguna de las 31 terceras clases, y las quests de Saga que las
            habilitan tampoco se pueden empezar.
          </p>
          <p>
            Por el mismo motivo tampoco está disponible el encantamiento de habilidades: el
            servidor lo exige a partir de nivel 76. Las rutas de encanto de los skills están
            armadas y esperando, pero no se pueden usar hasta que suba el tope.
          </p>
        </div>

        <h3 className="mt-10 font-display text-lg font-bold text-foreground">
          Lo que sí llega hasta el final
        </h3>
        <p className="mt-2 max-w-[38rem] text-muted">
          La subclase se habilita a nivel 75, justo en el tope, así que es contenido
          perfectamente alcanzable. Arranca en nivel 40 y puede subir hasta 75 como el personaje
          principal. Y con la subclase en 75 también se puede conseguir el Noblesse.
        </p>

        <div className="mt-8">
          <Callout title="Cuando suba el tope" variant="info">
            <p>
              El tercer cambio de clase y las quests de Saga se habilitan solos, en el mismo
              momento en que el tope pase de 75. No hay que hacer nada ni pedir nada.
            </p>
          </Callout>
        </div>
      </section>

      {/* El grado S */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Equipo"
          title="El grado S está cerrado"
          intro="El equipo de grado S no se puede conseguir ni terminar. Son cuatro puertas cerradas, y vale la pena entender las cuatro porque explican todo lo que vas a ver en el juego."
        />
        <DataTable headers={["Qué", "Dónde", "Estado"]} rows={gradoS} />

        <p className="mt-6 max-w-[38rem] text-muted">
          Un objeto de grado S sí puede caer de un monstruo: eso no se tocó. Pero no hay forma de
          completarlo. Una armadura S sellada no se puede abrir, un accesorio S sellado tampoco, y
          a un arma S no se le puede poner la capacidad especial.
        </p>

        <div className="mt-8">
          <Callout title="Antes de pagar por algo de grado S" variant="warn">
            <p>
              Si alguien te ofrece una armadura S sellada o un accesorio S sellado, tené en cuenta
              que hoy no se pueden abrir. Valen lo que valdrán cuando se habilite el grado S, no lo
              que valen ahora. Lo mismo con un arma S sin capacidad especial.
            </p>
          </Callout>
        </div>

        <h3 className="mt-10 font-display text-lg font-bold text-foreground">
          El grado A está entero
        </h3>
        <p className="mt-2 max-w-[38rem] text-muted">
          Todo lo que el grado S tiene cerrado, el grado A lo tiene abierto: las recetas, el libro
          de recetas en el Maestro Artesano, la capacidad especial en las armas, liberar el sello
          de las armaduras y los accesorios, y las espadas duales. El tope real de equipamiento hoy
          es A, y es un tope completo, no recortado.
        </p>
      </section>

      {/* Los raids épicos */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Raids"
          title="Ningún raid épico está abierto"
          intro="Los ocho raids épicos del juego no aparecen. Se van a ir habilitando de a uno, y cada apertura se va a anunciar."
        />
        <DataTable headers={["Épico", "Nivel", "Estado"]} rows={epicos} />

        <p className="mt-6 max-w-[38rem] text-muted">
          La consecuencia directa es que las ocho joyas de boss todavía no se pueden conseguir por
          ninguna vía.
        </p>

        <div className="mt-8">
          <Callout title="Vale la pena esperarlas" variant="custom">
            <p>
              En L2Thunder la joya de cada épico cae con probabilidad garantizada: el primer grupo
              que lo mate se la lleva seguro. No hay que matarlo diez veces y rezar.
            </p>
          </Callout>
        </div>

        <h3 className="mt-10 font-display text-lg font-bold text-foreground">
          Los raids que sí están abiertos
        </h3>
        <p className="mt-2 max-w-[38rem] text-muted">
          Todo el resto del contenido de raid funciona con normalidad:
        </p>
        <Bullets items={raidsAbiertos} />
      </section>

      {/* Lo que está abierto */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Lo que sí hay"
          title="Lo que está abierto de punta a punta"
          intro="La lista de lo cerrado es corta a propósito. Todo lo demás funciona completo."
        />
        <Bullets items={abiertos} />
      </section>

      {/* Por qué no me deja */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Por qué no me deja"
          intro="Traducción de lo que vas a ver en el juego a lo que realmente está pasando."
        />
        <DataTable headers={["Lo que ves", "Por qué"]} rows={porQueNoMeDeja} />
      </section>

      {/* Cierre */}
      <section className="mx-auto mt-24 max-w-3xl">
        <Callout title="Propio de L2Thunder" variant="custom">
          <p>
            La apertura escalonada, el tope de nivel y la caída garantizada de las joyas de boss
            son decisiones propias de L2Thunder; el resto del contenido sigue el diseño original de
            Interlude.
          </p>
        </Callout>
        <p className="mt-4 text-center text-xs text-muted">
          Este documento describe el estado del servidor al {OPENING_AS_OF} y se va a actualizar
          en cada apertura.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#jugar"
            className="btn-impact bg-gold px-7 py-3 text-background hover:brightness-110"
          >
            Cómo empezar
          </Link>
          <Link
            href="/por-que-l2thunder"
            className="rounded-none border border-gold px-7 py-3 font-semibold text-gold transition hover:border-border-soft hover:text-foreground"
          >
            ¿Por qué L2Thunder?
          </Link>
        </div>

        <p className="brand mt-16 text-center text-xs font-bold uppercase tracking-widest text-muted">
          L2 Thunder · Interlude reimaginado
        </p>
      </section>
    </div>
  );
}
