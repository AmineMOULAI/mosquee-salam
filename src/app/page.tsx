"use client";

import { motion } from "framer-motion";
import { LuxuryButton, MagneticButton } from "@/components/ui/luxury-button";
import { 
  IconMosqueV3, 
  IconTextureV3 
} from "@/components/ui/icons-salem-v3";
import Image from "next/image";
import React from "react";

// Mock Data
const prayerTimes = [
  { name: "Fajr", time: "05:42", active: false },
  { name: "Shorooq", time: "07:15", active: false },
  { name: "Dhuhr", time: "12:45", active: true },
  { name: "Asr", time: "15:30", active: false },
  { name: "Maghrib", time: "18:12", active: false },
  { name: "Isha", time: "19:45", active: false },
];

const news = [
  {
    title: "Conférence Spéciale : La Paix Intérieure",
    date: "24 Mars 2024",
    category: "Événement",
    excerpt: "Une exploration profonde de la sérénité à travers les textes sacrés et la méditation."
  },
  {
    title: "Ouverture des Inscriptions École Arabe",
    date: "15 Mars 2024",
    category: "Éducation",
    excerpt: "Les inscriptions pour le prochain semestre sont désormais ouvertes pour tous les niveaux."
  },
  {
    title: "Projet d'Expansion : Nouveau Centre Culturel",
    date: "10 Mars 2024",
    category: "Projet",
    excerpt: "Découvrez les plans de notre futur espace dédié aux arts et à la culture islamique."
  }
];

// ✅ LA CORRECTION EST ICI : Ajout de "as const" pour TypeScript
const transitionSlow = { 
  duration: 1.5, 
  ease: [0.22, 1, 0.36, 1] as const 
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-32 pb-32 bg-background min-h-screen font-outfit">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-8 pt-20">
        
        <IconTextureV3 className="absolute inset-0 w-full h-full text-primary opacity-[0.02] pointer-events-none" />
        
        {/* Filigrane Géant "Salam" en OR */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="font-arabic text-[50vw] leading-none text-accent">سلام</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSlow}
          className="text-center z-10 flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Logo Dove */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
            className="relative w-10 h-10 md:w-72 md:h-10 mb-8"
          >
            <Image 
              src="/images/dove.png" 
              alt="Logo Centre Salam" 
              fill
              priority
              // 👇 AJOUT DE CETTE LIGNE POUR LA PERFORMANCE
              sizes="(max-width: 768px) 96px, 288px" 
              className="object-contain" 
            />
            <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full -z-10 opacity-60" />
          </motion.div>

          {/* La Basmala en OR */}
          <span className="font-arabic text-3xl md:text-5xl text-accent mb-6">
            بسم الله الرحمن الرحيم
          </span>

          <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-primary/60 mb-6 block">
            Bienvenue au
          </span>
          
          {/* Titre Principal avec ta nouvelle police Mutiara */}
          <h1 className="text-6xl md:text-9xl font-[var(--font-salam-title)] text-primary uppercase leading-none">
            Centre <span className="text-accent italic">Salam</span>
          </h1>

          {/* Enseignement et Éducation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex items-center gap-4 text-accent/60 mb-12"
          >
            <span className="h-[1px] w-8 bg-accent/20"></span>
            <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-light">
              Enseignement et Éducation
            </span>
            <span className="h-[1px] w-8 bg-accent/20"></span>
          </motion.div>

          <p className="text-base md:text-xl font-light text-primary/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            <span className="font-medium text-primary">La Sérénité par l'Essentiel.</span> Un lieu de paix, d'éducation et de rassemblement pour la communauté.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <LuxuryButton variant="gold" className="px-16 py-5 text-sm tracking-[0.2em] shadow-luxury">
                Faire un Don
              </LuxuryButton>
            </MagneticButton>
            <MagneticButton>
              <button className="px-16 py-5 text-sm font-serif font-bold tracking-[0.2em] uppercase border border-primary hover:bg-primary/5 transition-colors rounded-none text-primary">
                Horaires de Prière
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      {/* 2. PRAYER TIMES */}
      <section className="px-8 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase block">Aujourd'hui</span>
            <h2 className="text-5xl font-serif text-primary leading-none">
              Les Temps de <br /> <span className="italic text-accent">Connexion.</span>
            </h2>
            <p className="text-sm font-light text-primary/60 leading-relaxed max-w-xs">
              Alignez votre journée sur le rythme sacré. Précision calculée pour notre centre.
            </p>
            <div className="h-[1px] w-12 bg-accent/30" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
            {prayerTimes.map((prayer, i) => (
              <motion.div 
                key={prayer.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`p-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 bg-background hover:bg-primary/5 group ${prayer.active ? 'ring-1 ring-accent/30 shadow-luxury' : ''}`}
              >
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${prayer.active ? 'text-accent' : 'text-primary/40 group-hover:text-primary/70'}`}>
                  {prayer.name}
                </span>
                <span className={`text-3xl font-serif tracking-tight ${prayer.active ? 'text-primary font-bold' : 'text-primary/60'}`}>
                  {prayer.time}
                </span>
                {prayer.active && (
                  <motion.div 
                    layoutId="active-prayer"
                    className="w-2 h-2 rounded-full bg-accent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LATEST NEWS */}
      <section className="px-8 md:px-12 py-32 bg-primary/[0.02]">
        <div className="max-w-[1400px] mx-auto space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase block">Actualités</span>
              <h2 className="text-5xl font-serif text-primary leading-none">
                Vie de la <span className="italic text-accent">Communauté.</span>
              </h2>
            </div>
            <button className="px-12 py-4 text-sm font-serif font-bold tracking-[0.2em] uppercase border border-primary hover:bg-primary/5 transition-colors rounded-none text-primary">
              Voir tout
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="group cursor-pointer flex flex-col gap-8 p-8 border border-primary/10 hover:border-accent/30 bg-background transition-all duration-700 shadow-sm hover:shadow-luxury"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-accent">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-medium uppercase text-primary/40">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif leading-tight text-primary group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm font-light text-primary/60 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="pt-4 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:translate-x-2 group-hover:text-accent transition-all duration-500 inline-block">
                    Lire la suite →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - Minimalisme Radical & Élégance */}
      <section className="px-8 md:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-12">
          
          {/* 👇 REMPLACEMENT : Image du Dove (Oiseau) à la place de l'icône */}
          <div className="relative w-14 h-14 mx-auto opacity-40 hover:opacity-100 transition-opacity duration-700">
            <Image 
              src="/images/dove.png" 
              alt="Soutien Centre Salam" 
              fill
              // 👇sizes indispensable pour la performance (16 = 64px)
              sizes="64px" 
              className="object-contain" 
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
            Soutenez votre <br /> <span className="italic text-accent">Lieu de Paix.</span>
          </h2>
          
          <p className="text-base font-light text-primary/60 leading-relaxed">
            Chaque geste contribue à faire vivre ce projet unique au service de tous.
          </p>

          <MagneticButton>
            <LuxuryButton variant="gold" className="px-24 py-5 text-sm tracking-[0.2em] shadow-luxury">
              CONTRIBUER
            </LuxuryButton>
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}