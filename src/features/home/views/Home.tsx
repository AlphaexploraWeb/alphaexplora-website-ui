import React, { memo, useState } from 'react';
import { HeroSection } from './HeroSection';

// Placeholder imports for the next phases
import { ClientTickerSection } from './ClientTickerSection';
// import { PhilosophySection } from './PhilosophySection';
// import { SolutionsStickyScroll } from './SolutionsStickyScroll';
// import { InsightsGrid } from './InsightsGrid';

export const Home: React.FC = memo(() => {
  const [, setIsConnectOpen] = useState(false);

  return (
    <div className="bg-[#010511] flex flex-col w-full relative z-10 overflow-hidden min-h-screen">
      
      {/* Centered, Typography-Led Cinematic Hero */}
      <HeroSection onTriggerConnect={() => setIsConnectOpen(true)} />
      
       
        <ClientTickerSection />
        {/*
        <PhilosophySection />
        <SolutionsStickyScroll onTriggerConnect={() => setIsConnectOpen(true)} />
        <InsightsGrid /> 
      */}

    </div>
  );
});

Home.displayName = "Home";

export default Home;
