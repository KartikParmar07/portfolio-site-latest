import { ArrowUp, Terminal, Cpu } from 'lucide-react';
import { USER_PROFILE } from '../data';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const handleScrollTop = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="main-app-footer"
      className={`border-t py-12 px-4 md:px-8 transition-colors duration-300 relative ${
        isDark ? 'bg-black/60 border-white/5 text-white/40' : 'bg-slate-100/50 border-slate-200 text-slate-655'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Copy info + System Clock metadata */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-white/80">
              {USER_PROFILE.name} — SYSTEM_OS V4.1
            </span>
          </div>
          <p className="text-[11px] font-mono text-white/30">
            © 2026 Kartik Parmar. All systems compiled with care.
          </p>
        </div>

        {/* Middle Side: Diagnostic node telemetry */}
        <div className="hidden lg:flex items-center space-x-4 text-[10px] font-mono text-white/30">
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-blue-500/70" />
            ENGINE_RUNTIME: VITE_REACT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
          <span>SYS_COMPILE: [SUCCESSFUL]</span>
        </div>

        {/* Right Side: Back to core telemetry button */}
        <button
          onClick={handleScrollTop}
          id="back-to-top-btn"
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-widest transition-all duration-250 cursor-pointer ${
            isDark 
              ? 'border-white/5 bg-[#0A0A0A] hover:border-white/10 hover:bg-[#111] text-white/50 hover:text-blue-400' 
              : 'border-slate-250 bg-white hover:border-slate-350 text-slate-600 hover:text-slate-900 shadow-xs'
          }`}
          aria-label="Return to landing core viewport"
        >
          <span>UPWARD PIN</span>
          <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
        </button>
      </div>
    </footer>
  );
}
