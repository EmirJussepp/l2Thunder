// Posiciones/tiempos hardcodeados (no Math.random) para que el HTML del
// servidor y el del cliente coincidan siempre — nada de JS más que esto,
// todo el movimiento es CSS animado, así no pesa nada en el render.
const EMBERS: { left: string; size: number; duration: number; delay: number; type: "ash" | "glow" }[] = [
  { left: "3%", size: 6, duration: 15, delay: 0, type: "ash" },
  { left: "9%", size: 4, duration: 19, delay: 5, type: "glow" },
  { left: "15%", size: 7, duration: 13, delay: 2, type: "ash" },
  { left: "21%", size: 5, duration: 21, delay: 9, type: "ash" },
  { left: "27%", size: 4, duration: 17, delay: 4, type: "glow" },
  { left: "33%", size: 6, duration: 14, delay: 11, type: "ash" },
  { left: "39%", size: 5, duration: 20, delay: 1, type: "ash" },
  { left: "45%", size: 4, duration: 16, delay: 13, type: "glow" },
  { left: "51%", size: 7, duration: 22, delay: 6, type: "ash" },
  { left: "57%", size: 5, duration: 15, delay: 15, type: "ash" },
  { left: "63%", size: 4, duration: 18, delay: 3, type: "glow" },
  { left: "69%", size: 6, duration: 13, delay: 17, type: "ash" },
  { left: "75%", size: 5, duration: 21, delay: 7, type: "ash" },
  { left: "81%", size: 4, duration: 16, delay: 19, type: "glow" },
  { left: "87%", size: 7, duration: 19, delay: 8, type: "ash" },
  { left: "93%", size: 5, duration: 14, delay: 21, type: "ash" },
  { left: "97%", size: 4, duration: 17, delay: 10, type: "glow" },
  { left: "12%", size: 5, duration: 23, delay: 14, type: "ash" },
  { left: "48%", size: 6, duration: 15, delay: 18, type: "ash" },
  { left: "72%", size: 4, duration: 20, delay: 12, type: "glow" },
  { left: "6%", size: 5, duration: 18, delay: 16, type: "ash" },
  { left: "90%", size: 6, duration: 14, delay: 20, type: "ash" },
];

export default function Embers() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className={`ember ember--${e.type}`}
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
