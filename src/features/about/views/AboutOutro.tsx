import { motion } from 'framer-motion';
import alphaLogo from '../../../assets/alpha-logo-full.png';

export const AboutOutro = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-end px-4 md:px-12 lg:px-24 z-10 pointer-events-auto pb-8 md:pb-16 overflow-hidden">
      
      {/* ── BACKGROUND FADE ── */}
      {/* Dim overlay that fades in at the very bottom to make the text pop, while keeping the 3D "A" Constellation highly visible in the center */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[50vh] bg-gradient-to-t from-[#010314]/80 md:from-[#010314] to-transparent pointer-events-none z-0" />

      {/* ── MAIN CONTENT (The Final Stamp) ── */}
      {/* Naka-position sa bottom para hindi matakpan yung malaking 3D "A" logo na nabuo sa background */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Brand Name */}
          <h2 className="flex flex-row items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.4em] text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <img 
              src={alphaLogo} 
              alt="A" 
              className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 w-auto object-contain inline-block mr-3 sm:mr-4 md:mr-6 lg:mr-8 opacity-90 transition-all shrink-0" 
            />
          </h2>
          
          {/* Tagline */}
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-cyan-400/80">
            Building with purpose.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
