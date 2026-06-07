import { memo, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { KineticText } from "../../../shared/components/motion/KineticText";
import { cn } from "../../../shared/utils/cn";
import { revealContainer, revealItem } from "../../../shared/utils/animations";
import type { ServiceOffering, SiteContentModel } from "../../../shared/models/siteContent";

interface ServicesMatrixProps {
  services: SiteContentModel["services"];
}

function ServiceRow({
  service,
  index,
  active,
  onSelect,
}: {
  service: ServiceOffering;
  index: number;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.button
      type="button"
      variants={revealItem}
      onClick={() => onSelect(service.id)}
      onFocus={() => onSelect(service.id)}
      onViewportEnter={() => onSelect(service.id)}
      viewport={{ amount: 0.58, margin: "-18% 0px -24% 0px" }}
      className={cn(
        "ae-focus group w-full border-t border-line py-12 text-left last:border-b",
        index % 2 === 1 && "lg:pl-[16%]",
      )}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className={cn("h-2 w-2 rounded-full", active ? "bg-cyan" : "bg-white/20")} />
            <span className="ae-eyebrow">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="ae-heading-section transition-transform duration-500 ease-fluid group-hover:translate-x-3">
            {service.title}
          </h3>
          <p className="ae-copy mt-6 max-w-2xl">{service.short}</p>
        </div>
        <div className="flex max-w-lg flex-wrap gap-2 lg:justify-end">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="ae-chip"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function StickyServiceDetail({ service }: { service: ServiceOffering }) {
  return (
    <motion.aside
      key={service.id}
      initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="sticky top-32 hidden border-l border-cyan/30 pl-8 lg:block"
    >
      <p className="ae-eyebrow">
        Active capability
      </p>
      <h3 className="ae-heading-card mt-8">
        {service.title}
      </h3>
      <p className="ae-copy mt-7">{service.details}</p>
    </motion.aside>
  );
}

export const ServicesMatrix = memo(function ServicesMatrix({ services }: ServicesMatrixProps) {
  const ref = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(services.offerings[0]?.id ?? "");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const markerY = useTransform(scrollYProgress, [0, 1], [140, -180]);
  const activeService = useMemo(
    () => services.offerings.find((service) => service.id === activeId) ?? services.offerings[0],
    [activeId, services.offerings],
  );

  if (!activeService) {
    return null;
  }

  return (
    <section ref={ref} id="services" className="ae-section">
      <motion.div
        aria-hidden="true"
        style={{ y: markerY }}
        className="ae-marker right-[-6rem] top-32 text-[11rem]"
      >
        SERVICES
      </motion.div>
      <div className="ae-container">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          className="max-w-5xl"
        >
          <motion.p variants={revealItem} className="ae-eyebrow mb-7">
            {services.eyebrow}
          </motion.p>
          <KineticText
            text={services.headline}
            direction="mixed"
            className="ae-heading-section"
          />
          <motion.p variants={revealItem} className="ae-copy mt-8 max-w-2xl">
            {services.subHeadline}
          </motion.p>
        </motion.div>

        <div className="mt-24 grid gap-16 lg:grid-cols-[minmax(0,1.16fr)_minmax(360px,0.84fr)]">
          <motion.div
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-8%" }}
          >
            {services.offerings.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                active={service.id === activeService.id}
                onSelect={setActiveId}
              />
            ))}
          </motion.div>
          <StickyServiceDetail service={activeService} />
        </div>
      </div>
    </section>
  );
});
