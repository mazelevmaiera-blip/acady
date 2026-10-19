import React from 'react';
import { Language } from '../types';
import { Trophy, Star, Users, Flag, Sparkles } from 'lucide-react';

interface ParcoursSectionProps {
  language: Language;
}

export const ParcoursSection: React.FC<ParcoursSectionProps> = ({ language }) => {
  const years = language === 'FR' ? [
    {
      year: 'ANNÉE 1',
      title: 'Explorateurs',
      tagline: 'Découvrir chaque activité, prendre confiance, apprendre à apprendre.',
      bgHeader: 'bg-[#F6CF56] text-slate-950',
      semesters: [
        {
          num: 'SEMESTRE 1',
          name: 'La première présentation',
          desc: 'Votre enfant vous montre ce qu’il a construit, dessiné et appris, et l’explique lui-même.',
        },
        {
          num: 'SEMESTRE 2',
          name: 'L’Explorers Show',
          desc: 'Le spectacle de fin d’année : robots, chansons, théâtre, œuvres exposées et mini-tournoi.',
        },
      ],
    },
    {
      year: 'ANNÉE 2',
      title: 'Leaders',
      tagline: 'Des projets plus ambitieux, en équipe, et une première mini-entreprise.',
      bgHeader: 'bg-purple-600 text-white',
      semesters: [
        {
          num: 'SEMESTRE 3',
          name: 'Le Demo Day',
          desc: 'Chaque Leader présente un projet et répond aux questions du public.',
        },
        {
          num: 'SEMESTRE 4',
          name: 'Junior League et Market Day',
          desc: 'Une première mini-entreprise en équipe, et une journée pour présenter ses créations.',
        },
      ],
    },
    {
      year: 'ANNÉE 3',
      title: 'Experts',
      tagline: 'Une spécialité, une startup, et la prise de parole en anglais.',
      bgHeader: 'bg-slate-900 text-amber-300',
      semesters: [
        {
          num: 'SEMESTRE 5',
          name: 'Le projet de spécialité',
          desc: 'Un vrai projet dans sa spécialité, et un tournoi organisé par les Experts.',
        },
        {
          num: 'SEMESTRE 6',
          name: 'L’Agora Pitch Day',
          desc: 'La finale de la Startup League : chaque équipe présente sa startup en anglais, devant un jury.',
        },
      ],
    },
  ] : [
    {
      year: 'YEAR 1',
      title: 'Explorers',
      tagline: 'Explore every activity, cultivate confidence, learn how to learn.',
      bgHeader: 'bg-[#F6CF56] text-slate-950',
      semesters: [
        {
          num: 'SEMESTER 1',
          name: 'The First Presentation',
          desc: 'Your child shows what they designed, wired, and learned, articulating it in their own words.',
        },
        {
          num: 'SEMESTER 2',
          name: 'The Explorers Show',
          desc: 'Year-end festival: robots, English songs, theater skits, art exhibitions, and chess matches.',
        },
      ],
    },
    {
      year: 'YEAR 2',
      title: 'Leaders',
      tagline: 'Ambitious team collaboration and launching their first mini-enterprise.',
      bgHeader: 'bg-purple-600 text-white',
      semesters: [
        {
          num: 'SEMESTER 3',
          name: 'Demo Day',
          desc: 'Every Leader presents their prototype and fields questions from parents and guests.',
        },
        {
          num: 'SEMESTER 4',
          name: 'Junior League & Market Day',
          desc: 'A full team mini-company, and a lively expo day to showcase their creations.',
        },
      ],
    },
    {
      year: 'YEAR 3',
      title: 'Experts',
      tagline: 'Specialization, high-stakes startup pitch, and natural English fluency.',
      bgHeader: 'bg-slate-900 text-amber-300',
      semesters: [
        {
          num: 'SEMESTER 5',
          name: 'Specialty Capstone Project',
          desc: 'An advanced independent project in their discipline, and hosting a community tournament.',
        },
        {
          num: 'SEMESTER 6',
          name: 'The Agora Pitch Day',
          desc: 'Startup League Grand Finale: teams present their startup in English to an investor panel.',
        },
      ],
    },
  ];

  return (
    <section id="parcours" className="py-12 sm:py-20 bg-white border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'LE PARCOURS' : 'THE PATHWAY'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Trois ans, six semestres, un projet à chaque fois.' : 'Three years, six semesters, a tangible project every time.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Un niveau dure un semestre. Chaque semestre se termine par un projet que votre enfant vous présente. Le passage au niveau suivant se fait sur un projet réussi, pas sur l'âge.</>
            ) : (
              <>Each tier spans one semester. Every semester concludes with a capstone project presented to families. Progression to the next rank is based on verified mastery, not chronological age.</>
            )}
          </p>
        </div>

        {/* 3 Years Cards */}
        <div className="space-y-6">
          {years.map((yr, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-3 border-slate-900 bg-slate-50 overflow-hidden shadow-[6px_6px_0px_#0f172a]"
            >
              {/* Year Header Banner */}
              <div className={`p-5 sm:p-6 border-b-2 border-slate-900 ${yr.bgHeader} flex flex-col sm:flex-row sm:items-center justify-between gap-2`}>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest opacity-90">
                    {yr.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    {yr.title}
                  </h3>
                </div>
                <div className="text-xs sm:text-sm font-bold opacity-90 max-w-md">
                  {yr.tagline}
                </div>
              </div>

              {/* Semesters Container */}
              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {yr.semesters.map((sem, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                          {sem.num}
                        </span>
                      </div>
                      <h4 className="text-base font-black text-slate-950">
                        {sem.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                        {sem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Parent Milestone Note */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800">
          <Star className="w-5 h-5 text-amber-500 shrink-0" />
          <span>
            {language === 'FR' ? (
              <>Chaque projet est suivi d'une rencontre parents : on fait le point ensemble sur les progrès de votre enfant, ses envies et la suite de son parcours.</>
            ) : (
              <>Each capstone project is followed by an individualized parent meeting: we review your child's cognitive milestones, passions, and next steps.</>
            )}
          </span>
        </div>

      </div>
    </section>
  );
};
