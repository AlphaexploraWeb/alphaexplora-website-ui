import { motion } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import type { Service } from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"
import { premiumEase } from "./motionTokens"

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="ae-section ae-services-reference-section border-b border-white/10 py-20 sm:py-24 lg:py-28"
    >
      <div className="ae-container">
        <Reveal variant="fade-up">
          <div className="ae-section-heading-row">
            <div>
              <p className="text-sm font-semibold uppercase text-accent">
                What We Do
              </p>
              <h2 className="ae-balanced mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                End-to-end technology services for every stage of{" "}
                <span className="text-primary">transformation.</span>
              </h2>
            </div>
            <a
              href="/services"
              className="ae-inline-arrow group"
            >
              View all services
              <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </Reveal>

        <RevealGroup
          className="ae-services-column-grid mt-12 grid gap-y-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          delayChildren={0.12}
          staggerChildren={0.06}
        >
          {services.map((service, index) => (
            <RevealItem key={service.title} variant="scale-in">
              <motion.a
                href={`/services/${service.slug}`}
                className="ae-service-column group"
                aria-label={`${service.number} ${service.title}`}
                transition={{
                  duration: 0.42,
                  delay: index * 0.045,
                  ease: premiumEase,
                }}
              >
                <span className="ae-service-column-icon">
                  <Icon name={service.icon} className="size-7" />
                </span>
                <span className="ae-service-column-number tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{service.compactTitle ?? service.title}</strong>
                {service.compactTitle ? (
                  <span className="sr-only">{service.title}</span>
                ) : null}
                <small>{service.compactDescription}</small>
                <Icon name="arrow" className="ae-service-column-arrow size-4" />
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
