import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroEase = [0.25, 0.4, 0.25, 1] as const;

export const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const words = ["Agentic AI", "Enterprise Scale", "Cloud Native", "Intelligent Systems"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const isDesktop = windowSize.width >= 1024;
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 100, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 100, mass: 0.5 });
  const textX = useTransform(smoothX, [0, windowSize.width || 1000], isDesktop ? [-15, 15] : [0, 0]);
  const textY = useTransform(smoothY, [0, windowSize.height || 1000], isDesktop ? [-15, 15] : [0, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 1.5 } }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.5, ease: heroEase } }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent pointer-events-none overflow-hidden">
      
      {/* Background Glow - Scaled dynamically for mobile/desktop to prevent clipping */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] sm:w-[120vw] sm:h-[120vw] md:w-[100vw] md:h-[100vw] lg:w-[1200px] lg:h-[1200px] bg-blue-600/10 blur-[clamp(60px,10vw,150px)] rounded-full pointer-events-none z-0" />

      <motion.div 
        style={{ x: textX, y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 relative flex flex-col items-center justify-center text-center pointer-events-none w-full px-[clamp(1.5rem,5vw,4rem)]"
      >
        <motion.h1 className="w-full flex flex-col items-center uppercase mix-blend-screen drop-shadow-2xl">
          <motion.span variants={itemVariants} className="text-[clamp(0.625rem,1.5vw,0.875rem)] lg:text-sm font-mono tracking-[clamp(0.2em,2vw,0.5em)] lg:tracking-[0.5em] text-blue-300/80 mb-[clamp(0.75rem,3vw,1.5rem)]">
            Pioneering The Future Of
          </motion.span>
          <motion.div variants={itemVariants} className="relative h-[6rem] sm:h-[7rem] md:h-[9rem] xl:h-[10rem] w-full flex items-center justify-center pb-2 overflow-visible">
            <AnimatePresence mode="wait">
              <motion.span 
                key={wordIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-full left-0 right-0 mx-auto text-center text-[clamp(2.5rem,10vw,4rem)] md:text-[clamp(3.5rem,7vw,7.5rem)] font-black tracking-tighter leading-[1.1] md:leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-600 drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-[clamp(1.5rem,4vw,2.5rem)] text-[clamp(0.875rem,2vw,1.125rem)] xl:text-xl text-blue-100/70 max-w-[clamp(280px,80vw,48rem)] font-light tracking-wide leading-relaxed mix-blend-screen px-2 sm:px-0">
          Showcasing next-generation technical capabilities. We architect autonomous workflows and intelligent systems that put your enterprise at the absolute forefront.
        </motion.p>
      </motion.div>
    </section>
  );
};