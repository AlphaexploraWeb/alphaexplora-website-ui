import { Icon } from "../../../shared/components/Icon"
import type { Insight } from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"

interface InsightsSectionProps {
  insights: Insight[]
}

export function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <section id="insights" className="ae-section border-b border-white/10 py-14 sm:py-16">
      <span id="case-studies" className="absolute -top-28" aria-hidden="true" />
      <div className="ae-container">
        <Reveal variant="fade-up">
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-accent">
                Insights
              </p>
              <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Practical thinking for modern enterprises.
              </h2>
            </div>
            <a
              href="/insights"
              className="ae-button-secondary inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
            >
              View All Insights
            </a>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-5 lg:grid-cols-3" delayChildren={0.1}>
          {insights.map((insight) => (
            <RevealItem key={insight.title} variant="scale-in">
              <a
                href={`/insights/${insight.slug}`}
                className="ae-glass ae-card-hover group flex min-h-[336px] flex-col overflow-hidden rounded-lg p-0"
              >
                <div className={`ae-insight-visual ae-insight-${insight.visual}`} />
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-3 text-xs font-semibold uppercase text-accent">
                    {insight.category}
                  </span>
                  <h3 className="ae-pretty font-display text-xl font-semibold leading-snug text-foreground">
                    {insight.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {insight.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6 text-sm text-muted">
                    <span>{insight.readTime}</span>
                    <Icon
                      name="arrow"
                      className="size-5 text-primary transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
