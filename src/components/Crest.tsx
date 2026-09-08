import Image from "next/image";

const SRC = {
  outline: "/iconol2thunder.png",
  solid: "/icono2.png",
};

export default function Crest({
  className,
  variant = "outline",
}: {
  className?: string;
  variant?: "outline" | "solid";
}) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <Image src={SRC[variant]} alt="" fill className="object-contain" priority />
    </span>
  );
}
