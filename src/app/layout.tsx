import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscordBanner from "@/components/DiscordBanner";
import VoteBanner from "@/components/VoteBanner";
import Embers from "@/components/Embers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

// Solo para los botones de "alto impacto" — imitar el look de UI corporativa
// tipo Battle.net/Steam sin tocar la tipografía del resto del sitio.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const description =
  "L2Thunder: servidor de Lineage II Interlude con rework total de razas, clases y skills. Rates x15/x15/x10/x10, auto-loot, spoil para todas las clases. Beta abierta.";

export const metadata: Metadata = {
  title: {
    default: "L2Thunder — Lineage II, Servidor Privado, Interlude",
    template: "%s — L2Thunder",
  },
  description,
  openGraph: {
    title: "L2Thunder",
    description: "Lineage II — Servidor Privado • Interlude",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Embers />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <DiscordBanner />
        <VoteBanner />
      </body>
    </html>
  );
}
