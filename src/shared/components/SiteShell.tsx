import { AnimatePresence, motion } from "framer-motion"
import { Outlet, useLocation } from "react-router-dom"
import { FlowLineLayer } from "../../features/home/views/FlowLineLayer"
import { contactDetails, navGroups, navLinks, services } from "../models/site"
import { SiteFooter } from "./SiteFooter"
import { SiteHeader } from "./SiteHeader"
import { SmoothScroll } from "./SmoothScroll"

export function SiteShell() {
  const location = useLocation()

  return (
    <div className="ae-shell">
      <SmoothScroll />
      <FlowLineLayer />
      <SiteHeader groups={navGroups} />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <SiteFooter
        links={navLinks}
        services={services}
        contactDetails={contactDetails}
      />
    </div>
  )
}
