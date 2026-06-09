import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { premiumEase } from "./motionTokens"

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "line-sweep"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
  y?: number
}

interface RevealGroupProps {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  y = 24,
}: RevealProps) {
  const hidden = getHiddenState(variant, y)
  const visible = getVisibleState()

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.24, margin: "0px 0px -80px" }}
      transition={{
        duration: variant === "line-sweep" ? 0.66 : 0.55,
        delay,
        ease: premiumEase,
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  delayChildren = 0.06,
  staggerChildren = 0.08,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -90px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  variant = "fade-up",
  y = 22,
}: RevealProps) {
  const hidden = getHiddenState(variant, y)
  const visible = getVisibleState()

  return (
    <motion.div
      className={className}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: {
            duration: variant === "scale-in" ? 0.46 : 0.5,
            ease: premiumEase,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

function getHiddenState(
  variant: RevealVariant,
  y: number,
) {
  if (variant === "fade-left") {
    return { opacity: 0, x: -28, filter: "blur(7px)" }
  }

  if (variant === "fade-right") {
    return { opacity: 0, x: 28, filter: "blur(7px)" }
  }

  if (variant === "scale-in") {
    return { opacity: 0, y: 12, scale: 0.965, filter: "blur(6px)" }
  }

  if (variant === "line-sweep") {
    return { opacity: 0, y: 10, clipPath: "inset(0 18% 0 0)", filter: "blur(4px)" }
  }

  return { opacity: 0, y, filter: "blur(8px)" }
}

function getVisibleState() {
  return {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    clipPath: "inset(0 0% 0 0)",
    filter: "blur(0px)",
  }
}
