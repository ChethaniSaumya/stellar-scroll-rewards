
import { useEffect, useLayoutEffect } from 'react';
import Navbar from '@/components/Navbar';
import ScrollIndicator from '@/components/ScrollIndicator';
import HeroSection from '@/components/sections/HeroSection';
import RewardsSection from '@/components/sections/RewardsSection';
import AboutSection from '@/components/sections/AboutSection';
import NFTsSection from '@/components/sections/NFTsSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import TokenSection from '@/components/sections/TokenSection';
import TeamSection from '@/components/sections/TeamSection';
import SocialsSection from '@/components/sections/SocialsSection';
import Footer from '@/components/Footer';

const Home = () => {
  // Use useLayoutEffect to ensure scrolling happens before any rendering
  useLayoutEffect(() => {
    // Force scroll to top and prevent any auto-scrolling
    window.scrollTo(0, 0);
    
    // Disable any smooth scrolling temporarily
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    
    // Restore original scroll behavior after a delay
    const timer = setTimeout(() => {
      html.style.scrollBehavior = originalScrollBehavior;
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {/* Temporarily disable ScrollIndicator until we fix the auto-scroll issues */}
      {/* <ScrollIndicator /> */}
      
      <main>
        <HeroSection />
        <RewardsSection />
        <AboutSection />
        <NFTsSection />
        <RoadmapSection />
        <TokenSection />
        <TeamSection />
        <SocialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
