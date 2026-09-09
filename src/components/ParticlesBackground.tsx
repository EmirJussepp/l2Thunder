"use client";

import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// Cenizas + brasas ambientadas al tema fuego/dragón del sitio — más brasas
// doradas/naranjas que cenizas grises (antes era al revés), tamaños más
// variados (alguna brasa grande de vez en cuando) y un poco más de
// velocidad/dispersión para que se sientan "vivas" subiendo, no un flotar
// parejo tipo nieve.
const options: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  detectRetina: true,
  background: { color: { value: "transparent" } },
  particles: {
    number: {
      value: 32,
      density: { enable: true, width: 1920, height: 1080 },
    },
    color: { value: ["#f0c040", "#ff9d4d", "#ff7a3d", "#dde4ff", "#dde4ff"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.2, max: 0.85 },
      animation: { enable: true, speed: 0.8, sync: false },
    },
    size: { value: { min: 1.5, max: 5 } },
    move: {
      enable: true,
      direction: "top",
      speed: { min: 0.4, max: 1.8 },
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
