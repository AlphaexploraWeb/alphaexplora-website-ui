import { Container } from "./Container"
import { companyDetails } from "../../data/content"

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
             <span className="font-display font-bold text-2xl tracking-tight text-white mb-6 inline-block">
              Alpha<span className="text-primary">explora</span>
            </span>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-8">
              At the intersection of innovation and enterprise needs, we architect solutions that don't just meet today's challenges but also anticipate tomorrow's opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href={`mailto:${companyDetails.email}`} className="hover:text-primary transition-colors">{companyDetails.email}</a></li>
              <li>{companyDetails.phone1}</li>
              <li>{companyDetails.phone2}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Headquarters</h4>
            <p className="text-sm text-muted leading-relaxed">
              {companyDetails.address}
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">{companyDetails.copyright}</p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
