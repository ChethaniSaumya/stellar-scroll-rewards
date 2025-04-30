
import { Link } from 'react-router-dom';
import { ArrowDownCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToRewards = (e: React.MouseEvent<SVGSVGElement | HTMLElement>) => {
    e.preventDefault();
    const rewardsSection = document.getElementById('rewards');
    if (rewardsSection) {
      rewardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-stellar-purple/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-stellar-blue/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Stellar Scroll</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Explore the future of digital rewards in the blockchain space
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/rewards">
            <Button className="bg-gradient-to-r from-stellar-purple to-stellar-blue text-white px-8 py-6 text-lg flex items-center gap-2 rounded-xl hover:opacity-90 transition-opacity">
              <Sparkles size={20} />
              Claim Your Rewards
            </Button>
          </Link>
          <Button 
            onClick={scrollToRewards}
            variant="outline" 
            className="px-8 py-6 border-white/20 text-white text-lg hover:bg-white/5 transition-colors rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <ArrowDownCircle 
        onClick={scrollToRewards}
        className="absolute bottom-10 animate-float cursor-pointer w-10 h-10 text-white/80 hover:text-white transition-colors" 
      />
    </div>
  );
};

export default HeroSection;
