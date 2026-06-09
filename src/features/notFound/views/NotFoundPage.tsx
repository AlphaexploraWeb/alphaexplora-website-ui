import { Icon } from "../../../shared/components/Icon"

export default function NotFoundPage() {
  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-20 sm:py-24">
        <div className="ae-container">
          <div className="ae-glass max-w-3xl rounded-lg p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase text-accent">
              Route unavailable
            </p>
            <h1 className="ae-balanced mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
              This page is outside the current Alphaexplora map.
            </h1>
            <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              The page may have moved, or the route may not exist yet. Return to
              a verified destination to continue exploring the platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="ae-button-primary group inline-flex min-h-12 items-center gap-3 rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
              >
                Back to Home
                <Icon
                  name="arrow"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="/services"
                className="ae-button-secondary inline-flex min-h-12 items-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
