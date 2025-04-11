
import { Code, Gem, Rocket } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Gem className="h-10 w-10 text-stellar-purple" />,
      title: "Exclusive NFTs",
      description: "Access to limited edition artwork and digital collectibles with real utility in our ecosystem."
    },
    {
      icon: <Rocket className="h-10 w-10 text-stellar-blue" />,
      title: "Community Rewards",
      description: "Earn points for your participation and engagement, redeemable for exclusive benefits."
    },
    {
      icon: <Code className="h-10 w-10 text-stellar-pink" />,
      title: "Blockchain Innovation",
      description: "Built on cutting-edge technology for secure, transparent, and efficient digital interactions."
    }
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Stellar Scroll</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stellar Scroll is a community-driven blockchain project combining NFTs, rewards, and innovative technology to create a vibrant digital ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-morphism p-8 rounded-2xl transition-transform hover:scale-105 duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
