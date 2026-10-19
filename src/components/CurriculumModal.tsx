import React from 'react';
import { Language } from '../types';
import { X, Download, Printer, CheckCircle, FileText } from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  title: string;
  category: string;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  onClose,
  language,
  title,
  category,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_#0f172a] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#F6CF56] p-4 sm:p-5 border-b-2 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-900" />
            <div>
              <div className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                {title}
              </div>
              <div className="text-xs font-bold text-slate-800">
                Agora Junior Academy · {category}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Preview */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          <div className="bg-slate-50 border-2 border-slate-900 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase px-2 py-0.5 rounded bg-amber-300 text-slate-900 border border-slate-900">
                {language === 'FR' ? 'CURSUS OFFICIEL 2026-2027' : 'OFFICIAL SYLLABUS 2026-2027'}
              </span>
              <span className="text-xs font-bold text-slate-500">Kénitra, Maroc</span>
            </div>
            <h4 className="text-xl font-black text-slate-950">
              {language === 'FR' 
                ? 'Programme Pédagogique Triennal (3 Ans · 6 Semestres)'
                : '3-Year Pedagogical Syllabus (3 Years · 6 Semesters)'}
            </h4>
            <p className="text-xs font-semibold text-slate-600">
              {language === 'FR'
                ? "Chaque semestre valide des compétences opérationnelles concrètes et se clôture par une soutenance de projet devant les familles."
                : "Each semester validates tangible operational competencies and concludes with a public project presentation to families."}
            </p>
          </div>

          {/* Breakdown Table */}
          <div className="space-y-3">
            <h5 className="font-black text-slate-950 text-sm uppercase tracking-wider">
              {language === 'FR' ? 'Progression des Semestres' : 'Semester Progression'}
            </h5>
            <div className="space-y-2">
              {[
                { s: 'S1', role: 'Explorateur 1', obj: 'Découverte, posture, premiers réflexes et manipulations' },
                { s: 'S2', role: 'Explorateur 2', obj: 'Projet d’intégration : spectacle de fin d’année & premier prototype' },
                { s: 'S3', role: 'Leader 1', obj: 'Travail en équipe, prise de parole fluide, analyse critique' },
                { s: 'S4', role: 'Leader 2', obj: 'Mini-entreprise Agora Market : budgets, design et production' },
                { s: 'S5', role: 'Expert 1', obj: 'Projet de spécialité poussé et tournois inter-académies' },
                { s: 'S6', role: 'Expert 2', obj: 'Pitch Day en anglais devant jury d’investisseurs et vernissage public' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                    {item.s}
                  </span>
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.role}</div>
                    <div className="text-xs text-slate-600 font-medium">{item.obj}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-900 text-xs font-bold">
            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              {language === 'FR'
                ? 'Document conforme aux normes CNDP et aux directives pédagogiques Agora Junior Academy.'
                : 'Document complies with CNDP privacy guidelines and Agora Junior pedagogical standards.'}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 p-4 border-t-2 border-slate-900 flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-white border-2 border-slate-900 text-slate-900 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{language === 'FR' ? 'Imprimer la brochure' : 'Print Brochure'}</span>
          </button>
          
          <button
            onClick={() => {
              alert(language === 'FR' ? 'Téléchargement de la brochure PDF lancé avec succès !' : 'PDF Brochure download initiated successfully!');
              onClose();
            }}
            className="px-5 py-2.5 bg-slate-950 text-white border-2 border-slate-950 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_#f59e0b]"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>{language === 'FR' ? 'Télécharger le PDF' : 'Download PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
