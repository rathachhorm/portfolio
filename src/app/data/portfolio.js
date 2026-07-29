export const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const profile = {
  name: "Chhorm Ratha",
  title: "Full-Stack Developer",
  location: "Steung Meanchey, Phnom Penh",
  availability: "Open to full-time opportunities",
  bio: "Full-stack developer with a CS degree focused on Java/Spring Boot backends and Next.js/Tailwind frontends, pairing clean architecture with reliable delivery.",
  image: "/assets/profile.jpg",
};

export const hero = {
  greeting: "Hi there,",
  intro: "My name is",
  headline: "Let's build together",
  ctaPrimary: "View projects",
  ctaPrimaryHref: "/projects",
  ctaSecondary: "Contact me",
};

export const highlights = [
  { label: "Systems", value: "5", note: "CRM, ERP, Social Media, and Desktop Automation" },
  { label: "Spring training", value: "864h", note: "Advanced Java & Spring Training at Korea Software HRD Center" },
];

export const about = {
  title: "A product-minded full-stack developer",
  description:
    "Production full-stack developer building secure backends with Spring Boot and Laravel, and responsive frontends with Next.js, Vue.js, and Tailwind CSS. Experienced in CRM, ERP, and Social Media system with clean APIs and Git-based workflows.",
};

export const experienceSection = {
  eyebrow: "Experience",
  title: "Full-stack Developer",
  description: "",
};

export const projectsSection = {
  eyebrow: "Featured work",
  title: "Projects I've Built",
  description:
    "Enterprise systems and full-stack applications delivered in production and academic settings.",
};

export const projectLogos = {
  KSHRD: "/assets/projects/kshrd-logo.png",
  RUPP: "/assets/projects/rupp-logo.png",
  ERP: "/assets/projects/erp-logo.png",
  C4BOOST: "/assets/projects/c4boost-logo.png",
  CRM: "/assets/projects/crm-logo.png",
  SUNSHINE: "/assets/projects/sunshine-logo.png",
};

