import Hero from "@/components/Hero";
import StagedOpening from "@/components/StagedOpening";
import Features from "@/components/Features";
import PlaySteps from "@/components/PlaySteps";
import DonateTeaser from "@/components/DonateTeaser";
import SecurityTeaser from "@/components/SecurityTeaser";
import ClassesTeaser from "@/components/ClassesTeaser";

// Cada sección lleva su personaje (CharacterScene, public/personajes) y el de clases, las cinco razas juntas.
// Los lados se alternan: izquierda, derecha, izquierda, derecha, izquierda.
export default function Home() {
  return (
    <>
      <Hero />
      <StagedOpening />
      <Features />
      <PlaySteps />
      <DonateTeaser />
      <SecurityTeaser />
      <ClassesTeaser />
    </>
  );
}
