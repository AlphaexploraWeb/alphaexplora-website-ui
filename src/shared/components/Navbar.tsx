import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../utils/cn";
import { MagneticLink } from "./motion/Magnetic";

const NAV_ITEMS = [
  { label: "Clients", to: "/clients" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

function navLinkClass({ isActive }: { isActive: boolean }) {
  return cn(
    "ae-focus inline-flex min-h-11 items-center rounded-full px-4 font-body text-xs font-bold transition-colors duration-300 ease-fluid",
    isActive
      ? "bg-cyan/10 text-cyan"
      : "text-mist hover:bg-white/[0.045] hover:text-starlight",
  );
}

export default memo(function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav aria-label="Primary navigation" className="mx-auto max-w-7xl">
        <div
          className={cn(
            "ae-surface flex min-h-14 items-center justify-between gap-4 rounded-full",
            "bg-panel-strong px-4 sm:px-5",
          )}
        >
          <Link
            to="/"
            className="ae-focus inline-flex min-h-11 items-center rounded-full px-2 font-display text-sm font-black text-starlight"
          >
            Alphaexplora
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <MagneticLink
            to="/contact"
            variant="primary"
            glow="blue"
            className="min-h-11 px-4 shadow-[0_0_30px_rgb(63_115_255_/_0.34)]"
          >
            Start
          </MagneticLink>
        </div>

        <div className="ae-surface mt-3 flex gap-2 overflow-x-auto rounded-full bg-panel p-1 md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
});

