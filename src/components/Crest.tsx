import Image from "next/image";

export default function Crest({ className }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <Image src="/iconol2thunder.png" alt="" fill className="object-contain" priority />
    </span>
  );
}
