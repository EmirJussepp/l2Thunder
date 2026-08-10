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
          <stop offset="0%" stopColor="#3a2f0a" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#12172c" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#08090f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="skyBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1021" />
          <stop offset="100%" stopColor="#08090f" />
        </linearGradient>
        <filter id="boltBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08090f" stopOpacity="0" />
          <stop offset="100%" stopColor="#08090f" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="1600" height="640" fill="url(#skyBase)" />
      <rect width="1600" height="640" fill="url(#skyGlow)" />

      {/* estrellas */}
      <g fill="#dde4ff" opacity="0.3">
        <circle cx="120" cy="60" r="1.4" />
        <circle cx="260" cy="120" r="1.1" />
        <circle cx="420" cy="50" r="1.3" />
        <circle cx="620" cy="90" r="1.1" />
        <circle cx="980" cy="40" r="1.4" />
        <circle cx="1150" cy="110" r="1.1" />
        <circle cx="1320" cy="55" r="1.3" />
        <circle cx="1500" cy="130" r="1.1" />
        <circle cx="60" cy="180" r="1.1" />
        <circle cx="1550" cy="200" r="1.3" />
      </g>

      {/* energía ambiente: solo resplandor, sin trazo duro de rayo */}
      <path
        d="M255 20 L175 220 L235 220 L165 420"
        fill="none"
        stroke="#f0c040"
        strokeWidth="12"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#boltBlur)"
        opacity="0.22"
      />
      <path
        d="M1370 10 L1300 190 L1355 190 L1285 370"
        fill="none"
        stroke="#6cc8ff"
        strokeWidth="12"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#boltBlur)"
        opacity="0.18"
      />

      <rect width="1600" height="640" fill="url(#fade)" opacity="0.3" />
    </svg>
  );
}
