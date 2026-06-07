export interface ClientPartner {
  id: string;
  label: string;
  logoSrc: string;
  websiteUrl: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  short: string;
  features: string[];
  details: string;
}

export interface IndustryInsight {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export interface ContactField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

export interface SiteContentModel {
  hero: {
    eyebrow: string;
    tagline: string;
    philosophy: string;
    about: string;
  };
  clients: ClientPartner[];
  services: {
    eyebrow: string;
    headline: string;
    subHeadline: string;
    offerings: ServiceOffering[];
  };
  insights: {
    eyebrow: string;
    headline: string;
    subHeadline: string;
    items: IndustryInsight[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    subHeadline: string;
    email: string;
    phones: string[];
    hq: string;
    cta: string;
    copyright: string;
    fields: ContactField[];
  };
}

const siteContent: SiteContentModel = {
  hero: {
    eyebrow: "POWERING THE DIGITAL REVOLUTION.",
    tagline:
      "At the intersection of innovation and enterprise needs, we architect solutions that don't just meet today's challenges but also anticipate tomorrow's opportunities.",
    philosophy: "Technology should empower, not exclude. Because IT is a Right!",
    about:
      "At Alphaexplora, we don't just build tech - we build with purpose. We believe every organization, no matter its scale, deserves the power of modern, secure, and scalable technology. This principle guides every system we design, every client relationship we nurture, and every solution we deploy.",
  },
  clients: [
    { id: "st-peter", label: "St. Peter", logoSrc: "", websiteUrl: "" },
    {
      id: "espasyo-study-office-hub",
      label: "Espasyo Study & Office Hub",
      logoSrc: "",
      websiteUrl: "https://espasyo.ph/",
    },
    {
      id: "globalbim-engineering-services",
      label: "GlobalBIM Engineering Services",
      logoSrc: "",
      websiteUrl: "https://globalbim.ph/",
    },
    {
      id: "el-gibhor",
      label: "El Gibhor - The Mighty God of all Nations",
      logoSrc: "",
      websiteUrl: "https://tmgn.ph/",
    },
    { id: "azvercon", label: "Azvercon", logoSrc: "", websiteUrl: "" },
    { id: "kaizen", label: "Kaizen", logoSrc: "", websiteUrl: "" },
  ],
  services: {
    eyebrow: "Services Matrix",
    headline: "Comprehensive technology solutions for decisive growth.",
    subHeadline:
      "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
    offerings: [
      {
        id: "it-consultancy",
        title: "I.T. Consultancy",
        short:
          "Strategic technology guidance to optimize your business processes and digital transformation.",
        features: [
          "Business Process Analysis",
          "Systems Integration",
          "Enterprise Architecture",
          "I.T. Modernization",
        ],
        details:
          "Our expert consultants work closely with your team to analyze current technology infrastructure, identify optimization opportunities, and develop comprehensive strategies for digital transformation.",
      },
      {
        id: "software-solutions-for-all",
        title: "Software Solutions for All",
        short:
          "Tailored software solutions designed specifically for your unique business requirements.",
        features: [
          "Web Development",
          "Software as a Service",
          "Mobile Solutions",
          "Process Automation",
        ],
        details:
          "We develop custom software solutions that perfectly match your business needs, from web applications to mobile platforms and cloud-based services.",
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        short:
          "Transform your data into actionable insights with our comprehensive analytics solutions.",
        features: [
          "Data Warehousing",
          "Business Intelligence",
          "Predictive Analytics",
          "Dashboard Design",
        ],
        details:
          "Unlock the power of your data with our advanced analytics and business intelligence solutions.",
      },
      {
        id: "managed-services",
        title: "Managed Services",
        short:
          "Comprehensive support and maintenance to keep your systems running smoothly 24/7.",
        features: [
          "24/7 Monitoring",
          "Technical Support",
          "System Maintenance",
          "Performance Optimization",
        ],
        details:
          "Our managed services provide comprehensive IT support and maintenance, ensuring your technology infrastructure operates at peak performance.",
      },
      {
        id: "ai-enablement",
        title: "AI Enablement",
        short:
          "Artificial intelligence integration and development services to enhance your business capabilities.",
        features: [
          "AI Strategy & Consulting",
          "Machine Learning Models",
          "Automation Solutions",
          "AI Integration",
        ],
        details:
          "Harness the transformative power of artificial intelligence to automate processes, enhance decision-making, and drive innovation.",
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        short:
          "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
        features: [
          "SEO Optimization",
          "Social Media Marketing",
          "Content Strategy",
          "PPC Campaigns",
        ],
        details:
          "Accelerate your business growth with our comprehensive digital marketing strategies designed to increase brand visibility.",
      },
    ],
  },
  insights: {
    eyebrow: "Industry Insights",
    headline: "Strategic signals for technology leaders.",
    subHeadline:
      "Stay ahead of the curve with expert analysis, industry trends, and strategic insights.",
    items: [
      {
        id: "cloud-strategy",
        category: "Cloud Strategy",
        date: "Nov 11, 2021",
        readTime: "3 min read",
        title:
          "How Philippine MSMEs can Leverage Cloud-based Services to Remain Competitive.",
        excerpt:
          "Cloud adoption is no longer optional - it's the smart, scalable path for MSMEs...",
      },
      {
        id: "digital-transformation",
        category: "Digital Transformation",
        date: "Oct 14, 2020",
        readTime: "3 min read",
        title:
          "Digital Transformation of MSMEs Set to Accelarate Economic Recovery.",
        excerpt:
          "Digital transformation could inject up to US $28 billion into the Philippine economy...",
      },
      {
        id: "ai-enablement",
        category: "AI Enablement",
        date: "June 8, 2025",
        readTime: "6 min read",
        title: "Smarter exports: How AI can Help MSMEs Compete Globally.",
        excerpt:
          "AI tools are leveling the playing field with smart automation and global insight...",
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    headline: "Ready to Transform Your Enterprise?",
    subHeadline:
      "Let's discuss how Alphaexplora can accelerate your digital transformation and drive measurable business outcomes.",
    email: "inquire@alphaexplora.com",
    phones: ["+63 2 70060042", "+63 915 8101010"],
    hq: "#6 T. Bugallon street, Marikina Heights, Marikina City Philippines 1810",
    cta: "START YOUR TRANSFORMATION",
    copyright: "2026 Alphaexplora. All rights reserved.",
    fields: [
      { id: "firstName", label: "First Name", type: "text", required: true },
      { id: "lastName", label: "Last Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "company", label: "Company", type: "text", required: true },
      {
        id: "contactNumber",
        label: "Contact Number",
        type: "tel",
        required: true,
      },
      {
        id: "inquiryDetails",
        label: "Inquiry Details",
        type: "textarea",
        required: true,
      },
    ],
  },
};

export function getSiteContent(): SiteContentModel {
  return siteContent;
}
