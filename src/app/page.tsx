import Hero from "@/components/Hero";
import PosterBand from "@/components/PosterBand";
import Features from "@/components/Features";
import PlaySteps from "@/components/PlaySteps";
import DonateTeaser from "@/components/DonateTeaser";

// Los afiches (src/lib/posters.ts) van intercalados entre las secciones; para
// cambiar uno de lugar alcanza con mover su <PosterBand />.
export default function Home() {
  return (
    <>
      <Hero />
      <PosterBand id="interlude" />
      <Features />
      <PosterBand id="clases" />
      <PlaySteps />
      <PosterBand id="pvp" />
      <DonateTeaser />
      <PosterBand id="beta" />
    </>
  );
}
