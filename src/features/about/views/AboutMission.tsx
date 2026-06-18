//J:\Dev Tools\Projects\Catubs\ALPHA\alphaexplora-website-ui\src\features\about\views\AboutMission.tsx

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Bot, ShieldAlert, TrendingUp, ShieldCheck, Zap, Layers, Cpu, Activity, ChevronRight } from 'lucide-react';

// ── DATA STRUCTURE ──
const systemDirectives = [
  { id: 'catalyst', num: '01', label: 'The Catalyst', subtitle: 'Democratizing Premium Tech', icon: TrendingUp },
  { id: 'mitigation', num: '02', label: 'Threat Mitigation', subtitle: 'Neutralizing System Bottlenecks', icon: ShieldAlert },
  { id: 'ai', num: '03', label: 'Agentic AI', subtitle: 'The Digital Employee', icon: Bot },
  { id: 'core', num: '04', label: 'Core Matrix', subtitle: 'The Logic Behind The Design', icon: Cpu },
];

export const AboutMission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(systemDirectives[0].id);

  // ── SCROLL TRACKING LOGIC ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Nahahati ang scroll sa 4 na parts dahil may 4 tabs tayo
    if (latest < 0.25) setActiveTab(systemDirectives[0].id);
    else if (latest < 0.50) setActiveTab(systemDirectives[1].id);
    else if (latest < 0.75) setActiveTab(systemDirectives[2].id);
    else setActiveTab(systemDirectives[3].id);
  });

  // Function kapag kinlick yung tab (inaayos yung hidden scrollbar para sync sa tab pag nag-scroll uli)
  const handleTabClick = (index: number) => {
    setActiveTab(systemDirectives[index].id);
    
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    // Calculate the target scroll position based on the tab index (0 to 3)
    const scrollTarget = containerTop + (containerHeight * (index * 0.25)) + 10;
    
    // Sync the invisible scrollbar to match the selected tab.
    // behavior: 'auto' makes it snap instantly instead of sliding, so the screen doesn't "move".
    window.scrollTo({ top: scrollTarget, behavior: 'auto' });
  };

  return (
    // Ang container ay 400vh para may mahabang scroll space
    <section ref={containerRef} className="relative w-full h-[400vh] z-10 pointer-events-auto">
      
      {/* ── STICKY VIEWPORT ── */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-start pt-[clamp(6rem,12vh,8rem)] pb-[clamp(2rem,6vh,4rem)] px-[clamp(1rem,5vw,4rem)] overflow-hidden">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(400px,80vw,800px)] h-[clamp(300px,60vw,600px)] bg-cyan-600/5 rounded-full blur-[clamp(80px,10vw,150px)] pointer-events-none" />

        {/* Header */}
        <div className="w-full max-w-7xl shrink-0 mb-[clamp(1rem,2vh,2.5rem)] flex flex-col md:flex-row items-start md:items-end justify-between gap-[clamp(0.5rem,2vw,2rem)] border-b border-white/5 pb-[clamp(0.75rem,2vh,1.5rem)] z-10 relative">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[clamp(2rem,5vw,3.5rem)] lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-lg leading-tight"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Blueprint</span>
            </motion.h2>
          </div>
          <span className="font-mono text-[clamp(9px,1vw,11px)] text-blue-200/40 uppercase tracking-widest hidden md:block">
            Scroll to Navigate [↓]
          </span>
        </div>

        {/* ── MAIN LAYOUT: SPLIT GRID ── */}
        <div className="w-full max-w-7xl flex-1 min-h-0 flex flex-col lg:flex-row gap-[clamp(0.75rem,2vh,2.5rem)] z-10 relative">
          
          {/* LEFT: TABS DIRECTORY */}
          <div className="w-full lg:w-1/3 shrink-0 grid grid-cols-2 lg:flex lg:flex-col gap-[clamp(0.5rem,1.5vw,0.75rem)]">
            {systemDirectives.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative group text-left p-[clamp(0.4rem,1.2vw,1rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] border transition-all duration-500 flex items-center justify-between overflow-hidden ${
                    isActive 
                      ? 'border-cyan-500/50 bg-[#010314]/80 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                      : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10'
                  }`}
                >
                  {/* Tab Content */}
                  <div className="flex items-center gap-[clamp(0.35rem,2vw,1rem)] relative z-10">
                    <span className={`font-mono text-[clamp(10px,1.5vw,13px)] ${isActive ? 'text-cyan-400' : 'text-blue-200/30'}`}>
                      {tab.num}
                    </span>
                    <span className={`font-bold tracking-wide transition-colors text-[clamp(0.85rem,2vw,1.2rem)] ${isActive ? 'text-white' : 'text-blue-100/50 group-hover:text-blue-100/80'}`}>
                      {tab.label}
                    </span>
                  </div>

                  <ChevronRight size={16} className={`relative z-10 transition-transform duration-300 w-[clamp(12px,2vw,16px)] h-[clamp(12px,2vw,16px)] ${isActive ? 'text-cyan-400 translate-x-0' : 'text-transparent -translate-x-4 group-hover:text-blue-200/30 group-hover:translate-x-0'}`} />

                  {/* Active Highlight Sweep */}
                  {isActive && (
                    <motion.div
                      layoutId="tabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: CONTENT CONSOLE */}
          <div className="w-full lg:w-2/3 flex-1 min-h-0 relative rounded-2xl border border-white/10 bg-[#010314]/60 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden max-h-[clamp(400px,65vh,600px)]">
            
            {/* Dynamic Content Area */}
            <div className="flex-1 relative p-[clamp(1.25rem,3vw,2.5rem)] flex flex-col overflow-y-auto overflow-x-hidden">
              <AnimatePresence mode="wait">
                
                {/* 1. CATALYST */}
                {activeTab === 'catalyst' && (
                  <motion.div
                    key="catalyst"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-center relative"
                  >
                    <TrendingUp className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[clamp(14rem,30vw,24rem)] h-[clamp(14rem,30vw,24rem)] text-cyan-400/[0.07] pointer-events-none z-0" strokeWidth={1} />
                    <div className="relative z-10">
                      <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-[clamp(0.75rem,2vw,1rem)] leading-tight max-w-[85%]">Democratizing Premium Tech</h3>
                      <p className="text-blue-100/70 leading-relaxed mb-[clamp(1rem,2vw,1.5rem)] max-w-xl text-[clamp(0.95rem,1.8vw,1.1rem)]">
                        Alphaexplora identified a critical gap: forward-thinking SMEs and startups are frequently excluded from modern, fast-performing, and visually cinematic solutions due to prohibitive costs.
                      </p>
                      <p className="text-blue-100/70 leading-relaxed max-w-xl text-[clamp(0.95rem,1.8vw,1.1rem)]">
                        The firm operates on a singular truth—<strong className="text-white">high-fidelity technology is not a luxury</strong>, but an accessible necessity required to accelerate and sustain business growth.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* 2. MITIGATION */}
                {activeTab === 'mitigation' && (
                  <motion.div
                    key="mitigation"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-center relative"
                  >
                    <ShieldAlert className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[clamp(14rem,30vw,24rem)] h-[clamp(14rem,30vw,24rem)] text-red-400/[0.05] pointer-events-none z-0" strokeWidth={1} />
                    <div className="relative z-10">
                      <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-[clamp(1.5rem,3vw,2rem)] leading-tight max-w-[85%]">Neutralizing System Bottlenecks</h3>
                      <div className="space-y-[clamp(1rem,2vw,1.5rem)]">
                        <div className="flex gap-[clamp(0.75rem,2vw,1rem)]">
                          <div className="w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)] rounded-full border border-red-500/30 flex items-center justify-center shrink-0 bg-red-500/10">
                            <span className="font-mono text-[clamp(0.625rem,1.5vw,0.75rem)] text-red-400">01</span>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-[clamp(1rem,2vw,1.125rem)]">Legacy System Traps</h4>
                            <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-blue-100/60 mt-[clamp(0.125rem,0.5vw,0.25rem)] leading-snug">Systematic elimination of slow, outdated logic.</p>
                          </div>
                        </div>
                        <div className="flex gap-[clamp(0.75rem,2vw,1rem)]">
                          <div className="w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)] rounded-full border border-emerald-500/30 flex items-center justify-center shrink-0 bg-emerald-500/10">
                            <span className="font-mono text-[clamp(0.625rem,1.5vw,0.75rem)] text-emerald-400">02</span>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-[clamp(1rem,2vw,1.125rem)]">Security First Principle</h4>
                            <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-blue-100/60 mt-[clamp(0.125rem,0.5vw,0.25rem)] leading-snug">We advocate secured coding from day 1 of development.</p>
                          </div>
                        </div>
                        <div className="flex gap-[clamp(0.75rem,2vw,1rem)]">
                          <div className="w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)] rounded-full border border-cyan-500/30 flex items-center justify-center shrink-0 bg-cyan-500/10">
                            <span className="font-mono text-[clamp(0.625rem,1.5vw,0.75rem)] text-cyan-400">03</span>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-[clamp(1rem,2vw,1.125rem)]">Future-Proof Scaling</h4>
                            <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-blue-100/60 mt-[clamp(0.125rem,0.5vw,0.25rem)] leading-snug">Architecting infrastructures without operational downtime.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. AI DASHBOARD */}
                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-center relative"
                  >
                    <Bot className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[clamp(14rem,30vw,24rem)] h-[clamp(14rem,30vw,24rem)] text-cyan-400/[0.07] pointer-events-none z-0" strokeWidth={1} />
                    <div className="relative z-10 w-full">
                      <div className="flex justify-end mb-[clamp(1rem,3vw,1.5rem)]">
                        <div className="px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.125rem,0.5vw,0.25rem)] rounded-sm border border-emerald-500/50 bg-emerald-500/10 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                          <span className="font-mono text-[clamp(7px,1vw,9px)] text-emerald-400 tracking-widest">VERIFIED</span>
                        </div>
                      </div>
                      <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-[clamp(0.75rem,2vw,1rem)] leading-tight max-w-[85%]">The Digital Employee</h3>
                      <p className="text-[clamp(0.75rem,1.5vw,0.9rem)] text-blue-100/70 leading-relaxed mb-[clamp(1.5rem,3vw,2rem)] max-w-xl">
                        Moving beyond basic chatbots. Alphaexplora's Agentic AI executes actions, extracts complex guidelines, and autonomously troubleshoots. System development time is accelerated by 40% compared to traditional processes, and processing time is optimized by at least 50% through the automation and integration of highly fragmented systems.
                      </p>
                      
                      <div className="space-y-[clamp(0.75rem,2vw,1.25rem)] bg-[#010314]/80 backdrop-blur-sm border border-white/5 p-[clamp(1rem,3vw,1.5rem)] rounded-xl">
                        <div>
                          <div className="flex justify-between text-[clamp(10px,1vw,12px)] font-mono text-cyan-300 mb-[clamp(0.25rem,1vw,0.5rem)] uppercase tracking-widest">
                            <span>Labor Reduction</span>
                            <span className="font-bold">85%</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} className="h-full bg-cyan-400" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[clamp(10px,1vw,12px)] font-mono text-blue-300 mb-[clamp(0.25rem,1vw,0.5rem)] uppercase tracking-widest">
                            <span>Automation ROI</span>
                            <span className="font-bold text-emerald-400">MAXIMIZED</span>
                          </div>
                          <div className="flex gap-1 h-[clamp(6px,1vw,8px)]">
                            {[...Array(12)].map((_, i) => (
                              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className={`flex-1 rounded-sm ${i < 11 ? 'bg-blue-500' : 'bg-white/10'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. CORE MATRIX */}
                {activeTab === 'core' && (
                  <motion.div
                    key="core"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-center relative"
                  >
                    <Cpu className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[clamp(14rem,30vw,24rem)] h-[clamp(14rem,30vw,24rem)] text-indigo-400/[0.07] pointer-events-none z-0" strokeWidth={1} />
                    <div className="relative z-10">
                      <h3 className="text-[clamp(1.25rem,2.5vw,1.875rem)] md:text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-[clamp(1.5rem,3vw,2rem)] leading-tight max-w-[85%]">Highly Optimized IT Architectural Design</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,3vw,1.5rem)]">
                        <div className="border-l border-cyan-500/50 pl-[clamp(0.75rem,2vw,1rem)] bg-[#010314]/30 p-2 rounded-r-lg backdrop-blur-sm">
                          <h4 className="text-white font-bold text-[clamp(0.875rem,2vw,1.125rem)] mb-[clamp(0.125rem,0.5vw,0.25rem)]">High-Fidelity Excellence</h4>
                          <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] text-blue-100/60 leading-relaxed">Delivering premium, cinematic user experiences.</p>
                        </div>
                        <div className="border-l border-emerald-500/50 pl-[clamp(0.75rem,2vw,1rem)] bg-[#010314]/30 p-2 rounded-r-lg backdrop-blur-sm">
                          <h4 className="text-white font-bold text-[clamp(0.875rem,2vw,1.125rem)] mb-[clamp(0.125rem,0.5vw,0.25rem)]">Security-First</h4>
                          <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] text-blue-100/60 leading-relaxed">Built with robust, impenetrable logical protection.</p>
                        </div>
                        <div className="border-l border-blue-500/50 pl-[clamp(0.75rem,2vw,1rem)] bg-[#010314]/30 p-2 rounded-r-lg backdrop-blur-sm">
                          <h4 className="text-white font-bold text-[clamp(0.875rem,2vw,1.125rem)] mb-[clamp(0.125rem,0.5vw,0.25rem)]">Scalable Empowerment</h4>
                          <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] text-blue-100/60 leading-relaxed max-w-sm">Infrastructure designed to scale seamlessly alongside aggressive organizational growth.</p>
                        </div>
                        <div className="border-l border-indigo-500/50 pl-[clamp(0.75rem,2vw,1rem)] bg-[#010314]/30 p-2 rounded-r-lg backdrop-blur-sm">
                          <h4 className="text-white font-bold text-[clamp(0.875rem,2vw,1.125rem)] mb-[clamp(0.125rem,0.5vw,0.25rem)]">Omnichannel-First</h4>
                          <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] text-blue-100/60 leading-relaxed max-w-sm">Omnichannel-first design allows seamless access to the platform across different devices.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
              </AnimatePresence>
            </div>
            
            {/* Corner Bracket Decor (Right Panel) */}
            <div className="absolute top-0 right-0 w-[clamp(1.5rem,3vw,2rem)] h-[clamp(1.5rem,3vw,2rem)] border-t border-r border-cyan-500/30 rounded-tr-xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[clamp(1.5rem,3vw,2rem)] h-[clamp(1.5rem,3vw,2rem)] border-b border-r border-cyan-500/30 rounded-br-xl opacity-50 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};