import { memo, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const BRAND = {
  void: "#010511",
  cyan: "#00D9D9",
  pulse: "#0056FF",
  starlight: "#E2E8F0",
  nebula: "#64748B",
} as const;

const SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
} as const;

const MAGNETIC_SPRING = {
  stiffness: 300,
  damping: 30,
  mass: 0.72,
} as const;

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.18,
    },
  },
};

const revealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: SPRING,
  },
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MagneticButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

function MagneticButton({
  children,
  variant,
  onClick,
  className,
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, MAGNETIC_SPRING);
  const springY = useSpring(y, MAGNETIC_SPRING);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.12);
    y.set(offsetY * 0.14);
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMagnet}
      style={{ x: springX, y: springY }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.025 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={SPRING}
      className={cn(
        "group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full border px-6",
        "font-[var(--font-body)] text-xs font-extrabold uppercase tracking-normal",
        "outline-none transition-colors duration-300 sm:w-auto sm:px-9",
        "focus-visible:ring-2 focus-visible:ring-[#00D9D9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010511]",
        variant === "primary" &&
          "border-[#0056FF] bg-[#0056FF] text-[#E2E8F0] shadow-[0_0_34px_rgba(0,86,255,0.42)] hover:shadow-[0_0_64px_rgba(0,86,255,0.64)]",
        variant === "secondary" &&
          "border-white/10 bg-white/[0.045] text-[#E2E8F0] shadow-[inset_0_1px_0_rgba(226,232,240,0.1)] backdrop-blur-xl hover:border-[#00D9D9]/45 hover:bg-[#00D9D9]/[0.07]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-[#00D9D9]/70 transition-transform duration-300 group-hover:scale-x-100"
      />
      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </motion.button>
  );
}

function HeroBadge() {
  return (
    <motion.p
      variants={revealItem}
      className={cn(
        "mb-10 inline-flex items-center gap-3 rounded-full border border-[#00D9D9]/20",
        "bg-[#00D9D9]/[0.055] px-4 py-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-normal",
        "text-[#00D9D9] shadow-[inset_0_1px_0_rgba(226,232,240,0.08)] backdrop-blur-xl",
      )}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[#00D9D9] shadow-[0_0_14px_rgba(0,217,217,0.86)]"
      />
      Alphaexplora
    </motion.p>
  );
}

function HeroCopy() {
  return (
    <>
      <motion.h1
        variants={revealItem}
        className={cn(
          "max-w-5xl font-[var(--font-display)] text-5xl font-black leading-[1.02] tracking-normal",
          "text-[#E2E8F0] sm:text-6xl md:text-7xl xl:text-8xl",
        )}
      >
        Technology should empower, not exclude.
        <span className="mt-5 block bg-gradient-to-r from-[#00D9D9] via-[#E2E8F0] to-[#0056FF] bg-clip-text text-transparent">
          Because IT is a Right!
        </span>
      </motion.h1>

      <motion.p
        variants={revealItem}
        className="mt-10 max-w-2xl font-[var(--font-body)] text-base leading-8 text-[#A7B1C2] sm:text-lg"
      >
        At Alphaexplora, we don&apos;t just build tech. We build with purpose.
      </motion.p>
    </>
  );
}

interface HeroActionsProps {
  onTriggerConnect?: () => void;
}

function HeroActions({ onTriggerConnect }: HeroActionsProps) {
  return (
    <motion.div
      variants={revealItem}
      className="mt-14 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
    >
      <MagneticButton variant="primary" onClick={onTriggerConnect}>
        Start Your Transformation
      </MagneticButton>
      <MagneticButton variant="secondary">Explore Services</MagneticButton>
    </motion.div>
  );
}

function SignalLine({
  className,
  delay,
}: {
  className?: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={cn("absolute h-px bg-[#00D9D9]/40", className)}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              opacity: [0.2, 0.82, 0.2],
              scaleX: [0.78, 1, 0.78],
            }
      }
      transition={{
        duration: 5.4,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}

function SignalCore() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={revealItem}
      className="relative mx-auto min-h-[560px] w-full max-w-[540px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-[#00D9D9]/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-14 rounded-full border border-[#0056FF]/10"
      />

      <motion.div
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg",
          "border border-white/10 bg-white/[0.045] shadow-[0_0_86px_rgba(0,217,217,0.16),inset_0_1px_0_rgba(226,232,240,0.12)] backdrop-blur-2xl",
        )}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: ["-50%", "calc(-50% - 14px)", "-50%"],
                rotate: [0, 2, 0],
              }
        }
        transition={{ duration: 7.2, ease: "easeInOut", repeat: Infinity }}
      >
        <SignalLine className="left-8 right-8 top-10 origin-center" delay={0} />
        <SignalLine
          className="bottom-10 left-8 right-8 origin-center bg-[#0056FF]/45"
          delay={0.8}
        />
        <div className="absolute inset-10 rounded border border-white/[0.055]" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className={cn(
          "absolute left-4 top-20 h-28 w-48 rounded-lg border border-white/10 bg-white/[0.035] p-5",
          "shadow-[inset_0_1px_0_rgba(226,232,240,0.08)] backdrop-blur-xl",
        )}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 8, 0],
                y: [0, -10, 0],
              }
        }
        transition={{ duration: 8.4, ease: "easeInOut", repeat: Infinity }}
      >
        <span className="block h-1.5 w-20 rounded-full bg-[#00D9D9]/55" />
        <span className="mt-4 block h-1.5 w-32 rounded-full bg-[#E2E8F0]/14" />
        <span className="mt-3 block h-1.5 w-24 rounded-full bg-[#E2E8F0]/10" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className={cn(
          "absolute bottom-16 right-0 h-32 w-52 rounded-lg border border-white/10 bg-[#0056FF]/10 p-5",
          "shadow-[inset_0_1px_0_rgba(226,232,240,0.08)] backdrop-blur-xl",
        )}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -10, 0],
                y: [0, 12, 0],
              }
        }
        transition={{ duration: 8.8, ease: "easeInOut", repeat: Infinity }}
      >
        <span className="block h-1.5 w-28 rounded-full bg-[#E2E8F0]/14" />
        <span className="mt-4 block h-1.5 w-16 rounded-full bg-[#0056FF]/65" />
        <span className="mt-3 block h-1.5 w-36 rounded-full bg-[#E2E8F0]/10" />
      </motion.div>
    </motion.div>
  );
}

interface HeroSectionProps {
  onTriggerConnect?: () => void;
}

export const HeroSection = memo(function HeroSection({
  onTriggerConnect,
}: HeroSectionProps) {
  return (
    <section
      aria-label="Alphaexplora hero"
      data-home-section="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#010511] px-6 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      style={{ backgroundColor: BRAND.void }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(0,217,217,0.16), transparent 34%), radial-gradient(circle at 82% 26%, rgba(0,86,255,0.22), transparent 40%), linear-gradient(180deg, rgba(1,5,17,0.2), #010511 82%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(226,232,240,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.035)_1px,transparent_1px)] bg-[size:88px_88px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_72%)]"
      />

      <motion.div
        variants={revealContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid min-h-[calc(100svh-14rem)] w-full max-w-7xl items-center gap-20 lg:grid-cols-[minmax(0,1.04fr)_minmax(420px,0.96fr)] lg:gap-24"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <HeroBadge />
          <HeroCopy />
          <HeroActions onTriggerConnect={onTriggerConnect} />
        </div>

        <div className="relative hidden lg:block">
          <SignalCore />
        </div>
      </motion.div>
    </section>
  );
});
