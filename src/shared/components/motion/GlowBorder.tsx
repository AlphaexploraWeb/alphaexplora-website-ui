import {
  memo,
  type CSSProperties,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

type GlowStyle = CSSProperties & {
  "--pointer-x"?: string;
  "--pointer-y"?: string;
};

interface GlowBorderProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowBorder = memo(function GlowBorder({
  children,
  className,
  glowColor = "rgba(46,233,220,0.34)",
  ...props
}: GlowBorderProps) {
  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };

  const style = {
    "--pointer-x": "50%",
    "--pointer-y": "50%",
    ...(props.style as CSSProperties),
  } as GlowStyle;

  return (
    <motion.div
      {...props}
      onMouseMove={handlePointerMove}
      style={style}
      className={cn("group relative overflow-hidden rounded-card border border-line", className)}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--pointer-x) var(--pointer-y), ${glowColor}, transparent 62%)`,
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-px rounded-[7px] bg-panel"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

interface StaticGlowBorderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glowColor?: string;
}

export const StaticGlowBorder = memo(function StaticGlowBorder({
  children,
  className,
  glowColor = "rgba(46,233,220,0.28)",
  ...props
}: StaticGlowBorderProps) {
  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };
  const style = { "--pointer-x": "50%", "--pointer-y": "50%" } as GlowStyle;

  return (
    <div
      {...props}
      onMouseMove={handlePointerMove}
      style={style}
      className={cn("group relative overflow-hidden rounded-card border border-line", className)}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--pointer-x) var(--pointer-y), ${glowColor}, transparent 62%)`,
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-px rounded-[7px] bg-panel"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
});
