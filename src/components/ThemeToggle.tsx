import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle-btn"
      onClick={onToggle}
      className={`relative group flex items-center justify-between p-1.5 w-18 h-10 rounded-full border transition-all duration-300 outline-none cursor-pointer ${
        isDark 
          ? 'border-white/5 bg-[#0A0A0A]/95 hover:border-white/10' 
          : 'border-slate-300 bg-slate-100/80 hover:border-slate-400'
      }`}
      aria-label="Toggle visual theme"
    >
      {/* Outer container track light/dark visual representation */}
      <span className="sr-only">Toggle dark mode</span>
      
      {/* Animated orb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`absolute z-10 w-7 h-7 rounded-full flex items-center justify-center shadow-lg ${
          isDark 
            ? 'bg-gradient-to-tr from-blue-600 to-cyan-400 text-white left-1.5' 
            : 'bg-gradient-to-tr from-amber-500 to-orange-400 text-white left-9'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 animate-pulse" strokeWidth={2.5} />
        ) : (
          <Sun className="w-3.5 h-3.5" strokeWidth={2.5} />
        )}
      </motion.div>

      {/* Decorative inner indicators */}
      <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none">
        <Moon className={`w-3.5 h-3.5 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-40 text-slate-600'}`} />
        <Sun className={`w-3.5 h-3.5 transition-opacity duration-300 ${isDark ? 'opacity-45 text-amber-500' : 'opacity-0'}`} />
      </div>

      {/* Techy highlight overlay */}
      <div className={`absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xs pointer-events-none ${
        isDark ? 'bg-blue-400/10' : 'bg-amber-400/10'
      }`} />
    </button>
  );
}
