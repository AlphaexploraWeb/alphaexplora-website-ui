import { memo } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../../../shared/components/PageWrapper'
import { fadeUpVariants, staggerContainer, EASE_OUT_EXPO } from '../../../shared/utils/animations'

export default memo(function Connect() {
  return (
    <PageWrapper>
      <section
        style={{
          minHeight: '100dvh',
          padding: 'clamp(120px, 15vw, 160px) clamp(24px, 5vw, 80px) 80px',
          maxWidth: '720px',
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
              Lead Generation Matrix
            </span>
            <h1
              style={{
                fontFamily: 'Syne, system-ui',
                fontWeight: 800,
                fontSize: 'clamp(40px, 7vw, 68px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                background: 'linear-gradient(180deg, #FFFFFF 20%, #64748B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
              }}
            >
              Let's Build Something Exceptional
            </h1>
          </motion.div>

          {/* Contact form — double-bezel */}
          <motion.div
            variants={fadeUpVariants}
            style={{
              padding: '2px',
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <div
              style={{
                borderRadius: '26px',
                background: 'rgba(5,11,26,0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                padding: 'clamp(28px, 5vw, 48px)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.065)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {(['Full Name', 'Email Address', 'Organization'] as const).map((label) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    style={{
                      fontFamily: 'Plus Jakarta Sans, system-ui',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#64748B',
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={label === 'Email Address' ? 'email' : 'text'}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    style={{
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(1,5,17,0.6)',
                      fontFamily: 'Plus Jakarta Sans, system-ui',
                      fontSize: '14px',
                      color: '#E2E8F0',
                      outline: 'none',
                      transition: `border-color 300ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,217,217,0.45)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  />
                </div>
              ))}

              <button
                type="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  height: '52px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #0056FF 0%, #00D9D9 100%)',
                  fontFamily: 'Plus Jakarta Sans, system-ui',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  marginTop: '8px',
                  transition: `all 500ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(0,217,217,0.45)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                }}
                onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.97)' }}
                onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
              >
                Send Message
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                  }}
                >
                  ↗
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </PageWrapper>
  )
})
