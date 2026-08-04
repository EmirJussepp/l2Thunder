export default function Crest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 5 L90 20 V58 C90 89 71 105 50 115 C29 105 10 89 10 58 V20 Z"
        stroke="#f0c040"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M57 24 L36 63 L49 63 L41 96 L71 54 L56 54 Z"
        fill="#f0c040"
      />
    </svg>
  );
}
