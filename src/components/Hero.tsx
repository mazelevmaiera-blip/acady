import React from 'react';
import { ActivityId, Language } from '../types';
import { DragonMascot } from './DragonMascot';
import { ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
  onSelectActivity: (id: ActivityId) => void;
  activeActivity?: ActivityId;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onNavigate,
  onSelectActivity,
  activeActivity,
}) => {
  return (
    <section id="accueil" className="relative bg-[#F6CF56] pt-4 pb-10 sm:py-14 border-b-2 border-slate-900 overflow-hidden">
      {/* Decorative background subtle dots */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1e293b 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm border-2 border-slate-900 rounded-full text-xs font-bold text-slate-800 shadow-[2px_2px_0px_#0f172a]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Kénitra</span>
              <span>·</span>
              <span>7 à 16 ans</span>
              <span>·</span>
              <span className="text-slate-900 font-extrabold">Inscriptions 2026-2027</span>
            </div>

            {/* Big Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
                {language === 'FR' ? (
                  <>
                    <span className="block">Construis-le.</span>
                    <span className="block">Crée-le.</span>
                    <span className="block">
                      Dis-le,{' '}
                      <span className="relative inline-block text-slate-950">
                        en anglais.
                        <span className="absolute left-0 -bottom-1 w-full h-3 bg-pink-500/80 -z-10 rounded-sm -rotate-1" />
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">Build it.</span>
                    <span className="block">Create it.</span>
                    <span className="block">
                      Say it,{' '}
                      <span className="relative inline-block text-slate-950">
                        in English.
                        <span className="absolute left-0 -bottom-1 w-full h-3 bg-pink-500/80 -z-10 rounded-sm -rotate-1" />
                      </span>
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-xl">
              {language === 'FR' ? (
                <>
                  Une académie où les enfants construisent des robots, montent sur scène, jouent aux échecs, calculent de tête et créent avec leurs mains. Cinq activités, un parcours de trois ans, et un projet présenté aux parents à chaque semestre.
                </>
              ) : (
                <>
                  An academy where youth build robots, take the stage, play chess, perform mental math, and craft with their hands. Five activities, a 3-year structured pathway, and a project presented to parents every semester.
                </>
              )}
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate('preinscription')}
                className="px-6 py-3.5 bg-slate-950 text-white font-black text-base rounded-2xl border-2 border-slate-950 shadow-[4px_4px_0px_#1e293b] hover:shadow-[1px_1px_0px_#1e293b] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{language === 'FR' ? 'Préinscrire mon enfant' : 'Enroll My Child'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('activites')}
                className="px-6 py-3.5 bg-white/90 hover:bg-white text-slate-900 font-extrabold text-base rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] hover:shadow-[1px_1px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{language === 'FR' ? 'Découvrir les 5 activités' : 'Discover the 5 Activities'}</span>
              </button>
            </div>

            {/* Free Discovery Notice Card */}
            <div className="pt-1 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-amber-200/60 border border-amber-400/80 rounded-xl p-3 max-w-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                <strong className="font-extrabold text-slate-900">
                  {language === 'FR' ? 'La première séance découverte est offerte : ' : 'The first discovery session is free: '}
                </strong>
                {language === 'FR' 
                  ? 'votre enfant essaie, vous rencontrez les coachs et découvrez l’académie.'
                  : 'your child tests the activities, and you meet the coaches.'}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Dragon Mascot & Activity Wheel */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full">
              <DragonMascot
                language={language}
                onSelectActivity={onSelectActivity}
                activeActivity={activeActivity}
              />
            </div>
            
            {/* Interactive hint prompt */}
            <p className="text-center text-xs font-semibold text-slate-800 mt-1 max-w-xs">
              {language === 'FR'
                ? '👆 Touchez une activité pour entrer dans son monde, ou touchez le dragon pour discuter.'
                : '👆 Tap an activity to enter its world, or tap the dragon to chat.'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
