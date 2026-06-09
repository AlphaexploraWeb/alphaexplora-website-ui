import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import type { HeroHighlight, IconName } from "../../../shared/models/homepage"
import { CommandCenterHero } from "./CommandCenterHero"
import { premiumEase } from "./motionTokens"

interface HeroSectionProps {
  highlights: HeroHighlight[]
  projectCount: number
  projectCategoryCount: number
}

export function HeroSection({
  highlights,
  projectCount,
  projectCategoryCount,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 34,
    restDelta: 0.001,
  })
  const copyY = useTransform(smoothProgress, [0, 1], [0, -34])
  const panelY = useTransform(smoothProgress, [0, 1], [0, -76])
  const panelScale = useTransform(smoothProgress, [0, 1], [1, 0.975])
  const heroOpacity = useTransform(smoothProgress, [0, 0.72, 1], [1, 0.92, 0.72])

  const itemTransition = { duration: 0.62, ease: premiumEase }
  const heroItem = {
    hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: itemTransition,
    },
  }
  const heroPanel = {
    hidden: { opacity: 0, x: 34, scale: 0.985, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.72, ease: premiumEase },
    },
  }
  const proofStats: Array<{
    icon: IconName
    value: string
    label: string
    detail: string
  }> = [
    {
      icon: "cloud",
      value: `${projectCount}`,
      label: "Live Projects",
      detail: "Launched digital work",
    },
    {
      icon: "spark",
      value: `${projectCategoryCount}`,
      label: "Project Categories",
      detail: "Across real sectors",
    },
    {
      icon: "support",
      value: "24/7",
      label: "Support Ready",
      detail: "Managed reliability",
    },
    {
      icon: "shield",
      value: "100%",
      label: "Delivered",
      detail: "Built with trust",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="top"
      className="ae-section ae-hero-wave ae-hero-section overflow-hidden border-b border-white/10 pt-40 pb-12 sm:pt-32 lg:pb-14"
    >
      <div className="ae-hero-topology" aria-hidden="true">
        <svg viewBox="0 0 640 520" role="img">
          <path d="M82 174 205 88 312 136 462 68 548 172" />
          <path d="M205 88 238 272 382 228 462 68" />
          <path d="M82 174 238 272 148 394 332 430 548 172" />
          <path d="M312 136 382 228 332 430 506 370" />
          <g>
            <circle cx="82" cy="174" r="4" />
            <circle cx="205" cy="88" r="5" />
            <circle cx="312" cy="136" r="3.5" />
            <circle cx="462" cy="68" r="4" />
            <circle cx="548" cy="172" r="4" />
            <circle cx="238" cy="272" r="5" />
            <circle cx="382" cy="228" r="4" />
            <circle cx="148" cy="394" r="3.5" />
            <circle cx="332" cy="430" r="4" />
            <circle cx="506" cy="370" r="4" />
          </g>
          <text x="246" y="112">AI</text>
          <text x="470" y="112">CLOUD</text>
          <text x="390" y="278">DATA</text>
          <text x="428" y="414">SECURITY</text>
        </svg>
      </div>
      <div className="ae-hero-coordinate ae-hero-coordinate-left" aria-hidden="true">
        AE / CORE-01
      </div>
      <div className="ae-hero-coordinate ae-hero-coordinate-right" aria-hidden="true">
        SECURE SYSTEMS
      </div>

      <div className="ae-container ae-hero-container ae-hero-inner">
        <motion.div
          className="ae-hero-grid grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(430px,520px)] xl:grid-cols-[minmax(0,720px)_minmax(500px,580px)] 2xl:grid-cols-[minmax(0,780px)_minmax(540px,620px)]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.11,
                delayChildren: 0.08,
              },
            },
          }}
        >
          <motion.div
            className="max-w-3xl"
            style={{ y: copyY, opacity: heroOpacity }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h1
              className="ae-balanced ae-hero-title font-display text-4xl font-semibold leading-[1.06] text-foreground sm:text-6xl lg:text-[54px] xl:text-[62px]"
              variants={heroItem}
            >
              Modern IT Solutions, Built with{" "}
              <span className="ae-hero-purpose">Purpose</span>
            </motion.h1>
            <motion.p
              className="ae-pretty mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg"
              variants={heroItem}
            >
              Alphaexplora helps businesses modernize systems, build software,
              unlock data, adopt AI, and grow through secure, scalable
              technology.
            </motion.p>

            <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={heroItem}>
              <a
                href="/#contact"
                className="ae-button-primary group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-center text-sm font-semibold active:scale-[0.98]"
              >
                Get Started
                <span className="ae-button-icon">
                  <Icon name="arrow" />
                </span>
              </a>
              <a
                href="/services"
                className="ae-button-secondary inline-flex min-h-12 items-center justify-center px-6 py-3 text-center text-sm font-semibold active:scale-[0.98]"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.055,
                  },
                },
              }}
            >
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight.label}
                  className="flex min-h-12 items-center gap-3 text-xs text-foreground/86 xl:text-sm"
                  variants={heroItem}
                >
                  <Icon name={highlight.icon} className="size-5 text-accent" />
                  <span>{highlight.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y: panelY, scale: panelScale }} variants={heroPanel}>
            <CommandCenterHero />
          </motion.div>
        </motion.div>

        <motion.div
          className="ae-hero-proof-band mt-10 grid overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 18, clipPath: "inset(0 16% 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.66, delay: 0.74, ease: premiumEase }}
        >
          {proofStats.map((stat) => (
            <article key={stat.label} className="ae-hero-proof-stat">
              <Icon name={stat.icon} className="size-8" />
              <div>
                <strong className="tabular-nums">{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.detail}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
