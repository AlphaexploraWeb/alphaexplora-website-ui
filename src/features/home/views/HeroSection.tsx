import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import type { DeliveryStep, HeroHighlight } from "../../../shared/models/homepage"
import { CommandCenterHero } from "./CommandCenterHero"
import { premiumEase } from "./motionTokens"

interface HeroSectionProps {
  highlights: HeroHighlight[]
  journey: DeliveryStep[]
}

export function HeroSection({ highlights, journey }: HeroSectionProps) {
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

  return (
    <section
      ref={sectionRef}
      id="top"
      className="ae-section ae-hero-wave ae-hero-section overflow-hidden border-b border-white/10 pt-40 pb-10 sm:pt-32 lg:pb-12"
    >
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
          className="ae-journey-band mt-9 grid gap-1 overflow-hidden rounded-lg lg:grid-cols-[auto_repeat(4,minmax(0,1fr))]"
          initial={{ opacity: 0, y: 18, clipPath: "inset(0 16% 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.66, delay: 0.74, ease: premiumEase }}
        >
          <div className="ae-journey-label">
            <span>Delivery Path</span>
            <strong>Consult to Scale</strong>
          </div>
          {journey.map((item) => (
            <article key={item.title} className="ae-journey-step">
              <span className="tabular-nums">{item.step}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
