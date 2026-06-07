import { PageTransition } from "../components/motion/PageTransition"
import { TextReveal } from "../components/motion/TextReveal"
import { Parallax } from "../components/motion/Parallax"
import { Container } from "../components/ui/Container"

export const About = () => {
  return (
    <PageTransition className="pt-32 pb-24 md:pt-48 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Asymmetric Left - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-48">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <TextReveal text="Technology should empower," />
              <span className="text-foreground/40 block mt-2">
                <TextReveal text="not exclude." delay={0.2} />
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
          </div>

          {/* Asymmetric Right - Scrolling Content */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-24">
            <Parallax offset={20}>
              <p className="text-2xl md:text-4xl font-display font-light text-foreground/90 leading-relaxed">
                Because IT is a Right.
              </p>
              <p className="mt-8 text-lg text-muted leading-relaxed">
                At Alphaexplora, we don't just build tech — we build with purpose. We believe every organization, no matter its scale, deserves the power of modern, secure, and scalable technology.
              </p>
            </Parallax>

            <Parallax offset={40} className="relative aspect-square w-full md:w-4/5 ml-auto overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-primary-hover/10 mix-blend-screen group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
                alt="Technology abstract" 
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </Parallax>

            <Parallax offset={10}>
              <p className="text-xl text-foreground/90 font-light leading-relaxed">
                This principle guides every system we design, every client relationship we nurture, and every solution we deploy.
              </p>
            </Parallax>
          </div>
        </div>
      </Container>
    </PageTransition>
  )
}
