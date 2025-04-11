
import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Clock, 
  CalendarCheck, 
  Milestone,
  CheckCircle2,
  Timer
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Automatically cycle through roadmap items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null || prev >= roadmapItems.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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
        
        {/* Desktop Interactive Timeline View */}
        <div className="hidden md:block">
          {/* Timeline Bar */}
          <div className="relative h-2 bg-gray-800 rounded-full mb-16 overflow-hidden">
            <div className="absolute left-0 h-full bg-gradient-to-r from-stellar-purple to-stellar-blue transition-all duration-700 ease-in-out" 
              style={{ width: `${((activeIndex !== null ? activeIndex : 0) + 1) * (100 / roadmapItems.length)}%` }} />
            
            {/* Timeline Points */}
            <div className="flex justify-between absolute w-full -top-2">
              {roadmapItems.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-6 h-6 rounded-full transition-all duration-300 border-2 -mt-1 shadow relative z-10",
                    index <= (activeIndex ?? -1) 
                      ? "bg-stellar-purple border-stellar-blue scale-110" 
                      : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                  )}
                >
                  {index === (activeIndex ?? -1) && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-stellar-purple/50" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-morphism group p-6 rounded-2xl transition-all duration-500 border overflow-hidden",
                  index === activeIndex 
                    ? "border-stellar-purple/50 scale-105 shadow-[0_0_20px_rgba(155,135,245,0.3)] -translate-y-2" 
                    : "border-stellar-purple/20 hover:border-stellar-purple/30 hover:-translate-y-1"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-gray-800 text-stellar-purple font-medium text-sm">
                    {item.quarter}
                  </div>
                  <div className={cn(
                    "flex items-center text-xs uppercase font-medium px-3 py-1 rounded-full",
                    item.status === "in-progress" 
                      ? "bg-stellar-purple/20 text-stellar-purple" 
                      : "bg-gray-800 text-gray-400"
                  )}>
                    {item.status === "in-progress" ? (
                      <>
                        <Timer className="h-3 w-3 mr-1 animate-pulse" />
                        In Progress
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        Upcoming
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-stellar-purple text-white" : "bg-stellar-purple/10"
                  )}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      {item.status === "in-progress" ? (
                        <CheckCircle2 className="text-stellar-purple mr-2 h-5 w-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="text-stellar-purple mr-2 h-5 w-5 flex-shrink-0" />
                      )}
                      <span className="text-gray-300">{listItem}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Progress indicator for in-progress items */}
                {item.status === "in-progress" && (
                  <div className="mt-6 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-stellar-purple w-[65%] rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Accordion View */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {roadmapItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={cn(
                  "border-stellar-purple/20 glass-morphism rounded-xl overflow-hidden", 
                  item.status === "in-progress" ? "border-l-4 border-l-stellar-purple" : ""
                )}
              >
                <AccordionTrigger className="px-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className={cn(
                      "p-2 rounded-full", 
                      item.status === "in-progress" ? "bg-stellar-purple/20" : "bg-gray-800"
                    )}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-stellar-purple">{item.quarter}</div>
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className={cn(
                    "mb-4 text-xs uppercase font-medium px-3 py-1 rounded-full inline-flex items-center",
                    item.status === "in-progress" 
                      ? "bg-stellar-purple/20 text-stellar-purple" 
                      : "bg-gray-800 text-gray-400"
                  )}>
                    {item.status === "in-progress" ? (
                      <>
                        <Timer className="h-3 w-3 mr-1 animate-pulse" />
                        In Progress
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        Upcoming
                      </>
                    )}
                  </div>
                  
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start">
                        {item.status === "in-progress" ? (
                          <CheckCircle2 className="text-stellar-purple mr-2 h-5 w-5 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="text-stellar-purple mr-2 h-5 w-5 flex-shrink-0" />
                        )}
                        <span className="text-gray-300">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Progress indicator for in-progress items */}
                  {item.status === "in-progress" && (
                    <div className="mt-6 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-stellar-purple w-[65%] rounded-full" />
                    </div>
                  )}
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
