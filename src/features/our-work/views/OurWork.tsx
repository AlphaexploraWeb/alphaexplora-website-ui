import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { OurWorkBackground } from './OurWorkBackground';
import { ProjectPanels } from './ProjectPanels';
import { ProjectPanelsMobile } from './ProjectPanelsMobile';

export const OurWork = () => {
  // Ensure the page always starts exactly at the top when navigating to this tab
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ── HIDE NATIVE SCROLLBAR ── */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        html, body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* ── CINEMATIC PITCH-BLACK REVEAL (Matches Home.tsx) ── */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#010314] pointer-events-none"
      />

      {/* ── THE 3D GALAXY BACKGROUND ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <OurWorkBackground />
      </motion.div>

      {/* ── THE PAGE CONTENT (Overlays the background) ── */}
      <main className="relative w-full min-h-screen pointer-events-auto">
        <div className="relative z-10 flex flex-col pointer-events-auto">
          {/* Desktop View */}
          <div className="hidden lg:block">
            <ProjectPanels />
          </div>
          
          {/* Mobile & Tablet View */}
          <div className="block lg:hidden">
            <ProjectPanelsMobile />
          </div>
        </div>
      </main>
    </>
  );
};