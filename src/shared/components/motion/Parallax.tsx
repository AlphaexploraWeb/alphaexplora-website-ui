import { memo, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

interface ParallaxBandProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  fade?: boolean;
}

export const ParallaxBand = memo(function ParallaxBand({
  children,
  className,
  distance = 80,
  fade = true,
}: ParallaxBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [distance, -distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], fade ? [0.35, 1, 1, 0.35] : [1, 1, 1, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  );
});

interface ScrollProgressLineProps {
  className?: string;
}

export const ScrollProgressLine = memo(function ScrollProgressLine({ className }: ScrollProgressLineProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className={cn(
        "fixed left-0 top-0 z-[60] h-px w-full origin-left bg-gradient-to-r from-cyan via-pulse to-copper",
        className,
      )}
    />
  );
});
