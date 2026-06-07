import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "../../../shared/components/motion/Magnetic";
import { KineticText } from "../../../shared/components/motion/KineticText";
import { revealItem } from "../../../shared/utils/animations";
import type { SiteContentModel } from "../../../shared/models/siteContent";
import heroPlatform from "../../../assets/hero.png";

interface HeroSectionProps {
  hero: SiteContentModel["hero"];
  onStartTransformation: () => void;
  onExploreServices: () => void;
}

function SystemMonolith() {
  return (
    <div className="ae-surface group relative h-[58svh] min-h-[520px] overflow-hidden bg-panel-strong">
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
        style={{
          background:
            "linear-gradient(132deg, rgba(46,233,220,0.13), transparent 42%), linear-gradient(310deg, rgba(63,115,255,0.18), transparent 62%), linear-gradient(180deg, rgba(215,168,92,0.06), transparent 48%), #02040a",
        }}
      />
      <div className="absolute inset-8 border border-line" />
      <div className="absolute left-8 right-8 top-8 flex items-center justify-between">
        <span className="ae-eyebrow">
          Alphaexplora System
        </span>
        <span className="h-px w-28 bg-cyan/45" />
      </div>
      <div className="absolute inset-x-8 top-28 flex justify-end">
        <img
          src={heroPlatform}
          alt=""
          className="w-[min(58%,360px)] opacity-90 drop-shadow-[0_42px_80px_rgb(139_92_246_/_0.22)] transition-transform duration-700 ease-fluid group-hover:-translate-y-2"
        />
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <span className="block font-display text-[8rem] font-black leading-none text-starlight/[0.045] sm:text-[11rem]">
          IT
        </span>
        <p className="ae-copy-small max-w-sm">
          Modern infrastructure, intelligent systems, and accessible technology designed as enterprise rights.
        </p>
      </div>
    </div>
  );
}

export const HeroSection = memo(function HeroSection({
  hero,
  onStartTransformation,
  onExploreServices,
}: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const visualY = useTransform(scrollYProgress, [0, 1], [80, -130]);
  const visualScale = useTransform(scrollYProgress, [0, 0.72], [0.96, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.16]);

  return (
    <section ref={ref} id="top" className="relative min-h-[138svh] overflow-hidden bg-transparent">
      <div className="sticky top-0 flex min-h-[100svh] items-center px-6 py-32 sm:px-8 lg:px-12">
        <div className="ae-container">
          <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:gap-20">
            <motion.div style={{ y: headlineY, opacity }} className="max-w-5xl">
              <motion.p
                variants={revealItem}
                initial="hidden"
                animate="visible"
                className="ae-eyebrow mb-8 w-max border-b border-cyan/35 pb-3"
              >
                {hero.eyebrow}
              </motion.p>
              <KineticText
                as="h1"
                text={hero.philosophy}
                viewport={false}
                direction="mixed"
                className="ae-heading-hero"
              />
              <motion.div
                variants={revealItem}
                initial="hidden"
                animate="visible"
                className="mt-12 max-w-3xl border-l border-line pl-6"
              >
                <p className="ae-copy-large">{hero.tagline}</p>
                <p className="ae-copy-small mt-6">{hero.about}</p>
              </motion.div>
              <motion.div
                variants={revealItem}
                initial="hidden"
                animate="visible"
                className="mt-12 flex flex-col gap-4 sm:flex-row"
              >
                <MagneticButton variant="primary" glow="blue" onClick={onStartTransformation}>
                  START YOUR TRANSFORMATION
                </MagneticButton>
                <MagneticButton variant="ghost" onClick={onExploreServices}>
                  Explore Services
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: visualY, scale: visualScale, opacity }} className="hidden lg:block">
              <SystemMonolith />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
