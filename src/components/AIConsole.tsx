import React, { useState } from 'react';
import { 
  TerminalWindow, 
  PaperPlaneRight, 
  Sparkle, 
  ArrowClockwise,
  Check,
  Cpu
} from '@phosphor-icons/react';

interface PreSetQuestion {
  label: string;
  query: string;
  answer: string;
}

const PRESETS: PreSetQuestion[] = [
  {
    label: "CTO @ Kenzai Intelligence",
    query: "What is your primary architectural focus as CTO of Kenzai Intelligence?",
    answer: "As Co-Founder & CTO at Kenzai Intelligence, I architect enterprise-grade autonomous agent systems designed for mission-critical operations such as supply chain orchestration and platform engineering. We leverage Model Context Protocol (MCP) servers, zero-trust sandbox boundaries for tool execution, and hybrid RAG retrieval (BM25 + vector embeddings) to deliver deterministic, auditable multi-agent workflows."
  },
  {
    label: "AI Browser Security",
    query: "How do you solve prompt injection in autonomous browser agents like Comet?",
    answer: "In my VentureBeat security research, I demonstrated that an agent must never execute local browser actions or credentials inside the same reasoning thread that ingests untrusted DOMs. The required pattern is a strict Tainted Input Boundary: raw HTML is parsed by an air-gapped, zero-tool reader model into structured JSON entities, and actions are validated against a strict schema and deterministic policy gatekeeper before execution."
  },
  {
    label: "Outskill Cohorts",
    query: "What is covered in your applied AI cohorts and masterclasses at Outskill?",
    answer: "Over 10,000+ engineers, product managers, and executives have gone through our Outskill programs. We move beyond toy prompts to cover: production RAG with re-ranking, Google AI Studio, Dify pipelines, n8n autonomous event workflows, Model Context Protocol (MCP) integrations, voice agents, corporate Claude Mastery, and 'vibe coding' to rapidly prototype production-grade software."
  },
  {
    label: "Startup Track Record & Exits",
    query: "What was the story with your previous startup ARTIFIN?",
    answer: "I was the Founder & CEO of ARTIFIN based in Palo Alto, where we engineered a conversational AI intelligence dashboard for finance professionals. We built early domain-specific fine-tuning pipelines on SEC 10-K filings and earnings transcripts before being acquired in late 2023. I also invest selectively as an ecosystem angel, including Beehiiv's Series B community round."
  },
  {
    label: "Advisory & Speaking",
    query: "Are you available for CTO advisory or keynote speaking?",
    answer: "Yes! As an invited member of the Forbes Technology Council, I regularly speak at conferences (NFTNYC, ETHIndia) and advise seed to Series A founders on AI product architecture, latency mitigation, and enterprise go-to-market. Reach out directly at hi@harshith.com to coordinate."
  }
];

export const AIConsole: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [activeAnswer, setActiveAnswer] = useState<string>(PRESETS[0].answer);
  const [displayedAnswer, setDisplayedAnswer] = useState<string>(PRESETS[0].answer);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');

  const triggerTypewriter = (text: string) => {
    setIsTyping(true);
    setDisplayedAnswer('');
    let idx = 0;
    const interval = setInterval(() => {
      idx += 3;
      setDisplayedAnswer(text.slice(0, idx));
      if (idx >= text.length) {
        clearInterval(interval);
        setDisplayedAnswer(text);
        setIsTyping(false);
      }
    }, 12);
  };

  const handleSelectPreset = (preset: PreSetQuestion) => {
    setActiveQuery(preset.query);
    setActiveAnswer(preset.answer);
    triggerTypewriter(preset.answer);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const userText = inputVal.trim();
    setActiveQuery(userText);
    setInputVal('');

    // Match best response from knowledge base
    const lower = userText.toLowerCase();
    let best = PRESETS[0].answer;
    if (lower.includes('security') || lower.includes('inject') || lower.includes('browser') || lower.includes('comet')) {
      best = PRESETS[1].answer;
    } else if (lower.includes('outskill') || lower.includes('course') || lower.includes('train') || lower.includes('learn') || lower.includes('class')) {
      best = PRESETS[2].answer;
    } else if (lower.includes('artifin') || lower.includes('exit') || lower.includes('invest') || lower.includes('startup') || lower.includes('beehiiv')) {
      best = PRESETS[3].answer;
    } else if (lower.includes('advisory') || lower.includes('contact') || lower.includes('speak') || lower.includes('forbes') || lower.includes('hire')) {
      best = PRESETS[4].answer;
    }

    triggerTypewriter(best);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Eyebrow & Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
          <TerminalWindow size={14} weight="bold" />
          <span>Interactive Knowledge Grounding</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Harshith's Digital Architecture Twin
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Query my specialized engineering persona for direct answers regarding our work at <strong className="text-white">Kenzai Intelligence</strong>, Forbes columns, security research, or Outskill courses.
        </p>
      </div>

      {/* Terminal Double-Bezel Frame */}
      <div className="bezel-outer p-1.5 sm:p-2 rounded-[2rem] max-w-4xl mx-auto">
        <div className="bezel-inner rounded-[calc(2rem-0.375rem)] p-5 sm:p-8">
          
          {/* Terminal Window Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-zinc-400">
                hv-architect-agent://session-v2.5
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE · GROUNDED IN PORTFOLIO</span>
            </div>
          </div>

          {/* Quick Query Chips */}
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-semibold">
              Select Curated Inquiry:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => handleSelectPreset(p)}
                  disabled={isTyping}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeQuery === p.query
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/5'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output Screen */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#030407] border border-white/10 min-h-[220px] mb-6 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed shadow-inner">
            {activeQuery && (
              <div className="text-zinc-400 mb-3 flex items-start gap-2">
                <span className="text-indigo-400 font-bold select-none">&gt;</span>
                <span className="text-white font-medium">{activeQuery}</span>
              </div>
            )}

            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold select-none">&lambda;</span>
              <div className="flex-1">
                <p className="text-zinc-200 leading-relaxed whitespace-pre-wrap">
                  {displayedAnswer}
                  {isTyping && (
                    <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse align-middle" />
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Prompt Input Box */}
          <form onSubmit={handleCustomSubmit} className="relative">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask a question about Harshith's CTO experience, tech stack, or training..."
              disabled={isTyping}
              className="w-full pl-4 pr-12 py-3 rounded-xl bg-black/50 border border-white/10 text-xs sm:text-sm font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              aria-label="Send query"
              className="absolute right-2 top-2 p-2 rounded-lg bg-emerald-400 text-zinc-950 hover:bg-emerald-300 disabled:opacity-30 transition-all cursor-pointer"
            >
              <PaperPlaneRight size={14} weight="bold" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

