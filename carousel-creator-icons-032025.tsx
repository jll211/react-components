import React, { useState, useRef } from 'react';
import { 
  Rocket, Brain, Target, Code2, GitBranch, RefreshCw, Binary, Cpu, Zap, 
  ArrowRight, PlusCircle, Check, Camera, Lightbulb, Sparkles, 
  Star, Trophy, Award, Crown, Heart, Diamond, Cloud, ArrowUpRight, 
  BarChart, LineChart, PieChart, Download
} from 'lucide-react';

const CarouselCreator = () => {
  // Neon color options
  const colorOptions = [
    { name: 'Neon Blue', value: '#00FFFF' },
    { name: 'Neon Green', value: '#39FF14' },
    { name: 'Neon Yellow', value: '#FFFF00' },
    { name: 'Neon Pink', value: '#FF10F0' },
    { name: 'Neon Purple', value: '#BC13FE' },
    { name: 'Neon Orange', value: '#FF5F1F' },
    { name: 'Neon Red', value: '#FF3131' },
    { name: 'Neon Teal', value: '#0AE9C6' }
  ];

  // Icons that can be used
  const iconOptions = [
    { name: 'Rocket', component: Rocket },
    { name: 'Brain', component: Brain },
    { name: 'Target', component: Target },
    { name: 'Code', component: Code2 },
    { name: 'Branch', component: GitBranch },
    { name: 'Refresh', component: RefreshCw },
    { name: 'Binary', component: Binary },
    { name: 'CPU', component: Cpu },
    { name: 'Zap', component: Zap },
    { name: 'Camera', component: Camera },
    { name: 'Lightbulb', component: Lightbulb },
    { name: 'Sparkles', component: Sparkles },
    { name: 'Star', component: Star },
    { name: 'Trophy', component: Trophy },
    { name: 'Award', component: Award },
    { name: 'Crown', component: Crown },
    { name: 'Heart', component: Heart },
    { name: 'Diamond', component: Diamond },
    { name: 'Cloud', component: Cloud },
    { name: 'ArrowUpRight', component: ArrowUpRight },
    { name: 'BarChart', component: BarChart },
    { name: 'LineChart', component: LineChart },
    { name: 'PieChart', component: PieChart }
  ];

  // Initial slide data
  const initialSlides = [
    {
      title: '',
      subtitle: '',
      description: '',
      icon: 'Rocket',
    },
    {
      title: '',
      subtitle: '',
      description: '',
      icon: 'Brain',
    },
    {
      title: '',
      subtitle: '',
      description: '',
      icon: 'Target',
    },
    {
      title: '',
      subtitle: '',
      description: '',
      icon: 'Code',
    },
    {
      title: '',
      subtitle: '',
      description: '',
      icon: 'Refresh',
    }
  ];

  // Font options
  const fontOptions = [
    { name: 'Roboto Mono', value: "'Roboto Mono', monospace" },
    { name: 'Space Mono', value: "'Space Mono', monospace" },
    { name: 'VT323', value: "'VT323', monospace" },
    { name: 'Press Start 2P', value: "'Press Start 2P', cursive" },
    { name: 'Share Tech Mono', value: "'Share Tech Mono', monospace" },
    { name: 'Orbitron', value: "'Orbitron', sans-serif" },
    { name: 'Exo 2', value: "'Exo 2', sans-serif" },
    { name: 'Rajdhani', value: "'Rajdhani', sans-serif" }
  ];

  // Refs for download functionality
  const carouselRef = useRef(null);

  // State
  const [slides, setSlides] = useState(initialSlides);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].value);
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [downloadType, setDownloadType] = useState('png');

  // Character limits
  const TITLE_CHAR_LIMIT = 20;
  const SUBTITLE_CHAR_LIMIT = 25;
  const DESCRIPTION_CHAR_LIMIT = 150;

  // Handle slide data changes
  const handleSlideChange = (index, field, value) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setSlides(newSlides);
  };

  // Add a new slide
  const addSlide = () => {
    setSlides([...slides, {
      title: '',
      subtitle: '',
      description: '',
      icon: iconOptions[Math.floor(Math.random() * iconOptions.length)].name
    }]);
  };

  // Remove a slide
  const removeSlide = (index) => {
    if (slides.length <= 5) return; // Keep at least 5 slides
    const newSlides = slides.filter((_, i) => i !== index);
    setSlides(newSlides);
  };

  // Navigation for the carousel
  const nextSlide = (e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = (e) => {
    e && e.preventDefault();
    e && e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Generate and show the carousel
  const generateCarousel = () => {
    // Filter out empty slides
    const validSlides = slides.filter(slide => 
      slide.title.trim() !== '' || 
      slide.subtitle.trim() !== '' || 
      slide.description.trim() !== ''
    );
    
    if (validSlides.length === 0) {
      alert('Please add content to at least one slide');
      return;
    }
    
    setSlides(validSlides);
    setShowCarousel(true);
  };
  
  // Download the carousel as an image
  const downloadCarousel = () => {
    if (!carouselRef.current) return;
    
    try {
      // Import html2canvas dynamically
      import('html2canvas')
        .then(html2canvas => {
          html2canvas.default(carouselRef.current, {
            scale: 3, // Higher scale for better quality
            logging: false,
            backgroundColor: '#000000',
            allowTaint: true,
            useCORS: true
          }).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            
            if (downloadType === 'png') {
              link.download = `nocodebase-carousel-${activeSlide + 1}.png`;
              link.href = canvas.toDataURL('image/png');
            } else {
              link.download = `nocodebase-carousel-${activeSlide + 1}.jpg`;
              link.href = canvas.toDataURL('image/jpeg', 0.95); // 0.95 quality
            }
            
            link.click();
          });
        })
        .catch(err => {
          console.error("Error loading html2canvas:", err);
          alert("Could not load image creation library. Please try again.");
        });
    } catch (error) {
      console.error("Error during download:", error);
      alert("There was an error creating your image. Please try again.");
    }
  };

  // Get the icon component based on name
  const getIconComponent = (iconName) => {
    const icon = iconOptions.find(option => option.name === iconName);
    if (!icon) return Rocket;
    return icon.component;
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-start p-4" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      {/* Google Fonts Links */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap');
        `}
      </style>
      {!showCarousel ? (
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">TikTok Carousel Creator</h1>
          
          {/* Color selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Choose Neon Color</h2>
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((color) => (
                <div 
                  key={color.value} 
                  className={`w-10 h-10 rounded-full cursor-pointer border-2 ${selectedColor === color.value ? 'border-white' : 'border-transparent'}`}
                  style={{ backgroundColor: color.value, boxShadow: `0 0 8px ${color.value}` }}
                  onClick={() => setSelectedColor(color.value)}
                  title={color.name}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Font selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Choose Font</h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {fontOptions.map((font) => (
                <div 
                  key={font.name} 
                  className={`p-2 cursor-pointer border rounded text-center ${selectedFont === font.value ? 'border-white bg-gray-800' : 'border-gray-700'}`}
                  style={{ fontFamily: font.value }}
                  onClick={() => setSelectedFont(font.value)}
                >
                  {font.name}
                </div>
              ))}
            </div>
          </div>
          
          {/* Slide editor */}
          <div className="space-y-8">
            {slides.map((slide, index) => (
              <div key={index} className="p-4 border border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold">Slide {index + 1}</h3>
                  {slides.length > 5 && (
                    <button 
                      onClick={() => removeSlide(index)}
                      className="text-red-500 hover:text-red-400"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                {/* Icon selection */}
                <div className="mb-3">
                  <label className="block text-sm mb-1">Icon</label>
                  <div className="relative">
                    <select 
                      value={slide.icon}
                      onChange={(e) => handleSlideChange(index, 'icon', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded p-2 appearance-none"
                    >
                      {iconOptions.map((icon) => (
                        <option key={icon.name} value={icon.name}>{icon.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ArrowRight size={16} className="transform rotate-90" />
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-2 max-h-24 overflow-y-auto p-2 bg-gray-800 rounded">
                    {iconOptions.map((icon) => {
                      const IconComponent = icon.component;
                      return (
                        <div 
                          key={icon.name} 
                          className={`flex flex-col items-center justify-center p-2 cursor-pointer rounded hover:bg-gray-700 ${
                            slide.icon === icon.name ? 'bg-gray-700 border border-gray-500' : ''
                          }`}
                          onClick={() => handleSlideChange(index, 'icon', icon.name)}
                          title={icon.name}
                        >
                          <IconComponent size={20} color={selectedColor} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Title input */}
                <div className="mb-3">
                  <label className="block text-sm mb-1">
                    Title ({slide.title.length}/{TITLE_CHAR_LIMIT})
                  </label>
                  <input 
                    type="text"
                    value={slide.title}
                    onChange={(e) => {
                      if (e.target.value.length <= TITLE_CHAR_LIMIT) {
                        handleSlideChange(index, 'title', e.target.value);
                      }
                    }}
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                    placeholder="MAIN HEADLINE"
                  />
                </div>
                
                {/* Subtitle input */}
                <div className="mb-3">
                  <label className="block text-sm mb-1">
                    Subtitle ({slide.subtitle.length}/{SUBTITLE_CHAR_LIMIT})
                  </label>
                  <input 
                    type="text"
                    value={slide.subtitle}
                    onChange={(e) => {
                      if (e.target.value.length <= SUBTITLE_CHAR_LIMIT) {
                        handleSlideChange(index, 'subtitle', e.target.value);
                      }
                    }}
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                    placeholder="SUPPORTING TEXT"
                  />
                </div>
                
                {/* Description input */}
                <div>
                  <label className="block text-sm mb-1">
                    Description ({slide.description.length}/{DESCRIPTION_CHAR_LIMIT})
                  </label>
                  <textarea 
                    value={slide.description}
                    onChange={(e) => {
                      if (e.target.value.length <= DESCRIPTION_CHAR_LIMIT) {
                        handleSlideChange(index, 'description', e.target.value);
                      }
                    }}
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2 h-24"
                    placeholder="Main content of your slide. Keep it concise and impactful."
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    Tip: Use • to create bullet points
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={addSlide}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              <PlusCircle size={16} />
              Add Slide
            </button>
            
            <button 
              onClick={generateCarousel}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              <Check size={16} />
              Create Carousel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Top buttons: Back and Download */}
          <div className="w-full max-w-md flex justify-between mb-4">
            <button 
              onClick={() => setShowCarousel(false)}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
            >
              ← Back to Editor
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={downloadType}
                onChange={(e) => setDownloadType(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded p-2 text-sm"
              >
                <option value="png">PNG</option>
                <option value="jpg">JPEG</option>
              </select>
              
              <button 
                onClick={downloadCarousel}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
          
          {/* Carousel navigation */}
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
                    borderColor: selectedColor,
                    backgroundColor: activeSlide === index ? `${selectedColor}20` : 'transparent'
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="relative w-full max-w-md border-2 rounded-md overflow-hidden bg-black"
            style={{
              borderColor: selectedColor,
              boxShadow: `0 0 15px ${selectedColor}30`,
              aspectRatio: '9/16',
              fontFamily: selectedFont
            }}
          >
            {/* Digital grid background */}
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: `linear-gradient(to right, ${selectedColor}10 1px, transparent 1px), 
                              linear-gradient(to bottom, ${selectedColor}10 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
            
            {/* Floating particles */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div 
                key={index}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: selectedColor,
                  opacity: 0.4,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: `0 0 3px ${selectedColor}`
                }}
              ></div>
            ))}
            
            {/* Tech element overlays */}
            <div className="absolute top-5 left-5 text-xs opacity-30" style={{color: selectedColor}}>
              &lt;nocodebase/&gt;
            </div>
            <div className="absolute bottom-5 right-5 text-xs opacity-30" style={{color: selectedColor}}>
              {'{transform: now}'}
            </div>
            
            {/* Content container */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b" 
                style={{borderColor: selectedColor}}>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full mr-2 animate-pulse" 
                    style={{backgroundColor: selectedColor}}></div>
                  <span className="text-xs tracking-widest">NOCODEBASE</span>
                </div>
                <div className="text-xs tracking-widest">nocodebase.de</div>
              </div>
              
              {/* Main content */}
              <div className="flex-grow flex flex-col justify-center items-center p-6 text-center">
                {/* Icon & title */}
                <div className="mb-5">
                  {React.createElement(getIconComponent(slides[activeSlide].icon), { 
                    size: 48, 
                    color: selectedColor 
                  })}
                </div>
                <h2 className="text-3xl font-black tracking-wider mb-2" style={{ fontFamily: selectedFont }}>
                  {slides[activeSlide].title || "TITLE GOES HERE"}
                </h2>
                <p className="text-lg uppercase tracking-wider opacity-90 mb-6" style={{ fontFamily: selectedFont }}>
                  {slides[activeSlide].subtitle || "SUBTITLE GOES HERE"}
                </p>
                
                {/* Caution stripe */}
                <div className="w-24 h-1 mb-6" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, ${selectedColor}, ${selectedColor} 5px, transparent 5px, transparent 10px)`
                }}></div>
                
                {/* Content box */}
                <div className="relative border rounded-md p-6 w-full h-40 bg-black bg-opacity-70"
                  style={{borderColor: selectedColor}}>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l"
                    style={{borderColor: selectedColor}}></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r"
                    style={{borderColor: selectedColor}}></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l"
                    style={{borderColor: selectedColor}}></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r"
                    style={{borderColor: selectedColor}}></div>
                  
                  <pre className="text-base whitespace-pre-line leading-relaxed overflow-auto max-h-full"
                    style={{fontFamily: selectedFont}}>
                    {slides[activeSlide].description || "Your main content will appear here. Add bullet points with • character."}
                  </pre>
                </div>
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between border-t p-3 text-xs"
                style={{borderColor: selectedColor}}>
                <div>NOCODEBASE.DE</div>
                <div>{activeSlide + 1}/{slides.length}</div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 w-12 h-12 flex items-center justify-center rounded-full border cursor-pointer z-20 hover:bg-opacity-90"
              style={{borderColor: selectedColor}}
            >
              <ArrowRight size={24} color={selectedColor} className="transform rotate-180" />
            </div>
            
            <div 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 w-12 h-12 flex items-center justify-center rounded-full border cursor-pointer z-20 hover:bg-opacity-90"
              style={{borderColor: selectedColor}}
            >
              <ArrowRight size={24} color={selectedColor} />
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-400">
            Swipe or tap for more • {activeSlide + 1}/{slides.length}
          </div>
        </>
      )}
    </div>
  );
};

export default CarouselCreator;