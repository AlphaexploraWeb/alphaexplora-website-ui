import { memo } from 'react';
import { motion } from 'framer-motion';
import { ALL_CLIENTS } from '../../../shared/models/apiService';

export const ClientTickerSection = memo(function ClientTickerSection() {
  // Duplicate array to create a seamless infinite loop
  const tickerItems = [...ALL_CLIENTS, ...ALL_CLIENTS];

  return (
    <section className="relative z-20 flex w-full flex-col items-center justify-center border-y border-white/5 bg-[#010511] py-12 overflow-hidden">
      
      {/* Label */}
      <div className="mb-10 text-center">
        <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          Trusted by high-growth enterprises & MSMEs
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex w-full max-w-[100vw] overflow-hidden">
        {/* Fading Edges (Left & Right) */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#010511] to-transparent sm:w-40" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#010511] to-transparent sm:w-40" />

        {/* Motion Track */}
        <motion.div
          className="flex min-w-max items-center gap-20 pl-20 pr-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {tickerItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center justify-center opacity-40 transition-opacity duration-300 hover:opacity-100"
            >
              {client.logoUrl ? (
                <img src={client.logoUrl} alt={client.name} className="h-8 object-contain" />
              ) : (
                <span className="font-[var(--font-display)] text-lg font-bold tracking-widest text-slate-200 whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});