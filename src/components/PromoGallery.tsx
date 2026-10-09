import Image from "next/image";

// Cuatro afiches que cuentan lo esencial del server de un vistazo (rates y
// enchant, clases, PvP, beta abierta). Reemplazan a la sección de texto
// "Interlude, repensado de raíz": dicen lo mismo, así que el detalle completo
// sigue en ¿Por qué L2Thunder? (navbar y link de Características).
//
// Las imágenes traen texto adentro, por eso el alt lo repite: es lo que leen
// los lectores de pantalla y los buscadores. Si se cambia un afiche, hay que
// actualizar también su alt. Todos están recortados a 3:2 (public/promo/).
const posters = [
  {
    src: "/promo/un-interlude-pensado-para-hoy.jpg",
    width: 706,
    height: 471,
    alt: "Un Interlude pensado para hoy: sistemas clásicos con una experiencia renovada. XP/SP x15, drop x10, enchant sin destrucción y NPC buffer de 2da profesión (BD / WS / PP).",
  },
  {
    src: "/promo/tu-clase-nuevas-posibilidades.jpg",
    width: 760,
    height: 507,
    alt: "Tu clase, nuevas posibilidades: clases y habilidades rediseñadas para un combate más dinámico y equilibrado. Warriors, más daño y utilidad; Healers, soporte único por clase; Daggers, invisibilidad total; Archers, mayor daño y kiteo; Mages, DPS directo y defensivos; Summoners, daño propio y control.",
  },
  {
    src: "/promo/volve-a-sentir-el-pvp.jpg",
    width: 706,
    height: 471,
    alt: "Volvé a sentir el PvP: nuevas estrategias, combates reales y zonas de conflicto. Zonas de conflicto, eventos competitivos, raids y minibosses, recompensas exclusivas.",
  },
  {
    src: "/promo/la-beta-ya-esta-abierta.jpg",
    width: 753,
    height: 502,
    alt: "La beta ya está abierta. La esencia permanece, todo evoluciona: clases rediseñadas, PvP más dinámico, raids y eventos, progresión pensada para vos.",
  },
];

export default function PromoGallery() {
  return (
    <section className="border-t border-border-soft bg-surface/40 px-6 py-24">
      <h2 className="sr-only">Qué es L2Thunder</h2>

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {posters.map((p) => (
          <div
            key={p.src}
            className="card-surface aspect-[3/2] overflow-hidden rounded-none transition hover:border-accent/50"
          >
            {/* El link abre el afiche entero en otra pestaña: en el celular el texto
                chico (rates, clases) no se lee en la tarjeta, y así se puede ampliar. */}
            <a
              href={p.src}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver en tamaño completo"
              className="block h-full w-full"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 896px) 424px, (min-width: 640px) 45vw, 100vw"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
