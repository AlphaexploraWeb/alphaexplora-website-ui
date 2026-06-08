import { Icon } from "../../../shared/components/Icon"
import type { CurrentProject } from "../../../shared/models/homepage"

interface ProjectsSectionProps {
  projects: CurrentProject[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="ae-section border-b border-white/10 py-14 sm:py-16">
      <div className="ae-container">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-accent">
              Selected Projects
            </p>
            <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Public digital work already launched with Alphaexplora.
            </h2>
            <p className="ae-pretty mt-4 max-w-xl text-base leading-7 text-muted">
              Explore live websites across community, engineering, and product
              showcase experiences built with secure, modern web foundations.
            </p>
          </div>
          <a
            href="#contact"
            className="ae-button-secondary inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
          >
            Discuss a Project
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="ae-project-card ae-glass group rounded-lg p-6"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="ae-project-media"
                aria-label={`Open ${project.title}`}
              >
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
              </a>

              <div className="flex items-start justify-between gap-5">
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
              >
                View Project
                <Icon name="arrow" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
