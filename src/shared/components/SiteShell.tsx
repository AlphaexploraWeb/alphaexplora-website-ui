import { Outlet } from "react-router-dom"
import { FlowLineLayer } from "../../features/home/views/FlowLineLayer"
import { contactDetails, navGroups, navLinks, services } from "../models/site"
import { SiteFooter } from "./SiteFooter"
import { SiteHeader } from "./SiteHeader"

export function SiteShell() {
  return (
    <div className="ae-shell">
      <FlowLineLayer />
      <SiteHeader groups={navGroups} />
      <Outlet />
      <SiteFooter
        links={navLinks}
        services={services}
        contactDetails={contactDetails}
      />
    </div>
  )
}
