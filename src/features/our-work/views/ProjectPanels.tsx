import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Database, Globe, Activity, Terminal, ChevronRight, Cpu, Network } from 'lucide-react';
import { useState, useEffect } from 'react';

const completedProjects = [
  { id: "01", title: "St. Peter", type: "Data Warehouse", link: "#", icon: <Database className="w-8 h-8 text-cyan-400" />, desc: "Centralized data architecture and scalable warehouse solutions.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
  { id: "02", title: "ESPASYO", type: "Web Platform", link: "https://espasyo.ph", icon: <Globe className="w-8 h-8 text-purple-400" />, desc: "Digital platform and booking ecosystem for premium study and office spaces.", span: "col-span-1 lg:col-span-1" },
  { id: "03", title: "GLOBALBIM", type: "Digital Marketing", link: "https://globalbim.ph", icon: <Network className="w-8 h-8 text-blue-400" />, desc: "Corporate platform and targeted digital marketing campaigns for structural engineering.", span: "col-span-1 lg:col-span-1" },
  { id: "04", title: "Estruktura", type: "Web Portfolio", link: "https://estruktura.ph", icon: <Globe className="w-8 h-8 text-emerald-400" />, desc: "Modern architectural and construction portfolio interface.", span: "col-span-1 md:col-span-2 lg:col-span-2" },
  { id: "05", title: "TMGN", type: "Web Platform", link: "https://tmgn.ph", icon: <Globe className="w-8 h-8 text-rose-400" />, desc: "Community-driven platform and content management system.", span: "col-span-1 md:col-span-2 lg:col-span-3" }
];

const ongoingProjects = [
  "Words Of life Christian Ministry",
  "BORJAL-AMAHAN Tax and Accounting Services",
  "KAIZEN Optima Solutions",
  "Create Modular Cabinet Trading",
  "Azvercons Philippines"
];

// ── 3D TILT CARD COMPONENT ──
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group ${className}`}
    >
      {/* 3D Inner Content Wrapper */}
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="w-full h-full relative">
        {children}
      </div>
    </motion.div>
  );
};

// ── LIVE PIPELINE ITEM ──
const LivePipelineItem = ({ title, delay }: { title: string, delay: number }) => {
  const statuses = ["SYNCING_DB", "COMPILING_UI", "OPTIMIZING", "DEPLOYING_TESTS", "ANALYZING_CORE"];
  const [status, setStatus] = useState(statuses[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 2000 + Math.random() * 3000);
    
    const progressInterval = setInterval(() => {
      setProgress(p => p >= 100 ? 0 : p + Math.floor(Math.random() * 15));
    }, 500);

    return () => { clearInterval(statusInterval); clearInterval(progressInterval); };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/[0.02] transition-colors group overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)] -translate-x-full group-hover:animate-[glare_2s_infinite]" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <Activity className="w-4 h-4 text-orange-500/50 group-hover:text-orange-400 transition-colors" />
          <span className="text-slate-300 text-sm md:text-base font-medium tracking-wide drop-shadow-md">{title}</span>
        </div>
        
        <div className="flex flex-col md:items-end gap-1 min-w-[200px]">
          <div className="flex items-center justify-between w-full">
            <span className="text-[9px] text-orange-400/60 uppercase tracking-widest">[{status}]</span>
            <span className="text-[9px] text-orange-400 uppercase tracking-widest">{Math.min(progress, 100)}%</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectPanels = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-32 flex flex-col gap-40 perspective-[2000px]">
      
      {/* ── SECTION 1: HOLOGRAPHIC DATA CORE (COMPLETED) ── */}
      <section className="flex flex-col gap-12 z-10 relative">
        <div className="mb-8 flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-200 uppercase">Archive Authorized</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-900/50 uppercase tracking-tighter drop-shadow-2xl">
            Data Core
          </h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project, idx) => (
            <TiltCard key={project.id} className={`${project.span} h-full`}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-gradient-to-br from-[#060a17]/90 to-[#02040a]/90 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/50 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)] group/card overflow-hidden"
              >
                {/* Holographic Overlay Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />
                
                {/* Glitch Scanline */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 opacity-0 group-hover/card:opacity-50 group-hover/card:animate-[scanline_2s_ease-in-out_infinite] blur-sm pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:border-cyan-400/50 transition-all duration-500 shadow-inner">
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[10px] text-cyan-400/60 tracking-widest uppercase">SYS_ID</span>
                    <span className="font-mono text-2xl font-bold text-white/20 group-hover/card:text-cyan-400/80 transition-colors">.{project.id}</span>
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col mt-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase bg-white/5 text-slate-300 border border-white/10 group-hover/card:bg-cyan-500/20 group-hover/card:text-cyan-300 group-hover/card:border-cyan-500/30 transition-colors">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover/card:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-8 group-hover/card:text-slate-200 transition-colors">
                    {project.desc}
                  </p>
                  
                  <a 
                    href={project.link !== "#" ? project.link : undefined} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors w-fit group/link"
                  >
                    <span>Access Node</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: LIVE DEVELOPMENT PIPELINE (ONGOING) ── */}
      <section className="flex flex-col gap-12 relative z-10">
        <div className="mb-4 flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-orange-400/30 bg-orange-400/[0.05] shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-orange-200 uppercase">Live Operations</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-100 to-orange-900/50 uppercase tracking-tighter drop-shadow-2xl">
            Pipeline
          </h2>
        </div>

        {/* Live Dashboard HUD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-b from-[#0a0705]/90 to-[#020101]/90 backdrop-blur-2xl border border-orange-500/20 rounded-[2rem] p-6 md:p-12 shadow-[0_0_80px_rgba(249,115,22,0.1)] relative overflow-hidden"
        >
          {/* Abstract Grid Background inside Terminal */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

          <div className="flex items-center justify-between mb-10 pb-6 border-b border-orange-500/20 relative z-10">
            <div className="flex items-center gap-3">
              <Terminal className="w-6 h-6 text-orange-400" />
              <span className="text-orange-200/50 font-mono text-xs tracking-[0.2em] uppercase hidden sm:block">sys.pipeline.monitor</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-6 bg-orange-500/30 animate-pulse" />
              <div className="w-2 h-4 bg-orange-500/60 animate-[pulse_1s_infinite]" />
              <div className="w-2 h-8 bg-orange-500 animate-[pulse_0.5s_infinite]" />
            </div>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            {ongoingProjects.map((proj, idx) => (
              <LivePipelineItem key={idx} title={proj} delay={idx * 0.15} />
            ))}
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};