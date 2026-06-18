import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code, CheckCircle, ChevronRight, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface ParallaxProjectsProps {
  isDark: boolean;
}

export default function ParallaxProjects({ isDark }: ParallaxProjectsProps) {
  const [scrollY, setScrollY] = useState(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeProject = PROJECTS[activeProjectIdx];

  return (
    <div id="parallax-projects-wrapper" className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
      {/* Absolute Decorative Floating Grid Nodes inside the section */}
      <div 
        className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-[0.08] pointer-events-none transition-transform duration-200" 
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="w-full h-full bg-blue-500 rounded-full" />
      </div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-[0.08] pointer-events-none transition-transform duration-200"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      >
        <div className="w-full h-full bg-blue-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Parallax Project Selector Cards & Metadata */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs uppercase tracking-[0.25em]">
              <Layers className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              <span>Project Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase italic">
              Featured Craftsmanship
            </h2>
            <p className={`text-sm md:text-base max-w-xl ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
              Interactive and distributed engineering systems built to showcase clean typing, scalability, and pixel-precise fluidity. Click the systems to explore structural features.
            </p>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((project, idx) => {
              const isActive = activeProjectIdx === idx;
              // Subtle scroll parallax offset specifically for each card
              const cardOffset = (scrollY * 0.05) * (idx === 1 ? -1 : 1);

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  style={{ transform: `translateY(${cardOffset}px)` }}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? isDark 
                        ? 'bg-[#0a0a0a]/95 border-blue-500 scale-[1.01] shadow-lg text-white' 
                        : 'bg-white border-blue-500 shadow-slate-200/50 shadow-md scale-[1.01]'
                      : isDark
                        ? 'bg-[#0A0A0A]/30 border-white/5 hover:bg-[#111111]/40 hover:border-white/10'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100/50 hover:border-slate-300'
                  }`}
                >
                  {/* Active Indicator Strip */}
                  <div className={`absolute top-0 bottom-0 left-0 w-1.5 rounded-l-2xl transition-all duration-300 ${
                    isActive ? 'bg-gradient-to-b from-blue-500 to-cyan-400' : 'bg-transparent'
                  }`} />

                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-mono text-white/40 block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight uppercase italic group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs md:text-sm font-semibold italic block pb-2 ${isDark ? 'text-white/40' : 'text-slate-600'}`}>
                        {project.subtitle}
                      </span>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-blue-500 rotate-90' : 'text-slate-400'
                    }`} />
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span 
                        key={t} 
                        className={`text-[10px] px-3 py-1 rounded-full font-mono border uppercase tracking-wider ${
                          isActive
                            ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                            : isDark
                              ? 'bg-[#111111] border-white/5 text-white/40'
                              : 'bg-slate-200/50 border-slate-300/30 text-slate-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Achievements Checklist (Visible when Active or Hovered) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-white/5 pt-4 mt-2 space-y-2.5"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 font-mono block">
                          Impact & Deliverables:
                        </span>
                        {project.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start text-xs leading-relaxed text-white/60">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 mr-2 shrink-0 animate-pulse" />
                            <span className={`${isDark ? 'text-white/70' : 'text-slate-600'}`}>{ach}</span>
                          </div>
                        ))}

                        <div className="flex items-center gap-4 pt-3 text-xs font-mono">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-1.5 hover:text-blue-400 text-white/40 transition-colors cursor-pointer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-3.5 h-3.5" />
                              Source Repo
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-1.5 hover:text-blue-400 text-white/40 transition-colors cursor-pointer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Layers className="w-3.5 h-3.5" />
                              Interactive Sandbox Node
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Fancy ambient outline */}
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10 border border-blue-500/20" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: High-End Code-Block Sandbox Panel */}
        <div className="lg:col-span-5 sticky top-28 z-10 w-full">
          <div className={`rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-[#0A0A0A]/95 border-white/10 focus-within:border-blue-500/50 text-white/80' 
              : 'bg-[#111111] border-slate-700 text-slate-200'
          }`}>
            {/* Header Panel */}
            <div className={`flex items-center justify-between px-5 py-3 border-b border-white/5 ${
              isDark ? 'bg-[#111111]/60' : 'bg-[#111111]'
            }`}>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-mono tracking-widest text-[#E0E0E0]/60 uppercase">
                  {activeProject.id}.tsx — Technical Architecture
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Code Field Content */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto h-72 relative">
              <div className="absolute top-2 right-2 text-white/20 select-none text-[9px] uppercase tracking-widest font-bold">
                READ-ONLY CORE
              </div>
              <pre className="text-blue-400 whitespace-pre">
                {activeProject.codeSnippet || `// Compiling dependencies...`}
              </pre>
            </div>
          </div>

          {/* Secondary architectural display beneath code block */}
          <div className={`mt-4 p-4 rounded-xl border font-mono text-xs flex justify-between items-center transition-all duration-300 ${
            isDark 
              ? 'bg-[#0A0A0A]/50 border-white/5 text-white/40' 
              : 'bg-slate-100 border-slate-200 text-slate-600'
          }`}>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              Live Memory Node: [98.2% healthy]
            </span>
            <span>Buffered: 0 ms delay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
