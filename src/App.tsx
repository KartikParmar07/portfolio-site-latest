import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Terminal, Rocket, Check } from 'lucide-react';
import Header from './components/Header';
import InteractiveTerminal from './components/InteractiveTerminal';
import ParallaxProjects from './components/ParallaxProjects';
import WorkTimeline from './components/WorkTimeline';
import SkillsSection from './components/SkillsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { USER_PROFILE } from './data';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  // Sync dark mode class setup for nested tailwind items if required
  useEffect(() => {
    // Show a small, highly cool boot-up message to recruiters on first load
    const timer = setTimeout(() => {
      setShowNotification(true);
      // Auto close after 6 seconds
      setTimeout(() => setShowNotification(false), 6000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`${
        isDark 
          ? 'bg-[var(--color-elegant-bg)] text-[#E0E0E0]' 
          : 'bg-[#fafbfa] text-slate-800'
      } min-h-screen transition-colors duration-500 selection:bg-blue-500/20 selection:text-blue-400 relative overflow-x-hidden font-sans`}
    >
      {/* Absolute Aesthetic Radial / Linear Grid backdrop for techy vibe */}
      <div 
        className={`absolute inset-0 pointer-events-none -z-20 transition-opacity duration-500 overflow-hidden ${
          isDark ? 'opacity-25' : 'opacity-10'
        }`}
      >
        {/* Futuristic grid scan overlays */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:45px_45px] animate-grid-drift" 
          style={{ animationDuration: '70s' }}
        />
        {/* Soft radial glow to focus the viewer's eye on the center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1000px] bg-radial from-blue-500/5 via-transparent to-transparent blur-3xl animate-pulse-slow" />
      </div>

      {/* Floating Header */}
      <Header isDark={isDark} onThemeToggle={handleThemeToggle} />

      {/* Welcome Matrix Notification popup */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`p-4 rounded-xl border flex items-start gap-3 shadow-2xl relative overflow-hidden backdrop-blur-md ${
              isDark 
                ? 'bg-[#0A0A0A]/95 border-white/10 text-white' 
                : 'bg-white border-slate-900/95 text-slate-900'
            }`}
          >
            {/* Side status node */}
            <div className="w-1.5 h-full absolute left-0 top-0 bottom-0 bg-blue-550 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <div className="p-1 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
                Kartik_OS Booted
              </div>
              <p className="text-xs mt-1 leading-relaxed text-white/50">
                Sandbox fully loaded. Try typing in the interactive console below or scroll to inspect projects!
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* 🚀 Hero Section (Terminal Core Section) */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Hero: Narrative & Bio */}
          <div className="lg:col-span-6 space-y-8 text-left z-10">
            <div className="space-y-4">
              <div className={`inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border text-xs font-mono uppercase tracking-[0.15em] ${
                isDark 
                  ? 'border-white/10 bg-white/5 text-blue-400' 
                  : 'border-slate-200 bg-slate-100 text-slate-650'
              }`}>
                <Rocket className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
                <span>Compiler Online &amp; Ready</span>
              </div>

              {/* Majestic Headline Typography */}
              <div className="relative group">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 block mb-1">
                  FULL-STACK SYSTEMS ENGINEER
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[0.9] italic uppercase">
                  Hi, I'm <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Kartik.</span>
                </h1>
                <h1 className="text-xl md:text-2xl font-bold font-display tracking-[0.05em] text-white/50 uppercase mt-4">
                  I construct robust web pipelines.
                </h1>
              </div>

              {/* Creative bio with code context */}
              <p className={`text-sm md:text-base leading-relaxed max-w-xl ${isDark ? 'text-white/60' : 'text-slate-650'}`}>
                {USER_PROFILE.bio} Speeds matter, caching rules, and custom interface details set premium digital software apart.
              </p>
            </div>

            {/* Quick dashboard figures highlighting capability */}
            <div className="grid grid-cols-3 gap-6 py-4 border-y border-white/10 font-mono text-xs max-w-lg">
              <div>
                <dt className="text-white/30 uppercase tracking-widest text-[10px]">Experiences</dt>
                <dd className="text-base font-bold text-blue-400 mt-1">Mahindra, Tringapps</dd>
              </div>
              <div>
                <dt className="text-white/30 uppercase tracking-widest text-[10px]">Architecture</dt>
                <dd className="text-base font-bold text-blue-400 mt-1">Spring + React</dd>
              </div>
              <div>
                <dt className="text-white/30 uppercase tracking-widest text-[10px]">Mockito Tests</dt>
                <dd className="text-base font-bold text-blue-400 mt-1">85% Coverage</dd>
              </div>
            </div>

            {/* Scrolling Trigger Action banner */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleScrollToProjects}
                className={`py-3 px-8 rounded-full font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center space-x-2 border cursor-pointer ${
                  isDark
                    ? 'bg-white hover:bg-white/90 border-transparent text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                    : 'bg-slate-900 hover:bg-slate-850 border-transparent text-white font-bold shadow-md'
                }`}
              >
                <span>Compile Projects</span>
                <ChevronDown className="w-4 h-4 ml-1.5 animate-bounce" />
              </button>

              <a
                href="#contact"
                className={`py-3 px-8 rounded-full font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center border cursor-pointer ${
                  isDark
                    ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    : 'border-slate-350 hover:border-slate-900 hover:bg-slate-100'
                }`}
              >
                Connect Socket
              </a>
            </div>
          </div>

          {/* Right Hero: Responsive Interactive Terminal */}
          <div className="lg:col-span-6 z-10 w-full mt-6 lg:mt-0">
            <div className="relative">
              {/* Absolutes for futuristic circuit glowing lines backdrop */}
              <div aria-hidden="true" className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/5 blur-xl rounded-full" />
              <div aria-hidden="true" className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/5 blur-xl rounded-full" />
              
              {/* Terminal Emulator slot */}
              <InteractiveTerminal isDark={isDark} />
            </div>
          </div>

        </div>

        {/* Scroll cue arrow indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[9px] uppercase font-mono tracking-[0.25em] text-white/30">
          <span className="animate-pulse">Scroll to inspect core arrays</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce mr-0.5" />
        </div>
      </section>

      {/* 📂 Portfolios Section (Parallax projects lists) */}
      <section 
        id="projects" 
        className={`relative ${
          isDark ? 'bg-[#0A0A0A]/40' : 'bg-slate-150/10'
        }`}
      >
        <ParallaxProjects isDark={isDark} />
      </section>

      {/* 💼 Employment Milestones Timeline Section */}
      <section 
        id="experience" 
        className="relative"
      >
        <WorkTimeline isDark={isDark} />
      </section>

      {/* ⚡ Capability Skill Progress bars Section */}
      <section 
        id="skills" 
        className={`relative ${
          isDark ? 'bg-slate-950/25' : 'bg-slate-100/25'
        }`}
      >
        <SkillsSection isDark={isDark} />
      </section>

      {/* 📡 Synchronous Ingestion Form Section */}
      <section 
        id="contact" 
        className="relative"
      >
        <ContactForm isDark={isDark} />
      </section>

      {/* ⚙️ Diagnostic Metadata Footer Section */}
      <Footer isDark={isDark} />
    </div>
  );
}
