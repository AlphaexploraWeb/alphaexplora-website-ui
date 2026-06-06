import { motion } from 'framer-motion'
import { pageVariants } from '../utils/animations'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: 'relative', zIndex: 10 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
