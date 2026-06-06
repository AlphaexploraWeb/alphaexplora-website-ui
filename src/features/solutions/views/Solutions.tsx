import { memo } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../../../shared/components/PageWrapper'
import { fadeUpVariants, staggerContainer } from '../../../shared/utils/animations'

const SOLUTIONS = [
  {
    eyebrow: 'Infrastructure',
    title: 'Architectural Foundations',
    body: 'Enterprise-grade cloud architecture designed for scale, resilience, and zero-compromise performance.',
    tag: '01',
  },
  {
    eyebrow: 'Strategy',
    title: 'Digital Transformation',
    body: 'End-to-end roadmapping that bridges vision with execution — from audit to full-stack delivery.',
    tag: '02',
  },
  {
    eyebrow: 'Intelligence',
    title: 'AI-Powered Systems',
    body: 'Custom machine learning pipelines and intelligent automation embedded directly into your workflows.',
    tag: '03',
  },
]

export default memo(function Solutions() {
  return (
    <PageWrapper>
      <section
        style={{
          minHeight: '100dvh',
          padding: 'clamp(120px, 15vw, 160px) clamp(24px, 5vw, 80px) 80px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Page header */}
          <motion.div variants={fadeUpVariants} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'Plus Jakarta Sans, system-ui',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#00D9D9',
              }}
            >
              Architectural Offerings
            </span>
            <h1
              style={{
                fontFamily: 'Syne, system-ui',
                fontWeight: 800,
                fontSize: 'clamp(40px, 7vw, 72px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                background: 'linear-gradient(180deg, #FFFFFF 20%, #64748B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                maxWidth: '640px',
              }}
            >
              Solutions Built for the Complex
            </h1>
          </motion.div>

          {/* Solution cards — double-bezel architecture */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.tag}
                variants={fadeUpVariants}
                custom={i}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  padding: '2px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.025)',
                }}
              >
                <div
                  style={{
                    borderRadius: '22px',
                    background: 'rgba(5,11,26,0.7)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    padding: 'clamp(24px, 4vw, 40px)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '32px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Syne, system-ui',
                      fontSize: '48px',
                      fontWeight: 700,
                      color: 'rgba(0,217,217,0.12)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      flexShrink: 0,
                      userSelect: 'none',
                    }}
                  >
                    {s.tag}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span
                      style={{
                        fontFamily: 'Plus Jakarta Sans, system-ui',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#0056FF',
                      }}
                    >
                      {s.eyebrow}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'Syne, system-ui',
                        fontWeight: 700,
                        fontSize: 'clamp(20px, 3vw, 26px)',
                        letterSpacing: '-0.02em',
                        color: '#FFFFFF',
                        margin: 0,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Plus Jakarta Sans, system-ui',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#64748B',
                        margin: 0,
                        maxWidth: '520px',
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  )
})
