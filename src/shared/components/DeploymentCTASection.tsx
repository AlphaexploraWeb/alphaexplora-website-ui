import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Terminal } from 'lucide-react';

export const DeploymentCTASection = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [consoleText, setConsoleText] = useState('');
  const [selectedService, setSelectedService] = useState('');
  
  useEffect(() => {
    const handleServiceSelection = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setSelectedService(customEvent.detail);
      }
    };
    window.addEventListener('selectService', handleServiceSelection);
    return () => window.removeEventListener('selectService', handleServiceSelection);
  }, []);
  
  useEffect(() => {
    // Cleaner, more professional terminal text
    const text = "> system ready.\n> awaiting project specifications...";
    let i = 0;
    const timer = setInterval(() => {
      setConsoleText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deployment-cta" className="relative w-full min-h-screen bg-transparent py-20 md:py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
      
      {/* ── BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-600/10 rounded-[100%] blur-[150px]" />
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-7xl rounded-[2rem] border border-white/10 bg-[#060b1f]/60 backdrop-blur-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 pointer-events-auto"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        {/* ── LEFT COLUMN: CONTACT INFO ── */}
        <div className="lg:col-span-4 p-10 md:p-14 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-lg mb-6 leading-[1.1]">
              Get In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Touch
              </span>
            </h2>

            <p className="text-blue-100/60 font-light text-sm leading-relaxed mb-12">
              Let's discuss how Alphaexplora can accelerate your digital transformation and drive measurable business outcomes.
            </p>
          </div>

          {/* Contact Details */}
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex items-start gap-4 group cursor-default">
              <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors mt-1">
                <Mail size={16} className="text-blue-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">Email</span>
                <a href="mailto:inquire@alphaexplora.com" className="text-sm font-mono text-cyan-100 hover:text-cyan-400 transition-colors">
                  inquire@alphaexplora.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-default">
              <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors mt-1">
                <Phone size={16} className="text-blue-300 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">Phone</span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-mono text-cyan-100">+63 2 70060042</span>
                  <span className="text-sm font-mono text-cyan-100">+63 915 8101010</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-default">
              <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors mt-1">
                <MapPin size={16} className="text-blue-300 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">Headquarters</span>
                <span className="text-xs font-mono text-cyan-100 leading-relaxed max-w-[200px]">
                  #6 T. Bugallon street,<br />
                  Marikina Heights,<br />
                  Marikina City, Philippines 1810
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: INTERACTIVE FORM ── */}
        <div className="lg:col-span-8 relative bg-[#02040a] p-10 md:p-14 flex flex-col">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-30 z-0" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/60 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
              <div className="flex items-center gap-2 text-white/30">
                <Terminal size={14} />
                {/* Changed from .exe to a cleaner module name */}
                <span className="font-mono text-xs tracking-widest pointer-events-none">contact_module</span>
              </div>
            </div>

            <div className="mb-8 h-12 font-mono text-[10px] md:text-xs text-cyan-400/70 whitespace-pre-line pointer-events-none">
              {consoleText}
              <span className="animate-pulse">_</span>
            </div>

            <form className="flex flex-col gap-6 mt-auto relative z-20" onSubmit={(e) => e.preventDefault()}>
              
              {/* 2-Column Grid for shorter inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'firstName' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'firstName' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="text" placeholder="FIRST NAME" onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'firstName' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
                </div>

                {/* Last Name */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'lastName' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'lastName' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="text" placeholder="LAST NAME" onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'lastName' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
                </div>

                {/* Email */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'email' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'email' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="email" placeholder="EMAIL ADDRESS" onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'email' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
                </div>

                {/* Contact Number */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'phone' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'phone' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="text" placeholder="CONTACT NUMBER" onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'phone' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
                </div>
              </div>

              {/* Full Width Fields */}
              <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'serviceType' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`absolute left-0 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'serviceType' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  onFocus={() => setFocusedField('serviceType')} 
                  onBlur={() => setFocusedField(null)} 
                  className={`relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm focus:outline-none appearance-none cursor-pointer ${selectedService ? 'text-white' : 'text-blue-100/30'}`}
                >
                  <option value="" disabled className="bg-[#02040a] text-blue-100/50">SELECT SERVICE TYPE</option>
                  <option value="Software Integration Solutions" className="bg-[#02040a] text-white">Software Integration Solutions</option>
                  <option value="AI Enablement" className="bg-[#02040a] text-white">AI Enablement</option>
                  <option value="I.T. Consultancy" className="bg-[#02040a] text-white">I.T. Consultancy</option>
                  <option value="Data Analytics" className="bg-[#02040a] text-white">Data Analytics</option>
                  <option value="Managed Services" className="bg-[#02040a] text-white">Managed Services</option>
                  <option value="Digital Marketing" className="bg-[#02040a] text-white">Digital Marketing</option>
                  <option value="Others / General Consultation" className="bg-[#02040a] text-white">Others / General Consultation</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 text-[10px] font-mono">▼</div>
                {focusedField === 'serviceType' && <motion.div layoutId="target" className="absolute right-10 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
              </div>

              <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'company' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`absolute left-0 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'company' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                <input type="text" placeholder="COMPANY NAME" onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm text-white focus:outline-none placeholder:text-blue-100/30" />
                {focusedField === 'company' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
              </div>

              <div className={`relative flex items-start border-b transition-colors duration-300 mt-2 ${focusedField === 'details' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`absolute left-0 top-3 font-mono text-sm pointer-events-none transition-colors ${focusedField === 'details' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                <textarea placeholder="INQUIRY DETAILS" rows={3} onFocus={() => setFocusedField('details')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-3 pl-6 pr-4 font-mono text-sm text-white focus:outline-none placeholder:text-blue-100/30 resize-none" />
                {focusedField === 'details' && <motion.div layoutId="target" className="absolute right-2 top-3 text-cyan-400 font-mono text-xs animate-pulse pointer-events-none">[ ]</motion.div>}
              </div>

              {/* Submit Button - Removed the .exe and underscores */}
              <button className="mt-4 relative group/btn overflow-hidden rounded-md border border-cyan-500/30 bg-cyan-950/30 px-8 py-5 flex items-center justify-between transition-all hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] z-20">
                <div className="flex items-center gap-4 pointer-events-none">
                  <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 group-hover/btn:text-white transition-colors">
                    Start Your Transformation
                  </span>
                </div>
                <Send size={16} className="text-cyan-500 group-hover/btn:text-cyan-300 transition-colors group-hover/btn:translate-x-1 pointer-events-none shrink-0" />
                
                <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover/btn:animate-[glare_1.5s_ease-in-out_infinite] pointer-events-none" />
              </button>

            </form>
          </div>
        </div>

      </motion.div>

      <style>{`
        @keyframes glare {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};