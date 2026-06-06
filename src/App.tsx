import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import GlobalBackground from './shared/components/GlobalBackground'
import Navbar from './shared/components/Navbar'

/* ── Lazy-loaded page views (MVVM: features/<name>/views) ── */
const Home = lazy(() => import('./features/home/views/Home'))
const Solutions = lazy(() => import('./features/solutions/views/Solutions'))
const Ecosystem = lazy(() => import('./features/ecosystem/views/Ecosystem'))
const Connect = lazy(() => import('./features/connect/views/Connect'))

/* ── Loading fallback ─────────────────────────────────────── */
function PageSkeleton() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid rgba(0,217,217,0.15)',
          borderTop: '2px solid #00D9D9',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

/* ── Animated routes — needs useLocation inside BrowserRouter ── */
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

/* ── App root ─────────────────────────────────────────────── */
export default function App() {
  return (
    <BrowserRouter>
      {/* Layer 0: animated background — fixed, pointer-events-none */}
      <GlobalBackground />

      {/* Layer 60: floating nav pill */}
      <Navbar />

      {/* Layer 10: scrollable page content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  )
}
