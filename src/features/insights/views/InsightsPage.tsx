import { Icon } from "../../../shared/components/Icon"
import { insights } from "../../../shared/models/site"

export default function InsightsPage() {
  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-16 sm:py-20">
        <div className="ae-container">
          <p className="text-sm font-semibold uppercase text-accent">
            Insights
          </p>
          <h1 className="ae-balanced mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
            Practical thinking for modern enterprises.
          </h1>
          <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Articles on modernization, AI, data, cloud architecture, and the
            decisions that help organizations accelerate secure transformation.
          </p>
        </div>
      </section>

      <section className="ae-section py-14 sm:py-16">
        <div className="ae-container grid gap-5 lg:grid-cols-3">
          {insights.map((insight) => (
            <a
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="ae-glass ae-card-hover group flex min-h-[360px] flex-col overflow-hidden rounded-lg p-0"
            >
              <div className={`ae-insight-visual ae-insight-${insight.visual}`} />
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 text-xs font-semibold uppercase text-accent">
                  {insight.category}
                </span>
                <h2 className="ae-pretty font-display text-xl font-semibold leading-snug text-foreground">
                  {insight.title}
                </h2>
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
          ))}
        </div>
      </section>
    </main>
  )
}
