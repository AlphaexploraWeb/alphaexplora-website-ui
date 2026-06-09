import { Icon } from "../../../shared/components/Icon"
import type { HeroHighlight } from "../../../shared/models/homepage"
import { CommandCenterHero } from "./CommandCenterHero"

interface HeroSectionProps {
  highlights: HeroHighlight[]
}

export function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="ae-section ae-hero-wave ae-hero-section overflow-hidden border-b border-white/10 pt-40 pb-10 sm:pt-32 lg:pb-14"
    >
      <div className="ae-container ae-hero-inner">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] xl:grid-cols-[minmax(0,690px)_minmax(460px,520px)] xl:justify-between">
          <div className="max-w-3xl">
            <h1 className="ae-balanced ae-hero-title font-display text-4xl font-semibold leading-[1.06] text-foreground sm:text-6xl lg:text-[54px] xl:text-[62px]">
              Modern IT Solutions, Built with{" "}
              <span className="ae-hero-purpose">Purpose</span>
            </h1>
            <p className="ae-pretty mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Alphaexplora helps businesses modernize systems, build software,
              unlock data, adopt AI, and grow through secure, scalable
              technology.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="ae-button-primary group inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 py-3 text-center text-sm font-semibold active:scale-[0.96]"
              >
                Get Started
                <Icon
                  name="arrow"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="/services"
                className="ae-button-secondary inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-center text-sm font-semibold active:scale-[0.96]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="flex min-h-12 items-center gap-3 text-xs text-foreground/86 xl:text-sm"
                >
                  <Icon name={highlight.icon} className="size-5 text-accent" />
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>

          <CommandCenterHero />
        </div>
      </div>
    </section>
  )
}
