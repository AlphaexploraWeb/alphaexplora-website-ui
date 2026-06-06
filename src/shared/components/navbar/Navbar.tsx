import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = memo(function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
      className="fixed left-1/2 top-6 z-[60] flex h-14 -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#050B1A]/40 px-6 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl w-[90%] max-w-5xl"
    >
      <Link to="/" className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#00D9D9] shadow-[0_0_10px_#00D9D9]" />
        <span className="font-[var(--font-display),sans-serif] text-xs font-bold uppercase tracking-widest text-white">
          Alphaexplora
        </span>
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {["Solutions", "Ecosystem", "Insights"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 transition-colors hover:text-[#00D9D9]"
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="rounded-full bg-[#0056FF] px-6 py-2 text-[10px] font-extrabold uppercase tracking-widest text-white transition-all hover:bg-[#0056FF]/80 hover:shadow-[0_0_20px_rgba(0,86,255,0.4)]">
        Get Started
      </button>
    </motion.nav>
  );
});