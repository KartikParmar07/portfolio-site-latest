import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, Zap, ChevronUp, ChevronDown, Award } from 'lucide-react';
import { CompanyExperience } from '../types';
import { WORK_EXPERIENCE } from '../data';

interface WorkTimelineProps {
  isDark: boolean;
}

export default function WorkTimeline({ isDark }: WorkTimelineProps) {
  const [expandedExperienceId, setExpandedExperienceId] = useState<string | null>(WORK_EXPERIENCE[0].id);

  const toggleExpand = (id: string) => {
    if (expandedExperienceId === id) {
      setExpandedExperienceId(null);
    } else {
      setExpandedExperienceId(id);
    }
  };

  return (
    <div id="experience-timeline" className="relative w-full py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 py-1.5 px-4 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-400 font-mono text-xs uppercase tracking-[0.25em]">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Matrix</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-center uppercase italic">
            Employment Records &amp; Impact
          </h2>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
            Elite engineering roles in high-growth companies. Focusing on front-end infrastructure latency, reactive metrics processing, and robust systems toolings.
          </p>
        </div>

        {/* Timeline circuit tree track */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Track Spine Line */}
          <div className={`absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 -translate-x-1/2 hidden md:block ${
            isDark ? 'bg-gradient-to-b from-blue-500/30 via-cyan-500/30 to-transparent' : 'bg-gradient-to-b from-slate-200 via-slate-300 to-transparent'
          }`} />

          <div className="space-y-12 md:space-y-16">
            {WORK_EXPERIENCE.map((exp, index) => {
              const isExpanded = expandedExperienceId === exp.id;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={exp.id} 
                  id={`experience-timeline-node-${exp.id}`}
                  className="relative flex flex-col md:flex-row items-stretch"
                >
                  {/* Circle Track Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 hidden md:block">
                    <motion.div 
                      aria-hidden="true"
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isExpanded
                          ? 'bg-slate-950 border-blue-500 text-blue-400'
                          : isDark 
                            ? 'bg-slate-900 border-[#222] text-slate-500 hover:border-slate-700' 
                            : 'bg-white border-slate-250 text-slate-500 hover:border-slate-350'
                      }`}
                      animate={{ scale: isExpanded ? 1.1 : 1 }}
                    >
                      <Briefcase className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Left Block Padding on Desktop */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right ${
                    isEven ? 'md:order-1' : 'md:order-2 md:pl-16 md:pr-0 text-left'
                  }`}>
                    {/* Content Box */}
                    <div 
                      onClick={() => toggleExpand(exp.id)}
                      className={`p-6 md:p-8 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                        isExpanded
                          ? isDark 
                            ? 'bg-[#0A0A0A]/95 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                            : 'bg-white border-slate-900 shadow-slate-200/50 shadow-lg'
                          : isDark
                            ? 'bg-[#0A0A0A]/30 border-white/5 hover:bg-[#111111]/50 hover:border-white/10'
                            : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100 hover:border-slate-350'
                      }`}
                    >
                      {/* Decorative slide indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                        isExpanded ? 'bg-blue-500' : 'bg-transparent'
                      }`} />

                      <div className="flex justify-between items-start gap-2">
                        <div className="space-y-1">
                          <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            isDark ? 'bg-white/5 text-blue-400' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {exp.company}
                          </span>
                          <h3 className="text-xl font-bold font-display tracking-tight pt-2 uppercase italic">
                            {exp.role}
                          </h3>
                        </div>

                        <button 
                          className={`p-1.5 rounded-lg border transition-colors ${
                            isDark ? 'border-white/5 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-100'
                          }`}
                          aria-label={isExpanded ? "Collapse node" : "Expand node"}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-[11px] font-mono text-white/40">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-500/50" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-500/50" />
                          {exp.location}
                        </span>
                      </div>

                      <p className={`mt-4 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-650'}`}>
                        {exp.summary}
                      </p>

                      {/* Expandable Core Work Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-white/5 mt-6 pt-5 space-y-4"
                          >
                            <div className="space-y-2">
                              {exp.bullets.map((bullet, bIdx) => (
                                <div key={bIdx} className="flex items-start text-xs leading-relaxed">
                                  <span className="text-blue-500 mr-2 z-10">❯</span>
                                  <span className={isDark ? 'text-white/70' : 'text-slate-600'}>{bullet}</span>
                                </div>
                              ))}
                            </div>

                            {/* Linked Work Experience Projects Highlight */}
                            {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                              <div className="space-y-3 pt-2">
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 font-mono block">
                                  Engineering Projects Built Behind the scenes:
                                </span>
                                {exp.relatedProjects.map((p, pIdx) => (
                                  <div 
                                    key={pIdx} 
                                    className={`p-3.5 rounded-xl border ${
                                      isDark ? 'bg-black/40 border-white/5' : 'bg-slate-100 border-slate-200'
                                    }`}
                                  >
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                                      <Zap className="w-3 h-3 text-blue-400" />
                                      {p.title}
                                    </div>
                                    <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                                      {p.description}
                                    </p>
                                    <div className="text-[10px] font-mono mt-2 text-white/35 flex items-center gap-1">
                                      <span className="font-bold">Metric:</span> {p.impact}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Skills associated tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {exp.skillsAssociated.map(sk => (
                                <span 
                                  key={sk} 
                                  className={`text-[10px] font-mono px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                                    isDark ? 'bg-[#111] border-white/5 text-white/40' : 'bg-slate-200/50 border-slate-300 text-slate-650'
                                  }`}
                                >
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Ambient cursor highlight panel */}
                      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 duration-500 blur-xs bg-blue-500/5 pointer-events-none -z-10" />
                    </div>
                  </div>

                  {/* Empty Spacer Side Block for proper alternate Desktop positioning */}
                  <div className={`w-1/2 hidden md:block ${isEven ? 'md:order-2' : 'md:order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
