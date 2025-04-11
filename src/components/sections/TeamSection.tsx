
const team = [
  {
    name: "Alex Mitchell",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop",
    description: "Blockchain enthusiast with 8 years in digital product development."
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    description: "Award-winning digital artist specialized in NFT creation."
  },
  {
    name: "Michael Zhang",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    description: "Full-stack engineer with expertise in blockchain technologies."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    description: "Experienced in growth strategies for Web3 and blockchain projects."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals behind Stellar Scroll.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-stellar-purple font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
