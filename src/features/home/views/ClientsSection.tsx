import type { PartnerLogo } from "../../../shared/models/homepage"
import { Reveal } from "./ScrollReveal"

interface ClientsSectionProps {
  clients: PartnerLogo[]
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section
      id="partner-ecosystem"
      className="ae-section ae-clients-section border-b border-white/10 py-12 sm:py-14"
      aria-labelledby="clients-heading"
    >
      <div className="ae-container">
        <Reveal variant="line-sweep">
          <div
            className="ae-trusted-row"
            aria-label="Client and technology ecosystem areas"
          >
            <p
              id="clients-heading"
              className="text-xs font-semibold uppercase text-accent"
            >
              Trusted across modern technology programs
            </p>
            <div className="ae-trusted-logo-grid">
              {clients.slice(0, 6).map((client) => (
                <div key={client.name} className="ae-partner-logo">
                  <span>{client.mark}</span>
                  <div>
                    <p>{client.name}</p>
                    <small>{client.type}</small>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
