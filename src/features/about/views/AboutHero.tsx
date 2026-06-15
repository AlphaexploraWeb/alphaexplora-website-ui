//J:\Dev Tools\Projects\Catubs\ALPHA\alphaexplora-website-ui\src\features\about\views\AboutHero.tsx

import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="relative h-[100vh] flex flex-col items-center justify-center px-4 md:px-12 z-10 pointer-events-auto overflow-hidden">
      
      {/* ── AMBIENT OVERLAYS ── */}
      {/* Subtle tech grid that fades out at the edges */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Decorative Constellation Map (Biblical/Real Constellations) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.9))' }}
      >
        
        {/* 1. ORION & PLEIADES (Top Left - Malaki) */}
        <svg className="absolute overflow-visible" style={{ left: '5%', top: '10%', transform: 'scale(1.5)' }} width="300" height="300">
          <g>
            {/* Orion Belt */}
            <motion.circle cx="140" cy="150" r="3" fill="#22d3ee" className="animate-pulse" />
            <motion.circle cx="150" cy="145" r="3" fill="#22d3ee" />
            <motion.circle cx="160" cy="140" r="3" fill="#22d3ee" className="animate-ping" />
            {/* Orion Shoulders (Betelgeuse & Bellatrix) */}
            <motion.circle cx="130" cy="90" r="4" fill="#3b82f6" className="animate-pulse" />
            <motion.circle cx="180" cy="80" r="3" fill="#22d3ee" />
            {/* Orion Feet (Saiph & Rigel) */}
            <motion.circle cx="120" cy="210" r="3" fill="#22d3ee" />
            <motion.circle cx="190" cy="190" r="4" fill="#22d3ee" className="animate-pulse" />
            {/* Orion Sword */}
            <motion.circle cx="150" cy="160" r="2" fill="#3b82f6" />
            <motion.circle cx="150" cy="170" r="2" fill="#3b82f6" />
            
            {/* Orion Lines */}
            <path d="M130 90 L140 150 M180 80 L160 140 M120 210 L140 150 M190 190 L160 140 M140 150 L150 145 L160 140 M150 145 L150 170 M130 90 L180 80" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.6" />

            {/* Pleiades (Tight Cluster nearby) */}
            <g transform="translate(-50, -50)">
              <motion.circle cx="50" cy="40" r="2" fill="#22d3ee" className="animate-ping" />
              <motion.circle cx="45" cy="45" r="2" fill="#22d3ee" />
              <motion.circle cx="55" cy="35" r="3" fill="#3b82f6" className="animate-pulse" />
              <motion.circle cx="60" cy="40" r="2" fill="#22d3ee" />
              <motion.circle cx="50" cy="30" r="2" fill="#22d3ee" />
              <motion.circle cx="65" cy="30" r="2" fill="#22d3ee" />
              <path d="M50 40 L45 45 L55 35 L60 40 L50 30 L65 30 Z" stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.4" />
            </g>
          </g>
        </svg>

        {/* 2. THE BEAR / URSA MAJOR (Top Right - Maliit at nasa malayo) */}
        <svg className="absolute overflow-visible" style={{ left: '80%', top: '8%', transform: 'scale(0.7)' }} width="300" height="300">
          <g>
            {/* Handle */}
            <motion.circle cx="10" cy="10" r="3" fill="#22d3ee" className="animate-pulse" />
            <motion.circle cx="30" cy="20" r="2" fill="#22d3ee" />
            <motion.circle cx="50" cy="35" r="3" fill="#22d3ee" className="animate-ping" />
            {/* Pan */}
            <motion.circle cx="70" cy="50" r="3" fill="#3b82f6" />
            <motion.circle cx="100" cy="55" r="4" fill="#22d3ee" className="animate-pulse" />
            <motion.circle cx="110" cy="80" r="3" fill="#22d3ee" />
            <motion.circle cx="80" cy="75" r="3" fill="#22d3ee" />
            
            {/* Bear Lines */}
            <path d="M10 10 L30 20 L50 35 L70 50 L100 55 L110 80 L80 75 L70 50" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="4 2" />
          </g>
        </svg>

        {/* 3. GEMINI / CASTOR & POLLUX (Bottom Left - Medium Size) */}
        <svg className="absolute overflow-visible" style={{ left: '8%', top: '75%', transform: 'scale(0.9)' }} width="300" height="300">
          <g>
            {/* Castor (Head & Body) */}
            <motion.circle cx="50" cy="20" r="4" fill="#3b82f6" className="animate-pulse" />
            <motion.circle cx="45" cy="60" r="2" fill="#22d3ee" />
            <motion.circle cx="30" cy="100" r="2" fill="#22d3ee" />
            <motion.circle cx="60" cy="95" r="2" fill="#22d3ee" />
            <motion.circle cx="20" cy="50" r="2" fill="#22d3ee" />
            {/* Pollux (Head & Body) */}
            <motion.circle cx="90" cy="30" r="4" fill="#22d3ee" className="animate-ping" />
            <motion.circle cx="85" cy="70" r="2" fill="#3b82f6" />
            <motion.circle cx="75" cy="110" r="2" fill="#22d3ee" />
            <motion.circle cx="100" cy="105" r="2" fill="#22d3ee" />
            <motion.circle cx="110" cy="60" r="2" fill="#22d3ee" />
            {/* Joined Hands */}
            <motion.circle cx="70" cy="55" r="2" fill="#22d3ee" />

            {/* Gemini Lines */}
            <path d="M50 20 L45 60 M45 60 L30 100 M45 60 L60 95 M45 60 L20 50 M45 60 L70 55" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M90 30 L85 70 M85 70 L75 110 M85 70 L100 105 M85 70 L110 60 M85 70 L70 55" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.6" />
          </g>
        </svg>

        {/* 4. MAZZAROTH / ZODIAC BAND (Bottom Right - Sobrang Laki) */}
        <svg className="absolute overflow-visible" style={{ left: '60%', top: '65%', transform: 'scale(1.8)' }} width="400" height="200">
          <g>
            {/* Sweeping Zodiac Arc */}
            <motion.circle cx="10" cy="150" r="3" fill="#22d3ee" className="animate-pulse" />
            <motion.circle cx="50" cy="120" r="2" fill="#3b82f6" />
            <motion.circle cx="90" cy="100" r="4" fill="#22d3ee" className="animate-ping" />
            <motion.circle cx="140" cy="90" r="2" fill="#22d3ee" />
            <motion.circle cx="190" cy="95" r="3" fill="#3b82f6" />
            <motion.circle cx="240" cy="115" r="4" fill="#22d3ee" className="animate-pulse" />
            <motion.circle cx="290" cy="150" r="2" fill="#22d3ee" />
            
            {/* Mazzaroth Lines */}
            <path d="M10 150 Q 140 30 290 150" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="5 5" />
            <path d="M10 150 L50 120 L90 100 L140 90 L190 95 L240 115 L290 150" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* ── HUD GREEBLES (CORNER DATA) ── */}
      <div className="absolute top-12 left-12 hidden md:flex flex-col gap-1 opacity-40 font-mono text-[9px] text-cyan-400 tracking-widest uppercase">
        <span>// SYS.LOC: 14.5995° N, 120.9842° E</span>
        <span>// STATUS: ACTIVE_NODE</span>
        <span>// OP_MODE: ARCHITECT</span>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-1 opacity-40 font-mono text-[9px] text-cyan-400 tracking-widest uppercase">
        <span>MEM: 0x00F8A</span>
        <div className="flex gap-1 mt-1">
          <div className="w-1 h-3 bg-cyan-400 animate-pulse" />
          <div className="w-1 h-3 bg-cyan-400/50" />
          <div className="w-1 h-3 bg-cyan-400/30" />
        </div>
      </div>

      {/* ── MAIN CONTENT FRAME ── */}
      <div className="relative flex flex-col items-center text-center max-w-5xl mt-12 w-full">
        
        {/* Corner Targeting Brackets */}
        <div className="absolute -top-10 -left-10 w-8 h-8 border-t border-l border-cyan-500/50 opacity-50 hidden md:block" />
        <div className="absolute -top-10 -right-10 w-8 h-8 border-t border-r border-cyan-500/50 opacity-50 hidden md:block" />
        <div className="absolute -bottom-10 -left-10 w-8 h-8 border-b border-l border-cyan-500/50 opacity-50 hidden md:block" />
        <div className="absolute -bottom-10 -right-10 w-8 h-8 border-b border-r border-cyan-500/50 opacity-50 hidden md:block" />

        {/* Top Connector Line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[1px] bg-gradient-to-b from-transparent to-cyan-500/50 mb-4 hidden md:block"
        />

        {/* High-Tech Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-3 rounded-none border border-cyan-500/30 bg-[#010314]/60 px-6 py-2 backdrop-blur-md relative overflow-hidden group shadow-[0_0_30px_rgba(34,211,238,0.05)]"
        >
          {/* Animated inner scanner */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12"
          />
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300">
            Core Identity Matrix
          </span>
        </motion.div>

        {/* Main Title - Split Layout */}
        {/* Main Title - Split Layout */}
        <div className="relative mb-8 w-full flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-mono uppercase tracking-[0.4em] text-cyan-400/80 mb-4"
          >
            Because IT Is Right.
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(20px)', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-blue-600 relative z-10 leading-none text-center"
          >
            Solutions <br className="md:hidden" /> Integrator
            {/* Glowing Shadow Layer */}
            <span className="absolute inset-0 text-cyan-500/30 blur-3xl z-[-1] animate-pulse pointer-events-none">
              Solutions Integrator
            </span>
          </motion.h1>
        </div>

        {/* Minimalist Dashboard Subtitle Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative max-w-3xl flex flex-col items-center gap-6"
        >
          {/* Tech Vibe Statement */}
          <p className="text-sm md:text-base lg:text-lg text-blue-100/70 font-light text-center leading-relaxed">
            Pioneering the intersection of <span className="text-white font-medium">Agentic AI</span> and high-performance digital ecosystems. 
          </p>

          {/* Micro Dashboard Gauge (Speedometer/GBIM hint) */}
          
        </motion.div>

        {/* Bottom Connector Line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-[1px] bg-gradient-to-t from-transparent to-cyan-500/50 mt-4 hidden md:block"
        />
      </div>

      

    </section>
  );
};