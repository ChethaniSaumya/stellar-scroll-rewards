
const roadmapItems = [
  {
    quarter: "Q2 2025",
    title: "Project Launch",
    items: [
      "Website release",
      "Community building",
      "NFT artwork development",
      "Whitepaper publication"
    ]
  },
  {
    quarter: "Q3 2025",
    title: "NFT Collection",
    items: [
      "NFT minting on Magic Eden",
      "Rewards system launch",
      "Community events",
      "Partnership announcements"
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Ecosystem Expansion",
    items: [
      "Staking platform beta",
      "Games development",
      "Swap feature integration",
      "TalentDAO foundation"
    ]
  },
  {
    quarter: "Q1 2026",
    title: "Full Platform Release",
    items: [
      "Token launch",
      "Full staking implementation",
      "Games release",
      "Expanded partnerships"
    ]
  }
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our strategic plan for developing and expanding the Stellar Scroll ecosystem.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />
          
          <div className="space-y-24 relative">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Milestone dot for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-stellar-purple transform -translate-x-1/2 z-10" />
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="glass-morphism p-8 rounded-2xl">
                    <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-stellar-purple font-medium text-sm mb-4">
                      {item.quarter}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-stellar-purple mr-2">•</span>
                          <span className="text-gray-300">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
