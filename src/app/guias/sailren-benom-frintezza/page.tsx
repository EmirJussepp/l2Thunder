import type { Metadata } from "next";
import Link from "next/link";
import StatGrid from "@/components/guias/StatGrid";
import GuideStep from "@/components/guias/GuideStep";
import Callout from "@/components/guias/Callout";
import DataTable from "@/components/guias/DataTable";
import CoordChip from "@/components/guias/CoordChip";

export const metadata: Metadata = {
  title: "Sailren, Benom y Frintezza — Guía",
  description:
    "Las tres mazmorras privadas del servidor: cómo entrar, los mecanismos de cada pelea y el botín de Sailren, Benom (con su modo difícil) y Frintezza.",
};

const introStats = [
  { value: "1", label: "Sailren", sub: "jugador, en solitario" },
  { value: "5+", label: "Benom", sub: "sólo los sábados" },
  { value: "4-9", label: "Frintezza", sub: "una party" },
];

const overview: [string, string, string, string][] = [
  ["Quién entra", "1 jugador, y sin party", "Party de 5 o más", "Party de 4 a 9"],
  ["Cuándo", "Siempre", "Sábados y las 24 h previas al asedio de Rune", "Siempre"],
  ["La llave", "Gazkh", "Ninguna", "Force Field Removal Scroll"],
  ["Nivel", "Sin mínimo — el jefe es 87", "Sin mínimo — el jefe es 75", "74"],
  ["Tiempo adentro", "53 min", "60 min", "35 min"],
  ["Para volver", "24 horas", "El próximo sábado", "5 días"],
];

const sailrenStats = [
  { value: "80.457", label: "Vida" },
  { value: "1.487", label: "P. Atk" },
  { value: "1.426", label: "P. Def" },
  { value: "1.850", label: "M. Def" },
];

const benomStats = [
  { value: "898.044", label: "Vida" },
  { value: "8.876", label: "P. Atk" },
  { value: "4.189", label: "P. Def" },
  { value: "3.321", label: "M. Def" },
];

const benomLoot: [string, string, string][] = [
  ["Triol's Earring", "15%", "50%"],
  ["Sealed Arcane Sigil", "25%", "65%"],
  ["Destruction Tombstone", "—", "10 fijos"],
  ["Adena", "—", "45.000.000"],
  ["Forgotten Blade · Heaven's Divider", "tabla normal", "+ una tirada extra al 1,18% cada una"],
];

const scarletStats = [
  { value: "4.860.990", label: "Vida" },
  { value: "37.590", label: "P. Atk" },
  { value: "2.726", label: "P. Def" },
  { value: "8.473", label: "M. Def" },
];

const earringBonus: [string, string][] = [
  ["M. Def.", "+71"],
  ["Probabilidad de que entre un Stun", "+20%"],
  ["Veneno, Hold, Bleed, Sleep, Derangement y Paralyze", "+10%"],
  ["Regeneración de HP y MP", "+15%"],
  ["WIT y DEX", "+1"],
];

