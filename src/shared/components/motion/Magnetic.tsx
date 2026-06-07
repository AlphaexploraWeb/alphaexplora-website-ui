import {
  memo,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";
import { motion, type HTMLMotionProps, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { springTransition } from "../../utils/animations";

type MagneticStyle = CSSProperties & {
  "--pointer-x"?: string;
  "--pointer-y"?: string;
};

interface MagneticBaseProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  glow?: "cyan" | "blue" | "none";
}

function useMagneticMotion(strength: number) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.34 });
  const springY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.34 });

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--pointer-x", `${pointerX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${pointerY}px`);

    if (!prefersReducedMotion) {
      x.set((pointerX - rect.width / 2) * strength);
      y.set((pointerY - rect.height / 2) * strength);
    }
  };

  const handlePointerLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
    x.set(0);
    y.set(0);
  };

  return {
    handlePointerMove,
    handlePointerLeave,
    style: prefersReducedMotion ? undefined : { x: springX, y: springY },
  };
}

function GlowLayer({ glow }: { glow: MagneticBaseProps["glow"] }) {
  if (glow === "none") {
    return null;
  }

  const color = glow === "blue" ? "rgba(63,115,255,0.32)" : "rgba(46,233,220,0.3)";

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: `radial-gradient(180px circle at var(--pointer-x,50%) var(--pointer-y,50%), ${color}, transparent 64%)`,
      }}
    />
  );
}

const controlBaseClass = cn(
  "ae-focus group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full border px-8",
  "font-body text-xs font-extrabold uppercase outline-none will-change-transform",
);

function controlVariantClass(variant: "primary" | "ghost") {
  return variant === "primary"
    ? "border-pulse bg-pulse text-starlight shadow-[0_0_42px_rgb(63_115_255_/_0.42)]"
    : "border-line bg-white/[0.035] text-starlight shadow-control backdrop-blur-xl";
}

interface MagneticButtonProps
  extends MagneticBaseProps,
    Omit<HTMLMotionProps<"button">, "className" | "children"> {
  variant?: "primary" | "ghost";
}

export const MagneticButton = memo(function MagneticButton({
  children,
  className,
  strength = 0.18,
  glow = "cyan",
  variant = "ghost",
  ...props
}: MagneticButtonProps) {
  const magnetic = useMagneticMotion(strength);
  const style = { "--pointer-x": "50%", "--pointer-y": "50%" } as MagneticStyle;

  return (
    <motion.button
      {...props}
      type={props.type ?? "button"}
      onMouseMove={magnetic.handlePointerMove}
      onMouseLeave={magnetic.handlePointerLeave}
      whileTap={{ scale: 0.985 }}
      transition={springTransition}
      style={{ ...style, ...magnetic.style }}
      className={cn(
        controlBaseClass,
        controlVariantClass(variant),
        className,
      )}
    >
      <GlowLayer glow={glow} />
      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </motion.button>
  );
});

interface MagneticLinkProps extends MagneticBaseProps, Omit<LinkProps, "className" | "children"> {
  variant?: "primary" | "ghost";
}

export const MagneticLink = memo(function MagneticLink({
  children,
  className,
  strength = 0.18,
  glow = "cyan",
  variant = "ghost",
  ...props
}: MagneticLinkProps) {
  const magnetic = useMagneticMotion(strength);
  const style = { "--pointer-x": "50%", "--pointer-y": "50%" } as MagneticStyle;

  return (
    <motion.div
      onMouseMove={magnetic.handlePointerMove}
      onMouseLeave={magnetic.handlePointerLeave}
      whileTap={{ scale: 0.985 }}
      transition={springTransition}
      style={{ ...style, ...magnetic.style }}
      className="inline-flex will-change-transform"
    >
      <Link
        {...props}
        className={cn(
          controlBaseClass,
          controlVariantClass(variant),
          className,
        )}
      >
        <GlowLayer glow={glow} />
        <span className="relative z-10 whitespace-nowrap">{children}</span>
      </Link>
    </motion.div>
  );
});

interface MagneticAnchorProps
  extends MagneticBaseProps,
    Omit<HTMLMotionProps<"a">, "className" | "children"> {
  variant?: "primary" | "ghost";
}

export const MagneticAnchor = memo(function MagneticAnchor({
  children,
  className,
  strength = 0.18,
  glow = "cyan",
  variant = "ghost",
  ...props
}: MagneticAnchorProps) {
  const magnetic = useMagneticMotion(strength);
  const style = { "--pointer-x": "50%", "--pointer-y": "50%" } as MagneticStyle;

  return (
    <motion.a
      {...props}
      onMouseMove={magnetic.handlePointerMove}
      onMouseLeave={magnetic.handlePointerLeave}
      whileTap={{ scale: 0.985 }}
      transition={springTransition}
      style={{ ...style, ...magnetic.style }}
      className={cn(
        controlBaseClass,
        controlVariantClass(variant),
        className,
      )}
    >
      <GlowLayer glow={glow} />
      <span className="relative z-10 whitespace-nowrap">{children}</span>
    </motion.a>
  );
});
