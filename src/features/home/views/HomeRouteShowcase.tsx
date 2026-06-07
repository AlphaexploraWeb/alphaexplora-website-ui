import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticLink } from "../../../shared/components/motion/Magnetic";
import { KineticText } from "../../../shared/components/motion/KineticText";
import { cn } from "../../../shared/utils/cn";
import { revealContainer, revealItem } from "../../../shared/utils/animations";

const routeRows = [
  {
    label: "Clients",
    title: "Proof of trust",
    description: "A curated partner reel for organizations already moving with Alphaexplora.",
    to: "/clients",
  },
  {
    label: "Services",
    title: "Capability architecture",
    description: "Consulting, software, analytics, managed services, AI, and growth systems.",
    to: "/services",
  },
  {
    label: "Insights",
    title: "Strategic signals",
    description: "Market perspective for MSMEs and enterprise leaders building ahead.",
    to: "/insights",
  },
  {
    label: "Contact",
    title: "Transformation intake",
    description: "A direct path to begin the enterprise conversation.",
    to: "/contact",
  },
] as const;

export const HomeRouteShowcase = memo(function HomeRouteShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markerX = useTransform(scrollYProgress, [0, 1], ["-6%", "18%"]);

  return (
    <section ref={ref} className="ae-section">
      <motion.div
        aria-hidden="true"
        style={{ x: markerX }}
        className="ae-marker left-0 top-24 text-[11rem]"
      >
        INDEX
      </motion.div>

      <div className="ae-container">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          className="max-w-4xl"
        >
          <motion.p variants={revealItem} className="ae-eyebrow mb-7">
            Executive Pathways
          </motion.p>
          <KineticText
            text="Move through the work with intent."
            direction="mixed"
            className="ae-heading-section"
          />
        </motion.div>

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-24"
        >
          {routeRows.map((row, index) => (
            <motion.div
              key={row.to}
              variants={revealItem}
              className={cn(
                "group border-t border-line py-10 last:border-b",
                index % 2 === 1 && "lg:pl-[18%]",
              )}
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="ae-eyebrow mb-5">
                    {row.label}
                  </p>
                  <h3 className="ae-heading-section transition-transform duration-500 ease-fluid group-hover:translate-x-3 sm:text-7xl">
                    {row.title}
                  </h3>
                  <p className="ae-copy mt-6 max-w-xl">
                    {row.description}
                  </p>
                </div>
                <MagneticLink to={row.to} className="w-max min-h-11 px-4">
                  Enter
                </MagneticLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
