"use client";

import { useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="splash-overlay fixed inset-0 z-[200] flex items-center justify-center bg-background"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        // El logo adentro también anima — sin este chequeo, su propio fade-in
        // terminaría disparando el cierre del overlay antes de tiempo.
        if (e.target === e.currentTarget) setVisible(false);
      }}
    >
      <Image
        src="/iconol2thunder.png"
        alt=""
        width={130}
        height={130}
        priority
        className="splash-logo"
      />
    </div>
  );
}
