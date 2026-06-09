import { useParams } from "react-router-dom"
import { Icon } from "../../../shared/components/Icon"
import { currentProjects } from "../../../shared/models/site"
import NotFoundPage from "../../notFound/views/NotFoundPage"

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = currentProjects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <main className="ae-route-page pt-28">
      <section className="ae-section border-b border-white/10 py-16 sm:py-20">
        <div className="ae-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              {project.category}
            </p>
            <h1 className="ae-balanced mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-6xl">
              {project.title}
            </h1>
            <p className="ae-pretty mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {project.outcome}
            </p>
          </div>
          <div className="ae-glass overflow-hidden rounded-lg p-3">
            <div className="ae-project-media">
              <img
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                className={
                  project.thumbnailFit === "contain"
                    ? "ae-project-image ae-project-image-contain"
                    : "ae-project-image"
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ae-section border-b border-white/10 py-14 sm:py-16">
        <div className="ae-container grid gap-5 lg:grid-cols-3">
          <div className="ae-glass rounded-lg p-6">
            <p className="text-xs font-semibold uppercase text-accent">
              Problem
            </p>
            <p className="ae-pretty mt-4 text-sm leading-7 text-muted">
              {project.problem}
            </p>
          </div>
          <div className="ae-glass rounded-lg p-6">
            <p className="text-xs font-semibold uppercase text-accent">
              Solution
            </p>
            <p className="ae-pretty mt-4 text-sm leading-7 text-muted">
              {project.solution}
            </p>
          </div>
          <div className="ae-glass rounded-lg p-6">
            <p className="text-xs font-semibold uppercase text-accent">
              Status
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {project.status}
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
          </div>
        </div>
      </section>

      <section className="ae-section py-14 sm:py-16">
        <div className="ae-container grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-accent">
              Evidence
            </p>
            <h2 className="ae-balanced mt-4 font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              What the engagement produced.
            </h2>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="ae-button-primary mt-7 inline-flex min-h-12 items-center gap-3 rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
            >
              Visit Live Project
              <Icon name="arrow" className="size-4" />
            </a>
          </div>
          <div className="grid gap-3">
            {project.evidence.map((item, index) => (
              <div key={item} className="ae-glass rounded-lg p-5">
                <span className="text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base leading-7 text-foreground/86">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
