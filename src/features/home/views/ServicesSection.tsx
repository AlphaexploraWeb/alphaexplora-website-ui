import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BrainCircuit, Code2, Database, Megaphone, Network, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

const services = [
  { 
    id: "01", 
    title: "Service Integration Solutions", 
    description: "We develop and integrate custom software solutions that perfectly match your business needs, from web applications to mobile platforms and cloud-based services.", 
    features: ["System Integration", "Web & Mobile Development", "Software as a Service", "Process Automation"],
    glowColor: "rgba(56, 189, 248, 0.35)",
    icon: <Code2 className="w-8 h-8 text-sky-400" />
  },
  { 
    id: "02", 
    title: "AI Enablement", 
    description: "Harness the transformative power of artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization.", 
    features: ["AI Strategy & Consulting", "Machine Learning Models", "Automation Solutions", "AI Integration"],
    glowColor: "rgba(244, 114, 182, 0.35)",
    icon: <BrainCircuit className="w-8 h-8 text-pink-400" />
  },
  { 
    id: "03", 
    title: "I.T. Consultancy", 
    description: "Our expert consultants work closely with your team to analyze current technology infrastructure, identify optimization opportunities, and develop comprehensive strategies for digital transformation.", 
    features: ["Business Process Analysis", "Technology Roadmaps", "Enterprise Architecture", "I.T. Modernization"],
    glowColor: "rgba(129, 140, 248, 0.35)",
    icon: <Network className="w-8 h-8 text-indigo-400" />
  },
  { 
    id: "04", 
    title: "Data Analytics", 
    description: "Unlock the power of your data with our advanced analytics and business intelligence solutions. We help organizations collect, process, and analyze large volumes of data to uncover valuable insights.", 
    features: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Dashboard Design"],
    glowColor: "rgba(14, 165, 233, 0.35)",
    icon: <Database className="w-8 h-8 text-cyan-400" />
  },
  { 
    id: "05", 
    title: "Managed Services", 
    description: "Our managed services provide comprehensive IT support and maintenance, ensuring your technology infrastructure operates at peak performance around the clock.", 
    features: ["24/7 Monitoring", "Technical Support", "System Maintenance", "Performance Optimization"],
    glowColor: "rgba(167, 139, 250, 0.35)",
    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />
  },
  { 
    id: "06", 
    title: "Digital Marketing", 
    description: "Accelerate your business growth with our comprehensive digital marketing strategies designed to increase brand visibility, engage target audiences, and drive measurable results.", 
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
    glowColor: "rgba(251, 146, 60, 0.35)",
    icon: <Megaphone className="w-8 h-8 text-orange-400" />
  }
];

