export const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const profile = {
  name: "Chhorm Ratha",
  title: "",
  location: "Phnom Penh, Cambodia",
  availability: "Open to full-time opportunities",
  bio: "Full-stack developer with a CS degree focused on Java/Spring Boot backends and Next.js/Tailwind frontends, pairing clean architecture with reliable delivery.",
  image: "/assets/profile_image.jpg",
};

export const hero = {
  greeting: "Hi there,",
  intro: "My name is",
  headline: "I build full-stack solutions",
  ctaPrimary: "View projects",
  ctaSecondary: "Contact me",
};

export const highlights = [
  { label: "Years shipping", value: "3+", note: "Building web apps end-to-end" },
  { label: "Projects delivered", value: "8", note: "Production and academic builds" },
  { label: "Response time", value: "<24h", note: "Fast async collaboration" },
];

export const about = {
  title: "A product-minded full-stack partner",
  description:
    "Full-stack developer blending Spring Boot services with responsive Next.js/Tailwind UI. Clean data models, reliable APIs, and collaborative Git workflows to ship features quickly and safely.",
};

export const projects = [
  {
    title: "Mart Management UI",
    category: "Retail dashboard",
    summary: "JavaScript dashboard for mart management with inventory-facing UI components.",
    tags: ["JavaScript", "UI", "Dashboard"],
    link: "https://github.com/rathachhorm/mart-management-ui",
  },
  {
    title: "Expense Tracking Spring Boot",
    category: "Backend service",
    summary: "Spring Boot REST API for expense tracking with data modeling and persistence.",
    tags: ["Spring Boot", "Java", "REST"],
    link: "https://github.com/rathachhorm/Expense_Tracking_Spring_Boot",
  },
  {
    title: "Stock Management System",
    category: "Business app",
    summary: "Stock management application handling inventory operations and reporting.",
    tags: ["JavaScript", "System design"],
    link: "https://github.com/rathachhorm/Stock_Management_System",
  },
  {
    title: "E-Commerce Microservice",
    category: "Microservices",
    summary: "Java microservice for e-commerce workflows with API endpoints and data handling.",
    tags: ["Java", "Microservices", "APIs"],
    link: "https://github.com/rathachhorm/E-Commerce_Microservice",
  },
];

export const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Sunshine Logistics (Cambodia) Co., Ltd.",
    period: "Jan 2025 - May 2025",
    summary:
      "Delivered logistics features with Spring Boot APIs and Next.js interfaces, keeping data flow secure and responsive.",
    skills: ["Spring Boot", "Next.js", "PostgreSQL", "REST APIs"],
  },
  {
    role: "Event/Market Project Developer",
    company: "Freelance",
    period: "Apr 2024 - Jul 2024",
    summary:
      "Built event and marketplace flows with Spring Boot and Next.js, handling data modeling and deployment.",
    skills: ["Spring Boot", "Next.js", "Tailwind CSS", "GitHub"],
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
  { name: "MyBatis Data Access", description: "Mapper-based persistence", level: 82 },
  { name: "Spring RESTful Web Service", description: "REST APIs with Spring Web", level: 86 },
  { name: "Spring Security", description: "Authentication and authorization", level: 84 },
  { name: "JSON Web Token", description: "Stateless authentication flows", level: 82 },
  { name: "Thymeleaf Engine", description: "Server-rendered templates", level: 78 },
  { name: "Python", description: "Automation and scripting", level: 80 },
  { name: "C", description: "Systems programming fundamentals", level: 72 },
  { name: "C++", description: "OOP and performance", level: 70 },
  { name: "C#", description: ".NET and desktop basics", level: 68 },
  { name: "PHP", description: "Server-side scripting", level: 70 },
  { name: "HTML5", description: "Semantic layouts & accessibility", level: 90 },
  { name: "CSS3", description: "Responsive layouts and effects", level: 88 },
  { name: "JavaScript", description: "Interactive UI patterns", level: 92 },
  { name: "Bootstrap", description: "Rapid UI scaffolding", level: 78 },
  { name: "TypeScript", description: "Typed components & DX", level: 82 },
  { name: "Tailwind CSS", description: "Utility-first UI delivery", level: 88 },
  { name: "Next.js", description: "App Router and static export", level: 86 },
  { name: "React", description: "Hooks and component patterns", level: 88 },
  { name: "Data Modeling", description: "Schema design and relationships", level: 82 },
  { name: "PostgreSQL", description: "Indexes, queries, tuning", level: 80 },
  { name: "MongoDB", description: "Document modeling and queries", level: 78 },
  { name: "SQL", description: "Queries, joins, aggregation", level: 78 },
  { name: "Linux", description: "CLI workflows and tooling", level: 76 },
  { name: "Docker", description: "Containerization and images", level: 78 },
  { name: "NestJS", description: "TypeScript backend framework", level: 80 },
  { name: "Laravel", description: "PHP framework and MVC", level: 72 },
  { name: "Figma", description: "Wireframes and prototypes", level: 74 },
  { name: "Kubernetes", description: "Container orchestration", level: 72 },
  { name: "Ansible", description: "Config management automation", level: 70 },
  { name: "Jenkins", description: "CI pipelines and automation", level: 72 },
  { name: "GitHub", description: "Repos, issues, Actions", level: 85 },
  { name: "GitLab", description: "CI/CD and repo management", level: 78 },
  { name: "DigitalOcean", description: "Droplets and managed services", level: 70 },
  { name: "Networking", description: "Routing, DNS, troubleshooting", level: 70 },
  { name: "Google Cloud", description: "Compute and storage basics", level: 68 },
  { name: "Word", description: "Documentation and reporting", level: 80 },
  { name: "Excel", description: "Spreadsheets and analysis", level: 82 },
  { name: "Powerpoint", description: "Presentations and storytelling", level: 78 },
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
  phone: "+855 97 200 7701",
  headline: "Let’s build together",
  description:
    "Tell me about the audience, goals, and timeline. I can jump in with discovery, design, and frontend implementation.",
  resume: "#",
};
