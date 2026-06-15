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

  // Function kapag kinlick yung tab (mag-i-scroll yung page sa tamang height)
  const handleTabClick = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollTarget = containerTop + (containerHeight * (index * 0.25)) + 100;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  return (
    // Ang container ay 400vh para may mahabang scroll space
    <section ref={containerRef} className="relative w-full h-[400vh] z-10 pointer-events-auto">
      
      {/* ── STICKY VIEWPORT ── */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden">
        
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Header */}
        <div className="w-full max-w-7xl mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-300">sys.core // architecture</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Blueprint</span>
            </motion.h2>
          </div>
          <span className="font-mono text-[10px] text-blue-200/40 uppercase tracking-widest hidden md:block">
            Scroll to Navigate [↓]
          </span>
        </div>

        {/* ── MAIN LAYOUT: SPLIT GRID ── */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: TABS DIRECTORY */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {systemDirectives.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative group text-left p-5 rounded-xl border transition-all duration-500 flex items-center justify-between overflow-hidden ${
                    isActive 
                      ? 'border-cyan-500/50 bg-[#010314]/80 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                      : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10'
                  }`}
                >
                  {/* Tab Content */}
                  <div className="flex items-center gap-4 relative z-10">
                    <span className={`font-mono text-xs ${isActive ? 'text-cyan-400' : 'text-blue-200/30'}`}>
                      {tab.num}
                    </span>
                    <span className={`font-bold tracking-wide transition-colors ${isActive ? 'text-white' : 'text-blue-100/50 group-hover:text-blue-100/80'}`}>
                      {tab.label}
                    </span>
                  </div>

                  <ChevronRight size={16} className={`relative z-10 transition-transform duration-300 ${isActive ? 'text-cyan-400 translate-x-0' : 'text-transparent -translate-x-4 group-hover:text-blue-200/30 group-hover:translate-x-0'}`} />

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
          <div className="w-full lg:w-2/3 h-[500px] relative rounded-2xl border border-white/10 bg-[#010314]/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Top Bar Decor */}
            <div className="w-full h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              </div>
              <span className="font-mono text-[8px] text-blue-200/30 uppercase tracking-widest ml-2">
                Module // {activeTab.toUpperCase()}
              </span>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-1 relative p-8 md:p-12">
              <AnimatePresence mode="wait">
                
                {/* 1. CATALYST */}
                {activeTab === 'catalyst' && (
                  <motion.div
                    key="catalyst"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-center"
                  >
                    <TrendingUp className="text-cyan-400 mb-6" size={40} />
                    <h3 className="text-3xl font-bold text-white mb-4">Democratizing Premium Tech</h3>
                    <p className="text-blue-100/70 leading-relaxed mb-6 max-w-xl">
                      Alphaexplora identified a critical gap: forward-thinking SMEs and startups are frequently excluded from modern, fast-performing, and visually cinematic solutions due to prohibitive costs.
                    </p>
                    <p className="text-blue-100/70 leading-relaxed max-w-xl">
                      The firm operates on a singular truth—<strong className="text-white">high-fidelity technology is not a luxury</strong>, but an accessible necessity required to accelerate and sustain business growth.
                    </p>
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
                    className="h-full flex flex-col justify-center"
                  >
                    <ShieldAlert className="text-red-400 mb-6" size={40} />
                    <h3 className="text-3xl font-bold text-white mb-8">Neutralizing System Bottlenecks</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center shrink-0 bg-red-500/10">
                          <span className="font-mono text-xs text-red-400">01</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Legacy System Traps</h4>
                          <p className="text-sm text-blue-100/60 mt-1">Systematic elimination of slow, outdated logic.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border border-emerald-500/30 flex items-center justify-center shrink-0 bg-emerald-500/10">
                          <span className="font-mono text-xs text-emerald-400">02</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Security First Principle</h4>
                          <p className="text-sm text-blue-100/60 mt-1">We advocate secured coding from day 1 of development.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center shrink-0 bg-cyan-500/10">
                          <span className="font-mono text-xs text-cyan-400">03</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Future-Proof Scaling</h4>
                          <p className="text-sm text-blue-100/60 mt-1">Architecting infrastructures without operational downtime.</p>
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
                    className="h-full flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <Bot className="text-cyan-400" size={40} />
                      <div className="px-3 py-1 rounded-sm border border-emerald-500/50 bg-emerald-500/10 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                        <span className="font-mono text-[9px] text-emerald-400 tracking-widest">VERIFIED</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">The Digital Employee</h3>
                    <p className="text-sm text-blue-100/70 leading-relaxed mb-8 max-w-xl">
                      Moving beyond basic chatbots. Alphaexplora's Agentic AI executes actions, extracts complex guidelines, and autonomously troubleshoots. System development time is accelerated by 40% compared to traditional processes, and processing time is optimized by at least 50% through the automation and integration of highly fragmented systems.
                    </p>
                    
                    <div className="space-y-5 bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                      <div>
                        <div className="flex justify-between text-xs font-mono text-cyan-300 mb-2 uppercase tracking-widest">
                          <span>Labor Reduction</span>
                          <span className="font-bold">85%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} className="h-full bg-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-mono text-blue-300 mb-2 uppercase tracking-widest">
                          <span>Automation ROI</span>
                          <span className="font-bold text-emerald-400">MAXIMIZED</span>
                        </div>
                        <div className="flex gap-1 h-2">
                          {[...Array(12)].map((_, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className={`flex-1 rounded-sm ${i < 11 ? 'bg-blue-500' : 'bg-white/10'}`} />
                          ))}
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
                    className="h-full flex flex-col justify-center"
                  >
                    <Cpu className="text-indigo-400 mb-6" size={40} />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Highly Optimized IT Architectural Design</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-l border-cyan-500/50 pl-4">
                        <h4 className="text-white font-bold text-lg mb-1">High-Fidelity Excellence</h4>
                        <p className="text-xs text-blue-100/60 leading-relaxed">Delivering premium, cinematic user experiences.</p>
                      </div>
                      <div className="border-l border-emerald-500/50 pl-4">
                        <h4 className="text-white font-bold text-lg mb-1">Security-First</h4>
                        <p className="text-xs text-blue-100/60 leading-relaxed">Built with robust, impenetrable logical protection.</p>
                      </div>
                      <div className="border-l border-blue-500/50 pl-4">
                        <h4 className="text-white font-bold text-lg mb-1">Scalable Empowerment</h4>
                        <p className="text-xs text-blue-100/60 leading-relaxed max-w-sm">Infrastructure designed to scale seamlessly alongside aggressive organizational growth.</p>
                      </div>
                      <div className="border-l border-indigo-500/50 pl-4">
                        <h4 className="text-white font-bold text-lg mb-1">Omnichannel-First</h4>
                        <p className="text-xs text-blue-100/60 leading-relaxed max-w-sm">Omnichannel-first design allows seamless access to the platform across different devices.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
              </AnimatePresence>
            </div>
            
            {/* Corner Bracket Decor (Right Panel) */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/30 rounded-tr-xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/30 rounded-br-xl opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
};