import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Terminal Core' },
    { id: 'projects', label: 'Portfolios' },
    { id: 'experience', label: 'Employment' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'contact', label: 'Get in Touch' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section calculation based on offsets
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#050505]/80 border-b border-white/5 backdrop-blur-md py-3'
            : 'bg-white/80 border-b border-slate-200/80 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand/Code Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center space-x-2 text-blue-400 font-mono text-sm group cursor-pointer focus:outline-none"
        >
          <Terminal className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="flex items-center gap-1 font-bold tracking-tighter uppercase italic">
            KARTIK <span className="text-white/20 font-light font-sans">•</span> PARMAR
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                  isActive
                    ? isDark ? 'text-blue-400 font-semibold' : 'text-slate-900 font-semibold'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.label}
                {/* Active underlining hook */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action panel (Theme + Menu) */}
        <div className="flex items-center space-x-4">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-lg border md:hidden focus:outline-none cursor-pointer ${
              isDark ? 'border-white/10 text-white/70 hover:bg-[#111]' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle structural visual helper menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className={`px-4 pt-4 pb-6 space-y-3 shadow-2xl border-b ${
            isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-white border-slate-150'
          }`}>
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? isDark 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                        : 'bg-slate-100 text-slate-900 border border-slate-200'
                      : 'text-white/40 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  <Cpu className={`w-3.5 h-3.5 ${isActive ? 'text-blue-500' : 'text-transparent'}`} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
