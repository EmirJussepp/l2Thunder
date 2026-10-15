import type { Metadata } from "next";
import Link from "next/link";
import Crest from "@/components/Crest";
import SectionHeader from "@/components/porque/SectionHeader";
import StatGrid from "@/components/guias/StatGrid";
import Callout from "@/components/guias/Callout";

const DISCORD_URL = "https://discord.gg/nNFJVWTbD";

export const metadata: Metadata = {
  title: "Seguridad e infraestructura",
  description:
    "Un host profesional en São Paulo, copias de seguridad cada 6 horas, pagos confirmados con Mercado Pago y el motor del juego revisado pieza por pieza: el trabajo de seguridad detrás de L2Thunder.",
};

const stats = [
  { value: "3.000+", label: "Intentos de entrada por día", sub: "de robots, medidos en el servidor" },
  { value: "6 h", label: "Entre copias del juego", sub: "personajes, ítems y cuentas" },
  { value: "60+", label: "Piezas del motor revisadas", sub: "contra el original" },
  { value: "HTTPS", label: "En toda la web", sub: "sin excepciones" },
];

const host = [
  {
    title: "Nube profesional",
    text: "El juego, la web y las bases de datos viven en la nube de un proveedor de infraestructura especializado, con red y hardware de nivel profesional.",
  },
  {
    title: "En São Paulo",
    text: "El servidor está en Brasil, en la misma región que casi todos los que juegan: menos distancia entre vos y el servidor.",
  },
  {
    title: "Solo para L2Thunder",
    text: "Es un servidor privado virtual que usamos únicamente para el juego y su web. No corre nada más ahí, así que nada más compite por sus recursos ni abre otras puertas.",
  },
];

const protegido = [
  {
    title: "Tu cuenta",
    text: "Si alguien se pone a probar contraseñas, el servidor lo frena: después de 5 intentos fallidos, esa conexión queda bloqueada 15 minutos. Y la web nunca te pide la contraseña de tu cuenta de juego, ni siquiera para donar.",
  },
  {
    title: "Tus donaciones",
    text: "Pagás con Mercado Pago: nosotros nunca vemos los datos de tu tarjeta. Cada pago se confirma directamente con Mercado Pago y se controla que el monto sea el correcto antes de entregar nada. Los Coins llegan por correo in-game, con un sistema que solo puede mandar ese correo: no toca tus ítems ni tu personaje.",
  },
  {
    title: "Tu progreso",
    text: "Cada 6 horas se guarda una copia completa de personajes, ítems y cuentas, y la web guarda la suya todos los días. Las copias del juego se comprueban al hacerlas: una copia dañada no cuenta. Un problema en el servidor no tiene por qué llevarse tu progreso.",
  },
  {
    title: "La puerta de administración",
    text: "El acceso para administrar el servidor ya no usa contraseñas: solo llaves criptográficas que no se pueden adivinar. Y si alguien insiste desde afuera, se lo bloquea solo. Medimos más de 3.000 intentos automáticos por día; hoy no tienen contra qué probar.",
  },
  {
    title: "La web",
    text: "Todo el sitio va por HTTPS y con las defensas de navegador que corresponden. Corre aislada: no tiene acceso a las bases de datos del juego, donde están tus personajes y tus ítems. Y antes de cada publicación se revisan las librerías en busca de fallas conocidas.",
  },
  {
    title: "Contra bots y trampas",
    text: "Mientras farmeás, cada cierta cantidad de monstruos te aparece un captcha: tenés 20 segundos para resolverlo y, si no llegás o fallás, vas a la cárcel del juego. Hay un límite de 2 cuentas por IP para dificultar bots y multicuentas, y reglas anti-flood que cortan a quien intenta saturar el servidor.",
  },
];

const comprobacion = [
  {
    n: "I",
    title: "Revisamos el motor, pieza por pieza",
    text: "Comparamos el motor del juego contra el original, clase por clase: más de 60 piezas modificadas. Así sabemos exactamente qué cambió y por qué.",
  },
  {
    n: "II",
    title: "Si no se ejecuta, no cuenta",
    text: "Una opción de configuración no protege nada si el programa no la usa. Las verificamos contra el código real, y las que no hacían nada no las contamos como protección.",
  },
  {
    n: "III",
    title: "Se prueba antes de tocar",
    text: "Cada arreglo se prueba primero en una copia, se deja guardado cómo deshacerlo y recién después se aplica. Nada se prueba a ciegas en el servidor donde jugás.",
  },
  {
    n: "IV",
    title: "Seguimos después de abrir",
    text: "La seguridad no termina el día de la apertura. Seguimos revisando, actualizando y corrigiendo.",
  },
];

export default function SeguridadPage() {
  return (
    <div className="px-6 pb-24 pt-36">
      {/* Intro */}
      <div className="mx-auto max-w-3xl text-center">
        <Crest className="mx-auto h-14 w-14" />
        <p className="brand mt-5 text-xs font-bold uppercase tracking-widest text-accent-2">
          Antes de abrir · Infraestructura
        </p>
        <h1 className="brand mt-2 text-4xl font-black sm:text-5xl">Seguridad</h1>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          Un servidor privado vive de la confianza: que tu cuenta no se pierda, que tu donación
          llegue y que el servidor esté en pie cuando entrás. Antes de la apertura dedicamos{" "}
          <strong className="font-bold text-foreground">días enteros a revisarlo todo</strong>, de la
          infraestructura al motor del juego. Esto es lo que hicimos, sin vueltas.
        </p>

        <div className="mt-10">
          <StatGrid stats={stats} />
        </div>
      </div>

      {/* El host */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="El host"
          title="Un servidor serio, no un hosting de ocasión"
          intro="Antes de escribir una línea de seguridad hubo que elegir dónde vive todo. Contratamos un proveedor de nube profesional en vez de un plan barato y compartido: es la base de todo lo demás."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {host.map((h) => (
            <div key={h.title} className="card-surface rounded-none p-6">
              <h3 className="font-display text-base font-bold text-gold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lo que protegimos */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Lo que protegimos"
          title="Tu cuenta, tus donaciones y tu progreso"
          intro="Esto es lo que cuidamos y cómo, dicho para quien juega, no para quien administra servidores."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {protegido.map((p) => (
            <div key={p.title} className="card-surface rounded-none p-6">
              <h3 className="font-display text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo lo comprobamos */}
      <section className="mx-auto mt-24 max-w-5xl">
        <SectionHeader
          eyebrow="Cómo lo comprobamos"
          title="No lo dimos por hecho"
          intro="Hay una diferencia entre tener una opción activada y que de verdad funcione. Revisamos lo segundo."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {comprobacion.map((c) => (
            <div key={c.n} className="card-surface flex gap-4 rounded-none p-6">
              <span className="font-display text-2xl font-black text-accent-2">{c.n}</span>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reportar */}
      <section className="mx-auto mt-24 max-w-3xl">
        <Callout title="Si encontrás una falla" variant="info">
          <p>
            Ningún sistema es invulnerable, y preferimos decirlo. Si ves algo raro o encontrás una
            falla, escribile a un administrador por Discord antes de compartirla: la corregimos y te
            lo agradecemos.
          </p>
        </Callout>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Entrar al Discord
          </a>
          <Link
            href="/donar"
            className="btn btn-ghost btn-arrow"
          >
            Cómo donar
          </Link>
        </div>

        <p className="brand mt-16 text-center text-xs font-bold uppercase tracking-widest text-muted">
          L2 Thunder · Interlude reimaginado
        </p>
      </section>
    </div>
  );
}
