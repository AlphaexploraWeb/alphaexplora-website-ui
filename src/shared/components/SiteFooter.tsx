import type { ContactDetail, NavLink, Service } from "../models/site"
import { Icon } from "./Icon"

interface SiteFooterProps {
  links: NavLink[]
  services: Service[]
  contactDetails: ContactDetail[]
}

export function SiteFooter({
  links,
  services,
  contactDetails,
}: SiteFooterProps) {
  const directContact = contactDetails.slice(0, 3)
  const headquarters = contactDetails.find(
    (detail) => detail.label === "Headquarters",
  )
  const resources = ["Blog", "Insights", "FAQs"]

  return (
    <footer className="ae-footer bg-background-deep/95 py-10">
      <div className="ae-container grid gap-9 md:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_0.86fr_0.72fr_1.18fr]">
        <div>
          <a href="/" className="flex items-center gap-3 text-foreground">
            <span className="flex size-10 items-center justify-center rounded-md border border-primary/70 bg-primary/10 font-semibold text-accent">
              A
            </span>
            <span className="font-display text-xl font-semibold">
              Alphaexplora
            </span>
          </a>
          <p className="ae-pretty mt-4 max-w-sm text-sm leading-6 text-muted">
            Secure enterprise technology solutions that drive growth and
            transformation.
          </p>
          <div className="mt-5 flex gap-2">
            {(["target", "cloud", "code", "shield"] as const).map((icon) => (
              <a
                key={icon}
                href="/#contact"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                aria-label="Contact Alphaexplora"
              >
                <Icon name={icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Company</h2>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href={`/services/${service.slug}`}
                  className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Resources</h2>
          <ul className="mt-4 space-y-2">
            {resources.map((resource) => (
              <li key={resource}>
                <a
                  href={resource === "Insights" ? "/insights" : "/#contact"}
                  className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-2">
            {directContact.map((detail) => (
              <li key={detail.label} className="text-sm text-muted">
                <span className="block text-xs text-foreground/70">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </li>
            ))}
            {headquarters ? (
              <li className="text-sm leading-6 text-muted">
                <span className="block text-xs text-foreground/70">
                  Headquarters
                </span>
                {headquarters.value}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <p className="ae-container mt-10 border-t border-white/10 pt-5 text-center text-xs text-muted">
        © 2026 Alphaexplora. All rights reserved.
      </p>
    </footer>
  )
}
