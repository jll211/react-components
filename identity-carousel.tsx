import React, { useState } from 'react';
import { Brain, Target, Code2, GitBranch, Binary, Rocket, Cpu, ArrowRight, RefreshCw } from 'lucide-react';

const IdentityCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Electric blue for a more corporate/tech feel
  const neonColor = "#00FFFF";
  
  const slides = [
    {
      id: 1,
      title: "20 YEARS → 3 MINUTES",
      subtitle: "BILLION-DOLLAR FRAMEWORK",
      description: "The identity-based goal-setting framework that built a $1B company. Used by founders scaling from $1M to $100M. Time to transform. 🚀",
      icon: <Rocket size={48} color={neonColor} />,
      code: "IDENTITY-01",
    },
    {
      id: 2,
      title: "THE $2.1M WALL",
      subtitle: "CASE STUDY",
      description: "Two founders hit their ceiling at $2.1M. Not because of market or competition. Their identity was the bottleneck. Your goals demand transformation.",
      icon: <Target size={48} color={neonColor} />,
      code: "IDENTITY-02",
    },
    {
      id: 3,
      title: "IDENTITY PRINCIPLE",
      subtitle: "CORE CONCEPT",
      description: "Goals aren't just targets. They're demands to become someone new. The bigger your goal, the more unrecognizable you must become.",
      icon: <Brain size={48} color={neonColor} />,
      code: "IDENTITY-03",
    },
    {
      id: 4,
      title: "SET IMPOSSIBLE GOALS",
      subtitle: "STEP 1",
      description: "Don't aim for $1.2M → $10M ARR. Set goals your current self CAN'T achieve. Better systems won't bridge the gap. Become worthy of $10M.",
      icon: <GitBranch size={48} color={neonColor} />,
      code: "IDENTITY-04",
    },
    {
      id: 5,
      title: "IDENTIFY DEMANDS",
      subtitle: "STEP 2",
      description: "• Let go of being the 'nice boss'\n• Fire underperforming long-term employees\n• Choose business health over relationships\n\nNot willing to pay the price? Stay stuck.",
      icon: <Binary size={48} color={neonColor} />,
      code: "IDENTITY-05",
    },
    {
      id: 6,
      title: "STRIP TO ZERO",
      subtitle: "STEP 3",
      description: "Wipe your identity clean:\n• No 'this is who I am'\n• No 'we've always done it this way'\n• No sacred cows\n\nYour old self must die for the new to emerge.",
      icon: <RefreshCw size={48} color={neonColor} />,
      code: "IDENTITY-06",
    },
    {
      id: 7,
      title: "WRITE NEW CODE",
      subtitle: "STEP 4",
      description: "Your brain has the hardware. Install better software:\n• New beliefs\n• New habits\n• New patterns\n\nIt's not about more power. It's about better programming.",
      icon: <Code2 size={48} color={neonColor} />,
      code: "IDENTITY-07",
    },
    {
      id: 8,
      title: "INSTALL & DEBUG",
      subtitle: "STEP 5",
      description: "Don't run old & new programs simultaneously. System crash inevitable.\n• Launch new identity now\n• Monitor old patterns\n• Debug ruthlessly\n\nNo legacy code.",
      icon: <Cpu size={48} color={neonColor} />,
      code: "IDENTITY-08",
    }
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-100 font-mono flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-8 h-8 flex items-center justify-center border ${
                activeSlide === index ? 'border-2' : 'border'
              }`}
              style={{
                borderColor: neonColor,
                backgroundColor: activeSlide === index ? 'rgba(0, 255, 255, 0.1)' : 'transparent'
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      
      <div 
        className="relative w-full max-w-md border-2 rounded-md overflow-hidden bg-gray-900"
        style={{
          borderColor: neonColor,
          boxShadow: `0 0 15px ${neonColor}30`,
          aspectRatio: '9/16'
        }}
      >
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `linear-gradient(to right, ${neonColor}10 1px, transparent 1px), 
                          linear-gradient(to bottom, ${neonColor}10 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: neonColor,
              opacity: 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 3px ${neonColor}`
            }}
          ></div>
        ))}
        
        <div className="absolute top-5 left-5 text-xs opacity-30" style={{color: neonColor}}>
          &lt;identity/&gt;
        </div>
        <div className="absolute bottom-5 right-5 text-xs opacity-30" style={{color: neonColor}}>
          {'{transform: now}'}
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b" 
            style={{borderColor: neonColor}}>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 animate-pulse" 
                style={{backgroundColor: neonColor}}></div>
              <span className="text-xs tracking-widest">IDENTITY_PROTOCOL</span>
            </div>
            <div className="text-xs tracking-widest">ID:{slides[activeSlide].code}</div>
          </div>
          
          <div className="flex-grow flex flex-col justify-center items-center p-6 text-center">
            <div className="mb-5">
              {slides[activeSlide].icon}
            </div>
            <h2 className="text-3xl font-black tracking-wider mb-2">
              {slides[activeSlide].title}
            </h2>
            <p className="text-lg uppercase tracking-wider opacity-90 mb-6">
              {slides[activeSlide].subtitle}
            </p>
            
            <div className="w-24 h-1 mb-6" style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${neonColor}, ${neonColor} 5px, transparent 5px, transparent 10px)`
            }}></div>
            
            <div className="relative border rounded-md p-4 w-full bg-gray-900 bg-opacity-70"
              style={{borderColor: neonColor}}>
              
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l"
                style={{borderColor: neonColor}}></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r"
                style={{borderColor: neonColor}}></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l"
                style={{borderColor: neonColor}}></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r"
                style={{borderColor: neonColor}}></div>
              
              <pre className="text-sm whitespace-pre-line leading-relaxed"
                style={{fontFamily: 'inherit'}}>
                {slides[activeSlide].description}
              </pre>
            </div>
          </div>
          
          <div className="flex items-center justify-between border-t p-3 text-xs"
            style={{borderColor: neonColor}}>
            <div>TRANSFORM_NOW</div>
            <div>{activeSlide + 1}/{slides.length}</div>
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-full border"
          style={{borderColor: neonColor}}
        >
          <ArrowRight size={16} color={neonColor} className="transform rotate-180" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-full border"
          style={{borderColor: neonColor}}
        >
          <ArrowRight size={16} color={neonColor} />
        </button>
      </div>
      
      <div className="mt-4 text-center text-xs text-gray-400">
        Swipe or click for more slides • {activeSlide + 1}/{slides.length}
      </div>
    </div>
  );
};

export default IdentityCarousel;