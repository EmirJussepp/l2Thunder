"use client";

import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// Mismo look que las cenizas/brasas que estaban en CSS puro (cenizas grises +
// brasas doradas subiendo lento), ahora manejado por tsParticles a pedido
// del usuario.
const options: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  detectRetina: true,
  background: { color: { value: "transparent" } },
  particles: {
    number: {
      value: 26,
      density: { enable: true, width: 1920, height: 1080 },
    },
    color: { value: ["#dde4ff", "#dde4ff", "#dde4ff", "#f0c040", "#ff9d4d"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.15, max: 0.75 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: { value: { min: 1.5, max: 4 } },
    move: {
      enable: true,
      direction: "top",
      speed: { min: 0.4, max: 1.2 },
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },
};

function ParticlesLayer() {
  const { loaded } = useParticlesProvider();
  if (!loaded) return null;

  return (
    <Particles
      id="l2thunder-particles"
      className="pointer-events-none fixed inset-0"
      options={options}
    />
  );
}

export default function ParticlesBackground() {
  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <ParticlesLayer />
    </ParticlesProvider>
  );
}
