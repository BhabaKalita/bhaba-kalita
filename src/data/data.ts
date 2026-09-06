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
  iconType: "bot" | "server" | "code" | "cloud";
  highlights?: string[];
  summary: string;
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
    title: "AI Agent Development",
    iconType: "bot",
    highlights: ["MCP Servers", "Tool Calling", "Multi-step Agents"],
    summary:
      "Design and build AI agents that reason, plan, and take action across real systems — not just chat interfaces.",
    description: [
      "Connect agents to Model Context Protocol (MCP) servers so they securely use tools, APIs, and data sources.",
      "Automate multi-step workflows with clear guardrails, observability, and human-in-the-loop controls.",
    ],
  },
  {
    title: "ServiceNow Expertise",
    iconType: "server",
    highlights: ["CMDB", "Asset Management", "SPM", "CSM"],
    summary:
      "Design, configure, and optimize ServiceNow solutions across **CMDB, ITSM, ITOM, FSM, and Asset Management**, ensuring configuration and operational data remains accurate, reliable, and actionable.",
    description: [
      "Configure and optimize **CMDB and Asset Management**, including data governance, identification and reconciliation, Discovery, and integrations to maintain high-quality configuration data.",
      "Develop and implement **ITSM solutions** across Incident, Problem, Change, Request, Knowledge, and Service Catalog management to streamline IT operations.",
      "Build and enhance **Field Service Management (FSM)** solutions to automate field operations, task assignment, scheduling, and service delivery.",
      "Implement **Cloud Discovery** to discover and map cloud infrastructure, applications, and dependencies across enterprise environments.",
      "Deliver **Strategic Portfolio Management (SPM)** and **Customer Service Management (CSM)** solutions that align demand, delivery, customer support, and business objectives.",
      "Develop **AI-powered and automation-driven workflows** using ServiceNow capabilities such as **Now Assist, Predictive Intelligence, Virtual Agent, and Agentic AI** to reduce manual effort and improve operational efficiency.",
      "Design and integrate **Moveworks** with ServiceNow to enable AI-driven employee support, request automation, and intelligent service experiences.",
      "Build complex **workflows, integrations, business rules, Scripted REST APIs, and automation solutions** to improve ServiceNow operations and eliminate repetitive manual processes.",
    ],
  },
  {
    title: "Full Stack Development",
    iconType: "code",
    summary:
      "Creating sleek React-Redux interfaces and architecting robust backends with Node, Express, and Flask for seamless end-to-end application experiences.",
    description: [
      "Building responsive front ends with React-Redux, crafting intuitive back-ends using Node.js and Express.",
    ],
  },
  {
    title: "Cloud Infra-Architecture",
    iconType: "cloud",
    summary:
      "Design, deploy, and maintain cloud infrastructure and applications across **Amazon Web Services (AWS)** and **Microsoft Azure**, with hands-on experience integrating cloud services with enterprise applications and ServiceNow.",
    description: [
      "Work with **AWS and Microsoft Azure** cloud platforms to design, deploy, and maintain scalable infrastructure and application environments.",
      "Deploy and manage applications and websites on **virtual machines, compute instances, and cloud-hosted environments**, including database integration.",
      "Work with key **AWS services** such as EC2, S3, RDS, Lambda, IAM, CloudWatch, and networking components.",
      "Work with **Microsoft Azure services** including Virtual Machines, Azure Storage, Azure SQL Database, Functions, Azure Monitor, Entra ID, and networking services.",
      "Configure and maintain **database-to-server and server-to-database data pipelines**, including streaming and automated data processing across AWS and Azure environments.",
      "Integrate cloud infrastructure with enterprise platforms and applications to support **monitoring, automation, data synchronization, and operational workflows**.",
    ],
  },
];
