import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroEase = [0.25, 0.4, 0.25, 1] as const;

export const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 100, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 100, mass: 0.5 });
  const textX = useTransform(smoothX, [0, windowSize.width], [-15, 15]);
  const textY = useTransform(smoothY, [0, windowSize.height], [-15, 15]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 1.5 } }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: heroEase } }
  };

  return (
    
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent pointer-events-none">
      
     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <motion.div 
        style={{ x: textX, y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 absolute inset-0 h-full flex flex-col items-center justify-center text-center pointer-events-none w-full px-4"
      >
        <motion.h1 className="flex flex-col items-center uppercase mix-blend-screen drop-shadow-2xl">
          <motion.span variants={itemVariants} className="text-xs md:text-sm font-mono tracking-[0.5em] text-blue-300/80 mb-3 md:mb-5">
            Pioneering The Future Of
          </motion.span>
          <motion.span variants={itemVariants} className="text-[12vw] md:text-[9vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-600 drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]">
            Agentic AI
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 text-sm md:text-base text-blue-100/70 max-w-2xl font-light tracking-wide mix-blend-screen">
          Showcasing next-generation technical capabilities. We architect autonomous workflows and intelligent systems that put your enterprise at the absolute forefront.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 pointer-events-auto">
          <motion.button 
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-bold rounded-full tracking-widest text-[10px] md:text-xs uppercase shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-shadow duration-300"
          >
            Deploy Systems
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 backdrop-blur-xl text-white font-bold rounded-full tracking-widest text-[10px] md:text-xs uppercase hover:border-blue-400 transition-colors duration-300"
          >
            Explore Tech
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
