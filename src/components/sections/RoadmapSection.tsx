
import { useState } from 'react';
import { 
  ChevronRight, 
  Clock, 
  CalendarCheck, 
  Milestone
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const roadmapItems = [
  {
    quarter: "Q2 2025",
    title: "Project Launch",
    icon: <CalendarCheck className="h-5 w-5" />,
    items: [
      "Website release",
      "Community building",
      "NFT artwork development",
      "Whitepaper publication"
    ],
    status: "in-progress"
  },
  {
    quarter: "Q3 2025",
    title: "NFT Collection",
    icon: <Clock className="h-5 w-5" />,
    items: [
      "NFT minting on Magic Eden",
      "Rewards system launch",
      "Community events",
      "Partnership announcements"
    ],
    status: "upcoming"
  },
  {
    quarter: "Q4 2025",
    title: "Ecosystem Expansion",
    icon: <Milestone className="h-5 w-5" />,
    items: [
      "Staking platform beta",
      "Games development",
      "Swap feature integration",
      "TalentDAO foundation"
    ],
    status: "upcoming"
  },
  {
    quarter: "Q1 2026",
    title: "Full Platform Release",
    icon: <Milestone className="h-5 w-5" />,
    items: [
      "Token launch",
      "Full staking implementation",
      "Games release",
      "Expanded partnerships"
    ],
    status: "upcoming"
  }
];

const RoadmapSection = () => {
  const [activeTab, setActiveTab] = useState<string>("in-progress");
  
  const filteredItems = activeTab === "all" 
    ? roadmapItems 
    : roadmapItems.filter(item => item.status === activeTab);

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
          
          {/* Roadmap Filter Tabs */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === "all" 
                  ? "bg-stellar-purple text-white" 
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              All Phases
            </button>
            <button 
              onClick={() => setActiveTab("in-progress")}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === "in-progress" 
                  ? "bg-stellar-purple text-white" 
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              In Progress
            </button>
            <button 
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === "upcoming" 
                  ? "bg-stellar-purple text-white" 
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>
        
        {/* Desktop Timeline View */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />
          
          <div className="space-y-24 relative">
            {filteredItems.map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="absolute left-1/2 top-0 w-5 h-5 rounded-full bg-stellar-purple transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(155,135,245,0.7)]" />
                
                <div className={`md:w-1/2 transition-all duration-500 hover:translate-y-[-5px] ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="glass-morphism p-8 rounded-2xl border border-stellar-purple/20 group hover:border-stellar-purple/50 transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-stellar-purple font-medium text-sm">
                        {item.quarter}
                      </div>
                      <div className={`text-xs uppercase font-medium px-3 py-1 rounded-full ${
                        item.status === "in-progress" 
                          ? "bg-stellar-purple/20 text-stellar-purple" 
                          : "bg-gray-800 text-gray-400"
                      }`}>
                        {item.status === "in-progress" ? "In Progress" : "Upcoming"}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-stellar-purple/10 p-2 rounded-full">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-75">
                          <ChevronRight className="text-stellar-purple mr-2 h-5 w-5 flex-shrink-0" />
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
        
        {/* Mobile Accordion View */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-stellar-purple/20 glass-morphism rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="bg-stellar-purple/10 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-stellar-purple">{item.quarter}</div>
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="text-stellar-purple mr-2 h-5 w-5 flex-shrink-0" />
                        <span className="text-gray-300">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
