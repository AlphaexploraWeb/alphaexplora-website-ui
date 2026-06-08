import { useCallback, useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { NavGroup } from "../models/homepage"
import { Icon } from "./Icon"

interface SiteHeaderProps {
  groups: NavGroup[]
}

const getTopLevelLabel = (group: NavGroup) =>
  group.title === "Alphaexplora" ? "Company" : group.title

export function SiteHeader({ groups }: SiteHeaderProps) {
  const [isMegaOpen, setIsMegaOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [activeLinkIndex, setActiveLinkIndex] = useState(0)
  const [isHeaderRevealed, setIsHeaderRevealed] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const closeTimerRef = useRef<number | null>(null)
  const revealTimerRef = useRef<number | null>(null)
  const lastScrollYRef = useRef(0)
  const isHoveringHeaderRef = useRef(false)
  const menuId = useId()
  const activeGroup = groups[activeGroupIndex] ?? groups[0]
  const activeLink = activeGroup?.links[activeLinkIndex] ?? activeGroup?.links[0]

  const clearMegaClose = useCallback(() => {
    if (closeTimerRef.current === null) return
    window.clearTimeout(closeTimerRef.current)
    closeTimerRef.current = null
  }, [])

  const activateGroup = (index: number) => {
    setActiveGroupIndex(index)
    setActiveLinkIndex(0)
  }

  const openMega = (index: number) => {
    clearMegaClose()
    activateGroup(index)
    setIsMegaOpen(true)
  }

  const handleLinkClick = (index: number) => {
    if (isMegaOpen && activeGroupIndex === index) {
      closeMenus()
    } else {
      openMega(index)
    }
  }

  const scheduleMegaClose = () => {
    clearMegaClose()
    closeTimerRef.current = window.setTimeout(() => {
      setIsMegaOpen(false)
      closeTimerRef.current = null
    }, 140)
  }

  const handleHeaderEnter = useCallback(() => {
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current)
      revealTimerRef.current = null
    }
    setIsHeaderRevealed(true)
  }, [])

  const handleHeaderLeave = useCallback(() => {
    if (isMegaOpen) return
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current)
    }
    revealTimerRef.current = window.setTimeout(() => {
      setIsHeaderRevealed(false)
      revealTimerRef.current = null
    }, 200)
  }, [isMegaOpen])

  const closeMenus = useCallback(() => {
    clearMegaClose()
    setIsMegaOpen(false)
    setIsMobileOpen(false)
  }, [clearMegaClose])

  const openMobile = () => {
    activateGroup(0)
    setIsMegaOpen(false)
    setIsMobileOpen(true)
  }

  useEffect(() => {
    if (!isMegaOpen && !isMobileOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [closeMenus, isMegaOpen, isMobileOpen])

  useEffect(() => {
    if (!isMobileOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMobileOpen])

  useEffect(() => {
    return () => {
      clearMegaClose()
      if (revealTimerRef.current !== null) {
        window.clearTimeout(revealTimerRef.current)
      }
    }
  }, [clearMegaClose])

  // When mega menu closes, schedule header collapse if cursor is outside
  useEffect(() => {
    if (!isMegaOpen && isHeaderRevealed && !isHoveringHeaderRef.current) {
      setIsHeaderRevealed(false)
    }
  }, [isMegaOpen, isHeaderRevealed])

  // Scroll-direction detection
  useEffect(() => {
    const SCROLL_THRESHOLD = 50
    lastScrollYRef.current = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollYRef.current

      // Don't hide if mega menu or mobile menu is open
      if (isMegaOpen || isMobileOpen) {
        lastScrollYRef.current = currentY
        return
      }

      if (delta > SCROLL_THRESHOLD) {
        // Scrolling down past threshold — hide
        setIsHeaderHidden(true)
        setIsHeaderRevealed(false)
        lastScrollYRef.current = currentY
      } else if (delta < -10) {
        // Scrolling up — show (in resting state)
        setIsHeaderHidden(false)
        lastScrollYRef.current = currentY
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMegaOpen, isMobileOpen])

  if (!activeGroup || !activeLink) {
    return null
  }

  const featuredLinks = activeGroup.links.slice(0, 2)
  const supportingLinks = activeGroup.links.slice(2)

  const megaMenu =
    typeof document !== "undefined"
      ? createPortal(
          <div
            id={menuId}
            className={`ae-mega-layer hidden lg:block ${isMegaOpen ? "ae-mega-layer-open" : ""}`}
            onMouseEnter={clearMegaClose}
            onMouseLeave={scheduleMegaClose}
          >
            <div className="ae-mega-panel">
              <div className="ae-container ae-mega-grid" key={activeGroupIndex}>
                <section className="ae-mega-overview">
                  <p className="text-xs font-semibold uppercase text-accent">
                    {activeGroup.eyebrow}
                  </p>
                  <h2 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground">
                    {activeGroup.title}
                  </h2>
                  <p className="ae-pretty mt-4 text-sm leading-7 text-muted">
                    {activeGroup.description}
                  </p>
                  <a
                    href={activeGroup.links[0]?.href ?? "#top"}
                    className="ae-mega-overview-link group mt-6 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-semibold text-accent"
                    onClick={closeMenus}
                  >
                    Explore {getTopLevelLabel(activeGroup)}
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </section>

                <section className="ae-mega-category" aria-label="Featured links">
                  <p className="ae-mega-category-label">Featured</p>
                  <div className="mt-3 grid gap-3">
                    {featuredLinks.map((link, index) => {
                      const isActive = index === activeLinkIndex
                      return (
                        <a
                          key={`${activeGroup.title}-${link.label}`}
                          href={link.href}
                          className="ae-mega-link"
                          aria-current={isActive ? "true" : undefined}
                          onClick={closeMenus}
                          onFocus={() => setActiveLinkIndex(index)}
                          onMouseEnter={() => setActiveLinkIndex(index)}
                        >
                          <span>
                            <span className="ae-mega-link-kicker">
                              {link.tags?.[0] ?? activeGroup.eyebrow}
                            </span>
                            <strong>{link.label}</strong>
                            <span>{link.description}</span>
                          </span>
                          <Icon name="arrow" className="size-4 text-accent" />
                        </a>
                      )
                    })}
                  </div>
                </section>

                <section className="ae-mega-category" aria-label="More links">
                  <p className="ae-mega-category-label">
                    More {getTopLevelLabel(activeGroup)}
                  </p>
                  <div className="mt-3 grid gap-3">
                    {supportingLinks.map((link, index) => {
                      const linkIndex = index + featuredLinks.length
                      const isActive = linkIndex === activeLinkIndex
                      return (
                        <a
                          key={`${activeGroup.title}-${link.label}`}
                          href={link.href}
                          className="ae-mega-link ae-mega-link-compact"
                          aria-current={isActive ? "true" : undefined}
                          onClick={closeMenus}
                          onFocus={() => setActiveLinkIndex(linkIndex)}
                          onMouseEnter={() => setActiveLinkIndex(linkIndex)}
                        >
                          <span>
                            <span className="ae-mega-link-kicker">
                              {link.tags?.[0] ?? activeGroup.eyebrow}
                            </span>
                            <strong>{link.label}</strong>
                          </span>
                          <Icon name="arrow" className="size-4 text-accent" />
                        </a>
                      )
                    })}
                  </div>
                </section>

                <aside className="ae-mega-visual" aria-label="Selected link preview">
                  <div className="ae-mega-orbit" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="text-xs font-semibold uppercase text-accent">
                    {activeGroup.eyebrow}
                  </p>
                  <h3 className="ae-balanced mt-4 font-display text-3xl font-semibold leading-tight text-foreground">
                    {activeLink.label}
                  </h3>
                  <p className="ae-pretty mt-4 text-sm leading-7 text-muted">
                    {activeLink.description}
                  </p>
                  {activeLink.tags ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeLink.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-foreground/82"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </aside>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null

  const mobileMenu =
    isMobileOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            id={menuId}
            className="ae-mobile-mega lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Alphaexplora navigation menu"
          >
            <div className="ae-mobile-mega-top ae-container">
              <a
                href="#top"
                className="flex min-w-0 items-center gap-3 text-foreground"
                aria-label="Alphaexplora home"
                onClick={closeMenus}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/70 bg-primary/10 text-base font-semibold text-accent shadow-[0_0_22px_rgba(11,92,255,0.28)]">
                  A
                </span>
                <span className="font-display text-lg font-semibold">
                  Alphaexplora
                </span>
              </a>
              <button
                type="button"
                className="ae-nav-control inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground/86 active:scale-[0.96]"
                onClick={closeMenus}
              >
                <Icon name="close" className="size-4 text-accent" />
                Close
              </button>
            </div>

            <div className="ae-container ae-mobile-mega-body">
              <nav className="ae-mobile-groups" aria-label="Navigation categories">
                {groups.map((group, index) => {
                  const isActive = index === activeGroupIndex
                  return (
                    <button
                      key={group.title}
                      type="button"
                      className="ae-mobile-group"
                      aria-pressed={isActive}
                      onClick={() => activateGroup(index)}
                    >
                      <span>{group.eyebrow}</span>
                      <strong>{getTopLevelLabel(group)}</strong>
                    </button>
                  )
                })}
              </nav>

              <section className="ae-mobile-link-panel">
                <p className="text-xs font-semibold uppercase text-accent">
                  {activeGroup.eyebrow}
                </p>
                <h2 className="ae-balanced mt-3 font-display text-2xl font-semibold text-foreground">
                  {activeGroup.title}
                </h2>
                <p className="ae-pretty mt-3 text-sm leading-7 text-muted">
                  {activeGroup.description}
                </p>
                <div className="mt-5 grid gap-2">
                  {activeGroup.links.map((link, index) => (
                    <a
                      key={`${activeGroup.title}-${link.label}`}
                      href={link.href}
                      className="ae-mobile-link"
                      onClick={closeMenus}
                      onFocus={() => setActiveLinkIndex(index)}
                    >
                      <span>{link.label}</span>
                      <Icon name="arrow" className="size-4 text-accent" />
                    </a>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="ae-button-primary group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md px-5 py-3 text-sm font-semibold active:scale-[0.96]"
                  onClick={closeMenus}
                >
                  Get Started
                  <Icon
                    name="arrow"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </section>
            </div>
          </div>,
          document.body,
        )
      : null

  const headerClasses = [
    "ae-premium-header fixed inset-x-0 top-0 z-50",
    isHeaderRevealed || isMegaOpen ? "ae-header-revealed" : "",
    isHeaderHidden ? "ae-header-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ")

  const handleHeaderMouseEnter = () => {
    isHoveringHeaderRef.current = true
    clearMegaClose()
    handleHeaderEnter()
  }

  const handleHeaderMouseLeave = () => {
    isHoveringHeaderRef.current = false
    scheduleMegaClose()
    handleHeaderLeave()
  }

  return (
    <header
      className={headerClasses}
      onMouseEnter={handleHeaderMouseEnter}
      onMouseLeave={handleHeaderMouseLeave}
    >
      {/* Desktop: Two-row Mercedes-style layout */}
      <div className="ae-container ae-header-logo-row">
        <div className="ae-header-utils ae-header-utils-left">
          <a
            href="#contact"
            className="ae-nav-link inline-flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/78"
            onClick={closeMenus}
          >
            Contact
          </a>
        </div>

        <a
          href="#top"
          className="ae-nav-brand group flex min-w-0 items-center gap-3 text-foreground"
          aria-label="Alphaexplora home"
          onClick={closeMenus}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/70 bg-primary/10 text-base font-semibold text-accent shadow-[0_0_22px_rgba(11,92,255,0.28)]">
            A
          </span>
          <span className="font-display text-lg font-semibold sm:text-xl">
            Alphaexplora
          </span>
        </a>

        <div className="ae-header-utils ae-header-utils-right">
          <a
            href="#contact"
            className="ae-button-primary group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold active:scale-[0.96]"
            onClick={closeMenus}
          >
            Get Started
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <div className="ae-header-nav-wrapper">
        <div className="ae-header-nav-inner">
          <nav
            className="ae-container ae-header-nav-row"
            aria-label="Primary navigation"
          >
            {groups.map((group, index) => {
              const isActive = isMegaOpen && index === activeGroupIndex
              return (
                <button
                  key={group.title}
                  type="button"
                  className="ae-top-nav-link"
                  style={{ "--nav-index": index } as React.CSSProperties}
                  aria-expanded={isActive}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => handleLinkClick(index)}
                >
                  {getTopLevelLabel(group)}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile: Unchanged layout */}
      <div className="ae-container flex min-h-[76px] items-center justify-between gap-3 py-3 lg:hidden">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-3 text-foreground"
          aria-label="Alphaexplora home"
          onClick={closeMenus}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/70 bg-primary/10 text-base font-semibold text-accent shadow-[0_0_22px_rgba(11,92,255,0.28)]">
            A
          </span>
          <span className="font-display text-lg font-semibold">
            Alphaexplora
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="ae-button-primary group hidden min-h-10 shrink-0 items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold active:scale-[0.96] sm:inline-flex"
            onClick={closeMenus}
          >
            Get Started
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <button
            type="button"
            className="ae-nav-control inline-flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground/88 active:scale-[0.96]"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            aria-controls={menuId}
            onClick={isMobileOpen ? closeMenus : openMobile}
          >
            <Icon
              name={isMobileOpen ? "close" : "menu"}
              className="size-5 text-accent"
            />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      {megaMenu}
      {mobileMenu}
    </header>
  )
}
