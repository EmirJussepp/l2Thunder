import type { Metadata } from "next";
import Link from "next/link";
import ItemExplorer from "@/components/informacion/ItemExplorer";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import { SA_GRIPS, SA_WEAPON_TYPES, saWeapons } from "@/lib/sa";
import { loadItemImages } from "@/lib/itemImages";

export const metadata: Metadata = {
  title: "SA Reworkeados — Información de juego",
  description:
    "Qué da cada Special Ability hoy en L2Thunder y qué se cambió: los tres SA nuevos, los que se rehicieron, los 27 dados de baja y ejemplos de armas con sus stats.",
};

const introStats = [
  { value: "414", label: "Armas con SA", sub: "variantes vivas" },
  { value: "3", label: "Opciones por arma", sub: "una por cristal" },
  { value: "3", label: "SA nuevos", sub: "no existían en retail" },
  { value: "27", label: "SA dados de baja", sub: "rotos u obsoletos" },
];

const nuevos: [string, string, string][] = [
  ["Magic Critical", "Probabilidad de crítico mágico ×4", "Magos de ataque"],
  [
    "Servitor Sharing",
    "P. Atk. +25% y M. Atk. +12%, y le pasa ese mismo bonus a tu invocación",
    "Invocadores",
  ],
  ["Skill Power", "Daño de habilidades físicas +15%", "Guerreros que pelean con skills"],
];

const rehechos: [string, string, string][] = [
  ["Focus", "7 skills, de 61 a 90, y el grado C por encima del A", "Crit. Rate +90 en todas"],
  ["Critical Damage", "6 skills, de 106 a 326, el mejor era grado A", "Crit. Damage +425 en todas"],
  [
    "Anger",
    "6 skills, casi todos sumaban P. Atk. plano",
    "P. Atk. +20% a una mano, +15% a dos manos. Max HP −15% en las dos",
  ],
  [
    "Empower",
    "Convivía con Magic Power, que además cobraba +15% de maná",
    "M. Atk. +32%, sin penalización",
  ],
  ["Mana Up", "Sólo Max MP", "Max MP +30% y regeneración de MP +15%"],
  [
    "Critical Stun",
    "Caía siempre al piso de acierto; el grado C superaba al A",
    "Acierta de verdad, y la diferencia va por grado: S 35, A 30, B 25, C 20",
  ],
  [
    "Mortal Strike",
    "El cliente prometía entre 40% y 50%",
    "Blows +15% de acierto, que es lo que siempre dio",
  ],
  ["Haste / Acumen", "Valores dispersos por grado", "Atk. Spd. +8% / Casting Spd. +15%"],
];

const strong = "font-semibold text-foreground";

