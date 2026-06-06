import { memo, useRef, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../../../shared/components/PageWrapper";
import { useHomeViewModel } from "../viewModels/useHomeViewModel";
import type { Capability } from "../viewModels/useHomeViewModel";
import { EASE_OUT_EXPO } from "../../../shared/utils/animations";

// Lazy-load Three.js canvas so it's a separate chunk from the page text content
const AlphaNodeCanvas = lazy(() => import("./AlphaNodeCanvas"));

const F_DISPLAY = "'Space Grotesk', system-ui";
const F_BODY = "'Plus Jakarta Sans', system-ui";
const C_CYAN = "#00D9D9";
const C_BLUE = "#0056FF";
const C_WHITE = "#F8FAFC";
const C_DIM = "#64748B";
const C_CARD = "rgba(5,11,26,0.6)";
const EASE = EASE_OUT_EXPO.join(",");


/* ─────────────────────────────────────────────────────────
   Marquee strip
───────────────────────────────────────────────────────── */
function MarqueeStrip({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "14px 0",
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "56px",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: F_DISPLAY,
              fontSize: "11.5px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color:
                i % 4 === 0
                  ? C_CYAN
                  : i % 4 === 1
                  ? "rgba(226,232,240,0.25)"
                  : i % 4 === 2
                  ? "#7BA7FF"
                  : "rgba(226,232,240,0.18)",
            }}
          >
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background:
                  i % 4 === 0
                    ? C_CYAN
                    : i % 4 === 2
                    ? C_BLUE
                    : "rgba(255,255,255,0.15)",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Manifesto beat — full-width typographic statement
───────────────────────────────────────────────────────── */
function ManifestoBeat({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 6vw, 120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent rule top */}
      <motion.div
        style={{
          width: "48px",
          height: "1px",
          background: C_CYAN,
          marginBottom: "40px",
          opacity: 0,
        }}
        animate={inView ? { opacity: 1, width: "48px" } : {}}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      />

      <div style={{ maxWidth: "820px" }}>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            style={{
              fontFamily: F_DISPLAY,
              fontWeight: 700,
              fontSize: "clamp(32px, 5.5vw, 68px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: i === lines.length - 1 ? C_CYAN : C_WHITE,
              margin: 0,
              opacity: 0,
              transform: "translateY(24px)",
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    transform: "translateY(0px)",
                  }
                : {}
            }
            transition={{
              delay: 0.1 + i * 0.1,
              duration: 0.72,
              ease: EASE_OUT_EXPO,
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Decorative side label */}
      <motion.span
        style={{
          position: "absolute",
          right: "clamp(24px, 6vw, 120px)",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center center",
          fontFamily: F_BODY,
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(100,116,139,0.5)",
          opacity: 0,
        }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Our Belief
      </motion.span>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Capabilities — editorial numbered list (NOT card grid)
───────────────────────────────────────────────────────── */
function CapabilityRow({ cap, index }: { cap: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        gap: "32px",
        alignItems: "start",
        padding: "clamp(28px, 4vw, 44px) 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        opacity: 0,
        transform: "translateY(20px)",
        cursor: "default",
      }}
      animate={inView ? { opacity: 1, transform: "translateY(0px)" } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.65,
        ease: EASE_OUT_EXPO,
      }}
      whileHover="hovered"
    >
      {/* Index number */}
      <motion.span
        style={{
          fontFamily: F_DISPLAY,
          fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 48px)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "rgba(0,217,217,0.13)",
          transition: `color 400ms cubic-bezier(${EASE})`,
          userSelect: "none",
        }}
        variants={{
          hovered: { color: "rgba(0,217,217,0.35)" },
        }}
        transition={{ duration: 0.3 }}
      >
        {cap.index}
      </motion.span>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "4px" }}>
        <motion.h3
          style={{
            fontFamily: F_DISPLAY,
            fontWeight: 600,
            fontSize: "clamp(18px, 2.5vw, 24px)",
            letterSpacing: "-0.018em",
            color: C_WHITE,
            margin: 0,
            transition: `color 300ms cubic-bezier(${EASE})`,
          }}
          variants={{ hovered: { color: "#FFFFFF" } }}
          transition={{ duration: 0.25 }}
        >
          {cap.title}
        </motion.h3>
        <p
          style={{
            fontFamily: F_BODY,
            fontSize: "clamp(14px, 1.6vw, 16px)",
            lineHeight: 1.72,
            color: C_DIM,
            margin: 0,
            maxWidth: "520px",
          }}
        >
          {cap.body}
        </p>
      </div>

      {/* Tag pill */}
      <span
        style={{
          fontFamily: F_DISPLAY,
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(100,116,139,0.55)",
          padding: "4px 10px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.06)",
          whiteSpace: "nowrap",
          marginTop: "6px",
        }}
      >
        {cap.tag}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Close CTA section
