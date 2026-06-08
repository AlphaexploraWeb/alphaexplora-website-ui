import estrukturaThumbnail from "../../assets/projects/estruktura.png"
import globalBimThumbnail from "../../assets/projects/globalbim-logo.png"
import tmgnThumbnail from "../../assets/projects/tmgn.png"

export interface NavLink {
  label: string
  href: string
  description?: string
  tags?: string[]
}

export interface NavGroup {
  title: string
  eyebrow: string
  description: string
  links: NavLink[]
}

export interface Service {
  number: string
  title: string
  compactTitle?: string
  description: string
  compactDescription: string
  icon: IconName
  features: string[]
}

export interface Insight {
  category: string
  title: string
  summary: string
  readTime: string
  visual: "wave" | "mesh" | "cloud"
}

export interface Benefit {
  title: string
  description: string
  icon: IconName
}

export interface ContactDetail {
  label: string
  value: string
  href?: string
}

export interface TrustedCompany {
  name: string
  mark: string
}

export interface PartnerLogo {
  name: string
  mark: string
  type: string
}

export interface CurrentProject {
  title: string
  category: string
  status: string
  outcome: string
  tags: string[]
  href: string
  thumbnail: string
  thumbnailAlt: string
  thumbnailFit?: "cover" | "contain"
}

export type IconName =
  | "ai"
  | "analytics"
  | "arrow"
  | "cloud"
  | "code"
  | "close"
  | "growth"
  | "home"
  | "marketing"
  | "menu"
  | "search"
  | "shield"
  | "spark"
  | "support"
  | "target"

export interface HeroHighlight {
  label: string
  icon: IconName
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
]

export const navGroups: NavGroup[] = [
  {
    eyebrow: "Modernize",
    title: "Services",
    description:
      "Enterprise technology services for secure transformation programs.",
    links: [
      {
        label: "IT Consultancy",
        href: "#services",
        description:
          "Strategic guidance for complex modernization decisions, operating models, and transformation roadmaps.",
        tags: ["Advisory", "Architecture", "Modernization"],
      },
      {
        label: "Software Solutions",
        href: "#services",
        description:
          "Custom digital products and internal platforms designed around measurable business workflows.",
        tags: ["Web", "SaaS", "Automation"],
      },
      {
        label: "Data Analytics",
        href: "#services",
        description:
          "Data foundations, dashboards, and analytics patterns that turn operational information into decisions.",
        tags: ["Dashboards", "BI", "Insights"],
      },
      {
        label: "Managed Services",
        href: "#services",
        description:
          "Monitoring, support, optimization, and continuity for systems that need to keep moving.",
        tags: ["Support", "Monitoring", "Reliability"],
      },
    ],
  },
  {
    eyebrow: "Build",
    title: "Solutions",
    description:
      "Delivery tracks for platforms, data readiness, AI, and growth systems.",
    links: [
      {
        label: "AI Enablement",
        href: "#services",
        description:
          "Practical AI adoption plans for automation, decision support, and workflow acceleration.",
        tags: ["AI", "Automation", "Governance"],
      },
      {
        label: "Cloud Readiness",
        href: "#projects",
        description:
          "Cloud operating models, migration sequencing, and infrastructure patterns built for scale.",
        tags: ["Cloud", "Readiness", "Scale"],
      },
      {
        label: "Secure Architecture",
        href: "#projects",
        description:
          "Security-first technical foundations for data, applications, integrations, and operations.",
        tags: ["Security", "Controls", "Resilience"],
      },
      {
        label: "Digital Marketing",
        href: "#services",
        description:
          "Digital growth systems that connect content, performance channels, and measurable outcomes.",
        tags: ["Growth", "Campaigns", "SEO"],
      },
    ],
  },
  {
    eyebrow: "Proof",
    title: "Projects",
    description:
      "Representative initiatives shaped around measurable business outcomes.",
    links: [
      {
        label: "Current Projects",
        href: "#projects",
        description:
          "Representative active tracks across modernization, data readiness, and managed operations.",
        tags: ["Active", "Outcomes", "Delivery"],
      },
      {
        label: "Case Studies",
        href: "#case-studies",
        description:
          "Explore transformation narratives and reusable patterns from Alphaexplora's service areas.",
        tags: ["Proof", "Patterns", "Results"],
      },
      {
        label: "Insights",
        href: "#insights",
        description:
          "Practical thinking on modernization, cloud, AI, and enterprise technology decisions.",
        tags: ["Articles", "Strategy", "Technology"],
      },
      {
        label: "Partner Ecosystem",
        href: "#partner-ecosystem",
        description:
          "A neutral view of the technology domains Alphaexplora designs around and integrates with.",
        tags: ["Cloud", "Security", "Data"],
      },
    ],
  },
  {
    eyebrow: "Company",
    title: "Alphaexplora",
    description:
      "Purpose-driven technology built for modern, secure, scalable operations.",
    links: [
      {
        label: "Our Philosophy",
        href: "#about",
        description:
          "Technology should empower, not exclude. Alphaexplora builds with purpose and access in mind.",
        tags: ["Purpose", "Access", "Trust"],
      },
      {
        label: "Why Partner With Us",
        href: "#why-partner",
        description:
          "A security-first delivery posture aligned to outcomes, scale, and expert implementation.",
        tags: ["Secure", "Aligned", "Expert-led"],
      },
      {
        label: "Contact",
        href: "#contact",
        description:
          "Connect with the Alphaexplora team to discuss transformation goals and delivery fit.",
        tags: ["Email", "Phone", "Marikina"],
      },
      {
        label: "Get Started",
        href: "#contact",
        description:
          "Start a focused conversation about the systems, software, data, and AI outcomes you need.",
        tags: ["CTA", "Discovery", "Next step"],
      },
    ],
  },
]

