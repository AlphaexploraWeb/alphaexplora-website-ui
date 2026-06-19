import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, Activity, Hammer } from 'lucide-react';

// ── IMPORT SCREENSHOTS ──
import stPeterImg from '../../../assets/st-peter.jpg';
import espasyoImg from '../../../assets/espasyo.jpg';
import globalbimImg from '../../../assets/globalbim.jpg';
import estrukturaImg from '../../../assets/estruktura.jpg';
import tmgnImg from '../../../assets/tmgn.jpg';

// ── CONSOLIDATED DATA ──
const allProjects = [
  { id: "01", title: "ST. PETER", type: "Data Management Optimization", status: "Completed", link: "#", color: "from-cyan-400 to-blue-600", desc: "Consultancy for IT landscape modernization.", tags: ["Database", "Architecture"], image: stPeterImg },
  { id: "02", title: "ESPASYO STUDY & OFFICE HUB", type: "Web Platform", status: "Completed", link: "https://espasyo.ph", color: "from-purple-400 to-pink-600", desc: "Digital platform for premium study and office spaces.", tags: ["SEO", "Website"], image: espasyoImg },
  { id: "03", title: "GLOBALBIM ENGINEERING SERVICES", type: "Digital Marketing", status: "Completed", link: "https://globalbim.ph", color: "from-orange-400 to-red-600", desc: "Corporate platform and targeted digital marketing campaigns for structural engineering.", tags: ["SEO","Digital Marketing", "Website"], image: globalbimImg },
  { id: "04", title: "ESTRUKTURA MANILA", type: "Web Portfolio", status: "Completed", link: "https://estruktura.ph", color: "from-emerald-400 to-teal-600", desc: "Modern interior digital portfolio.", tags: ["Website"], image: estrukturaImg },
  { id: "05", title: "THE MIGHTY GOD OF ALL NATIONS", type: "Web Platform", status: "Completed", link: "https://tmgn.ph", color: "from-blue-400 to-indigo-600", desc: "An informational digital hub featuring ministries, upcoming events, and real-time livestreaming of worship services.", tags: ["Website"], image: tmgnImg },
];

