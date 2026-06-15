import { motion } from 'framer-motion';

export const AboutOutro = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-end px-4 md:px-12 lg:px-24 z-10 pointer-events-auto pb-32 overflow-hidden">
      
      {/* ── BACKGROUND FADE ── */}
      {/* Dim overlay that fades in at the very bottom to make the text pop, while keeping the 3D "A" Constellation highly visible in the center */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#010314] to-transparent pointer-events-none z-0" />

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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light uppercase tracking-[0.5em] text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] ml-[0.5em]">
            Alphaexplora
          </h2>
          
          {/* Divider Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] bg-cyan-500/50 my-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
          />
          
          {/* Tagline */}
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-cyan-400/80">
            Architected for Growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
