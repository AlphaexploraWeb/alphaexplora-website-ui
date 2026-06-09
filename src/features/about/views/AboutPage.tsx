import { Icon } from "../../../shared/components/Icon"
import { benefits, companyStory, contactDetails } from "../../../shared/models/site"

export default function AboutPage() {
  const headquarters = contactDetails.find(
    (detail) => detail.label === "Headquarters",
  )

  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-16 sm:py-20">
        <div className="ae-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              {companyStory.eyebrow}
            </p>
            <h1 className="ae-balanced mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
              {companyStory.title}
            </h1>
            <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {companyStory.intro}
            </p>
          </div>
          <blockquote className="ae-glass rounded-lg border-l-4 border-accent p-7">
            <p className="ae-balanced font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">
              "{companyStory.philosophy}"
            </p>
          </blockquote>
        </div>
      </section>

      <section className="ae-section border-b border-white/10 py-14 sm:py-16">
        <div className="ae-container grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Our Story
            </p>
              <h2 className="ae-balanced mt-4 font-display text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
              Built for serious technology work with a human purpose.
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="ae-pretty text-base leading-8 text-muted">
              {companyStory.story}
            </p>
            <div className="ae-glass rounded-lg p-6">
              <p className="text-xs font-semibold uppercase text-accent">
                Mission
              </p>
              <p className="ae-pretty mt-3 text-base leading-8 text-foreground/86">
                {companyStory.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ae-section border-b border-white/10 py-14 sm:py-16">
        <div className="ae-container">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase text-accent">
              Operating Values
            </p>
            <h2 className="ae-balanced mt-4 font-display text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
              Clear principles for secure, outcome-led delivery.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {companyStory.values.map((value, index) => (
              <div key={value} className="ae-glass rounded-lg p-5">
                <span className="text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ae-section py-14 sm:py-16">
        <div className="ae-container grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="ae-glass rounded-lg p-5">
                <Icon name={benefit.icon} className="size-6 text-accent" />
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="ae-glass rounded-lg p-7">
            <p className="text-sm font-semibold uppercase text-accent">
              Headquarters
            </p>
            <h2 className="ae-balanced mt-4 font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Marikina-based, enterprise-focused.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              {headquarters?.value}
            </p>
            <a
              href="/#contact"
              className="ae-button-primary mt-7 inline-flex min-h-12 items-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
