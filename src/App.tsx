import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Shared Components
// Make sure to create a placeholder for this in src/shared/components/navbar/Navbar.tsx
import { Navbar } from './shared/components/navbar/Navbar'

// Lazy loaded feature pages
const Home = lazy(() => import('./features/home/views/Home'))

/* ── Loading fallback ─────────────────────────────────────── */
function PageSkeleton() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#010511]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#00D9D9]/15 border-t-[#00D9D9]" />
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
          {/* Future Routes */}
          {/* <Route path="/solutions" element={<Solutions />} /> */}
          {/* <Route path="/ecosystem" element={<Ecosystem />} /> */}
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

/* ── App root ─────────────────────────────────────────────── */
export default function App() {
  return (
    <BrowserRouter>
      {/* Layer 0: Global Base - Prevents white flashes during page routing */}
      <div className="fixed inset-0 z-0 bg-[#010511] pointer-events-none" />

      {/* Layer 60: Shared Floating Nav Pill */}
      <div className="relative z-[60]">
        <Navbar />
      </div>

      {/* Layer 10: Scrollable page content */}
      <main className="relative z-10">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  )
}