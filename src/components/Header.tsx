import React, { useState } from 'react';
import { Language } from '../types';
import { Menu, X, ArrowRight, Sparkles, MapPin, Calendar } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = language === 'FR' ? [
    { id: 'accueil', label: 'Accueil' },
    { id: 'activites', label: 'Activités' },
    { id: 'cerveau', label: 'Cerveau' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'lapp', label: 'L’Application' },
    { id: 'preinscription', label: 'Préinscription' },
  ] : [
    { id: 'accueil', label: 'Home' },
    { id: 'activites', label: 'Activities' },
    { id: 'cerveau', label: 'Brain' },
    { id: 'parcours', label: 'Curriculum' },
    { id: 'lapp', label: 'The App' },
    { id: 'preinscription', label: 'Enrollment' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6CF56] border-b-2 border-slate-900">
      {/* Top micro announcement strip */}
      <div className="bg-slate-900 text-amber-300 text-[11px] sm:text-xs font-semibold py-1 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Kénitra</span>
            <span>·</span>
            <span>7 à 16 ans</span>
            <span>·</span>
            <Calendar className="w-3 h-3 text-amber-400 ml-1" />
            <span>{language === 'FR' ? 'Inscriptions Ouvertes 2026-2027' : 'Enrollments Open 2026-2027'}</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-300 text-[11px]">
          <span>WhatsApp : 06 60 89 91 19</span>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div
          onClick={() => onNavigate('accueil')}
          className="cursor-pointer flex items-center gap-1 group select-none"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
                Agora
              </span>
              <span className="bg-slate-900 text-[#F6CF56] text-[10px] sm:text-xs font-extrabold uppercase px-2 py-0.5 rounded-full border border-slate-900 shadow-sm">
                Junior
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-slate-800 -mt-1">
              ACADEMY
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-slate-900">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-amber-900 transition-colors cursor-pointer py-1 border-b-2 border-transparent hover:border-slate-900 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side controls: Language switcher & Primary CTA & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Bilingual Switcher */}
          <div className="flex items-center p-0.5 bg-slate-900/10 rounded-full border border-slate-900">
            <button
              onClick={() => onLanguageChange('FR')}
              className={`px-2.5 py-1 text-xs font-black rounded-full transition-all cursor-pointer ${
                language === 'FR'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('EN')}
              className={`px-2.5 py-1 text-xs font-black rounded-full transition-all cursor-pointer ${
                language === 'EN'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick Registration CTA */}
          <button
            onClick={() => onNavigate('preinscription')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs sm:text-sm font-bold rounded-xl shadow-[2px_2px_0px_#475569] hover:bg-slate-800 hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>{language === 'FR' ? 'Séance découverte' : 'Free Discovery'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-50 border-t-2 border-slate-900 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-900 hover:bg-[#F6CF56] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => handleNavClick('preinscription')}
              className="w-full py-2.5 px-4 bg-slate-900 text-white font-bold rounded-xl text-center shadow-[2px_2px_0px_#334155] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'FR' ? 'Préinscrire mon enfant' : 'Enroll My Child'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
