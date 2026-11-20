// ─── Type Definitions ────────────────────────────────────────────────

export interface Profile {
  name: string;
  monogram: string;
  title: string;
  headline: string;
  subheadline: string;
  badge: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  linkedinDisplay: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LeadershipCard {
  title: string;
  organization: string;
  description: string;
  period?: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  url: string;
}

export interface HeroTerminalLine {
  key: string;
  value: string;
}

// ─── Data ────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Gouthaman K R",
  monogram: "GKR",
  title: "Python & Django Backend Developer",
  headline: "Gouthaman K R — Python & Django Backend Developer",
  subheadline:
    "Architecting scalable microservices, high-throughput REST APIs, and robust payment & search infrastructures.",
  badge: "Available for Backend & Full-Stack Opportunities",
  bio: "Backend developer with deep code experience. Experienced in building and maintaining both monolithic and microservices architectures for ed-tech and e-commerce platforms. Passionate about clean architecture, TDD, mentoring junior developers, and seamless frontend-backend collaboration.",
  email: "gouthamraveendran123g@gmail.com",
  phone: "+91 7902210653",
  location: "Thrissur, Kerala, India - 680304",
  linkedin: "https://www.linkedin.com/in/gouthaman-kr",
  linkedinDisplay: "linkedin.com/in/gouthaman-kr",
  image: "/images/profile-transparent.png",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

export const heroTerminalLines: HeroTerminalLine[] = [
  { key: "stack[0]", value: '"Python"' },
  { key: "stack[1]", value: '"Django"' },
  { key: "stack[2]", value: '"Microservices"' },
  { key: "stack[3]", value: '"Docker"' },
  { key: "stack[4]", value: '"Elasticsearch"' },
];

export const leadershipCards: LeadershipCard[] = [
  {
    title: "State Head",
    organization: "Talrop",
    description:
      "Spearheaded ecosystem expansion outside Kerala into Jharkhand, mentoring students to build the local tech ecosystem.",
  },
  {
    title: "Full Stack Support Engineer",
    organization: "Steyp",
    description:
      "Supported and engineered solutions for a large-scale digital university platform.",
  },
  {
    title: "Bachelor of Arts in Economics",
    organization: "St. Augustine H.S.S, Kuttanellur",
    description: "Education",
    period: "06/2020",
  },
];

export const techCategories: TechCategory[] = [
  {
    title: "Backend & Architecture",
    items: [
      "Python",
      "Django",
      "Django REST Framework (DRF)",
      "Microservices",
      "Monolithic Architecture",
      "OOP",
      "Data Structures",
      "Multithreading",
      "TDD",
      "Decorators",
      "Swagger UI",
    ],
  },
  {
    title: "Integrations & Search",
    items: [
      "Elasticsearch",
      "Typesense",
      "Razorpay",
      "Stripe",
      "CashFree",
      "PhonePe",
      "JWT",
      "OAuth2",
      "Firebase Push Notifications",
      "WhatsApp API (MessageBird)",
      "OTP Services",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "React Native",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass",
      "Bootstrap",
      "jQuery",
      "Django Templates",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Amazon S3", "Git", "GitHub", "GitLab"],
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Python - Django Developer",
    location: "Kochi, India",
    period: "12/2022 – Present",
    bullets: [
      "Architected and maintained monolithic and microservices backends for learning platforms and e-commerce applications.",
      "Built secure REST APIs with Django REST Framework using JWT and OAuth2 authentication.",
      "Integrated multi-provider payment gateways (CashFree, Stripe, Razorpay, PhonePe), Firebase push notifications, OTP services, and MessageBird WhatsApp APIs.",
      "Implemented high-speed search engines using Elasticsearch and Typesense.",
      "Managed deployments and storage with Docker and Amazon S3, documented APIs via Swagger UI, and mentored junior developers in architecture and project management.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    location: "Trivandrum, India",
    period: "04/2022 – 12/2022",
    bullets: [
      "Completed comprehensive end-to-end training across UI engineering, backend engineering, DevOps, and web/mobile application development.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Steyp.com",
    subtitle: "Digital University Platform",
    description:
      "A large-scale ed-tech platform enabling students to become engineers and future scientists regardless of age or educational background.",
    highlights: ["Built on a scalable Microservices Architecture"],
    tags: ["Python", "Django", "Microservices", "REST API", "DevOps"],
  },
  {
    title: "Pet To Place",
    subtitle: "Dual-Role Pet E-Commerce & Services App",
    description:
      "A React Native e-commerce and service marketplace allowing users to borrow pets, buy pet food, and dynamically switch between customer and service provider modes.",
    highlights: [
      "RESTful API integrations",
      "Real-time chat",
      "Secure payment processing",
      "Location-based services",
    ],
    tags: [
      "React Native",
      "Django REST Framework",
      "Real-Time Chat",
      "Location Services",
      "Payments",
    ],
  },
  {
    title: "Hosface",
    subtitle: "Telemedicine & Doctor Consultation Ecosystem",
    description:
      "Multi-app healthcare booking platform with separate FlutterFlow apps for doctors and patients plus a web admin panel.",
    highlights: [
      "Real-time video calling",
      "Fast global search powered by Typesense",
      "Slot-based appointment scheduling",
      "Razorpay payments",
    ],
    tags: [
      "Python/Django",
      "Typesense",
      "Razorpay",
      "Video Calling",
      "FlutterFlow",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "UI Engineer / Backend Developer Certification",
    issuer: "Steyp",
    url: "https://steyp.com/certification/a0usxx8jgdwqyzyvmrpo/",
  },
  {
    title: "DevOps Engineer Certification",
    issuer: "Steyp",
    url: "https://steyp.com/certification/894dgcp0pn019xgorf9f/",
  },
  {
    title: "Web Application Developer Certification",
    issuer: "Steyp",
    url: "https://steyp.com/certification/8lbtyh4gga7cfaq3312i/",
  },
  {
    title: "Mobile Application Developer Certification",
    issuer: "Steyp",
    url: "https://steyp.com/certification/796hv6x13lnhld41iwbi/",
  },
];
