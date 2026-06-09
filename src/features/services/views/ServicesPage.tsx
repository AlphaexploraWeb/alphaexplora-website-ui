import { Icon } from "../../../shared/components/Icon"
import { services } from "../../../shared/models/site"

export default function ServicesPage() {
  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-16 sm:py-20">
        <div className="ae-container">
          <p className="text-sm font-semibold uppercase text-accent">
            Services
          </p>
          <h1 className="ae-balanced mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
            Enterprise technology services, expanded for real operating needs.
          </h1>
          <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Explore the six service families Alphaexplora uses to help
            organizations modernize, build, measure, support, automate, and grow.
          </p>
        </div>
      </section>

      <section className="ae-section py-14 sm:py-16">
        <div className="ae-container grid gap-5">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="ae-glass ae-card-hover group grid gap-6 rounded-lg p-6 lg:grid-cols-[0.18fr_0.82fr_1fr] lg:items-center"
            >
              <span className="font-display text-4xl font-semibold tabular-nums text-accent">
                {service.number}
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <Icon name={service.icon} className="size-6 text-accent" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="ae-pretty mt-4 text-sm leading-7 text-muted">
                  {service.value}
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-foreground/82"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
