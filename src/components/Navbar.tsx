import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  List, 
  X, 
  Sparkle, 
  Article, 
  Briefcase, 
  Cpu, 
  GraduationCap, 
  LinkedinLogo,
  FileText
} from '@phosphor-icons/react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Architecture Lab', href: '#architecture', icon: Cpu },
    { name: 'Engineering Blog', href: '#blog', icon: Article },
    { name: 'AI Training', href: '#training', icon: GraduationCap },
  ];

  return (
    <>
      <header className="fixed top-4 inset-x-0 mx-auto w-full max-w-5xl z-50 px-4 transition-all duration-300">
        <nav 
          className={`mx-auto flex items-center justify-between px-3.5 py-2.5 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'bg-[#090b14]/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.8)]' 
              : 'bg-[#0b0e1a]/70 backdrop-blur-xl border border-white/8 shadow-xl'
          }`}
        >
          {/* Brand Monogram & Status */}
          <a href="#" className="flex items-center gap-3 group pl-1.5">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 via-emerald-500/10 to-transparent border border-white/15 text-xs font-mono font-semibold tracking-wider text-white shadow-inner group-hover:border-emerald-400/40 transition-colors">
              HV
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#05060a] animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Harshith Vaddiparthy
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-tight">
                CTO @ Kenzai · Forbes Council
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Icon size={14} weight="regular" className="text-zinc-400" />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/harshith-vaddiparthy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <LinkedinLogo size={16} weight="fill" />
            </a>

            <a
              href="/Profile.pdf"
              download="Harshith_Vaddiparthy_Profile.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
            >
              <FileText size={14} className="text-emerald-400" />
              <span>Resume</span>
            </a>

            {/* Button-in-Button Primary CTA */}
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2.5 pl-3.5 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc-950 font-medium text-xs shadow-lg hover:shadow-indigo-500/10 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="font-semibold tracking-tight">Initiate Contact</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/10 text-zinc-900 group-hover:bg-black/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={13} weight="bold" />
              </span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-200 hover:text-white"
            >
              {mobileMenuOpen ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-2xl flex flex-col pt-24 px-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 px-3">
              Navigation
            </span>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-emerald-400" />
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-zinc-500" />
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-2">
              <a
                href="/Profile.pdf"
                download="Harshith_Vaddiparthy_Profile.pdf"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-mono text-zinc-300"
              >
                <FileText size={16} className="text-emerald-400" />
                <span>Download Executive Profile PDF</span>
              </a>

              <a
                href="https://www.linkedin.com/in/harshith-vaddiparthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#0077b5]/20 border border-[#0077b5]/40 text-sm font-medium text-blue-300"
              >
                <LinkedinLogo size={18} weight="fill" />
                <span>View LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

