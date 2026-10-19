import React from 'react';
import { Language } from '../types';
import { Brain, MessageSquare, Users, Rocket, BarChart3, ShieldCheck } from 'lucide-react';

interface ScienceSectionProps {
  language: Language;
}

export const ScienceSection: React.FC<ScienceSectionProps> = ({ language }) => {
  return (
    <section className="py-12 sm:py-20 bg-white border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'POURQUOI ÇA COMPTE' : 'WHY IT MATTERS'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Une méthode fondée sur la science.' : 'A methodology rooted in science.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Nous n'avons pas inventé notre façon d'enseigner. Chaque étape de nos séances s'appuie sur des méthodes étudiées par la recherche en éducation, et mesurées sur des milliers d'élèves.</>
            ) : (
              <>We didn’t invent our instructional techniques out of thin air. Each phase of our workshops is grounded in peer-reviewed cognitive science and measured across thousands of students.</>
            )}
          </p>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-300 border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-sm">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black text-slate-950">
              {language === 'FR' ? 'Le rappel actif' : 'Active Recall'}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {language === 'FR' ? (
                <>Redire de mémoire ce qu'on a appris, au lieu de relire. C'est pourquoi les enfants ouvrent et ferment chaque séance.</>
              ) : (
                <>Recalling from memory rather than passively rereading. This is why children systematically open and close every session.</>
              )}
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-pink-50/60 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-pink-400 border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-sm">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black text-slate-950">
              {language === 'FR' ? 'La méthode Feynman' : 'The Feynman Technique'}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {language === 'FR' ? (
                <>Expliquer une idée avec des mots simples, comme à un plus petit. Si on sait l'expliquer, on l'a comprise.</>
              ) : (
                <>Explaining a concept in simple, accessible language. If a student can explain it clearly, they truly comprehend it.</>
              )}
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-300 border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black text-slate-950">
              {language === 'FR' ? 'Apprendre entre pairs' : 'Peer-to-Peer Learning'}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {language === 'FR' ? (
                <>Les enfants travaillent en binôme et changent de rôle : l'un coache, l'autre joue, puis on échange.</>
              ) : (
                <>Youth collaborate in pairs and swap responsibilities: one coaches while the other creates, then they trade places.</>
              )}
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-300 border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-sm">
              <Rocket className="w-5 h-5" />
            </div>
            <h4 className="text-base font-black text-slate-950">
              {language === 'FR' ? 'Apprendre par projet' : 'Project-Based Mastery'}
            </h4>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
              {language === 'FR' ? (
                <>Chaque semestre aboutit à un vrai projet concret, présenté avec fierté devant les parents.</>
              ) : (
                <>Every semester culminates in a tangible, working project presented with genuine pride to parents.</>
              )}
            </p>
          </div>
        </div>

        {/* Evidence & Research Charts */}
        <div className="space-y-6 pt-4">
          
          {/* Chart 1: Des mois de progrès en plus */}
          <div className="p-5 sm:p-6 rounded-3xl border-2 border-slate-900 bg-slate-50 shadow-[4px_4px_0px_#0f172a] space-y-4">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-black text-slate-950">
                {language === 'FR'
                  ? 'Des mois de progrès en plus, en un an'
                  : 'Additional months of cognitive progress in one year'}
              </h4>
              <p className="text-xs font-bold text-slate-500">
                {language === 'FR'
                  ? 'Par rapport aux classes ordinaires · Education Endowment Foundation, 2025'
                  : 'Compared to standard lecture classrooms · Education Endowment Foundation, 2025'}
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: language === 'FR' ? 'Planifier sa pensée' : 'Metacognitive planning', gain: '+8 mois', val: 90 },
                { label: language === 'FR' ? 'Expliquer à un camarade' : 'Peer tutoring & explanation', gain: '+6 mois', val: 75 },
                { label: language === 'FR' ? 'Apprendre en parlant' : 'Oral communicative dialog', gain: '+6 mois', val: 75 },
                { label: language === 'FR' ? 'Travailler en binôme' : 'Collaborative pair problem-solving', gain: '+5 mois', val: 62 },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-black text-slate-800">
                    <span>{item.label}</span>
                    <span className="text-blue-700">{item.gain}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      style={{ width: `${item.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Chart 2: Ce dont on se souvient */}
            <div className="p-5 sm:p-6 rounded-3xl border-2 border-slate-900 bg-slate-50 shadow-[4px_4px_0px_#0f172a] space-y-4">
              <div>
                <h4 className="text-base font-black text-slate-950">
                  {language === 'FR' ? 'Ce dont on se souvient une semaine après' : 'Memory retention after one week'}
                </h4>
                <p className="text-xs font-bold text-slate-500">
                  {language === 'FR' ? 'Redire la leçon fait retenir bien plus que la relire' : 'Active retrieval outperforms passive rereading'}
                </p>
              </div>

              <div className="flex items-end justify-around h-40 pt-4 border-b-2 border-slate-200">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-black text-slate-800">40 %</span>
                  <div className="w-16 h-20 bg-stone-300 rounded-t-xl border-2 border-slate-900" />
                  <span className="text-[11px] font-bold text-slate-600 text-center">
                    {language === 'FR' ? 'Ils relisent' : 'Passive read'}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-black text-emerald-700">61 %</span>
                  <div className="w-16 h-32 bg-emerald-500 rounded-t-xl border-2 border-slate-900 shadow-sm" />
                  <span className="text-[11px] font-bold text-slate-900 text-center">
                    {language === 'FR' ? 'Ils redisent de mémoire' : 'Active recall'}
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-medium text-slate-400 text-center">
                Roediger & Karpicke, Science (2006)
              </div>
            </div>

            {/* Chart 3: Compétences recherchées */}
            <div className="p-5 sm:p-6 rounded-3xl border-2 border-slate-900 bg-slate-50 shadow-[4px_4px_0px_#0f172a] space-y-4">
              <div>
                <h4 className="text-base font-black text-slate-950">
                  {language === 'FR' ? 'Compétences les plus recherchées' : 'Most sought-after future skills'}
                </h4>
                <p className="text-xs font-bold text-slate-500">
                  {language === 'FR' ? 'Part des employeurs qui les citent comme essentielles' : 'Share of employers deeming these vital'}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {[
                  { label: language === 'FR' ? 'Analyse & Logique' : 'Analytical Thinking', pct: 69 },
                  { label: language === 'FR' ? 'S’adapter' : 'Flexibility & Resilience', pct: 67 },
                  { label: language === 'FR' ? 'Diriger & Inspirer' : 'Leadership & Influence', pct: 61 },
                  { label: language === 'FR' ? 'Créativité' : 'Creative Problem Solving', pct: 57 },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-slate-800">
                      <span>{item.label}</span>
                      <span className="font-mono font-black">{item.pct} %</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
                      <div
                        className="h-full bg-pink-500 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] font-medium text-slate-400 text-center pt-1">
                World Economic Forum, Future of Jobs (2025)
              </div>
            </div>
          </div>

        </div>

        {/* Scientific Project & CNDP Disclosure */}
        <div className="p-5 rounded-2xl bg-blue-50 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-blue-900">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>{language === 'FR' ? 'Agora est aussi un projet scientifique' : 'Agora is also an educational research initiative'}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
            {language === 'FR' ? (
              <>Chaque semestre, nous observons les progrès réels des enfants (graphique de compétences, projets, retours des familles) : nous analysons ce qui fonctionne pour affiner continuellement les parcours. Les données restent strictement anonymes, protégées par la loi 09-08 et déclarées à la CNDP.</>
            ) : (
              <>Each semester, we record empirical student progress metrics (competency spider charts, project milestones, parental insights) to continuously enhance our syllabus. All records remain fully anonymous, protected under Morocco’s 09-08 privacy statute and registered with the CNDP.</>
            )}
          </p>
        </div>

      </div>
    </section>
  );
};
