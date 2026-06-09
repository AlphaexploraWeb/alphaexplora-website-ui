import { useHomeViewModel } from "../viewModels/useHomeViewModel"
import { ClientsSection } from "./ClientsSection"
import { ContactSection } from "./ContactSection"
import { EnterpriseProofSection } from "./EnterpriseProofSection"
import { HeroSection } from "./HeroSection"
import { InsightsSection } from "./InsightsSection"
import { PhilosophySection } from "./PhilosophySection"
import { ProjectsSection } from "./ProjectsSection"
import { ServicesSection } from "./ServicesSection"
import { WhyChooseSection } from "./WhyChooseSection"

export default function Home() {
  const {
    services,
    insights,
    benefits,
    heroHighlights,
    deliveryJourney,
    trustSignals,
    featuredCapabilities,
    partnerLogos,
    currentProjects,
  } = useHomeViewModel()

  return (
    <main>
      <HeroSection highlights={heroHighlights} journey={deliveryJourney} />
      <EnterpriseProofSection
        capabilities={featuredCapabilities}
        trustSignals={trustSignals}
      />
      <ClientsSection clients={partnerLogos} />
      <PhilosophySection />
      <ServicesSection services={services} />
      <ProjectsSection projects={currentProjects} />
      <WhyChooseSection benefits={benefits} />
      <InsightsSection insights={insights} />
      <ContactSection />
    </main>
  )
}
