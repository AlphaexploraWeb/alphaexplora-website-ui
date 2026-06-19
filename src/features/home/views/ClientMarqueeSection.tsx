import { motion } from 'framer-motion';

import espasyoLogo from '../../../assets/ESPASYO.png';
import estrukturaLogo from '../../../assets/ESTRUKTURA.png';
import tmgnLogo from '../../../assets/tmgn.png';
import stPeterLogo from '../../../assets/st-peter-logo.png';

const clients = [
  { name: "GLOBALBIM ENGINEERING SERVICES", logo: "https://res.cloudinary.com/dlk93aehl/image/upload/f_auto,q_auto/GBIM.png", size: "h-16 md:h-24" },
  { name: "ESPASYO", logo: espasyoLogo, size: "h-16 md:h-24" },
  { name: "ESTRUKTURA", logo: estrukturaLogo, size: "h-16 md:h-24" },
  { name: "ST. PETER", logo: stPeterLogo, size: "h-28 md:h-40" },
  { name: "THE MIGHTY GOD OF ALL NATIONS", logo: tmgnLogo, size: "h-16 md:h-24" },
];

export const ClientMarqueeSection = () => {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden border-y border-white/5 bg-[#010314]/80 backdrop-blur-sm pointer-events-auto z-10">
      
      {/* Fading Edges */}
      <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#010314] via-[#010314]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#010314] via-[#010314]/80 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-8 md:mb-12 relative z-20">
        <span className="text-[10px] md:text-xs font-mono text-cyan-500/80 tracking-[0.3em] uppercase">Provided value for our following partners</span>
      </div>

      <div className="flex w-[200%] md:w-[150%] lg:w-full min-w-max">
        {/* First Set */}
        <motion.div 
          className="flex w-1/2 justify-around items-center gap-16 md:gap-32 px-8 md:px-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {clients.map((client, i) => (
            <img 
              key={i} 
              src={client.logo}
              alt={client.name}
              className={`${client.size} w-auto object-contain opacity-80`}
            />
          ))}
        </motion.div>
        
        {/* Duplicate Set for Seamless Loop */}
        <motion.div 
          className="flex w-1/2 justify-around items-center gap-16 md:gap-32 px-8 md:px-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {clients.map((client, i) => (
            <img 
              key={i + 'dup'} 
              src={client.logo}
              alt={client.name}
              className={`${client.size} w-auto object-contain opacity-80`}
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};
