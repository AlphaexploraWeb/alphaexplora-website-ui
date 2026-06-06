import { useState } from "react";

export interface Capability {
  index: string;
  title: string;
  body: string;
  tag: string;
}

export interface HomeViewModel {
  heroTagline: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  ctaPrimary: { label: string; path: string };
  ctaSecondary: { label: string; path: string };
  manifestoLines: string[];
  capabilities: Capability[];
  marqueeItems: string[];
}

export function useHomeViewModel(): HomeViewModel {
  const [_state] = useState(null);
  void _state;

  return {
    heroTagline: "Platform · v1.0 Live",
    heroTitle: "Technology should be a",
    heroTitleAccent: "right, not a privilege.",
    heroSubtitle:
      "Alphaexplora is a premium tech ecosystem built to close the gap between enterprise-grade capability and universal access.",
    ctaPrimary: { label: "Explore Solutions", path: "/solutions" },
    ctaSecondary: { label: "Our Ecosystem", path: "/ecosystem" },
    manifestoLines: [
      "The most powerful systems in the world",
      "were built for the few.",
      "We're changing that.",
    ],
    capabilities: [
      {
        index: "01",
        title: "Accessible by Design",
        body: "Every product ships with zero-friction onboarding and pricing that scales with the user — from solo developer to global enterprise.",
        tag: "Access",
      },
      {
        index: "02",
        title: "Enterprise-Grade Foundation",
        body: "Fortune-500 security posture, 99.9% uptime SLA, and compliance frameworks built in from day one — not bolted on later.",
        tag: "Reliability",
      },
      {
        index: "03",
        title: "AI-Powered Intelligence",
        body: "Custom machine learning pipelines and intelligent automation embedded directly into your workflows, not as an afterthought.",
        tag: "Intelligence",
      },
      {
        index: "04",
        title: "Relentless Craft",
        body: "Beauty and function are not at odds. Every pixel, interaction, and system interface is deliberate. We refuse to ship mediocre.",
        tag: "Quality",
      },
    ],
    marqueeItems: [
      "Zero Latency Infrastructure",
      "AI-Native Workflows",
      "Privacy by Architecture",
      "Enterprise SLA",
      "Open Standards",
      "Global CDN",
      "Real-Time Analytics",
      "Adaptive Security",
    ],
  };
}
