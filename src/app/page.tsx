import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import WhyChoose from "@/components/WhyChoose";
import StagedOpening from "@/components/StagedOpening";
import PlaySteps from "@/components/PlaySteps";
import DonateTeaser from "@/components/DonateTeaser";
import SecurityTeaser from "@/components/SecurityTeaser";
import ClassesTeaser from "@/components/ClassesTeaser";

// "Por qué elegir L2Thunder" (el carrusel de rombos) resume en ocho razones lo que antes era una lista de 14 líneas
// de texto ("Características"). Las secciones con personaje (CharacterScene, public/personajes) alternan de lado:
// izquierda, derecha, izquierda, derecha; la de clases lleva las cinco razas juntas.
export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <WhyChoose />
      <StagedOpening />
      <PlaySteps />
      <DonateTeaser />
      <SecurityTeaser />
      <ClassesTeaser />
    </>
  );
}
