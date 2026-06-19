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
    <section id="deployment-cta" className="relative w-full bg-transparent flex flex-col justify-center items-center overflow-hidden py-4 px-[clamp(12px,2vw,1.5rem)] md:py-6">
      
      {/* ── BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[1400px] my-3 md:my-5 rounded-[clamp(1rem,2vw,1.5rem)] border border-white/10 bg-[#010314]/40 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-12 pointer-events-auto"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

        {/* ── LEFT COLUMN: CONTACT INFO ── */}
        <div className="lg:col-span-5 xl:col-span-4 p-[clamp(1rem,3vw,2rem)] flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10">

          <div className="relative z-10">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-black uppercase tracking-tight text-white drop-shadow-lg mb-[clamp(0.5rem,1vw,0.75rem)] leading-[1.05]">
              Get In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Touch
              </span>
            </h2>

            <p className="text-blue-100/60 font-light text-[clamp(0.7rem,1.2vw,0.8rem)] leading-relaxed mb-[clamp(1rem,2vw,1.5rem)] max-w-md">
              Let's discuss how Alphaexplora can accelerate your digital transformation and drive measurable business outcomes.
            </p>
          </div>

          {/* Contact Details */}
          <div className="relative z-10 flex flex-col gap-[clamp(0.75rem,1.5vw,1.25rem)]">
            <div className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)] group cursor-default">
              <div className="w-[clamp(2rem,3.5vw,2.5rem)] h-[clamp(2rem,3.5vw,2.5rem)] shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors mt-0.5">
                <Mail className="w-[clamp(14px,1.5vw,16px)] h-[clamp(14px,1.5vw,16px)] text-blue-300 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden w-full">
                <span className="font-mono text-[clamp(8px,1vw,10px)] text-white/50 tracking-widest uppercase">Email</span>
                <a href="mailto:inquire@alphaexplora.com" className="text-[clamp(0.75rem,1.25vw,0.875rem)] font-mono text-cyan-100 hover:text-cyan-400 transition-colors truncate block w-full">
                  inquire@alphaexplora.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)] group cursor-default">
              <div className="w-[clamp(2rem,3.5vw,2.5rem)] h-[clamp(2rem,3.5vw,2.5rem)] shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors mt-0.5">
                <Phone className="w-[clamp(14px,1.5vw,16px)] h-[clamp(14px,1.5vw,16px)] text-blue-300 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[clamp(8px,1vw,10px)] text-white/50 tracking-widest uppercase">Phone</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[clamp(0.75rem,1.25vw,0.875rem)] font-mono text-cyan-100">+63 915 8101010</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)] group cursor-default">
              <div className="w-[clamp(2rem,3.5vw,2.5rem)] h-[clamp(2rem,3.5vw,2.5rem)] shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors mt-0.5">
                <MapPin className="w-[clamp(14px,1.5vw,16px)] h-[clamp(14px,1.5vw,16px)] text-blue-300 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[clamp(8px,1vw,10px)] text-white/50 tracking-widest uppercase">Headquarters</span>
                <span className="text-[clamp(0.7rem,1.15vw,0.75rem)] font-mono text-cyan-100 leading-relaxed max-w-[220px]">
                  #6 T. Bugallon street,<br />
                  Marikina Heights,<br />
                  Marikina City, Philippines 1810
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: INTERACTIVE FORM ── */}
        <div className="lg:col-span-7 xl:col-span-8 relative bg-white/[0.02] p-[clamp(1rem,3vw,2.5rem)] flex flex-col border-l border-white/5">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-30 z-0" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-[clamp(0.5rem,1vw,0.75rem)] border-b border-white/10 pb-[clamp(0.4rem,0.8vw,0.6rem)]">
              <div className="flex gap-[clamp(4px,1vw,8px)]">
                <div className="w-[clamp(10px,1.5vw,12px)] h-[clamp(10px,1.5vw,12px)] rounded-full bg-red-500/60 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                <div className="w-[clamp(10px,1.5vw,12px)] h-[clamp(10px,1.5vw,12px)] rounded-full bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                <div className="w-[clamp(10px,1.5vw,12px)] h-[clamp(10px,1.5vw,12px)] rounded-full bg-green-500/60 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
              <div className="flex items-center gap-2 text-white/30">
                <Terminal className="w-[clamp(12px,1.5vw,14px)] h-[clamp(12px,1.5vw,14px)]" />
                <span className="font-mono text-[clamp(9px,1.2vw,12px)] tracking-widest pointer-events-none">contact_module</span>
              </div>
            </div>

            <div className="mb-[clamp(0.5rem,1.5vw,1rem)] min-h-[2rem] font-mono text-[clamp(9px,1vw,11px)] text-cyan-400/70 whitespace-pre-line pointer-events-none leading-relaxed">
              {consoleText}
              <span className="animate-pulse">_</span>
            </div>

            <form className="flex flex-col gap-[clamp(0.5rem,1.25vw,0.875rem)] mt-auto relative z-20" onSubmit={(e) => e.preventDefault()}>
              
              {/* 2-Column Grid for shorter inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(0.5rem,1.25vw,0.875rem)]">
                {/* First Name */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'firstName' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'firstName' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="text" placeholder="FIRST NAME" onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-4 font-mono text-[clamp(11px,1.25vw,14px)] text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'firstName' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
                </div>

                {/* Last Name */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'lastName' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'lastName' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="text" placeholder="LAST NAME" onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-4 font-mono text-[clamp(11px,1.25vw,14px)] text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'lastName' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
                </div>

                {/* Email */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'email' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'email' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="email" placeholder="EMAIL ADDRESS" onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-4 font-mono text-[clamp(11px,1.25vw,14px)] text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'email' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
                </div>

                {/* Contact Number */}
                <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'phone' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`absolute left-0 font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'phone' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                  <input type="text" placeholder="CONTACT NUMBER" onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-4 font-mono text-[clamp(11px,1.25vw,14px)] text-white focus:outline-none placeholder:text-blue-100/30" />
                  {focusedField === 'phone' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
                </div>
              </div>

              {/* Full Width Fields */}
              <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'serviceType' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`absolute left-0 font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'serviceType' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  onFocus={() => setFocusedField('serviceType')} 
                  onBlur={() => setFocusedField(null)} 
                  className={`relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-[clamp(1.5rem,3vw,2rem)] font-mono text-[clamp(10px,1.25vw,14px)] focus:outline-none appearance-none cursor-pointer ${selectedService ? 'text-white' : 'text-blue-100/30'}`}
                >
                  <option value="" disabled className="bg-[#010314] text-blue-100/50">SELECT SERVICE TYPE</option>
                  <option value="Software Integration Solutions" className="bg-[#010314] text-white">Software Integration Solutions</option>
                  <option value="AI Enablement" className="bg-[#010314] text-white">AI Enablement</option>
                  <option value="I.T. Consultancy" className="bg-[#010314] text-white">I.T. Consultancy</option>
                  <option value="Data Analytics" className="bg-[#010314] text-white">Data Analytics</option>
                  <option value="Managed Services" className="bg-[#010314] text-white">Managed Services</option>
                  <option value="Digital Marketing" className="bg-[#010314] text-white">Digital Marketing</option>
                  <option value="Others / General Consultation" className="bg-[#010314] text-white">Others / General Consultation</option>
                </select>
                <div className="absolute right-[clamp(0.5rem,1.5vw,1rem)] top-1/2 -translate-y-1/2 pointer-events-none text-white/30 text-[clamp(8px,1vw,10px)] font-mono">▼</div>
                {focusedField === 'serviceType' && <motion.div layoutId="target" className="absolute right-[clamp(2rem,4vw,2.5rem)] text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
              </div>

              <div className={`relative flex items-center border-b transition-colors duration-300 ${focusedField === 'company' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`absolute left-0 font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'company' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                <input type="text" placeholder="COMPANY NAME" onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-4 font-mono text-[clamp(11px,1.25vw,14px)] text-white focus:outline-none placeholder:text-blue-100/30" />
                {focusedField === 'company' && <motion.div layoutId="target" className="absolute right-2 text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
              </div>

              <div className={`relative flex items-start border-b transition-colors duration-300 mt-[clamp(0.25rem,1vw,0.5rem)] ${focusedField === 'details' ? 'border-cyan-400 bg-cyan-400/5' : 'border-white/10 hover:border-white/30'}`}>
                <span className={`absolute left-0 top-[clamp(0.6rem,1.5vw,0.75rem)] font-mono text-[clamp(12px,1.5vw,14px)] pointer-events-none transition-colors ${focusedField === 'details' ? 'text-cyan-400' : 'text-blue-500/50'}`}>{'>'}</span>
                <textarea placeholder="INQUIRY DETAILS" rows={2} onFocus={() => setFocusedField('details')} onBlur={() => setFocusedField(null)} className="relative z-10 w-full bg-transparent py-[clamp(0.6rem,1.5vw,0.75rem)] pl-[clamp(1.25rem,2.5vw,1.5rem)] pr-4 font-mono text-[clamp(11px,1.25vw,14px)] text-white focus:outline-none placeholder:text-blue-100/30 resize-none" />
                {focusedField === 'details' && <motion.div layoutId="target" className="absolute right-2 top-[clamp(0.6rem,1.5vw,0.75rem)] text-cyan-400 font-mono text-[clamp(10px,1.25vw,12px)] animate-pulse pointer-events-none hidden sm:block">[ ]</motion.div>}
              </div>

              {/* Submit Button */}
              <button className="mt-[clamp(0.25rem,1vw,0.5rem)] relative group/btn overflow-hidden rounded-md border border-cyan-500/30 bg-cyan-950/30 px-[clamp(1.25rem,2.5vw,1.75rem)] py-[clamp(0.6rem,1.5vw,0.875rem)] flex items-center justify-between transition-all hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] z-20">
                <div className="flex items-center gap-[clamp(0.5rem,1.5vw,1rem)] pointer-events-none">
                  <span className="font-mono text-[clamp(10px,1.5vw,14px)] font-bold uppercase tracking-[0.15em] text-cyan-400 group-hover/btn:text-white transition-colors">
                    Start Your Transformation
                  </span>
                </div>
                <Send className="w-[clamp(14px,1.5vw,16px)] h-[clamp(14px,1.5vw,16px)] text-cyan-500 group-hover/btn:text-cyan-300 transition-colors group-hover/btn:translate-x-1 pointer-events-none shrink-0" />
                
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