export const services: Service[] = [
  {
    number: "01",
    title: "IT Consultancy",
    description:
      "Strategic technology guidance to optimize business processes and digital transformation.",
    compactDescription:
      "Strategic technology guidance to solve complex business challenges.",
    icon: "home",
    features: [
      "Business Process Analysis",
      "Systems Integration",
      "Enterprise Architecture",
      "IT Modernization",
    ],
  },
  {
    number: "02",
    title: "Software Solutions for All",
    compactTitle: "Software Solutions",
    description:
      "Tailored software solutions designed specifically for unique business requirements.",
    compactDescription:
      "Custom software built for scale, performance, and flexibility.",
    icon: "code",
    features: [
      "Web Development",
      "Software as a Service",
      "Mobile Solutions",
      "Process Automation",
    ],
  },
  {
    number: "03",
    title: "Data Analytics",
    description:
      "Transform data into actionable insights with comprehensive analytics solutions.",
    compactDescription:
      "Turn your data into actionable insights that drive growth.",
    icon: "analytics",
    features: [
      "Data Warehousing",
      "Business Intelligence",
      "Predictive Analytics",
      "Dashboard Design",
    ],
  },
  {
    number: "04",
    title: "Managed Services",
    description:
      "Comprehensive support and maintenance to keep systems running smoothly 24/7.",
    compactDescription:
      "Proactive management and support to keep your systems running.",
    icon: "support",
    features: [
      "24/7 Monitoring",
      "Technical Support",
      "System Maintenance",
      "Performance Optimization",
    ],
  },
  {
    number: "05",
    title: "AI Enablement",
    description:
      "Artificial intelligence integration and development services to enhance business capabilities.",
    compactDescription:
      "Leverage AI to automate, optimize, and accelerate business outcomes.",
    icon: "ai",
    features: [
      "AI Strategy & Consulting",
      "Machine Learning Models",
      "Automation Solutions",
      "AI Integration",
    ],
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost online presence and drive growth.",
    compactDescription:
      "Data-driven digital strategies that build brand and generate results.",
    icon: "marketing",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "PPC Campaigns",
    ],
  },
]

export const insights: Insight[] = [
  {
    category: "Modernization",
    title: "How Modernization Unlocks Business Agility",
    summary:
      "A practical look at how modern platforms help organizations move faster with secure, adaptable operations.",
    readTime: "5 min read",
    visual: "wave",
  },
  {
    category: "AI & Data",
    title: "AI-Powered Decisions: Turning Data into Impact",
    summary:
      "How responsible AI adoption can help teams make better decisions, automate work, and act with confidence.",
    readTime: "6 min read",
    visual: "mesh",
  },
  {
    category: "Cloud",
    title: "Building Secure, Scalable Systems in the Cloud",
    summary:
      "Why cloud architecture should balance speed, resilience, cost control, and long-term security.",
    readTime: "4 min read",
    visual: "cloud",
  },
]

