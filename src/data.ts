import { Project, CompanyExperience, Skill } from './types';

export const USER_PROFILE = {
  name: "Kartik Parmar",
  tagline: "Software Engineer",
  bio: "Full-Stack Engineer specialized in bridging high-performance distributed backend architectures in Spring Boot with highly stateful, interactive frontend environments using React.js. Experienced in database stored procedures, transactional workflows, and system refactoring to enhance reliability and latency buffers.",
  location: "Mumbai, India",
  email: "kartiksparmar7@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "#",
};

export const PROJECTS: Project[] = [
  {
    id: "qkart-frontend",
    title: "QKART FRONTEND",
    subtitle: "E-Commerce Frontend Core Engine",
    category: "React & REST Systems",
    description: "Built the reactive core logic for authentication, dynamic shopping carts, and a multi-step checkout workflow inside an intensive e-commerce dashboard. Implemented user-feedback popping systems with notistack snackbars and responsive grids with React Material UI.",
    tech: ["React.js", "Material UI", "REST APIs", "Debouncing", "Bearer Token", "Netlify"],
    visualAccent: "from-blue-600 to-indigo-500",
    codeSnippet: `// React Component logic for products list loading with debounced search
import { useState, useEffect } from 'react';

export function ProductSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 500); // 500ms debouncing logic

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  return (
    <input 
      type="text" 
      placeholder="Search books/products..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      className="px-4 py-3 border rounded-xl bg-slate-900 border-white/5 text-blue-400 focus:outline-none"
    />
  );
}`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    achievements: [
      "Designed automatic state-preservations, managing authorization levels via secure Bearer Tokens.",
      "Optimized search performance by over 40% using custom React state-management and input debouncing algorithms.",
      "Configured a fully responsive Material UI design layout, delivering a uniform, mobile-friendly UX."
    ]
  },
  {
    id: "qtrip",
    title: "QTRIP",
    subtitle: "Dynamic Multi-City Travel Hub",
    category: "Dynamic Web Engineering",
    description: "Built an booking-engine website featuring multi-select search filters, dynamic reservation forms, responsive image carousels, and persistent booking management.",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "DOM Manipulation", "Netlify", "Render"],
    visualAccent: "from-cyan-500 to-blue-500",
    codeSnippet: `// LocalStorage core user states & reservation fetch execution
const userPreferences = {
  theme: localStorage.getItem("preferred_theme") || "dark",
  persist: function(prefs) {
    localStorage.setItem("preferred_theme", prefs.theme);
  }
};

async function submitReservationPayload(formNode) {
  const data = new FormData(formNode);
  const response = await fetch("https://qtrip-backend.render.com/reservations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(data))
  });
  return response.ok ? await response.json() : null;
}`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    achievements: [
      "Implemented responsive web forms, dynamically updating booking tables via native DOM manipulation and the Fetch API.",
      "Decoupled UI features using conditional rendering routines and integrated custom multi-select filtration.",
      "Established localStorage persistence layers, protecting user session profiles across page transitions."
    ]
  },
  {
    id: "online-book-store",
    title: "Online Book Store",
    subtitle: "Java MVC CRUD Administration System",
    category: "Full-Stack Java Enterprise",
    description: "A Java-based MVC CRUD application enabling administrators to manage book databases, track incoming orders, and manage inventory seamlessly.",
    tech: ["Java", "MySQL", "MVC Pattern", "Servlets", "JSP", "JDBC", "Bootstrap", "Figma"],
    visualAccent: "from-blue-500 to-teal-500",
    codeSnippet: `// Java MVC Servlet controller handling Book CRUD operations
@WebServlet("/books/admin")
public class BookControllerServlet extends HttpServlet {
    private BookDatabaseDAO bookDAO = new BookDatabaseDAO();

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        String action = req.getServletPath();
        if ("/books/admin/list".equals(action)) {
            List<Book> books = bookDAO.retrieveAllBooks();
            req.setAttribute("availableBooks", books);
            req.getRequestDispatcher("/admin-catalog.jsp").forward(req, resp);
        }
    }
}`,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    achievements: [
      "Engineered secure database pipelines using vanilla JDBC, connecting Java servlets to a custom relational MySQL engine.",
      "Developed comprehensive administration roles, allowing remote addition, removal, and live editing of book details.",
      "Designed orderly ID generators to safely assign, route, and track order processing workflows."
    ]
  }
];

