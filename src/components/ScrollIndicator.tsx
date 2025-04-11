
import { useState, useEffect } from 'react';

type Section = {
  id: string;
  label: string;
};

const sections: Section[] = [
  { id: 'rewards', label: 'Rewards' },
  { id: 'about', label: 'About' },
  { id: 'nfts', label: 'NFTs' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'token', label: 'Token' },
  { id: 'team', label: 'Team' },
  { id: 'socials', label: 'Socials' },
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-stellar-purple'
                      : 'bg-gray-600 group-hover:bg-gray-400'
                  }`}
                />
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
