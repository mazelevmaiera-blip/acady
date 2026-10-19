import React, { useState } from 'react';
import { ActivityId, Language } from '../types';
import { Bot, Mic, Crown, Calculator as CalcIcon, Palette, Check } from 'lucide-react';

interface CalculatorProps {
  language: Language;
}

export const Calculator: React.FC<CalculatorProps> = ({ language }) => {
  // All 5 selected by default as in the video demo
  const [selectedActivities, setSelectedActivities] = useState<ActivityId[]>([
    'lab',
    'voices',
    'tactics',
    'numbers',
    'studio',
  ]);

  const toggleActivity = (id: ActivityId) => {
    if (selectedActivities.includes(id)) {
      if (selectedActivities.length > 1) {
        setSelectedActivities(selectedActivities.filter((a) => a !== id));
      }
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  const count = selectedActivities.length;
  // Calculations:
  // 1.5h per week per activity
  const hoursPerWeek = (count * 1.5).toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  // 35 weeks per year
  const hoursPerYear = Math.round(count * 1.5 * 35);
  // 3 years
  const hoursThreeYears = Math.round(count * 1.5 * 35 * 3);
  // 6 projects per activity over 3 years
  const projectsTotal = count * 6;

  const activitiesList: {
    id: ActivityId;
    label: string;
    icon: React.ReactNode;
    color: string;
    activeClass: string;
  }[] = [
    {
      id: 'lab',
      label: 'Lab',
      icon: <Bot className="w-4 h-4" />,
      color: '#10B981',
      activeClass: 'bg-emerald-500 text-white border-slate-900',
    },
    {
      id: 'voices',
      label: 'Voices',
      icon: <Mic className="w-4 h-4" />,
      color: '#EC4899',
      activeClass: 'bg-pink-500 text-white border-slate-900',
    },
    {
      id: 'tactics',
      label: 'Tactics',
      icon: <Crown className="w-4 h-4" />,
      color: '#3B82F6',
      activeClass: 'bg-blue-600 text-white border-slate-900',
    },
    {
      id: 'numbers',
      label: 'Numbers',
      icon: <CalcIcon className="w-4 h-4" />,
      color: '#F97316',
      activeClass: 'bg-orange-500 text-white border-slate-900',
    },
    {
      id: 'studio',
      label: 'Studio',
      icon: <Palette className="w-4 h-4" />,
      color: '#14B8A6',
      activeClass: 'bg-teal-500 text-white border-slate-900',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-amber-50/50 border-b-2 border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Container Box */}
        <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-6">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-block bg-slate-900 text-amber-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg">
              {language === 'FR' ? 'CALCULATEUR' : 'CALCULATOR'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {language === 'FR' ? 'Combien d’heures pour votre enfant ?' : 'How many hours for your child?'}
            </h3>
            <p className="text-sm font-semibold text-slate-600">
              {language === 'FR' 
                ? 'Choisissez ses activités. Chaque activité, c’est une séance par semaine.'
                : 'Select activities. Each activity corresponds to one session per week.'}
            </p>
          </div>

          {/* Interactive Multi-Select Activity Chips */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {activitiesList.map((act) => {
              const isSelected = selectedActivities.includes(act.id);
              return (
                <button
                  key={act.id}
                  onClick={() => toggleActivity(act.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl border-2 font-black text-sm transition-all cursor-pointer shadow-[2px_2px_0px_#0f172a] active:translate-x-0.5 active:translate-y-0.5 ${
                    isSelected
                      ? act.activeClass
                      : 'bg-slate-100 text-slate-500 border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {act.icon}
                  <span>{act.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 ml-0.5" />}
                </button>
              );
            })}
          </div>

          {/* Real-time Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-3">
            {/* Metric 1 */}
            <div className="bg-[#F8F9FA] border-2 border-slate-900 rounded-2xl p-4 text-center shadow-[3px_3px_0px_#0f172a]">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tabular-nums">
                {hoursPerWeek}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">
                {language === 'FR' ? 'heures par semaine' : 'hours per week'}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#F8F9FA] border-2 border-slate-900 rounded-2xl p-4 text-center shadow-[3px_3px_0px_#0f172a]">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tabular-nums">
                {hoursPerYear}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">
                {language === 'FR' ? 'heures par année' : 'hours per year'}
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#F8F9FA] border-2 border-slate-900 rounded-2xl p-4 text-center shadow-[3px_3px_0px_#0f172a]">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tabular-nums">
                {hoursThreeYears}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">
                {language === 'FR' ? 'heures sur 3 ans' : 'hours over 3 years'}
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-[#F8F9FA] border-2 border-slate-900 rounded-2xl p-4 text-center shadow-[3px_3px_0px_#0f172a]">
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tabular-nums">
                {projectsTotal}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">
                {language === 'FR' ? 'projets présentés' : 'presented projects'}
              </div>
            </div>
          </div>

          {/* Note */}
          <p className="text-xs font-medium text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
            {language === 'FR' ? (
              <>Estimation : environ 35 séances de 1h30 par activité et par an. Pas de séance pendant les vacances scolaires et les jours fériés.</>
            ) : (
              <>Estimation: approx. 35 sessions of 1h30 per activity per year. No classes held during school holidays and official public holidays.</>
            )}
          </p>

        </div>

      </div>
    </section>
  );
};
