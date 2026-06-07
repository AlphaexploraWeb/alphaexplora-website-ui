import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalBackground from "./shared/components/GlobalBackground";
import Navbar from "./shared/components/Navbar";
import { SmoothScrollProvider } from "./shared/components/SmoothScrollProvider";
import { ScrollProgressLine } from "./shared/components/motion/Parallax";

const Home = lazy(() => import("./features/home/views/Home"));
const Clients = lazy(() => import("./features/clients/views/Clients"));
const Services = lazy(() => import("./features/services/views/Services"));
const Insights = lazy(() => import("./features/insights/views/Insights"));
const Contact = lazy(() => import("./features/contact/views/Contact"));

function PageSkeleton() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-void">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan/15 border-t-cyan" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <GlobalBackground />
        <ScrollProgressLine />
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
