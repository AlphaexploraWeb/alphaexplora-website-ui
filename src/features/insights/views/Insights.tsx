import { memo } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../shared/utils/animations";
import { InsightsGrid } from "../../home/views/InsightsGrid";
import { useInsightsViewModel } from "../viewModels/useInsightsViewModel";

export default memo(function Insights() {
  const vm = useInsightsViewModel();

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="ae-page pt-16 sm:pt-20"
    >
      <InsightsGrid insights={vm.insights} />
    </motion.div>
  );
});
