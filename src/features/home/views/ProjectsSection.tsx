import { useEffect, useRef, useState } from "react"
import { Icon } from "../../../shared/components/Icon"
import type { CurrentProject } from "../../../shared/models/homepage"
import { Reveal } from "./ScrollReveal"

interface ProjectsSectionProps {
  projects: CurrentProject[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<CurrentProject | null>(
    null,
  )
  const categoryCount = new Set(projects.map((project) => project.category)).size
  
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 2)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2)
    }
  }

  useEffect(() => {
    const el = carouselRef.current
    if (el) {
      el.addEventListener("scroll", checkScroll)
      checkScroll()
      window.addEventListener("resize", checkScroll)
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll)
      }
      window.removeEventListener("resize", checkScroll)
    }
  }, [projects])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 400
      const gap = 24
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap)
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="ae-section border-b border-white/10 py-14 sm:py-16">
      <div className="ae-container">
        <Reveal>
          <div className="ae-project-header mb-11">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-accent">
                Selected Projects
              </p>
              <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Public digital work already launched with Alphaexplora.
              </h2>
              <p className="ae-pretty mt-4 max-w-xl text-base leading-7 text-muted">
                Explore live websites across community, ministry, engineering,
                workspace, and product showcase experiences built with secure,
                modern web foundations.
              </p>
            </div>

            <div className="ae-project-header-aside">
              <div className="ae-project-stats" aria-label="Project statistics">
                <div className="ae-project-stat">
                  <Icon name="cloud" className="size-5 text-muted" />
                  <span className="font-display text-2xl font-semibold tabular-nums text-foreground">
                    {projects.length}
                  </span>
                  <span>Live Projects</span>
                </div>
                <div className="ae-project-stat">
                  <Icon name="spark" className="size-5 text-muted" />
                  <span className="font-display text-2xl font-semibold tabular-nums text-foreground">
                    {categoryCount}
                  </span>
                  <span>Categories</span>
                </div>
                <div className="ae-project-stat">
                  <Icon name="target" className="size-5 text-muted" />
                  <span className="font-display text-2xl font-semibold tabular-nums text-foreground">
                    100%
                  </span>
                  <span>Delivered</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className="ae-button-secondary inline-flex size-11 items-center justify-center rounded-full p-0 transition-all active:scale-[0.96] disabled:pointer-events-none disabled:opacity-30"
                    aria-label="Scroll left"
                  >
                    <Icon name="arrow" className="size-5 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className="ae-button-secondary inline-flex size-11 items-center justify-center rounded-full p-0 transition-all active:scale-[0.96] disabled:pointer-events-none disabled:opacity-30"
                    aria-label="Scroll right"
                  >
                    <Icon name="arrow" className="size-5" />
                  </button>
                </div>

                <a
                  href="#contact"
                  className="ae-button-secondary inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
                >
                  Discuss a Project
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="ae-project-carousel-wrapper">
          <div ref={carouselRef} className="ae-project-carousel">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                className="ae-project-reveal-item"
                delay={index * 0.05}
                y={18}
              >
                <article
                  role="button"
                  tabIndex={0}
                  className="ae-project-card ae-glass group rounded-lg p-6"
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setSelectedProject(project)
                    }
                  }}
                >
                  <div className="ae-project-media">
                    <img
                      src={project.thumbnail}
                      alt={project.thumbnailAlt}
                      className={
                        project.thumbnailFit === "contain"
                          ? "ae-project-image ae-project-image-contain"
                          : "ae-project-image"
                      }
                      loading="lazy"
                    />
                  </div>

                  <div className="ae-project-body">
                    <div className="flex items-start justify-between gap-5 w-full">
                      <div>
                        <span className="text-xs font-semibold uppercase text-accent">
                          {project.category}
                        </span>
                        <h3 className="ae-balanced mt-3 font-display text-2xl font-semibold leading-tight text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <span className="ae-project-number tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-5 inline-flex min-h-9 items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent">
                      <Icon name="target" className="size-4" />
                      {project.status}
                    </div>

                    <p className="ae-pretty mt-5 text-sm leading-7 text-muted">
                      {project.outcome}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground/78"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ae-project-link mt-6 inline-flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground active:scale-[0.96]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      View Project
                      <Icon name="arrow" className="size-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

      </div>

      {selectedProject && (
        <div
          className="ae-project-preview-layer"
          role="presentation"
          onMouseDown={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-preview-title"
            className="ae-project-preview ae-glass"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="ae-project-preview-close"
              aria-label="Close project preview"
              onClick={() => setSelectedProject(null)}
            >
              <Icon name="close" className="size-5" />
            </button>

            <div className="ae-project-preview-media">
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.thumbnailAlt}
                className={
                  selectedProject.thumbnailFit === "contain"
                    ? "ae-project-image ae-project-image-contain"
                    : "ae-project-image"
                }
              />
            </div>

            <div className="ae-project-preview-content">
              <span className="text-xs font-semibold uppercase text-accent">
                {selectedProject.category}
              </span>
              <h3
                id="project-preview-title"
                className="ae-balanced mt-3 font-display text-3xl font-semibold leading-tight text-foreground"
              >
                {selectedProject.title}
              </h3>
              <div className="mt-5 inline-flex min-h-9 items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent">
                <Icon name="target" className="size-4" />
                {selectedProject.status}
              </div>
              <p className="ae-pretty mt-5 text-base leading-8 text-muted">
                {selectedProject.outcome}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noreferrer"
                className="ae-project-link mt-7 inline-flex min-h-11 items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-foreground active:scale-[0.96]"
              >
                View Project
                <Icon name="arrow" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
