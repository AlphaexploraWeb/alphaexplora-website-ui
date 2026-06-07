import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PageTransition } from "../components/motion/PageTransition"
import { Container } from "../components/ui/Container"

const articles = [
  { title: "The Future of Cloud Architecture in Enterprise Scale", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" },
  { title: "Zero Trust Security Models Explained", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" },
  { title: "AI Integration Strategies for Legacy Systems", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80" },
  { title: "Data Warehousing Best Practices for 2024", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80" }
]

export const Insights = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Create a huge scrollable container to drive the horizontal track
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <PageTransition className="bg-background">
      <section ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-background">
          
          <Container className="mb-16">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter">
              Industry Insights
            </h1>
            <p className="text-muted text-xl mt-4 max-w-lg">
              Perspectives from our engineering leadership on the evolving technological landscape.
            </p>
          </Container>

          <motion.div style={{ x: xTransform }} className="flex gap-12 px-4 md:px-12 lg:px-24 w-max">
            {articles.map((article, i) => (
              <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[40vw] flex flex-col group cursor-pointer">
                <div className="w-full aspect-[4/3] overflow-hidden bg-surface mb-6 relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>
                <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted mb-4">
                  <span>0{i + 1}</span>
                  <div className="flex-1 h-[1px] bg-foreground/10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display text-foreground group-hover:text-primary transition-colors duration-500">
                  {article.title}
                </h3>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </PageTransition>
  )
}
