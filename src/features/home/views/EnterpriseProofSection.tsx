import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import type {
  FeaturedCapability,
  TrustSignal,
} from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"
import { premiumEase } from "./motionTokens"

interface EnterpriseProofSectionProps {
  capabilities: FeaturedCapability[]
  trustSignals: TrustSignal[]
}

export function EnterpriseProofSection({
  capabilities,
  trustSignals,
}: EnterpriseProofSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 32,
    restDelta: 0.001,
  })
  const introY = useTransform(smoothProgress, [0, 1], [18, -22])
  const signalY = useTransform(smoothProgress, [0, 1], [28, -16])

  const proofCard = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.065,
        delayChildren: 0.04,
      },
    },
  }
  const proofPart = {
    hidden: { opacity: 0, y: 12, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.42, ease: premiumEase },
    },
  }
  const proofIcon = {
    hidden: { opacity: 0, scale: 0.72, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      scale: [0.72, 1.08, 1],
      filter: "blur(0px)",
      transition: { duration: 0.54, ease: premiumEase },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="enterprise-proof"
      className="ae-section ae-proof-section border-b border-white/10 py-12 sm:py-14"
      aria-labelledby="enterprise-proof-heading"
    >
      <div className="ae-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal variant="fade-left">
            <motion.div className="max-w-xl" style={{ y: introY }}>
              <p className="text-sm font-semibold uppercase text-accent">
                Enterprise Readiness
              </p>
              <h2
                id="enterprise-proof-heading"
                className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
              >
                A clearer path from technology intent to operating confidence.
              </h2>
              <p className="ae-pretty mt-5 text-base leading-8 text-muted">
                Alphaexplora connects advisory, build, operations, and growth
                work into a secure delivery posture your team can understand,
                adopt, and extend.
              </p>
            </motion.div>
          </Reveal>

          <RevealGroup
            className="ae-proof-signal-grid grid gap-3 sm:grid-cols-2"
            delayChildren={0.08}
          >
            {trustSignals.map((signal) => (
              <RevealItem key={signal.title} variant="scale-in">
                <motion.article
                  className="ae-proof-card ae-card-hover h-full rounded-lg p-5"
                  variants={proofCard}
                  style={{ y: signalY }}
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="ae-proof-icon ae-proof-icon-power"
                      variants={proofIcon}
                    >
                      <Icon name={signal.icon} className="size-5" />
                    </motion.span>
                    <div>
                      <motion.h3
                        className="font-display text-base font-semibold text-foreground"
                        variants={proofPart}
                      >
                        {signal.title}
                      </motion.h3>
                      <motion.p
                        className="ae-pretty mt-2 text-sm leading-6 text-muted"
                        variants={proofPart}
                      >
                        {signal.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.08} variant="line-sweep">
          <div className="ae-capability-band mt-8 rounded-lg">
            <div className="ae-capability-band-header">
              <span>Featured Capabilities</span>
              <a href="/services">
                View services
                <Icon name="arrow" className="size-4" />
              </a>
            </div>
            <div className="grid gap-1 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((capability, index) => (
                <motion.a
                  key={capability.title}
                  href={capability.href}
                  className="ae-capability-link group"
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.42,
                    delay: index * 0.055,
                    ease: premiumEase,
                  }}
                >
                  <span className="ae-proof-icon ae-capability-icon">
                    <Icon name={capability.icon} className="size-5" />
                  </span>
                  <strong>{capability.title}</strong>
                  <small>{capability.description}</small>
                  <Icon
                    name="arrow"
                    className="size-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
