import Image from "next/image";

const SRC = {
  outline: "/iconol2thunder.png",
  solid: "/icono2.png",
};

export default function Crest({
  className,
  variant = "outline",
  shine = false,
}: {
  className?: string;
  variant?: "outline" | "solid";
  shine?: boolean;
}) {
  return (
    <span
      className={`relative inline-block ${shine ? "crest-shine" : ""} ${className ?? ""}`}
    >
      {/* El escudo se dibuja de 32 a 112 px de lado: sin `sizes`, Next.js pide la imagen como si
          ocupara todo el ancho de la pantalla. */}
      <Image src={SRC[variant]} alt="" fill sizes="112px" className="object-contain" priority />
    </span>
  );
}
