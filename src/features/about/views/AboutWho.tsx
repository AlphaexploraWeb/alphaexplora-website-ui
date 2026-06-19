import { motion } from 'framer-motion';
import { Terminal, Target } from 'lucide-react';

export const AboutWho = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 z-10 pointer-events-auto py-24 overflow-hidden">

      {/* ── BACKGROUND EFFECTS & TRANSITIONS ── */}
      
      {/* Base overlay with perfectly smooth top and bottom fading using mask-image */}
      <div 
        className="absolute inset-0 bg-[#010314]/60 backdrop-blur-[4px] z-0 pointer-events-none" 
        style={{ 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' 
        }} 
      />

      {/* Glowing Cyber Orbs sa gilid */}
      <div className="absolute top-1/4 -left-[20%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

      {/* ── SIDE HUD ELEMENTS (Hidden on Mobile) ── */}
      
      {/* LEFT SIDE HUD */}
      <div className="hidden lg:flex absolute left-8 top-0 bottom-0 flex-col items-center justify-between py-32 z-0 opacity-40 pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-cyan-500/50" />
        
        <div className="flex flex-col items-center gap-8">
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
          <p className="font-mono text-[10px] text-cyan-500 tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            sys.init // boot_sequence // 100%
          </p>
          <div className="w-2 h-[1px] bg-cyan-500/50" />
          <p className="font-mono text-[10px] text-blue-500/50 tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            ENCRYPTING_DATA...
          </p>
        </div>

        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent to-cyan-500/50" />
      </div>

      {/* RIGHT SIDE HUD */}
      <div className="hidden lg:flex absolute right-8 top-0 bottom-0 flex-col items-center justify-between py-32 z-0 opacity-40 pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-blue-500/50" />
        
        <div className="flex flex-col items-center gap-8">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
            <Target size={16} className="text-blue-400" />
          </motion.div>
          <div className="w-2 h-[1px] bg-blue-500/50" />
          <p className="font-mono text-[10px] text-blue-400 tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            LAT: 45.092 | AUTH_KEY: VALIDATED
          </p>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
        </div>

        <div className="w-[1px] h-32 bg-gradient-to-t from-transparent to-blue-500/50" />
      </div>

      {/* ── CONTENT CONTAINER ── */}
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center text-center gap-8">


        {/* Headlines */}
        <div className="flex flex-col items-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl font-light uppercase tracking-[0.3em] text-cyan-400/80 mb-4"
          >
            Technology should empower, not exclude.
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter text-white drop-shadow-2xl mb-12 leading-[0.9]"
          >
            Because IT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative">
              Is A Right.
              <span className="absolute inset-0 text-cyan-500/30 blur-2xl z-[-1]">Is A Right.</span>
            </span>
          </motion.h2>
        </div>

        {/* Manifesto Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center space-y-6 max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
            Alphaexplora doesn’t just build tech,<strong className="font-medium text-cyan-300"> they build with purpose.</strong>
          </p>
          <p className="text-base md:text-lg text-blue-100/70 font-light leading-relaxed">
            The firm operates on the unwavering conviction that every organization, no matter its scale, deserves the absolute power of <strong className="text-cyan-300 font-medium">modern, secure, and scalable technology.</strong>
          </p>

          {/* Highlighted Quote Box */}
          <div className="mt-8 p-6 md:p-8 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm relative overflow-hidden w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <p className="text-base md:text-lg text-cyan-100/90 font-medium leading-relaxed italic">
              "This core principle guides every system architected, every client relationship nurtured, and every high-performance solution deployed."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};