import { ArrowUpRight } from 'lucide-react';
import alphaLogo from '../../assets/alpha-logo-full.png';

type BrandIconProps = {
  size?: number;
};

const FacebookIcon = ({ size = 18 }: BrandIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.761 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683v1.297h3.92l-.673 3.667h-3.247v7.98H9.101Z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: BrandIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: BrandIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5A1.25 1.25 0 0 1 18.5 6.75 1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#02040a] border-t border-white/5 pt-12 pb-8 px-4 md:px-12 lg:px-24 overflow-hidden z-10">
      {/* ── BACKGROUND GLOW ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
        
        {/* ── TOP ROW: QUOTE & RETURN TO TOP ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-md">
            <p className="text-xs text-blue-100/60 font-light leading-relaxed italic">
              "For every house is built by someone, but God is the builder of everything."
            </p>
            <span className="text-cyan-400/80 font-mono text-[9px] tracking-widest not-italic uppercase mt-2 block">
              — Hebrews 3:4
            </span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-200 group-hover:text-cyan-300 transition-colors">
              Return to Top
            </span>
            <ArrowUpRight size={14} className="text-blue-500 group-hover:text-cyan-400 transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* ── MIDDLE ROW: HORIZONTAL DIRECTORY STRIP ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 border-y border-white/10 gap-6 lg:gap-4">

{/* 1. BRAND */}
<div className="flex-shrink-0 mr-4">
    <img 
      src={alphaLogo} 
      alt="A" 
                className="h-[clamp(45px,6vw,70px)] object-contain inline-block mr-[5px] opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all translate-y-[1px]" 
    />
</div>

          <div className="hidden lg:block w-[1px] h-10 bg-white/10" />

          {/* 2. HEADQUARTERS */}
          <div className="flex-1 max-w-[280px]">
            <span className="text-[12px] text-blue-100/70 leading-relaxed block">
              #6 T. Bugallon street, Marikina Heights, Marikina City, Philippines 1810
            </span>
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-white/10" />

          {/* 3. PHONE */}
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-blue-100/70">MOB: +63 915 8101010</span>
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-white/10" />

          {/* 4. EMAIL */}
          <div className="flex flex-col">
            <a href="mailto:inquire@alphaexplora.com" className="text-[12px] text-blue-100/70 hover:text-cyan-400 transition-colors">
              inquire@alphaexplora.com
            </a>
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-white/10" />

          {/* 5. NETWORK LINKS */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61581265528238" target="_blank" rel="noopener noreferrer" className="text-blue-200/50 hover:text-cyan-400 transition-colors">
              <FacebookIcon size={18} />
            </a>
            <a href="https://ph.linkedin.com/company/alphaexplora-information-technology-services/" target="_blank" rel="noopener noreferrer" className="text-blue-200/50 hover:text-cyan-400 transition-colors">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://www.instagram.com/alphaexplora_it/" target="_blank" rel="noopener noreferrer" className="text-blue-200/50 hover:text-cyan-400 transition-colors">
              <InstagramIcon size={18} />
            </a>
          </div>

        </div>

        {/* ── BOTTOM ROW: COPYRIGHT ── */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-2">
          <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
            © {currentYear} Alphaexplora. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
