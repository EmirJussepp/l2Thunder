import Image from "next/image";

export default function Crest({ className }: { className?: string }) {
  return (
    <Image
      src="/iconol2thunder.png"
      alt=""
      width={100}
      height={100}
      className={className}
      priority
    />
  );
}
