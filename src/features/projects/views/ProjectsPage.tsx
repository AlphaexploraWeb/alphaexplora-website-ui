import { Icon } from "../../../shared/components/Icon"
import { currentProjects } from "../../../shared/models/site"

export default function ProjectsPage() {
  const categoryCount = new Set(
    currentProjects.map((project) => project.category),
  ).size

  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-16 sm:py-20">
        <div className="ae-container grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Projects
            </p>
            <h1 className="ae-balanced mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
              Launched digital work built with Alphaexplora.
            </h1>
            <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Explore representative websites and platform work across
              community, engineering, ministry, workspace, and product showcase
              contexts.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="ae-glass rounded-lg p-4">
              <span className="font-display text-3xl font-semibold text-foreground">
                {currentProjects.length}
              </span>
              <p className="mt-1 text-xs text-muted">Live Projects</p>
            </div>
            <div className="ae-glass rounded-lg p-4">
              <span className="font-display text-3xl font-semibold text-foreground">
                {categoryCount}
              </span>
              <p className="mt-1 text-xs text-muted">Categories</p>
            </div>
            <div className="ae-glass rounded-lg p-4">
              <span className="font-display text-3xl font-semibold text-foreground">
                100%
              </span>
              <p className="mt-1 text-xs text-muted">Delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ae-section py-14 sm:py-16">
        <div className="ae-container grid gap-5 lg:grid-cols-2">
          {currentProjects.map((project) => (
            <a
              key={project.slug}
              href={project.href}
              className="ae-glass ae-card-hover group flex flex-col overflow-hidden rounded-lg p-0"
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
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase text-accent">
                  {project.category}
                </span>
                <h2 className="ae-balanced mt-3 font-display text-2xl font-semibold leading-tight text-foreground">
                  {project.title}
                </h2>
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
                <span className="mt-auto inline-flex min-h-10 items-center gap-2 pt-6 text-sm font-semibold text-foreground">
                  View Project
                  <Icon
                    name="arrow"
                    className="size-4 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
