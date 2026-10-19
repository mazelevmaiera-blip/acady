import React, { useState } from 'react';
import { Language } from '../types';
import { CREATURE_STAGES } from '../data/content';
import { Calendar, Target, MessageSquare, Video, RotateCcw, Sparkles } from 'lucide-react';
import dragonMascotImg from '../assets/images/agora_dragon_mascot_1792345713647.jpg';

interface CreatureDemoSectionProps {
  language: Language;
}

export const CreatureDemoSection: React.FC<CreatureDemoSectionProps> = ({ language }) => {
  const [xp, setXp] = useState(0);
  const stages = CREATURE_STAGES[language];

  // Determine current stage index based on XP
  let currentStageIndex = 0;
  if (xp >= 180) currentStageIndex = 5;
  else if (xp >= 130) currentStageIndex = 4;
  else if (xp >= 90) currentStageIndex = 3;
  else if (xp >= 60) currentStageIndex = 2;
  else if (xp >= 30) currentStageIndex = 1;
  else currentStageIndex = 0;

  const currentStage = stages[currentStageIndex];
  const maxXp = 250;
  const progressPercent = Math.min(100, Math.round((xp / 100) * 100));

  const addXp = (amount: number) => {
    setXp((prev) => Math.min(maxXp, prev + amount));
  };

  const resetDemo = () => {
    setXp(0);
  };

  return (
    <section id="lapp" className="py-12 sm:py-20 bg-amber-100/50 border-b-2 border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-slate-900 text-amber-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg">
            {language === 'FR' ? 'L’APPLICATION AGORA JUNIOR' : 'THE AGORA JUNIOR APP'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Une créature qui grandit avec l’effort.' : 'A creature that grows through effort.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Chaque enfant crée sa créature magique. Elle commence en œuf et grandit à mesure que votre enfant vient, essaie, explique et aide les autres. Les XP récompensent l'effort, pas seulement le résultat.</>
            ) : (
              <>Every child nurtures their own mythical creature. It starts as an egg and evolves as your child attends, tries, articulates ideas, and helps peers. XP rewards perseverance, curiosity, and teamwork.</>
            )}
          </p>
        </div>

        {/* Interactive Creature Widget Box */}
        <div className="bg-white rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_#0f172a] p-6 sm:p-8 space-y-6">
          
          {/* Header row: Demo badge & Stage indicator */}
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 text-[#F6CF56] text-xs font-black uppercase tracking-wider">
              {language === 'FR' ? 'Démo : essayez' : 'Live Interactive Demo'}
            </span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-slate-900">
              <span className="text-slate-500 font-bold">{language === 'FR' ? 'Stade :' : 'Stage:'}</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-300">
                {currentStage.name}
              </span>
            </div>
          </div>

          {/* Creature Stage Visual Box */}
          <div className="relative w-full aspect-video sm:aspect-[2.2/1] rounded-2xl bg-[#F8F9FA] border-2 border-slate-900 flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Background grid dots */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#1e293b 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Stage Graphic */}
            {currentStageIndex === 0 ? (
              /* Egg Graphic matching the video */
              <div className="relative animate-bounce duration-1000">
                <svg width="110" height="135" viewBox="0 0 110 135" className="drop-shadow-md">
                  {/* Outer Egg */}
                  <path
                    d="M55 5 C25 5 10 50 10 85 C10 115 30 130 55 130 C80 130 100 115 100 85 C100 50 85 5 55 5 Z"
                    fill="#F1F5F9"
                    stroke="#0f172a"
                    strokeWidth="3.5"
                  />
                  {/* Speckles */}
                  <circle cx="45" cy="75" r="5" fill="#10B981" />
                  <circle cx="65" cy="85" r="4" fill="#10B981" />
                  <circle cx="55" cy="100" r="4.5" fill="#10B981" />
                </svg>
              </div>
            ) : currentStageIndex === 1 ? (
              /* Newborn Hatchling */
              <div className="relative flex flex-col items-center animate-pulse">
                <div className="w-28 h-28 rounded-full bg-emerald-100 border-3 border-slate-900 p-2 shadow-md">
                  <img
                    src={dragonMascotImg}
                    alt="Baby dragon mascot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-black uppercase text-emerald-800 mt-2 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                  {language === 'FR' ? 'Coquille brisée !' : 'Hatched!'}
                </span>
              </div>
            ) : (
              /* Growing & Evolved Dragon */
              <div className="relative flex flex-col items-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-amber-100 to-emerald-100 border-3 border-slate-900 p-2 shadow-lg">
                  <img
                    src={dragonMascotImg}
                    alt="Evolving dragon mascot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-1.5 mt-2 bg-amber-300 border border-slate-900 px-3 py-0.5 rounded-full text-xs font-black text-slate-950 shadow-sm">
                  <Sparkles className="w-3 h-3 text-slate-950" />
                  <span>{currentStage.name}</span>
                </div>
              </div>
            )}

            <p className="text-xs font-bold text-slate-600 mt-2 z-10 text-center">
              {currentStage.description}
            </p>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-black text-slate-800">
              <span>XP</span>
              <span className="tabular-nums font-mono">{xp} / 100</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full border-2 border-slate-900 overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* 4 Interactive Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <button
              onClick={() => addXp(10)}
              className="p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {language === 'FR' ? 'Venir en séance' : 'Attend session'}
                </span>
              </div>
              <span className="text-[11px] font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-300 shrink-0">
                +10 XP
              </span>
            </button>

            <button
              onClick={() => addXp(20)}
              className="p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-slate-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {language === 'FR' ? 'Atteindre l’objectif' : 'Reach goal'}
                </span>
              </div>
              <span className="text-[11px] font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-300 shrink-0">
                +20 XP
              </span>
            </button>

            <button
              onClick={() => addXp(25)}
              className="p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-slate-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {language === 'FR' ? 'Expliquer ou aider' : 'Explain or help'}
                </span>
              </div>
              <span className="text-[11px] font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-300 shrink-0">
                +25 XP
              </span>
            </button>

            <button
              onClick={() => addXp(40)}
              className="p-3 bg-white hover:bg-slate-50 border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none transition-all flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-slate-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {language === 'FR' ? 'Moment caméra' : 'Camera video'}
                </span>
              </div>
              <span className="text-[11px] font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-300 shrink-0">
                +40 XP
              </span>
            </button>
          </div>

          {/* Stepper Dots */}
          <div className="pt-2 flex items-center justify-between text-[10px] sm:text-xs font-bold text-slate-600">
            {stages.map((stg, i) => (
              <div key={stg.level} className="flex flex-col items-center gap-1">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 border-slate-900 transition-colors ${
                    i <= currentStageIndex ? 'bg-amber-400' : 'bg-slate-200'
                  }`}
                />
                <span className="hidden sm:inline max-w-[60px] text-center truncate">{stg.name}</span>
              </div>
            ))}
          </div>

          {/* Reset Demo Button */}
          <div className="pt-2 text-center">
            <button
              onClick={resetDemo}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-600 hover:text-slate-900 cursor-pointer p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'FR' ? 'Recommencer la démo' : 'Reset demo'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
