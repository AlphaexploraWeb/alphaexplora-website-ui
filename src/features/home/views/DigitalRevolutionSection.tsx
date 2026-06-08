interface DigitalRevolutionSectionProps {
  highlights: string[]
}

export function DigitalRevolutionSection({
  highlights,
}: DigitalRevolutionSectionProps) {
  return (
    <section className="ae-section py-16 sm:py-24">
      <div className="ae-container">
        <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-surface p-6 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,92,255,0.20),transparent_44%,rgba(0,194,255,0.10))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,0.06)_1px,transparent_1px)] bg-[size:58px_58px] opacity-70" />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-accent">
                Powering the Digital Revolution
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
                Modernization that connects systems, software, data, AI, and
                growth.
              </h2>
            </div>

            <p className="text-lg leading-8 text-muted">
              Alphaexplora helps organizations turn technology into a secure
              operational advantage, from process analysis and enterprise
              architecture to analytics, automation, and managed services.
            </p>
          </div>

          <div className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="min-h-28 rounded-md border border-white/10 bg-background/65 p-4"
              >
                <span className="mb-5 block h-px w-full bg-gradient-to-r from-primary via-accent to-transparent" />
                <p className="text-sm font-semibold text-foreground">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
