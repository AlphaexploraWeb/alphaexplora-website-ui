import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../../../shared/utils/animations";
import { useHomeViewModel } from "../viewModels/useHomeViewModel";
import { ClientTicker } from "./ClientTicker";
import { HeroSection } from "./HeroSection";
import { HomeRouteShowcase } from "./HomeRouteShowcase";

export default memo(function Home() {
  const vm = useHomeViewModel();
  const navigate = useNavigate();

  const handleStartTransformation = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const handleExploreServices = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="ae-page"
    >
      <HeroSection
        hero={vm.hero}
        onStartTransformation={handleStartTransformation}
        onExploreServices={handleExploreServices}
      />
      <ClientTicker clients={vm.clients} />
      <HomeRouteShowcase />
    </motion.div>
  );
});
