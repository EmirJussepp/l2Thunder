import type { Metadata } from "next";
import DonationTiers from "@/components/DonationTiers";
import VipPass from "@/components/VipPass";
import AccountLinkExplainer from "@/components/AccountLinkExplainer";

export const metadata: Metadata = {
  title: "Fundadores",
  description:
    "Convertite en Fundador de L2Thunder: elegí el VIP o una Caja de Skins, con precios en Coins of Luck.",
};

export default function DonarPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="rounded-none border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Boost, no poder
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Convertite en Fundador de Thunder
        </h1>
        <p className="mt-4 text-muted">
          Elegí el VIP (empujón chico de EXP y Drop, 5%, más una caja de regalo) o una Caja de
          Skins de la rareza que quieras. Los precios están en Coins of Luck — nunca vendemos
          daño ni items que te hagan invencible en PvP.
        </p>
      </div>

      <section className="mb-16">
        <VipPass />
      </section>

      <section>
        <h2 className="mb-6 text-center font-display text-2xl font-bold">Cajas de Skins</h2>
        <DonationTiers />
      </section>

      <div className="mt-20">
        <AccountLinkExplainer />
      </div>
    </div>
  );
}
