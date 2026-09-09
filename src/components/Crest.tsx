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
      <Image src={SRC[variant]} alt="" fill className="object-contain" priority />
    </span>
  );
}
