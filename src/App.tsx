import { lazy, Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { SiteShell } from "./shared/components/SiteShell"

const About = lazy(() => import("./features/about/views/AboutPage"))
const Home = lazy(() => import("./features/home/views/Home"))
const InsightDetail = lazy(() => import("./features/insights/views/InsightDetailPage"))
const Insights = lazy(() => import("./features/insights/views/InsightsPage"))
const NotFound = lazy(() => import("./features/notFound/views/NotFoundPage"))
const ProjectDetail = lazy(() => import("./features/projects/views/ProjectDetailPage"))
const Projects = lazy(() => import("./features/projects/views/ProjectsPage"))
const ServiceDetail = lazy(() => import("./features/services/views/ServiceDetailPage"))
const Services = lazy(() => import("./features/services/views/ServicesPage"))

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-white">
      <div className="relative z-10">
        <AnimatePresence initial={false} mode="wait">
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-muted">
                Loading Alphaexplora
              </div>
            }
          >
            <Routes location={location} key={location.pathname}>
              <Route element={<SiteShell />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<InsightDetail />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
