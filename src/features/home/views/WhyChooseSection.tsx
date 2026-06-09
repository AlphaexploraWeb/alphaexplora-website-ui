import { Icon } from "../../../shared/components/Icon"
import type { Benefit } from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"

interface WhyChooseSectionProps {
  benefits: Benefit[]
}

export function WhyChooseSection({ benefits }: WhyChooseSectionProps) {
  return (
    <section id="why-partner" className="ae-section border-b border-white/10 py-12 sm:py-14">
      <div className="ae-container grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <Reveal variant="fade-left">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Why Partner With Us
            </p>
            <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Modernization that connects systems, software, data, AI, and
              growth.
            </h2>
            <a
              href="/about"
              className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent transition-colors duration-200 hover:text-foreground"
            >
              Learn More
              <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </Reveal>

        <RevealGroup className="ae-glass grid gap-0 overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4" delayChildren={0.1}>
          {benefits.map((benefit) => (
            <RevealItem key={benefit.title} variant="scale-in">
              <article className="ae-value-item group h-full border-white/10 px-5 py-8 text-center sm:border-l">
                <div className="mx-auto flex size-14 items-center justify-center rounded-lg text-accent transition-transform duration-200 group-hover:-translate-y-1">
                  <Icon name={benefit.icon} className="size-10" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="ae-pretty mt-3 text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
