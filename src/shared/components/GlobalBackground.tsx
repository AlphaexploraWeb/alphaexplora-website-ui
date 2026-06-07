import { memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default memo(function GlobalBackground() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const washY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void"
    >
      <motion.div
        className="absolute inset-[-18%]"
        style={{
          y: washY,
          background:
            "linear-gradient(118deg, rgba(46,233,220,0.1), transparent 34%), linear-gradient(248deg, rgba(215,168,92,0.08), transparent 36%), linear-gradient(180deg, rgba(2,4,10,0.04), #02040a 76%)",
        }}
      />
      <motion.div
        className="absolute inset-[-8%] bg-[linear-gradient(rgba(242,247,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(242,247,251,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35 [mask-image:linear-gradient(180deg,transparent,black_16%,black_72%,transparent)]"
        style={{ y: gridY }}
      />
      <div className="absolute inset-0 opacity-[0.045] mix-blend-screen [background-image:repeating-linear-gradient(0deg,rgba(242,247,251,0.24)_0,rgba(242,247,251,0.24)_1px,transparent_1px,transparent_6px)]" />
    </div>
  );
});
