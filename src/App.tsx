import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { SmoothScroll } from "./components/layout/SmoothScroll"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { Insights } from "./pages/Insights"
import { Contact } from "./pages/Contact"

function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-white relative">
      <Header />
      
      <main className="flex-grow relative z-10">
        <SmoothScroll>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </SmoothScroll>
      </main>

      <Footer />
    </div>
  )
}

export default App
