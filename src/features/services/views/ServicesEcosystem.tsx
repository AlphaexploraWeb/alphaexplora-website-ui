import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import {
  Network, Code2, Database, ShieldCheck, BrainCircuit, Megaphone,
  CheckCircle2, Activity, Eye, EyeOff, ArrowRight, RotateCcw, ChevronDown
} from 'lucide-react';

// ── DATA ──────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: '01', title: 'Service Integration Solutions',
    description: 'We develop and integrate custom software solutions that perfectly match your business needs, from web applications to mobile platforms and cloud-based services. Our development team uses cutting-edge technologies and agile methodologies to create scalable, secure, and user-friendly applications. Whether you need a complete software overhaul, specific functionality enhancements, or seamless system integrations, we deliver solutions that improve productivity, streamline workflows, and enhance user experience.',
    features: ['System Integration', 'Web & Mobile Development', 'Software as a Service', 'Process Automation'],
    glowColor: 'rgba(56, 189, 248, 0.35)', borderColor: 'rgba(56, 189, 248, 0.5)', hexColor: '#38bdf8',
    icon: <Code2 className="w-7 h-7 md:w-10 md:h-10 text-sky-400" />,
  },
  {
    id: '02', title: 'AI Enablement',
    description: 'Harness the transformative power of artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization. Our AI specialists develop custom machine learning models, implement intelligent automation solutions, and integrate AI capabilities into existing systems. We help businesses leverage AI technologies to improve efficiency, reduce costs, enhance customer experiences, and gain competitive advantages through data-driven insights and automated workflows.',
    features: ['AI Strategy & Consulting', 'Machine Learning Models', 'Automation Solutions', 'AI Integration'],
    glowColor: 'rgba(244, 114, 182, 0.35)', borderColor: 'rgba(244, 114, 182, 0.5)', hexColor: '#f472b6',
    icon: <BrainCircuit className="w-7 h-7 md:w-10 md:h-10 text-pink-400" />,
  },
  {
    id: '03', title: 'I.T. Consultancy',
    description: 'Our expert consultants work closely with your team to analyze current technology infrastructure, identify optimization opportunities, and develop comprehensive strategies for digital transformation. We provide strategic guidance on technology investments, system modernization, and process improvements that align with your business objectives. Our approach ensures seamless integration of new technologies while minimizing disruption to operations, ultimately driving efficiency and competitive advantage.',
    features: ['Business Process Analysis', 'Technology Roadmaps', 'Enterprise Architecture', 'I.T. Modernization'],
    glowColor: 'rgba(129, 140, 248, 0.35)', borderColor: 'rgba(129, 140, 248, 0.5)', hexColor: '#818cf8',
    icon: <Network className="w-7 h-7 md:w-10 md:h-10 text-indigo-400" />,
  },
  {
    id: '04', title: 'Data Analytics',
    description: 'Unlock the power of your data with our advanced analytics and business intelligence solutions. We help organizations collect, process, and analyze large volumes of data to uncover valuable insights that drive informed decision-making. Our data scientists and analysts create custom dashboards, predictive models, and reporting systems that provide real-time visibility into your business performance, enabling you to identify trends, optimize operations, and capitalize on new opportunities.',
    features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Dashboard Design'],
    glowColor: 'rgba(14, 165, 233, 0.35)', borderColor: 'rgba(14, 165, 233, 0.5)', hexColor: '#0ea5e9',
    icon: <Database className="w-7 h-7 md:w-10 md:h-10 text-cyan-400" />,
  },
  {
    id: '05', title: 'Managed Services',
    description: 'Our managed services provide comprehensive IT support and maintenance, ensuring your technology infrastructure operates at peak performance around the clock. We offer proactive monitoring, regular maintenance, security updates, and immediate response to technical issues. Our experienced support team becomes an extension of your organization, providing expertise and resources to maintain system reliability, minimize downtime, and optimize performance while you focus on core business activities.',
    features: ['24/7 Monitoring', 'Technical Support', 'System Maintenance', 'Performance Optimization'],
    glowColor: 'rgba(167, 139, 250, 0.35)', borderColor: 'rgba(167, 139, 250, 0.5)', hexColor: '#a78bfa',
    icon: <ShieldCheck className="w-7 h-7 md:w-10 md:h-10 text-purple-400" />,
  },
  {
    id: '06', title: 'Digital Marketing',
    description: 'Accelerate your business growth with our comprehensive digital marketing strategies designed to increase brand visibility, engage target audiences, and drive measurable results. Our marketing experts develop data-driven campaigns across multiple channels, optimize your online presence, and create compelling content that resonates with your audience. We focus on delivering ROI-focused solutions that build brand awareness, generate qualified leads, and convert prospects into loyal customers.',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
    glowColor: 'rgba(251, 146, 60, 0.35)', borderColor: 'rgba(251, 146, 60, 0.5)', hexColor: '#fb923c',
    icon: <Megaphone className="w-7 h-7 md:w-10 md:h-10 text-orange-400" />,
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export function ServicesEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for Desktop
  const [activeIndex, setActiveIndex] = useState(0);
  const [showUI, setShowUI] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // State for Mobile
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(services[0].id);
  const [mobileFlippedId, setMobileFlippedId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(Math.floor(latest * services.length), services.length - 1);
    setActiveIndex(index);
  });

  useEffect(() => {
    setIsFlipped(false);
  }, [activeIndex]);

  // FIXED SCROLL BUG: Uses absolute document position instead of local offsetTop
  const handleCapsuleClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY; 
    const scrollableDistance = containerRef.current.scrollHeight - window.innerHeight;
    const targetProgress = (index + 0.5) / services.length;
    
    window.scrollTo({ 
      top: absoluteTop + (scrollableDistance * targetProgress), 
      behavior: 'smooth' 
    });
  };

  const toggleMobileAccordion = (id: string) => {
    setMobileExpandedId(prev => prev === id ? null : id);
    setMobileFlippedId(null); // Reset flip when opening a new accordion
  };

  const active = services[activeIndex];

  return (
    <section className="relative w-full bg-transparent z-10">
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── DESKTOP LAYOUT ──────────────────────────────────────────────── */}
      {/* Used Tailwind hidden/block classes to completely fix the mobile click overlap bug */}
      <div ref={containerRef} className="hidden lg:block relative w-full h-[600vh]">
        <div className="sticky top-0 w-full h-screen flex flex-col overflow-hidden">
          <AnimatePresence>
            {showUI && (
              <motion.div
                key="ui-shell"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full"
              >
                {/* Header */}
                <div className="w-full shrink-0 pt-[calc(max(5rem,10vh)+8px)] px-4 flex flex-col items-center justify-center text-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-50 to-cyan-200 drop-shadow-[0_0_15px_rgba(103,232,249,0.3)]">Core</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">Services</span>
                  </h1>
                </div>

                {/* Nav */}
                <div className="relative z-50 w-full shrink-0 pt-4 md:pt-1 pb-3 px-4 md:px-8">
                  <div className="flex overflow-x-auto hide-scroll gap-2 md:gap-3 justify-start xl:justify-center py-1">
                    {services.map((svc, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <button
                          key={svc.id}
                          onClick={() => handleCapsuleClick(idx)}
                          // Transparent border and blurry glass logic applied here
                          className={`pointer-events-auto cursor-pointer shrink-0 relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border transition-all duration-300 overflow-hidden ${isActive ? 'bg-[#010314]/90 backdrop-blur-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'border-transparent bg-white/5 backdrop-blur-md hover:bg-white/10'}`}
                          style={{ borderColor: isActive ? svc.hexColor : undefined }}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="capsuleHighlight"
                              className="absolute inset-0 opacity-20 pointer-events-none"
                              style={{ backgroundColor: svc.hexColor }}
                              initial={false}
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 font-mono text-[10px] md:text-[11px] uppercase tracking-widest font-bold transition-colors duration-300" style={{ color: isActive ? svc.hexColor : 'rgba(255,255,255,0.4)' }}>
                            {svc.id}
                          </span>
                          <span className={`relative z-10 font-bold text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70'}`}>
                            {svc.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Flip Card Desktop */}
                <div className="flex-1 min-h-0 flex items-center justify-center px-4 md:px-8 pb-6 md:pb-8">
                  <motion.div
                    animate={{ boxShadow: `0 0 80px ${active.glowColor}, inset 0 0 20px ${active.glowColor}` }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-6xl h-full border border-white/10 bg-[#010314]/40 backdrop-blur-2xl rounded-2xl md:rounded-3xl overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                        style={{ perspective: 1200 }}
                      >
                        <motion.div
                          animate={{ rotateY: isFlipped ? 180 : 0 }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformStyle: 'preserve-3d' }}
                          className="absolute inset-0"
                        >
                          {/* FRONT FACE */}
                          <div className="absolute inset-0 flex flex-col p-5 md:p-8" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', pointerEvents: isFlipped ? 'none' : 'auto' }}>
                            <div className="flex flex-row items-center gap-4 md:gap-6 mb-5 md:mb-7">
                              <div className="shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl border bg-white/[0.03] flex items-center justify-center relative" style={{ borderColor: active.borderColor }}>
                                {active.icon}
                                <div className="absolute inset-0 rounded-[inherit] border border-white/10 animate-ping opacity-20" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <Activity style={{ color: active.hexColor }} className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                                  <span className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase" style={{ color: active.hexColor }}>Module Active // Operations</span>
                                </div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter text-white leading-[1.05] truncate">
                                  {active.title}
                                </h2>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                              <div className="h-px w-6 bg-white/10" />
                              <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-white/50 font-bold whitespace-nowrap">Core Features Matrix</span>
                              <div className="h-px flex-1 bg-white/10" />
                            </div>
                            <div className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 content-start">
                              {active.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-3 bg-[#010314]/50 border border-white/10 px-4 py-3 md:px-5 md:py-4 rounded-xl">
                                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 shrink-0" style={{ color: active.hexColor }} />
                                  <span className="text-xs md:text-sm font-bold tracking-wide text-white/90 uppercase leading-snug">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="shrink-0 mt-5 md:mt-6 pt-4 md:pt-5 border-t border-white/10">
                              <button onClick={() => setIsFlipped(true)} className="group flex items-center justify-center md:justify-start gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full md:w-auto">
                                <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-white/90 group-hover:text-white">Read Full Description</span>
                                <ArrowRight size={16} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>

                          {/* BACK FACE */}
                          <div className="absolute inset-0 flex flex-col p-5 md:p-8" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', pointerEvents: isFlipped ? 'auto' : 'none' }}>
                            <div className="flex-1 min-h-0 flex items-center justify-center px-2 md:px-8">
                              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50/90 font-light leading-relaxed md:leading-[1.8] text-center max-w-4xl">
                                {active.description}
                              </p>
                            </div>
                            <div className="shrink-0 pt-4 md:pt-5 border-t border-white/10 flex justify-center">
                              <button onClick={() => setIsFlipped(false)} className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-[#010314]/50 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                <RotateCcw size={18} className="text-white/50 group-hover:text-white group-hover:-rotate-90 transition-transform" />
                                <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-white/90 group-hover:text-white">Return to Matrix</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={() => setShowUI((v) => !v)} className="pointer-events-auto cursor-pointer absolute bottom-6 right-6 z-[99] p-3 rounded-full border border-white/10 bg-[#010314]/60 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 shadow-2xl group">
            {showUI ? <Eye className="text-white/60 group-hover:text-white" size={20} /> : <EyeOff className="text-white/60 group-hover:text-white" size={20} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE & TABLET LAYOUT ───────────────────────────────────────────────── */}
      <div className="block lg:hidden w-full px-4 pt-[calc(max(5rem,10vh)+8px)] pb-24 gap-6 pointer-events-auto relative z-50">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-50 to-cyan-200 drop-shadow-[0_0_15px_rgba(103,232,249,0.3)]">Core</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">Services</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-4">
          {services.map((svc) => {
            const isExpanded = mobileExpandedId === svc.id;
            const isMobileFlipped = mobileFlippedId === svc.id;
            
            return (
              <div 
                key={svc.id} 
                className="w-full border backdrop-blur-2xl rounded-2xl overflow-hidden transition-all duration-300"
                style={{ 
                  borderColor: isExpanded ? svc.borderColor : 'rgba(255,255,255,0.1)',
                  boxShadow: isExpanded ? `0 0 40px ${svc.glowColor}, inset 0 0 10px ${svc.glowColor}` : undefined
                }}
              >
                {/* Accordion Header (Clickable) */}
                <button 
                  onClick={() => toggleMobileAccordion(svc.id)}
                  className="pointer-events-auto relative z-50 w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300" style={{ borderColor: isExpanded ? svc.borderColor : 'rgba(255,255,255,0.1)', background: isExpanded ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                      <div className="scale-75">{svc.icon}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Activity style={{ color: isExpanded ? svc.hexColor : 'rgba(255,255,255,0.4)' }} className="w-3 h-3 shrink-0 transition-colors duration-300" />
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300" style={{ color: isExpanded ? svc.hexColor : 'rgba(255,255,255,0.4)' }}>
                          {isExpanded ? 'Active' : 'Standby'} // {svc.id}
                        </span>
                      </div>
                      <h2 className="text-lg font-black uppercase tracking-tighter leading-tight transition-colors duration-300 text-white">
                        {svc.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300">
                    <ChevronDown size={16} className={`transition-transform duration-300 text-white ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Accordion Body (Mobile Flip Card) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="relative w-full h-[350px] border-t border-white/10" style={{ perspective: 1200 }}>
                        <motion.div
                          animate={{ rotateY: isMobileFlipped ? 180 : 0 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformStyle: 'preserve-3d' }}
                          className="absolute inset-0 w-full h-full"
                        >
                          {/* MOBILE FRONT: Features */}
                          <div className="absolute inset-0 w-full h-full flex flex-col p-5 bg-[#010314]/20" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', pointerEvents: isMobileFlipped ? 'none' : 'auto' }}>
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Core Features</span>
                            <div className="flex-1 overflow-y-auto hide-scroll flex flex-col gap-2">
                              {svc.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-3 rounded-lg shadow-inner">
                                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: svc.hexColor }} />
                                  <span className="text-xs font-bold tracking-wide text-white/90 uppercase">{feat}</span>
                                </div>
                              ))}
                            </div>
                            <div className="pt-4 mt-auto shrink-0">
                              <button onClick={() => setMobileFlippedId(svc.id)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/10 transition-colors cursor-pointer">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">Read Details</span>
                                <ArrowRight size={14} className="text-white/50" />
                              </button>
                            </div>
                          </div>

                          {/* MOBILE BACK: Description */}
                          <div className="absolute inset-0 w-full h-full flex flex-col p-5 bg-[#010314]/80 backdrop-blur-md" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', pointerEvents: isMobileFlipped ? 'auto' : 'none' }}>
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Description</span>
                            <div className="flex-1 overflow-y-auto hide-scroll">
                              <p className="text-[13px] text-blue-50/80 font-light leading-relaxed">
                                {svc.description}
                              </p>
                            </div>
                            <div className="pt-4 mt-auto shrink-0">
                              <button onClick={() => setMobileFlippedId(null)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/10 transition-colors cursor-pointer">
                                <RotateCcw size={14} className="text-white/50" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">Return to Features</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}