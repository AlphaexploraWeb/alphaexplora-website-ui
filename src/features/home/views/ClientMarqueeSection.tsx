import { motion } from 'framer-motion';

const clients = [
  { name: "GLOBALBIM ENGINEERING SERVICES", logo: "https://res.cloudinary.com/dlk93aehl/image/upload/f_auto,q_auto/GBIM.png" },
  { name: "ESPASYO", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg" },
  { name: "ESTRUKTURA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cheetos_logo.svg/1280px-Cheetos_logo.svg.png" },
  { name: "ST. PETER", logo: "https://images.seeklogo.com/logo-png/55/2/st-peter-chapel-logo-png_seeklogo-550185.png" },
  { name: "THE MIGHTY GOD OF ALL NATIONS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lays-Logo.png" },
];

export const ClientMarqueeSection = () => {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden border-y border-white/5 bg-[#010314]/80 backdrop-blur-sm pointer-events-auto z-10">
      
      {/* Fading Edges */}
      <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#010314] via-[#010314]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#010314] via-[#010314]/80 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center mb-8 md:mb-12 relative z-20">
        <span className="text-[10px] md:text-xs font-mono text-cyan-500/80 tracking-[0.3em] uppercase">Trusted By Industry Leaders</span>
      </div>

      <div className="flex w-[200%] md:w-[150%] lg:w-full min-w-max">
        {/* First Set */}
        <motion.div 
          className="flex w-1/2 justify-around items-center gap-12 md:gap-24 px-6 md:px-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {clients.map((client, i) => (
            <img 
              key={i} 
              src={client.logo}
              alt={client.name}
              className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-40 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer"
            />
          ))}
        </motion.div>
        
        {/* Duplicate Set for Seamless Loop */}
        <motion.div 
          className="flex w-1/2 justify-around items-center gap-12 md:gap-24 px-6 md:px-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {clients.map((client, i) => (
            <img 
              key={i + 'dup'} 
              src={client.logo}
              alt={client.name}
              className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-40 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};
