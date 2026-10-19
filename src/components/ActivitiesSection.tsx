import React, { useState } from 'react';
import { ActivityId, ActivityInfo, Language } from '../types';
import { ACTIVITIES_DATA } from '../data/content';
import { Bot, Mic, Crown, Calculator, Palette, Brain, Shield, Users, Wrench, Sparkles, BookOpen, Lightbulb, CheckCircle2 } from 'lucide-react';
import dragonMascotImg from '../assets/images/agora_dragon_mascot_1792345713647.jpg';
import kidRoboticsImg from '../assets/images/kid_robotics_assembly_1792345715612.jpg';
import kidsCollabImg from '../assets/images/kids_collaborative_tech_1792345716077.jpg';

interface ActivitiesSectionProps {
  language: Language;
  selectedActivity: ActivityId;
  onSelectActivity: (id: ActivityId) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  language,
  selectedActivity,
  onSelectActivity,
}) => {
  const [subTab, setSubTab] = useState<'apercu' | 'specialites' | 'niveaux' | 'semestre' | 'recherche'>('apercu');
  const activities = ACTIVITIES_DATA[language];
  const activeData: ActivityInfo = activities.find((a) => a.id === selectedActivity) || activities[0];

  const getIcon = (id: ActivityId) => {
    switch (id) {
      case 'lab':
        return <Bot className="w-5 h-5" />;
      case 'voices':
        return <Mic className="w-5 h-5" />;
      case 'tactics':
        return <Crown className="w-5 h-5" />;
      case 'numbers':
        return <Calculator className="w-5 h-5" />;
      case 'studio':
        return <Palette className="w-5 h-5" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-4 h-4 text-emerald-700" />;
      case 'shield':
        return <Shield className="w-4 h-4 text-emerald-700" />;
      case 'users':
        return <Users className="w-4 h-4 text-emerald-700" />;
      case 'wrench':
        return <Wrench className="w-4 h-4 text-emerald-700" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-700" />;
    }
  };

  return (
    <section id="activites" className="py-12 sm:py-20 bg-slate-50 border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'LES ACTIVITÉS' : 'THE ACTIVITIES'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Cinq activités, cinq mondes à explorer.' : 'Five activities, five worlds to explore.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Chaque activité se suit séparément, une séance par semaine, et avance par niveaux : Explorateurs, puis Leaders, puis Experts. Choisissez une activité : tout le site entre dans son monde.</>
            ) : (
              <>Each activity is attended separately, one session per week, and progresses by levels: Explorers, then Leaders, then Experts. Choose an activity to step into its world.</>
            )}
          </p>
        </div>

        {/* Activity Selector Carousel / Pill Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {activities.map((act) => {
            const isSelected = act.id === selectedActivity;
            return (
              <button
                key={act.id}
                onClick={() => {
                  onSelectActivity(act.id);
                  setSubTab('apercu');
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-[4px_4px_0px_#f59e0b]'
                    : 'bg-white text-slate-800 border-slate-900 hover:bg-amber-50 shadow-[2px_2px_0px_#0f172a]'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: act.color }}
                >
                  {getIcon(act.id)}
                </div>
                <div className="text-left">
                  <div className="text-sm font-black leading-none">{act.name}</div>
                  <div className={`text-[11px] font-bold mt-1 ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                    {act.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active World Card */}
        <div 
          className="rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_#0f172a] bg-white overflow-hidden transition-all duration-300"
          style={{ borderColor: activeData.borderColor }}
        >
          {/* Header Banner */}
          <div 
            className="p-6 sm:p-8 text-slate-950 border-b-2 border-slate-900"
            style={{ backgroundColor: activeData.accentBg }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-2xl border-2 border-slate-900 flex items-center justify-center text-white shadow-[3px_3px_0px_#0f172a] shrink-0"
                style={{ backgroundColor: activeData.color }}
              >
                {getIcon(activeData.id)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                    {activeData.name}
                  </h3>
                  <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded-full bg-white border border-slate-900">
                    {activeData.category}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                  {activeData.description}
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery & Showcase */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Main Photo */}
              <div className="md:col-span-8 rounded-2xl overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] relative aspect-video bg-slate-100 group">
                <img
                  src={kidRoboticsImg}
                  alt="Child wiring and assembling robotics project at Agora Junior Academy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-900 text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'FR' ? 'Construire et câbler un robot' : 'Build and wire a robot'}</span>
                </div>
              </div>

              {/* Secondary Photo */}
              <div className="md:col-span-4 rounded-2xl overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] relative aspect-video md:aspect-auto bg-slate-100 group">
                <img
                  src={kidsCollabImg}
                  alt="Children collaborating on code and robotics design"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-900 text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'FR' ? 'Apprendre en binôme' : 'Learn in pairs'}</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] font-semibold text-slate-500 italic">
              {language === 'FR'
                ? "Photos d'illustration : elles ne montrent pas des élèves d'Agora Junior Academy."
                : "Illustrative photography: does not depict actual enrolled students of Agora Junior Academy."}
            </p>

            {/* Sub-tabs Bar */}
            <div className="flex flex-wrap gap-2 border-b-2 border-slate-200 pb-3">
              {[
                { id: 'apercu', label: language === 'FR' ? 'Aperçu' : 'Overview' },
                { id: 'specialites', label: language === 'FR' ? 'Spécialités' : 'Specialties' },
                { id: 'niveaux', label: language === 'FR' ? '6 niveaux' : '6 Levels' },
                { id: 'semestre', label: language === 'FR' ? 'Premier semestre' : 'First Semester' },
                { id: 'recherche', label: language === 'FR' ? 'Recherche' : 'Research' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSubTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black border-2 transition-all cursor-pointer ${
                    subTab === tab.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-[2px_2px_0px_#f59e0b]'
                      : 'bg-slate-100 text-slate-700 border-transparent hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sub-Tab Content */}
            {subTab === 'apercu' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Benefits List */}
                <div className="space-y-3">
                  <h4 className="text-lg font-black text-slate-950 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>{language === 'FR' ? 'Les bienfaits pour votre enfant' : 'Key benefits for your child'}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeData.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 border-2 border-slate-900 rounded-2xl p-4 shadow-[2px_2px_0px_#0f172a] space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                            {b.title}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deep Dive Box */}
                <div 
                  className="rounded-2xl border-2 border-slate-900 p-5 space-y-2 shadow-[4px_4px_0px_#0f172a]"
                  style={{ backgroundColor: activeData.accentBg }}
                >
                  <h4 className="text-base font-black text-slate-950">
                    {activeData.deepDiveTitle}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {activeData.deepDiveDesc}
                  </p>
                </div>

                {/* Tools & Supports Chips */}
                <div className="space-y-2">
                  <h5 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    {language === 'FR' ? 'Outils et supports utilisés' : 'Tools and technologies used'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeData.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-white border-2 border-slate-900 text-xs font-extrabold text-slate-800 shadow-[2px_2px_0px_#0f172a]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {subTab === 'specialites' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-base font-black text-slate-900">
                  {language === 'FR' ? 'Parcours de spécialités (Année 2 & 3)' : 'Specialty tracks (Year 2 & 3)'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeData.specialties.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-amber-50 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-1"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-300 font-black text-xs flex items-center justify-center">
                        0{idx + 1}
                      </div>
                      <div className="text-sm font-black text-slate-900">{spec}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {subTab === 'niveaux' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <h4 className="text-base font-black text-slate-900">
                  {language === 'FR' ? 'Les 6 semestres de progression' : 'The 6 progression semesters'}
                </h4>
                <div className="space-y-2">
                  {activeData.levels.map((lvl, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-900 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black px-2 py-0.5 rounded bg-slate-900 text-white">
                          {lvl.sem}
                        </span>
                        <span className="text-sm font-black text-slate-900">{lvl.name}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                        🏆 {lvl.project}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {subTab === 'semestre' && (
              <div className="space-y-3 p-4 rounded-2xl bg-emerald-50 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] animate-in fade-in duration-200">
                <h4 className="text-base font-black text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>{language === 'FR' ? 'Focus du premier semestre' : 'First semester focus'}</span>
                </h4>
                <p className="text-sm font-semibold text-emerald-900 leading-relaxed">
                  {activeData.firstSemesterFocus}
                </p>
              </div>
            )}

            {subTab === 'recherche' && (
              <div className="space-y-3 p-4 rounded-2xl bg-blue-50 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] animate-in fade-in duration-200">
                <h4 className="text-base font-black text-blue-950 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-700" />
                  <span>{language === 'FR' ? 'Fondements scientifiques' : 'Scientific foundations'}</span>
                </h4>
                <p className="text-sm font-semibold text-blue-900 leading-relaxed">
                  {activeData.researchBasis}
                </p>
              </div>
            )}

            {/* Dragon Advice Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F6CF56] border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-900 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img
                  src={dragonMascotImg}
                  alt="Drako mascot advice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-black text-slate-950 flex items-center gap-2">
                  <span>{language === 'FR' ? 'Notre conseil : commencez par tout essayer' : 'Our advice: start by trying everything'}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                  {language === 'FR' ? (
                    <>À 7 ou 12 ans, un enfant ne sait pas encore ce qu'il aime vraiment. En suivant les cinq activités, il découvre sa vraie passion. Il peut ensuite changer d'activité ou se concentrer sur ses préférées.</>
                  ) : (
                    <>At age 7 or 12, a child doesn't yet know their true calling. By experiencing all five activities, they uncover real passions. They can later specialize or rotate freely.</>
                  )}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
