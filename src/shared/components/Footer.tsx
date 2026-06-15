import { ArrowUpRight } from 'lucide-react';

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
    <footer className="relative w-full bg-[#02040a] border-t border-white/5 pt-20 pb-10 px-4 md:px-12 lg:px-24 overflow-hidden z-10">
      {/* ── BACKGROUND GLOW ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── TOP SECTION: LOGO & BACK TO TOP ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase drop-shadow-md">
              Alpha<span className="text-cyan-400">explora</span>.
            </h2>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-200 group-hover:text-cyan-300 transition-colors">
              Return to Top
            </span>
            <ArrowUpRight size={14} className="text-blue-500 group-hover:text-cyan-400 transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* ── MIDDLE SECTION: LINKS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Mission */}
          <div className="lg:col-span-1">
            <p className="text-sm text-blue-100/70 font-light leading-relaxed max-w-sm italic">
              "For every house is built by someone, but God is the builder of everything."
              <br />
              <span className="text-cyan-400/80 font-mono text-[10px] tracking-widest not-italic uppercase mt-2 block">
                — Hebrews 3:4
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-2">Navigation</h3>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Platform</a>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Core Matrix</a>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Case Studies</a>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Company</a>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-2">Modules</h3>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Agentic AI Routing</a>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Edge Infrastructure</a>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Data Analytics</a>
            <a href="#" className="text-sm text-blue-200/70 hover:text-cyan-400 transition-colors w-max">Security Systems</a>
          </div>

          
          {/* Socials & Status */}
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1">Network Links</h3>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61581265528238" target="_blank" rel="noopener noreferrer" aria-label="Alphaexplora on Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 text-blue-200/50 transition-all duration-300">
                <FacebookIcon size={18} />
              </a>
              <a href="https://ph.linkedin.com/company/alphaexplora-information-technology-services/" target="_blank" rel="noopener noreferrer" aria-label="Alphaexplora on LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 text-blue-200/50 transition-all duration-300">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://www.instagram.com/alphaexplora_it/" target="_blank" rel="noopener noreferrer" aria-label="Alphaexplora on Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 text-blue-200/50 transition-all duration-300">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM SECTION: COPYRIGHT & LEGAL ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
            © {currentYear} Alphaexplora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[10px] text-white/30 tracking-widest uppercase hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="font-mono text-[10px] text-white/30 tracking-widest uppercase hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
