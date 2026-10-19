import React, { useState } from 'react';
import { ActivityId, Language } from '../types';
import { Bot, Mic, Crown, Calculator, Palette, Sparkles, MessageCircle } from 'lucide-react';

interface DragonMascotProps {
  language: Language;
  onSelectActivity: (id: ActivityId) => void;
  activeActivity?: ActivityId;
}

export const DragonMascot: React.FC<DragonMascotProps> = ({
  language,
  onSelectActivity,
  activeActivity,
}) => {
  const [talkIndex, setTalkIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);

  const dragonQuotes = language === 'FR' ? [
    '7 × 8 = 56 !',
    'Hello! Ready to speak in English?',
    'Viens programmer un robot avec moi !',
    'Échec et mat en 3 coups !',
    'Touche une bulle pour explorer mon académie !',
    'Les erreurs, c’est comme ça qu’on apprend ! 🌟',
  ] : [
    '7 × 8 = 56 !',
    'Hello! Ready to speak in English?',
    'Come code a robot with me!',
    'Checkmate in 3 moves!',
    'Tap a circle to explore my academy!',
    'Mistakes are how we truly learn! 🌟',
  ];

  const handleDragonTap = () => {
    setIsWaving(true);
    setTalkIndex((prev) => (prev + 1) % dragonQuotes.length);
    setTimeout(() => setIsWaving(false), 800);
  };

  const activities: {
    id: ActivityId;
    label: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
    border: string;
    position: string;
  }[] = [
    {
      id: 'lab',
      label: 'Lab',
      icon: <Bot className="w-5 h-5 text-emerald-700" />,
      color: '#10B981',
      bg: 'bg-emerald-50 hover:bg-emerald-100',
      border: 'border-emerald-400',
      position: 'top-1 right-24 sm:right-32',
    },
    {
      id: 'studio',
      label: 'Studio',
      icon: <Palette className="w-5 h-5 text-teal-700" />,
      color: '#14B8A6',
      bg: 'bg-teal-50 hover:bg-teal-100',
      border: 'border-teal-400',
      position: 'top-14 right-2 sm:right-6',
    },
    {
      id: 'voices',
      label: 'Voices',
      icon: <Mic className="w-5 h-5 text-pink-700" />,
      color: '#EC4899',
      bg: 'bg-pink-50 hover:bg-pink-100',
      border: 'border-pink-400',
      position: 'bottom-16 right-4 sm:right-10',
    },
    {
      id: 'tactics',
      label: 'Tactics',
      icon: <Crown className="w-5 h-5 text-blue-700" />,
      color: '#3B82F6',
      bg: 'bg-blue-50 hover:bg-blue-100',
      border: 'border-blue-400',
      position: 'bottom-2 left-1/2 -translate-x-1/2',
    },
    {
      id: 'numbers',
      label: 'Numbers',
      icon: <Calculator className="w-5 h-5 text-orange-700" />,
      color: '#F97316',
      bg: 'bg-orange-50 hover:bg-orange-100',
      border: 'border-orange-400',
      position: 'top-14 left-2 sm:left-6',
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center select-none py-6">
      {/* Dashed Orbit Ring */}
      <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 pointer-events-none animate-[spin_60s_linear_infinite]" />

      {/* Dragon Speech Bubble */}
      <div 
        onClick={handleDragonTap}
        className="absolute top-3 left-6 sm:left-12 z-20 cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <div className="bg-white border-2 border-slate-900 rounded-2xl px-3.5 py-1.5 shadow-[3px_3px_0px_#1e293b] flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">
            {dragonQuotes[talkIndex]}
          </span>
        </div>
        {/* Tail of speech bubble */}
        <div className="w-3 h-3 bg-white border-r-2 border-b-2 border-slate-900 rotate-45 ml-6 -mt-1.5" />
      </div>

      {/* Center Mascot Container */}
      <div
        onClick={handleDragonTap}
        className={`relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-amber-50 via-white to-amber-100/60 border-3 border-slate-900 shadow-[6px_6px_0px_#1e293b] flex items-center justify-center p-3 cursor-pointer group transition-transform duration-300 ${
          isWaving ? 'scale-105 rotate-3' : 'hover:scale-102'
        }`}
        title={language === 'FR' ? "Touchez-moi pour discuter !" : "Tap me to talk!"}
      >
        <img
          src="/src/assets/images/agora_dragon_mascot_1792345713647.jpg"
          alt="Agora Junior Dragon Mascot"
          className="w-full h-full object-contain filter drop-shadow-md group-hover:brightness-105 transition-all"
        />

        {/* Small sparkle effect */}
        <div className="absolute -top-1 -right-1 bg-amber-400 border border-slate-900 rounded-full p-1 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-slate-900" />
        </div>
      </div>

      {/* Orbital Activity Nodes */}
      {activities.map((act) => {
        const isSelected = activeActivity === act.id;
        return (
          <button
            key={act.id}
            onClick={() => onSelectActivity(act.id)}
            className={`absolute ${act.position} z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 ${act.border} ${act.bg} shadow-[2px_2px_0px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95 ${
              isSelected ? 'ring-3 ring-slate-900 ring-offset-2 scale-110 font-bold' : ''
            }`}
          >
            {act.icon}
            <span className="text-xs font-bold text-slate-800 tracking-tight">
              {act.label}
            </span>
          </button>
        );
      })}

      {/* Bottom Proof Tag */}
      <div className="absolute -bottom-2 left-6 z-20">
        <div className="bg-[#F43F5E] text-white text-[11px] font-bold px-3 py-1 rounded-xl border border-slate-900 shadow-[2px_2px_0px_#0f172a] tracking-tight">
          {language === 'FR' ? 'Pas de promesse. Des preuves.' : 'No empty promises. Real proof.'}
        </div>
      </div>
    </div>
  );
};
