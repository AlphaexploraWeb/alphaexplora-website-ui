import type { FormEvent } from "react"
import { Icon } from "../../../shared/components/Icon"

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="ae-section border-b border-white/10 py-14 sm:py-16">
      <div className="ae-container grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">
            Ready to Transform?
          </p>
          <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Let's build what's next, together.
          </h2>
          <p className="ae-pretty mt-5 max-w-md text-base leading-7 text-muted">
            Connect with our experts and take the first step toward meaningful
            transformation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="ae-glass ae-contact-form rounded-lg p-5 sm:p-6"
          aria-label="Contact Alphaexplora"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="ae-field min-h-12 rounded-md px-4 py-3"
              name="name"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="ae-field min-h-12 rounded-md px-4 py-3"
              name="email"
              placeholder="Work Email"
              type="email"
            />
            <input
              className="ae-field min-h-12 rounded-md px-4 py-3"
              name="organization"
              placeholder="Company"
              type="text"
            />
            <textarea
              className="ae-field min-h-32 resize-y rounded-md px-4 py-3 sm:row-span-2"
              name="message"
              placeholder="What can we help you with?"
            />
          </div>

          <button
            className="ae-button-primary group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-semibold active:scale-[0.96] sm:w-auto"
            type="submit"
          >
            Send Message
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </section>
  )
}