export default function SaReworkeadosPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/informacion-de-juego"
          className="text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Información de juego
        </Link>

        {/* Intro */}
        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            Guía de sistema · Armas de grado C en adelante
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">SA Reworkeados</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Special Abilities: qué da cada SA hoy, y qué se cambió para llegar acá
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Un Soul Crystal le agrega una habilidad permanente a un arma. El catálogo venía con
            valores inventados, gradientes al revés y una docena de SA que no hacían absolutamente
            nada. Se rehizo entero: hoy cada arma base tiene exactamente tres opciones y todas
            funcionan.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* Secciones */}
        <div className="mt-16">
          <GuideStep n="I" title="Cómo funciona">
            <p>
              Llevás el arma base y un Soul Crystal al Blacksmith y te devuelve la variante con el
              SA puesto. El cristal define cuál de las tres opciones te toca, y el color del
              cristal es el color con el que vas a ver el texto en el tooltip del arma.
            </p>
            <p>
              Pasando el mouse por un arma base vas a ver el bloque Available Soul Crystals con las
              tres opciones, cada una pintada del color de su cristal. En una variante que ya tiene
              el SA puesto, vas a ver solamente el suyo, con los valores reales.
            </p>

            <Callout title="Se puede deshacer" variant="info">
              <p>
                El mismo Blacksmith revierte la operación y te devuelve el arma base. Los SA de
                grado A y S salen del Blacksmith of Mammon; los de C y B, de los herreros comunes.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="II" title="Los tres SA nuevos">
            <p>
              No existen en el Lineage original. Se crearon para reemplazar SA que estaban vacíos o
              que no tenían sentido en este servidor.
            </p>

            <DataTable headers={["SA", "Qué hace", "A quién le sirve"]} rows={nuevos} />

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Lo que conviene saber de cada uno
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-5">
                <li>
                  <strong className={strong}>Magic Critical</strong> se multiplica con Wild Magic.
                  Si llevás el buff nivel 2, que es ×4, el total es ×16 sobre tu probabilidad base.
                </li>
                <li>
                  <strong className={strong}>Servitor Sharing</strong> no le suma a tu invocación un
                  porcentaje de lo que ella tiene, sino un porcentaje de lo tuyo. Por eso el número
                  de P. Atk. es tan alto: los servitors pegan mucho más que un invocador, así que
                  un porcentaje chico del dueño se les nota poco. En M. Atk. están parejos y ahí el
                  traslado rinde casi completo.
                </li>
                <li>
                  <strong className={strong}>Skill Power</strong> toca únicamente los golpes con
                  habilidad. No mejora el golpe normal ni los blows de daga, que van por otra
                  fórmula.
                </li>
              </ul>
            </div>
          </GuideStep>

          <GuideStep n="III" title="Los que se rehicieron">
            <p>
              Casi todos los SA clásicos estaban implementados con un skill distinto por cada grado
              de arma, y los valores no seguían ningún orden: era común que el de grado C diera más
              que el de grado A. Se unificaron.
            </p>

            <DataTable headers={["SA", "Antes", "Ahora"]} rows={rehechos} />

            <Callout title="El cliente mentía" variant="info">
              <p>
                Las descripciones traen los números escritos adentro, así que cada cambio de valor
                las dejaba desactualizadas. Se reescribieron todas: hoy lo que dice el tooltip es
                lo que aplica el servidor. Si encontrás una que no coincida, es un error y conviene
                reportarlo.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="IV" title="Los 27 que se dieron de baja">
            <p>
              Se sacaron dos grupos. El primero, veinte SA obsoletos o rotos: los de magia ofensiva
              que nunca acertaban, los venenos y sangrados con daño desbocado, y varios que
              directamente no otorgaban ninguna habilidad.
            </p>
            <p>
              El segundo, siete que no usaban un skill sino los stats del arma — Light, Quick
              Recovery, Miser, Cheap Shot y los tres Blow de alcance. Eran invisibles para cualquier
              revisión y alguno beneficiaba sin pedir nada a cambio.
            </p>

            <Callout title="Ninguna arma quedó sin SA" variant="custom">
              <p>
                Las 165 afectadas recibieron otro del catálogo vigente. Si tenías una de esas
                armas, seguís teniéndola y ahora hace algo.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="V" title="Tres cosas que cambian tus cuentas">
            <div>
              <p className="font-display text-base font-bold text-foreground">
                El crítico se divide por diez
              </p>
              <p className="mt-2">
                El número del Focus no es un porcentaje. El motor tira un dado sobre 1000, así que
                +90 son +9 puntos de probabilidad. Suena poco hasta que mirás de dónde partís: un
                personaje sin SA anda cerca del 6%. El Focus no es un extra, es el término que
                manda.
              </p>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Un proc tira dos dados, no uno
              </p>
              <p className="mt-2">
                Los SA que se disparan al golpear —Critical Stun, Bluff, Critical Slow— primero
                tiran si el arma intenta lanzarlo y después si el efecto entra contra la resistencia
                del objetivo. Un SA con 20% de chance no aturde el 20% de las veces: bastante
                menos.
              </p>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                El bonus de PvP es sólo de grado A y S
              </p>
              <p className="mt-2">
                El renglón Increases damage inflicted during PvP son +5% de daño contra jugadores y
                lo llevan únicamente las armas de grado A y S. Si una de grado B o C no lo
                menciona, no es un olvido.
              </p>
            </div>

            <Callout title="Dagas" variant="info">
              <p>
                Critical Damage suma un valor plano después de todas las multiplicaciones, y en un
                blow ese plano se multiplica por 6,1. En un arma que no sea daga casi no se nota;
                en una daga es de los mejores SA que hay.
              </p>
            </Callout>

            <Callout title="Las duales con bonus al +4" variant="warn">
              <p>
                El bonus extra de las duales se aplica al equipar, no al encantar. Si encantás con
                el arma puesta, sacátela y volvé a ponértela o no lo vas a tener.
              </p>
            </Callout>
          </GuideStep>

          <GuideStep n="VI" title="Armas con su SA" last>
            <p>
              Algunas armas con el SA ya puesto, con los valores que muestra el tooltip. Elegí un
              tipo de arma, abrí una mano o dos manos y tocá cada arma.
            </p>

            <ItemExplorer
              idPrefix="sa"
              tabsLabel="Tipo de arma"
              tabs={SA_WEAPON_TYPES}
              groups={SA_GRIPS}
              data={saWeapons}
              images={loadItemImages("sa")}
              noun={{ one: "arma", many: "armas", groupEmpty: "Sin armas cargadas." }}
            />

            <Callout title="Propio de L2Thunder" variant="custom">
              <p>
                Todos los valores de esta página salen del servidor en funcionamiento, no de wikis
                ni del cliente. Lo propio de L2Thunder es el rework completo del catálogo: la
                unificación de valores por SA, los tres SA nuevos, la baja de los 27 obsoletos y la
                garantía de tres opciones por arma. El mecanismo del Soul Crystal y los lugares
                donde se aplica siguen el diseño original.
              </p>
            </Callout>
          </GuideStep>
        </div>
      </div>
    </div>
  );
}
