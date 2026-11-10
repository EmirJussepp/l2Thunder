import WhyChooseClient from "@/components/WhyChooseClient";
import { loadItemImages } from "@/lib/itemImages";
import { MOTIVOS } from "@/lib/porque-elegir";

// "Por qué elegir L2Thunder" de la portada. Las imágenes de los rombos salen de public/porque/<id>.webp (se leen en
// el build, igual que las de Información de juego): sin archivo, el rombo muestra su emblema. Los textos están en
// src/lib/porque-elegir.ts.
export default function WhyChoose() {
  const imagenes = loadItemImages("porque");
  return <WhyChooseClient motivos={MOTIVOS.map((m) => ({ ...m, imagen: imagenes[m.id] }))} />;
}
