import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { overlayVariants, navLinkVariants, EASE_OUT_EXPO } from '../utils/animations'

const NAV_LINKS = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Ecosystem', path: '/ecosystem' },
  { label: 'Connect', path: '/connect' },
]

/* ── Sub-components ────────────────────────────────────── */

function AlphaLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 flex-shrink-0 group"
      aria-label="Alphaexplora — Home"
    >
      {/* Icon mark — double-bezel squircle */}
      <div
        style={{
          padding: '2px',
          borderRadius: '10px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #0056FF 0%, #00D9D9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)',
            transition: `transform 500ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
          }}
          className="group-hover:scale-[0.93]"
        >
          <span
            style={{
              fontFamily: 'Space Grotesk, system-ui',
              fontWeight: 800,
              fontSize: '14px',
              color: '#ffffff',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            α
          </span>
        </div>
      </div>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'Space Grotesk, system-ui',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(90deg, #FFFFFF 30%, rgba(226,232,240,0.6) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        alphaexplora
      </span>
    </Link>
  )
}

function DesktopNavLink({ label, path, isActive }: { label: string; path: string; isActive: boolean }) {
  return (
    <Link
      to={path}
      style={{
        position: 'relative',
        fontFamily: 'Plus Jakarta Sans, system-ui',
        fontSize: '13.5px',
        fontWeight: 500,
        color: isActive ? '#FFFFFF' : 'rgba(226,232,240,0.58)',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        transition: `color 300ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
        paddingBottom: '2px',
      }}
      onMouseEnter={(e) => {
        if (!isActive) (e.currentTarget as HTMLElement).style.color = '#E2E8F0'
      }}
      onMouseLeave={(e) => {
        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(226,232,240,0.58)'
      }}
    >
      {label}
      {/* Gradient underline — active state */}
      <span
        style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          height: '1px',
          width: isActive ? '100%' : '0%',
          background: 'linear-gradient(90deg, #0056FF, #00D9D9)',
          borderRadius: '9999px',
          transition: `width 500ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
        }}
      />
      {/* Gradient underline — hover state */}
      <span
        className="absolute bottom-[-1px] left-0 h-px w-0 hover-underline"
        style={{
          background: 'linear-gradient(90deg, #0056FF, #00D9D9)',
          borderRadius: '9999px',
          opacity: isActive ? 0 : 1,
        }}
      />
    </Link>
  )
}

function CTAButton() {
  return (
    <Link
      to="/connect"
      className="group hidden md:flex items-center gap-1"
      style={{
        height: '34px',
        paddingLeft: '16px',
        paddingRight: '5px',
        borderRadius: '9999px',
        background: 'linear-gradient(135deg, #0056FF 0%, #00D9D9 100%)',
        fontFamily: 'Plus Jakarta Sans, system-ui',
        fontSize: '13px',
        fontWeight: 600,
        color: '#FFFFFF',
        textDecoration: 'none',
        transition: `all 500ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(0,217,217,0.45), 0 0 8px rgba(0,86,255,0.3)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(0.97)'
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
      }}
    >
      <span>Get Started</span>
      {/* Button-in-button trailing icon */}
      <span
        className="group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          marginLeft: '2px',
          transition: `transform 300ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
          flexShrink: 0,
        }}
      >
        ↗
      </span>
    </Link>
  )
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  const bar = (rotate: string, translateY: string) => ({
    display: 'block',
    width: '17px',
    height: '1.5px',
    borderRadius: '9999px',
    background: '#E2E8F0',
    transformOrigin: 'center',
    transform: isOpen ? `rotate(${rotate}) translateY(${translateY})` : 'none',
    transition: `transform 480ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
  })

  return (
    <button
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        cursor: 'pointer',
        flexShrink: 0,
        transition: `background 300ms ease`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
      }}
    >
      <span style={bar('45deg', '3.25px')} />
      <span style={bar('-45deg', '-3.25px')} />
    </button>
  )
}

/* ── Mobile overlay menu ───────────────────────────────── */
function MobileOverlay({
  isOpen,
  currentPath,
  onClose,
}: {
  isOpen: boolean
  currentPath: string
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            background: 'rgba(1,5,17,0.97)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Decorative glow behind links */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(0,86,255,0.12) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />

          {/* Nav links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              zIndex: 1,
            }}
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = currentPath === link.path
              return (
                <motion.div
                  key={link.path}
                  custom={i}
                  variants={navLinkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    style={{
                      fontFamily: 'Space Grotesk, system-ui',
                      fontSize: 'clamp(42px, 10vw, 72px)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.05,
                      color: isActive ? '#00D9D9' : '#FFFFFF',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '6px 24px',
                      transition: `color 300ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#00D9D9'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = isActive ? '#00D9D9' : '#FFFFFF'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Mobile CTA */}
          <motion.div
            custom={NAV_LINKS.length}
            variants={navLinkVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ marginTop: '48px', zIndex: 1 }}
          >
            <Link
              to="/connect"
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                height: '52px',
                paddingLeft: '28px',
                paddingRight: '8px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #0056FF 0%, #00D9D9 100%)',
                fontFamily: 'Plus Jakarta Sans, system-ui',
                fontSize: '15px',
                fontWeight: 600,
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 0 32px rgba(0,217,217,0.3)',
              }}
            >
              Get Started
              <span
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                }}
              >
                ↗
              </span>
            </Link>
          </motion.div>

          {/* Brand tagline — bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '32px',
              fontFamily: 'Plus Jakarta Sans, system-ui',
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#64748B',
            }}
          >
            IT is a Right
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Main Navbar ───────────────────────────────────────── */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Scroll detection — passive listener, boolean only
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* ── Floating pill (always visible above overlay) ── */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 60,
          width: '100%',
          maxWidth: '960px',
          padding: '0 16px',
          pointerEvents: 'none',
        }}
      >
        {/* Outer bezel — the "tray" */}
        <div
          style={{
            margin: '0 auto',
            width: 'fit-content',
            padding: '1.5px',
            borderRadius: '9999px',
            border: `1px solid ${isScrolled ? 'rgba(255,255,255,0.11)' : 'rgba(255,255,255,0.06)'}`,
            background: isScrolled ? 'rgba(255,255,255,0.035)' : 'rgba(255,255,255,0.015)',
            boxShadow: isScrolled
              ? '0 8px 40px rgba(0,86,255,0.14), 0 2px 10px rgba(0,0,0,0.55)'
              : 'none',
            transition: `all 700ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
            pointerEvents: 'auto',
          }}
        >
          {/* Inner core — glass plate */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              borderRadius: '9999px',
              padding: '7px 8px 7px 14px',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              background: isScrolled ? 'rgba(2,8,23,0.94)' : 'rgba(2,8,23,0.72)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.065)',
              transition: `background 700ms cubic-bezier(${EASE_OUT_EXPO.join(',')})`,
            }}
          >
            <AlphaLogo />

            {/* Desktop nav links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
              className="hidden md:flex"
            >
              {NAV_LINKS.map((link) => (
                <DesktopNavLink
                  key={link.path}
                  label={link.label}
                  path={link.path}
                  isActive={location.pathname === link.path}
                />
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CTAButton />
              {/* Mobile hamburger */}
              <div
                className="md:hidden"
                onClick={() => setIsOpen((v) => !v)}
              >
                <HamburgerIcon isOpen={isOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen overlay ─── */}
      <MobileOverlay
        isOpen={isOpen}
        currentPath={location.pathname}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
