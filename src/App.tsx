import React, { useState, useEffect } from 'react';
import { ActivityId, Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RunningMarquee } from './components/RunningMarquee';
import { ParentQuote } from './components/ParentQuote';
import { AgoraNumbers } from './components/AgoraNumbers';
import { Calculator } from './components/Calculator';
import { ActivitiesSection } from './components/ActivitiesSection';
import { CurriculumBrochures } from './components/CurriculumBrochures';
import { BrainSection } from './components/BrainSection';
import { ScienceSection } from './components/ScienceSection';
import { OurSpiritSection } from './components/OurSpiritSection';
import { ParcoursSection } from './components/ParcoursSection';
import { CameraMomentsSection } from './components/CameraMomentsSection';
import { StartupLeagueSection } from './components/StartupLeagueSection';
import { CreatureDemoSection } from './components/CreatureDemoSection';
import { ParentProgressRadar } from './components/ParentProgressRadar';
import { ParentPartnershipSection } from './components/ParentPartnershipSection';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [language, setLanguage] = useState<Language>('FR');
  const [selectedActivity, setSelectedActivity] = useState<ActivityId>('lab');
  const [activeSection, setActiveSection] = useState<string>('accueil');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectActivity = (id: ActivityId) => {
    setSelectedActivity(id);
    scrollToSection('activites');
  };

  // Observe scroll position to update active bottom nav tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'activites', 'cerveau', 'parcours', 'lapp', 'preinscription'];
      const scrollY = window.pageYOffset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-950">
      {/* Top Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Catchphrase and Interactive Dragon Wheel */}
        <Hero
          language={language}
          onNavigate={scrollToSection}
          onSelectActivity={handleSelectActivity}
          activeActivity={selectedActivity}
        />

        {/* 2. Running Marquee Banner */}
        <RunningMarquee language={language} />

        {/* 3. Parent Philosophy Quote */}
        <ParentQuote language={language} />

        {/* 4. Agora in Numbers - 8 Colorful Cards */}
        <AgoraNumbers language={language} />

        {/* 5. Interactive Hours & Projects Calculator */}
        <Calculator language={language} />

        {/* 6. The 5 Activities Worlds */}
        <ActivitiesSection
          language={language}
          selectedActivity={selectedActivity}
          onSelectActivity={setSelectedActivity}
        />

        {/* 7. Curriculum & Syllabus Brochures */}
        <CurriculumBrochures language={language} />

        {/* 8. The Brain in Action - Cognitive Science & SVG Lobes */}
        <BrainSection language={language} />

        {/* 9. Why it Matters - Science Backed Methodology & Live Research Charts */}
        <ScienceSection language={language} />

        {/* 10. Our Spirit - A Family, 7 Session Steps, Comparison */}
        <OurSpiritSection language={language} />

        {/* 11. The 3-Year 6-Semester Pathway */}
        <ParcoursSection language={language} />

        {/* 12. Camera Milestones Viewfinder & Video Confidence */}
        <CameraMomentsSection language={language} />

        {/* 13. Agora Startup League - Mini-Venture Simulator & Ecosystem */}
        <StartupLeagueSection language={language} />

        {/* 14. The Agora Junior App & Interactive Creature XP Demo */}
        <CreatureDemoSection language={language} />

        {/* 15. Parent Visible Progress - Radar Spider Web */}
        <ParentProgressRadar language={language} />

        {/* 16. Parent Partnership, Campus Rooms & Written Safety Charter */}
        <ParentPartnershipSection language={language} />

        {/* 17. 3-Step Enrollment Reservation Form */}
        <RegistrationForm language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Bottom Sticky Mobile Dock */}
      <BottomNav
        language={language}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
