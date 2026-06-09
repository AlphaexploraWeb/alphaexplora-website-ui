import { Icon } from "../../../shared/components/Icon"
import type { CurrentProject, IconName } from "../../../shared/models/homepage"
import { Reveal, RevealGroup, RevealItem } from "./ScrollReveal"

interface ProjectsSectionProps {
  projects: CurrentProject[]
}

function iconForProject(project: CurrentProject): IconName {
  if (project.category.toLowerCase().includes("engineering")) {
    return "code"
  }

  if (project.category.toLowerCase().includes("product")) {
    return "growth"
  }

  if (project.category.toLowerCase().includes("business")) {
    return "cloud"
  }

  return "spark"
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [featuredProject, ...supportingProjects] = projects

  if (!featuredProject) {
    return null
  }

  return (
    <section
      id="projects"
      className="ae-section ae-featured-work-section border-b border-white/10 py-20 sm:py-24 lg:py-28"
    >
      <div className="ae-container">
        <Reveal variant="fade-up">
          <div className="ae-section-heading-row">
            <div>
              <p className="text-sm font-semibold uppercase text-accent">
                Featured Work
              </p>
              <h2 className="ae-balanced mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Solutions we've built. Impact we've delivered.
              </h2>
            </div>
            <a href="/projects" className="ae-inline-arrow group">
              View all projects
              <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="ae-featured-work-grid mt-11 grid gap-5 lg:grid-cols-[1.12fr_1fr]">
          <Reveal variant="scale-in">
            <article className="ae-featured-project-card ae-glass">
              <div className="ae-featured-project-media">
                <div className="ae-project-browser" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <img
                  src={featuredProject.thumbnail}
                  alt={featuredProject.thumbnailAlt}
                  className={
                    featuredProject.thumbnailFit === "contain"
                      ? "ae-project-image ae-project-image-contain"
                      : "ae-project-image"
                  }
                  loading="lazy"
                />
              </div>

              <div className="ae-featured-project-copy">
                <span className="text-xs font-semibold uppercase text-accent">
                  {featuredProject.category}
                </span>
                <h3 className="ae-balanced mt-3 font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                  {featuredProject.title}
                </h3>
                <p className="ae-pretty mt-4 max-w-xl text-sm leading-7 text-muted">
                  {featuredProject.outcome}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-foreground/78"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ae-project-link inline-flex min-h-10 items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground active:scale-[0.98]"
                  >
                    Open Live Website
                    <Icon name="arrow" className="size-4" />
                  </a>
                  <a
                    href={featuredProject.href}
                    className="ae-inline-arrow"
                  >
                    View Project
                    <Icon name="arrow" className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          <RevealGroup
            className="ae-featured-project-tiles grid gap-4 sm:grid-cols-2"
            delayChildren={0.08}
            staggerChildren={0.06}
          >
            {supportingProjects.slice(0, 4).map((project) => (
              <RevealItem key={project.slug} variant="scale-in">
                <a href={project.href} className="ae-work-tile group">
                  <span className="ae-work-tile-icon">
                    <Icon name={iconForProject(project)} className="size-7" />
                  </span>
                  <span className="text-xs font-semibold uppercase text-accent">
                    {project.category}
                  </span>
                  <strong>{project.title}</strong>
                  <small>{project.outcome}</small>
                  <span className="ae-work-tile-link">
                    View Project
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
