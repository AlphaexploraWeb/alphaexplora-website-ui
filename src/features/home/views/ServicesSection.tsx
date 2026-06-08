import { Icon } from "../../../shared/components/Icon"
import type { Service } from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="ae-section ae-services-split-section border-b border-white/10 py-14 sm:py-16">
      <div className="ae-container ae-services-split">
        <Reveal className="ae-services-intro">
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
              href="#contact"
              className="ae-button-secondary group mt-9 inline-flex min-h-14 w-fit items-center justify-center gap-7 rounded-md px-7 py-4 text-sm font-semibold active:scale-[0.96]"
            >
              View All Services
              <Icon
                name="arrow"
                className="size-5 text-accent transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        <RevealGroup className="ae-services-list" delayChildren={0.12}>
          {services.map((service, index) => (
            <RevealItem key={service.title} y={18}>
              <a
                href="#contact"
                className={`ae-service-row group ${
                  index === 2 ? "ae-service-row-active" : ""
                }`}
                aria-label={`${service.number} ${service.title}`}
              >
                <span className="ae-service-row-number tabular-nums">
                  {service.number}
                </span>
                <span className="ae-service-row-copy">
                  <strong>{service.compactTitle ?? service.title}</strong>
                  {service.compactTitle ? (
                    <span className="sr-only">{service.title}</span>
                  ) : null}
                  <span>{service.compactDescription}</span>
                </span>
                <Icon name="arrow" className="ae-service-row-arrow" />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
