import React, { useState } from 'react';
import { ArrowRight, Clock, Brain, LineChart, FileText, Settings, CheckCircle2 } from 'lucide-react';

const BlogAICarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Neon color
  const neonColor = "#ADFF2F";
  
  const slides = [
    {
      id: 1,
      title: "BLOG POST AI",
      subtitle: "EVERY DAY",
      description: "Publish 1 blog post a day in just 5 hours a month with AI-powered content creation.",
      icon: <Brain size={48} color={neonColor} />,
      code: "BLOG-01",
    },
    {
      id: 2,
      title: "THE AI REVOLUTION",
      subtitle: "BLOG WRITING 2025",
      description: "Before:\n• Cost: $100+ per post\n• Time: 8+ hours\n\nToday:\n• Cost: <$4 per post\n• Time: 10 minutes",
      icon: <Clock size={48} color={neonColor} />,
      code: "BLOG-02",
    },
    {
      id: 3,
      title: "THE SEO STRATEGY",
      subtitle: "5-STEP PROCESS",
      description: "1. Group keywords by format\n2. Use AI templates\n3. Bulk import keywords\n4. Schedule content\n5. Refine & optimize",
      icon: <Settings size={48} color={neonColor} />,
      code: "BLOG-03",
    },
    {
      id: 4,
      title: "CONTENT FORMATS",
      subtitle: "TEMPLATE GROUPS",
      description: "• [Competitor] Alternatives\n• Best [Thing] in 2025\n• How to [Do Thing]\n• [Thing] Ideas",
      icon: <FileText size={48} color={neonColor} />,
      code: "BLOG-04",
    },
    {
      id: 5,
      title: "AUTOMATION",
      subtitle: "HANDS-OFF PUBLISHING",
      description: "Connect your CMS and schedule posts to publish automatically. One post per day, generated in bulk.",
      icon: <CheckCircle2 size={48} color={neonColor} />,
      code: "BLOG-05",
    },
    {
      id: 6,
      title: "REAL RESULTS",
      subtitle: "FEBRUARY 2025",
      description: "• Avg. organic traffic: 25,726\n• Organic pages: 278\n• Time investment: 5 hours/month\n• Cost per post: $3.99",
      icon: <LineChart size={48} color={neonColor} />,
      code: "BLOG-06",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-gray-100 font-mono flex flex-col items-center justify-center p-4">
      {/* Navigation */}
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

      {/* Slide Card */}
      <div 
        className="relative w-full max-w-md border-2 rounded-md overflow-hidden bg-black"
        style={{
          borderColor: neonColor,
          boxShadow: `0 0 15px ${neonColor}30`,
          aspectRatio: '9/16'
        }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `linear-gradient(to right, ${neonColor}10 1px, transparent 1px), 
                          linear-gradient(to bottom, ${neonColor}10 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>

        {/* Particles */}
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

        {/* Tech Elements */}
        <div className="absolute top-5 left-5 text-xs opacity-30" style={{color: neonColor}}>
          &lt;blog/&gt;
        </div>
        <div className="absolute bottom-5 right-5 text-xs opacity-30" style={{color: neonColor}}>
          {'{ai: 2025}'}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b" 
            style={{borderColor: neonColor}}>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-2 animate-pulse" 
                style={{backgroundColor: neonColor}}></div>
              <span className="text-xs tracking-widest">BLOG_AI</span>
            </div>
            <div className="text-xs tracking-widest">ID:{slides[activeSlide].code}</div>
          </div>

          {/* Main Content */}
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

            {/* Separator */}
            <div className="w-24 h-1 mb-6" style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${neonColor}, ${neonColor} 5px, transparent 5px, transparent 10px)`
            }}></div>

            {/* Content Box */}
            <div className="relative border rounded-md p-4 w-full bg-black bg-opacity-70"
              style={{borderColor: neonColor}}>
              
              {/* Corners */}
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

        {/* Navigation Arrows */}
        <button 
          onClick={() => setActiveSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-full border"
          style={{borderColor: neonColor}}
        >
          <ArrowRight size={16} color={neonColor} className="transform rotate-180" />
        </button>

        <button 
          onClick={() => setActiveSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)}
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

export default BlogAICarousel;