───────────────────────────────────────────────────────── */
function CloseCTA({ ctaPrimary }: { ctaPrimary: { label: string; path: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 6vw, 120px)",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <motion.div
        style={{ opacity: 0, transform: "translateY(20px)" }}
        animate={inView ? { opacity: 1, transform: "translateY(0px)" } : {}}
        transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
      >
        <p
          style={{
            fontFamily: F_BODY,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(100,116,139,0.6)",
            marginBottom: "16px",
          }}
        >
          Ready when you are
        </p>
        <h2
          style={{
            fontFamily: F_DISPLAY,
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 52px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: C_WHITE,
            margin: 0,
          }}
        >
          Start building with Alphaexplora.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: 0, transform: "translateY(16px)" }}
        animate={inView ? { opacity: 1, transform: "translateY(0px)" } : {}}
        transition={{ delay: 0.12, duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <Link
          to={ctaPrimary.path}
          className="group"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "52px",
            paddingLeft: "28px",
            paddingRight: "8px",
            borderRadius: "9999px",
            background: `linear-gradient(135deg, ${C_BLUE} 0%, ${C_CYAN} 100%)`,
            fontFamily: F_DISPLAY,
            fontSize: "14px",
            fontWeight: 600,
            color: "#fff",
            textDecoration: "none",
            transition: `all 500ms cubic-bezier(${EASE})`,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = `0 0 40px rgba(0,217,217,0.4), 0 0 14px rgba(0,86,255,0.3)`;
            el.style.transform = "scale(1.025)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = "none";
            el.style.transform = "scale(1)";
          }}
        >
          {ctaPrimary.label}
          <span
            className="group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              transition: `transform 300ms cubic-bezier(${EASE})`,
              flexShrink: 0,
            }}
          >
            ↗
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Home page — composed from sections
───────────────────────────────────────────────────────── */
export default memo(function Home() {
  const vm = useHomeViewModel();

  return (
    <PageWrapper>
      {/* ── Hero ────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "clamp(40px, 6vw, 80px)",
          padding: "clamp(100px, 12vw, 140px) clamp(24px, 6vw, 120px) clamp(60px, 8vw, 100px)",
          position: "relative",
          overflow: "hidden",
        }}
        className="max-md:flex max-md:flex-col"
      >
        {/* Subtle hero grid overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,86,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,86,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 75% 80% at 70% 40%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 80% at 70% 40%, black 20%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Left: Text ─────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 2.5vw, 28px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 14px",
                borderRadius: "9999px",
                border: "1px solid rgba(0,217,217,0.18)",
                background: "rgba(0,217,217,0.05)",
                fontFamily: F_DISPLAY,
                fontSize: "10.5px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: C_CYAN,
              }}
            >
              <motion.span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: C_CYAN,
                  boxShadow: `0 0 6px ${C_CYAN}`,
                  flexShrink: 0,
                }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              {vm.heroTagline}
            </span>
          </motion.div>

          {/* Heading — two lines, second line in solid cyan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.72, ease: EASE_OUT_EXPO }}
          >
            <h1
              style={{
                fontFamily: F_DISPLAY,
                fontWeight: 700,
                fontSize: "clamp(38px, 5.5vw, 72px)",
                letterSpacing: "-0.028em",
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              <span style={{ color: C_WHITE, display: "block" }}>
                {vm.heroTitle}
              </span>
              <span style={{ color: C_CYAN, display: "block" }}>
                {vm.heroTitleAccent}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.68, ease: EASE_OUT_EXPO }}
            style={{
              fontFamily: F_BODY,
              fontSize: "clamp(15px, 1.8vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.72,
              color: C_DIM,
              maxWidth: "480px",
              margin: 0,
            }}
          >
            {vm.heroSubtitle}
          </motion.p>

          {/* CTA cluster */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65, ease: EASE_OUT_EXPO }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to={vm.ctaPrimary.path}
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                height: "48px",
                paddingLeft: "22px",
                paddingRight: "7px",
                borderRadius: "9999px",
                background: `linear-gradient(135deg, ${C_BLUE} 0%, ${C_CYAN} 100%)`,
                fontFamily: F_DISPLAY,
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                transition: `all 500ms cubic-bezier(${EASE})`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 0 30px rgba(0,217,217,0.45)`;
                el.style.transform = "scale(1.025)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "scale(1)";
              }}
            >
              {vm.ctaPrimary.label}
              <span
                className="group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  transition: `transform 300ms cubic-bezier(${EASE})`,
                  flexShrink: 0,
                }}
              >
                ↗
              </span>
            </Link>

            <Link
              to={vm.ctaSecondary.path}
              style={{
                display: "flex",
                alignItems: "center",
                height: "48px",
                padding: "0 22px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: C_CARD,
                fontFamily: F_DISPLAY,
                fontSize: "13.5px",
                fontWeight: 500,
                color: "rgba(226,232,240,0.75)",
                textDecoration: "none",
                transition: `all 300ms cubic-bezier(${EASE})`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `rgba(0,217,217,0.3)`;
                el.style.color = C_WHITE;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.color = "rgba(226,232,240,0.75)";
              }}
            >
              {vm.ctaSecondary.label}
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <motion.div
              style={{
                width: "1px",
                height: "32px",
                background: `linear-gradient(to bottom, rgba(0,217,217,0.6), transparent)`,
                transformOrigin: "top",
              }}
              animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <span
              style={{
                fontFamily: F_BODY,
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(100,116,139,0.45)",
              }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* ── Right: 3D Alpha Node canvas ─────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1.4, ease: EASE_OUT_EXPO }}
          style={{
            position: "relative",
            zIndex: 1,
            alignSelf: "stretch",
            minHeight: "480px",
          }}
        >
          <Suspense fallback={null}>
            <AlphaNodeCanvas />
          </Suspense>
        </motion.div>
      </section>

      {/* ── Marquee ──────────────────────────────── */}
      <MarqueeStrip items={vm.marqueeItems} />

      {/* ── Manifesto ────────────────────────────── */}
      <ManifestoBeat lines={vm.manifestoLines} />

      {/* ── Capabilities ─────────────────────────── */}
      <section
        style={{
          padding: "0 clamp(24px, 6vw, 120px) clamp(60px, 8vw, 100px)",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: "clamp(24px, 3vw, 36px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "0",
          }}
        >
          <span
            style={{
              fontFamily: F_BODY,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(100,116,139,0.6)",
            }}
          >
            What we deliver
          </span>
          <Link
            to="/solutions"
            style={{
              fontFamily: F_DISPLAY,
              fontSize: "13px",
              fontWeight: 500,
              color: C_CYAN,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: `opacity 200ms ease`,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.65" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1" }}
          >
            All solutions ↗
          </Link>
        </div>

        {vm.capabilities.map((cap, i) => (
          <CapabilityRow key={cap.index} cap={cap} index={i} />
        ))}
      </section>

      {/* ── Close CTA ────────────────────────────── */}
      <CloseCTA ctaPrimary={vm.ctaPrimary} />
    </PageWrapper>
  );
});
