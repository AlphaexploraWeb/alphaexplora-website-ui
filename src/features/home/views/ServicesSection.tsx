import { motion } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import type { Service } from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"
import { premiumEase } from "./motionTokens"

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const servicePart = {
    hidden: { opacity: 0, y: 14, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.42, ease: premiumEase },
    },
  }

  return (
    <section id="services" className="ae-section ae-services-split-section border-b border-white/10 py-24 sm:py-28 lg:py-32">
      <div className="ae-container ae-services-split">
        <Reveal className="ae-services-intro" variant="fade-left">
          <div>
            <div>
              <p className="text-sm font-semibold uppercase text-accent">
                What We Do
              </p>
              <h2 className="ae-balanced mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Enterprise technology services, structured for transformation.
              </h2>
              <p className="ae-pretty mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                From strategy to execution, we deliver measurable outcomes
                across your technology journey.
              </p>
            </div>
            <a
              href="/services"
              className="ae-button-secondary group mt-9 inline-flex min-h-14 w-fit items-center justify-center gap-5 px-7 py-4 text-sm font-semibold active:scale-[0.98]"
            >
              View All Services
              <span className="ae-button-icon">
                <Icon name="arrow" />
              </span>
            </a>
          </div>
        </Reveal>

        <RevealGroup className="ae-services-list" delayChildren={0.12} staggerChildren={0.07}>
          {services.map((service, index) => (
            <RevealItem key={service.title} variant="scale-in">
              <motion.a
                href={`/services/${service.slug}`}
                className={`ae-service-row group ${
                  index === 2 ? "ae-service-row-active" : ""
                }`}
                aria-label={`${service.number} ${service.title}`}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.055,
                      delayChildren: 0.04,
                    },
                  },
                }}
              >
                <motion.span
                  className="ae-service-row-number tabular-nums"
                  variants={servicePart}
                >
                  {service.number}
                </motion.span>
                <motion.span className="ae-service-row-copy" variants={servicePart}>
                  <strong>{service.compactTitle ?? service.title}</strong>
                  {service.compactTitle ? (
                    <span className="sr-only">{service.title}</span>
                  ) : null}
                  <span>{service.compactDescription}</span>
                </motion.span>
                <motion.span variants={servicePart} aria-hidden="true">
                  <Icon name="arrow" className="ae-service-row-arrow" />
                </motion.span>
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
