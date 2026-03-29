import { LuxuryButton } from "@/components/ui/luxury-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      {/* SECTION HERO - Fond clair par défaut */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        
        {/* 1. Décoration d'arrière-plan (Filigrane géant OR très doux) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="font-arabic text-[50vw] leading-none text-accent">سلام</span>
        </div>

        {/* 2. Contenu principal */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8 mt-10">
          
          {/* Basmala en calligraphie (Or) */}
          <span className="font-arabic text-4xl md:text-6xl text-accent mb-2">
            بسم الله الرحمن الرحيم
          </span>
          
          {/* Titre principal (Bleu Nuit Profond) */}
          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] text-primary uppercase flex flex-col gap-6">
            <span className="text-xl md:text-2xl tracking-[0.4em] text-primary/70">Bienvenue à la Mosquée</span>
            <span className="text-primary drop-shadow-sm">Ahmed Salem</span>
          </h1>
          
          {/* Sous-titre accueillant (Bleu Nuit adouci) */}
          <p className="text-base md:text-xl text-primary/70 max-w-2xl mt-6 font-light leading-relaxed">
            Un lieu de paix, de prière et de rassemblement. 
            Découvrez nos enseignements et participez à la vie de notre communauté.
          </p>

          {/* 3. Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            {/* Bouton Don Or (Rempli) */}
            <LuxuryButton variant="gold" className="px-12 py-5 text-sm md:text-base tracking-[0.2em] shadow-luxury">
              FAIRE UN DON
            </LuxuryButton>
            {/* Bouton secondaire (Bordure Bleu Nuit) */}
            <button className="px-12 py-5 text-sm md:text-base font-serif font-bold tracking-[0.2em] uppercase border border-primary hover:bg-primary/5 transition-colors rounded-none text-primary">
              NOS HORAIRES
            </button>
          </div>
          
        </div>
      </section>

    </main>
  );
}