import React, { useState } from 'react';
import { Language } from '../types';
import { Rocket, Bot, Mic, Crown, Calculator, Palette, ShieldAlert } from 'lucide-react';

interface StartupLeagueSectionProps {
  language: Language;
}

export const StartupLeagueSection: React.FC<StartupLeagueSectionProps> = ({ language }) => {
  const [activeSpoke, setActiveSpoke] = useState<'all' | 'tactics' | 'lab' | 'studio' | 'numbers' | 'voices'>('all');

  const steps = language === 'FR' ? [
    {
      num: '1',
      title: 'Le simulateur Agora Market',
      desc: 'Chaque manche représente un mois. Les équipes fixent leur prix, leur production et leur publicité, et le marché réagit. Des cartes surprises pimentent le jeu.',
    },
    {
      num: '2',
      title: 'La levée de fonds',
      desc: 'Les équipes présentent leur projet à un jury d’investisseurs (parents, entrepreneurs locaux) et lèvent des fonds en Agora Coins, une monnaie virtuelle.',
    },
    {
      num: '3',
      title: 'La finale : le Pitch Day',
      desc: 'Chaque équipe présente sa startup en anglais, sur scène et face caméra, devant les familles et un jury.',
    },
  ] : [
    {
      num: '1',
      title: 'The Agora Market Simulator',
      desc: 'Each turn represents one business month. Teams set unit pricing, inventory, and marketing spend. Dynamic market shocks test their business agility.',
    },
    {
      num: '2',
      title: 'The Angel Investment Round',
      desc: 'Teams pitch their prototype to a panel of parents and guest entrepreneurs, securing growth capital in virtual Agora Coins.',
    },
    {
      num: '3',
      title: 'The Grand Finale: Pitch Day',
      desc: 'Every venture delivers a 5-minute pitch in English on the main stage before an esteemed community jury.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-purple-700 text-white border-b-2 border-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-950 shadow-sm">
            AGORA STARTUP LEAGUE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === 'FR' ? 'Tout se rejoint dans une vraie mini-entreprise.' : 'Everything converges in a real mini-venture.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-purple-100 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>À partir de la 2e année, les enfants créent leur startup en équipe. Chaque activité devient un service de l'entreprise, et les rôles tournent pour que chacun découvre chaque métier.</>
            ) : (
              <>Starting in Year 2, youth launch their venture in balanced teams. Each academy discipline becomes a company division, and roles rotate so every child experiences every executive function.</>
            )}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="space-y-3">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-5 rounded-2xl bg-purple-800/90 border-2 border-purple-500 shadow-[4px_4px_0px_#3b0764] flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F6CF56] text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                {st.num}
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-black text-white">{st.title}</h4>
                <p className="text-xs sm:text-sm font-medium text-purple-100 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="flex items-center gap-2 p-3.5 bg-purple-900/80 border border-purple-400/50 rounded-2xl text-xs font-bold text-purple-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {language === 'FR'
              ? 'Aucun argent réel n’est investi. Les ventes du Market Day sont encadrées et autorisées par les parents.'
              : 'Zero real capital is involved. Market Day mock exchanges are strictly educational, safe, and supervised.'}
          </span>
        </div>

        {/* Interactive Hub Diagram: Startup Ecosystem */}
        <div className="bg-purple-900/60 border-2 border-purple-400/60 rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#3b0764] flex flex-col items-center">
          <h4 className="text-base font-black text-amber-300 uppercase tracking-wider mb-6 text-center">
            {language === 'FR' ? 'L’Écosystème Startup Agora' : 'The Agora Startup Ecosystem'}
          </h4>

          <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
            {/* Connecting Orbit Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-400/60" />

            {/* Center: Votre Startup */}
            <div className="relative z-10 w-28 h-28 rounded-full bg-[#F6CF56] text-slate-950 border-3 border-slate-950 shadow-[4px_4px_0px_#000000] flex flex-col items-center justify-center p-2 text-center">
              <Rocket className="w-6 h-6 text-slate-950" />
              <span className="text-xs font-black uppercase tracking-tight mt-1">
                {language === 'FR' ? 'Votre Startup' : 'Your Startup'}
              </span>
            </div>

            {/* Spoke 1: Tactics (Top) */}
            <div className="absolute top-0 flex flex-col items-center group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-blue-500 text-white border-2 border-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Crown className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black mt-1 bg-slate-900 px-2 py-0.5 rounded text-white whitespace-nowrap">
                Tactics · {language === 'FR' ? 'Stratégie' : 'Strategy'}
              </span>
            </div>

            {/* Spoke 2: Lab (Right) */}
            <div className="absolute right-0 flex flex-col items-center group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-emerald-500 text-white border-2 border-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black mt-1 bg-slate-900 px-2 py-0.5 rounded text-white whitespace-nowrap">
                Lab · {language === 'FR' ? 'Produit' : 'Product'}
              </span>
            </div>

            {/* Spoke 3: Studio (Bottom Right) */}
            <div className="absolute bottom-2 right-4 flex flex-col items-center group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-teal-500 text-white border-2 border-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black mt-1 bg-slate-900 px-2 py-0.5 rounded text-white whitespace-nowrap">
                Studio · {language === 'FR' ? 'Marque' : 'Branding'}
              </span>
            </div>

            {/* Spoke 4: Numbers (Bottom Left) */}
            <div className="absolute bottom-2 left-4 flex flex-col items-center group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white border-2 border-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black mt-1 bg-slate-900 px-2 py-0.5 rounded text-white whitespace-nowrap">
                Numbers · {language === 'FR' ? 'Comptes' : 'Finance'}
              </span>
            </div>

            {/* Spoke 5: Voices (Left) */}
            <div className="absolute left-0 flex flex-col items-center group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-pink-500 text-white border-2 border-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Mic className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black mt-1 bg-slate-900 px-2 py-0.5 rounded text-white whitespace-nowrap">
                Voices · {language === 'FR' ? 'Pitch' : 'Keynote'}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