export const projects = [
  {
    slug: "crm-system",
    title: "CRM System",
    category: "REST API",
    type: "BACKEND",
    status: "Live",
    period: "2025",
    role: "Back-End Developer",
    company: "LR Team",
    logo: projectLogos.CRM,
    logoBackground: "white",
    summary:
      "Architected secure CRM backend APIs using Java Spring Boot, integrating robust Role-Based Access Control (RBAC) and enterprise system integrations.",
    description:
      "Designed and built secure CRM backend APIs with Java Spring Boot for customer and sales operations. The API layer enforces Role-Based Access Control (RBAC) across modules and connects to enterprise systems through integration endpoints, keeping access policies and data exchange consistent and auditable.",
    highlights: [
      "Secure CRM backend APIs with Java Spring Boot",
      "Role-Based Access Control (RBAC) for roles, permissions, and protected resources",
      "Enterprise system integrations through API contracts",
      "Consistent authorization checks across CRM modules",
    ],
    tags: ["Spring Boot", "RBAC", "Java", "REST APIs"],
  },
  {
    slug: "erp-system",
    title: "ERP System",
    category: "Web application",
    type: "FULL STACK",
    status: "Live",
    period: "2025 -  Present",
    role: "Full-Stack Developer",
    company: "LR Team",
    logo: projectLogos.ERP,
    summary:
      "Built an enterprise ERP with Spring Boot and Vue.js, including RBAC, financial modules, a Project Management module with Kanban, and a Telegram alert bot for environment monitoring.",
    description:
      "ERP System is a full-stack multi-tenant platform that unifies financial operations, access control, and operational automation. I owned features from database modeling through Vue.js interfaces, including Advance Cash Request and Cash Refunds modules, Advance Fund Request modules, bank-slip verification, and a Project Management module with project CRUD, Kanban task boards, tasks, and attachments.",
    highlights: [
      "Permission catalog UI with role, group, and user assignment",
      "Advance Fund Request modules",
      "Advance Cash Request & Cash Refunds modules",
      "Report for Advance Cash modules",
      "Project Management module — projects, Kanban boards, tasks, and attachments",
      "Bank slip verification and transaction reconciliation",
      "Telegram alert bot for environment monitoring",
      "Integrations API keys",
      "Track user activity",
    ],
    tags: ["Spring Boot", "Vue.js", "PostgreSQL", "Telegram"],
    link: "https://erp.c4techhub.com",
    linkLabel: "Visit site",
  },
  {
    slug: "social-media-system",
    title: "Social Media System",
    category: "Web application",
    type: "FULL STACK",
    status: "Live",
    period: "2025",
    role: "Full-Stack Developer",
    company: "LR Team",
    logo: projectLogos.C4BOOST,
    logoBackground: "white",
    summary:
      "Built social media tools for Facebook reporting and automated comment moderation, with merchant payment API integration, webhook configuration, and KHQR verification.",
    description:
      "A Laravel and Vue.js platform for managing social media operations at scale. The system automates Facebook reporting and comment moderation, while integrating merchant payment APIs with webhook handlers and KHQR verification so transactions are validated securely without manual checks.",
    highlights: [
      "Facebook reporting dashboards and scheduled data exports",
      "Automated comment moderation with configurable rules",
      "Merchant payment API integration with webhook listeners",
      "KHQR verification for payment confirmation",
      "Laravel backend with Vue.js admin interfaces",
      "MySQL data layer with audit-friendly transaction logs",
    ],
    tags: ["Laravel", "Vue.js", "MySQL"],
    link: "https://c4boost.com/",
    linkLabel: "Visit site",
  },
  {
    slug: "desktop-automation-platform",
    title: "Desktop Automation Platform",
    category: "Desktop application",
    type: "FULL STACK",
    status: "Live",
    period: "2025",
    role: "Software Developer",
    company: "LR Team",
    logo: projectLogos.C4BOOST,
    logoBackground: "white",
    summary:
      "Architected modular plugin-based desktop platforms with Python and PySide6 using multi-threading for responsive UI.",
    description:
      "Built a desktop automation suite with a plugin architecture so new automation tasks can be added without rewriting the core app. PySide6 (Qt) powers the GUI, Selenium drives browser workflows, and multi-threading keeps the interface responsive while long-running jobs execute in the background.",
    highlights: [
      "Modular plugin system for extensible automation tasks",
      "PySide6 (Qt) desktop UI with responsive multi-threaded workers",
      "Selenium WebDriver integration for browser automation",
      "Task queue and progress tracking in the UI",
      "Reusable automation modules shared across plugins",
    ],
    tags: ["Python", "PySide6", "Selenium"],
  },
  {
    slug: "sunshine-logistics-website",
    title: "Sunshine Logistics Website",
    category: "Website",
    type: "FRONTEND",
    status: "Live",
    period: "2025",
    role: "Full Stack Developer",
    company: "Sunshine Logistics (Cambodia) Co., Ltd.",
    logo: projectLogos.SUNSHINE,
    logoBackground: "white",
    summary:
      "Built and launched the Sunshine Logistics company website for air, land, and sea freight services, with service pages, quote flows, and content publishing.",
    description:
      "Delivered the public marketing site for Sunshine Logistics (Cambodia) Co., Ltd. at sunshinecambodia.com. The site presents Cambodia’s gateway-to-global-trade positioning, end-to-end logistics services (ocean, air, land, customs clearance, warehousing, and more), company story, news, and contact/quote paths so customers can learn about services and request shipping support online.",
    highlights: [
      "Responsive company website for logistics services and brand presence",
      "Service pages for ocean, air, land freight, customs, and supply chain offerings",
      "About, news/blog, and contact sections for customer engagement",
      "Quote and inquiry paths for shipping requests",
      "WordPress + Elementor content structure for ongoing updates",
    ],
    tags: ["WordPress", "Elementor", "PHP"],
    link: "https://sunshinecambodia.com/",
    linkLabel: "Visit site",
  },
  {
    slug: "event-management-system",
    title: "Event Management System",
    category: "Web application",
    type: "FULL STACK",
    status: "Archived",
    period: "2024",
    role: "Full-Stack Developer",
    company: "Korea Software HRD Center",
    logo: projectLogos.KSHRD,
    summary:
      "Developed an event management platform integrating a Spring Boot backend with a Next.js frontend and RESTful APIs.",
    description:
      "An end-to-end event management platform built during advanced Spring training at the Korea Software HRD Center. The project covers event creation, registration flows, and admin tooling—with a Spring Boot API layer, PostgreSQL persistence, and a Next.js frontend for organizers and attendees.",
    highlights: [
      "Event CRUD with registration and capacity management",
      "Spring Boot REST APIs with PostgreSQL persistence",
      "Next.js frontend with Tailwind CSS styling",
      "Role separation for organizers vs. attendees",
      "Deployed with Docker on Linux for demo and UAT",
    ],
    tags: ["Spring Boot", "Next.js", "REST APIs", "PostgreSQL"],
  },
  {
    slug: "expense-tracking-spring-api",
    title: "Expense Tracking Spring API",
    category: "REST API",
    type: "BACKEND",
    status: "Archived",
    period: "2024",
    role: "Back-End Developer",
    company: "Korea Software HRD Center",
    logo: projectLogos.KSHRD,
    summary:
      "Spring Boot REST API for personal expense tracking with JWT auth, category management, receipt uploads, and PostgreSQL persistence via MyBatis.",
    description:
      "A group Spring Boot mini project that exposes secured REST endpoints for tracking expenses and categories. Users register with email OTP verification, authenticate via JWT, and manage expenses with pagination and sorting. Includes file upload for receipts, forgot-password flow, and Swagger/OpenAPI docs.",
    highlights: [
      "JWT authentication and authorization with Spring Security",
      "User registration, OTP email verification, and password reset",
      "Expense CRUD with pagination, sorting, and user-scoped records",
      "Category management API with full CRUD operations",
      "File upload and retrieval for expense receipts (images and PDFs)",
      "Swagger/OpenAPI documentation for API exploration",
    ],
    tags: ["Spring Boot", "MyBatis", "PostgreSQL", "REST APIs"],
    link: "https://github.com/Chea-MengLim/expense-tracking-spring-api",
    linkLabel: "View on GitHub",
  },
  {
    slug: "book-shop-system",
    title: "Book Shop System",
    category: "Desktop application",
    type: "FULL STACK",
    status: "Archived",
    period: "2023",
    role: "Full-Stack Developer",
    company: "Royal University of Phnom Penh",
    logo: projectLogos.RUPP,
    summary:
      "A .NET book shop management solution with an ASP.NET Core REST API, Windows Forms desktop app, and console client sharing a common DTO library.",
    description:
      "Multi-client book shop system built in C# with a layered ASP.NET Core API backed by MySQL via Entity Framework Core. The WinForms app manages books, customers, employees, sales, and reports through API integration, while a console client and shared model library keep requests and responses consistent across clients.",
    highlights: [
      "ASP.NET Core REST API with controllers, services, and repository pattern",
      "Entity Framework Core with MySQL/MariaDB and database migrations",
      "Windows Forms UI for books, customers, employees, sales, and reports",
      "Console client and shared DTO library (BookShopClientShare)",
      "Swagger/OpenAPI documentation for the API",
      "Dapper used alongside EF Core for data access",
    ],
    tags: ["C#", "REST APIs", "MySQL"],
    link: "https://github.com/rathachhorm/books",
    linkLabel: "View on GitHub",
  },
  {
    slug: "todo-web-mini-project",
    title: "Todo Web Project",
    category: "Web application",
    type: "FRONTEND",
    status: "Archived",
    period: "2024",
    role: "Front-End Developer",
    company: "Korea Software HRD Center",
    logo: projectLogos.KSHRD,
    summary:
      "A Next.js todo management app with NextAuth login, todo board and list views, workspace switching, and monthly task statistics.",
    description:
      "Web mini project built at the Korea Software HRD Center using Next.js 14 App Router. Users authenticate with NextAuth, browse todo boards and calendar-style list views, manage tasks with edit/delete actions, switch workspaces, and review monthly statistics—all styled with Tailwind CSS and DaisyUI.",
    highlights: [
      "NextAuth authentication with login, register, and middleware-protected routes",
      "Todo board view with task cards, tags, due dates, and edit/delete dropdown",
      "Todo list view with calendar-style day layout",
      "Workspace popup and workspace-scoped data fetching",
      "Monthly statistics sidebar on dashboard pages",
      "Tailwind CSS and DaisyUI for responsive UI components",
    ],
    tags: ["Next.js", "React.js", "Tailwind CSS", "REST APIs"],
    link: "https://github.com/rathachhorm/03_KPS_CHHORM_RATHA_WEB_MINI_PROJECT",
    linkLabel: "View on GitHub",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "LR Team",
    location: "Phnom Penh, Cambodia",
    locationType: "Hybrid",
    employmentType: "Full-time",
    period: "Jul 2025 - Present",
    summary:
      "Building CRM, ERP, social media, and desktop automation platforms—secure Spring Boot APIs with RBAC, Vue.js/Laravel frontends, enterprise integrations, and Python/PySide6 automation tooling.",
    skills: [
      "Spring Boot",
      "Java",
      "Vue.js",
      "Laravel",
      "PostgreSQL",
      "Python",
      "REST APIs",
      "RBAC",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Sunshine Logistics (Cambodia) Co., Ltd.",
    location: "Phnom Penh, Cambodia",
    employmentType: "Full-time",
    period: "Jan 2025 - Jun 2025",
    summary:
      "Built and launched the company website (sunshinecambodia.com) for air, land, and sea freight services—covering service pages, quote and contact flows, news content, and a WordPress/Elementor setup for ongoing publishing.",
    skills: ["WordPress", "Elementor", "PHP", "HTML5", "CSS3", "JavaScript"],
  },
  {
    role: "Full-Stack Developer",
    company: "Korea Software HRD Center",
    period: "Apr 2024 - Jul 2024",
    summary:
      "Built event and marketplace flows with Spring Boot and Next.js, handling data modeling and deployment.",
    skills: ["Spring Boot", "Next.js", "Tailwind CSS", "Git", "Docker", "Linux", "PostgreSQL"],
  },
  {
    role: "Assistant in Computer Architecture",
    company: "Royal University of Phnom Penh",
    period: "Apr 2022 - Sep 2022",
    summary:
      "Assisted with computer architecture coursework and lab support while completing CS studies.",
    skills: ["Teaching", "Computer Architecture", "Mentoring"],
  },
];

export const skills = [
  { name: "Java", description: "Backend services & APIs", level: 90 },
  { name: "Spring Boot", description: "Microservices, data, security", level: 88 },
  { name: "Python", description: "Automation and scripting", level: 80 },
  { name: "Next.js", description: "App Router and static export", level: 85 },
  { name: "React.js", description: "Hooks and component patterns", level: 85 },
  { name: "Vue.js", description: "Component-based UI development", level: 85 },
  { name: "MyBatis Data Access", description: "Mapper-based persistence", level: 88 },
  { name: "Spring Data JPA", description: "Repository and ORM persistence", level: 85 },
  { name: "Spring RESTful Web Service", description: "REST APIs with Spring Web", level: 85 },
  { name: "Spring Security", description: "Authentication and authorization", level: 85 },
  { name: "JSON Web Token", description: "Stateless authentication flows", level: 85 },
  { name: "Thymeleaf Engine", description: "Server-rendered templates", level: 80 },
  { name: "PHP", description: "Server-side scripting", level: 75 },
  { name: "C#", description: "ASP.NET Core APIs and desktop clients", level: 80 },
  { name: "HTML5", description: "Semantic layouts & accessibility", level: 90 },
  { name: "CSS3", description: "Responsive layouts and effects", level: 88 },
  { name: "JavaScript", description: "Interactive UI patterns", level: 90 },
  { name: "Bootstrap", description: "Rapid UI scaffolding", level: 78 },
  { name: "TypeScript", description: "Typed components & DX", level: 85 },
  { name: "Tailwind CSS", description: "Utility-first UI delivery", level: 88 },
  { name: "Next.js", description: "App Router and static export", level: 85 },
  { name: "React.js", description: "Hooks and component patterns", level: 85 },
  { name: "PostgreSQL", description: "Indexes, queries, tuning", level: 85 },
  { name: "MySQL", description: "Relational databases and queries", level: 85 },
  { name: "SQLite", description: "Embedded relational databases", level: 80 },
  { name: "SQL", description: "Queries, joins, aggregation", level: 80 },
  { name: "Linux", description: "CLI workflows and tooling", level: 80 },
  { name: "Docker", description: "Containerization and images", level: 80 },
  { name: "Laravel", description: "PHP framework and MVC", level: 80 },
  { name: "Express.js", description: "Node.js REST APIs", level: 80 },
  { name: "Figma", description: "Wireframes and prototypes", level: 80 },
  { name: "GitHub", description: "Repos, issues", level: 85 },
  { name: "GitLab", description: "Repository management", level: 85 },
  { name: "DigitalOcean", description: "Droplets and managed services", level: 80 },
  { name: "IntelliJ IDEA", description: "Java and Spring development", level: 90 },
  { name: "Visual Studio Code", description: "Frontend and full-stack editing", level: 90 },
  { name: "Cursor", description: "AI-assisted code editing", level: 85 },
  { name: "PyCharm", description: "Python IDE and debugging", level: 85 },
  { name: "WebStorm", description: "JavaScript and TypeScript IDE", level: 80 },
  { name: "DBeaver", description: "Database management and SQL tooling", level: 80 },
  { name: "pgAdmin", description: "PostgreSQL administration and query tooling", level: 80 },
  { name: "MobaXterm", description: "SSH terminal and remote session management", level: 85 },
  { name: "Postman", description: "API testing and collections", level: 85 },
  { name: "Swagger / OpenAPI", description: "API docs and contract design", level: 80 },
  { name: "PySide6 (Qt)", description: "Desktop GUI development", level: 85 },
  { name: "Selenium WebDriver", description: "Browser automation testing", level: 80 },
  { name: "Browser Automation", description: "Automated web workflows", level: 85 },
  { name: "Multi-threading", description: "Concurrent and responsive apps", level: 80 },
];

export const skillsSection = {
  title: "Skills & Technologies",
  description: "The tools and technologies I work with daily.",
};

export const skillCategories = [
  {
    id: "fullstack",
    label: "Full Stack",
    stacks: [
      { name: "Spring Boot + Vue.js", emoji: "☕" },
      { name: "Spring Boot + Next.js", emoji: "☕" },
      { name: "Laravel + Vue.js", emoji: "🐘" },
      { name: "Express.js + React.js", emoji: "🚀" },
    ],
  },
  {
    id: "frontend",
    label: "Front-End",
    skillNames: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Vue.js",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    skillNames: [
      "Java",
      "Spring Boot",
      "Python",
      "C#",
      "PHP",
      "Laravel",
      "Express.js",
      "Spring Data JPA",
      "MyBatis Data Access",
      "Spring RESTful Web Service",
      "Spring Security",
      "JSON Web Token",
      "Thymeleaf Engine",
    ],
  },
  {
    id: "database",
    label: "Database",
    skillNames: ["PostgreSQL", "MySQL", "SQLite", "SQL"],
  },
  {
    id: "devops",
    label: "DevOps",
    skillNames: ["Linux", "Docker", "DigitalOcean"],
  },
  {
    id: "automation",
    label: "Automation & GUI",
    skillNames: [
      "PySide6 (Qt)",
      "Selenium WebDriver",
      "Browser Automation",
      "Multi-threading",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skillNames: [
      "Figma",
      "GitHub",
      "GitLab",
      "IntelliJ IDEA",
      "Visual Studio Code",
      "Cursor",
      "PyCharm",
      "WebStorm",
      "DBeaver",
      "pgAdmin",
      "MobaXterm",
      "Docker",
      "Postman",
      "Swagger / OpenAPI",
    ],
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chhorm-ratha/",
    subtle: "Let's connect",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/rathachhorm",
    subtle: "Code & experiments",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "Telegram",
    href: "https://t.me/rathachhorm",
    subtle: "@rathachhorm on Telegram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  },
];

export const contact = {
  email: "chhormratha007@gmail.com",
  phone: "096 84 64 555",
  address: "St 38, Steung Meanchey, Meanchey, Phnom Penh",
  headline: "Let's build together",
  description:
    "Reach out about full-stack development, backend architecture, or automation projects. I am open to discussing your goals, timeline, and how we can ship reliable software together.",
  resume: "#",
};
