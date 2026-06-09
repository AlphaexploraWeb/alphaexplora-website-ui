import { useEffect, useRef, useState } from "react"
import { Icon } from "../../../shared/components/Icon"
import type { CurrentProject } from "../../../shared/models/homepage"
import { Reveal } from "./ScrollReveal"

interface ProjectsSectionProps {
  projects: CurrentProject[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(null)
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

  return (
    <section id="projects" className="ae-section border-b border-white/10 py-24 sm:py-28 lg:py-32">
      <div className="ae-container">
        <Reveal variant="fade-up">
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
                    className="ae-button-secondary inline-flex size-11 items-center justify-center p-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-30"
                    aria-label="Scroll left"
                  >
                    <Icon name="arrow" className="size-5 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className="ae-button-secondary inline-flex size-11 items-center justify-center p-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-30"
                    aria-label="Scroll right"
                  >
                    <Icon name="arrow" className="size-5" />
                  </button>
                </div>

                <a
                  href="/projects"
                  className="ae-button-secondary inline-flex min-h-11 items-center justify-center px-5 py-3 text-sm font-semibold active:scale-[0.98]"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="ae-project-carousel-wrapper">
          <div ref={carouselRef} className="ae-project-carousel">
            {projects.map((project, index) => {
              const isActive = activeProjectSlug === project.slug
              const hasActiveProject = Boolean(activeProjectSlug)
              const projectNumber = String(index + 1).padStart(2, "0")

              return (
                <Reveal
                  key={project.title}
                  className={[
                    "ae-project-reveal-item",
                    isActive ? "ae-project-reveal-item--active" : "",
                    hasActiveProject && !isActive
                      ? "ae-project-reveal-item--inactive"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  delay={index * 0.05}
                  variant="scale-in"
                >
                  <article
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                    className="ae-project-card ae-glass group p-4 sm:p-5"
                    onPointerEnter={(event) => {
                      if (event.pointerType !== "touch") {
                        setActiveProjectSlug(project.slug)
                      }
                    }}
                    onPointerDown={(event) => {
                      if (event.pointerType === "touch") {
                        setActiveProjectSlug(project.slug)
                      }
                    }}
                    onTouchStart={() => setActiveProjectSlug(project.slug)}
                    onPointerLeave={(event) => {
                      if (
                        event.pointerType !== "touch" &&
                        activeProjectSlug === project.slug
                      ) {
                        setActiveProjectSlug(null)
                      }
                    }}
                    onFocus={() => setActiveProjectSlug(project.slug)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setActiveProjectSlug(null)
                      }
                    }}
                    onClick={() => setActiveProjectSlug(project.slug)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        setActiveProjectSlug(project.slug)
                      }
                    }}
                  >
                    <div className="ae-project-showcase">
                      <div className="ae-project-browser" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>
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
                    </div>

                    <div className="ae-project-body">
                      <div className="ae-project-heading">
                        <div>
                          <span className="text-xs font-semibold uppercase text-accent">
                            {project.category}
                          </span>
                          <h3 className="ae-balanced mt-2 font-display text-xl font-semibold leading-tight text-foreground">
                            {project.title}
                          </h3>
                        </div>
                        <span className="ae-project-number tabular-nums">
                          {projectNumber}
                        </span>
                      </div>

                      <div className="ae-project-status mt-4 inline-flex min-h-8 items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent">
                        <Icon name="target" className="size-4" />
                        {project.status}
                      </div>

                      <div className="ae-project-expanded">
                        <p className="ae-pretty mt-4 text-sm leading-7 text-muted">
                          {project.outcome}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
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
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="ae-project-link mt-6 inline-flex min-h-10 items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground active:scale-[0.98]"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Open Live Website
                          <Icon name="arrow" className="size-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
