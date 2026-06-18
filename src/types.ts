export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  visualAccent: string; // Tailwind color class like 'text-emerald-400' or border styling
  codeSnippet?: string; // Showcase realistic elite code
  githubUrl?: string;
  liveUrl?: string;
  achievements: string[];
}

export interface CompanyExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  skillsAssociated: string[];
  relatedProjects: {
    title: string;
    description: string;
    impact: string;
  }[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0 to 100
  category: 'core-systems' | 'frontend' | 'ai-data' | 'tooling';
  accentColor: string; // for custom bar fills
  statusText: string; // e.g., 'Mastery', 'Proficient', 'Core focus'
}

export interface LogEntry {
  input: string;
  output: string | string[];
  timestamp: string;
  isCommand: boolean;
}
