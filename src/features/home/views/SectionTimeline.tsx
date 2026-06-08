import { useEffect, useState } from "react"

const timelineItems = [
  { number: "01", label: "Home", href: "#top" },
  { number: "02", label: "Ecosystem", href: "#partner-ecosystem" },
  { number: "03", label: "Services", href: "#services" },
  { number: "04", label: "Projects", href: "#projects" },
  { number: "05", label: "Insights", href: "#insights" },
  { number: "06", label: "Contact", href: "#contact" },
]

export function SectionTimeline() {
  const [activeHref, setActiveHref] = useState(timelineItems[0].href)

  useEffect(() => {
    const sections = timelineItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: "-32% 0px -54% 0px",
        threshold: [0.08, 0.18, 0.32, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <nav className="ae-section-timeline" aria-label="Homepage sections">
      <div className="ae-section-timeline-track" aria-hidden="true" />
      <ol>
        {timelineItems.map((item) => {
          const isActive = activeHref === item.href

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className="ae-section-timeline-link"
                aria-current={isActive ? "location" : undefined}
              >
                <span className="ae-section-timeline-dot" aria-hidden="true" />
                <span className="ae-section-timeline-number">{item.number}</span>
                <span className="ae-section-timeline-label">{item.label}</span>
              </a>
            </li>
          )
        })}
      </ol>
      <p aria-hidden="true">Explore</p>
    </nav>
  )
}
