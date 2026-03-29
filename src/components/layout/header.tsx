"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { LuxuryButton, MagneticButton } from "@/components/ui/luxury-button";
import { cn } from "@/lib/utils";

const leftLinks = [
  { name: "Accueil", href: "/" },
  { name: "Prière", href: "/priere" },
];

const rightLinks = [
  { name: "Enseignements", href: "/enseignements" },
  { name: "Actualités", href: "/actualites" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // 👇 1. Nouvel état pour savoir si le menu mobile est ouvert ou fermé
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerHeight = useTransform(scrollY, [0, 100], ["120px", "90px"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        style={{ height: headerHeight }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] flex items-center transition-all duration-700 px-6 md:px-12",
          isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-primary/5 shadow-luxury" : "bg-transparent"
        )}
      >
        <div className="max-w-[1800px] w-full mx-auto grid grid-cols-3 items-center">
          
          {/* SECTION GAUCHE */}
          <nav className="hidden lg:flex items-center gap-10">
            {leftLinks.map((link) => (
              <NavLink key={link.name} href={link.href} name={link.name} />
            ))}
          </nav>

          {/* SECTION CENTRALE : LOGO ANIMÉ */}
          <div className="flex justify-center">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group relative flex flex-col items-center">
              <motion.div 
                style={{ scale: logoScale }}
                className="relative w-32 h-32 md:w-40 md:h-40 mt-2"
              >
                <Image 
                  src="/images/salam-logo.png" 
                  alt="Logo Salam" 
                  fill
                  priority
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-125" 
                />
                <div 
                  className="absolute inset-0 bg-accent/40 blur-[50px] rounded-full -z-10 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out"
                />
              </motion.div>
            </Link>
          </div>

          {/* SECTION DROITE */}
          <div className="flex items-center justify-end gap-10">
            <nav className="hidden lg:flex items-center gap-10">
              {rightLinks.map((link) => (
                <NavLink key={link.name} href={link.href} name={link.name} />
              ))}
            </nav>

            <MagneticButton>
              <LuxuryButton variant="gold" className="px-6 py-3 hidden sm:flex text-[10px] tracking-widest shadow-luxury">
                DONNER
              </LuxuryButton>
            </MagneticButton>

            {/* 👇 2. Le bouton pour OUVRIR le menu mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-primary flex flex-col justify-center gap-1.5 w-8 h-8"
            >
              <div className="w-6 h-[1.5px] bg-current ml-auto transition-all duration-300" />
              <div className="w-4 h-[1.5px] bg-current ml-auto transition-all duration-300" />
            </button>
          </div>

        </div>
      </motion.header>

      {/* 👇 3. L'OVERLAY DU MENU MOBILE (Nouveau !) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[2000] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center min-h-screen"
          >
            {/* Bouton pour FERMER (Croix) */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-8 p-4 text-primary"
            >
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-current rotate-45 transition-transform" />
                <div className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-current -rotate-45 transition-transform" />
              </div>
            </button>

            {/* Liens du Menu Mobile */}
            <nav className="flex flex-col items-center gap-8 text-center">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Bouton Don Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <LuxuryButton variant="gold" className="px-12 py-4 text-sm tracking-widest shadow-luxury">
                  FAIRE UN DON
                </LuxuryButton>
              </motion.div>
            </nav>
            
            {/* Décoration calligraphique dans le menu */}
            <div className="absolute bottom-10 opacity-10 pointer-events-none">
              <span className="font-arabic text-8xl text-primary">سلام</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Sous-composant pour les liens de navigation (Desktop)
const NavLink = ({ href, name }: { href: string; name: string }) => (
  <Link href={href} className="relative group">
    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-500">
      {name}
    </span>
    <motion.div 
      className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-700 group-hover:w-full"
    />
  </Link>
);