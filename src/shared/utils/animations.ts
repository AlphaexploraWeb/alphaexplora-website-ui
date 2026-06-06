import type { Variants, Transition } from 'framer-motion'

/* ── Easing presets ────────────────────────────────────── */
export const EASE_OUT_EXPO = [0.32, 0.72, 0, 1] as const
export const EASE_IN_OUT_CIRC = [0.85, 0, 0.15, 1] as const

/* ── Shared transitions ────────────────────────────────── */
export const smoothTransition: Transition = {
  duration: 0.65,
  ease: EASE_OUT_EXPO,
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 28,
  mass: 0.8,
}

/* ── Page-level enter / exit ───────────────────────────── */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 28,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.72,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: 'blur(6px)',
    transition: {
      duration: 0.38,
      ease: EASE_OUT_EXPO,
    },
  },
}

/* ── Staggered children container ─────────────────────── */
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

/* ── Individual fade-up child ──────────────────────────── */
export const fadeUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 36,
    filter: 'blur(8px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
}

/* ── Overlay (nav menu, modal) ─────────────────────────── */
export const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.42, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.32, ease: EASE_OUT_EXPO },
  },
}

/* ── Staggered nav link reveal ─────────────────────────── */
export const navLinkVariants: Variants = {
  initial: {
    y: 52,
    opacity: 0,
    filter: 'blur(8px)',
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.07,
      duration: 0.62,
      ease: EASE_OUT_EXPO,
    },
  }),
  exit: {
    y: 24,
    opacity: 0,
    transition: {
      duration: 0.28,
      ease: EASE_OUT_EXPO,
    },
  },
}
