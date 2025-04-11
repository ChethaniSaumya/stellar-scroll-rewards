
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
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollIndicator />
      
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
