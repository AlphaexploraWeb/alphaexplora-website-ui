import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PageTransition } from "../components/motion/PageTransition"
import { Container } from "../components/ui/Container"
import { Monitor, Code2, LineChart, Shield, Cloud, Briefcase } from "lucide-react"

const services = [
  { icon: <Briefcase size={32} />, title: "I.T. Consultancy", desc: "Strategic architecture and digital transformation." },
  { icon: <Code2 size={32} />, title: "Software Solutions", desc: "Custom, scalable enterprise software development." },
  { icon: <LineChart size={32} />, title: "Data Analytics", desc: "Transforming raw data into actionable intelligence." },
  { icon: <Shield size={32} />, title: "Cybersecurity", desc: "Enterprise-grade protection and compliance." },
  { icon: <Cloud size={32} />, title: "Cloud Infrastructure", desc: "Resilient, highly available cloud engineering." },
  { icon: <Monitor size={32} />, title: "Managed IT Support", desc: "24/7 proactive technical operations." }
]

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })

  return (
    <PageTransition className="bg-background">
      <Container className="pt-48 pb-24">
        <div className="max-w-4xl mb-32">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-8">Service Matrix</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter">
            Architecting the <br /> Digital Future.
          </h1>
        </div>
      </Container>

      {/* Highly Structured Sticky Scroll */}
      <section ref={containerRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen w-full flex items-center bg-background">
          <Container className="flex w-full h-full items-center">
            
            {/* Left side: Static text, high hierarchy */}
            <div className="w-1/2 pr-12 hidden md:block">
              <h2 className="text-4xl font-display text-foreground/80 leading-tight">
                Our principal engineers deliver uncompromising solutions tailored strictly to elite enterprise demands.
              </h2>
            </div>

            {/* Right side: Scrolling List controlled by scrollYProgress */}
            <div className="w-full md:w-1/2 h-[60vh] relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
              
              <motion.div 
                className="flex flex-col gap-12"
                style={{ y: useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]) }}
              >
                {services.map((s, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-foreground/20 group-hover:text-primary transition-colors duration-500 mt-2">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-foreground/40 group-hover:text-foreground transition-colors duration-500 mb-2">
                        {s.title}
                      </h3>
                      <p className="text-lg text-muted group-hover:text-foreground/90 transition-colors duration-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
          </Container>
        </div>
      </section>
    </PageTransition>
  )
}
