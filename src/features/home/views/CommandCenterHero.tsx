export function CommandCenterHero() {
  const journey = ["Consult", "Build", "Operate", "Scale"]
  const bars = [68, 56, 80, 64, 74]

  return (
    <div
      aria-hidden="true"
      className="ae-command-visual relative min-h-[440px] overflow-hidden"
    >
      <div className="ae-command-card">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <p className="font-display text-xs font-semibold uppercase text-accent">
              Alphaexplora
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Enterprise command view
            </p>
          </div>
          <span className="rounded-md border border-accent/55 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
            Secure
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.94fr_1fr]">
          <div className="ae-command-tile rounded-md bg-background/70 p-5">
            <p className="text-xs font-semibold text-foreground">
              Systems modernization
            </p>
            <div className="mt-5 flex items-center gap-4">
              <div className="ae-command-progress">
                <span>72%</span>
              </div>
              <div>
                <p className="font-display text-xl font-semibold tabular-nums text-foreground">
                  72%
                </p>
                <p className="mt-1 text-xs text-muted">Progress</p>
              </div>
            </div>
          </div>

          <div className="ae-command-tile rounded-md bg-background/70 p-5">
            <p className="text-xs font-semibold text-foreground">
              Data readiness
            </p>
            <div className="mt-6 flex h-16 items-end gap-3">
              {bars.map((bar, index) => (
                <span
                  key={`${bar}-${index}`}
                  className="ae-command-bar"
                  style={{ height: `${bar}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {journey.map((item, index) => (
            <div
              key={item}
              className="ae-command-row"
              style={{ ["--row-glow" as string]: `${index * 14}%` }}
            >
              <span>{item}</span>
              <i />
            </div>
          ))}
        </div>
      </div>

      <div className="ae-command-pedestal">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
