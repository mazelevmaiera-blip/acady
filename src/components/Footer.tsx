import React from 'react';
import { Language } from '../types';
import { MessageCircle, Instagram, MapPin, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-[#F6CF56] border-t-2 border-slate-900 text-slate-950 pt-10 pb-24 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Banner Catchphrase */}
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
            {language === 'FR' ? (
              <>
                <div>Construis-le.</div>
                <div>Crée-le.</div>
                <div>Dis-le, en anglais.</div>
              </>
            ) : (
              <>
                <div>Build it.</div>
                <div>Create it.</div>
                <div>Say it, in English.</div>
              </>
            )}
          </div>
        </div>

        {/* Brand & Subtext */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black tracking-tight">Agora</span>
            <span className="bg-slate-900 text-[#F6CF56] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
              Junior
            </span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-800 -mt-2">
            ACADEMY
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 max-w-lg leading-relaxed pt-1">
            {language === 'FR' ? (
              <>Une académie à Kénitra pour les enfants de 7 à 16 ans. Venez visiter, rencontrer les coachs et réserver une séance découverte offerte.</>
            ) : (
              <>An educational academy in Kenitra for youth aged 7 to 16. Come visit, meet our coaches, and book a free discovery session.</>
            )}
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="space-y-2.5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/212660899119"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] hover:bg-slate-50 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-800 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">WhatsApp</div>
              <div className="text-sm font-black text-slate-950 group-hover:text-emerald-700 transition-colors">
                06 60 89 91 19
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/agorajunioracademy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] hover:bg-slate-50 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-pink-100 border border-pink-400 flex items-center justify-center text-pink-700 shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">Instagram</div>
              <div className="text-sm font-black text-slate-950 group-hover:text-pink-600 transition-colors">
                @agorajunioracademy
              </div>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
            <div className="w-9 h-9 rounded-xl bg-blue-100 border border-blue-400 flex items-center justify-center text-blue-800 shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500">{language === 'FR' ? 'Adresse' : 'Address'}</div>
              <div className="text-xs sm:text-sm font-bold text-slate-950 leading-snug">
                6, boulevard Hassan II, Business Center BH2, bureau n° 54, 7e étage, Kénitra
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & CNDP */}
        <div className="pt-4 border-t border-slate-900/20 text-center text-[11px] font-semibold text-slate-800 space-y-1">
          <p>
            © 2026 Agora Junior Academy · Kénitra · {language === 'FR' ? 'Données des enfants protégées par la loi 09-08 et déclarées à la CNDP' : 'Student data protected by Moroccan Law 09-08 & declared to CNDP'}
          </p>
        </div>

      </div>
    </footer>
  );
};
