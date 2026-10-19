import React from 'react';
import { Language } from '../types';

interface RunningMarqueeProps {
  language: Language;
}

export const RunningMarquee: React.FC<RunningMarqueeProps> = ({ language }) => {
  const items = language === 'FR' ? [
    'Arts et calligraphie',
    'Code et robotique',
    'Anglais, scène et chant',
    'Stratégie et échecs',
    'Calcul mental',
    'Build it',
    'Make it',
    'Say it',
  ] : [
    'Arts & Calligraphy',
    'Coding & Robotics',
    'English, Stage & Speech',
    'Strategy & Chess',
    'Mental Math',
    'Build it',
    'Make it',
    'Say it',
  ];

  return (
    <div className="relative overflow-hidden border-b-2 border-slate-900 bg-slate-900 text-amber-300 py-3 select-none">
      <div className="flex w-max animate-[marquee_25s_linear_infinite]">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300">
              {item}
            </span>
            <span className="text-pink-500 font-bold text-base">✦</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
