import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import { Reveal } from "./ScrollReveal"
import { premiumEase } from "./motionTokens"

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const fieldVariant = {
    hidden: { opacity: 0, y: 16, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.42, ease: premiumEase },
    },
  }

  return (
    <section id="contact" className="ae-section border-b border-white/10 py-14 sm:py-16">
      <div className="ae-container grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <Reveal variant="fade-left">
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
        </Reveal>

        <Reveal delay={0.08} variant="fade-right">
          <form
            onSubmit={handleSubmit}
            className="ae-glass ae-contact-form rounded-lg p-5 sm:p-6"
            aria-label="Contact Alphaexplora"
          >
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.12,
                  },
                },
              }}
            >
              <motion.div className="ae-field-shell" variants={fieldVariant}>
                <input
                  className="ae-field min-h-12 rounded-md px-4 py-3"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                />
              </motion.div>
              <motion.div className="ae-field-shell" variants={fieldVariant}>
                <input
                  className="ae-field min-h-12 rounded-md px-4 py-3"
                  name="email"
                  placeholder="Work Email"
                  type="email"
                />
              </motion.div>
              <motion.div className="ae-field-shell" variants={fieldVariant}>
                <input
                  className="ae-field min-h-12 rounded-md px-4 py-3"
                  name="organization"
                  placeholder="Company"
                  type="text"
                />
              </motion.div>
              <motion.div
                className="ae-field-shell sm:row-span-2"
                variants={fieldVariant}
              >
                <textarea
                  className="ae-field min-h-32 resize-y rounded-md px-4 py-3"
                  name="message"
                  placeholder="What can we help you with?"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.42, delay: 0.34, ease: premiumEase }}
            >
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
            </motion.div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
