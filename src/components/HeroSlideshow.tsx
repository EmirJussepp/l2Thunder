"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];
const INTERVAL_MS = 7000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          quality={100}
          className={`hero-bg-animate object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/55 to-background" />
    </div>
  );
}
