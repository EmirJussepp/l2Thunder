const features = [
  {
    title: "Razas balanceadas de raíz",
    description:
      "Cada raza tiene bonus e identidad propia. Elegir Kamael, Orco o Dark Elf ya no es una decisión estética: cambia cómo jugás.",
  },
  {
    title: "Skills que ahora tienen uso",
    description:
      "Revisamos habilidad por habilidad. Las que nadie usaba porque no rendían fueron rebalanceadas para tener un rol real en party y PvP.",
  },
  {
    title: "Spoil para todas las clases",
    description:
      "Un NPC especial habilita el spoil a cualquier personaje, no solo a Dwarves. Fighters, Mystics y Kamael también pueden farmear spoileando.",
  },
  {
    title: "Cualquier clase es viable",
    description:
      "No hay 'clase meta' única. Rebalanceamos daño, buffs y utilidad para que cada build tenga un lugar en party, farm o PvP.",
  },
  {
    title: "Auto-loot y rates pensados para jugar, no para grindear 12 horas",
    description:
      "x15 EXP/SP y x10 Drop/Spoil, con auto-loot activado, para progresar rápido sin perder el desafío de Interlude.",
  },
  {
    title: "Economía cuidada",
    description:
      "Cada cambio se probó pensando en el impacto en la economía del server, para que ítems y adena mantengan su valor con el tiempo.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Le dimos una razón de ser a cada detalle
        </h2>
        <p className="mt-4 text-muted">
          No es Interlude con rates altos. Es Interlude repensado: revisamos razas, clases y
          skills para que todo lo que existe en el juego, sirva.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="card-surface rounded-2xl p-6 transition hover:border-accent/50"
          >
            <h3 className="font-display text-lg font-bold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted/70">
        Contenido de ejemplo — se reemplaza por el detalle real de cada sistema.
      </p>
    </section>
  );
}
