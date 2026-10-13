import type { Metadata } from "next";
import { Suspense } from "react";
import CheckoutBanner from "@/components/CheckoutBanner";
import DonationTiers from "@/components/DonationTiers";
import VipPass from "@/components/VipPass";
import AccountLinkExplainer from "@/components/AccountLinkExplainer";

// Los precios casi no cambian — cachear la página evita pegarle a la base en
// cada visita (cada visitante repetido reusa el render de hasta 60s antes).
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Fundadores",
  description:
    "Convertite en Fundador de L2Thunder: elegí el VIP o una Caja de Skins, con precios en Coins of Luck.",
};

export default function DonarPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-36">
      {/* Cómo le fue al pago (Mercado Pago vuelve con ?checkout=...). Va arriba de todo para que
          se vea apenas vuelve, y en Suspense para que la página siga siendo estática: solo se
          lee en el navegador. */}
      <Suspense fallback={null}>
        <CheckoutBanner />
      </Suspense>

      <div className="mx-auto mb-14 max-w-xl text-center">
        <span className="rounded-none border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          Boost, no poder
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Convertite en Fundador de Thunder
        </h1>
        <p className="mt-4 text-muted">
          Elegí el VIP (+30% de EXP y de Drop durante 15 días, más un Cofre de armadura de regalo) o
          la Caja de Skins: una skin al azar que puede ser Rara (60%), Épica (30%) o Legendaria
          (10%). Los precios están en Coins of Luck — nunca vendemos daño ni items que te hagan
          invencible en PvP.
        </p>
      </div>

      <section className="mb-16">
        <VipPass />
      </section>

      <section>
        <h2 className="mb-6 text-center font-display text-2xl font-bold">Caja de Skins</h2>
        <DonationTiers />
      </section>

      <div className="mt-20">
        <AccountLinkExplainer />
      </div>
    </div>
  );
}
