import { memo } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../shared/utils/animations";
import { ServicesMatrix } from "../../home/views/ServicesMatrix";
import { useServicesViewModel } from "../viewModels/useServicesViewModel";

export default memo(function Services() {
  const vm = useServicesViewModel();

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="ae-page pt-16 sm:pt-20"
    >
      <ServicesMatrix services={vm.services} />
    </motion.div>
  );
});
