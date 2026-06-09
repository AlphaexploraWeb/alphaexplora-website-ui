import { Icon } from "../../../shared/components/Icon"
import { Reveal } from "./ScrollReveal"

const systemNodes = [
  { label: "Strategy", icon: "target" as const, className: "ae-system-node-strategy" },
  { label: "Applications", icon: "code" as const, className: "ae-system-node-apps" },
  { label: "Data", icon: "analytics" as const, className: "ae-system-node-data" },
  { label: "Security", icon: "shield" as const, className: "ae-system-node-security" },
  { label: "Cloud", icon: "cloud" as const, className: "ae-system-node-cloud" },
  { label: "AI", icon: "ai" as const, className: "ae-system-node-ai" },
]

export function PhilosophySection() {
  return (
    <section
      id="about"
      className="ae-section ae-build-section border-b border-white/10 py-20 sm:py-24 lg:py-28"
    >
      <div className="ae-container">
        <Reveal variant="scale-in">
          <div className="ae-build-band">
            <span className="ae-build-word" aria-hidden="true">
              BUILD
            </span>

            <div className="ae-build-copy">
              <p className="text-sm font-semibold uppercase text-accent">
                Our Philosophy
              </p>
              <h2 className="ae-balanced mt-5 max-w-md font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                We build systems that drive real business outcomes.
              </h2>
              <blockquote className="ae-pretty mt-6 max-w-lg text-lg leading-8 text-foreground/88">
                "Technology should empower, not exclude. Because IT is a Right!"
              </blockquote>
            </div>

            <div className="ae-build-note">
              <p className="ae-pretty text-sm leading-7 text-muted">
                From modern applications to intelligent platforms, we connect
                strategy, software, data, security, cloud, AI, and operations
                into systems that are secure, scalable, and built to last.
              </p>
              <a
                href="/about"
                className="ae-inline-arrow mt-6"
              >
                See our approach
                <Icon name="arrow" className="size-4" />
              </a>
            </div>

            <div className="ae-system-map" aria-hidden="true">
              <svg viewBox="0 0 760 330">
                <path d="M86 168 H250 L382 72 H558" />
                <path d="M250 168 H404 L558 262" />
                <path d="M250 168 L392 168 L520 168" />
                <path d="M392 168 L382 72" />
                <path d="M392 168 L558 262" />
              </svg>
              {systemNodes.map((node) => (
                <div key={node.label} className={`ae-system-node ${node.className}`}>
                  <Icon name={node.icon} className="size-5" />
                  <span>{node.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
