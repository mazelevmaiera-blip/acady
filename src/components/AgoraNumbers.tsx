import React from 'react';
import { Language } from '../types';

interface AgoraNumbersProps {
  language: Language;
}

export const AgoraNumbers: React.FC<AgoraNumbersProps> = ({ language }) => {
  const cards = language === 'FR' ? [
    {
      num: '5',
      label: 'activités à choisir librement',
      bg: 'bg-amber-400 text-slate-950',
      border: 'border-slate-900',
    },
    {
      num: '3',
      label: "ans de parcours, d'Explorateurs à Experts",
      bg: 'bg-pink-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '6',
      label: 'niveaux par activité, un par semestre',
      bg: 'bg-blue-600 text-white',
      border: 'border-slate-900',
    },
    {
      num: '30',
      label: 'projets présentés aux parents sur le parcours complet',
      bg: 'bg-emerald-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '525',
      label: 'séances sur trois ans, avec les cinq activités',
      bg: 'bg-orange-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '788h',
      label: "d'apprentissage sur trois ans, avec les cinq activités",
      bg: 'bg-slate-800 text-white',
      border: 'border-slate-900',
    },
    {
      num: '6',
      label: 'moments caméra en anglais, un par semestre',
      bg: 'bg-teal-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '7',
      label: 'étapes dans chaque séance, toujours le même rythme',
      bg: 'bg-purple-600 text-white',
      border: 'border-slate-900',
    },
  ] : [
    {
      num: '5',
      label: 'activities to choose freely',
      bg: 'bg-amber-400 text-slate-950',
      border: 'border-slate-900',
    },
    {
      num: '3',
      label: 'years of curriculum, from Explorers to Experts',
      bg: 'bg-pink-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '6',
      label: 'levels per activity, one per semester',
      bg: 'bg-blue-600 text-white',
      border: 'border-slate-900',
    },
    {
      num: '30',
      label: 'projects presented to parents across the full cycle',
      bg: 'bg-emerald-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '525',
      label: 'hands-on sessions over 3 years, with all 5 activities',
      bg: 'bg-orange-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '788h',
      label: 'of active learning over 3 years, with all 5 activities',
      bg: 'bg-slate-800 text-white',
      border: 'border-slate-900',
    },
    {
      num: '6',
      label: 'on-camera English milestones, one per semester',
      bg: 'bg-teal-500 text-white',
      border: 'border-slate-900',
    },
    {
      num: '7',
      label: 'predictable steps in every single session',
      bg: 'bg-purple-600 text-white',
      border: 'border-slate-900',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'AGORA EN CHIFFRES' : 'AGORA IN NUMBERS'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight max-w-2xl">
            {language === 'FR' ? (
              <>Un parcours qui se compte en heures, en projets et en prises de parole.</>
            ) : (
              <>A journey measured in active hours, real projects, and confident speaking.</>
            )}
          </h2>
        </div>

        {/* 8 Colorful Number Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`${c.bg} p-4 sm:p-5 rounded-2xl border-2 ${c.border} shadow-[4px_4px_0px_#0f172a] hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[140px] sm:min-h-[160px]`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight tabular-nums">
                {c.num}
              </div>
              <p className="text-xs sm:text-sm font-bold leading-snug mt-2 opacity-95">
                {c.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
