import React from 'react';
import { Language } from '../types';
import { Video, Lock, Shield, EyeOff, Smile } from 'lucide-react';

interface CameraMomentsSectionProps {
  language: Language;
}

export const CameraMomentsSection: React.FC<CameraMomentsSectionProps> = ({ language }) => {
  const moments = language === 'FR' ? [
    {
      sem: 'SEMESTRE 1 · EXPLORATEURS',
      title: '« Hello, I’m… »',
      duration: '30 s',
      desc: 'Se présenter face caméra en anglais : son prénom, son âge, ce qu’il aime et son projet du semestre.',
    },
    {
      sem: 'SEMESTRE 2 · EXPLORATEURS',
      title: 'Mon interview',
      duration: '1 min',
      desc: 'Interviewer un camarade : poser des questions avec naturel, écouter attentivement et relancer.',
    },
    {
      sem: 'SEMESTRE 3 · LEADERS',
      title: 'Le journal d’Agora',
      duration: '2 min',
      desc: 'Présenter les actualités de la classe comme à la télévision, face au prompteur.',
    },
    {
      sem: 'SEMESTRE 4 · LEADERS',
      title: 'Le podcast de la classe',
      duration: '5 min',
      desc: 'Enregistrer un épisode de podcast audio-vidéo en équipe avec un invité spécial.',
    },
    {
      sem: 'SEMESTRE 5 · EXPERTS',
      title: 'Ma campagne',
      duration: '1 min',
      desc: 'Une vidéo de campagne percutante pour le conseil des jeunes ou l’élection simulée.',
    },
    {
      sem: 'SEMESTRE 6 · EXPERTS',
      title: 'Le pitch',
      duration: '2 min',
      desc: 'La vidéo de pitch de sa startup, répétée avant le Pitch Day en direct sur scène.',
    },
  ] : [
    {
      sem: 'SEMESTER 1 · EXPLORERS',
      title: '“Hello, I’m…”',
      duration: '30 s',
      desc: 'Introducing themselves on camera in English: name, age, favorite creations, and first semester showcase.',
    },
    {
      sem: 'SEMESTER 2 · EXPLORERS',
      title: 'My First Interview',
      duration: '1 min',
      desc: 'Interviewing a classmate: asking follow-up questions with spontaneity, listening, and conversing.',
    },
    {
      sem: 'SEMESTER 3 · LEADERS',
      title: 'Agora TV Newsroom',
      duration: '2 min',
      desc: 'Broadcasting the weekly academy news behind an anchor desk with a teleprompter.',
    },
    {
      sem: 'SEMESTER 4 · LEADERS',
      title: 'Class Podcast Studio',
      duration: '5 min',
      desc: 'Recording a dynamic team podcast episode with audio microphones and guest interviews.',
    },
    {
      sem: 'SEMESTER 5 · EXPERTS',
      title: 'Campaign Keynote',
      duration: '1 min',
      desc: 'A persuasive campaign video rallying votes for simulated youth parliament elections.',
    },
    {
      sem: 'SEMESTER 6 · EXPERTS',
      title: 'The Startup Pitch',
      duration: '2 min',
      desc: 'A venture pitch video rehearsed and perfected prior to live keynote presentation before the jury.',
    },
  ];

  const guarantees = language === 'FR' ? [
    { icon: <Lock className="w-4 h-4 text-amber-500" />, text: 'Aucun tournage sans votre accord écrit' },
    { icon: <EyeOff className="w-4 h-4 text-emerald-500" />, text: 'Les vidéos restent privées dans votre espace parents' },
    { icon: <Shield className="w-4 h-4 text-blue-500" />, text: 'Rien n’est publié sans une autorisation écrite spécifique' },
    { icon: <Smile className="w-4 h-4 text-pink-500" />, text: 'Enfant timide ? Il commence par sa voix seule, ou en petit groupe. Personne n’est forcé.' },
  ] : [
    { icon: <Lock className="w-4 h-4 text-amber-500" />, text: 'Zero recording without prior written parental consent' },
    { icon: <EyeOff className="w-4 h-4 text-emerald-500" />, text: 'Videos remain private inside your secure parent dashboard' },
    { icon: <Shield className="w-4 h-4 text-blue-500" />, text: 'Nothing is ever published publicly without explicit signed authorization' },
    { icon: <Smile className="w-4 h-4 text-pink-500" />, text: 'Shy child? They can begin with voice-only or gentle pair recordings. No pressure.' },
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-900 text-white border-b-2 border-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-pink-500 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-white/40 shadow-sm">
            {language === 'FR' ? 'MOMENTS CAMÉRA' : 'CAMERA MILESTONES'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === 'FR' ? 'Un moment caméra chaque semestre. Sa confiance, en vidéo.' : 'One camera milestone each semester. Visible confidence, on video.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-300 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Chaque semestre, votre enfant prépare une courte vidéo en anglais. Comparer la vidéo du semestre 1 et celle du semestre 6, c'est la meilleure preuve de progrès.</>
            ) : (
              <>Each semester, your child prepares a short video in English. Comparing their Semester 1 video to their Semester 6 presentation is the most moving, incontrovertible evidence of their transformation.</>
            )}
          </p>
        </div>

        {/* 6 Viewfinder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moments.map((m, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-3xl bg-slate-950 border-2 border-slate-700/80 shadow-[4px_4px_0px_#000000] space-y-3 group hover:border-pink-500 transition-colors"
            >
              {/* Viewfinder corner brackets */}
              <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-slate-600 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-slate-600 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-slate-600 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-slate-600 rounded-br-sm pointer-events-none" />

              {/* Card Top: REC badge & duration */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-black text-red-500 tracking-wider">REC</span>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 ml-1">
                    {m.sem}
                  </span>
                </div>
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 tabular-nums">
                  {m.duration}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h4 className="text-xl font-black text-white group-hover:text-pink-400 transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Grid */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guarantees.map((g, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-700 text-xs sm:text-sm font-bold text-slate-200"
              >
                <div className="p-2 rounded-xl bg-slate-800 shrink-0">
                  {g.icon}
                </div>
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
