import React from 'react';
import { Language } from '../types';
import { Home, Sparkles, Brain, Compass, Smartphone } from 'lucide-react';

interface BottomNavProps {
  language: Language;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  language,
  activeSection,
  onNavigate,
}) => {
  const tabs = language === 'FR' ? [
    { id: 'accueil', label: 'Accueil', icon: <Home className="w-4 h-4" /> },
    { id: 'activites', label: 'Activités', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'cerveau', label: 'Cerveau', icon: <Brain className="w-4 h-4" /> },
    { id: 'parcours', label: 'Parcours', icon: <Compass className="w-4 h-4" /> },
    { id: 'lapp', label: 'L’App', icon: <Smartphone className="w-4 h-4" /> },
  ] : [
    { id: 'accueil', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'activites', label: 'Activities', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'cerveau', label: 'Brain', icon: <Brain className="w-4 h-4" /> },
    { id: 'parcours', label: 'Curriculum', icon: <Compass className="w-4 h-4" /> },
    { id: 'lapp', label: 'The App', icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-3 pointer-events-none">
      <nav className="pointer-events-auto bg-slate-950/95 backdrop-blur-md text-white border-2 border-slate-800 rounded-full px-2 py-1.5 shadow-[0px_8px_20px_rgba(0,0,0,0.5)] flex items-center gap-1 sm:gap-2 max-w-md w-full justify-around">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 sm:px-3 rounded-full text-[10px] sm:text-xs font-black transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-slate-950 shadow-sm scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.icon}
              <span className="mt-0.5 tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
