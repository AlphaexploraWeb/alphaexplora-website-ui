import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="relative w-full bg-transparent py-32 px-4 flex justify-center items-center z-20 overflow-hidden">
      
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-[100%] blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl w-full bg-[#060b1f]/80 backdrop-blur-3xl border border-cyan-500/20 rounded-[2rem] p-10 md:p-20 text-center shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
      >
        {/* Animated Scanline / Grid */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <motion.div 
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none"
        />

        {/* Decorative Top Left */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 opacity-50">
          <Terminal size={14} className="text-cyan-400" />
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">SYS.REQ.01</span>
        </div>

        {/* Decorative Top Right */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 flex gap-2 opacity-50">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-tight"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Optimize</span> <br className="hidden md:block" />
            Your Ecosystem?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-cyan-100/50 text-xs md:text-sm max-w-2xl mx-auto mb-12 font-mono tracking-widest"
          >
            {'>'} INITIALIZE SYSTEM PROTOCOLS TO BEGIN ENTERPRISE TRANSFORMATION.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal'))}
              className="group relative inline-flex items-center gap-4 bg-[#0a1128] border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-mono font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-md overflow-hidden transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            >
              {/* Button Glare */}
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:animate-[glare_1.5s_ease-in-out_infinite]" />
              
              <span className="relative z-10 group-hover:text-white transition-colors">Get a Quote</span>
              <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:text-cyan-200 transition-all" />
            </button>
          </motion.div>
        </div>
      </motion.div>
      
      <style>{`
        @keyframes glare {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};