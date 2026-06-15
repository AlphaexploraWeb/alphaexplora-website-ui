import { motion } from 'framer-motion';
import { OurWorkBackground } from './OurWorkBackground';
import { ProjectPanels } from './ProjectPanels';

export const OurWork = () => {
  return (
    <>
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
      <main className="relative w-full min-h-screen pointer-events-none">
        <div className="relative z-10 pointer-events-none flex flex-col">
          
          <ProjectPanels />
        </div>
      </main>
    </>
  );
};
