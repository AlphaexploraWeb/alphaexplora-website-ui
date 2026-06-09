import estrukturaThumbnail from "../../assets/projects/estruktura.png"
import espasyoThumbnail from "../../assets/projects/espasyo.png"
import globalBimThumbnail from "../../assets/projects/globalbim-logo.png"
import tmgnThumbnail from "../../assets/projects/tmgn.png"
import wlcmThumbnail from "../../assets/projects/wlcm.png"

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

export interface Service {
  slug: string
  number: string
  title: string
  compactTitle?: string
  description: string
  compactDescription: string
  icon: IconName
  features: string[]
  value: string
  outcomes: string[]
  process: string[]
}

export interface Insight {
  slug: string
  category: string
  title: string
  summary: string
  readTime: string
  visual: "wave" | "mesh" | "cloud"
  body: string[]
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
  slug: string
  title: string
  category: string
  status: string
  outcome: string
  problem: string
  solution: string
  evidence: string[]
  tags: string[]
  href: string
  liveUrl: string
  thumbnail: string
  thumbnailAlt: string
  thumbnailFit?: "cover" | "contain"
}

export interface HeroHighlight {
  label: string
  icon: IconName
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Case Studies", href: "/projects" },
  { label: "Contact", href: "/#contact" },
]

export const services: Service[] = [
  {
    slug: "it-consultancy",
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
    value:
      "Alphaexplora helps leadership teams turn technology uncertainty into sequenced decisions, practical roadmaps, and secure operating models.",
    outcomes: [
      "Clear modernization priorities tied to business goals",
      "Architecture decisions that reduce operational risk",
      "Delivery plans that align people, process, and systems",
    ],
    process: [
      "Assess current workflows, platforms, and constraints",
      "Map opportunities against cost, risk, and business impact",
      "Define an execution roadmap with measurable milestones",
    ],
  },
  {
    slug: "software-solutions",
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
    value:
      "We design and build software around real workflows, so teams get tools that support operations instead of forcing workarounds.",
    outcomes: [
      "Customer-facing websites and portals with strong usability",
      "Internal platforms that reduce manual coordination",
      "Automation paths for repeatable operational work",
    ],
    process: [
      "Define the product workflow and required user actions",
      "Prototype the experience and technical architecture",
      "Ship maintainable software with measurable release checkpoints",
    ],
  },
  {
    slug: "data-analytics",
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
    value:
      "Alphaexplora helps organizations convert scattered operational information into trusted dashboards, reporting flows, and decision support.",
    outcomes: [
      "Cleaner visibility into performance and operations",
      "Decision-ready dashboards for leaders and teams",
      "Data foundations that support future AI initiatives",
    ],
    process: [
      "Identify source systems and decision questions",
      "Shape data models, reporting flows, and dashboard views",
      "Validate insights with stakeholders before rollout",
    ],
  },
  {
    slug: "managed-services",
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
    value:
      "We support critical digital systems with a reliability mindset, giving teams a steady technical partner after launch.",
    outcomes: [
      "More predictable system uptime and response paths",
      "Ongoing maintenance for public and internal platforms",
      "Performance improvements guided by operational signals",
    ],
    process: [
      "Document the operating environment and support expectations",
      "Set monitoring, maintenance, and escalation rhythms",
      "Review service health and improvement opportunities regularly",
    ],
  },
  {
    slug: "ai-enablement",
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
    value:
      "Alphaexplora brings AI into practical business contexts with governance, useful automation, and measured adoption instead of hype.",
    outcomes: [
      "AI use cases prioritized by feasibility and value",
      "Automation concepts that support real team workflows",
      "Responsible integration plans for existing systems",
    ],
    process: [
      "Identify workflows where AI can safely reduce friction",
      "Prototype automation and decision-support experiences",
      "Define guardrails, measurement, and rollout sequencing",
    ],
  },
  {
    slug: "digital-marketing",
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
    value:
      "We connect brand presence, content, campaigns, and analytics so digital growth efforts are measurable and aligned to business goals.",
    outcomes: [
      "Sharper online positioning and discovery paths",
      "Campaign flows connected to measurable conversion goals",
      "Content systems that support credibility and lead generation",
    ],
    process: [
      "Clarify audience, message, and conversion priorities",
      "Build channel plans across content, search, and paid activity",
      "Measure performance and refine around qualified demand",
    ],
  },
]

