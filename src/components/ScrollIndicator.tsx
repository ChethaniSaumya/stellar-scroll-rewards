
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Wait a brief moment before setting up the scroll listener
    // to prevent any initial auto-scrolling
    const timeout = setTimeout(() => {
      const handleScroll = () => {
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
      // Initial check for active section
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, 500); // Short delay to prevent initial auto-scrolling
    
    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
