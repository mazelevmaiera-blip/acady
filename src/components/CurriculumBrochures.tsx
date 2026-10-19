import React, { useState } from 'react';
import { Language } from '../types';
import { CurriculumModal } from './CurriculumModal';
import { Download, FileText, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface CurriculumBrochuresProps {
  language: Language;
}

export const CurriculumBrochures: React.FC<CurriculumBrochuresProps> = ({ language }) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
  }>({
    isOpen: false,
    title: '',
    category: '',
  });

  const brochures = language === 'FR' ? [
    {
      id: 'full',
      title: 'La brochure complète',
      subtitle: 'Les 5 activités, de l’Explorateur à l’Expert · 6 pages',
      badge: 'Guide Général',
      bg: 'bg-amber-100',
      color: '#F59E0B',
      isHero: true,
    },
    {
      id: 'lab',
      title: 'Agora Lab',
      subtitle: '3 ans · 6 niveaux · 6 projets',
      badge: 'Code & Robotique',
      bg: 'bg-emerald-50',
      color: '#10B981',
      isHero: false,
    },
    {
      id: 'voices',
      title: 'Agora Voices',
      subtitle: '3 ans · 6 niveaux · 6 projets',
      badge: 'Anglais & Scène',
      bg: 'bg-pink-50',
      color: '#EC4899',
      isHero: false,
    },
    {
      id: 'tactics',
      title: 'Agora Tactics',
      subtitle: '3 ans · 6 niveaux · 6 projets',
      badge: 'Échecs & Stratégie',
      bg: 'bg-blue-50',
      color: '#3B82F6',
      isHero: false,
    },
    {
      id: 'numbers',
      title: 'Agora Numbers',
      subtitle: '3 ans · 6 niveaux · 6 projets',
      badge: 'Calcul Mental',
      bg: 'bg-orange-50',
      color: '#F97316',
      isHero: false,
    },
    {
      id: 'studio',
      title: 'Agora Studio',
      subtitle: '3 ans · 6 niveaux · 6 projets',
      badge: 'Arts & Calligraphie',
      bg: 'bg-teal-50',
      color: '#14B8A6',
      isHero: false,
    },
  ] : [
    {
      id: 'full',
      title: 'The Complete Brochure',
      subtitle: 'All 5 activities, from Explorer to Expert · 6 pages',
      badge: 'Full Guide',
      bg: 'bg-amber-100',
      color: '#F59E0B',
      isHero: true,
    },
    {
      id: 'lab',
      title: 'Agora Lab',
      subtitle: '3 years · 6 levels · 6 projects',
      badge: 'Coding & Robotics',
      bg: 'bg-emerald-50',
      color: '#10B981',
      isHero: false,
    },
    {
      id: 'voices',
      title: 'Agora Voices',
      subtitle: '3 years · 6 levels · 6 projects',
      badge: 'English & Stage',
      bg: 'bg-pink-50',
      color: '#EC4899',
      isHero: false,
    },
    {
      id: 'tactics',
      title: 'Agora Tactics',
      subtitle: '3 years · 6 levels · 6 projects',
      badge: 'Chess & Strategy',
      bg: 'bg-blue-50',
      color: '#3B82F6',
      isHero: false,
    },
    {
      id: 'numbers',
      title: 'Agora Numbers',
      subtitle: '3 years · 6 levels · 6 projects',
      badge: 'Mental Math',
      bg: 'bg-orange-50',
      color: '#F97316',
      isHero: false,
    },
    {
      id: 'studio',
      title: 'Agora Studio',
      subtitle: '3 years · 6 levels · 6 projects',
      badge: 'Arts & Calligraphy',
      bg: 'bg-teal-50',
      color: '#14B8A6',
      isHero: false,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-b-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'LE CURSUS' : 'THE CURRICULUM'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Toute la progression, en un coup d’œil.' : 'The complete progression, at a single glance.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Téléchargez la vue d'ensemble de chaque activité : trois ans, six niveaux, ce que votre enfant étudie et le projet de chaque semestre. Une seule brochure, une couleur par activité.</>
            ) : (
              <>Download the syllabus overview for each activity: three years, six levels, what your child studies, and the project for each semester. One brochure, one color per activity.</>
            )}
          </p>
        </div>

        {/* Brochure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brochures.map((b) => (
            <div
              key={b.id}
              className={`rounded-2xl border-2 border-slate-900 p-5 shadow-[4px_4px_0px_#0f172a] hover:-translate-y-1 transition-all flex flex-col justify-between ${
                b.isHero ? 'bg-amber-100/70 border-amber-900' : 'bg-slate-50'
              }`}
            >
              <div className="space-y-3">
                {/* Visual mini-cover mockup */}
                <div 
                  className="rounded-xl border border-slate-900 p-3 h-28 flex flex-col justify-between shadow-inner relative overflow-hidden"
                  style={{ backgroundColor: b.bg }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-white border border-slate-900 text-slate-900">
                      {b.badge}
                    </span>
                    <FileText className="w-4 h-4 text-slate-800" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-black text-slate-900 truncate">{b.title}</div>
                    <div className="text-[10px] font-bold text-slate-600 truncate">{b.subtitle}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-slate-950">{b.title}</h4>
                  <p className="text-xs font-bold text-slate-600 mt-0.5">{b.subtitle}</p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setModalState({ isOpen: true, title: b.title, category: b.badge })}
                className="mt-4 w-full py-2.5 px-3 bg-white hover:bg-slate-900 hover:text-white text-slate-950 text-xs font-black rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Download className="w-3.5 h-3.5 group-hover:text-amber-300" />
                <span>{b.isHero ? (language === 'FR' ? 'Télécharger la brochure' : 'Download brochure') : (language === 'FR' ? 'Télécharger le PDF' : 'Download PDF')}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-xs font-semibold text-slate-500 text-center">
          {language === 'FR'
            ? 'Disponible en français et en anglais : le PDF suit la langue choisie en haut de la page.'
            : 'Available in French and English: the PDF matches the language selected at the top of the page.'}
        </p>

      </div>

      {/* Curriculum Modal */}
      <CurriculumModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: '', category: '' })}
        language={language}
        title={modalState.title}
        category={modalState.category}
      />
    </section>
  );
};
