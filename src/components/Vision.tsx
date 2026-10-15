// "Nuestra visión": el texto que estaba dentro del hero. Va en una franja propia justo debajo, para que no tape
// a los personajes del video.
export default function Vision() {
  return (
    <section className="border-t border-border-soft px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="brand text-lg font-bold tracking-widest text-accent-2">Nuestra visión</p>
        <p className="mt-6 font-display text-base font-semibold leading-relaxed text-foreground sm:text-lg">
          Thunder no es &ldquo;un Interlude con rates medios&rdquo;. Es la pregunta de qué habría
          pasado si Interlude hubiera seguido evolucionando por otro camino: revisamos cada raza,
          cada clase y cada skill para que nada quede obsoleto, sin perder la esencia del combate
          que hizo grande a Lineage II.
        </p>
      </div>
    </section>
  );
}
