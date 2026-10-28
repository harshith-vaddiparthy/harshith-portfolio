import React from 'react';
import { 
  ArrowUp, 
  LinkedinLogo, 
  Globe, 
  EnvelopeSimple, 
  FileText,
  ShieldCheck,
  Cpu
} from '@phosphor-icons/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#030408] text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Tier: Identity & Quick Navigation */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-mono font-bold text-xs border border-white/15">
              HV
            </div>
            <div>
              <span className="text-sm font-semibold text-white block">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] text-zinc-400">
                Co-Founder & CTO @ Kenzai Intelligence · Forbes Technology Council
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-zinc-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture Lab</a>
            <a href="#blog" className="hover:text-white transition-colors">Engineering Dives</a>
            <a href="#training" className="hover:text-white transition-colors">Outskill Training</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            
            <a
              href="/Profile.pdf"
              download="Harshith_Vaddiparthy_Profile.pdf"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <FileText size={14} />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Middle Tier: System Status & Engineering Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>System Status: Operational</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-400">
              Stack: Vite + React 19 + Tailwind v4 + Phosphor
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/harshith-vaddiparthy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedinLogo size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Legal & Anti-Slop Signature */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-zinc-600">
          <p>© {new Date().getFullYear()} Harshith Vaddiparthy. All rights reserved.</p>
          <p className="font-mono">
            Crafted with high-end architectural rigor · Double-Bezel Design System
          </p>
        </div>

      </div>
    </footer>
  );
};