export const navGroups: NavGroup[] = [
  {
    eyebrow: "Modernize",
    title: "Services",
    description:
      "Enterprise technology services for secure transformation programs.",
    links: services.slice(0, 4).map((service) => ({
      label: service.compactTitle ?? service.title,
      href: `/services/${service.slug}`,
      description: service.compactDescription,
      tags: service.features.slice(0, 3),
    })),
  },
  {
    eyebrow: "Build",
    title: "Solutions",
    description:
      "Delivery tracks for platforms, data readiness, AI, and growth systems.",
    links: [
      {
        label: "AI Enablement",
        href: "/services/ai-enablement",
        description:
          "Practical AI adoption plans for automation, decision support, and workflow acceleration.",
        tags: ["AI", "Automation", "Governance"],
      },
      {
        label: "Cloud Readiness",
        href: "/projects",
        description:
          "Cloud operating models, migration sequencing, and infrastructure patterns built for scale.",
        tags: ["Cloud", "Readiness", "Scale"],
      },
      {
        label: "Secure Architecture",
        href: "/projects",
        description:
          "Security-first technical foundations for data, applications, integrations, and operations.",
        tags: ["Security", "Controls", "Resilience"],
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
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
        href: "/projects",
        description:
          "Representative active tracks across modernization, data readiness, and managed operations.",
        tags: ["Active", "Outcomes", "Delivery"],
      },
      {
        label: "Case Studies",
        href: "/projects",
        description:
          "Explore transformation narratives and reusable patterns from Alphaexplora's service areas.",
        tags: ["Proof", "Patterns", "Results"],
      },
      {
        label: "Insights",
        href: "/insights",
        description:
          "Practical thinking on modernization, cloud, AI, and enterprise technology decisions.",
        tags: ["Articles", "Strategy", "Technology"],
      },
      {
        label: "Partner Ecosystem",
        href: "/#partner-ecosystem",
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
        href: "/about",
        description:
          "Technology should empower, not exclude. Alphaexplora builds with purpose and access in mind.",
        tags: ["Purpose", "Access", "Trust"],
      },
      {
        label: "Why Partner With Us",
        href: "/about",
        description:
          "A security-first delivery posture aligned to outcomes, scale, and expert implementation.",
        tags: ["Secure", "Aligned", "Expert-led"],
      },
      {
        label: "Contact",
        href: "/#contact",
        description:
          "Connect with the Alphaexplora team to discuss transformation goals and delivery fit.",
        tags: ["Email", "Phone", "Marikina"],
      },
      {
        label: "Get Started",
        href: "/#contact",
        description:
          "Start a focused conversation about the systems, software, data, and AI outcomes you need.",
        tags: ["CTA", "Discovery", "Next step"],
      },
    ],
  },
]

