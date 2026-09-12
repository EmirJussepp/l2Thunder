// Dial de reloj que resalta los 5 minutos de ventana (min 55 a 60) sobre las
// 60 posibles. El arco se dibuja con stroke-dasharray y se rota -90deg para
// que el minuto 0 quede arriba, como en un reloj real.
export default function WindowClock() {
  const r = 40;
  const circumference = 2 * Math.PI * r;
  const windowLength = (5 / 60) * circumference;

  return (
    <div className="relative mx-auto h-32 w-32 shrink-0 sm:h-36 sm:w-36">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--border-soft)" strokeWidth="5" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${windowLength} ${circumference - windowLength}`}
          strokeDashoffset={-(circumference - windowLength)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-xs font-bold text-gold sm:text-sm">:55 → :00</span>
      </div>
    </div>
  );
}
