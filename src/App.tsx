import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgentLab } from './components/AgentLab';
import { ExperienceSection } from './components/ExperienceSection';
import { BlogSection } from './components/BlogSection';
import { EducationSection } from './components/EducationSection';
import { AIConsole } from './components/AIConsole';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToArchitecture = () => {
    const el = document.getElementById('architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05060a] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Floating Island Navigation */}
      <Navbar onOpenContact={handleScrollToContact} />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        {/* Hero & Identity */}
        <Hero 
          onOpenContact={handleScrollToContact} 
          onExploreArchitecture={handleScrollToArchitecture}
        />

        {/* Interactive Architecture Lab */}
        <AgentLab />

        {/* Track Record & Roles */}
        <ExperienceSection />

        {/* Engineering Dives & Articles (Built via engineering-blog-post skill) */}
        <BlogSection />

        {/* Applied AI Instruction & Masterclasses */}
        <EducationSection />

        {/* Interactive Digital Twin AI Console */}
        <AIConsole />

        {/* Connect & Direct Dispatcher */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

