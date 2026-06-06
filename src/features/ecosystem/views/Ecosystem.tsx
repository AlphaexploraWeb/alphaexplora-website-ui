import { memo } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../../../shared/components/PageWrapper'
import { fadeUpVariants, staggerContainer } from '../../../shared/utils/animations'

export default memo(function Ecosystem() {
  return (
    <PageWrapper>
      <section
        style={{
          minHeight: '100dvh',
          padding: 'clamp(120px, 15vw, 160px) clamp(24px, 5vw, 80px) 80px',
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}
        >
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
              Our Philosophy
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
                maxWidth: '700px',
                margin: 0,
              }}
            >
              Technology is not a privilege.
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            style={{
              fontFamily: 'Plus Jakarta Sans, system-ui',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              lineHeight: 1.8,
              color: '#64748B',
              maxWidth: '640px',
              margin: 0,
            }}
          >
            We exist at the intersection of radical accessibility and uncompromising quality.
            The Alphaexplora ecosystem is our answer to a world where cutting-edge technology
            remains gated behind cost, complexity, and geography.
          </motion.p>

          {/* Philosophy pillars */}
          <motion.div
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}
          >
            {[
              { title: 'Access', body: 'Every product we build ships with zero-friction onboarding and pricing that scales with the user.' },
              { title: 'Integrity', body: 'Open standards, auditable systems, and a relentless commitment to data sovereignty.' },
              { title: 'Craft', body: 'Beauty and function are not at odds. We refuse to ship anything that does not feel exceptional.' },
            ].map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={fadeUpVariants}
                style={{
                  padding: '2px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <div
                  style={{
                    borderRadius: '18px',
                    background: 'rgba(5,11,26,0.6)',
                    padding: '28px',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Syne, system-ui',
                      fontWeight: 700,
                      fontSize: '20px',
                      letterSpacing: '-0.01em',
                      color: '#FFFFFF',
                    }}
                  >
                    {pillar.title}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Plus Jakarta Sans, system-ui',
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: '#64748B',
                      margin: 0,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </PageWrapper>
  )
})
