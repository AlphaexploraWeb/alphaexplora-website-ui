import { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const Home = lazy(() => import("./features/home/views/Home"))

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-white">
      <main className="relative z-10">
        <AnimatePresence initial={false} mode="wait">
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-muted">
                Loading Alphaexplora
              </div>
            }
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
