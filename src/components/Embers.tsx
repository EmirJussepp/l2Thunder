// Partículas fijas, con posiciones/tiempos hardcodeados (no Math.random) para
// que el HTML del servidor y el del cliente coincidan siempre — nada de JS,
// solo CSS animado, así no pesa nada en el render.
const EMBERS = [
  { left: "4%", size: 3, duration: 16, delay: 0 },
  { left: "12%", size: 2, duration: 21, delay: 4 },
  { left: "20%", size: 4, duration: 18, delay: 2 },
  { left: "29%", size: 2, duration: 24, delay: 9 },
  { left: "37%", size: 3, duration: 15, delay: 6 },
  { left: "45%", size: 2, duration: 22, delay: 1 },
  { left: "53%", size: 4, duration: 17, delay: 11 },
  { left: "61%", size: 2, duration: 20, delay: 5 },
  { left: "68%", size: 3, duration: 19, delay: 13 },
  { left: "76%", size: 2, duration: 23, delay: 3 },
  { left: "83%", size: 4, duration: 16, delay: 8 },
  { left: "91%", size: 2, duration: 21, delay: 15 },
  { left: "96%", size: 3, duration: 18, delay: 7 },
  { left: "8%", size: 2, duration: 25, delay: 12 },
  { left: "56%", size: 3, duration: 14, delay: 17 },
  { left: "34%", size: 2, duration: 20, delay: 19 },
];

export default function Embers() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className="ember"
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
