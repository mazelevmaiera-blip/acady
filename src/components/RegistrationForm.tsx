import React, { useState } from 'react';
import { ActivityId, Language } from '../types';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, MessageSquare, Phone, User, Heart } from 'lucide-react';

interface RegistrationFormProps {
  language: Language;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ language }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState<{
    childName: string;
    parentName: string;
    phone: string;
    childAge: string;
    activities: ActivityId[];
    timeSlot: string;
    message: string;
  }>({
    childName: '',
    parentName: '',
    phone: '',
    childAge: '8-10',
    activities: ['lab', 'voices'],
    timeSlot: 'samedi_matin',
    message: '',
  });

  const handleActivityToggle = (id: ActivityId) => {
    if (formData.activities.includes(id)) {
      if (formData.activities.length > 1) {
        setFormData({ ...formData, activities: formData.activities.filter((a) => a !== id) });
      }
    } else {
      setFormData({ ...formData, activities: [...formData.activities, id] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="preinscription" className="py-12 sm:py-20 bg-slate-900 text-white border-b-2 border-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#F6CF56] text-slate-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg">
            {language === 'FR' ? 'PRÉINSCRIPTION 2026-2027' : 'ENROLLMENT 2026-2027'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {language === 'FR' ? (
              <>Réservez sa place, et sa séance découverte offerte.</>
            ) : (
              <>Reserve their spot and their free discovery workshop.</>
            )}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-300 leading-relaxed">
            {language === 'FR' ? (
              <>Les places sont limitées et les groupes restent petits. Remplissez ce formulaire en deux minutes : nous vous contactons rapidement sur WhatsApp pour valider l'inscription et répondre à vos questions.</>
            ) : (
              <>Seats are strictly limited to preserve small mentor-to-student ratios. Complete this 2-minute reservation: our team contacts you promptly via WhatsApp to confirm your discovery session.</>
            )}
          </p>
        </div>

        {/* 3 Guarantees */}
        <div className="space-y-2">
          {[
            language === 'FR' ? 'Votre enfant essaie avant de s’inscrire' : 'Your child experiences a full trial session first',
            language === 'FR' ? 'Vous rencontrez les coachs et visitez les lieux à Kénitra' : 'Meet the coaches and tour our modern campus in Kenitra',
            language === 'FR' ? 'Aucun engagement à ce stade' : 'Zero binding financial commitment at this stage',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Multi-Step Card */}
        <div className="bg-white text-slate-900 rounded-3xl border-3 border-slate-900 shadow-[8px_8px_0px_#0f172a] p-6 sm:p-8 space-y-6">
          
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-600 text-emerald-700 mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                {language === 'FR' ? 'Demande bien reçue !' : 'Reservation Received!'}
              </h3>
              <p className="text-sm font-semibold text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'FR' ? (
                  <>Merci <strong>{formData.parentName || 'Chers parents'}</strong> ! Nous avons bien réservé la séance découverte de <strong>{formData.childName || 'votre enfant'}</strong>. Notre responsable pédagogique vous contactera par WhatsApp au <strong>{formData.phone || '06 60 89 91 19'}</strong> sous 24h.</>
                ) : (
                  <>Thank you <strong>{formData.parentName || 'Dear Parent'}</strong>! We have reserved the free discovery slot for <strong>{formData.childName || 'your child'}</strong>. Our team will message you via WhatsApp at <strong>{formData.phone}</strong> within 24 hours.</>
                )}
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/212660899119?text=${encodeURIComponent(`Bonjour Agora Junior Academy, j'ai réservé une séance découverte pour mon enfant ${formData.childName}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2xl shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'FR' ? 'Ouvrir WhatsApp direct' : 'Open WhatsApp Direct'}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Stepper Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black text-slate-500">
                  <span className={step === 1 ? 'text-slate-950 font-black' : ''}>
                    1. {language === 'FR' ? 'Votre enfant et vous' : 'Child & Parent'}
                  </span>
                  <span className={step === 2 ? 'text-slate-950 font-black' : ''}>
                    2. {language === 'FR' ? 'Ses activités' : 'Activities'}
                  </span>
                  <span className={step === 3 ? 'text-slate-950 font-black' : ''}>
                    3. {language === 'FR' ? 'Un mot pour nous' : 'Final Step'}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-xl font-black text-slate-950">
                    {language === 'FR' ? 'Votre enfant et vous' : 'Your Child & Contact Details'}
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>{language === 'FR' ? 'Nom et prénom de l’enfant *' : 'Child full name *'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex. Adam Benali"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>{language === 'FR' ? 'Nom et prénom du responsable légal *' : 'Parent / Legal guardian name *'}</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex. Salma Benali"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>{language === 'FR' ? 'Votre numéro de téléphone / WhatsApp *' : 'Phone / WhatsApp number *'}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (formData.childName && formData.parentName && formData.phone) {
                          setStep(2);
                        } else {
                          alert(language === 'FR' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill in all required fields.');
                        }
                      }}
                      className="px-6 py-3 bg-[#F6CF56] hover:bg-amber-400 text-slate-950 font-black text-sm rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] hover:shadow-none transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>{language === 'FR' ? 'Continuer' : 'Continue'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Activities & Age */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-xl font-black text-slate-950">
                    {language === 'FR' ? 'Ses activités préférées' : 'Preferred Activities & Age'}
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'FR' ? 'Tranche d’âge de votre enfant' : 'Child age group'}
                    </label>
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900 font-bold text-sm bg-white"
                    >
                      <option value="7-9">7 à 9 ans (Explorateurs Juniors)</option>
                      <option value="10-12">10 à 12 ans (Explorateurs & Leaders)</option>
                      <option value="13-16">13 à 16 ans (Leaders & Experts)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'FR' ? 'Activités souhaitées pour l’essai (choix multiple)' : 'Selected discovery activities'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: 'lab', label: 'Agora Lab (Robotique & Code)' },
                        { id: 'voices', label: 'Agora Voices (Anglais & Scène)' },
                        { id: 'tactics', label: 'Agora Tactics (Échecs & Stratégie)' },
                        { id: 'numbers', label: 'Agora Numbers (Calcul Mental)' },
                        { id: 'studio', label: 'Agora Studio (Arts & Calligraphie)' },
                      ].map((item) => {
                        const checked = formData.activities.includes(item.id as ActivityId);
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleActivityToggle(item.id as ActivityId)}
                            className={`p-3 rounded-xl border-2 text-left text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                              checked
                                ? 'bg-amber-100 border-slate-900 text-slate-950 font-black shadow-sm'
                                : 'bg-slate-50 border-slate-300 text-slate-600'
                            }`}
                          >
                            <span>{item.label}</span>
                            {checked && <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'FR' ? 'Créneau de préférence' : 'Preferred slot'}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900 font-bold text-sm bg-white"
                    >
                      <option value="mercredi_aprem">Mercredi après-midi (14h30 - 17h30)</option>
                      <option value="samedi_matin">Samedi matin (09h30 - 12h30)</option>
                      <option value="samedi_aprem">Samedi après-midi (14h30 - 17h30)</option>
                      <option value="dimanche_matin">Dimanche matin (09h30 - 12h30)</option>
                    </select>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-100"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{language === 'FR' ? 'Retour' : 'Back'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#F6CF56] hover:bg-amber-400 text-slate-950 font-black text-sm rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] hover:shadow-none transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>{language === 'FR' ? 'Continuer' : 'Continue'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Notes & Final Submit */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-xl font-black text-slate-950">
                    {language === 'FR' ? 'Un mot pour nous' : 'A message for our coaches'}
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      {language === 'FR'
                        ? 'Centres d’intérêt de votre enfant, questions ou particularités (facultatif)'
                        : 'Child passions, personality, or specific questions (optional)'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={language === 'FR' ? 'Ex. Passionné de Lego, un peu timide au début, adore dessiner...' : 'E.g. Loves building, slightly shy at first, eager to learn English...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-xs font-semibold text-slate-800 space-y-1">
                    <div className="font-extrabold text-slate-950 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>{language === 'FR' ? 'Récapitulatif de votre réservation' : 'Reservation Summary'}</span>
                    </div>
                    <div>• {formData.childName} ({formData.childAge} ans)</div>
                    <div>• Contact WhatsApp : {formData.phone}</div>
                    <div>• {formData.activities.length} activité(s) sélectionnée(s)</div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-100"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{language === 'FR' ? 'Retour' : 'Back'}</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-slate-950 text-white font-black text-sm sm:text-base rounded-2xl border-2 border-slate-950 shadow-[4px_4px_0px_#f59e0b] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>{language === 'FR' ? 'Valider la préinscription offerte' : 'Confirm Free Trial Session'}</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
