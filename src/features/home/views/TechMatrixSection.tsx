import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Cpu, Globe2, Layers, Zap } from 'lucide-react';

const techPillars = [
  {
    id: "01",
    title: "The Foundation",
    tech: "TypeScript // Node.js",
    description: "Engineered for absolute fault tolerance. We build on a statically typed, event-driven core capable of handling massive concurrent operations for enterprise scaling.",
    icon: <Layers className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
    bgGlow: "bg-blue-600/20",
    accent: "from-blue-600 to-transparent",
    image: "https://guernseydonkey.com/wp-content/uploads/2020/12/Code-Technology-Photo.jpg"
  },
  {
    id: "02",
    title: "The Brain",
    tech: "Agentic AI // LLMs",
    description: "Self-optimizing routing. Our systems don't just process data; they autonomously reason, adapt, and execute multi-step logic without human bottlenecks.",
    icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />,
    bgGlow: "bg-cyan-500/20",
    accent: "from-cyan-500 to-transparent",
    image: "https://eco-cdn.iqpc.com/eco/images/channel_content/images/ai-generated_images_comic_strip_in_blue_modern_styleruOsIIcWQV26K4grrs4kG4RLXQ3zj6fX5aeZucLh.webp"
  },
  {
    id: "03",
    title: "The Interface",
    tech: "React 19 // Vite",
    description: "Cinematic, zero-latency user experiences powered by Framer Motion. We render fluid, high-fidelity interfaces that blur the line between standard web apps and native software.",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />,
    bgGlow: "bg-indigo-600/20",
    accent: "from-indigo-600 to-transparent",
    image: "https://blog.stackblitz.com/posts/what-is-vite-introduction/vite_popularity.png"
  },
  {
    id: "04",
    title: "The Network",
    tech: "Edge Deployment",
    description: "Military-grade encryption integrated at the core. Deployed on distributed edge nodes ensuring global millisecond response times.",
    icon: <Globe2 className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />,
    bgGlow: "bg-sky-500/20",
    accent: "from-sky-500 to-transparent",
    image: "https://www.networkworld.com/wp-content/uploads/2023/11/edge-computing_iot_edge_bby-mf3d-getty-100842491-orig.jpg?resize=1024%2C683&quality=50&strip=all"
  }
];

export const TechMatrixSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="relative z-10 w-full min-h-screen bg-transparent py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-center pointer-events-none">
      <div className="max-w-[1400px] mx-auto w-full pointer-events-auto flex flex-col h-full">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white drop-shadow-2xl"
          >
            Engineered For <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500 animate-[pulse_4s_ease-in-out_infinite]">
              Absolute Scale
            </span>
          </motion.h2>
        </div>

        {/* ── EXPANDING PILLARS LAYOUT ── */}
        <div className="flex flex-col md:flex-row h-[900px] md:h-[600px] w-full gap-4 mt-8 perspective-[2000px]">
          {techPillars.map((pillar, index) => {
            const isExpanded = hoveredIndex === index;

            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
                layout
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1, // Staggered boot-up effect
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }}
                className={`relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f25]/60 flex flex-col transition-colors duration-500 ${
                  isExpanded ? "md:flex-[3.5] flex-[3.5] bg-[#0d1533]/90 p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]" : "md:flex-1 flex-1 hover:bg-[#0a0f25]/80 p-6"
                }`}
              >
                {/* ── CINEMATIC IMAGE BACKGROUND ── */}
                <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
                  <motion.img
                    src={pillar.image}
                    alt={pillar.title}
                    animate={{ 
                      scale: isExpanded ? 1 : 1.2,
                      opacity: isExpanded ? 0.35 : 0.05,
                      filter: isExpanded ? 'blur(0px)' : 'blur(8px)' // Blur-to-focus transition
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#050b1f] via-[#050b1f]/80 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-80'}`} />
                </div>

                {/* ── TECHY HUD EFFECTS ── */}
                <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden z-0">
                  <motion.div 
                    animate={{ backgroundPosition: ['0px 0px', '24px 24px'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-30'}`}
                  />
                  {/* Enhanced Laser Scanner */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ y: '-100%' }}
                      animate={{ y: '300%' }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent opacity-60 border-b border-cyan-400/30 shadow-[0_5px_20px_rgba(34,211,238,0.2)]"
                    />
                  )}
                </div>

                {/* ── PULSING HUD CORNER BRACKETS ── */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 transition-all duration-300 group-hover:border-cyan-500/60 z-10" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 transition-all duration-300 group-hover:border-cyan-500/60 z-10" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 transition-all duration-300 group-hover:border-cyan-500/60 z-10" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 transition-all duration-300 group-hover:border-cyan-500/60 z-10" />

                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r transition-opacity duration-500 z-10 ${pillar.accent} ${isExpanded ? 'opacity-100' : 'opacity-0'}`} />

                <div className={`absolute top-8 left-8 font-mono text-sm tracking-widest transition-colors duration-500 z-10 ${isExpanded ? 'text-white' : 'text-white/20'}`}>
                  {pillar.id}
                </div>

                <motion.div 
                  layout
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute z-20 ${isExpanded ? 'top-6 right-8 opacity-100 scale-100' : 'top-24 left-1/2 -translate-x-1/2 opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-2'}`}
                >
                  {pillar.icon}
                </motion.div>

                {/* Collapsed Vertical Title */}
                <motion.div
                  animate={{ opacity: isExpanded ? 0 : 1, x: isExpanded ? -20 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center justify-end h-1/2 pointer-events-none z-10`}
                >
                  <span
                    className="font-black text-2xl text-white/30 tracking-[0.2em] uppercase transition-all duration-500 group-hover:text-cyan-400 group-hover:tracking-[0.25em]"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {pillar.title}
                  </span>
                </motion.div>

                {/* Expanded Content Area with Staggered Data Decode */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                        exit: { opacity: 0, transition: { duration: 0.1 } }
                      }}
                      className="relative z-20 w-full flex flex-col justify-end h-full"
                    >
                      <div className="mt-auto pl-2 pb-2">
                        <motion.h4 
                          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                          className="font-mono text-xs md:text-sm text-cyan-400 tracking-[0.2em] uppercase mb-2 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-cyan-400 rounded-sm animate-pulse" />
                          {pillar.tech}
                        </motion.h4>
                        
                        <motion.h3 
                          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-lg leading-tight"
                        >
                          {pillar.title}
                        </motion.h3>
                        
                        <motion.p 
                          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                          className="text-sm md:text-base text-blue-50 font-light leading-relaxed max-w-md drop-shadow-md"
                        >
                          {pillar.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};