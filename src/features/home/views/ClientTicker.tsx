import { memo } from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";
import { HorizontalScrollRail } from "../../../shared/components/motion/HorizontalScrollRail";
import { MagneticAnchor } from "../../../shared/components/motion/Magnetic";
import { cn } from "../../../shared/utils/cn";
import type { ClientPartner } from "../../../shared/models/siteContent";

interface ClientTickerProps {
  clients: ClientPartner[];
}

function getInitials(label: string) {
  return label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ClientSlide({
  client,
  index,
  progress,
}: {
  client: ClientPartner;
  index: number;
  progress: MotionValue<number>;
}) {
  const logo = client.logoSrc.trim();
  const url = client.websiteUrl.trim();
  const y = useTransform(progress, [0, 1], [index % 2 === 0 ? 42 : -42, index % 2 === 0 ? -36 : 36]);

  return (
    <motion.article
      style={{ y }}
      className={cn(
        "ae-surface group relative h-[68svh] min-h-[520px] w-[82vw] max-w-[760px] overflow-hidden bg-panel-strong",
        index % 2 === 1 && "mt-20",
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        {logo ? (
          <img
            src={logo}
            alt={`${client.label} logo`}
            className="h-full w-full object-contain p-20 opacity-90 transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-700 ease-fluid group-hover:scale-[1.04]"
            style={{
              background:
                "linear-gradient(135deg, rgba(46,233,220,0.14), transparent 42%), linear-gradient(315deg, rgba(63,115,255,0.18), transparent 54%), linear-gradient(180deg, rgba(215,168,92,0.05), transparent 56%), #02040a",
            }}
          >
            <span className="absolute left-10 top-10 font-display text-[8rem] font-black leading-none text-starlight/[0.045]">
              {getInitials(client.label)}
            </span>
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/86 to-transparent p-8 sm:p-10">
        <div className="mb-8 flex items-center justify-between gap-6">
          <span className="ae-eyebrow">
            Partner / {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <h2 className="ae-heading-card max-w-2xl">
          {client.label}
        </h2>
        <div className="mt-8">
          {url ? (
            <MagneticAnchor href={url} target="_blank" rel="noreferrer" className="min-h-11 px-4">
              Visit website
            </MagneticAnchor>
          ) : (
            <span className="inline-flex min-h-11 items-center border-b border-line font-body text-xs font-bold uppercase text-mist">
              Partner profile
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export const ClientTicker = memo(function ClientTicker({ clients }: ClientTickerProps) {
  return (
    <section id="clients" className="relative bg-transparent">
      <div className="ae-container px-6 pb-4 pt-32 sm:px-8 lg:px-12">
        <p className="ae-eyebrow mb-7">
          Our Clients
        </p>
        <h2 className="ae-heading-section max-w-4xl">
          A horizontal portfolio of trusted digital momentum.
        </h2>
        <p className="ae-copy mt-8 max-w-2xl">
          Each partner moves through the frame like a case-study plate, keeping the layout focused and cinematic without becoming visually noisy.
        </p>
      </div>

      <HorizontalScrollRail
        items={clients}
        label="CLIENTS"
        className="-mt-12"
        trackClassName="pb-16"
        renderItem={(client, index, progress) => (
          <ClientSlide client={client} index={index} progress={progress} />
        )}
      />
    </section>
  );
});
