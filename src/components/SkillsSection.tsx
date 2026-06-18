import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Network, Terminal, Cpu, CheckCircle2, Sliders } from 'lucide-react';
import { SKILLS } from '../data';

interface SkillsSectionProps {
  isDark: boolean;
}

export default function SkillsSection({ isDark }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'core-systems' | 'ai-data' | 'tooling'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto animate bar values when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const filteredSkills = selectedCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Stack Nodes', icon: Sliders },
    { id: 'frontend', label: 'Frontend Engine', icon: Cpu },
    { id: 'core-systems', label: 'Systems & API', icon: Terminal },
    { id: 'ai-data', label: 'AI & Data Integration', icon: Network },
  ];

  return (
    <div 
      id="skills-section-viewport"
      ref={sectionRef}
      className="relative w-full py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12 z-10 relative">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Diagnostic Assessment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight uppercase italic">
              Capability Metrics
            </h2>
            <p className={`text-sm md:text-base max-w-xl ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
              Quantifiable expertise metrics representing language fluency, runtime competence, and database orchestration speed. Hover over lines to view specialization depths.
            </p>
          </div>

          {/* Tab Selector Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`skill-category-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-blue-500/10 border-blue-500/40 text-blue-400 font-medium'
                        : 'bg-slate-900 border-slate-900 text-white font-medium'
                      : isDark
                        ? 'border-white/5 bg-[#0A0A0A] text-white/40 hover:bg-[#111] hover:border-white/10'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modular Grid Layout of Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredSkills.map(skill => {
            const isSkillHovered = hoveredSkill === skill.name;

            // Map standard tailwind emerald/amber/etc classes from data to solid/glow corporate blue style
            let barColorClass = "bg-gradient-to-r from-blue-600 to-cyan-400";
            if (skill.accentColor.includes("amber")) {
              barColorClass = "bg-gradient-to-r from-blue-500 to-blue-300";
            } else if (skill.accentColor.includes("indigo") || skill.accentColor.includes("cyan")) {
              barColorClass = "bg-gradient-to-r from-blue-600 to-cyan-300";
            }

            return (
              <div
                key={skill.name}
                id={`skill-bar-wrapper-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-5 rounded-xl border transition-all duration-300 relative group ${
                  isSkillHovered
                    ? isDark
                      ? 'bg-[#0A0A0A]/95 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                      : 'bg-white border-slate-900 shadow-xl shadow-slate-200/40'
                    : isDark
                      ? 'bg-[#0A0A0A]/30 border-white/5 hover:border-white/10'
                      : 'bg-slate-50/40 border-slate-200'
                }`}
              >
                {/* Header info */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-blue-500/70' : 'text-slate-800'}`} />
                    <span className="text-sm font-bold tracking-tight uppercase italic">{skill.name}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-xs">
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                      isDark ? 'bg-white/5 text-white/50' : 'bg-slate-200 text-slate-650'
                    }`}>
                      {skill.statusText}
                    </span>
                    <span className="text-blue-400 font-bold">{skill.proficiency}%</span>
                  </div>
                </div>

                {/* Progress bar slot with glow accentuation */}
                <div className={`h-2 text-xs w-full rounded-full overflow-hidden relative ${
                  isDark ? 'bg-white/5' : 'bg-slate-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className={`h-full rounded-full transition-all duration-300 relative shadow-[0_0_8px_rgba(59,130,246,0.5)] ${barColorClass}`}
                  />
                </div>

                {/* Micro tooltip detail helper explaining scale definition */}
                {isSkillHovered && (
                  <div className="text-[10px] font-mono mt-3 leading-relaxed text-white/30 transition-opacity duration-300 flex justify-between">
                    <span>Calibration matrix: [Engine status: optimal]</span>
                    <span className="text-blue-400 italic">Continuous production node deployer</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
