import { memo } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../shared/utils/animations";
import { FooterContact } from "../../home/views/FooterContact";
import { useContactViewModel } from "../viewModels/useContactViewModel";

export default memo(function Contact() {
  const vm = useContactViewModel();

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="ae-page pt-16 sm:pt-20"
    >
      <FooterContact contact={vm.contact} />
    </motion.div>
  );
});
