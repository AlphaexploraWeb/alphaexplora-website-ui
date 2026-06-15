import { ProcessSection } from './ProcessSection';
import { ServicesEcosystem } from './ServicesEcosystem';
import { CTASection } from './CTASection';
import { ServicesBackground } from './ServicesBackground';
import { motion } from 'framer-motion';

export const Services = () => {
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
        <ServicesBackground />
      </motion.div>

      {/* ── THE PAGE CONTENT (Overlays the background) ── */}
      <main className="relative w-full min-h-screen pointer-events-none">
        <div className="relative z-10 pointer-events-none flex flex-col">
          <ProcessSection />
          <ServicesEcosystem />
          <CTASection />
        </div>
      </main>
    </>
  );
};
