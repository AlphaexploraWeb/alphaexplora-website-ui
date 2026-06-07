import * as React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export const Parallax = ({
  children,
  offset = 50,
  className = "",
}: {
  children: React.ReactNode
  offset?: number
  className?: string
}) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Smooth the scroll
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
  })

  const y = useTransform(smoothProgress, [0, 1], [-offset, offset])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
