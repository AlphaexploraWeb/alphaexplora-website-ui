import type { PartnerLogo } from "../../../shared/models/homepage"
import { Reveal } from "./ScrollReveal"

interface ClientsSectionProps {
  clients: PartnerLogo[]
}

function ClientLogoTrack({
  clients,
  hidden,
}: {
  clients: PartnerLogo[]
  hidden?: boolean
}) {
  return (
    <div className="ae-marquee-segment" aria-hidden={hidden}>
      {clients.map((client) => (
        <div
          key={`${hidden ? "duplicate" : "primary"}-${client.name}`}
          className="ae-partner-logo"
        >
          <span>{client.mark}</span>
          <div>
            <p>{client.name}</p>
            <small>{client.type}</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section
      id="partner-ecosystem"
      className="ae-section ae-clients-section border-b border-white/10 py-12 sm:py-14"
      aria-labelledby="clients-heading"
    >
      <div className="ae-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Client Ecosystem
            </p>
            <h2
              id="clients-heading"
              className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Trusted across modern technology programs.
            </h2>
            <p className="ae-pretty mt-4 text-sm leading-7 text-muted sm:text-base">
              Representative client and partner domains Alphaexplora supports
              across cloud, security, data, AI, growth, and managed operations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} variant="line-sweep">
          <div
            className="ae-partner-marquee mt-10 rounded-lg"
            aria-label="Client and technology ecosystem areas"
          >
            <div className="ae-marquee-window" tabIndex={0}>
              <div className="ae-marquee-track">
                <ClientLogoTrack clients={clients} />
                <ClientLogoTrack clients={clients} hidden />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
