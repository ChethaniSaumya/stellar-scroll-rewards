
import { CircleDollarSign, Cpu, Lock, Users } from 'lucide-react';

const TokenSection = () => {
  const tokenDistribution = [
    { label: "Community Rewards", value: 30, color: "bg-stellar-purple" },
    { label: "Team & Development", value: 20, color: "bg-stellar-blue" },
    { label: "Liquidity", value: 25, color: "bg-stellar-pink" },
    { label: "Marketing & Partnerships", value: 15, color: "bg-stellar-orange" },
    { label: "Reserve", value: 10, color: "bg-gray-500" },
  ];

  const tokenFeatures = [
    {
      icon: <Users className="h-8 w-8 text-stellar-purple" />,
      title: "Community Governance",
      description: "Token holders can vote on key decisions affecting the Stellar Scroll ecosystem."
    },
    {
      icon: <Lock className="h-8 w-8 text-stellar-blue" />,
      title: "Stake & Earn",
      description: "Earn passive rewards by staking your tokens in our upcoming platform."
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-stellar-pink" />,
      title: "Ecosystem Currency",
      description: "Used for transactions, NFT purchases, and accessing premium features."
    },
    {
      icon: <Cpu className="h-8 w-8 text-stellar-orange" />,
      title: "Smart Contract Integration",
      description: "Powering the behind-the-scenes functionality of our applications."
    },
  ];

  return (
    <section id="token" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stellar <span className="text-gradient">Token</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The native cryptocurrency powering the Stellar Scroll ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
            <div className="glass-morphism p-8 rounded-2xl h-full">
              <div className="mb-8">
                <div className="h-8 w-full flex rounded-full overflow-hidden">
                  {tokenDistribution.map((item, index) => (
                    <div 
                      key={index} 
                      className={`${item.color} h-full`} 
                      style={{ width: `${item.value}%` }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${item.color} mr-2`} />
                    <div>
                      <p className="text-sm">{item.label}</p>
                      <p className="font-bold">{item.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Token Utility</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tokenFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-morphism p-6 rounded-2xl"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
