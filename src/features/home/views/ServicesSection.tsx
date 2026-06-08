import { Icon } from "../../../shared/components/Icon"
import type { Service } from "../../../shared/models/homepage"

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="ae-section border-b border-white/10 py-14 sm:py-16">
      <div className="ae-container">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-accent">
              What We Do
            </p>
            <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Enterprise technology services, structured for transformation.
            </h2>
            <p className="ae-pretty mt-4 max-w-xl text-base leading-7 text-muted">
              From strategy to execution, we deliver measurable outcomes
              across your technology journey.
            </p>
          </div>
          <a
            href="#contact"
            className="ae-button-secondary inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
          >
            View All Services
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="ae-glass ae-card-hover ae-service-card group min-h-[156px] rounded-lg p-6"
              aria-label={`${service.number} ${service.title}`}
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/20 text-accent shadow-[0_0_30px_rgba(11,92,255,0.25)]">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-display text-base text-muted tabular-nums">
                    {service.number}
                  </span>
                </div>
                <Icon
                  name="arrow"
                  className="mt-3 size-5 text-primary transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                <span aria-hidden="true">
                  {service.compactTitle ?? service.title}
                </span>
                {service.compactTitle ? (
                  <span className="sr-only">{service.title}</span>
                ) : null}
              </h3>
              <p className="ae-pretty mt-2 text-sm leading-6 text-muted">
                {service.compactDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