export const insights: Insight[] = [
  {
    slug: "digital-solutions-accelerate-msme-economic-recovery",
    category: "MSME Growth",
    title: "How Digital Solutions Accelerate MSME Economic Recovery",
    summary:
      "Why secure websites, automation, data visibility, and digital channels help small businesses recover with more confidence.",
    readTime: "5 min read",
    visual: "wave",
    body: [
      "MSMEs recover faster when digital systems reduce friction in discovery, sales, service, and operations. A reliable digital presence can help customers find the business, understand the offer, and take the next step with less delay.",
      "The strongest recovery tools are often practical: a clear website, simplified inquiry paths, basic automation, and better visibility into customer and operational data. These foundations help owners make decisions with fewer blind spots.",
      "Alphaexplora supports MSMEs by building secure, scalable digital foundations that can start lean and grow over time, helping technology become a recovery engine instead of another burden.",
    ],
  },
  {
    slug: "modernization-unlocks-business-agility",
    category: "Modernization",
    title: "How Modernization Unlocks Business Agility",
    summary:
      "A practical look at how modern platforms help organizations move faster with secure, adaptable operations.",
    readTime: "5 min read",
    visual: "wave",
    body: [
      "Modernization is not a cosmetic refresh. It is the work of making systems easier to operate, easier to secure, and easier to evolve as business conditions change.",
      "For many teams, agility begins when critical workflows stop depending on brittle manual coordination. A modern platform gives leaders clearer visibility, gives staff better tools, and gives technical teams fewer hidden failure points.",
      "The strongest modernization programs begin with business intent. Alphaexplora looks at process, data, architecture, and delivery readiness together so transformation can move in practical stages instead of one risky leap.",
    ],
  },
  {
    slug: "ai-powered-decisions-data-impact",
    category: "AI & Data",
    title: "AI-Powered Decisions: Turning Data into Impact",
    summary:
      "How responsible AI adoption can help teams make better decisions, automate work, and act with confidence.",
    readTime: "6 min read",
    visual: "mesh",
    body: [
      "AI creates value when it is connected to a real decision, a real workflow, or a real operational bottleneck. The goal is not to add intelligence everywhere. The goal is to make the right work faster and more reliable.",
      "Useful AI starts with trustworthy data and clear boundaries. Teams need to know what a model can influence, what humans still approve, and how outcomes will be measured over time.",
      "Alphaexplora approaches AI enablement as an adoption program: identify the business case, validate the data foundation, prototype carefully, and scale only when governance and value are both visible.",
    ],
  },
  {
    slug: "secure-scalable-cloud-systems",
    category: "Cloud",
    title: "Building Secure, Scalable Systems in the Cloud",
    summary:
      "Why cloud architecture should balance speed, resilience, cost control, and long-term security.",
    readTime: "4 min read",
    visual: "cloud",
    body: [
      "Cloud platforms can accelerate delivery, but speed without structure often creates new operational risk. Strong cloud architecture balances flexibility with clear controls.",
      "Security, observability, cost awareness, and recovery planning should be part of the system from the beginning. They are not finishing touches after launch.",
      "Alphaexplora designs cloud-ready systems around the realities of the organization: current skills, existing tools, compliance needs, and the level of reliability the business actually requires.",
    ],
  },
]

