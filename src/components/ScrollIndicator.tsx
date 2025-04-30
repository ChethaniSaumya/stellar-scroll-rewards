
import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Info, 
  Image, 
  Route, 
  Coins, 
  Users, 
  Share2 
} from 'lucide-react';

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const sections: Section[] = [
  { 
    id: 'rewards', 
    label: 'Rewards', 
    icon: <Award className="h-5 w-5" /> 
  },
  { 
    id: 'about', 
    label: 'About', 
    icon: <Info className="h-5 w-5" /> 
  },
  { 
    id: 'nfts', 
    label: 'NFTs', 
    icon: <Image className="h-5 w-5" /> 
  },
  { 
    id: 'roadmap', 
    label: 'Roadmap', 
    icon: <Route className="h-5 w-5" /> 
  },
  { 
    id: 'token', 
    label: 'Token', 
    icon: <Coins className="h-5 w-5" /> 
  },
  { 
    id: 'team', 
    label: 'Team', 
    icon: <Users className="h-5 w-5" /> 
  },
  { 
    id: 'socials', 
    label: 'Socials', 
    icon: <Share2 className="h-5 w-5" /> 
  },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('');
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Only set up scroll detection after a longer delay to ensure page is fully loaded
  useEffect(() => {
    // Wait for a significant delay before enabling scroll detection
    const initialDelay = setTimeout(() => {
      const handleScroll = () => {
        // Don't update active section if the user is manually scrolling
        if (isManualScrolling.current) return;
        
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      // Only run the initial check after a delay
      setTimeout(() => {
        handleScroll();
      }, 1000);
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, 1500); // Increased delay to prevent initial auto-scrolling
    
    return () => clearTimeout(initialDelay);
  }, []);

  const scrollToSection = (id: string) => {
    // Prevent the scroll detection from updating during manual navigation
    isManualScrolling.current = true;
    
    // Update active section immediately for better UX
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Reset the manual scrolling flag after animation completes
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="glass-morphism py-4 px-2 rounded-full">
        <ul className="flex flex-col gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="relative flex items-center group"
                aria-label={`Scroll to ${section.label} section`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-stellar-purple text-white'
                      : 'bg-white/10 text-gray-400 group-hover:bg-white/20'
                  }`}
                >
                  {section.icon}
                </div>
                <span
                  className={`absolute right-full mr-2 opacity-0 group-hover:opacity-100 text-sm whitespace-nowrap transition-opacity duration-300 ${
                    activeSection === section.id ? 'text-stellar-purple' : 'text-gray-300'
                  }`}
                >
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollIndicator;
