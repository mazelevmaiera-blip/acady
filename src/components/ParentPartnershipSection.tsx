import React from 'react';
import { Language } from '../types';
import { Trophy, Users, MessageCircle, Smartphone, Calendar, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface ParentPartnershipSectionProps {
  language: Language;
}

export const ParentPartnershipSection: React.FC<ParentPartnershipSectionProps> = ({ language }) => {
  const cards = language === 'FR' ? [
    {
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      title: 'Un projet à chaque fin de semestre',
      desc: 'Un robot, une pièce de théâtre, une œuvre, un tournoi, un pitch. Vous voyez ce qu’il sait faire, et il vous l’explique lui-même.',
    },
    {
      icon: <Users className="w-5 h-5 text-pink-500" />,
      title: 'Une rencontre parents chaque semestre',
      desc: 'Pour faire le bilan, écouter vos suggestions et parler de ses progrès au quotidien : école, lecture, sport, écrans, confiance en lui.',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-500" />,
      title: 'Un groupe WhatsApp des parents',
      desc: 'Les nouvelles des séances, les annonces et les rappels, au même endroit. Les photos d’enfants n’y sont partagées qu’avec l’accord des parents.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-500" />,
      title: 'L’espace parents de l’application',
      desc: 'Un graphique clair des compétences, ses projets et ses vidéos, qui restent privés. Votre enfant n’est comparé qu’à lui-même.',
    },
  ] : [
    {
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      title: 'A Capstone Project Every Semester',
      desc: 'A physical robot, theater sketch, artwork, tournament, or venture pitch. You see what they built, explained by them directly.',
    },
    {
      icon: <Users className="w-5 h-5 text-pink-500" />,
      title: 'A Parent Conference Every Semester',
      desc: 'To review milestones, listen to feedback, and discuss real-world progress: school, reading, sports, screen habits, and self-confidence.',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-emerald-500" />,
      title: 'An Active Parent WhatsApp Community',
      desc: 'Logistical updates, workshop highlights, and session notes in one place. Media is only shared with explicit parental permissions.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-blue-500" />,
      title: 'Dedicated Parent Dashboard in App',
      desc: 'Clear radar progress maps, portfolio archives, and milestone videos kept private. Zero public rankings or comparisons to other children.',
    },
  ];

  const timelineSteps = language === 'FR' ? [
    { label: 'Rentrée', desc: 'Rencontre d’accueil : les objectifs du semestre et vos attentes.' },
    { label: 'Chaque semaine', desc: 'Nouvelles sur WhatsApp et suivi des progrès dans l’application.' },
    { label: 'Fin de semestre', desc: 'Présentation publique du projet de votre enfant, devant les familles.' },
    { label: 'Juste après', desc: 'Rencontre bilan : progrès, suggestions et choix d’activités.' },
  ] : [
    { label: 'Term Kickoff', desc: 'Welcome conference: semester objectives and family expectations.' },
    { label: 'Weekly Rhythm', desc: 'Workshop recaps on WhatsApp and progress tracking in the app.' },
    { label: 'Semester Climax', desc: 'Live project showcase presented by your child to invited families.' },
    { label: 'Right After', desc: 'One-on-one parent feedback conference and elective selections.' },
  ];

  const rooms = language === 'FR' ? [
    { name: 'Salle Lab', desc: 'Ordinateurs, tables de montage et kits de robotique rangés en sécurité.', color: 'bg-emerald-500' },
    { name: 'Scène Voices', desc: 'Une petite scène chaleureuse, un écran et un coin tournage prompteur.', color: 'bg-pink-500' },
    { name: 'Tactics & Numbers', desc: 'Échiquiers de compétition, plateaux de jeu, bouliers soroban et casse-têtes.', color: 'bg-blue-600' },
    { name: 'Atelier Studio', desc: 'Tables d’art spacieuses, encres de Chine, calames, argile et tablettes.', color: 'bg-teal-500' },
  ] : [
    { name: 'Lab Workshop', desc: 'Workstations, assembly tables, and secured robotics equipment.', color: 'bg-emerald-500' },
    { name: 'Voices Stage', desc: 'An intimate theater stage, acoustic backdrop, and teleprompter studio.', color: 'bg-pink-500' },
    { name: 'Tactics & Numbers Hub', desc: 'Tournament chess boards, Soroban Japanese abaci, and logic puzzles.', color: 'bg-blue-600' },
    { name: 'Studio Atelier', desc: 'Art tables, bamboo calami, sumi calligraphy ink, sculpting clay.', color: 'bg-teal-500' },
  ];

  const safetyCharter = language === 'FR' ? [
    'Des coachs formés et une charte de protection de l’enfance écrite',
    'De petits groupes, toujours encadrés et bienveillants',
    'Assurance et trousse de premiers secours sur place à Kénitra',
    'L’enfant ne repart qu’avec un adulte que vous avez autorisé par écrit',
    'Tournage et photos uniquement avec votre accord écrit préalable',
    'Données protégées par la loi 09-08 et déclarées à la CNDP',
  ] : [
    'Certified coaches and a written Child Protection Charter',
    'Small student cohorts with constant, supportive supervision',
    'Fully insured premises with first aid station on-site in Kenitra',
    'Children only released to guardians authorized explicitly in writing',
    'Photography and video recorded only with prior signed consent',
    'Student data strictly compliant with Moroccan Law 09-08 and CNDP',
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b-2 border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
            {language === 'FR' ? 'POUR LES PARENTS' : 'FOR PARENTS'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'FR' ? 'Le parent au cœur de tout.' : 'Parents at the center of everything.'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
            {language === 'FR' ? (
              <>Vous connaissez votre enfant mieux que personne. Chez Agora, vous êtes un partenaire, à chaque étape : vous voyez ce qu'il fait, vous savez où il en est, et votre avis fait évoluer le programme.</>
            ) : (
              <>You know your child better than anyone. At Agora, you are a co-educator: you observe what they build, follow their real-time growth, and your insights help shape our pedagogy.</>
            )}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 w-max">
                  {c.icon}
                </div>
                <h4 className="text-base font-black text-slate-950">{c.title}</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Un semestre avec vous Timeline */}
        <div className="bg-[#F6CF56] rounded-3xl border-3 border-slate-900 p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-5">
          <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>{language === 'FR' ? 'Un semestre avec vous' : 'A Semester in Partnership with You'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {timelineSteps.map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-sm space-y-1"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  <span className="text-xs font-black text-slate-900 uppercase">{s.label}</span>
                </div>
                <p className="text-xs font-semibold text-slate-700 leading-snug pt-1">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Un lieu sûr, pensé pour apprendre */}
        <div className="bg-white rounded-3xl border-3 border-slate-900 p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-5">
          <h3 className="text-xl font-black text-slate-950">
            {language === 'FR' ? 'Un lieu sûr, pensé pour apprendre' : 'A safe, purpose-built campus in Kenitra'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rooms.map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-900 shadow-xs"
              >
                <div className={`w-3.5 h-3.5 rounded-full ${r.color} shrink-0 mt-1`} />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-slate-950">{r.name}</h4>
                  <p className="text-xs font-medium text-slate-600">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sécurité et confiance Charter */}
        <div className="bg-emerald-50 rounded-3xl border-3 border-slate-900 p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] space-y-5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-800" />
            <h3 className="text-xl font-black text-emerald-950">
              {language === 'FR' ? 'Sécurité et confiance' : 'Safety, Compliance & Trust'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {safetyCharter.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-white border border-emerald-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
