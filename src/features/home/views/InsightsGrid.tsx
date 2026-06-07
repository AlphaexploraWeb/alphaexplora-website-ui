import { memo } from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import { HorizontalScrollRail } from "../../../shared/components/motion/HorizontalScrollRail";
import { KineticText } from "../../../shared/components/motion/KineticText";
import { cn } from "../../../shared/utils/cn";
import type { IndustryInsight, SiteContentModel } from "../../../shared/models/siteContent";

interface InsightsGridProps {
  insights: SiteContentModel["insights"];
}

function InsightVisual({ index }: { index: number }) {
  const gradients = [
    "linear-gradient(135deg, rgba(46,233,220,0.2), transparent 46%), linear-gradient(315deg, rgba(63,115,255,0.2), transparent 58%), #02040a",
    "linear-gradient(160deg, rgba(63,115,255,0.23), transparent 44%), linear-gradient(24deg, rgba(215,168,92,0.1), transparent 62%), #02040a",
    "linear-gradient(135deg, rgba(46,233,220,0.14), transparent 42%), linear-gradient(315deg, rgba(139,92,246,0.2), transparent 60%), #02040a",
  ];

  return (
    <div className="group relative h-full min-h-[360px] overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
        style={{ background: gradients[index % gradients.length] }}
      />
      <div className="absolute inset-8 border border-line" />
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
        <span className="font-display text-8xl font-black leading-none text-starlight/10">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-24 bg-cyan/45" />
      </div>
    </div>
  );
}

function InsightSlide({
  insight,
  index,
  progress,
}: {
  insight: IndustryInsight;
  index: number;
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, [0, 1], [index % 2 === 0 ? -36 : 46, index % 2 === 0 ? 42 : -46]);

  return (
    <motion.article
      style={{ y }}
      className={cn(
        "ae-surface relative grid h-[70svh] min-h-[560px] w-[88vw] max-w-[1040px] overflow-hidden bg-white/[0.026] lg:grid-cols-[0.9fr_1.1fr]",
        index % 2 === 1 && "mt-16",
      )}
    >
      <InsightVisual index={index} />
      <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="ae-chip border-cyan/20 bg-cyan/[0.06] text-cyan">
              {insight.category}
            </span>
            <span className="font-body text-xs font-bold uppercase text-mist">
              {insight.date} | {insight.readTime}
            </span>
          </div>
          <h3 className="ae-heading-card mt-10 max-w-3xl">
            {insight.title}
          </h3>
        </div>

        <div>
          <p className="ae-copy max-w-xl">{insight.excerpt}</p>
          <span className="mt-10 inline-flex min-h-11 items-center border-b border-cyan/35 font-body text-xs font-bold uppercase text-starlight">
            Read signal
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export const InsightsGrid = memo(function InsightsGrid({ insights }: InsightsGridProps) {
  return (
    <section id="insights" className="relative bg-transparent">
      <div className="ae-container px-6 pb-4 pt-32 sm:px-8 lg:px-12">
        <p className="ae-eyebrow mb-7">
          {insights.eyebrow}
        </p>
        <KineticText
          text={insights.headline}
          direction="mixed"
          className="ae-heading-section max-w-5xl"
        />
        <p className="ae-copy mt-8 max-w-2xl">
          {insights.subHeadline}
        </p>
      </div>

      <HorizontalScrollRail
        items={insights.items}
        label="INSIGHTS"
        className="-mt-16"
        trackClassName="pb-16"
        renderItem={(insight, index, progress) => (
          <InsightSlide insight={insight} index={index} progress={progress} />
        )}
      />
    </section>
  );
});
