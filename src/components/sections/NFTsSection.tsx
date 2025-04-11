
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const NFTsSection = () => {
  const nftImages = [
    "https://images.unsplash.com/photo-1595923533867-9a5b8cea584a?q=80&w=600&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633242447943-944e81ea9b77?q=80&w=600&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626162952061-ab1a0c504853?q=80&w=600&h=600&auto=format&fit=crop",
  ];

  return (
    <section id="nfts" className="section overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-stellar-purple/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NFT <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A limited collection of 5000 unique NFTs with strong utility in our ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {nftImages.map((src, index) => (
            <div 
              key={index} 
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 md:w-1/3 ${
                index === 1 ? 'md:translate-y-12' : ''
              }`}
            >
              <img 
                src={src} 
                alt={`Stellar NFT ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Stellar NFT #{index + 1}</h3>
                  <p className="text-gray-300">Unique digital collectible with utility</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-morphism max-w-2xl mx-auto p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Minting Information</h3>
          <p className="text-lg text-gray-300 mb-6">
            Minting will take place exclusively on Magic Eden. Join our community to stay updated on the mint date and details.
          </p>
          <Button className="bg-gradient-to-r from-[#E42575] to-[#F3A012] text-white px-6 py-2 text-lg flex items-center gap-2 mx-auto rounded-xl hover:opacity-90 transition-opacity">
            Mint on Magic Eden
            <ExternalLink size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NFTsSection;
