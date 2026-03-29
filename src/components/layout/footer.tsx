"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import indispensable pour le logo
import { IconMosqueV3 } from "@/components/ui/icons-salem-v3";

const footerLinks = {
  mosquee: [
    { name: "La Mosquée", href: "/mosquee" },
    { name: "Horaires de Prière", href: "/priere" },
    { name: "Services", href: "/services" },
    { name: "Bibliothèque", href: "/bibliotheque" },
  ],
  education: [
    { name: "École Arabe", href: "/ecole-arabe" },
    { name: "Cours de Coran", href: "/coran" },
    { name: "Conférences", href: "/conferences" },
    { name: "Jeunesse", href: "/jeunesse" },
  ],
  legal: [
    { name: "Mentions Légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
    { name: "Dons & Fiscalité", href: "/dons-fiscalite" },
  ]
};

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground py-32 px-8 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 md:gap-24 relative z-10">
        
        {/* BRAND SECTION - MISE À JOUR AVEC LE DOVE */}
        <div className="lg:col-span-4 space-y-12">
          <div className="flex items-center gap-6">
            {/* Logo Dove (Oiseau) */}
            <div className="relative w-14 h-14 transition-transform duration-700 hover:scale-110">
              <Image 
                src="/images/dove.png" 
                alt="Logo Centre Salam" 
                fill
                sizes="800px"
                className="object-contain" 
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-serif italic tracking-tight text-white">CENTRE SALAM</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
                Enseignement & Education
              </span>
            </div>
          </div>
          
          <p className="text-sm font-light leading-relaxed text-white/50 max-w-sm">
            Un espace sacré dédié à la spiritualité, à l&apos;éducation et au vivre-ensemble. 
            Inspiré par la tradition, tourné vers l&apos;avenir.
          </p>

          <div className="flex gap-8">
            {["Instagram", "Facebook", "Youtube"].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors duration-500"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>

        {/* NAVIGATION LINKS - L'INSTITUTION */}
        <div className="lg:col-span-2 space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">L&apos;Institution</span>
          <ul className="space-y-4">
            {footerLinks.mosquee.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-light text-white/60 hover:text-accent transition-all duration-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NAVIGATION LINKS - ÉDUCATION */}
        <div className="lg:col-span-2 space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Éducation</span>
          <ul className="space-y-4">
            {footerLinks.education.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-light text-white/60 hover:text-accent transition-all duration-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT & LOCATION */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Nous Rendre Visite</span>
            <div className="space-y-4">
              <p className="text-lg font-serif italic text-white">5 Rue Maryse Hilsz, 66000 Perpignan</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:contact@centre-salam.fr" className="text-sm font-light text-white/60 hover:text-accent transition-opacity underline decoration-accent/20 underline-offset-8">
                  centre.salam66@gmail.com
                </a>
                <span className="text-sm font-light text-white/40">+33 7 66 23 90 30</span>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-12 bg-accent/20" />

          <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
            © 2026 Centre Salam. Tous droits réservés.
          </p>
        </div>

      </div>
      
      {/* 🕊️ Decorative Dove Background - Effet Miroir (Regard à gauche) */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] scale-x-[-1]">
        <Image 
          src="/images/dove.png" 
          alt="" 
          fill
          // Optimisation de la performance
          sizes="800px" 
          className="object-contain" 
        />
      </div>
    </footer>
  );
};