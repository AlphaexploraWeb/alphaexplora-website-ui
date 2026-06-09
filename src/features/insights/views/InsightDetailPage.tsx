import { useParams } from "react-router-dom"
import { insights } from "../../../shared/models/site"
import NotFoundPage from "../../notFound/views/NotFoundPage"

export default function InsightDetailPage() {
  const { slug } = useParams()
  const insight = insights.find((item) => item.slug === slug)

  if (!insight) {
    return <NotFoundPage />
  }

  return (
    <main className="ae-route-page pt-28">
      <article>
        <section className="ae-section border-b border-white/10 py-16 sm:py-20">
          <div className="ae-container max-w-4xl">
            <p className="text-sm font-semibold uppercase text-accent">
              {insight.category}
            </p>
            <h1 className="ae-balanced mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
              {insight.title}
            </h1>
            <p className="ae-pretty mt-6 text-base leading-8 text-muted sm:text-lg">
              {insight.summary}
            </p>
            <p className="mt-5 text-sm font-semibold text-foreground/74">
              {insight.readTime}
            </p>
          </div>
        </section>

        <section className="ae-section py-14 sm:py-16">
          <div className="ae-container max-w-3xl">
            <div className="ae-glass rounded-lg p-6 sm:p-8">
              {insight.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="ae-pretty mb-6 text-base leading-8 text-muted last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/insights"
                className="ae-button-secondary inline-flex min-h-12 items-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
              >
                Back to Insights
              </a>
              <a
                href="/#contact"
                className="ae-button-primary inline-flex min-h-12 items-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
              >
                Discuss This Topic
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
