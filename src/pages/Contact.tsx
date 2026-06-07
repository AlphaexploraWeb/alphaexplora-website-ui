import { PageTransition } from "../components/motion/PageTransition"
import { Container } from "../components/ui/Container"
import { ArrowRight } from "lucide-react"

export const Contact = () => {
  return (
    <PageTransition className="bg-background min-h-screen pt-48 pb-24 flex items-center">
      <Container className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column: Clean Typography */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-primary font-mono text-sm tracking-widest uppercase mb-8">Initialize</p>
              <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter leading-tight mb-8">
                Let's Build <br /> The Future.
              </h1>
              <p className="text-xl text-muted font-light max-w-md">
                Reach out to discuss enterprise architecture, digital transformation, and scalable infrastructure.
              </p>
            </div>

            <div className="mt-24 space-y-12">
              <div>
                <p className="text-xs font-mono text-foreground/40 mb-2 tracking-widest uppercase">Global Headquarters</p>
                <p className="text-foreground text-lg">100 Tech Innovation Way<br />San Francisco, CA 94105</p>
              </div>
              <div>
                <p className="text-xs font-mono text-foreground/40 mb-2 tracking-widest uppercase">Direct Line</p>
                <p className="text-foreground text-lg">hello@alphaexplora.com<br />+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="bg-surface border border-foreground/10 p-12 lg:p-16 rounded-none relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />
            
            <form className="space-y-12 relative z-10">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative border-b border-foreground/20 pb-2">
                    <label htmlFor="firstName" className="block text-xs font-mono text-foreground/40 tracking-widest uppercase mb-4">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-transparent border-0 text-foreground text-xl placeholder-foreground/20 focus:ring-0 px-0 focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="relative border-b border-foreground/20 pb-2">
                    <label htmlFor="lastName" className="block text-xs font-mono text-foreground/40 tracking-widest uppercase mb-4">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-transparent border-0 text-foreground text-xl placeholder-foreground/20 focus:ring-0 px-0 focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="relative border-b border-foreground/20 pb-2">
                  <label htmlFor="email" className="block text-xs font-mono text-foreground/40 tracking-widest uppercase mb-4">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-0 text-foreground text-xl placeholder-foreground/20 focus:ring-0 px-0 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="relative border-b border-foreground/20 pb-2">
                  <label htmlFor="company" className="block text-xs font-mono text-foreground/40 tracking-widest uppercase mb-4">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full bg-transparent border-0 text-foreground text-xl placeholder-foreground/20 focus:ring-0 px-0 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div className="relative border-b border-foreground/20 pb-2">
                  <label htmlFor="contactNumber" className="block text-xs font-mono text-foreground/40 tracking-widest uppercase mb-4">Contact Number</label>
                  <input 
                    type="tel" 
                    id="contactNumber"
                    className="w-full bg-transparent border-0 text-foreground text-xl placeholder-foreground/20 focus:ring-0 px-0 focus:outline-none"
                    placeholder="Enter your contact number"
                  />
                </div>

                <div className="relative border-b border-foreground/20 pb-2">
                  <label htmlFor="message" className="block text-xs font-mono text-foreground/40 tracking-widest uppercase mb-4">Inquiry Details</label>
                  <textarea 
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-0 text-foreground text-xl placeholder-foreground/20 focus:ring-0 px-0 resize-none focus:outline-none"
                    placeholder="Tell us about your transformation goals..."
                  />
                </div>
              </div>

              <button type="submit" className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300">
                <span className="text-xl font-display font-bold">START YOUR TRANSFORMATION</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>

        </div>
      </Container>
    </PageTransition>
  )
}
