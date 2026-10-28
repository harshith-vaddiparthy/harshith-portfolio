import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Buildings, 
  TrendUp, 
  GraduationCap, 
  Article, 
  ShieldCheck,
  Check
} from '@phosphor-icons/react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';

type FilterType = 'all' | 'executive' | 'instruction' | 'writing' | 'growth' | 'investment';

export const ExperienceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredExperiences = PORTFOLIO_DATA.experiences.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.type === activeFilter;
  });

  const filterTabs: { label: string; value: FilterType }[] = [
    { label: 'All Milestones', value: 'all' },
    { label: 'CTO & Leadership', value: 'executive' },
    { label: 'Applied AI Training', value: 'instruction' },
    { label: 'Forbes & VentureBeat', value: 'writing' },
    { label: 'Growth & Ventures', value: 'growth' },
    { label: 'Investments', value: 'investment' },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
          <Briefcase size={14} weight="bold" />
          <span>Track Record & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Executive Roles & Engineering Leadership
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          From founding and scaling an AI analytics startup to acquisition in Palo Alto, to driving platform engineering as CTO at Kenzai, to publishing on Forbes and training 10,000+ AI practitioners.
        </p>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto p-1.5 bg-black/40 rounded-full border border-white/10 backdrop-blur-md">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              activeFilter === tab.value
                ? 'bg-white/15 text-white font-semibold border border-white/20 shadow-md'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Experience Timeline Grid */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            className="bezel-outer p-1 sm:p-1.5 rounded-[2rem] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bezel-inner rounded-[calc(2rem-0.25rem)] p-6 sm:p-8">
              
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/5 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-500 font-mono">@</span>
                    <span className="text-lg sm:text-xl font-semibold text-emerald-300">
                      {exp.company}
                    </span>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/10">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-mono uppercase tracking-wider border ${
                    exp.type === 'executive' 
                      ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' 
                      : exp.type === 'instruction'
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                      : exp.type === 'writing'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Highlights List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                  Key Deliverables & Architectural Impact:
                </span>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Strip */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