export const ServicesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];

  const handleInitializeModule = () => {
    // Dispatch custom event with the selected service title
    const event = new CustomEvent('selectService', { detail: activeService.title });
    window.dispatchEvent(event);
    
    // Smooth scroll to the deployment CTA section
    const contactSection = document.getElementById('deployment-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 z-10 pointer-events-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 pointer-events-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-950/60 border border-blue-400/30 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs text-cyan-100 font-mono tracking-[0.2em] uppercase font-semibold">Our Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-2xl"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-400">Services</span>
          </motion.h2>
        </div>

        {/* Command Center Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-[600px] items-stretch">
          
          {/* Left Side: Navigation List & Mobile Accordion */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3 z-20">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                // DINAGDAG ANG lg:flex-1 DITO PARA PUMANTAY SA RIGHT SIDE PANEL
                <div key={service.id} className="flex flex-col lg:flex-1">
                  {/* Button / Accordion Header */}
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`group relative flex items-center justify-between w-full h-full lg:flex-1 p-5 rounded-xl border text-left transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'bg-blue-950/50 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]' 
                        : 'bg-[#050b1f]/60 border-white/5 hover:border-white/15 hover:bg-[#0d1533]/80'
                    }`}
                  >
                    {/* Hover Scanline Effect */}
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/10 to-transparent group-hover:w-full transition-all duration-500 ease-out" />
                    
                    <div className="relative flex items-center gap-4">
                      <span className={`font-mono text-xs tracking-widest ${isActive ? 'text-cyan-400' : 'text-white/40'}`}>
                        {service.id}
                      </span>
                      <span className={`font-bold text-lg tracking-tight ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {service.title}
                      </span>
                    </div>
                    
                    {/* Rotate arrow down on mobile when active */}
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-cyan-400 rotate-90 lg:rotate-0 lg:translate-x-1' : 'text-white/20 group-hover:text-white/50 group-hover:translate-x-0 -translate-x-2'}`} />
                  </button>

                  {/* ── MOBILE ACCORDION BODY (Hidden on lg desktops) ── */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden rounded-xl border border-white/10 bg-[#0d1533]/40 backdrop-blur-md relative mt-2"
                      >
                        <div
                          className="absolute inset-0 pointer-events-none opacity-40"
                          style={{ background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)` }}
                        />
                        
                        <div className="p-6 relative z-10 flex flex-col">
                          {/* Icon & Title */}
                          <div className="flex items-center gap-4 mb-5">
                            <div className="w-14 h-14 rounded-xl border border-white/10 bg-[#050b1f]/80 flex items-center justify-center shadow-lg shrink-0">
                              <div className="scale-75">{service.icon}</div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white tracking-tight leading-tight mb-1">{service.title}</h3>
                              <div className="font-mono text-[10px] text-cyan-400 tracking-[0.1em] uppercase">Module // {service.id}</div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-blue-50/70 font-light leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Key Features Grid */}
                          <div className="mb-6">
                            <h4 className="text-xs font-mono text-white/50 tracking-widest uppercase mb-3">Key Features</h4>
                            <div className="flex flex-col gap-2">
                              {service.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 p-3 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0" />
                                  <span className="text-xs text-white/90">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <button 
                            onClick={handleInitializeModule}
                            className="relative self-start group overflow-hidden rounded-lg bg-white/5 border border-white/10 px-5 py-2.5 transition-colors hover:bg-white/10 hover:border-cyan-400/50"
                          >
                            <span className="relative z-10 flex items-center gap-2 text-xs font-semibold text-white tracking-wide">
                              Inquire
                              <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ── DESKTOP RIGHT SIDE: ACTIVE DISPLAY AREA (Hidden on Mobile) ── */}
          <div className="hidden lg:flex w-full lg:w-2/3 relative rounded-2xl border border-white/10 bg-[#0d1533]/40 backdrop-blur-md overflow-hidden items-center min-h-[400px]">
            
            {/* Dynamic Ambient Background based on active service */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${activeIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 70% 30%, ${activeService.glowColor}, transparent 60%)`
                }}
              />
            </AnimatePresence>

            {/* Corner HUD Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/20" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/20" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/20" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/20" />
            </div>

            <div className="relative p-8 md:p-12 w-full h-full flex flex-col justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-[#050b1f]/80 flex items-center justify-center shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                      <motion.div
                        initial={{ scale: 0.5, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                      >
                        {activeService.icon}
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white tracking-tight mb-1">{activeService.title}</h3>
                      <div className="font-mono text-xs text-cyan-400 tracking-[0.2em] uppercase">Module // {activeService.id}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] text-blue-50/70 font-light leading-relaxed mb-10 max-w-2xl text-justify md:text-left">
                    {activeService.description}
                  </p>

                  {/* Key Features Grid */}
                  <div className="mb-10">
                    <h4 className="text-sm font-mono text-white/50 tracking-widest uppercase mb-6">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeService.features.map((feature, fIdx) => (
                        <motion.div 
                          key={fIdx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + (fIdx * 0.1) }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-cyan-400/80 shrink-0" />
                          <span className="text-sm text-white/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button 
                    onClick={handleInitializeModule}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative self-start group overflow-hidden rounded-lg bg-white/5 border border-white/10 px-6 py-3 transition-colors hover:bg-white/10 hover:border-cyan-400/50"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-sm font-semibold text-white tracking-wide">
                      Inquire
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};