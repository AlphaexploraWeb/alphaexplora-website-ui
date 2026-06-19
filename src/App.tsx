import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { SmoothScroller } from './shared/components/SmoothScroller';
import { Navbar } from './shared/components/Navbar';
import { Footer } from './shared/components/Footer';
import Home from './features/home/views/Home';
import AboutUs from './features/about/views/aboutus';
import { Services } from './features/services/views/Services';
import { OurWork } from './features/our-work/views/OurWork';
import { LoadingProvider, useLoading } from './shared/context/LoadingContext';
import { usePreloader } from './shared/hooks/usePreloader';
import { LoadingScreen } from './shared/components/LoadingScreen';

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

function AppContent() {
  usePreloader(); // Kicks off asset fetching and tracks Three.js progress
  const { isAppReady } = useLoading();

  return (
    <>
      <LoadingScreen />
      
      {/* App is mounted to trigger 3D rendering, but hidden visually until fully loaded */}
      <div className={`transition-opacity duration-1000 ${isAppReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <SmoothScroller>
          <Router>
            <ScrollToTop />
            <div className="bg-[#02040a] min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/our-work" element={<OurWork />} />
                  <Route path="/about" element={<AboutUs />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SmoothScroller>
      </div>
    </>
  );
}

import { Maintenance } from './features/maintenance/Maintenance';

function App() {
  return (
    <Maintenance />
  );
}

export default App;