export const benefits: Benefit[] = [
  {
    title: "Secure by design",
    description: "Security built into every layer from the start.",
    icon: "shield",
  },
  {
    title: "Aligned to outcomes",
    description: "Solutions designed around your goals.",
    icon: "target",
  },
  {
    title: "Scalable & future-ready",
    description: "Built to grow with your business.",
    icon: "growth",
  },
  {
    title: "Expert-led delivery",
    description: "Experienced team, proven results.",
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
    slug: "the-mighty-god-of-all-nations",
    title: "The Mighty God of All Nations Inc.",
    category: "Community Platform",
    status: "Live website",
    outcome:
      "A public-facing digital home for a faith community, built around clear navigation, event discovery, and member engagement.",
    problem:
      "The organization needed a credible public destination that could communicate identity, activity, and next steps without overwhelming visitors.",
    solution:
      "Alphaexplora shaped a focused web experience around clear navigation, community storytelling, and accessible paths for engagement.",
    evidence: [
      "Responsive public website",
      "Community-oriented content structure",
      "Clear visitor paths for discovery and contact",
    ],
    tags: ["Website", "Community", "React"],
    href: "/projects/the-mighty-god-of-all-nations",
    liveUrl: "https://www.tmgn.ph/",
    thumbnail: tmgnThumbnail,
    thumbnailAlt: "Homepage screenshot of The Mighty God of All Nations Inc. website",
  },
  {
    slug: "globalbim-engineering-services",
    title: "GlobalBIM Engineering Services",
    category: "Engineering Services",
    status: "Live website",
    outcome:
      "A professional web presence for BIM engineering, AutoCAD, Tekla detailing, and structural project service offerings.",
    problem:
      "The engineering services brand needed a polished digital presence that made technical capabilities legible to prospective clients.",
    solution:
      "Alphaexplora delivered a professional service presentation with structured capability messaging and direct inquiry paths.",
    evidence: [
      "Service-led information architecture",
      "Professional BIM and engineering positioning",
      "Direct routes to evaluate capabilities and contact the team",
    ],
    tags: ["BIM", "Engineering", "Web"],
    href: "/projects/globalbim-engineering-services",
    liveUrl: "https://www.globalbim.ph/",
    thumbnail: globalBimThumbnail,
    thumbnailAlt: "GlobalBIM Engineering Services logo",
    thumbnailFit: "contain",
  },
  {
    slug: "words-of-life-christian-ministries",
    title: "Words of Life Christian Ministries Inc.",
    category: "Ministry Platform",
    status: "Live website",
    outcome:
      "A polished ministry website with a calm visual system, clear navigation, giving flows, and event-oriented calls to action.",
    problem:
      "The ministry needed a calm and trustworthy digital platform for visitors, members, events, and giving information.",
    solution:
      "Alphaexplora built a ministry-focused web experience with clear structure, warm presentation, and practical calls to action.",
    evidence: [
      "Ministry website with event-oriented flows",
      "Clear giving and engagement pathways",
      "Polished responsive visual system",
    ],
    tags: ["Website", "Ministry", "Events"],
    href: "/projects/words-of-life-christian-ministries",
    liveUrl: "https://wlcmph.vercel.app/",
    thumbnail: wlcmThumbnail,
    thumbnailAlt: "Homepage screenshot of Words of Life Christian Ministries Inc. website",
  },
  {
    slug: "espasyo-community",
    title: "Espasyo Community",
    category: "Business Community",
    status: "Live website",
    outcome:
      "A community-driven workspace website for entrepreneurs, connecting service discovery, business solutions, and inquiry paths.",
    problem:
      "The workspace community needed a digital hub that could present services, community value, and business inquiry paths clearly.",
    solution:
      "Alphaexplora structured a modern community website around discovery, credibility, and conversion for entrepreneurs.",
    evidence: [
      "Workspace and service discovery experience",
      "Community-centered messaging",
      "Business inquiry paths for prospective members",
    ],
    tags: ["Workspace", "Community", "Business"],
    href: "/projects/espasyo-community",
    liveUrl: "https://espasyo.ph/",
    thumbnail: espasyoThumbnail,
    thumbnailAlt: "Homepage screenshot of Espasyo Community website",
  },
  {
    slug: "estruktura-manila",
    title: "Estruktura Manila",
    category: "Product Showcase",
    status: "Live website",
    outcome:
      "A refined product and brand showcase for carpet and interior solutions, emphasizing elegant visuals and clear inquiry paths.",
    problem:
      "The brand needed an elegant showcase that could communicate product quality and create a clear path toward inquiry.",
    solution:
      "Alphaexplora built a refined product presentation with visual emphasis, structured information, and conversion-ready navigation.",
    evidence: [
      "Product-focused showcase experience",
      "Visual-first presentation for interior solutions",
      "Clear inquiry and brand exploration paths",
    ],
    tags: ["Showcase", "Interiors", "Commerce"],
    href: "/projects/estruktura-manila",
    liveUrl: "https://www.estruktura.ph/",
    thumbnail: estrukturaThumbnail,
    thumbnailAlt: "Homepage screenshot of Estruktura Manila website",
  },
]

export const companyStory = {
  eyebrow: "Company",
  title: "Technology should empower, not exclude.",
  intro:
    "Alphaexplora is a purpose-driven IT consulting and digital solutions company based in Marikina City, building secure, practical systems for organizations that need technology to move with clarity.",
  philosophy:
    "Technology should empower, not exclude. Because IT is a Right!",
  story:
    "Alphaexplora exists for organizations that need serious technical execution without losing sight of people. The company brings strategy, software, data, managed operations, AI enablement, and digital growth into one practical delivery posture.",
  mission:
    "To make modern technology more accessible, secure, and useful for organizations ready to improve how they operate and serve.",
  values: [
    "Purpose before novelty",
    "Security before scale",
    "Clarity before complexity",
    "Execution before noise",
  ],
}

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
  companyStory,
}
