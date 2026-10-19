import React, { useState } from 'react';
import { Language } from '../types';
import { CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface ParentProgressRadarProps {
  language: Language;
}

export const ParentProgressRadar: React.FC<ParentProgressRadarProps> = ({ language }) => {
  const [activeCompetency, setActiveCompetency] = useState<string | null>(null);

  const axes = language === 'FR' ? [
    { label: 'Communication', current: 4.8, previous: 3.2, angle: 90, desc: 'Clarté du discours, projection vocale et vocabulaire en anglais.' },
    { label: 'Leadership', current: 4.2, previous: 2.8, angle: 162, desc: 'Fédérer son binôme, proposer des solutions et inspirer confiance.' },
    { label: 'Créativité', current: 4.6, previous: 3.8, angle: 234, desc: 'Originalité des designs, pièces de théâtre et astuces de code.' },
    { label: 'Collaboration', current: 4.5, previous: 3.0, angle: 306, desc: 'Partage des tâches, écoute active et entraide constructive.' },
    { label: 'Résolution de pb.', current: 4.7, previous: 3.4, angle: 18, desc: 'Débogage méthodique, persévérance face à l’erreur et tactique.' },
  ] : [
    { label: 'Communication', current: 4.8, previous: 3.2, angle: 90, desc: 'Voice projection, poise, clarity, and English conversational fluency.' },
    { label: 'Leadership', current: 4.2, previous: 2.8, angle: 162, desc: 'Fostering teamwork, proposing actionable ideas, and motivating peers.' },
    { label: 'Creativity', current: 4.6, previous: 3.8, angle: 234, desc: 'Artistic flair, novel robotics mechanisms, and innovative storytelling.' },
    { label: 'Collaboration', current: 4.5, previous: 3.0, angle: 306, desc: 'Constructive pair programming, active listening, and mutual respect.' },
    { label: 'Problem Solving', current: 4.7, previous: 3.4, angle: 18, desc: 'Algorithmic debugging, chess calculation, and mental math speed.' },
  ];

  // Helper to calculate polygon SVG coordinates on a 300x300 viewBox (center: 150, 150, max radius: 95)
  const getCoordinates = (val: number, angleDeg: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    const r = (val / 5) * 95;
    return {
      x: 150 + r * Math.cos(rad),
      y: 150 + r * Math.sin(rad),
    };
  };

  const currentPoints = axes
    .map((a) => {
      const { x, y } = getCoordinates(a.current, a.angle);
      return `${x},${y}`;
    })
    .join(' ');

  const previousPoints = axes
    .map((a) => {
      const { x, y } = getCoordinates(a.previous, a.angle);
      return `${x},${y}`;
    })
    .join(' ');

  const guarantees = language === 'FR' ? [
    'Tout enfant qui vient et qui essaie évolue',
    'Jamais de classement public',
    'Votre enfant n’est comparé qu’à lui-même',
    'Tournage uniquement avec votre accord',
    'Vidéos privées, sauf accord de partage',
    'Données des enfants déclarées à la CNDP',
  ] : [
    'Every child who shows up and makes an effort improves',
    'Zero public leaderboard or competitive rankings',
    'Your child is evaluated strictly against their own prior progress',
    'Video recording strictly with signed parental consent',
    'Private video storage in secure parent portals only',
    'Student privacy strictly registered with Morocco’s CNDP',
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-b-2 border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'POUR LES PARENTS' : 'FOR PARENTS'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Des progrès visibles.' : 'Visible, verifiable progress.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Les coachs notent cinq compétences de 1 à 5, au milieu et à la fin de chaque semestre. Chaque note a une description écrite détaillée.</>
            ) : (
              <>Our coaches benchmark five foundational competencies from 1 to 5, at mid-term and semester completion. Every score includes a narrative qualitative report.</>
            )}
          </p>
        </div>

        {/* Radar Spider Chart Container */}
        <div className="bg-slate-50 rounded-3xl border-3 border-slate-900 p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-6">
          
          <div className="flex flex-col items-center">
            {/* SVG Radar Chart */}
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full h-full select-none">
                {/* Concentric grid webs for 1, 2, 3, 4, 5 */}
                {[1, 2, 3, 4, 5].map((lvl) => {
                  const pts = axes
                    .map((a) => {
                      const { x, y } = getCoordinates(lvl, a.angle);
                      return `${x},${y}`;
                    })
                    .join(' ');
                  return (
                    <polygon
                      key={lvl}
                      points={pts}
                      fill={lvl === 5 ? '#FFFFFF' : 'none'}
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Axes lines from center */}
                {axes.map((a, i) => {
                  const { x, y } = getCoordinates(5, a.angle);
                  return (
                    <line
                      key={i}
                      x1="150"
                      y1="150"
                      x2={x}
                      y2={y}
                      stroke="#CBD5E1"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />
                  );
                })}

                {/* Previous Semester Polygon (dashed outline) */}
                <polygon
                  points={previousPoints}
                  fill="rgba(148, 163, 184, 0.2)"
                  stroke="#64748B"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />

                {/* Current Semester Polygon (vibrant fill with rainbow/gradient) */}
                <polygon
                  points={currentPoints}
                  fill="rgba(16, 185, 129, 0.45)"
                  stroke="#10B981"
                  strokeWidth="3"
                />

                {/* Vertex points */}
                {axes.map((a, i) => {
                  const { x, y } = getCoordinates(a.current, a.angle);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4.5"
                      fill="#0f172a"
                      stroke="#10B981"
                      strokeWidth="2"
                      className="cursor-pointer hover:r-6 transition-all"
                      onClick={() => setActiveCompetency(a.label)}
                    />
                  );
                })}

                {/* Axis Labels */}
                <text x="150" y="24" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">
                  {axes[0].label}
                </text>
                <text x="280" y="110" textAnchor="end" fontSize="10" fontWeight="800" fill="#0f172a">
                  {axes[4].label}
                </text>
                <text x="245" y="275" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">
                  {axes[3].label}
                </text>
                <text x="55" y="275" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">
                  {axes[2].label}
                </text>
                <text x="20" y="110" textAnchor="start" fontSize="10" fontWeight="800" fill="#0f172a">
                  {axes[1].label}
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-4 text-xs font-black text-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-500 border border-slate-900 inline-block" />
                <span>{language === 'FR' ? 'Maintenant' : 'Current'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-0.5 border-t-2 border-dashed border-slate-600 inline-block" />
                <span>{language === 'FR' ? 'Semestre précédent' : 'Previous Semester'}</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-slate-500 text-center mt-3 max-w-md">
              {language === 'FR'
                ? 'Exemple illustratif. Le graphique compare votre enfant uniquement à son graphique précédent, jamais aux autres enfants.'
                : 'Illustrative benchmark. The visualization compares each student solely against their own baseline history, never against peers.'}
            </p>
          </div>

          {/* Trust Guarantees Checklist */}
          <div className="space-y-2 pt-2 border-t-2 border-slate-200">
            {guarantees.map((g, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-xs sm:text-sm font-bold text-slate-900"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{g}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