// ── ANIMATION VARIANTS ──
const containerVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(30px)', scale: 0.9 },
  visible: { 
    opacity: 1, filter: 'blur(0px)', scale: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15, delayChildren: 0.1 }
  },
  exit: { 
    opacity: 0, filter: 'blur(20px)', scale: 1.1,
    transition: { duration: 0.8, ease: [0.7, 0, 0.84, 0] }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export const ProjectPanels = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.round(latest * (allProjects.length - 1)), allProjects.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
      window.dispatchEvent(new CustomEvent('sync-project-index', { detail: index }));
    }
  });

  const handleCapsuleClick = (index: number) => {
    if (!containerRef.current) return;
    const startY = containerRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: startY + (index * window.innerHeight), behavior: 'smooth' });
  };

  const activeProject = allProjects[activeIndex];

  return (
    <section ref={containerRef} className="relative w-full bg-transparent z-10" style={{ height: `${allProjects.length * 100}vh` }}>
      
      {/* ── CSS MAGNETIC SCROLL SNAPPING ── */}
      <style>{`
        html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }
        .snap-point { scroll-snap-align: start; height: 100vh; width: 100%; pointer-events: none; }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none flex flex-col">
        {allProjects.map((_, i) => (
          <div key={i} className="snap-point" />
        ))}
      </div>

      {/* ── STICKY VIEWPORT ── */}
      <div className="sticky top-0 w-full h-screen pt-[clamp(6rem,15vh,10rem)] pb-[clamp(2rem,6vh,4rem)] flex flex-col md:flex-row items-center overflow-hidden pointer-events-none z-10">
        
        {/* ── LEFT SIDE: RADIAL MENU WITH HUD ── */}
        <div className="relative w-full h-[40vh] md:h-full md:w-[45%] flex items-center justify-center md:justify-start md:pl-[clamp(2rem,10vw,8rem)] shrink-0 z-20 pointer-events-auto">
          
          {/* ── NEW: ORBITAL BACKGROUND RINGS ── */}
          <div className="absolute top-1/2 left-[5vw] md:left-[-15vw] -translate-y-1/2 w-[120vw] md:w-[60vw] h-[120vw] md:h-[60vw] rounded-full border-[1px] border-white/[0.04] pointer-events-none z-0" />
          <div className="absolute top-1/2 left-[7vw] md:left-[-13vw] -translate-y-1/2 w-[116vw] md:w-[56vw] h-[116vw] md:h-[56vw] rounded-full border-[1px] border-white/[0.03] border-dashed pointer-events-none animate-[spin_120s_linear_infinite] z-0" />
          <div className="absolute top-1/2 left-[9vw] md:left-[-11vw] -translate-y-1/2 w-[112vw] md:w-[52vw] h-[112vw] md:h-[52vw] rounded-full border-[1px] border-cyan-500/10 pointer-events-none z-0" />

          {/* ── NEW: SYSTEM INDEX HUD ── */}
          <div className="absolute top-24 md:top-32 left-6 md:left-12 flex flex-col gap-2 pointer-events-none z-0 opacity-80">
            <span className="font-mono text-[8px] md:text-[9px] text-cyan-400/70 tracking-[0.4em] uppercase">System Index</span>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-3xl md:text-5xl text-white font-light leading-none">0{activeIndex + 1}</span>
              <span className="font-mono text-sm md:text-lg text-white/30">/ 0{allProjects.length}</span>
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              {allProjects.map((_, i) => (
                <div key={i} className={`w-1 transition-all duration-500 rounded-full ${i === activeIndex ? 'h-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'h-1.5 bg-white/20'}`} />
              ))}
            </div>
          </div>

          {/* ── NEW: TECHNICAL DECOR (Bottom Left) ── */}
          <div className="absolute bottom-4 md:bottom-12 left-1/2 md:left-24 -translate-x-1/2 font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase animate-[pulse_3s_ease-in-out_infinite] flex flex-col items-center gap-2">
            <span>Scroll Down</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>

          {/* ── THE RADIAL ITEMS ── */}
          <div className="relative flex items-center justify-center h-full w-full z-10">
            {allProjects.map((proj, i) => {
              const offset = i - activeIndex; 
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              
              const yOffset = offset * (isMobile ? 50 : 80);
              const xOffset = -Math.pow(Math.abs(offset), 1.5) * (isMobile ? 5 : 15);
              const rotation = offset * (isMobile ? 8 : 12);
              const opacity = Math.max(0, 1 - Math.abs(offset) * 0.25);
              const scale = offset === 0 ? 1 : 0.85;

              return (
                <motion.button
                  key={proj.id}
                  onClick={() => handleCapsuleClick(i)}
                  animate={{ y: yOffset, x: xOffset, rotateZ: rotation, opacity, scale }}
                  transition={{ type: 'spring', stiffness: 40, damping: 25, mass: 1.5 }}
                  style={{ pointerEvents: Math.abs(offset) > 3 ? 'none' : 'auto', transformOrigin: "center left" }}
                  className="absolute flex items-center gap-4 group"
                >
                  <div className="w-12 flex justify-end items-center shrink-0 relative h-full">
                    {offset === 0 ? (
                      <>
                        <motion.div layoutId="activeDot" className={`w-3 h-3 rounded-full ${proj.status === "Completed" ? 'bg-cyan-400' : 'bg-orange-400'} shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 relative`} transition={{ type: "spring", stiffness: 100, damping: 20 }} />
                        {/* Glowing connecting line */}
                        <div className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent ${proj.status === "Completed" ? 'to-cyan-400/60' : 'to-orange-400/60'} pointer-events-none`} />
                        {/* Decorative Brackets for active item */}
                        <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 text-cyan-400/50 font-mono text-[10px] pointer-events-none">]</div>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50 font-mono text-[10px] pointer-events-none">[</div>
                      </>
                    ) : (
                      // Faint dot for inactive items
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/40" />
                    )}
                  </div>
                  
                  <span className={`font-medium tracking-[0.25em] uppercase whitespace-nowrap transition-all duration-700 ease-out ${
                    proj.title.length > 20 ? 'text-[clamp(10px,1.2vw,14px)]' : 
                    proj.title.length > 12 ? 'text-[clamp(11px,1.4vw,16px)]' : 
                    'text-[clamp(12px,1.5vw,20px)]'
                  } ${
                    offset === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105' : 'text-slate-500 hover:text-slate-300'
                  }`}>
                    {proj.title}
                  </span>
                </motion.button>
              );
            })}

            {/* ── UNSELECTABLE TEASER ITEM AT THE END OF THE WHEEL ── */}
            {(() => {
              const i = allProjects.length;
              const offset = i - activeIndex; 
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const yOffset = offset * (isMobile ? 50 : 80);
              const xOffset = -Math.pow(Math.abs(offset), 1.5) * (isMobile ? 5 : 15);
              const rotation = offset * (isMobile ? 8 : 12);
              const opacity = Math.max(0, 1 - Math.abs(offset) * 0.25);
              const scale = 0.85;

              return (
                <motion.div
                  key="teaser"
                  animate={{ y: yOffset, x: xOffset, rotateZ: rotation, opacity: opacity * 0.6, scale }}
                  transition={{ type: 'spring', stiffness: 40, damping: 25, mass: 1.5 }}
                  style={{ pointerEvents: 'none', transformOrigin: "center left" }}
                  className="absolute flex items-center gap-4"
                >
                  <div className="w-12 flex justify-end items-center shrink-0 relative h-full">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono tracking-[0.2em] uppercase whitespace-nowrap text-white/40 text-[clamp(9px,1vw,12px)] italic">
                    Many more coming soon...
                  </span>
                </motion.div>
              );
            })()}
          </div>
        </div>

        {/* ── RIGHT SIDE: MAIN CONTENT VIEW ── */}
        <div className="relative w-full h-[60vh] md:h-full md:w-[55%] flex flex-col justify-center px-[clamp(1.5rem,5vw,4rem)] pb-8 md:pb-0 z-10 pointer-events-auto">
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#010314]/90 to-[#010314] z-[-1] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div key={activeProject.id} variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-2xl flex flex-col perspective-1000">
              
              <div className="flex flex-col relative pointer-events-auto">
                <div className={`absolute -inset-10 bg-gradient-to-r ${activeProject.color} opacity-5 blur-3xl pointer-events-none`} />
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-[clamp(0.5rem,1vw,0.75rem)] mb-[clamp(0.75rem,1.5vw,1rem)] relative z-10">
                  <span className="font-mono text-[10px] md:text-xs text-white/40 tracking-widest uppercase">{activeProject.type}</span>
                  <span className="text-white/20">•</span>
                  <div className={`flex items-center gap-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm border ${
                    activeProject.status === "Completed" ? 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'text-orange-400 bg-orange-950/40 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1)]'
                  }`}>
                    {activeProject.status === "Completed" ? <Activity size={10} className="animate-pulse" /> : <Hammer size={10} className="animate-[spin_3s_linear_infinite]" />}
                    {activeProject.status}
                  </div>
                </motion.div>

                <motion.h2 variants={titleVariants} className={`font-semibold uppercase tracking-[0.25em] text-white leading-[1.1] mb-[clamp(1rem,2vw,1.5rem)] drop-shadow-[0_5px_15px_rgba(0,0,0,1)] relative z-10 flex flex-wrap ${
                    activeProject.title.length > 20 ? 'text-[clamp(0.75rem,1.5vw,1.5rem)]' : activeProject.title.length > 12 ? 'text-[clamp(1rem,2vw,2rem)]' : 'text-[clamp(1.2rem,3vw,3rem)]'
                }`}>
                  {activeProject.title.split(' ').map((word, wIdx) => (
                    <span key={wIdx} className="inline-flex mr-[0.25em] pb-2 -mb-2">
                      {word.split('').map((char, cIdx) => (
                        <motion.span key={cIdx} variants={letterVariants} className="inline-block origin-bottom">{char}</motion.span>
                      ))}
                    </span>
                  ))}
                </motion.h2>
              </div>

              {/* Solid 100% Image Card */}
              <motion.div variants={itemVariants} className="w-full aspect-video md:aspect-[16/9] rounded-xl md:rounded-2xl border border-white/10 bg-[#050814] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] group flex items-center justify-center transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] mt-0 pointer-events-auto">
                
                {activeProject.image ? (
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-100 transition-transform duration-700 group-hover:scale-105 z-0" 
                  />
                ) : (
                  <span className="font-mono text-white/30 text-[clamp(10px,1.5vw,14px)] tracking-[0.2em] relative z-10 animate-pulse transition-opacity duration-300 group-hover:opacity-0">
                    [ ASSET_PENDING ]
                  </span>
                )}
                
                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-[#010314]/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center p-6 md:p-12 text-center pointer-events-none group-hover:pointer-events-auto">
                  <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-blue-100/90 font-light leading-relaxed mb-6 max-w-xl translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100 opacity-0 group-hover:opacity-100">
                    {activeProject.desc}
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-[clamp(0.5rem,1vw,0.75rem)] mb-8 translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-150 opacity-0 group-hover:opacity-100">
                    {activeProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-full bg-white/[0.1] border border-white/20 text-[10px] md:text-xs font-mono tracking-widest text-white/90 uppercase">{tag}</span>
                    ))}
                  </div>
                  {activeProject.link && (
                    <a href={activeProject.link} target="_blank" rel="noreferrer" className="relative overflow-hidden inline-flex items-center gap-3 px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.875rem,1.5vw,1rem)] rounded-lg bg-[#010314] border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-200 group/btn">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[glare_1.5s_ease-in-out_infinite]" />
                      <span className="font-mono text-[clamp(10px,1.25vw,12px)] font-bold tracking-[0.2em] text-white uppercase group-hover/btn:text-cyan-300 transition-colors relative z-10">Visit Project</span>
                      <ExternalLink size={16} className="text-white/80 group-hover/btn:text-cyan-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-all relative z-10" />
                    </a>
                  )}
                </div>

              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Hover Instruction Label */}
          <div className="w-full max-w-2xl mt-2 flex justify-center pointer-events-none hidden md:flex">
            <span className="font-mono text-[10px] text-cyan-400/80 tracking-[0.2em] uppercase px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.1)] animate-pulse">
              Hover card for details
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};