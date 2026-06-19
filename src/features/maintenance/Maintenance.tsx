import { motion } from 'framer-motion';
import { useState } from 'react';
import alphaLogo from '../../assets/alpha-logo-white.png';

export const Maintenance = () => {
  const [score, setScore] = useState(0);

  const handleTap = () => {
    if (score < 100) {
      setScore(prev => Math.min(prev + 5, 100));
    }
  };

  return (
    <div className="min-h-screen bg-[#010314] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,80vw,800px)] h-[clamp(300px,80vw,800px)] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl"
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={alphaLogo} alt="Alphaexplora" className="h-16 md:h-24 mb-6 opacity-90 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />
        </motion.div>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-2xl mb-4">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Offline</span>
        </h1>
        
        <p className="text-blue-100/60 font-mono text-xs md:text-sm max-w-lg leading-relaxed uppercase tracking-widest px-4 mb-8">
          Alphaexplora is currently undergoing scheduled maintenance and system upgrades.
        </p>

        {/* INTERACTIVE MINI-GAME */}
        <div className="w-full max-w-sm mt-4 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md flex flex-col items-center">
          {score < 100 ? (
            <>
              <p className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase mb-6 animate-pulse">
                [ Tap to manually reboot core ]
              </p>
              
              <button 
                onClick={handleTap}
                className="relative flex items-center justify-center w-24 h-24 rounded-full group focus:outline-none"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30"></span>
                <span className="relative inline-flex h-16 w-16 rounded-full bg-cyan-500 items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] group-active:scale-95 group-active:bg-cyan-400 transition-all">
                  <span className="text-cyan-950 font-black font-mono text-xl">{score}%</span>
                </span>
              </button>

              <div className="w-full h-2 bg-black/50 rounded-full mt-8 overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-300"
                  style={{ width: `${score}%` }}
                />
              </div>
            </>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-4">
                <span className="text-green-400 text-2xl">✓</span>
              </div>
              <h3 className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2">Reboot Successful</h3>
              <p className="text-white/50 text-xs font-mono uppercase text-center max-w-[250px]">
                Just kidding, we're still building! But thanks for helping out. Please check back later!
              </p>
            </motion.div>
          )}
        </div>

      </motion.div>
    </div>
  );
};