export const WORK_EXPERIENCE: CompanyExperience[] = [
  {
    id: "mahindra-finance",
    company: "Mahindra Finance",
    role: "Full-Stack Developer (Spring Boot + React JS)",
    period: "Sep 2024 - Present",
    location: "Mumbai, India",
    summary: "Engineering end-to-end financial interfaces and backend microservices under the Receipting Management LMS++ project.",
    bullets: [
      "Engineered responsive React.js interfaces for IHM Refund Functionality, incorporating Maker-Checker workflows, dynamic parameterized forms, and robust API integrations.",
      "Designed and implemented secure, idempotent REST APIs and background scheduled jobs in Spring Boot (Java 19) to sync data with SQS, FOS, and Finnone.",
      "Achieved a modular, loosely coupled application structure, increasing Mockito test coverage to 85% and upgrading SonarQube quality standard gates.",
      "Resolved high-priority production defects, optimized API response speeds, and enabled seamless S3 file uploads."
    ],
    skillsAssociated: ["Spring Boot", "React.js", "Java 19", "PostgreSQL", "Mockito", "SonarQube", "AWS S3"],
    relatedProjects: [
      {
        title: "Receipting Management LMS ++",
        description: "Implemented high-safety refund workflows with bank name checks and S3 uploads.",
        impact: "Mockito test coverage increased to 85%"
      }
    ]
  },
  {
    id: "tringapps",
    company: "Tringapps Inc",
    role: "Full-Stack Developer (Spring Boot + React JS)",
    period: "Feb 2024 - Sep 2024",
    location: "Mumbai, India",
    summary: "Developed advanced PostgreSQL report procedures and Spring Boot pipelines for Mahindra Finance's Trade Advance modules.",
    bullets: [
      "Created highly tailored PostgreSQL stored procedures and foreign tables to aggregate system data across separate databases.",
      "Developed Spring Boot microservices and REST Template integration adapters to translate files into Excel download formats on the fly.",
      "Designed trade advance request report panels with multi-parameter layouts and complex REST payload validations.",
      "Resolved numerous critical frontend and backend application bugs, ensuring optimal transaction processing speeds."
    ],
    skillsAssociated: ["Spring Boot", "PostgreSQL", "React.js", "Axios", "REST Template", "Excel Gen"],
    relatedProjects: [
      {
        title: "Trade Advance Request Report",
        description: "Postgres data consolidation with Base64-to-Excel stream conversions.",
        impact: "Dozens of report data bugs optimized"
      }
    ]
  },
  {
    id: "goldensource",
    company: "GoldenSource Corporation",
    role: "Junior Software Engineer",
    period: "Oct 2021 - Oct 2023",
    location: "Mumbai, India",
    summary: "Implemented SQL transactional procedures and Java workflows for Barclays Project (BBCans + CA Implementation + PerSecurity).",
    bullets: [
      "Created transactional SQL procedures handling mass updates across complex tables based on events from Bloomberg Vendor.",
      "Designed custom Java Spring file processing engines to automatically ingest, validate, and parse corporate actions.",
      "Established comprehensive SQL rollback scripts to revert database updates in response to CA invalidations.",
      "Managed safe development branches in Git/Bitbucket and successfully supported product deployments."
    ],
    skillsAssociated: ["Java Spring", "SQL", "PL/SQL", "Bitbucket", "Unit Testing", "Bitbucket", "Shell Scripting"],
    relatedProjects: [
      {
        title: "Bloomberg Event Processor",
        description: "Automated event parsing rules and database transaction updates on Barclays tables.",
        impact: "Processed 8 distinct event types with zero drift"
      }
    ]
  }
];

export const SKILLS: Skill[] = [
  // Core Systems
  { name: "Java / Spring Boot & Microservices", proficiency: 95, category: "core-systems", accentColor: "bg-blue-600 shadow-blue-600/20", statusText: "Expert / Core" },
  { name: "SQL & Relational Databases", proficiency: 90, category: "core-systems", accentColor: "bg-blue-500 shadow-blue-500/20", statusText: "Expert" },
  { name: "Node.js (API Integration)", proficiency: 88, category: "core-systems", accentColor: "bg-cyan-500 shadow-cyan-500/20", statusText: "Advanced" },
  
  // Frontend
  { name: "React.js & Modern Frontend Hooks", proficiency: 93, category: "frontend", accentColor: "bg-blue-400 shadow-blue-400/20", statusText: "Expert" },
  { name: "TypeScript / JavaScript ES6+", proficiency: 92, category: "frontend", accentColor: "bg-cyan-400 shadow-cyan-400/20", statusText: "Expert" },
  { name: "HTML5 / CSS3 & Modern UI", proficiency: 95, category: "frontend", accentColor: "bg-blue-500 shadow-blue-500/20", statusText: "Expert" },

  // AI & Data (or database technologies)
  { name: "PostgreSQL & Database Optimization", proficiency: 91, category: "ai-data", accentColor: "bg-blue-600 shadow-blue-600/20", statusText: "Advanced" },
  { name: "MySQL, JDBC & Hibernate Core", proficiency: 90, category: "ai-data", accentColor: "bg-blue-500 shadow-blue-500/20", statusText: "Advanced" },
  { name: "JSON Parsing & Axios Integration", proficiency: 94, category: "ai-data", accentColor: "bg-cyan-500 shadow-cyan-500/20", statusText: "Expert" },

  // Tooling
  { name: "Git / Bitbucket & Version Control", proficiency: 92, category: "tooling", accentColor: "bg-blue-500 shadow-blue-500/20", statusText: "Expert" },
  { name: "AWS S3 & Cloud Storage Ingestion", proficiency: 85, category: "tooling", accentColor: "bg-cyan-600 shadow-cyan-600/20", statusText: "Advanced" },
  { name: "Figma (UI/UX Blueprint Design)", proficiency: 87, category: "tooling", accentColor: "bg-blue-400 shadow-blue-400/20", statusText: "Advanced" }
];
