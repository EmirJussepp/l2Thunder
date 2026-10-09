import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import LevelBands from "@/components/guias/LevelBands";

export const metadata: Metadata = {
  title: "Límites de Nivel — Guía",
  description:
    "Desde qué diferencia de nivel dejás de ganar experiencia en la party y contra los mobs, cuándo salta el Raid Curse y por qué bajar de nivel no te deja conservar los skills.",
};

const introStats = [
  { value: "21", label: "Party", sub: "respecto del más alto" },
  { value: "11", label: "Mobs", sub: "para arriba y para abajo" },
  { value: "9", label: "Raid Curse", sub: "por encima del raid" },
  { value: "0", label: "Margen de gracia", sub: "no hay degradado" },
];

const bandas = [
  { label: "Raid Curse", cut: 9, note: "sin maldición hasta 8 de diferencia" },
  { label: "Mobs", cut: 11, note: "cobrás hasta 10 de diferencia" },
  { label: "Party", cut: 21, note: "cobrás hasta 20 de diferencia" },
];

const party: [string, string][] = [
  ["De 0 a 20 niveles", "Su parte completa"],
  ["21 niveles o más", "Nada"],
];

const mobs: [string, string][] = [
  ["11 niveles o más por encima", "Nada"],
  ["Entre 10 por encima y 10 por debajo", "Completa"],
  ["11 niveles o más por debajo", "Nada"],
];

const maldiciones: [string, string, string][] = [
  ["Golpe o skill físico", "Raid Curse — petrificación", "120 s"],
  ["Skill mágico", "Raid Curse — silencio total", "3600 s"],
];

const skillsAlBajar: [string, string][] = [
  ["Nivel 40", "Nivel 49"],
  ["Nivel 52", "Nivel 61"],
  ["Nivel 70", "Nivel 79"],
];

const faq: [string, string, string][] = [
  [
    "Matás bichos en party y no sube nada",
    "Estás 21 o más niveles por debajo del más alto del grupo",
    "Partir el grupo, o subir hasta entrar en la franja",
  ],
  [
    "Sube a los demás pero a vos no",
    "Lo mismo, pero sólo a vos te alcanza el corte",
    "Salir de la party y farmear tu propio rango",
  ],
  [
    "Solo, en una zona baja, y no sube",
    "Los bichos están 11 o más niveles por debajo",
    "Cambiar de zona; en esa ya no hay nada que ganar",
  ],
  [
    "Solo, en una zona alta, y tampoco sube",
    "Los bichos están 11 o más niveles por encima",
    "Bajar a una zona de tu rango: por arriba tampoco paga",
  ],
  [
    "En party rinde menos que antes de sumar gente",
    "Alguien quedó fuera del reparto y no suma al bono",
    "Sacarlo del grupo o acercarlo de nivel",
  ],
  [
    "Le pego al raid y hace 0 de daño",
    "Le estás 9 o más niveles por encima",
    "Mandar a alguien dentro del rango; no hay forma de evitarlo",
  ],
];

function Seccion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14 border-t border-border-soft pt-14">
      <h2 className="brand text-xs font-bold uppercase tracking-widest text-accent-2">{title}</h2>
      <div className="mt-3 space-y-6">{children}</div>
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="max-w-[38rem] text-muted">{children}</p>;
}

function Subtitulo({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-base font-bold text-foreground">{title}</p>
      <div className="mt-2 max-w-[38rem] space-y-3 text-muted">{children}</div>
    </div>
  );
}

