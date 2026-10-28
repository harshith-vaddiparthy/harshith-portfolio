import React, { useState } from 'react';
import { 
  EnvelopeSimple, 
  LinkedinLogo, 
  Globe, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkle,
  PaperPlaneRight
} from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    purpose: 'CTO Advisory',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email.trim() || !formState.name.trim()) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#10b981', '#6366f1', '#38bdf8', '#ffffff']
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
          <EnvelopeSimple size={14} weight="bold" />
          <span>Connect & Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Initiate a Conversation
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Open for selective CTO advisory, keynote engagements, enterprise agent masterclasses, and frontier AI conversations.
        </p>
      </div>

      {/* Double-Bezel Contact Frame */}
      <div className="bezel-outer p-1.5 sm:p-2 rounded-[2rem] max-w-5xl mx-auto">
        <div className="bezel-inner rounded-[calc(2rem-0.375rem)] p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Column: Direct channels */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-2">
                  Direct Channels
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                  Reach Out Directly
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  Whether you are scaling an enterprise agentic pipeline, training your engineering organization, or looking for strategic perspectives on Forbes and VentureBeat topics.
                </p>

                {/* Email Chip with Copy button */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-4">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    Primary Email:
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-mono font-medium text-white">
                      {PORTFOLIO_DATA.personal.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 text-xs font-mono transition-colors cursor-pointer"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Quick Links Strip */}
                <div className="space-y-2">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 text-xs font-medium text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinLogo size={18} weight="fill" className="text-[#0a66c2]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 text-xs font-medium text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe size={18} className="text-indigo-400" />
                      <span>Personal Domain (harshith.com)</span>
                    </div>
                    <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Geographic Footprint */}
              <div className="pt-6 border-t border-white/5 mt-6">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                  <MapPin size={14} className="text-emerald-400" />
                  <span>Greater Hyderabad & San Francisco Bay Area</span>
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">
                  Active time zones: IST (UTC+5:30) & PST (UTC-8)
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Dispatcher Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-950/20 to-black border border-emerald-500/30">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <Check size={28} weight="bold" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mb-6 leading-relaxed">
                    Thank you for reaching out. A confirmation has been logged. You can also directly ping via email or LinkedIn for immediate coordination.
                  </p>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Inquiry: ${encodeURIComponent(formState.purpose)}&body=Hi Harshith,%0D%0A%0D%0A${encodeURIComponent(formState.message)}%0D%0A%0D%0ABest regards,%0D%0A${encodeURIComponent(formState.name)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <span>Launch in Default Mail App</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Satya Nadella"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Collaboration Objective
                    </label>
                    <select
                      value={formState.purpose}
                      onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500/50"
                    >
                      <option value="CTO Advisory & AI Strategy" className="bg-[#0b0e17]">CTO Advisory & AI Strategy</option>
                      <option value="Outskill Masterclass / Corporate Cohort" className="bg-[#0b0e17]">Outskill Masterclass / Corporate Cohort</option>
                      <option value="Keynote Speaking & Panel" className="bg-[#0b0e17]">Keynote Speaking & Panel (Conferences / Events)</option>
                      <option value="Venture Syndicate & Angel Co-Investment" className="bg-[#0b0e17]">Venture Syndicate & Angel Co-Investment</option>
                      <option value="Technical Press / Forbes Column Collaboration" className="bg-[#0b0e17]">Technical Press / Forbes Column Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Message Context
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Briefly describe your team's objective, timeline, or topic..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-3 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-[0_4px_25px_-5px_rgba(16,185,129,0.5)] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Dispatch Inquiry</span>
                    <span className="w-6 h-6 rounded-full bg-zinc-950 text-emerald-300 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <PaperPlaneRight size={13} weight="bold" />
                    </span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

