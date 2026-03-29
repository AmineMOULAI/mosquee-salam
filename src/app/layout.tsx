import type { Metadata } from "next";
import { Amiri, Outfit } from "next/font/google";
import localFont from "next/font/local"; // Import indispensable
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// 1. Configuration de la police Calligraphique (Mutiara)
const mutiara = localFont({
  src: "../../public/fonts/MutiaraRamadhanDemoRegular-7O9vE.ttf",
  variable: "--font-salam-title", // On crée une variable CSS spécifique
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Centre Salam - Premium Edition",
  description: "L'élégance islamique rencontre le minimalisme moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // On ajoute mutiara.variable dans la liste des classes HTML 👇
    <html lang="fr" className={`${amiri.variable} ${outfit.variable} ${mutiara.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}