export default function SailrenBenomFrintezzaPage() {
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
            Guía de contenido · Instancias
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">
            Sailren, Benom y Frintezza
          </h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">
            Las tres mazmorras privadas del servidor
          </p>
          <p className="mt-6 max-w-3xl text-muted">
            Una instancia es una copia privada de la mazmorra: la abrís vos, es tuya y de nadie
            más, y nadie te puede robar el jefe. No hay cola ni hay que esperar a que otro grupo
            termine. A cambio, cada una tiene su llave y su tiempo de espera para volver.
          </p>

          <div className="mt-8">
            <StatGrid stats={introStats} />
          </div>
        </div>

        {/* De un vistazo */}
        <div className="mt-16">
          <p className="brand text-xs font-bold uppercase tracking-widest text-gold">
            ✦ De un vistazo
          </p>
          <div className="mt-4">
            <DataTable
              headers={["", "Sailren", "Benom", "Frintezza"]}
              rows={overview.map(([label, ...rest]) => [
                <strong key={label} className="font-semibold text-foreground">
                  {label}
                </strong>,
                ...rest,
              ])}
            />
          </div>

          <div className="mt-6">
            <Callout title="La regla que comparten las tres" variant="info">
              <p>
                El tiempo de espera se cobra al matar al jefe, nunca al entrar. Si el intento
                sale mal, si se acaba el tiempo o si te vas antes, no perdiste el día: podés
                volver a entrar en cuanto consigas otra llave.
              </p>
            </Callout>
          </div>
        </div>

        {/* Pasos */}
        <div className="mt-16">
          <GuideStep n="I" title="Sailren">
            <p>
              La única de las tres que se hace en solitario. Es una prueba de aguante personal:
              cuatro escalones seguidos, sin ayuda y sin poder curarte a fondo.
            </p>

            <div>
              <p className="font-display text-base font-bold text-foreground">Cómo entrar</p>
              <p className="mt-3">
                Hablá con la <strong className="font-semibold text-foreground">Shilen&apos;s
                Stone Statue</strong> en el Wall of Argos —{" "}
                <CoordChip>9914, −24803, −3771</CoordChip>. Hace falta un{" "}
                <strong className="font-semibold text-gold">Gazkh</strong>, y hay dos maneras de
                conseguirlo:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Comprarlo en la misma estatua por 1.000.000 de adena.</li>
                <li>
                  La misión 641{" "}
                  <strong className="font-semibold text-gold">Attack Sailren</strong>, nivel 77:
                  juntar 30 Gazkh Fragment de los dinosaurios de Primeval Isle.
                </li>
              </ul>
            </div>

            <Callout title="Tenés que estar sin party" variant="warn">
              <p>
                La estatua no abre la guarida si estás en un grupo, ni siquiera de dos. Salí de
                la party antes de hablarle.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Los cuatro escalones
              </p>
              <p className="mt-3">
                Van apareciendo solos, con un respiro entre uno y otro. No se puede saltear
                ninguno.
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Tres Velociraptors a los 20 segundos de entrar.</li>
                <li>Un Pterosaur, 20 segundos después de limpiar los raptors.</li>
                <li>Un Tyrannosaurus, 25 segundos más tarde. Es el escalón más duro del camino.</li>
                <li>Sailren.</li>
              </ol>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">La pelea</p>
              <p className="mt-3">
                Sailren no pega parejo: sigue un ritmo fijo y avisa. Cada 20 segundos lanza un{" "}
                <strong className="font-semibold text-foreground">Blow</strong> con dos segundos
                y medio de casteo visible, y después se queda quieto cinco segundos. Ese hueco es
                tuyo: es cuando se come una poción o se recupera terreno.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Aturdimiento en área cada 50 segundos.</li>
                <li>Se pone Might al bajar del 50% de vida.</li>
                <li>Te saca los buffs al 25%.</li>
                <li>Por debajo del 20% entra en furia: el Blow pasa a cada 12 segundos.</li>
              </ul>
            </div>

            <Callout title="Es el único raid más blando al acero que a la magia" variant="info">
              <p>
                Todos los raid del juego tienen la defensa mágica a la mitad de la física — por
                eso los magos son la respuesta clásica. Sailren está al revés:{" "}
                <strong className="font-semibold text-foreground">1.426</strong> de P. Def.
                contra <strong className="font-semibold text-foreground">1.850</strong> de M.
                Def. Acá las clases físicas rinden más.
              </p>
            </Callout>

            <Callout title="Solo no hay con qué sostenerse" variant="warn">
              <p>
                La Greater Healing Potion tiene 2 minutos de reutilización y comparte grupo con
                la Quick Healing. La única de 10 segundos es la Healing Potion común, y cura
                poquísimo. Planificá la pelea alrededor de eso, no alrededor de tu barra.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Sailren — Mal Sellado, nivel 87
              </p>
              <div className="mt-3">
                <StatGrid stats={sailrenStats} />
              </div>
            </div>

            <p>
              <strong className="font-semibold text-foreground">Qué deja: </strong>
              4.569.144 de experiencia, y de botín: Sealed Draconic Leather Armor y sus partes,
              Angel Slayer y sus hojas, y Enchant Weapon S.
            </p>

            <p className="text-xs text-muted/70">
              Si el intento fracasa perdés el Gazkh, pero no las 24 horas: conseguís otro y
              volvés a bajar.
            </p>
          </GuideStep>

          <GuideStep n="II" title="Benom">
            <p>
              La mazmorra del castillo de Rune. Es la única con horario de calendario y la única
              que tiene dos dificultades: el modo normal, que es una pelea directa, y el modo
              difícil, que agrega tres mecánicas encima.
            </p>

            <div>
              <p className="font-display text-base font-bold text-foreground">Cuándo abre</p>
              <p className="mt-3">
                Todos los sábados, de 00:00 a 23:59 hora de Argentina, y además durante las 24
                horas previas al asedio de Rune. Mientras el asedio está en curso, cierra.
              </p>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">Cómo entrar</p>
              <p className="mt-3">
                Hablá con el <strong className="font-semibold text-foreground">Dungeon
                Keeper</strong>. Hay dos, y salís por el que hayas usado para entrar:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Dentro del castillo de Rune — <CoordChip>11532, −49136, −1087</CoordChip>
                </li>
                <li>
                  Afuera — <CoordChip>42705, −47944, −792</CoordChip>
                </li>
              </ul>
              <p className="mt-3">
                Habla el líder, con una party de 5 o más, y todos tienen que estar a menos de
                1.000 del guardián. No hace falta ningún objeto. El segundo enlace de su diálogo
                es el modo difícil.
              </p>
            </div>

            <Callout title="Una sola vez por apertura" variant="warn">
              <p>
                El que mata a Benom no vuelve a bajar hasta el próximo sábado. El que entra y no
                lo mata, sí.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">El modo difícil</p>
              <p className="mt-3">
                Benom y toda la corte de Triol reciben +30% a todos sus stats, y aparecen tres
                mecánicas que no existen en el modo normal.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-semibold text-foreground">1. La corte de Triol</p>
                  <p className="mt-2">
                    Al cruzar el 75%, el 50% y el 25% de vida aparecen un Triol&apos;s Warlock y
                    tres Triol&apos;s Ravager.
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                      El Warlock cura a Benom el 2% de su vida máxima por casteo, mientras esté a
                      menos de 700 de él. El casteo dura 7 segundos y se ve venir. Hay cuatro
                      formas de cortarlo: matarlo, arrastrar a Benom fuera de rango, silenciarlo
                      o secarle el maná.
                    </li>
                    <li>
                      Los Ravagers cambian de objetivo al azar cada 10 segundos. No se los puede
                      pegar al tanque: van a ir por el healer tarde o temprano.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground">2. La Marca de Triol</p>
                  <p className="mt-2">
                    Cada 45 segundos, un jugador al azar queda marcado. Cinco segundos después
                    muere todo el que esté a menos de 600 de él.
                  </p>
                  <div className="mt-3">
                    <Callout title="El marcado no muere" variant="info">
                      <p>
                        La gracia no es sacrificarse: es alejarse del grupo. Si el marcado corre,
                        no muere nadie.
                      </p>
                    </Callout>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-foreground">3. El sellado</p>
                  <p className="mt-2">
                    Al bajar del 3% de vida, Benom se clava en el 1% y se vuelve invulnerable. Se
                    abre una ventana de cinco segundos en la que alguien tiene que usarle encima
                    un Rope of Magic: A-Grade. Si nadie llega, se cura un 10% y hay que bajarlo
                    otra vez.
                  </p>
                  <div className="mt-3">
                    <Callout title="Llevá la soga antes de bajar" variant="warn">
                      <p>
                        El Rope of Magic: A-Grade se vende en varias tiendas. Que la lleve más de
                        uno: si el que la tiene está muerto en ese momento, la ventana se pierde
                        igual.
                      </p>
                    </Callout>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Benom — Triol&apos;s Leader, nivel 75
              </p>
              <div className="mt-3">
                <StatGrid stats={benomStats} />
              </div>
              <p className="mt-3 text-xs text-muted/70">
                En modo difícil, sumale un 30% a cada uno de esos números.
              </p>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">Qué deja</p>
              <div className="mt-3">
                <DataTable headers={["Premio", "Normal", "Difícil"]} rows={benomLoot} />
              </div>
              <p className="mt-4">
                Y el Triol&apos;s Warlock, si lo matás, deja 5.000.000 de adena y de 2 a 5
                Destruction Tombstone. Vale la pena decidir de antemano si el grupo va a bajarlo o
                a esquivarlo: es la apuesta del modo difícil.
              </p>
              <p className="mt-2">
                Benom da además <strong className="font-semibold text-gold">3.000.000</strong> de
                experiencia y <strong className="font-semibold text-gold">1.400.000</strong> SP.
              </p>
            </div>

            <div className="card-surface rounded-none border-gold/30 p-5">
              <p className="brand text-xs font-bold uppercase tracking-widest text-gold">
                El canje de Destruction Tombstone
              </p>
              <p className="mt-2 text-sm">
                El Dungeon Keeper los cambia por cofres de arma: 140 por el cofre de grado A y
                220 por el de grado S. Los cofres siempre dan algo — arma, Blessed Enchant Weapon
                o Enchant Armor del grado que corresponda.
              </p>
            </div>
          </GuideStep>

          <GuideStep n="III" title="Frintezza" last>
            <p>
              La Última Tumba Imperial: la instancia más larga y la de mejor botín. También la
              que más cuesta preparar, porque cada intento consume un pergamino y bloquea a los
              que lo completen durante cinco días.
            </p>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Conseguir el pergamino
              </p>
              <p className="mt-3">
                Hace falta un{" "}
                <strong className="font-semibold text-gold">
                  Frintezza&apos;s Magic Force Field Removal Scroll
                </strong>
                , y lo lleva el líder — uno solo por entrada, no uno por integrante. Sale de la
                misión 654 Journey to a Settlement, con el Nameless Spirit en{" "}
                <CoordChip>178292, −85577, −7200</CoordChip>:
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Hay que tener terminada la misión 119 Last Imperial Prince y ser nivel 74.</li>
                <li>Matar Canyon Antelopes hasta que caiga una Antelope Skin — 30% por muerte.</li>
                <li>Llevarle la piel al espíritu. La misión es repetible, así que se puede juntar de a varios.</li>
              </ol>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">Cómo entrar</p>
              <p className="mt-3">
                El líder habla con el{" "}
                <strong className="font-semibold text-foreground">Imperial Tomb Guide</strong> —{" "}
                <CoordChip>181376, −81008, −2728</CoordChip>. La party puede ser de hasta 9,
                todos de nivel 74 o más y a menos de 700 del guía.
              </p>
            </div>

            <Callout title="Si uno no puede, no entra nadie" variant="warn">
              <p>
                El guía corta la entrada completa y nombra a quien no cumple, en vez de dejarlo
                afuera. Es a propósito: el pergamino se gasta al cruzar.
              </p>
            </Callout>

            <div>
              <p className="font-display text-base font-bold text-foreground">Adentro</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Sala 1: matar los 4 Hall Alarm Device. Se abren las puertas.</li>
                <li>
                  Sala 2: matar los 2 Dark Choir Player. Si alguno del grupo se quedó atrás, en
                  vez de cerrarse la sala aparecen 87 monstruos más y hay que matar 8 Dark Choir
                  Captain.
                </li>
                <li>Tres minutos de espera, un terremoto, y arranca la cinemática.</li>
              </ul>
              <div className="mt-3">
                <Callout title="Los tres minutos no son un error" variant="info">
                  <p>
                    Después de limpiar la sala 2 no pasa nada durante tres minutos. Parece que se
                    colgó y no: es el respiro antes del jefe. Aprovechalo para buffear.
                  </p>
                </Callout>
              </div>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">La pelea</p>
              <p className="mt-3">
                A Frintezza no se lo pelea. Es el director de orquesta: toca canciones que
                debuffean al grupo y no se lo puede atacar. El jefe real es{" "}
                <strong className="font-semibold text-foreground">Scarlet van Halisha</strong>,
                que sale de su interior y se transforma tres veces — al 75%, al 50% y al final.
                Cada transformación congela la escena unos segundos.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Cuatro retratos en las esquinas invocan refuerzos cada 18 segundos.</li>
                <li>
                  Las canciones se anuncian en pantalla con su nombre. La Hypnotic Mazurka
                  paraliza; la Mournful Chorale Prelude es la que más duele.
                </li>
                <li>El límite son 35 minutos desde que entraron, contando las salas.</li>
              </ul>
            </div>

            <div>
              <p className="font-display text-base font-bold text-foreground">
                Scarlet van Halisha — forma final, nivel 85
              </p>
              <div className="mt-3">
                <StatGrid stats={scarletStats} />
              </div>
            </div>

            <div>
              <p>
                <strong className="font-semibold text-foreground">Qué deja: </strong>
                es el mejor botín del servidor: 284.286.178 de experiencia y 27.215.401 SP, más
                de 18.000.000 de adena, y:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Frintezza&apos;s Necklace, garantizado.</li>
                <li>Top-Grade Life Stone nivel 76, garantizada.</li>
                <li>Piezas selladas de Majestic, Imperial Crusader y Major Arcana.</li>
                <li>Joyas selladas Tateossian, Phoenix y Majestic.</li>
                <li>Blessed Scroll of Resurrection y manuscritos de Divine Inspiration.</li>
              </ul>
            </div>

            <p className="text-xs text-muted/70">
              Después de la muerte quedan 5 minutos para juntar todo y salir por el cubo.
            </p>
          </GuideStep>
        </div>

        {/* Triol's Earring */}
        <section className="mt-4 border-t border-border-soft pt-14">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ◈ Triol&apos;s Earring
          </p>
          <p className="mt-3 max-w-3xl text-muted">
            El aro que dropea Benom es propio de L2Thunder: no existe en ningún otro lado. Tiene
            la misma defensa mágica que un aro de grado S y encima un pasivo que no tiene ningún
            otro accesorio.
          </p>

          <div className="mt-6 max-w-2xl">
            <DataTable headers={["Bonificación", "Valor"]} rows={earringBonus} />
          </div>

          <div className="mt-6 max-w-3xl">
            <Callout title="Si te ponés dos" variant="info">
              <p>
                La defensa mágica suma — 142 con los dos puestos — pero el resto de las
                bonificaciones se aplica una sola vez. El segundo aro aporta sólo la M. Def.
              </p>
            </Callout>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-muted">
            Es de grado A a efectos de cristales y se puede encantar. Cae al{" "}
            <strong className="font-semibold text-gold">15%</strong> en el modo normal y al{" "}
            <strong className="font-semibold text-gold">50%</strong> en el difícil, así que es la
            razón principal para animarse al modo difícil.
          </p>

          <p className="mt-8 text-xs text-muted/70">
            Todos los valores de esta guía salen del servidor y son los finales, ya con los
            multiplicadores aplicados. Las reglas propias de L2Thunder son: que las tres
            mazmorras sean instancias privadas por grupo, el modo difícil de Benom con la corte
            de Triol, el Triol&apos;s Earring, y los tiempos de espera para volver a entrar. El
            resto sigue el diseño original.
          </p>
        </section>
      </div>
    </div>
  );
}
