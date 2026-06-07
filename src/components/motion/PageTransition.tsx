import { motion } from "framer-motion"

export const PageTransition = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)", y: 30, scale: 0.98 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(12px)", y: -30, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