export const benefits: Benefit[] = [
  {
    title: "Secure by design",
    description:
      "Security built into every layer from the start.",
    icon: "shield",
  },
  {
    title: "Aligned to outcomes",
    description:
      "Solutions designed around your goals.",
    icon: "target",
  },
  {
    title: "Scalable & future-ready",
    description:
      "Built to grow with your business.",
    icon: "growth",
  },
  {
    title: "Expert-led delivery",
    description:
      "Experienced team, proven results.",
    icon: "spark",
  },
]

export const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "inquire@alphaexplora.com",
    href: "mailto:inquire@alphaexplora.com",
  },
  {
    label: "Phone",
    value: "+63 2 70060042",
    href: "tel:+63270060042",
  },
  {
    label: "Mobile",
    value: "+63 915 8101010",
    href: "tel:+639158101010",
  },
  {
    label: "Headquarters",
    value:
      "#6 T. Bugallon Street, Marikina Heights, Marikina City, Philippines 1810",
  },
]

export const heroHighlights: HeroHighlight[] = [
  { label: "Secure by design", icon: "shield" },
  { label: "Scalable architecture", icon: "cloud" },
  { label: "AI-ready", icon: "ai" },
  { label: "Results driven", icon: "target" },
]

export const trustedCompanies: TrustedCompany[] = [
  { name: "Cloudix", mark: "C" },
  { name: "Nexora", mark: "N" },
  { name: "DataHive", mark: "D" },
  { name: "Vertex", mark: "V" },
  { name: "Infinitum", mark: "I" },
  { name: "Orbitra", mark: "O" },
]

export const partnerLogos: PartnerLogo[] = [
  { name: "Cloud Ecosystem", mark: "CE", type: "Platform" },
  { name: "Security Stack", mark: "SS", type: "Controls" },
  { name: "Data Platform", mark: "DP", type: "Analytics" },
  { name: "AI Tooling", mark: "AI", type: "Automation" },
  { name: "Growth Systems", mark: "GS", type: "Operations" },
  { name: "Service Network", mark: "SN", type: "Support" },
  { name: "Integration Layer", mark: "IL", type: "Systems" },
  { name: "Cloud Operations", mark: "CO", type: "Managed" },
]

export const currentProjects: CurrentProject[] = [
  {
    title: "The Mighty God of All Nations Inc.",
    category: "Community Platform",
    status: "Live website",
    outcome:
      "A public-facing digital home for a faith community, built around clear navigation, event discovery, and member engagement.",
    tags: ["Website", "Community", "React"],
    href: "https://www.tmgn.ph/",
    thumbnail: tmgnThumbnail,
    thumbnailAlt: "Homepage screenshot of The Mighty God of All Nations Inc. website",
  },
  {
    title: "GlobalBIM Engineering Services",
    category: "Engineering Services",
    status: "Live website",
    outcome:
      "A professional web presence for BIM engineering, AutoCAD, Tekla detailing, and structural project service offerings.",
    tags: ["BIM", "Engineering", "Web"],
    href: "https://www.globalbim.ph/",
    thumbnail: globalBimThumbnail,
    thumbnailAlt: "GlobalBIM Engineering Services logo",
    thumbnailFit: "contain",
  },
  {
    title: "Estruktura Manila",
    category: "Product Showcase",
    status: "Live website",
    outcome:
      "A refined product and brand showcase for carpet and interior solutions, emphasizing elegant visuals and clear inquiry paths.",
    tags: ["Showcase", "Interiors", "Commerce"],
    href: "https://www.estruktura.ph/",
    thumbnail: estrukturaThumbnail,
    thumbnailAlt: "Homepage screenshot of Estruktura Manila website",
  },
]

export const homepageContent = {
  navLinks,
  navGroups,
  services,
  insights,
  benefits,
  contactDetails,
  heroHighlights,
  trustedCompanies,
  partnerLogos,
  currentProjects,
}
