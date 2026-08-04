import type { Metadata } from "next";
import DonationTiers from "@/components/DonationTiers";
import AccountLinkExplainer from "@/components/AccountLinkExplainer";

export const metadata: Metadata = {
  title: "Fundadores",
  description:
    "Convertite en Fundador de L2Thunder: financiá el desarrollo y recibí cosméticos y comodidades exclusivas, sin ventajas de poder.",
};

export default function DonarPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Sin pay-to-win
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Convertite en Fundador de Thunder
        </h1>
        <p className="mt-4 text-muted">
          No estás comprando poder: estás financiando el desarrollo. A cambio recibís puntos
          para cosméticos, comodidad y reconocimiento como fundador — nunca daño, experiencia
          ni ítems que rompan el PvP.
        </p>
      </div>

      <DonationTiers />

      <div className="mt-20">
        <AccountLinkExplainer />
      </div>
    </div>
  );
}
