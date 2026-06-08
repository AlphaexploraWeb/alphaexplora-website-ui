import { SiteFooter } from "../../../shared/components/SiteFooter"
import { SiteHeader } from "../../../shared/components/SiteHeader"
import { useHomeViewModel } from "../viewModels/useHomeViewModel"
import { ClientsSection } from "./ClientsSection"
import { ContactSection } from "./ContactSection"
import { HeroSection } from "./HeroSection"
import { InsightsSection } from "./InsightsSection"
import { PhilosophySection } from "./PhilosophySection"
import { ProjectsSection } from "./ProjectsSection"
import { SectionTimeline } from "./SectionTimeline"
import { ServicesSection } from "./ServicesSection"
import { WhyChooseSection } from "./WhyChooseSection"

export default function Home() {
  const {
    navLinks,
    services,
    insights,
    benefits,
    contactDetails,
    heroHighlights,
    navGroups,
    partnerLogos,
    currentProjects,
  } = useHomeViewModel()

  return (
    <div className="ae-shell">
      <SiteHeader groups={navGroups} />
      <SectionTimeline />
      <main>
        <HeroSection
          highlights={heroHighlights}
        />
        <ClientsSection clients={partnerLogos} />
        <PhilosophySection />
        <ServicesSection services={services} />
        <ProjectsSection projects={currentProjects} />
        <WhyChooseSection benefits={benefits} />
        <InsightsSection insights={insights} />
        <ContactSection />
      </main>
      <SiteFooter
        links={navLinks}
        services={services}
        contactDetails={contactDetails}
      />
    </div>
  )
}
