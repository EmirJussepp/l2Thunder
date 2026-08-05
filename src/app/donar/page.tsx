import type { Metadata } from "next";
import DonationTiers from "@/components/DonationTiers";
import VipPass from "@/components/VipPass";
import AccountLinkExplainer from "@/components/AccountLinkExplainer";

export const metadata: Metadata = {
  title: "Fundadores",
  description:
    "Convertite en Fundador de L2Thunder: financiá el desarrollo, acelerá tu progreso con el VIP y sumá cosméticos exclusivos.",
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
          Tu aporte financia el desarrollo. El VIP acelera tu nivelado y los Donate Coins se
          gastan en cosméticos — pero nunca tocan drop, spoil ni daño: el gareo y el PvP siguen
          igual de parejos para todos.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-center font-display text-2xl font-bold">VIP Thunder</h2>
        <VipPass />
      </section>

      <section>
        <h2 className="mb-6 text-center font-display text-2xl font-bold">Donate Coins</h2>
        <DonationTiers />
      </section>

      <div className="mt-20">
        <AccountLinkExplainer />
      </div>
    </div>
  );
}
