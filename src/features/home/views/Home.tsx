import { useHomeViewModel } from "../viewModels/useHomeViewModel"
import { ClientsSection } from "./ClientsSection"
import { ContactSection } from "./ContactSection"
import { HeroSection } from "./HeroSection"
import { PhilosophySection } from "./PhilosophySection"
import { ProjectsSection } from "./ProjectsSection"
import { ServicesSection } from "./ServicesSection"

export default function Home() {
  const {
    services,
    heroHighlights,
    partnerLogos,
    currentProjects,
  } = useHomeViewModel()
  const projectCategoryCount = new Set(
    currentProjects.map((project) => project.category),
  ).size

  return (
    <main>
      <HeroSection
        highlights={heroHighlights}
        projectCount={currentProjects.length}
        projectCategoryCount={projectCategoryCount}
      />
      <ServicesSection services={services} />
      <PhilosophySection />
      <ProjectsSection projects={currentProjects} />
      <ClientsSection clients={partnerLogos} />
      <ContactSection />
    </main>
  )
}
