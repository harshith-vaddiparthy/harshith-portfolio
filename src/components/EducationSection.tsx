import React from 'react';
import { 
  GraduationCap, 
  Certificate, 
  UsersThree, 
  Sparkle, 
  ArrowUpRight, 
  CheckCircle,
  Lightbulb,
  Books
} from '@phosphor-icons/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="training" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow & Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
          <GraduationCap size={14} weight="bold" />
          <span>Ecosystem Education & Training</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Applied AI Instruction & Masterclasses
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Through <strong className="text-white">Outskill</strong> cohorts and corporate enterprise engagements, I train software engineers, executives, and founders on turning bleeding-edge AI models into production-hardened systems.
        </p>
      </div>

      {/* Teaching Metric Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <UsersThree size={22} weight="bold" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">10,000+</div>
            <div className="text-xs text-zinc-400">Practitioners Instructed</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Lightbulb size={22} weight="bold" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">11+ Cohorts</div>
            <div className="text-xs text-zinc-400">AI Accelerator & Catalyst</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Certificate size={22} weight="bold" />
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white">Enterprise</div>
            <div className="text-xs text-zinc-400">Claude & MCP Partnerships</div>
          </div>
        </div>
      </div>

      {/* Flagship Course Curricula Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
        {PORTFOLIO_DATA.coursesTaught.map((course) => (
          <div
            key={course.title}
            className="bezel-outer p-1 rounded-[1.75rem]"
          >
            <div className="bezel-inner rounded-[calc(1.75rem-0.25rem)] p-6 h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full mb-3 inline-block">
                  {course.program}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {course.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle size={14} className="text-emerald-400" />
                  Live Breakouts & Office Hours
                </span>
                <span className="text-zinc-500">Outskill Lead</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Speaking Honors */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border border-white/8 backdrop-blur-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
          <Certificate size={20} className="text-indigo-400" />
          <span>Honors, Credentials & Speaking</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div key={cert.title} className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-1">
                {cert.issuer}
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">
                {cert.title}
              </h4>
              {cert.detail && (
                <p className="text-[11px] text-zinc-400">{cert.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

