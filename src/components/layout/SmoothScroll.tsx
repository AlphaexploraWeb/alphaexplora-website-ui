import * as React from "react"
import Lenis from "lenis"
import { useLocation } from "react-router-dom"

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    // Reset scroll on route change
    window.scrollTo(0, 0)
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [pathname])

  return <>{children}</>
}
