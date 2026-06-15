import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Network, Code2, Database, ShieldCheck, BrainCircuit, Megaphone, CheckCircle2, Activity, Eye, EyeOff } from 'lucide-react';

// ── EXACT DATA ──
export const services = [
  { id: "01", title: "Software Integration Solutions", description: "We develop and integrate custom software solutions that perfectly match your business needs, from web applications to mobile platforms and cloud-based services. Our development team uses cutting-edge technologies and agile methodologies to create scalable, secure, and user-friendly applications. Whether you need a complete software overhaul, specific functionality enhancements, or seamless system integrations, we deliver solutions that improve productivity, streamline workflows, and enhance user experience.", features: ["System Integration", "Web & Mobile Development", "Software as a Service", "Process Automation"], glowColor: "rgba(56, 189, 248, 0.35)", borderColor: "rgba(56, 189, 248, 0.5)", hexColor: "#38bdf8", icon: <Code2 className="w-8 h-8 text-sky-400" /> },
  { id: "02", title: "AI Enablement", description: "Harness the transformative power of artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization. Our AI specialists develop custom machine learning models, implement intelligent automation solutions, and integrate AI capabilities into existing systems. We help businesses leverage AI technologies to improve efficiency, reduce costs, enhance customer experiences, and gain competitive advantages through data-driven insights and automated workflows.", features: ["AI Strategy & Consulting", "Machine Learning Models", "Automation Solutions", "AI Integration"], glowColor: "rgba(244, 114, 182, 0.35)", borderColor: "rgba(244, 114, 182, 0.5)", hexColor: "#f472b6", icon: <BrainCircuit className="w-8 h-8 text-pink-400" /> },
  { id: "03", title: "I.T. Consultancy", description: "Our expert consultants work closely with your team to analyze current technology infrastructure, identify optimization opportunities, and develop comprehensive strategies for digital transformation. We provide strategic guidance on technology investments, system modernization, and process improvements that align with your business objectives. Our approach ensures seamless integration of new technologies while minimizing disruption to operations, ultimately driving efficiency and competitive advantage.", features: ["Business Process Analysis", "Technology Roadmaps", "Enterprise Architecture", "I.T. Modernization"], glowColor: "rgba(129, 140, 248, 0.35)", borderColor: "rgba(129, 140, 248, 0.5)", hexColor: "#818cf8", icon: <Network className="w-8 h-8 text-indigo-400" /> },
  { id: "04", title: "Data Analytics", description: "Unlock the power of your data with our advanced analytics and business intelligence solutions. We help organizations collect, process, and analyze large volumes of data to uncover valuable insights that drive informed decision-making. Our data scientists and analysts create custom dashboards, predictive models, and reporting systems that provide real-time visibility into your business performance, enabling you to identify trends, optimize operations, and capitalize on new opportunities.", features: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Dashboard Design"], glowColor: "rgba(14, 165, 233, 0.35)", borderColor: "rgba(14, 165, 233, 0.5)", hexColor: "#0ea5e9", icon: <Database className="w-8 h-8 text-cyan-400" /> },
  { id: "05", title: "Managed Services", description: "Our managed services provide comprehensive IT support and maintenance, ensuring your technology infrastructure operates at peak performance around the clock. We offer proactive monitoring, regular maintenance, security updates, and immediate response to technical issues. Our experienced support team becomes an extension of your organization, providing expertise and resources to maintain system reliability, minimize downtime, and optimize performance while you focus on core business activities.", features: ["24/7 Monitoring", "Technical Support", "System Maintenance", "Performance Optimization"], glowColor: "rgba(167, 139, 250, 0.35)", borderColor: "rgba(167, 139, 250, 0.5)", hexColor: "#a78bfa", icon: <ShieldCheck className="w-8 h-8 text-purple-400" /> },
  { id: "06", title: "Digital Marketing", description: "Accelerate your business growth with our comprehensive digital marketing strategies designed to increase brand visibility, engage target audiences, and drive measurable results. Our marketing experts develop data-driven campaigns across multiple channels, optimize your online presence, and create compelling content that resonates with your audience. We focus on delivering ROI-focused solutions that build brand awareness, generate qualified leads, and convert prospects into loyal customers.", features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"], glowColor: "rgba(251, 146, 60, 0.35)", borderColor: "rgba(251, 146, 60, 0.5)", hexColor: "#fb923c", icon: <Megaphone className="w-8 h-8 text-orange-400" /> }
];



// ── MAIN UI COMPONENT ──
export const ServicesEcosystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showUI, setShowUI] = useState(true); // ZEN MODE TOGGLE STATE

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * services.length), services.length - 1);
    setActiveIndex(index);
  });

  const handleCapsuleClick = (index: number) => {
    if (!containerRef.current) return;
    
    // Get the absolute start position of the container relative to the document
    const rect = containerRef.current.getBoundingClientRect();
    const startY = rect.top + window.scrollY;
    
    // Total scrollable distance for this specific section
    const scrollableDistance = containerRef.current.scrollHeight - window.innerHeight;
    
    // Target the absolute center of the interval for the given index
    const targetProgress = (index + 0.5) / services.length;
    
    const targetScroll = startY + (scrollableDistance * targetProgress);
    
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const activeData = services[activeIndex];

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] z-10 pointer-events-none bg-transparent">
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* ── STICKY VIEWPORT ── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col pointer-events-none">

          {/* ── EYE TOGGLE BUTTON (ZEN MODE) ── */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            onClick={() => setShowUI(!showUI)}
            className="absolute bottom-8 right-8 z-50 p-4 rounded-full border border-white/10 bg-[#010314]/60 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 shadow-2xl group pointer-events-auto"
            title={showUI ? "Hide UI" : "Show UI"}
          >
            {showUI ? (
              <Eye className="text-white/60 group-hover:text-white transition-colors" size={24} />
            ) : (
              <EyeOff className="text-white/60 group-hover:text-white transition-colors" size={24} />
            )}
          </motion.button>

          {/* ── TOP CAPSULE NAVIGATION ── */}
          <AnimatePresence>
            {showUI && (
              <motion.div 
                initial={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                className="relative z-20 w-full pt-20 md:pt-24 pb-2 px-4 pointer-events-none"
              >
                <div className="max-w-7xl mx-auto flex overflow-x-auto hide-scroll gap-2 md:gap-3 justify-start xl:justify-center px-2 py-2 pointer-events-auto">
                  {services.map((service, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleCapsuleClick(idx)}
                        className={`shrink-0 relative group flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 overflow-hidden ${
                          isActive 
                            ? 'bg-[#010314]/90 shadow-lg backdrop-blur-md' 
                            : 'border-white/10 bg-[#010314]/40 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/30'
                        }`}
                        style={{ borderColor: isActive ? service.hexColor : undefined }}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="capsuleHighlight"
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundColor: service.hexColor }}
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <div className="relative z-10 flex items-center gap-3">
                          <span 
                            className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${isActive ? 'font-bold' : 'text-white/30'}`}
                            style={{ color: isActive ? service.hexColor : undefined }}
                          >
                            {service.id}
                          </span>
                          <span className={`font-bold text-xs md:text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white/90'}`}>
                            {service.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── CENTER: DYNAMIC GLASS TERMINAL ── */}
          <div className="flex-1 w-full relative z-10 flex items-center justify-center px-4 md:px-8 pb-8 pointer-events-none">
            <AnimatePresence>
              {showUI && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 60, filter: 'blur(15px)' }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    filter: 'blur(0px)',
                    boxShadow: `0 0 80px ${activeData.glowColor}, inset 0 0 20px ${activeData.glowColor}`
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  exit={{ opacity: 0, scale: 0.9, y: 60, filter: 'blur(15px)' }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-5xl min-h-[600px] lg:min-h-[500px] border border-white/10 bg-[#010314]/40 backdrop-blur-2xl rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden flex flex-col shadow-2xl pointer-events-auto max-h-[85vh] overflow-y-auto hide-scroll"
                >
                  
                  <motion.div 
                    key={`label-${activeData.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-4 left-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 hidden md:block"
                  >
                    [ INIT_MODULE: {activeData.id} ]
                  </motion.div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeData.id}
                      initial={{ opacity: 0, filter: 'blur(20px)', y: 60, scale: 0.95 }}
                      animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                      exit={{ opacity: 0, filter: 'blur(20px)', y: -60, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col flex-1 w-full h-full"
                    >

                  {/* Header */}
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-4 md:mb-6 border-b border-white/10 pb-4 md:pb-6 mt-6 md:mt-2">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl border bg-white/[0.02] backdrop-blur-md flex items-center justify-center relative shadow-inner"
                      style={{ borderColor: activeData.borderColor }}
                    >
                      <div className="scale-75 md:scale-100">{activeData.icon}</div>
                      <div className="absolute inset-0 border border-white/10 rounded-2xl animate-ping opacity-20" />
                    </div>
                    <div className="flex flex-col">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-1 md:mb-2"
                      >
                        <Activity size={14} color={activeData.hexColor} />
                        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase" style={{ color: activeData.hexColor }}>
                          Module Active // Operations
                        </span>
                      </motion.div>
                      <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-none"
                      >
                        {activeData.title}
                      </motion.h2>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10 mb-6 md:mb-8 flex-1"
                  >
                    <p className="text-sm md:text-base lg:text-[17px] text-blue-50/80 font-light leading-relaxed text-justify md:text-left drop-shadow-md">
                      {activeData.description}
                    </p>
                  </motion.div>

                  {/* Features Matrix */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative z-10 mt-auto"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/40">Core Features Matrix</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                      {activeData.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex flex-col gap-2 md:gap-3 bg-white/[0.03] border border-white/5 p-3 md:p-4 rounded-xl hover:bg-white/[0.08] transition-colors shadow-inner">
                          <CheckCircle2 size={18} className="shrink-0" style={{ color: activeData.hexColor }} />
                          <span className="text-[10px] md:text-xs font-mono tracking-wide text-white/90 uppercase">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                    </motion.div>
                  </AnimatePresence>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
    </section>
  );
};