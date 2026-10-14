import Hero from "@/components/Hero";
import PosterBand from "@/components/PosterBand";
import StagedOpening from "@/components/StagedOpening";
import Features from "@/components/Features";
import PlaySteps from "@/components/PlaySteps";
import DonateTeaser from "@/components/DonateTeaser";
import SecurityTeaser from "@/components/SecurityTeaser";
import ClassesTeaser from "@/components/ClassesTeaser";

// Los afiches (src/lib/posters.ts) van intercalados entre las secciones; para
// cambiar uno de lugar alcanza con mover su <PosterBand />.
export default function Home() {
  return (
    <>
      <Hero />
      <StagedOpening />
      <Features />
      <PosterBand id="clases" />
      <PlaySteps />
      <PosterBand id="pvp" />
      <DonateTeaser />
      <SecurityTeaser />
      <PosterBand id="beta" />
      <ClassesTeaser />
    </>
  );
}
