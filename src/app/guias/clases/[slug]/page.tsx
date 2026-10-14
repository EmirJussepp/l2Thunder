import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClassFacts from "@/components/clases/ClassFacts";
import ClassSkillTree from "@/components/clases/ClassSkillTree";
import { CLASS_GUIDES, CLASS_GUIDE_SLUGS, getClassGuide } from "@/lib/clases";

// Solo existen las clases cargadas en src/lib/clases; cualquier otro slug es 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CLASS_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getClassGuide(slug);
  if (!guide) return {};
  const strong = guide.facts.find((f) => f.label === "Fuerte en")?.value ?? "";
  return {
    title: `${guide.name} — Guía de clase`,
    description: `${guide.name}: ${guide.subtitle.toLowerCase()}. Fuerte en ${strong.toLowerCase()}. Todas sus habilidades por nivel, con lo que cambia respecto del Interlude original.`,
  };
}

export default async function ClassGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getClassGuide(slug);
  if (!guide) notFound();

  // El subtítulo empieza con la raza ("Elfo Oscuro · tercera clase de..."): al pie se ofrecen las
  // otras guías de la misma raza, no las treinta.
  const race = guide.subtitle.split(" · ")[0];
  const others = CLASS_GUIDE_SLUGS.filter((s) => s !== guide.slug)
    .map((s) => CLASS_GUIDES[s])
    .filter((g) => g.subtitle.split(" · ")[0] === race);

  return (
    <div className="px-6 pb-24 pt-36">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/guias/clases"
          className="-my-3 inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-gold"
        >
          ← Elegir clase
        </Link>

        <div className="mt-6">
          <p className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            L2 Thunder · Guías de clase
          </p>
          <h1 className="brand mt-3 text-4xl font-black sm:text-5xl">{guide.name}</h1>
          <p className="mt-2 font-display text-lg font-semibold text-muted">{guide.subtitle}</p>
          <p className="mt-6 max-w-[38rem] text-muted">{guide.intro}</p>

          <div className="mt-8">
            <ClassFacts facts={guide.facts} />
          </div>

          <div className="mt-8 max-w-[38rem] space-y-3 text-sm leading-relaxed text-muted">
            {guide.notes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ClassSkillTree tiers={guide.tiers} />
        </div>

        <p className="mt-12 max-w-[38rem] text-xs text-muted">{guide.footnote}</p>

        <section className="mt-14 border-t border-border-soft pt-14">
          <h2 className="brand text-xs font-bold uppercase tracking-widest text-accent-2">
            ✦ Otras guías de clase · {race}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/guias/clases/${o.slug}`}
                  className="inline-flex min-h-11 items-center border border-border-soft px-4 text-sm font-semibold text-muted transition hover:border-gold/60 hover:text-gold"
                >
                  {o.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/guias/clases"
                className="inline-flex min-h-11 items-center border border-gold px-4 text-sm font-semibold text-gold transition hover:border-border-soft hover:text-foreground"
              >
                Elegir clase
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
