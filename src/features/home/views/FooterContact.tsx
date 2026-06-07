import { memo, useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "../../../shared/components/motion/Magnetic";
import { KineticText } from "../../../shared/components/motion/KineticText";
import { cn } from "../../../shared/utils/cn";
import { revealContainer, revealItem } from "../../../shared/utils/animations";
import type { ContactField, SiteContentModel } from "../../../shared/models/siteContent";

interface FooterContactProps {
  contact: SiteContentModel["contact"];
}

function ContactFieldControl({ field }: { field: ContactField }) {
  const baseClass = "ae-field";

  return (
    <label className={field.type === "textarea" ? "md:col-span-2" : undefined}>
      <span className="mb-2 block font-body text-xs font-bold uppercase text-mist">
        {field.label}
      </span>
      {field.type === "textarea" ? (
        <textarea
          name={field.id}
          required={field.required}
          rows={5}
          placeholder={field.label}
          className={cn(baseClass, "min-h-36 resize-y py-4 leading-7")}
        />
      ) : (
        <input
          name={field.id}
          required={field.required}
          type={field.type}
          placeholder={field.label}
          className={baseClass}
        />
      )}
    </label>
  );
}

export const FooterContact = memo(function FooterContact({ contact }: FooterContactProps) {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markerX = useTransform(scrollYProgress, [0, 1], ["-4%", "14%"]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer ref={ref} id="contact" className="ae-section">
      <motion.div
        aria-hidden="true"
        style={{ x: markerX }}
        className="ae-marker bottom-20 left-0 text-[11rem]"
      >
        START
      </motion.div>

      <div className="ae-container">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid gap-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)]"
        >
          <div>
            <motion.p variants={revealItem} className="ae-eyebrow mb-7">
              {contact.eyebrow}
            </motion.p>
            <KineticText
              text={contact.headline}
              direction="mixed"
              className="ae-heading-section"
            />
            <motion.p variants={revealItem} className="ae-copy mt-8 max-w-2xl">
              {contact.subHeadline}
            </motion.p>

            <motion.div variants={revealItem} className="mt-14 grid gap-5">
              <a
                href={`mailto:${contact.email}`}
                className="ae-focus ae-underlink"
              >
                {contact.email}
              </a>
              <p className="ae-copy">
                {contact.phones.join(" / ")}
              </p>
              <p className="ae-copy max-w-lg">
                HQ: {contact.hq}
              </p>
            </motion.div>
          </div>

          <motion.form variants={revealItem} onSubmit={handleSubmit} className="lg:pt-24">
            <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
              {contact.fields.map((field) => (
                <ContactFieldControl key={field.id} field={field} />
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <MagneticButton type="submit" variant="primary" glow="blue">
                {contact.cta}
              </MagneticButton>
              {submitted ? (
                <p className="font-body text-sm font-bold text-cyan" role="status">
                  Request captured. Our team will review your inquiry details.
                </p>
              ) : (
                <p className="ae-copy-small">
                  All fields are required.
                </p>
              )}
            </div>
          </motion.form>
        </motion.div>

        <div className="relative mt-24 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-black text-starlight">Alphaexplora</p>
          <p className="font-body text-sm text-mist">&copy; {contact.copyright}</p>
        </div>
      </div>
    </footer>
  );
});
