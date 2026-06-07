import { memo } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../shared/utils/animations";
import { ClientTicker } from "../../home/views/ClientTicker";
import { useClientsViewModel } from "../viewModels/useClientsViewModel";

export default memo(function Clients() {
  const vm = useClientsViewModel();

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="ae-page"
    >
      <div className="pt-20">
        <ClientTicker clients={vm.clients} />
      </div>
    </motion.div>
  );
});
