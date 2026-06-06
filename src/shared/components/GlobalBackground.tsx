import { motion } from 'framer-motion'

export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: '#010511',
      }}
    >
      {/* Primary glow orb — upper-left, Electric Pulse Blue */}
      <motion.div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,86,255,0.28) 0%, transparent 65%)',
          top: '-320px',
          left: '-280px',
        }}
        animate={{
          scale: [1, 1.12, 0.96, 1],
          opacity: [0.7, 1, 0.75, 0.7],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary glow orb — right-center, Cyber Cyan */}
      <motion.div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,217,217,0.18) 0%, transparent 65%)',
          top: '25%',
          right: '-220px',
        }}
        animate={{
          scale: [1, 1.18, 0.94, 1],
          opacity: [0.6, 0.9, 0.65, 0.6],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Tertiary deep pool — bottom-center, Deep Velocity Blue */}
      <motion.div
        style={{
          position: 'absolute',
          width: '1000px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(11,37,89,0.55) 0%, transparent 70%)',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Micro specular highlight — center top */}
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0,217,217,0.15), transparent)',
          top: '38%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '9999px',
        }}
        animate={{
          opacity: [0, 0.7, 0],
          scaleX: [0.4, 1.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Film-grain noise overlay — fixed, pointer-events-none */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  )
}
