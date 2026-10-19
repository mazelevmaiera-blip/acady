import React, { useState } from 'react';
import { Language } from '../types';
import { CheckCircle2, XCircle, Heart, Users, Clock, Sparkles } from 'lucide-react';

interface OurSpiritSectionProps {
  language: Language;
}

export const OurSpiritSection: React.FC<OurSpiritSectionProps> = ({ language }) => {
  const [comparisonTab, setComparisonTab] = useState<'agora' | 'classique'>('agora');

  const steps = language === 'FR' ? [
    { num: '1', title: 'Rappel d’ouverture', desc: 'Les enfants racontent la séance précédente et réactivent leur mémoire.' },
    { num: '2', title: 'La mission du jour', desc: 'Un objectif concret et stimulant, annoncé par le coach.' },
    { num: '3', title: 'Apprendre et pratiquer', desc: 'Une idée nouvelle, manipulée et essayée tout de suite.' },
    { num: '4', title: 'Pause', desc: 'Goûter sain, rires et mouvement pour oxygéner le cerveau.' },
    { num: '5', title: 'Créer en binôme', desc: 'Construire, jouer, répéter ou débattre à deux en s’entraidant.' },
    { num: '6', title: 'Expliquer simplement', desc: 'Chacun explique une solution avec ses propres mots.' },
    { num: '7', title: 'Rappel de clôture', desc: 'Les enfants résument en cercle ce dont ils sont le plus fiers.' },
  ] : [
    { num: '1', title: 'Opening Recall', desc: 'Youth reconstruct the previous workshop from memory.' },
    { num: '2', title: 'Mission of the Day', desc: 'A crystal-clear, hands-on goal framed by the mentor.' },
    { num: '3', title: 'Learn & Practice', desc: 'A single new principle, put directly into practice.' },
    { num: '4', title: 'Mindful Break', desc: 'Nutritious snack, free movement, and relaxed conversation.' },
    { num: '5', title: 'Pair Creation', desc: 'Building, debating, testing, or coding in teams of two.' },
    { num: '6', title: 'Feynman Explanation', desc: 'Each student articulates their thinking in simple terms.' },
    { num: '7', title: 'Closing Summary', desc: 'Youth synthesize what they accomplished and celebrate wins.' },
  ];

  return (
    <section className="py-12 sm:py-20 bg-amber-50/30 border-b-2 border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'NOTRE ESPRIT' : 'OUR PHILOSOPHY'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Une famille, pas une salle de classe.' : 'A family, not a lecture hall.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
            {language === 'FR' ? (
              <>Pas d'estrade, pas de hiérarchie, pas de notes affichées au tableau. On apprend ensemble, en cercle. Le coach joue, construit et débat avec les enfants, et il connaît chacun par son prénom.</>
            ) : (
              <>No elevated podiums, no rigid hierarchy, no grades posted on the wall. We learn gathered in circles. The coach builds, codes, debates alongside youth and knows each child by name.</>
            )}
          </p>
        </div>

        {/* The 7 Steps Timeline Box */}
        <div className="bg-white border-3 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-950">
              {language === 'FR' ? 'Le déroulé de chaque séance' : 'The flow of every session'}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-500">
              {language === 'FR' 
                ? 'Ce sont les enfants qui ouvrent et ferment la séance.'
                : 'The children themselves open and close every session.'}
            </p>
          </div>

          <div className="space-y-3">
            {steps.map((st) => (
              <div
                key={st.num}
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-900 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-300 font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {st.num}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-slate-950">{st.title}</h4>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agora face à une école classique */}
        <div className="bg-white border-3 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-xl font-black text-slate-950">
              {language === 'FR' ? 'Agora face à une école classique' : 'Agora vs. Traditional Schooling'}
            </h3>

            {/* Toggle switch */}
            <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-300">
              <button
                onClick={() => setComparisonTab('classique')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  comparisonTab === 'classique'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {language === 'FR' ? 'École classique' : 'Traditional'}
              </button>
              <button
                onClick={() => setComparisonTab('agora')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  comparisonTab === 'agora'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Agora Junior
              </button>
            </div>
          </div>

          {comparisonTab === 'agora' ? (
            <div className="space-y-3 animate-in fade-in duration-200">
              {[
                language === 'FR' ? 'Les enfants parlent, expliquent et construisent' : 'Students speak, explain, and construct actively',
                language === 'FR' ? 'Des cercles, des binômes et des ateliers' : 'Circles, pairs, and hands-on workshops',
                language === 'FR' ? 'Chaque enfant comparé seulement à lui-même' : 'Each child benchmarked only against themselves',
                language === 'FR' ? 'L’erreur fait partie du jeu : on recommence' : 'Errors are celebrated as iterations: we try again',
                language === 'FR' ? 'Un coach proche, comme un grand frère ou une grande sœur' : 'Empathetic mentors who guide like older siblings',
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-600 text-emerald-950 text-xs sm:text-sm font-black shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 animate-in fade-in duration-200">
              {[
                language === 'FR' ? 'L’enseignant parle au tableau, les élèves écoutent immobiles' : 'Teacher speaks at board, students sit silently in rows',
                language === 'FR' ? 'Rangs d’oignon et travail individuel isolé' : 'Isolated individual desk work without peer dialog',
                language === 'FR' ? 'Classement public et compétition stressante' : 'Public rankings and stressful numerical report cards',
                language === 'FR' ? 'La faute est sanctionnée par une mauvaise note' : 'Mistakes are penalized with red ink and deductions',
                language === 'FR' ? 'Distance d’autorité formelle et cours magistral' : 'Formal distance of authority and lecture-heavy instruction',
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-100 border-2 border-slate-400 text-slate-800 text-xs sm:text-sm font-bold"
                >
                  <XCircle className="w-5 h-5 text-slate-500 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inclusion & Darija Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <h4 className="text-base font-black text-slate-950">
              {language === 'FR' ? 'Darija et anglais' : 'Darija & English'}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {language === 'FR' ? (
                <>On explique en darija quand il le faut pour rassurer et ancrer l’idée, et l'anglais prend de plus en plus de place à chaque niveau. Les présentations finales se font en anglais.</>
              ) : (
                <>We explain in Darija whenever necessary to remove emotional friction, while English organically occupies more space at each tier. Final project presentations are delivered proudly in English.</>
              )}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <h4 className="text-base font-black text-slate-950">
              {language === 'FR' ? 'De petits groupes' : 'Small Cohort Sizes'}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {language === 'FR' ? (
                <>Chaque enfant a le temps de parler, d'essayer et d'être écouté. Les groupes sont formés selon le niveau et l'âge pour que personne ne soit laissé de côté.</>
              ) : (
                <>Every child has ample airtime to speak, experiment, and be heard. Cohorts are assembled by readiness level and age so no one is left behind.</>
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
