import {
  memo,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

interface HorizontalScrollRailProps<T> {
  items: T[];
  label: string;
  renderItem: (item: T, index: number, progress: MotionValue<number>) => ReactNode;
  className?: string;
  trackClassName?: string;
}

function HorizontalScrollRailComponent<T>({
  items,
  label,
  renderItem,
  className,
  trackClassName,
}: HorizontalScrollRailProps<T>) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({ travel: 0, height: 1200 });

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const viewport = window.innerWidth;
      const travel = Math.max(0, track.scrollWidth - viewport + viewport * 0.12);
      setMetrics({
        travel,
        height: Math.max(window.innerHeight * 1.4, window.innerHeight + travel),
      });
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -metrics.travel]);
  const labelY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={sectionRef}
      aria-label={label}
      className={cn("relative bg-transparent", className)}
      style={{ height: metrics.height }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div
          aria-hidden="true"
          style={{ y: labelY }}
          className="ae-marker left-6 top-24 text-[10rem]"
        >
          {label}
        </motion.div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className={cn("flex w-max items-center gap-8 px-6 sm:px-8 lg:px-12", trackClassName)}
        >
          {items.map((item, index) => (
            <div key={index} className="shrink-0">
              {renderItem(item, index, scrollYProgress)}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const HorizontalScrollRail = memo(HorizontalScrollRailComponent) as typeof HorizontalScrollRailComponent;
