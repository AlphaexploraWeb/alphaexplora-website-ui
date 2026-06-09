import { useParams } from "react-router-dom"
import { Icon } from "../../../shared/components/Icon"
import { services } from "../../../shared/models/site"
import NotFoundPage from "../../notFound/views/NotFoundPage"

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <NotFoundPage />
  }

  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-16 sm:py-20">
        <div className="ae-container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Service {service.number}
            </p>
            <h1 className="ae-balanced mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
              {service.title}
            </h1>
            <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {service.value}
            </p>
          </div>
          <div className="ae-glass rounded-lg p-6">
            <Icon name={service.icon} className="size-8 text-accent" />
            <p className="ae-pretty mt-5 text-base leading-8 text-foreground/86">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="ae-section border-b border-white/10 py-14 sm:py-16">
        <div className="ae-container grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Key Features
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="ae-glass rounded-lg p-5">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {feature}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Expected Outcomes
            </p>
            <div className="mt-6 grid gap-3">
              {service.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm leading-7 text-muted">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ae-section py-14 sm:py-16">
        <div className="ae-container grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Delivery Pattern
            </p>
            <h2 className="ae-balanced mt-4 font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Practical steps from assessment to execution.
            </h2>
          </div>
          <div className="grid gap-3">
            {service.process.map((step, index) => (
              <div key={step} className="ae-glass rounded-lg p-5">
                <span className="text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base leading-7 text-foreground/86">
                  {step}
                </p>
              </div>
            ))}
            <a
              href="/#contact"
              className="ae-button-primary mt-4 inline-flex min-h-12 w-fit items-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
            >
              Discuss This Service
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
