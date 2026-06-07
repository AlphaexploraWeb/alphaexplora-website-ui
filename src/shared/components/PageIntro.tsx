import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../utils/cn";
import { revealItem } from "../utils/animations";
import { KineticText } from "./motion/KineticText";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export const PageIntro = memo(function PageIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: PageIntroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.74], [1, 0.24]);

  return (
    <header
      ref={ref}
      className={cn(
        "ae-container px-6 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pt-52",
        align === "center" && "text-center",
        className,
      )}
    >
      <motion.div style={{ y, opacity }} className="relative">
        <motion.p
          variants={revealItem}
          initial="hidden"
          animate="visible"
          className="ae-eyebrow mb-8"
        >
          {eyebrow}
        </motion.p>
        <KineticText
          as="h1"
          text={title}
          viewport={false}
          direction="mixed"
          className={cn(
            "ae-heading-section max-w-5xl lg:text-7xl",
            align === "center" && "mx-auto",
          )}
        />
        <motion.p
          variants={revealItem}
          initial="hidden"
          animate="visible"
          className={cn(
            "ae-copy-large mt-10 max-w-3xl",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      </motion.div>
    </header>
  );
});
