import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-white relative">
      
      
      <main className="flex-grow relative z-10">
       
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            </Routes>
          </AnimatePresence>
        
      </main>


    </div>
  )
}

export default App
