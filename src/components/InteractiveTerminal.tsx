import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal, Shield, ArrowRight, CornerDownLeft } from 'lucide-react';
import { LogEntry } from '../types';
import { SKILLS, PROJECTS, USER_PROFILE } from '../data';

interface InteractiveTerminalProps {
  isDark: boolean;
}

export default function InteractiveTerminal({ isDark }: InteractiveTerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    {
      input: '',
      output: [
        '----------------------------------------------------------------------',
        '⚡ KARTIK_PARMAR // CORE_OS V4.1a - PREVIEW_SANDBOX INITIALIZED ⚡',
        'SYSTEM READY: Mon, 09 Jun 2026 19:02:29 UTC',
        'Type "help" to list available terminal protocols.',
        '----------------------------------------------------------------------',
      ],
      timestamp: '19:02:29',
      isCommand: false,
    },
  ]);
  const [isTypingStream, setIsTypingStream] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const lowerCmd = cmd.toLowerCase();
    let res: string | string[] = '';
    const now = new Date().toLocaleTimeString();

    switch (lowerCmd) {
      case 'help':
        res = [
          'Available Protocol Commands:',
          '  help        - List terminal directives',
          '  info        - Display Kartik\'s executive professional summary',
          '  skills      - Query integrated technology capabilities & stack proficiency',
          '  projects    - Enumerate high-impact engineering repositories',
          '  contact     - Extract direct communication credentials & location nodes',
          '  matrix      - Trigger ambient cybernetic code visualization sequence',
          '  clear       - Wipe the current active visual terminal buffer',
        ];
        break;
      case 'info':
        res = [
          `👔 Name: ${USER_PROFILE.name}`,
          `🚀 Tagline: ${USER_PROFILE.tagline}`,
          `📍 Nodes: ${USER_PROFILE.location}`,
          `📧 Ingestion: ${USER_PROFILE.email}`,
          '---',
          USER_PROFILE.bio,
        ];
        break;
      case 'skills':
        res = [
          '⚡ CAPABILITY READINGS:',
          ...SKILLS.map(s => `  [#] ${s.name.padEnd(35)} [${'▇'.repeat(Math.round(s.proficiency / 10))}${'░'.repeat(10 - Math.round(s.proficiency / 10))}] ${s.proficiency}% - ${s.statusText}`)
        ];
        break;
      case 'projects':
        res = [
          '📦 INDEXED REPOSITORIES:',
          ...PROJECTS.flatMap(p => [
            `  ▶ ${p.title} (${p.category})`,
            `    Desc: ${p.description}`,
            `    Stack: ${p.tech.join(', ')}`,
            ''
          ])
        ];
        break;
      case 'contact':
        res = [
          '📡 ESTABLISHING DIRECT LINK COUPLING:',
          `  - Email:    ${USER_PROFILE.email}`,
          `  - GitHub:   ${USER_PROFILE.github}`,
          `  - LinkedIn: ${USER_PROFILE.linkedin}`,
          '  - Message:  Send a ping in the form block below for synchronous response.'
        ];
        break;
      case 'matrix':
        setIsTypingStream(true);
        res = [
          '⚙️ RUNNING DIAGNOSTICS STREAM...',
          '  [0.01s] [INFO] Loading WebGL matrices...',
          '  [0.12s] [ OK ] Particle field bound to Float32 array.',
          '  [0.28s] [WARN] Dev server HMR flagged: DISABLE_HMR=true.',
          '  [0.55s] [INFO] Streaming buffer latency: 12ms target.',
          '  [0.91s] [ OK ] Security rules deployed securely. Cloud connection live.',
          '  [1.15s] [SUCCESS] All systems operational. Kartik is ready for deployment.'
        ];
        setTimeout(() => setIsTypingStream(false), 1500);
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        res = `SYSTEM ERROR: Command PROTOCOL "${cmd}" not found. Type "help" for active routes.`;
    }

    setHistory(prev => [...prev, {
      input: cmd,
      output: res,
      timestamp: now,
      isCommand: true
    }]);
    setInput('');
  };

  const handleConsoleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      id="terminal-console-container"
      onClick={handleConsoleClick}
      className={`relative w-full rounded-xl border font-mono text-sm overflow-hidden shadow-2xl transition-all duration-300 ${
        isDark 
          ? 'bg-[#0A0A0A]/95 border-white/10 text-blue-400 focus-within:border-blue-500/50' 
          : 'bg-slate-900 border-slate-750 text-blue-300 focus-within:border-blue-400/50'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className={`flex items-center justify-between px-4 py-2.5 border-b select-none ${
        isDark ? 'bg-[#111111]/90 border-white/5' : 'bg-slate-800 border-slate-700'
      }`}>
        <div className="flex items-center space-x-2">
          {/* Mac-style action buttons */}
          <div className="w-3 h-3 rounded-full bg-rose-500/60" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60" />
          <div className="w-3 h-3 rounded-full bg-blue-500/65" />
          <span className="text-xs text-white/40 font-mono ml-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-blue-500" />
            guest@kartik-parmarOS:~
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-white/40">
          <Shield className="w-3 h-3 text-blue-500/70" />
          <span className="hidden sm:inline">SECURE_SSL</span>
        </div>
      </div>

      {/* Terminal Area Screen */}
      <div 
        id="terminal-history-screen"
        ref={containerRef}
        className="h-80 overflow-y-auto p-4 space-y-3 scanlines relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Dynamic Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-550/2 to-transparent w-full h-full animate-scanline" />

        {/* History records */}
        {history.map((log, index) => (
          <div key={index} className="space-y-1">
            {log.isCommand && (
              <div className="flex items-center text-white/80">
                <span className="text-blue-500 mr-2">guest$:</span>
                <span>{log.input}</span>
                <span className="text-white/30 text-[10px] ml-auto font-sans">{log.timestamp}</span>
              </div>
            )}
            
            {Array.isArray(log.output) ? (
              <div className="space-y-0.5 leading-relaxed pl-1 text-white/80">
                {log.output.map((line, lIdx) => (
                  <pre key={lIdx} className="whitespace-pre-wrap breakdown-words font-mono text-xs sm:text-sm">
                    {line}
                  </pre>
                ))}
              </div>
            ) : (
              <pre className="whitespace-pre-wrap pl-1 font-mono text-xs sm:text-sm leading-relaxed text-white/80">
                {log.output}
              </pre>
            )}
          </div>
        ))}

        {isTypingStream && (
          <div className="flex items-center space-x-2 text-blue-400">
            <span className="animate-pulse">🔄 Querying telemetry arrays...</span>
          </div>
        )}
      </div>

      {/* Input Prompt Panel */}
      <form 
        onSubmit={handleCommandSubmit}
        className={`flex items-center p-3 border-t font-mono ${
          isDark ? 'bg-[#0A0A0A]/95 border-white/5' : 'bg-[#111111] border-slate-700'
        }`}
      >
        <span className="text-blue-500 font-bold mr-2 select-none flex items-center">
          guest$: <ArrowRight className="w-3 h-3 ml-1 text-blue-500 animate-pulse" />
        </span>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Try typing "help", "skills" or "matrix"...'
          disabled={isTypingStream}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          className="flex-grow bg-transparent border-none outline-none text-blue-400 placeholder:text-blue-700/40 font-mono text-sm"
        />
        <button 
          id="terminal-send-btn"
          type="submit" 
          className="p-1 px-2 rounded hover:bg-white/5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
          title="Execute Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
