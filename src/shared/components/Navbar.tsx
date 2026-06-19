import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DeploymentCTASection } from './DeploymentCTASection';
import { X, Menu } from 'lucide-react'; // Added Menu icon
import alphaLogo from '../../assets/alpha-logo-white.png';

export const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added mobile menu state

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openCTAModal', handleOpenModal);
    return () => window.removeEventListener('openCTAModal', handleOpenModal);
  }, []);

  // Prevent background scrolling when modal or mobile menu is open
  useEffect(() => {
    if (isModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen, isMobileMenuOpen]);

  const navLinks: { name: string; path: string; disabled?: boolean }[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-[clamp(0.5rem,2vw,1.5rem)] left-1/2 -translate-x-1/2 w-[clamp(92%,95vw,1024px)] z-50 rounded-2xl md:rounded-full bg-[#010314]/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.05)]"
      >
        <div className="flex items-center justify-between px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.5rem,1.5vw,0.75rem)]">
          
          {/* LOGO */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center group">
            <span className="flex items-center text-[clamp(12px,2vw,18px)] font-light tracking-[0.25em] uppercase text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <img 
                src={alphaLogo} 
                alt="A" 
                className="h-[clamp(18px,2.5vw,24px)] object-contain inline-block mr-[5px] opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all translate-y-[1px]" 
              />
              lphaexplora
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-[clamp(1rem,3vw,2rem)] font-mono text-[clamp(9px,1vw,11px)] tracking-[0.2em] uppercase">
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

          {/* CONNECT BUTTON (Right Side Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group px-[clamp(1rem,2vw,1.25rem)] py-[clamp(0.4rem,1vw,0.5rem)] rounded-full border border-cyan-500/50 bg-cyan-950/30 text-cyan-300 font-mono text-[clamp(9px,1vw,10px)] tracking-[0.2em] uppercase hover:bg-cyan-900/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex items-center gap-2 overflow-hidden relative"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="group-hover:text-white transition-colors">Initiate</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border border-cyan-500/30 bg-cyan-900/20 active:bg-cyan-500/20 transition-colors"
            >
              Initiate
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cyan-400 p-1.5 hover:bg-cyan-900/30 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.3 }}
              className="absolute top-[120%] left-0 w-full rounded-2xl bg-[#010314]/95 backdrop-blur-3xl border border-cyan-500/20 shadow-2xl p-4 flex flex-col gap-2 md:hidden overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                
                if (link.disabled) {
                  return (
                    <div key={link.name} className="flex items-center justify-between px-4 py-4 rounded-xl border border-white/5 bg-white/5 opacity-50 cursor-not-allowed">
                      <span className="font-mono text-xs tracking-widest text-white/50 uppercase">{link.name}</span>
                      <span className="text-[9px] text-cyan-400 uppercase tracking-widest bg-cyan-900/40 px-2 py-0.5 rounded border border-cyan-500/30">DEV</span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative flex items-center justify-between px-4 py-4 rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-400' 
                        : 'border-transparent text-white/70 active:bg-white/5'
                    }`}
                  >
                    <span className="font-mono text-xs tracking-[0.2em] uppercase">{link.name}</span>
                    {isActive && (
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    )}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── MODAL CTA POPUP ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#010314]/90 overflow-y-auto flex items-start md:items-center justify-center p-0 md:p-4"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="fixed top-[clamp(1rem,3vw,2.5rem)] right-[clamp(1rem,3vw,2.5rem)] z-[110] w-[clamp(2.5rem,5vw,3rem)] h-[clamp(2.5rem,5vw,3rem)] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-2xl"
            >
              <X className="w-[clamp(16px,2vw,20px)] h-[clamp(16px,2vw,20px)]" />
            </button>
            
            {/* The Actual Section - Removed the scale hack since the component is now fluid natively */}
            <div className="w-full flex justify-center items-center py-[15px] md:py-6">
              <DeploymentCTASection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};