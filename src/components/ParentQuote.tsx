import React from 'react';
import { Language } from '../types';
import { Quote } from 'lucide-react';

interface ParentQuoteProps {
  language: Language;
}

export const ParentQuote: React.FC<ParentQuoteProps> = ({ language }) => {
  return (
    <section className="bg-slate-950 text-white py-12 sm:py-16 px-4 border-b-2 border-slate-900">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 shadow-[3px_3px_0px_#f59e0b] mb-2">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug">
          {language === 'FR' ? (
            <>« Mon enfant m'a présenté son projet. Il a tout expliqué, en anglais. »</>
          ) : (
            <>“My child presented their project to me. They explained everything, in English.”</>
          )}
        </blockquote>

        <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full my-4" />

        <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto">
          {language === 'FR' ? (
            <>C'est ce que nous voulons que chaque parent puisse dire, à la fin de chaque semestre.</>
          ) : (
            <>This is what we want every parent to be able to say with pride, at the end of every semester.</>
          )}
        </p>
      </div>
    </section>
  );
};