export default function LimitesDeNivelPage() {
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
            Guía de sistema · Todos los niveles
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">Límites de Nivel</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Desde qué diferencia dejás de ganar experiencia, y qué pasa si bajás de nivel
          </p>
          <p className="mt-6 max-w-[38rem] text-muted">
            El servidor corta la experiencia en tres lugares distintos, cada uno con su propio
            número. Ninguno de los tres avisa: simplemente dejás de cobrar. Acá están los tres, de
            dónde salen y qué se puede y qué no se puede hacer con la diferencia de nivel.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>

          <div className="mt-6">
            <LevelBands
              bands={bandas}
              caption="En dorado, la franja donde todavía cobrás. El corte es seco: en el último nivel de la franja cobrás el 100 % y en el siguiente, nada."
            />
          </div>

          <p className="mt-6 max-w-[38rem] text-muted">
            Los tres números miden cosas distintas: el de la party se mide contra el compañero más
            alto, el de los mobs contra el bicho, y el del Raid Curse contra el raid.
          </p>
        </div>

        <Seccion title="✦ La party corta a los 21 niveles">
          <P>
            Todos los integrantes se comparan contra el nivel más alto de la party — o el del
            command channel, si están en uno. Si la diferencia pasa de 20, ese integrante queda
            fuera del reparto y cobra cero.
          </P>

          <DataTable headers={["Diferencia con el más alto", "Qué cobra"]} rows={party} />

          <P>
            Además hay que estar a menos de 1500 de distancia del bicho cuando muere y en la misma
            instancia. El reparto entre los que sí cobran es proporcional al cuadrado del nivel de
            cada uno, así que el de nivel más alto se lleva la porción más grande.
          </P>

          <Callout title="Llevar un nivel bajo de arrastre no es gratis" variant="warn">
            <p>
              El bono de party se calcula sobre los que cobran, no sobre los que están. Un
              integrante que quedó fuera por diferencia de nivel no suma al bono: una party de seis
              con uno excluido rinde como una de cinco. No sólo él no gana nada, sino que les baja
              la experiencia a los otros.
            </p>
          </Callout>

          <Callout title="Por qué no hay penalización parcial" variant="custom">
            <p>
              El motor tiene otro método, highfive, que reparte en escalones — hasta 9 de
              diferencia el 100 %, de 10 a 14 el 30 %, y de ahí nada. L2Thunder no lo usa: está
              configurado el método level, que es todo o nada con el corte en 20.
            </p>
          </Callout>
        </Seccion>

        <Seccion title="✦ Los mobs cortan a los 11, en las dos direcciones">
          <P>
            Acá la comparación es directa entre tu nivel y el del bicho. Mientras la diferencia sea
            de 10 o menos cobrás la experiencia completa; desde 11 no cobrás nada.
          </P>

          <DataTable headers={["Tu nivel contra el del mob", "Experiencia"]} rows={mobs} />

          <P>
            Lo que más sorprende es la segunda mitad: un bicho demasiado alto tampoco da
            experiencia. Si estás en 70 y te vas a pegarle a algo de 81, lo matás y no cobrás un
            solo punto.
          </P>

          <Callout title="La curva suave existe, pero no para vos" variant="info">
            <p>
              El código trae una tabla que achica la experiencia de a poco (97 %, 67 %, 42 %…
              hasta 3 %) según la diferencia. Está encerrada en una condición de nivel 85 o más, y
              el tope de L2Thunder es 80: nunca se ejecuta. Por eso el corte se siente tan brusco.
            </p>
          </Callout>
        </Seccion>

        <Seccion title="✦ El Raid Curse salta a los 9 por encima del raid">
          <P>
            Si tu nivel supera al del raid por 9 o más, el golpe que le pegues hace cero de daño y
            te cae una maldición encima. Se corta el ataque, se corta el casteo y el personaje
            queda quieto.
          </P>

          <DataTable headers={["Con qué le pegaste", "Qué te cae", "Dura"]} rows={maldiciones} />

          <Callout title="La versión mágica dura una hora" variant="warn">
            <p>
              Las dos maldiciones son indispelables, pero no duran lo mismo: la física son dos
              minutos de piedra y la mágica es una hora sin poder lanzar nada, ni físico ni mágico.
              Si vas a tantear un raid que no conocés, tanteálo pegando, no casteando.
            </p>
          </Callout>

          <P>
            Sólo castiga estar por encima. Pegarle a un raid muy por arriba de tu nivel no tiene
            maldición ninguna: simplemente te va a costar mucho, y si pasa de 10 de diferencia
            tampoco vas a cobrar experiencia.
          </P>
        </Seccion>

        <Seccion title="✦ Bajar de nivel no te deja conservar los skills">
          <P>
            La idea aparece sola: subo a 60, aprendo todo, bajo a 40 y le pego a un raid de nivel
            bajo sin comerme la maldición, pero con los skills de 60. No funciona.
          </P>

          <P>
            Cada vez que el personaje cambia de nivel — y eso incluye bajar — el servidor repasa la
            lista entera de skills de clase con esta regla:
          </P>

          <Callout title="La regla" variant="info">
            <p>
              Conservás el skill sólo si tu nivel es mayor o igual al nivel en que se aprende,
              menos 9. Si no llegás, el skill baja al nivel más alto que sí califique; si no hay
              ninguno, se borra.
            </p>
          </Callout>

          <DataTable
            headers={["Si bajás a", "Conservás los skills que se aprenden hasta"]}
            rows={skillsAlBajar}
          />

          <P>
            Así que el personaje de 60 que baja a 40 llega al raid con skills de nivel 49, no con
            los de 60. Y para que le sirva de algo, el raid tendría que ser de nivel 32 o más,
            porque si no la maldición le cae igual.
          </P>

          <Subtitulo title="Y además casi no se puede bajar">
            <p>
              En L2Thunder el único camino para perder nivel es morir. El delevel del Community
              Board está apagado y el NPC de delevel instantáneo también. Ir de 60 a 40 serían
              cientos de muertes.
            </p>
          </Subtitulo>
        </Seccion>

        <Seccion title="? No estoy ganando experiencia">
          <DataTable headers={["Lo que ves", "Qué está pasando", "Cómo se arregla"]} rows={faq} />

          <p className="max-w-[38rem] text-xs text-muted">
            Todos los números de esta guía se leyeron del servidor en funcionamiento y de su
            código, no de una wiki. Lo propio de L2Thunder es el corte de party sin escalones: el
            motor ofrece una penalización gradual y acá se eligió el método seco, con el límite en
            20 niveles de diferencia. El corte de los mobs, el Raid Curse y la pérdida de skills al
            bajar de nivel siguen el diseño original.
          </p>
        </Seccion>
      </div>
    </div>
  );
}
