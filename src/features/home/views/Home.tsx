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
    services,
    insights,
    benefits,
    heroHighlights,
    partnerLogos,
    currentProjects,
  } = useHomeViewModel()

  return (
    <>
      <SectionTimeline />
      <main>
        <HeroSection highlights={heroHighlights} />
        <ClientsSection clients={partnerLogos} />
        <PhilosophySection />
        <ServicesSection services={services} />
        <ProjectsSection projects={currentProjects} />
        <WhyChooseSection benefits={benefits} />
        <InsightsSection insights={insights} />
        <ContactSection />
      </main>
    </>
  )
}
