import React, { useState } from 'react';
import { 
  Article, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Sparkle, 
  TerminalWindow,
  BookOpen
} from '@phosphor-icons/react';
import { PORTFOLIO_DATA, BlogPost } from '../data/portfolioData';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Eyebrow & Title */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
          <BookOpen size={14} weight="bold" />
          <span>Engineering Thought Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Engineering Dives & Publications
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Rigorous technical analyses published across <strong className="text-white">VentureBeat</strong>, <strong className="text-white">Forbes Technology Council</strong>, and internal architecture whitepapers. Formatted with runnable code snippets, published trade-offs, and empirical benchmarks.
        </p>
      </div>

      {/* Grid of Articles - Asymmetrical Double-Bezel Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PORTFOLIO_DATA.blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`bezel-outer p-1 sm:p-1.5 rounded-[2rem] flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
              index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            <div className="bezel-inner rounded-[calc(2rem-0.25rem)] p-6 sm:p-8 flex flex-col justify-between h-full">
              
              <div>
                {/* Meta Top Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px] font-mono font-medium">
                    {post.publication}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Evidence Badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-emerald-400 border border-emerald-500/20 mb-3">
                  <ShieldCheck size={12} weight="bold" />
                  <span>Evidence: {post.evidenceClass}</span>
                </div>

                {/* Article Headline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Dek Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {post.dek}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-[10px] font-mono text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Read Action (Button-in-Button) */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  {post.date}
                </span>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="group inline-flex items-center gap-2.5 pl-3.5 pr-1.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <span className="font-semibold text-zinc-200">Read Deep Dive</span>
                  <span className="w-6 h-6 rounded-full bg-white/10 text-emerald-300 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={12} weight="bold" />
                  </span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

