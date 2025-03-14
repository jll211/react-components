import React, { useState } from 'react';
import { Zap, Code2, Clock, Globe, CheckCircle2, ArrowRight, DollarSign, Settings, Cpu } from 'lucide-react';

const NoCodeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Neon green-yellow color
  const neonColor = "#ADFF2F";
  
  const slides = [
    {
      id: 1,
      title: "NO-CODE REVOLUTION",
      subtitle: "EINSTEIGER-GUIDE 2025",
      description: "Der schnellste Weg, Apps ohne Programmierung zu entwickeln. Entdecke die Technologie, die traditionelle Entwicklung überholt. 💻",
      icon: <Zap size={48} color={neonColor} />,
      code: "NOCODE-01",
    },
    {
      id: 2,
      title: "WAS IST NO-CODE?",
      subtitle: "DEFINITIONS-GUIDE",
      description: "Visuelle Entwicklungsplattformen, die komplexe Apps ohne Code ermöglichen. Drag-and-drop statt Programmierung. Für Einsteiger und Profis.",
      icon: <Code2 size={48} color={neonColor} />,
      code: "NOCODE-02",
    },
    {
      id: 3,
      title: "VORTEIL: GESCHWINDIGKEIT",
      subtitle: "ZEITERSPARNISS",
      description: "• Projekte in Tagen statt Monaten\n• Sofortige Anpassungen möglich\n• Schnellere Markteinführung\n• Keine Entwicklerwarteschlangen",
      icon: <Clock size={48} color={neonColor} />,
      code: "NOCODE-03",
    },
    {
      id: 4,
      title: "VORTEIL: ZUGÄNGLICHKEIT",
      subtitle: "FÜR ALLE TEAMS",
      description: "• Fachabteilungen erstellen eigene Apps\n• Keine Programmierkenntnisse nötig\n• Besseres Geschäftsverständnis\n• Mehr Kreativität und Innovation",
      icon: <Globe size={48} color={neonColor} />,
      code: "NOCODE-04",
    },
    {
      id: 5,
      title: "VORTEIL: KOSTENEFFIZIENZ",
      subtitle: "ROI-MAXIMIERUNG",
      description: "• Reduzierte Entwicklungskosten\n• Kleinere Teams notwendig\n• Niedrigere Wartungskosten\n• Schnellerer Return on Investment",
      icon: <DollarSign size={48} color={neonColor} />,
      code: "NOCODE-05",
    },
    {
      id: 6,
      title: "VORTEIL: ANPASSBARKEIT",
      subtitle: "FLEXIBILITÄT",
      description: "• Änderungen in Minuten implementiert\n• Einfache Integrationen möglich\n• Skalierbare Lösungen\n• Agile Reaktion auf Marktbedürfnisse",
      icon: <Settings size={48} color={neonColor} />,
      code: "NOCODE-06",
    },
    {
      id: 7,
      title: "TOP NO-CODE TOOLS",
      subtitle: "2025 VERGLEICH",
      description: "• LAZY AI: Vollständig integriertes System\n• ZAPIER: Workflow-Automation\n• VO: Benutzeroberflächen-Spezialist\n• BUBBLE: Umfassende Web-Apps",
      icon: <Cpu size={48} color={neonColor} />,
      code: "NOCODE-07",
    },
    {
      id: 8,
      title: "GESCHWINDIGKEITSVERGLEICH",
      subtitle: "ZEIT BIS ZUR FERTIGEN APP",
      description: "• NO-CODE: Minuten bis Tage\n• TRADITIONELL: Wochen bis Monate\n• HYBRID: Beste Balance für komplexe Projekte\n• ROI: 3-5x schneller mit No-Code",
      icon: <Clock size={48} color={neonColor} />,
      code: "NOCODE-08",
    },
    {
      id: 9,
      title: "NOCODEBASE.DE",
      subtitle: "COMING SOON",
      description: "Alles was du brauchst, um schnell und kostenlos eigene Apps zu entwickeln. Deine No-Code Zukunft beginnt hier. 🚀",
      icon: <CheckCircle2 size={48} color={neonColor} />,
      code: "NOCODE-09",
    }
  ];
  
  // Navigation controls
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <div className="w-full min-h-screen bg-black text-gray-100 font-mono flex flex-col items-center justify-center p-4">
      {/* Carousel controls */}
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
                backgroundColor: activeSlide === index ? 'rgba(173, 255, 47, 0.1)' : 'transparent'
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      
      {/* Current slide card - styled for TikTok dimensions (9:16) */}
      <div 
        className="relative w-full max-w-md border-2 rounded-md overflow-hidden bg-black"
        style={{
          borderColor: neonColor,
          boxShadow: `0 0 15px ${neonColor}30`,
          aspectRatio: '9/16'
        }}
      >
        {/* Digital grid background */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `linear-gradient(to right, ${neonColor}10 1px, transparent 1px), 
                          linear-gradient(to bottom, ${neonColor}10 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Floating particles */}
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
        
        {/* Tech element overlays */}
        <div className="absolute top-5 left-5 text-xs opacity-30" style={{color: neonColor}}>
          &lt;no-code/&gt;
        </div>
        <div className="absolute bottom-5 right-5 text-xs opacity-30" style={{color: neonColor}}>
          {'{build: 2025}'}
        </div>
        
        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b" 
            style={{borderColor: neonColor}}>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 animate-pulse" 
                style={{backgroundColor: neonColor}}></div>
              <span className="text-xs tracking-widest">NO_CODE_AI</span>
            </div>
            <div className="text-xs tracking-widest">ID:{slides[activeSlide].code}</div>
          </div>
          
          {/* Main content */}
          <div className="flex-grow flex flex-col justify-center items-center p-6 text-center">
            {/* Icon & title */}
            <div className="mb-5">
              {slides[activeSlide].icon}
            </div>
            <h2 className="text-3xl font-black tracking-wider mb-2">
              {slides[activeSlide].title}
            </h2>
            <p className="text-lg uppercase tracking-wider opacity-90 mb-6">
              {slides[activeSlide].subtitle}
            </p>
            
            {/* Caution stripe */}
            <div className="w-24 h-1 mb-6" style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${neonColor}, ${neonColor} 5px, transparent 5px, transparent 10px)`
            }}></div>
            
            {/* Content box */}
            <div className="relative border rounded-md p-4 w-full bg-black bg-opacity-70"
              style={{borderColor: neonColor}}>
              
              {/* Corner brackets */}
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
          
          {/* Footer */}
          <div className="flex items-center justify-between border-t p-3 text-xs"
            style={{borderColor: neonColor}}>
            <div>2025_EDITION</div>
            <div>{activeSlide + 1}/{slides.length}</div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-full border"
          style={{borderColor: neonColor}}
        >
          <ArrowRight size={16} color={neonColor} className="transform rotate-180" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-full border"
          style={{borderColor: neonColor}}
        >
          <ArrowRight size={16} color={neonColor} />
        </button>
      </div>
      
      <div className="mt-4 text-center text-xs text-gray-400">
        Swipe oder klicke für mehr Slides • {activeSlide + 1}/{slides.length}
      </div>
    </div>
  );
};

export default NoCodeCarousel;
