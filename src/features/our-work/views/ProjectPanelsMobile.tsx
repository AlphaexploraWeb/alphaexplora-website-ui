import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Hammer, Activity } from 'lucide-react';

// ── IMPORT SCREENSHOTS ──
import stPeterImg from '../../../assets/st-peter.jpg';
import espasyoImg from '../../../assets/espasyo.jpg';
import globalbimImg from '../../../assets/globalbim.jpg';
import estrukturaImg from '../../../assets/estruktura.jpg';
import tmgnImg from '../../../assets/tmgn.jpg';

const allProjects = [
  { id: "01", title: "ST. PETER", type: "Data Warehouse", status: "Completed", link: "#", color: "from-cyan-400 to-blue-600", desc: "Centralized data architecture and scalable warehouse solutions.", tags: ["Database", "Architecture"], image: stPeterImg },
  { id: "02", title: "ESPASYO STUDY & OFFICE HUB", type: "Web Platform", status: "Completed", link: "https://espasyo.ph", color: "from-purple-400 to-pink-600", desc: "Digital platform for premium study and office spaces.", tags: ["SEO", "Website"], image: espasyoImg },
  { id: "03", title: "GLOBALBIM ENGINEERING SERVICES", type: "Digital Marketing", status: "Completed", link: "https://globalbim.ph", color: "from-orange-400 to-red-600", desc: "Corporate platform and targeted digital marketing campaigns for structural engineering.", tags: ["SEO","Digital Marketing", "Website"], image: globalbimImg },
  { id: "04", title: "ESTRUKTURA MANILA", type: "Web Portfolio", status: "Completed", link: "https://estruktura.ph", color: "from-emerald-400 to-teal-600", desc: "Modern interior digital portfolio.", tags: ["Website"], image: estrukturaImg },
  { id: "05", title: "THE MIGHTY GOD OF ALL NATIONS", type: "Web Platform", status: "Completed", link: "https://tmgn.ph", color: "from-blue-400 to-indigo-600", desc: "An informational digital hub featuring ministries, upcoming events, and real-time livestreaming of worship services.", tags: ["Website"], image: tmgnImg },
];

const ProjectCard = ({ project, index }: { project: typeof allProjects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax and morphing effects
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="relative w-full mb-16 flex flex-col pointer-events-auto"
    >
      {/* Index HUD */}
      <div className="absolute -top-6 -left-2 text-[80px] font-black italic text-white/[0.03] pointer-events-none z-0">
        {project.id}
      </div>

      <div className="relative z-10 w-full rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#010314]/80 backdrop-blur-xl shadow-2xl flex flex-col">
        {/* Image Container with Parallax */}
        <div className="relative w-full h-[220px] overflow-hidden border-b border-white/10">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
            <div className={`absolute inset-0 bg-gradient-to-t from-[#010314] via-transparent to-transparent opacity-80`} />
          </motion.div>
          
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg">
            {project.status === 'Completed' ? <ExternalLink size={10} className="text-cyan-400" /> : <Hammer size={10} className="text-yellow-400" />}
            <span className="text-[9px] font-mono tracking-widest text-white uppercase">{project.status}</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Activity size={12} className="text-cyan-400" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-400 uppercase">{project.type}</span>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-blue-100/60 font-light leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={project.link !== '#' ? project.link : undefined}
            target="_blank" rel="noreferrer"
            className={`mt-4 w-full py-3 rounded-xl flex items-center justify-center gap-2 border transition-all ${
              project.link !== '#' 
                ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 active:scale-95' 
                : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
            }`}
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              {project.link !== '#' ? 'Launch Project' : 'Internal Node'}
            </span>
            {project.link !== '#' && <ExternalLink size={14} />}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectPanelsMobile = () => {
  return (
    <section className="relative w-full py-16 px-4 bg-transparent overflow-hidden">
      {/* Background completely removed for cleaner mobile view */}

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col pt-4">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-3 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
            Selected Works
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
            Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Deployments</span>
          </h2>
          <p className="text-blue-100/60 mt-4 max-w-[280px] font-light leading-relaxed text-[13px]">
            Explore our portfolio of custom platforms, web ecosystems, and technical architectures.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
