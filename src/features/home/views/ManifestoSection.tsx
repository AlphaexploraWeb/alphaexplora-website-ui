import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ManifestoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const subTextY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[120vh] w-full flex flex-col items-center justify-center px-4 md:px-12 z-10 bg-transparent pointer-events-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.h2 
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl mix-blend-screen"
        >
          <span className="text-slate-400/80 font-medium">Most enterprises adapt to the digital age.</span>
          <br className="hidden md:block" />
          
          {/* 1. INFINITE SHIMMER LOOP EFFECT */}
          <motion.span 
            animate={{ backgroundPosition: ["0% center", "200% center"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
          >
            {" "}We engineer systems that dictate it.
          </motion.span>
        </motion.h2>

        <motion.div
          style={{ y: subTextY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {/* 2. SLOW BREATHING GLOW LOOP */}
          <motion.p
            animate={{ textShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 15px rgba(59,130,246,0.3)", "0px 0px 0px rgba(59,130,246,0)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 max-w-3xl text-base md:text-xl text-blue-100/60 font-light tracking-wide leading-relaxed"
          >
            In a world of fragmented workflows and disconnected data, we build the autonomous core. 
            Bridging the gap between raw analytics and agentic intelligence to scale your operations effortlessly.
          </motion.p>
        </motion.div>

        {/* Decorative Scroll Line */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 100, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          className="mt-20 w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent"
        />

      </div>
    </section>
  );
};