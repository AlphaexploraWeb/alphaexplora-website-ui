import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DeploymentCTASection } from './DeploymentCTASection';
import { X } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openCTAModal', handleOpenModal);
    return () => window.removeEventListener('openCTAModal', handleOpenModal);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work', disabled: true }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl md:rounded-full bg-[#010314]/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.05)]"
      >
        <div className="flex items-center justify-between px-6 py-2.5">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Pulsing Core Icon */}
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </div>
            <span className="text-base md:text-lg font-light tracking-[0.25em] uppercase text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Alphaexplora
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase">
            {navLinks.map((link) => {
              if (link.disabled) {
                return (
                  <span 
                    key={link.name}
                    className="relative px-2 py-1 text-white/20 cursor-not-allowed select-none flex items-center gap-1"
                    title="In Development"
                  >
                    {link.name}
                    <span className="text-[7px] text-cyan-500/50 uppercase tracking-widest bg-cyan-900/20 px-1 rounded border border-cyan-500/20 mb-1">DEV</span>
                  </span>
                );
              }
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`relative group px-2 py-1 transition-all duration-300 ${isActive ? 'text-cyan-400' : 'text-blue-100/60 hover:text-cyan-300'}`}
                >
                  {/* Tech Bracket Hover Effect - Left */}
                  <span className="absolute left-0 opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 transition-all duration-300 text-cyan-500 font-bold">
                    [
                  </span>
                  
                  {link.name}
                  
                  {/* Tech Bracket Hover Effect - Right */}
                  <span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300 text-cyan-500 font-bold">
                    ]
                  </span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CONNECT BUTTON (Right Side) */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group px-5 py-2 rounded-full border border-cyan-500/50 bg-cyan-950/30 text-cyan-300 font-mono text-[9px] tracking-[0.2em] uppercase hover:bg-cyan-900/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex items-center gap-2 overflow-hidden relative"
            >
              {/* Hover Glare Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <span className="group-hover:text-white transition-colors">Initiate</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-cyan-400 text-xs font-mono uppercase tracking-widest"
            >
              Initiate
            </button>
            <button className="text-cyan-400 p-1.5 hover:bg-cyan-900/30 rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

        </div>
      </motion.nav>

      {/* ── MODAL CTA POPUP ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#010314]/80 overflow-hidden flex items-center justify-center"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-2xl"
            >
              <X size={20} />
            </button>
            
            {/* The Actual Section */}
            <div className="w-full" style={{ transform: 'scale(min(1, calc(100vh / 900)))', transformOrigin: 'center' }}>
              <DeploymentCTASection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};