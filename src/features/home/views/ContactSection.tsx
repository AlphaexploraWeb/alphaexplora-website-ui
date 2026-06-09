import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { Icon } from "../../../shared/components/Icon"
import { contactDetails } from "../../../shared/models/site"
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
    <section id="contact" className="ae-section ae-contact-section border-b border-white/10 py-20 sm:py-24 lg:py-28">
      <div className="ae-container">
        <div className="ae-contact-panel ae-glass grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal variant="fade-left">
            <div className="ae-contact-intel">
              <p className="text-sm font-semibold uppercase text-accent">
                Let's Build Together
              </p>
              <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Ready to build what's next, together?
              </h2>
              <p className="ae-pretty mt-5 max-w-md text-base leading-7 text-muted">
                Tell us about the systems, software, data, AI, or digital growth
                outcomes you need. We'll help shape the next step with clarity.
              </p>
              <div className="ae-contact-details mt-8">
                {contactDetails.map((detail) => {
                  const content = (
                    <>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </>
                  )

                  return detail.href ? (
                    <a key={detail.label} href={detail.href} className="ae-contact-detail">
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label} className="ae-contact-detail">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="fade-right">
          <form
            onSubmit={handleSubmit}
            className="ae-contact-form p-5 sm:p-6"
            aria-label="Contact Alphaexplora"
          >
            <div className="ae-contact-console-header mb-5">
              <span>AE / MESSAGE CONSOLE</span>
              <strong>Encrypted intake ready</strong>
            </div>
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
                  className="ae-field min-h-12 px-4 py-3"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                />
              </motion.div>
              <motion.div className="ae-field-shell" variants={fieldVariant}>
                <input
                  className="ae-field min-h-12 px-4 py-3"
                  name="email"
                  placeholder="Work Email"
                  type="email"
                />
              </motion.div>
              <motion.div className="ae-field-shell" variants={fieldVariant}>
                <input
                  className="ae-field min-h-12 px-4 py-3"
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
                  className="ae-field min-h-32 resize-y px-4 py-3"
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
                className="ae-button-primary group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 px-6 py-3 text-sm font-semibold active:scale-[0.98] sm:w-auto"
                type="submit"
              >
                Start a Conversation
                <span className="ae-button-icon">
                  <Icon name="arrow" />
                </span>
              </button>
            </motion.div>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
