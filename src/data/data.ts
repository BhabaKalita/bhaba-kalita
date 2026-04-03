export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconType: "github" | "linkedin" | "mail" | "globe";
}

export interface Skill {
  name: string;
  category: "languages" | "frameworks" | "servicenow" | "cloud" | "tools";
}

export interface Experience {
  initial: string;
  title: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
}

export interface Service {
  title: string;
  iconType: "server" | "code" | "cloud";
  description: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export const siteConfig = {
  name: "Bhabajyoti Kalita",
  initials: "BK",
  title: "Software Engineer",
  headline: "Software\nEngineer",
  tagline: "Bringing Ideas to Life in Lines of Code",
  bio: "I architect and ship production web applications and ServiceNow solutions that solve real problems. With 5+ years in the field, I've built full-stack applications, cloud infrastructure, and enterprise ITSM workflows from the ground up. I turn complex requirements into reliable, scalable products.",
  email: "admin@bhabakalita.com",
  location: "Planet Earth",
  resumeUrl: "#",
};

export const stats: Stat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "India", label: "Location" },
  { value: "Full Stack & ITSM", label: "Focus" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/BhabaKalita",
    iconType: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhaba-kalita/",
    iconType: "linkedin",
  },
];

export const contactLinks: SocialLink[] = [
  {
    label: "Email Me",
    href: "mailto:admin@bhabakalita.com",
    iconType: "mail",
  },
  {
    label: "GitHub",
    href: "https://github.com/BhabaKalita",
    iconType: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhaba-kalita/",
    iconType: "linkedin",
  },
];

export const aboutText = [
  "A passionate software engineer with nearly 5 years of hands-on experience in shaping digital landscapes. Specializing in React and Redux for front-end magic and Node, Express, and Flask for robust backends.",
  "Beyond websites, I've dived into ServiceNow, excelling in Asset Management, ITSM, Predictive Intelligence, Virtual Agent, NLP, and GenAI. My passion lies in turning challenges into code and creating tech solutions that resonate.",
];

export const skills: Skill[] = [
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "HTML & CSS", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "React & Redux", category: "frameworks" },
  { name: "Next.js", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express.js", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  { name: "Tailwind CSS", category: "frameworks" },
  { name: "Bootstrap", category: "frameworks" },
  { name: "AIOps & Predictive Intelligence", category: "servicenow" },
  { name: "Virtual Agent & NLU", category: "servicenow" },
  { name: "GenAI Integration", category: "servicenow" },
  { name: "Asset Management", category: "servicenow" },
  { name: "ITSM Workflows", category: "servicenow" },
  { name: "CPI & CMDB", category: "servicenow" },
  { name: "ServiceNow Cloud", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Database Integration", category: "cloud" },
  { name: "VM Hosting", category: "cloud" },
  { name: "Git & GitHub", category: "tools" },
  { name: "REST APIs", category: "tools" },
  { name: "MongoDB", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "CI/CD", category: "tools" },
];

export const skillCategories = [
  { key: "servicenow" as const, label: "ServiceNow & ITSM", colorClass: "tag-1" },
  { key: "frameworks" as const, label: "Frameworks & Libraries", colorClass: "tag-2" },
  { key: "cloud" as const, label: "Cloud & DevOps", colorClass: "tag-3" },
  { key: "languages" as const, label: "Languages", colorClass: "tag-4" },
  { key: "tools" as const, label: "Tools & Databases", colorClass: "tag-5" },
];

export const experiences: Experience[] = [
  {
    initial: "S",
    title: "ServiceNow Platform",
    company: "ServiceNow",
    role: "Software Engineer",
    period: "2021 — Present",
    summary:
      "Crafting seamless ServiceNow solutions, configuring modules, and optimizing ITSM processes with AI integration.",
    details: [
      "Configuring and optimizing ITSM modules for enterprise-scale workflows.",
      "Integrating Predictive Intelligence and GenAI capabilities for enhanced automation.",
      "Developing Virtual Agent experiences with NLU for user-friendly self-service.",
      "Building custom applications on the ServiceNow platform with best practices.",
    ],
  },
  {
    initial: "W",
    title: "Web Applications",
    company: "Full Stack",
    role: "Full Stack Developer",
    period: "2020 — Present",
    summary:
      "Building responsive front ends with React-Redux and crafting robust back-ends using Node.js and Express.",
    details: [
      "Architecting end-to-end application experiences with React, Redux, and Next.js.",
      "Building RESTful APIs with Node.js, Express, and Flask.",
      "Implementing responsive designs with Tailwind CSS and Bootstrap.",
      "Integrating databases and third-party services for seamless data flow.",
    ],
  },
  {
    initial: "C",
    title: "Cloud Platforms",
    company: "Cloud Infrastructure",
    role: "Cloud Engineer",
    period: "2020 — Present",
    summary:
      "Developing cloud-native applications and managing infrastructure on Azure and AWS.",
    details: [
      "Developing custom ITSM applications in ServiceNow Cloud Platform.",
      "Hosting and maintaining websites on virtual machine instances with database integration.",
      "Setting up streaming jobs from DB to Server on Azure and AWS.",
      "Containerizing applications with Docker for consistent deployments.",
    ],
  },
];

export const services: Service[] = [
  {
    title: "ServiceNow Application Development",
    iconType: "server",
    description: [
      "Crafting seamless ServiceNow solutions — configuring modules, optimizing ITSM processes, and integrating Predictive Intelligence for enhanced workflows.",
      "From developing powerful workflows to harnessing the potential of Virtual Agents, creating efficient and user-friendly experiences.",
      "Shaping GenAI capabilities, ensuring a cohesive blend of automation and intelligence in every application.",
    ],
  },
  {
    title: "Full Stack Development",
    iconType: "code",
    description: [
      "Creating sleek React-Redux interfaces and architecting robust backends with Node, Express, and Flask for seamless end-to-end application experiences.",
      "Building responsive front ends with React-Redux, crafting intuitive back-ends using Node.js and Express.",
    ],
  },
  {
    title: "Cloud Infra-Architecture",
    iconType: "cloud",
    description: [
      "Working on multiple cloud platforms including developing custom ITSM applications in ServiceNow Cloud Platform.",
      "Hosting and maintaining websites on virtual machine instances along with integration of databases.",
      "Setting up streaming jobs from DB to Server or vice-versa on Azure and AWS.",
    ],
  },
];
