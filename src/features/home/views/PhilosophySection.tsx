import { Icon } from "../../../shared/components/Icon"
import { Reveal } from "./ScrollReveal"

export function PhilosophySection() {
  return (
    <section id="about" className="ae-section border-b border-white/10 py-7 sm:py-9">
      <div className="ae-container">
        <Reveal variant="scale-in">
          <div className="ae-glass ae-philosophy-card grid gap-10 rounded-lg p-7 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-accent">
                Our Philosophy
              </p>
              <blockquote className="ae-balanced mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Technology should empower, not exclude. Because IT is a Right!
              </blockquote>
              <p className="ae-pretty mt-6 max-w-xl text-base leading-8 text-muted">
                We believe technology should drive impact, not complexity. Our
                mission is to make modern, secure, and scalable technology
                accessible to every business.
              </p>
              <a
                href="/about"
                className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent transition-colors duration-200 hover:text-foreground"
              >
                Learn more about us
                <Icon name="arrow" className="size-4" />
              </a>
            </div>

            <div className="ae-iso-stage relative min-h-[300px] overflow-hidden rounded-lg">
              <div className="ae-iso-grid" />
              <div className="ae-iso-orbit ae-iso-orbit-one" />
              <div className="ae-iso-orbit ae-iso-orbit-two" />
              {["main", "left", "right", "front"].map((cube) => (
                <div key={cube} className={`ae-cube ae-cube-${cube}`}>
                  <span className="ae-cube-face ae-cube-face-top" />
                  <span className="ae-cube-face ae-cube-face-left" />
                  <span className="ae-cube-face ae-cube-face-right" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
