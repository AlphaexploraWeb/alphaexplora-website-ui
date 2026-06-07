import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PageTransition } from "../components/motion/PageTransition"
import { Container } from "../components/ui/Container"
import { ArrowDown } from "lucide-react"

const clients = [
  "Study & Office Hub",
  "GlobalBIM Engineering Services",
  "El Gibhor Ministries",
  "Azvercon",
  "Quantum Computing Labs",
  "Vanguard Infrastructure"
]

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Horizontal scroll transform for the clients track
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  const clipMaskVariant: any = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", y: 50 },
    visible: (i: number) => ({
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
      y: 0,
      transition: { delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    })
  }

  return (
    <PageTransition className="bg-background">
      
      {/* Calm, highly legible Hero section */}
      <section className="h-screen w-full flex flex-col justify-center relative px-4 md:px-12 lg:px-24">
        {/* Volumetric Radial Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[250px]" 
          />
        </div>

        <div className="relative z-10 max-w-7xl">
          <motion.div custom={0} initial="hidden" animate="visible" variants={clipMaskVariant}>
            <p className="text-foreground/60 font-mono text-sm tracking-[0.2em] uppercase mb-12">
              Future-Proof Infrastructure
            </p>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-8xl lg:text-[140px] font-bold text-foreground leading-[0.85] tracking-tighter mix-blend-difference">
            <motion.div custom={1} initial="hidden" animate="visible" variants={clipMaskVariant} className="overflow-hidden">
              <span className="block">Technology</span>
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={clipMaskVariant} className="overflow-hidden">
              <span className="block text-primary">Should Empower.</span>
            </motion.div>
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-12 flex items-center gap-4 text-foreground/40"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
          <span className="text-sm font-medium uppercase tracking-widest">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Horizontal Parallax Narrative for Clients */}
      <section ref={containerRef} className="h-[200vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center border-t border-white/5 bg-surface">
          <Container className="mb-12">
            <h2 className="text-3xl font-display text-foreground mb-2">Our Partners</h2>
            <p className="text-foreground/40 max-w-sm">Organizations trusting Alphaexplora with their digital revolution.</p>
          </Container>
          
          <motion.div style={{ x: xTransform }} className="flex items-center gap-24 px-12 md:px-24 w-max">
            {clients.map((client, idx) => (
              <div key={idx} className="flex items-center gap-24">
                <span className="text-6xl md:text-8xl font-display font-bold text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
                  {client}
                </span>
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </PageTransition>
  )
}
