export default function HeroBackground() {
  return (
    <svg
      viewBox="0 0 1600 640"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="skyGlow" cx="50%" cy="15%" r="70%">
          <stop offset="0%" stopColor="#3a2f0a" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#12172c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#08090f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skyBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1021" />
          <stop offset="100%" stopColor="#08090f" />
        </linearGradient>
        <filter id="boltBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08090f" stopOpacity="0" />
          <stop offset="100%" stopColor="#08090f" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="1600" height="640" fill="url(#skyBase)" />
      <rect width="1600" height="640" fill="url(#skyGlow)" />

      {/* estrellas */}
      <g fill="#dde4ff" opacity="0.35">
        <circle cx="120" cy="60" r="1.6" />
        <circle cx="260" cy="120" r="1.2" />
        <circle cx="420" cy="50" r="1.4" />
        <circle cx="620" cy="90" r="1.2" />
        <circle cx="980" cy="40" r="1.6" />
        <circle cx="1150" cy="110" r="1.2" />
        <circle cx="1320" cy="55" r="1.4" />
        <circle cx="1500" cy="130" r="1.2" />
        <circle cx="60" cy="180" r="1.2" />
        <circle cx="1550" cy="200" r="1.4" />
      </g>

      {/* rayo izquierdo */}
      <g>
        <path
          d="M255 20 L175 220 L235 220 L165 420"
          fill="none"
          stroke="#f0c040"
          strokeWidth="9"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#boltBlur)"
          opacity="0.45"
        />
        <path
          d="M255 20 L175 220 L235 220 L165 420"
          fill="none"
          stroke="#f0c040"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>

      {/* rayo derecho */}
      <g>
        <path
          d="M1370 10 L1300 190 L1355 190 L1285 370"
          fill="none"
          stroke="#6cc8ff"
          strokeWidth="9"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#boltBlur)"
          opacity="0.4"
        />
        <path
          d="M1370 10 L1300 190 L1355 190 L1285 370"
          fill="none"
          stroke="#6cc8ff"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity="0.65"
        />
      </g>

      {/* horizonte: cordillera */}
      <path
        d="M0 640 L0 540 L100 480 L200 540 L300 460 L400 540 L500 500 L600 560
           L700 480 L800 540 L900 460 L1000 540 L1100 500 L1200 560
           L1300 480 L1400 540 L1500 500 L1600 560 L1600 640 Z"
        fill="#05060c"
      />

      {/* torres, apoyadas sobre picos de la cordillera */}
      <g fill="#05060c">
        <path d="M275 460 L275 380 L300 340 L325 380 L325 460 Z" />
        <path d="M285 460 L285 400 L300 375 L315 400 L315 460 Z" fill="#0a0d1c" opacity="0.6" />
      </g>
      <g fill="#05060c">
        <path d="M1275 480 L1275 400 L1300 360 L1325 400 L1325 480 Z" />
        <path d="M1285 480 L1285 420 L1300 395 L1315 420 L1315 480 Z" fill="#0a0d1c" opacity="0.6" />
      </g>

      {/* segunda capa, mas atras y mas clara, para dar profundidad */}
      <path
        d="M0 640 L0 580 L150 540 L300 590 L450 550 L600 600 L750 560 L900 600
           L1050 550 L1200 600 L1350 560 L1500 590 L1600 570 L1600 640 Z"
        fill="#0a0d1c"
        opacity="0.8"
      />

      <rect width="1600" height="640" fill="url(#fade)" opacity="0.35" />
    </svg>
  );
}
