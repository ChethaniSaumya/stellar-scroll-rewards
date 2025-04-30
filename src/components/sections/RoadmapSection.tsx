
import { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Clock, 
  CalendarCheck, 
  Milestone,
  CheckCircle2,
  Timer,
  Sparkles,
  Rocket,
  Zap,
  Globe
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
    status: "in-progress",
    mainIcon: <Sparkles className="h-12 w-12 text-stellar-purple" strokeWidth={1.5} />,
    bgColor: "from-stellar-purple/10 to-transparent",
    accent: "stellar-purple"
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
    status: "upcoming",
    mainIcon: <Rocket className="h-12 w-12 text-stellar-blue" strokeWidth={1.5} />,
    bgColor: "from-stellar-blue/10 to-transparent",
    accent: "stellar-blue"
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
    status: "upcoming",
    mainIcon: <Zap className="h-12 w-12 text-stellar-pink" strokeWidth={1.5} />,
    bgColor: "from-stellar-pink/10 to-transparent",
    accent: "stellar-pink"
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
    status: "upcoming",
    mainIcon: <Globe className="h-12 w-12 text-stellar-orange" strokeWidth={1.5} />,
    bgColor: "from-stellar-orange/10 to-transparent",
    accent: "stellar-orange"
  }
];

const RoadmapSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Auto-cycle through roadmap items
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

  // Scroll active item into view in the timeline
  useEffect(() => {
    if (activeIndex !== null && timelineRef.current) {
      const activeElement = timelineRef.current.querySelector(`[data-index="${activeIndex}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeIndex]);

  return (
    <section id="roadmap" className="section-padding overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-stellar-purple/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-stellar-blue/10 rounded-full blur-3xl opacity-40" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our strategic plan for developing and expanding the Stellar Scroll ecosystem.
          </p>
        </div>
        
        {/* Desktop Timeline View */}
        <div className="hidden md:block">
          {/* Interactive Timeline Track */}
          <div className="relative" ref={timelineRef}>
            <div className="h-1 bg-gray-800 rounded-full mb-16 overflow-hidden">
              <div className="absolute left-0 h-full bg-gradient-to-r from-stellar-purple via-stellar-pink to-stellar-blue transition-all duration-700 ease-in-out" 
                style={{ width: `${((activeIndex !== null ? activeIndex : 0) + 1) * (100 / roadmapItems.length)}%` }} />
            </div>
            
            {/* Timeline Points */}
            <div className="flex justify-between absolute w-full top-0 -mt-2.5">
              {roadmapItems.map((item, index) => (
                <button 
                  key={index}
                  data-index={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative flex flex-col items-center group",
                  )}
                >
                  <div 
                    className={cn(
                      "w-6 h-6 rounded-full transition-all duration-500 border-2 flex items-center justify-center",
                      index <= (activeIndex ?? -1) 
                        ? `bg-${item.accent} border-white` 
                        : "bg-gray-700 border-gray-600 hover:bg-gray-600 group-hover:scale-110"
                    )}
                  >
                    {index <= (activeIndex ?? -1) && (
                      <div className="animate-ping absolute inset-0 rounded-full bg-white/30" />
                    )}
                  </div>
                  
                  <span className={cn(
                    "text-sm font-medium mt-2 py-1 px-2 whitespace-nowrap transition-all duration-300",
                    index === activeIndex ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                  )}>
                    {item.quarter}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Card with Animation */}
          {activeIndex !== null && (
            <div className="flex items-center justify-center my-8">
              <div
                className={cn(
                  "glass-morphism p-8 rounded-3xl transition-all duration-700 max-w-4xl w-full relative overflow-hidden",
                  `border-${roadmapItems[activeIndex].accent}/40`
                )}
                style={{
                  boxShadow: `0 0 40px -10px var(--${roadmapItems[activeIndex].accent}/20)`
                }}
              >
                <div className={cn(
                  "absolute inset-0 opacity-10 bg-gradient-to-br",
                  roadmapItems[activeIndex].bgColor
                )} />
                
                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-white/5 border border-white/10 p-2">
                    {roadmapItems[activeIndex].mainIcon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="text-sm text-stellar-purple font-medium">{roadmapItems[activeIndex].quarter}</div>
                        <h3 className="text-3xl font-bold">{roadmapItems[activeIndex].title}</h3>
                      </div>
                      
                      <div className={cn(
                        "flex items-center text-sm uppercase font-medium px-4 py-2 rounded-full",
                        roadmapItems[activeIndex].status === "in-progress" 
                          ? "bg-stellar-purple/20 text-stellar-purple" 
                          : "bg-gray-800 text-gray-400"
                      )}>
                        {roadmapItems[activeIndex].status === "in-progress" ? (
                          <>
                            <Timer className="h-4 w-4 mr-2 animate-pulse" />
                            In Progress
                          </>
                        ) : (
                          <>
                            <Clock className="h-4 w-4 mr-2" />
                            Coming Soon
                          </>
                        )}
                      </div>
                    </div>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-1">
                      {roadmapItems[activeIndex].items.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-start animate-fade-in"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {roadmapItems[activeIndex].status === "in-progress" ? (
                            <CheckCircle2 className={`text-${roadmapItems[activeIndex].accent} mr-2 h-5 w-5 flex-shrink-0`} />
                          ) : (
                            <ChevronRight className={`text-${roadmapItems[activeIndex].accent} mr-2 h-5 w-5 flex-shrink-0`} />
                          )}
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {roadmapItems[activeIndex].status === "in-progress" && (
                      <div className="mt-6 w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${roadmapItems[activeIndex].accent} w-[65%] rounded-full`} 
                          style={{ animation: "progress-pulse 2s ease-in-out infinite" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* All Cards in a Smaller Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {roadmapItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "glass-morphism p-5 rounded-2xl text-left transition-all duration-300 border hover:border-white/20 group",
                  index === activeIndex ? "border-white/20 scale-105" : "border-white/10"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn(
                    "p-2 rounded-full transition-colors duration-300",
                    index === activeIndex ? `bg-${item.accent}/20` : "bg-white/5 group-hover:bg-white/10"
                  )}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{item.quarter}</div>
                    <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
                  </div>
                </div>
                
                <div className={cn(
                  "text-xs inline-flex items-center px-2 py-1 rounded-full",
                  item.status === "in-progress" 
                    ? "bg-stellar-purple/10 text-stellar-purple" 
                    : "bg-gray-800 text-gray-400"
                )}>
                  {item.status === "in-progress" ? "Active" : "Upcoming"}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-4">
          <Accordion 
            type="single" 
            defaultValue="item-0" 
            className="w-full"
          >
            {roadmapItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={cn(
                  "border-white/10 glass-morphism rounded-xl overflow-hidden relative", 
                  item.status === "in-progress" ? `border-${item.accent}` : ""
                )}
              >
                <div className={cn(
                  "absolute inset-0 opacity-5 bg-gradient-to-b",
                  item.bgColor
                )} />
                
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className={cn(
                      "p-2 rounded-full", 
                      item.status === "in-progress" ? `bg-${item.accent}/20` : "bg-white/5"
                    )}>
                      {item.mainIcon ? (
                        <div className="h-6 w-6">{item.mainIcon}</div>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-stellar-purple font-medium">{item.quarter}</div>
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-4 pb-4 relative z-10">
                  <div className={cn(
                    "mb-4 text-xs uppercase font-medium px-3 py-1 rounded-full inline-flex items-center",
                    item.status === "in-progress" 
                      ? `bg-${item.accent}/20 text-${item.accent}` 
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
                        Coming Soon
                      </>
                    )}
                  </div>
                  
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                        {item.status === "in-progress" ? (
                          <CheckCircle2 className={`text-${item.accent} mr-2 h-5 w-5 flex-shrink-0`} />
                        ) : (
                          <ChevronRight className={`text-${item.accent} mr-2 h-5 w-5 flex-shrink-0`} />
                        )}
                        <span className="text-gray-300">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {item.status === "in-progress" && (
                    <div className="mt-6 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full bg-${item.accent} w-[65%] rounded-full`} />
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Add a progress pulse animation to style */}
      <style>
        @keyframes progress-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
    </section>
  );
};

export default RoadmapSection;
