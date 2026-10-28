import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Article, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Tag, 
  ShareNetwork,
  GitBranch
} from '@phosphor-icons/react';
import { BlogPost } from '../data/portfolioData';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!post) return null;

  const handleCopyCode = () => {
    if (post.content.codeSnippet) {
      navigator.clipboard.writeText(post.content.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bezel-outer p-1 sm:p-1.5 rounded-[2rem] max-w-4xl w-full my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bezel-inner rounded-[calc(2rem-0.25rem)] p-6 sm:p-10 overflow-y-auto flex-1">
          
          {/* Header Metadata Strip */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                {post.publication}
              </span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <Clock size={13} />
                {post.readTime}
              </span>
              <span className="text-zinc-500">·</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                Evidence: {post.evidenceClass}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close article modal"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Article Title & Dek */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8 italic">
            "{post.dek}"
          </p>

          {/* Table of Contents & Outline Strip */}
          <div className="mb-8 p-4 rounded-xl bg-black/40 border border-white/5">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
              Technical Outline:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-zinc-400">
              {post.outline.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Thesis Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/20 to-emerald-950/20 border border-indigo-500/20 mb-8">
            <span className="text-xs font-mono uppercase text-indigo-400 font-bold tracking-widest block mb-1">
              Core Engineering Thesis
            </span>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium">
              {post.content.thesis}
            </p>
          </div>

          {/* Section: The Problem Space */}
          <div className="mb-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              1. The Failure Mode in Production
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {post.content.problem}
            </p>
          </div>

          {/* Architecture Diagram Visualization */}
          <div className="mb-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <GitBranch size={20} className="text-emerald-400" />
              <span>2. Hardened System Architecture</span>
            </h2>
            <div className="p-4 sm:p-5 rounded-xl bg-[#030408] border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed shadow-inner">
              <pre>{post.content.architectureDiagram}</pre>
            </div>
          </div>

          {/* Runnable Code Snippet */}
          {post.content.codeSnippet && (
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  3. Implementation Blueprint
                </h2>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#020306] overflow-hidden">
                <div className="px-4 py-2 border-b border-white/10 text-xs font-mono text-zinc-400 bg-white/[0.02]">
                  {post.content.codeSnippet.title}
                </div>
                <pre className="p-4 text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed">
                  <code>{post.content.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Published Trade-offs Ledger */}
          <div className="mb-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              4. Documented Architectural Trade-offs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/20">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                  System Advantages (Pros)
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {post.content.tradeoffs.pros.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/15 border border-amber-500/20">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Operational Costs & Limitations (Cons)
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {post.content.tradeoffs.cons.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">−</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Conclusion & Callout */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block mb-1">
              Engineering Takeaway
            </span>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-mono">
              "{post.content.takeaway}"
            </p>
          </div>

          {/* Footer author stamp */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div>
              <span>Author: </span>
              <strong className="text-white">Harshith Vaddiparthy</strong>
              <span className="text-zinc-500"> (CTO @ Kenzai · Forbes Council)</span>
            </div>
            <a
              href="https://www.linkedin.com/in/harshith-vaddiparthy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300"
            >
              <span>Discuss on LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

