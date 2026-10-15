import Link from "next/link";
import ClassCard from "@/components/clases/ClassCard";
import { classSlug, getClassGuide } from "@/lib/clases";
import { PANORAMA, type PanoramaClass } from "@/lib/clases/panorama";

// Seis clases de perfil distinto para dar una idea de la variedad: tanque, espadas dobles,
// arquería, magia, curación y dagas. Todas tienen guía publicada.
const FEATURED = ["Phoenix Knight", "Duelist", "Sagittarius", "Archmage", "Cardinal", "Adventurer"];

const ALL_CLASSES = PANORAMA.flatMap((g) => g.classes);

// Los cinco skills activos más altos del último tramo (el de tercera clase): los que mejor
// muestran de qué va la clase.
function signatureIcons(name: string): string[] {
  const tiers = getClassGuide(classSlug(name))?.tiers ?? [];
  const last = tiers[tiers.length - 1];
  if (!last) return [];
  return last.skills
    .filter((s) => s.kind !== "passive" && s.icon)
    .slice(-5)
    .map((s) => s.icon as string);
}

export default function ClassesTeaser() {
  const featured = FEATURED.map((n) => ALL_CLASSES.find((c) => c.name === n)).filter(
    (c): c is PanoramaClass => Boolean(c),
  );

  return (
    <section className="border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Elegí tu clase</h2>
          <p className="mt-4 text-muted">
            Treinta y una clases de tercera, todas pensadas para rendir. Mirá qué hace cada una y
            entrá a su guía para ver todas sus habilidades, nivel por nivel.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[14px]">
          {featured.map((c) => (
            <ClassCard key={c.name} c={c} icons={signatureIcons(c.name)} cta />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/guias/clases"
            className="btn btn-primary btn-arrow"
          >
            Ver todas las clases
          </Link>
        </div>
      </div>
    </section>
  );
}
