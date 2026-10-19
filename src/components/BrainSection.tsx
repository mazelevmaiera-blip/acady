import React, { useState } from 'react';
import { ActivityId, BrainRegionId, Language } from '../types';
import { BRAIN_REGIONS } from '../data/content';
import { Bot, Mic, Crown, Calculator, Palette, Info, Check } from 'lucide-react';

interface BrainSectionProps {
  language: Language;
}

export const BrainSection: React.FC<BrainSectionProps> = ({ language }) => {
  const [filterMode, setFilterMode] = useState<'activite' | 'competence'>('activite');
  const [selectedActivity, setSelectedActivity] = useState<ActivityId | 'all'>('lab');
  const [selectedRegionId, setSelectedRegionId] = useState<BrainRegionId | null>('frontal');

  const regions = BRAIN_REGIONS[language];

  const activities: { id: ActivityId; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'lab', label: 'Lab', icon: <Bot className="w-3.5 h-3.5" />, color: '#10B981' },
    { id: 'voices', label: 'Voices', icon: <Mic className="w-3.5 h-3.5" />, color: '#EC4899' },
    { id: 'tactics', label: 'Tactics', icon: <Crown className="w-3.5 h-3.5" />, color: '#3B82F6' },
    { id: 'numbers', label: 'Numbers', icon: <Calculator className="w-3.5 h-3.5" />, color: '#F97316' },
    { id: 'studio', label: 'Studio', icon: <Palette className="w-3.5 h-3.5" />, color: '#14B8A6' },
  ];

  const isRegionActive = (region: typeof regions[0]) => {
    if (selectedRegionId === region.id) return true;
    if (selectedActivity === 'all') return true;
    return region.activities.includes(selectedActivity);
  };

  return (
    <section id="cerveau" className="py-12 sm:py-20 bg-amber-50/40 border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'LE CERVEAU EN ACTION' : 'THE BRAIN IN ACTION'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Ce que chaque activité fait travailler.' : 'What each activity exercises.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Chaque activité sollicite des fonctions précises du cerveau. Plus elles sont exercées, régulièrement et avec plaisir, plus elles deviennent faciles. Choisissez une activité ou une compétence pour voir les zones qui s'allument.</>
            ) : (
              <>Every activity engages specific cognitive brain circuits. The more consistently and joyfully they are exercised, the more natural they become. Select an activity to see which areas light up.</>
            )}
          </p>
        </div>

        {/* Filter Switcher: Par activité vs Par compétence */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a]">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setFilterMode('activite')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                filterMode === 'activite'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {language === 'FR' ? 'Par activité' : 'By Activity'}
            </button>
            <button
              onClick={() => setFilterMode('competence')}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                filterMode === 'competence'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {language === 'FR' ? 'Par compétence' : 'By Competency'}
            </button>
          </div>

          {/* Activity Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {activities.map((act) => {
              const active = selectedActivity === act.id;
              return (
                <button
                  key={act.id}
                  onClick={() => {
                    setSelectedActivity(act.id);
                    // Also focus first associated region
                    const match = regions.find((r) => r.activities.includes(act.id));
                    if (match) setSelectedRegionId(match.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer shadow-[2px_2px_0px_#0f172a] ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-slate-900'
                  }`}
                >
                  {act.icon}
                  <span>{act.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Brain Diagram Graphic & Lobe Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive SVG Brain Diagram */}
          <div className="lg:col-span-6 bg-white p-6 rounded-3xl border-3 border-slate-900 shadow-[6px_6px_0px_#0f172a] flex flex-col items-center justify-center">
            
            <div className="text-[11px] font-bold text-slate-400 self-start mb-2">
              ← {language === 'FR' ? 'l’avant' : 'front'}
            </div>

            {/* SVG Brain Representation with 6 distinct clickable regions */}
            <svg
              viewBox="0 0 400 320"
              className="w-full max-w-sm h-auto select-none drop-shadow-sm"
            >
              {/* Brain Stem / Base */}
              <path
                d="M190 240 Q195 285 200 310 L220 310 Q215 285 210 240 Z"
                fill="#CBD5E1"
                stroke="#0f172a"
                strokeWidth="2.5"
              />

              {/* 1. Lobe Frontal (Front/Top-left) */}
              <path
                d="M190 120 Q180 60 140 40 Q80 40 40 90 Q15 130 30 180 Q60 215 105 215 Q145 215 170 180 Q185 160 190 120 Z"
                fill={isRegionActive(regions[0]) ? '#FBBF24' : '#FDE68A'}
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray={isRegionActive(regions[0]) ? 'none' : '4 3'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedRegionId('frontal')}
              />
              <circle cx="105" cy="125" r="14" fill="#0f172a" />
              <text x="105" y="130" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>

              {/* 4. Lobe Pariétal (Top/Center-right) */}
              <path
                d="M190 120 Q185 55 240 45 Q300 45 330 90 Q340 120 320 150 Q280 155 230 155 Q205 140 190 120 Z"
                fill={isRegionActive(regions[3]) ? '#3B82F6' : '#BFDBFE'}
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray={isRegionActive(regions[3]) ? 'none' : '4 3'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedRegionId('parietal')}
              />
              <circle cx="265" cy="95" r="14" fill="#0f172a" />
              <text x="265" y="100" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>

              {/* 3. Système Limbique (Deep Core) */}
              <path
                d="M135 160 Q170 140 230 155 Q260 170 240 205 Q200 220 160 210 Q140 195 135 160 Z"
                fill={isRegionActive(regions[2]) ? '#F43F5E' : '#FECDD3'}
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray={isRegionActive(regions[2]) ? 'none' : '4 3'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedRegionId('limbique')}
              />
              <circle cx="185" cy="180" r="14" fill="#0f172a" />
              <text x="185" y="185" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>

              {/* 2. Lobe Temporal (Bottom-front/center) */}
              <path
                d="M75 185 Q115 180 140 215 Q150 250 110 260 Q65 260 55 230 Q50 200 75 185 Z"
                fill={isRegionActive(regions[1]) ? '#EC4899' : '#FBCFE8'}
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray={isRegionActive(regions[1]) ? 'none' : '4 3'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedRegionId('temporal')}
              />
              <circle cx="100" cy="225" r="14" fill="#0f172a" />
              <text x="100" y="230" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>

              {/* 5. Lobe Occipital (Back-right) */}
              <path
                d="M320 145 Q360 150 375 185 Q375 220 335 235 Q305 230 310 190 Q310 165 320 145 Z"
                fill={isRegionActive(regions[4]) ? '#10B981' : '#A7F3D0'}
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray={isRegionActive(regions[4]) ? 'none' : '4 3'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedRegionId('occipital')}
              />
              <circle cx="345" cy="190" r="14" fill="#0f172a" />
              <text x="345" y="195" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>

              {/* 6. Cervelet (Bottom-back) */}
              <path
                d="M225 235 Q260 225 305 235 Q330 260 300 285 Q250 295 220 270 Q215 250 225 235 Z"
                fill={isRegionActive(regions[5]) ? '#14B8A6' : '#99F6E4'}
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray={isRegionActive(regions[5]) ? 'none' : '4 3'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => setSelectedRegionId('cervelet')}
              />
              <circle cx="270" cy="265" r="14" fill="#0f172a" />
              <text x="270" y="270" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">6</text>
            </svg>

            <p className="text-center text-xs font-bold text-slate-600 mt-4">
              {language === 'FR'
                ? 'Les zones s’allument tour à tour. Choisissez une activité pour les explorer.'
                : 'Zones illuminate to reflect activation. Tap any activity to explore.'}
            </p>
          </div>

          {/* Right: Detailed Lobes List */}
          <div className="lg:col-span-6 space-y-3">
            {regions.map((reg) => {
              const active = isRegionActive(reg);
              const isSelected = selectedRegionId === reg.id;
              return (
                <div
                  key={reg.id}
                  onClick={() => setSelectedRegionId(reg.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-slate-900 shadow-[4px_4px_0px_#0f172a] ring-2 ring-amber-400'
                      : active
                      ? 'bg-white/90 border-slate-900 shadow-sm'
                      : 'bg-slate-100/70 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span 
                      className="w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 border border-slate-900 text-slate-900 shadow-sm"
                      style={{ backgroundColor: reg.color }}
                    >
                      {reg.number}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-950">{reg.name}</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5 py-0.5 bg-slate-100 rounded">
                          {reg.functions}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                        {reg.description}
                      </p>
                      
                      {/* Active activities tags for this lobe */}
                      <div className="flex items-center gap-1.5 pt-1">
                        {reg.activities.map((aId) => (
                          <span
                            key={aId}
                            className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-900 text-white"
                          >
                            {aId}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Scientific Honesty Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-900">
            <Info className="w-4 h-4 text-amber-500" />
            <span>{language === 'FR' ? 'En toute honnêteté' : 'In all honesty'}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
            {language === 'FR' ? (
              <>Ce schéma est simplifié : le cerveau travaille toujours en réseau, jamais une zone seule. Nous ne promettons pas de « booster le cerveau » : nous faisons pratiquer ces fonctions, régulièrement, et vous voyez les progrès dans les projets de votre enfant.</>
            ) : (
              <>This diagram is simplified: the human brain always operates in integrated networks, never in isolated silos. We do not promise magical brain shortcuts: we exercise these core cognitive functions consistently, and you witness tangible growth in your child’s projects.</>
            )}
          </p>
        </div>

      </div>
    </section>
  );
};
