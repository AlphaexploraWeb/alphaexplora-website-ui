import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const processSteps = [
  { 
    id: "01", 
    title: "Discovery & Architecture", 
    desc: "We analyze your business needs and map out a scalable digital blueprint.", 
    icon: <Search className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-500 relative z-20" />,
    hoverShadow: "group-hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]",
    numberColor: "group-hover:text-sky-400/10",
    themeColor: "rgba(56,189,248,0.2)"
  },
  { 
    id: "02", 
    title: "UI/UX Prototyping", 
    desc: "Crafting high-fidelity, cinematic interfaces focused on user experience.", 
    icon: <PenTool className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-500 relative z-20" />,
    hoverShadow: "group-hover:shadow-[0_0_40px_rgba(244,114,182,0.15)]",
    numberColor: "group-hover:text-pink-400/10",
    themeColor: "rgba(244,114,182,0.2)"
  },
  { 
    id: "03", 
    title: "Development & Integration", 
    desc: "Building robust frontend and backend systems using cutting-edge stacks.", 
    icon: <Code2 className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500 relative z-20" />,
    hoverShadow: "group-hover:shadow-[0_0_40px_rgba(129,140,248,0.15)]",
    numberColor: "group-hover:text-indigo-400/10",
    themeColor: "rgba(129,140,248,0.2)"
  },
  { 
    id: "04", 
    title: "Deployment & Scaling", 
    desc: "Seamless launch, server optimization, and continuous system maintenance.", 
    icon: <Rocket className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-500 relative z-20" />,
    hoverShadow: "group-hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]",
    numberColor: "group-hover:text-orange-400/10",
    themeColor: "rgba(251,146,60,0.2)"
  }
];

export const ProcessSection = () => {
  // State for tracking the currently hovered card for the morphing effect
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
<section className="relative w-full py-32 px-4 z-20 overflow-hidden bg-transparent" style={{ perspective: '1000px' }}>      
      {/* ── BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-sky-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-10 relative">
          
          {/* Subtle Background Glow for the Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-sky-500/10 blur-[80px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-sky-400/20 bg-sky-500/[0.03] shadow-[0_0_20px_rgba(56,189,248,0.05)]"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </div>
            <span className="font-mono text-xs tracking-[0.3em] text-sky-200/80 uppercase font-medium">Execution Pipeline</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col text-6xl md:text-7xl lg:text-[100px] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.85]"
          >
            <motion.h2><span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-50 to-cyan-200 drop-shadow-[0_0_15px_rgba(103,232,249,0.3)]">Our</span> <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">Process</span></motion.h2>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-blue-100/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
          >
            From conceptualization to continuous deployment, discover the systematic methodology we use to engineer scalable, high-performance digital solutions.
          </motion.p>
        </div>

        {/* ── PIPELINE GRID ── */}
        <div className="relative pointer-events-auto">
          
          {/* THE ANIMATED CONNECTING LINE (Data Stream) */}
          {/* Aligned exactly to the center of the icons (Padding 32px + half of 56px icon = 60px from top) */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[60px] left-[12%] right-[12%] h-[3px] hidden lg:block pointer-events-none z-0 origin-left"
          >
            {/* The Dim Track */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />
            
            {/* The Glowing Data Stream Pulse */}
            <motion.div 
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-sky-400 to-transparent rounded-full"
              style={{ boxShadow: '0 0 20px 2px rgba(56,189,248,0.6), 0 0 40px 4px rgba(99,102,241,0.4)' }}
              animate={{ x: ['-200%', '400%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            />
            
            {/* Connection Dots mapping to each card's approximate center */}
            <div className="absolute inset-0 flex justify-between items-center px-[5%]">
              <div className="w-3 h-3 rounded-full bg-[#0a0f1d] border-2 border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] z-10" />
              <div className="w-3 h-3 rounded-full bg-[#0a0f1d] border-2 border-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] z-10" />
              <div className="w-3 h-3 rounded-full bg-[#0a0f1d] border-2 border-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)] z-10" />
              <div className="w-3 h-3 rounded-full bg-[#0a0f1d] border-2 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)] z-10" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.id}
                // 3D Entrance: Feels like monoliths snapping into a 2D plane
                initial={{ opacity: 0, y: 50, rotateX: 25, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                
                className={`relative p-8 rounded-3xl bg-[#0a0f1d]/80 backdrop-blur-md border border-white/5 cursor-default group ${step.hoverShadow}`}
              >
                {/* ── MORPHING GLASS AURA (Matches Capsule Nav behavior) ── */}
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div
                      layoutId="processHoverAura"
                      className="absolute inset-0 rounded-3xl border border-white/20 bg-white/[0.04] z-0 pointer-events-none"
                      style={{ boxShadow: `inset 0 0 20px ${step.themeColor}` }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </AnimatePresence>

                {/* BIG BACKGROUND NUMBER */}
                <div className={`absolute -bottom-2 -right-2 font-black text-8xl md:text-9xl text-white/[0.02] transition-colors duration-500 pointer-events-none select-none z-0 ${step.numberColor}`}>
                  {step.id}
                </div>

                {/* THE NODE / ICON */}
                <div 
                  className="relative z-10 w-14 h-14 rounded-2xl bg-[#010314] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-colors duration-500 group-hover:border-white/30"
                  style={{ boxShadow: hoveredIdx === idx ? `0 0 30px ${step.themeColor}` : undefined }}
                >
                  {step.icon}
                  {/* Active node pulse ring */}
                  <div className={`absolute inset-0 rounded-2xl border-2 scale-100 opacity-0 transition-all duration-500 ${hoveredIdx === idx ? 'animate-ping opacity-40' : ''}`} style={{ borderColor: step.themeColor }} />
                </div>
                
                {/* TEXT CONTENT */}
                <div className="relative z-10">
                  <div className="font-mono text-xs text-white/40 mb-2 tracking-widest uppercase">Phase {step.id}</div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};