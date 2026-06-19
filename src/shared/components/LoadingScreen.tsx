import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';
import alphaLogo from '../../assets/alpha-logo-white.png';

export const LoadingScreen = () => {
  const { isAppReady, loadingProgress } = useLoading();

  useEffect(() => {
    if (!isAppReady) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isAppReady]);

  return (
    <AnimatePresence>
      {!isAppReady && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.84, 0] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010314] overflow-hidden pointer-events-auto"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_50%)]" />

          {/* Glowing Logo & Loading Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center z-10"
          >
            {/* Logo Mark */}
            <div className="relative mb-6">
              <img 
                src={alphaLogo} 
                alt="A" 
                className="w-[clamp(60px,8vw,80px)] h-[clamp(60px,8vw,80px)] object-contain opacity-90 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] animate-pulse" 
              />
              <div className="absolute inset-0 bg-cyan-400 blur-[40px] opacity-20" />
            </div>

            {/* Sleek Progress Bar */}
            <div className="w-[clamp(200px,30vw,300px)] h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-6">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-cyan-400 blur-[4px]"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Terminal-style Progress Text */}
            <div className="font-mono text-[10px] md:text-xs tracking-widest text-cyan-400/80 flex items-center gap-3">
              <span>{loadingProgress}%</span>
              <span className="opacity-50">|</span>
              <span className="animate-pulse">
                {loadingProgress < 100 ? 'INITIALIZING SHADERS...' : 'SYSTEM READY'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
