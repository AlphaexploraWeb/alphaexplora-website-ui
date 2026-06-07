import * as React from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Magnetic } from "../motion/Magnetic"

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Container>
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-2xl tracking-tighter text-foreground">
              Alpha<span className="text-primary group-hover:text-primary-hover transition-colors duration-300">explora</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-12">
            {[
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Insights", path: "/insights" }
            ].map((item) => (
              <div key={item.name} className="relative">
                <Link 
                  to={item.path} 
                  className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                </Link>
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute left-0 right-0 -bottom-1 h-px bg-primary" 
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center">
            <Magnetic strength={20}>
              <Link to="/contact">
                <Button variant="outline" className="hidden sm:inline-flex border-white/10 hover:border-primary/50 hover:bg-primary/10 rounded-full px-8 py-6 h-auto transition-all duration-300">
                  Let's Talk
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </Container>
    </motion.header>
  )
}
