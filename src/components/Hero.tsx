import React from 'react';
import { 
  ArrowUpRight, 
  TerminalWindow, 
  Sparkle, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Article,
  ChartLineUp
} from '@phosphor-icons/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreArchitecture: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreArchitecture }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Radial Mesh Glows */}
      <div 
        className="glow-orb -top-24 left-1/4 w-[500px] h-[500px] bg-indigo-600/20" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      <div 
        className="glow-orb top-40 right-10 w-[450px] h-[450px] bg-emerald-500/15" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      <div 
        className="glow-orb -bottom-20 left-10 w-[400px] h-[400px] bg-cyan-500/10" 
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-inner hover:border-emerald-500/30 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300">
            Co-Founder & CTO @ Kenzai Intelligence · Forbes Technology Council
          </span>
        </div>

        {/* Massive Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.08] mb-7">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">Agentic Systems</span> at Enterprise Scale.
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300/90 font-normal leading-relaxed max-w-3xl mb-10">
          I bridge frontier LLM capabilities with hardened production execution—engineering autonomous multi-agent pipelines at <strong className="text-white font-medium">Kenzai</strong>, analyzing AI security for <strong className="text-white font-medium">VentureBeat</strong> & <strong className="text-white font-medium">Forbes</strong>, and training over <strong className="text-emerald-300 font-medium font-mono">10,000+</strong> practitioners across <strong className="text-white font-medium">Outskill</strong> cohorts.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <button
            onClick={onExploreArchitecture}
            className="group relative inline-flex items-center gap-3 pl-5 pr-2 py-2.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold text-sm shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] hover:bg-emerald-300 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Explore Agent Architecture Lab</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-950 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </button>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-zinc-200 hover:text-white text-sm font-medium transition-all"
          >
            <Article size={16} className="text-indigo-400" />
            <span>Read Engineering Dives</span>
          </a>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 text-zinc-400 hover:text-zinc-200 text-sm font-mono transition-all cursor-pointer"
          >
            <span>hi@harshith.com</span>
          </button>
        </div>
      </div>

      {/* Asymmetric Bento Proof Strip (Double-Bezel Architecture) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
        {PORTFOLIO_DATA.stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`bezel-outer p-1 rounded-2xl sm:rounded-3xl transition-transform duration-300 hover:-translate-y-1 ${
              idx === 0 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="bezel-inner h-full p-4 sm:p-5 rounded-[calc(1rem)] sm:rounded-[calc(1.5rem-0.25rem)] flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                {stat.label}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white my-1 font-mono">
                {stat.value}
              </div>
              <p className="text-[11px] text-zinc-400 leading-tight">
                {stat.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Domain Focus Tags */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
        <span className="text-[10px] font-mono uppercase text-zinc-500 mr-1">Core Focus:</span>
        {PORTFOLIO_DATA.skills.core.slice(0, 5).map((skill) => (
          <span 
            key={skill}
            className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 hover:border-white/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

