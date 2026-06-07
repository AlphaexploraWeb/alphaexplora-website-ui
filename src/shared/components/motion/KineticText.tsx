import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";
import { fluidTransition } from "../../utils/animations";

type KineticTextElement = "h1" | "h2" | "h3" | "p" | "span";

interface KineticTextProps {
  text: string;
  as?: KineticTextElement;
  className?: string;
  wordClassName?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "mixed";
  viewport?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.055,
    },
  }),
};

function getHiddenState(direction: NonNullable<KineticTextProps["direction"]>, index: number) {
  if (direction === "mixed") {
    const states = [
      { y: 58, rotate: 3 },
      { y: -48, rotate: -2 },
      { x: -44, rotate: -3 },
      { x: 44, rotate: 2 },
    ];

    return states[index % states.length];
  }

  if (direction === "down") {
    return { y: -54, rotate: -2 };
  }

  if (direction === "left") {
    return { x: 44, rotate: 2 };
  }

  if (direction === "right") {
    return { x: -44, rotate: -2 };
  }

  return { y: 54, rotate: 2 };
}

function wordVariants(direction: NonNullable<KineticTextProps["direction"]>): Variants {
  return {
    hidden: (index: number) => ({
      opacity: 0,
      filter: "blur(12px)",
      ...getHiddenState(direction, index),
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: fluidTransition,
    },
  };
}

export const KineticText = memo(function KineticText({
  text,
  as = "h2",
  className,
  wordClassName,
  delay = 0,
  direction = "up",
  viewport = true,
}: KineticTextProps) {
  const words = text.split(" ");
  const variants = wordVariants(direction);
  const sharedProps = {
    variants: container,
    custom: delay,
    initial: "hidden",
    className: cn("text-balance", className),
  };
  const revealProps = viewport
    ? { whileInView: "visible", viewport: { once: true, margin: "-12%" } }
    : { animate: "visible" };
  const children = words.map((word, index) => (
    <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        custom={index}
        variants={variants}
        className={cn("inline-block will-change-transform", wordClassName)}
      >
        {word}
        {index < words.length - 1 ? "\u00A0" : ""}
      </motion.span>
    </span>
  ));

  if (as === "h1") {
    return (
      <motion.h1 {...sharedProps} {...revealProps}>
        {children}
      </motion.h1>
    );
  }

  if (as === "h3") {
    return (
      <motion.h3 {...sharedProps} {...revealProps}>
        {children}
      </motion.h3>
    );
  }

  if (as === "p") {
    return (
      <motion.p {...sharedProps} {...revealProps}>
        {children}
      </motion.p>
    );
  }

  if (as === "span") {
    return (
      <motion.span {...sharedProps} {...revealProps}>
        {children}
      </motion.span>
    );
  }

  return (
    <motion.h2 {...sharedProps} {...revealProps}>
      {children}
    </motion.h2>
  );
});
