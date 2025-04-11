
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white">STELLAR<span className="text-gradient">SCROLL</span></h1>
          </Link>
          
          <nav className="hidden md:flex ml-10 space-x-6">
            <Link to="/staking" className="text-gray-300 hover:text-white transition-colors">
              Staking <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/games" className="text-gray-300 hover:text-white transition-colors">
              Games <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/swap" className="text-gray-300 hover:text-white transition-colors">
              Swap <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/talentdao" className="text-gray-300 hover:text-white transition-colors">
              TalentDAO <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/rewards" className="text-white font-medium hover:text-stellar-purple transition-colors">
              Rewards
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <Button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-stellar-purple to-stellar-blue hover:opacity-90 transition-opacity">
            <Wallet size={16} />
            Connect Wallet
          </Button>
          
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-morphism mt-2 px-4 py-5">
          <nav className="flex flex-col space-y-4">
            <Link to="/staking" className="text-gray-300 hover:text-white transition-colors">
              Staking <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/games" className="text-gray-300 hover:text-white transition-colors">
              Games <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/swap" className="text-gray-300 hover:text-white transition-colors">
              Swap <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/talentdao" className="text-gray-300 hover:text-white transition-colors">
              TalentDAO <span className="text-xs text-stellar-purple ml-1">Soon</span>
            </Link>
            <Link to="/rewards" className="text-white font-medium hover:text-stellar-purple transition-colors">
              Rewards
            </Link>
            <Button className="flex items-center gap-2 w-full justify-center bg-gradient-to-r from-stellar-purple to-stellar-blue hover:opacity-90 transition-opacity">
              <Wallet size={16} />
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
