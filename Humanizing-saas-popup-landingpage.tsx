import React, { useState, useEffect } from 'react';
import { RefreshCcw, Wand2, Lock, ArrowRight, X } from 'lucide-react';

const personas = [
  {
    id: 1,
    name: "Tanja B.",
    position: "Head of Innovation",
    quirk: "Entwickelt nachts Indie Games auf ihrem Steam Deck",
    preview: "Eine erfahrene Innovationsmanagerin mit Faible für Gaming"
  },
  {
    id: 2,
    name: "Michael R.",
    position: "Digital Growth Lead",
    quirk: "Lebt seit 3 Jahren im selbstausgebauten Campervan",
    preview: "Ein Digital Nomad mit Fokus auf nachhaltiges Wachstum"
  },
  {
    id: 3,
    name: "Sarah K.",
    position: "Product Strategy",
    quirk: "Trainiert für Ultra-Marathons während Zoom-Calls",
    preview: "Eine Multi-Taskerin mit Ausdauer"
  }
];

const standardAiContent = `In der heutigen schnelllebigen Geschäftswelt ist es von entscheidender Bedeutung, Prozesse zu optimieren und Effizienzsteigerungen zu realisieren. Durch den Einsatz modernster Automatisierungstechnologien können Unternehmen ihre Workflows rationalisieren und signifikante Produktivitätssteigerungen erzielen.`;

export default function EnhancedPreviewTool() {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showResult]);

  // Countdown timer effect
  useEffect(() => {
    if (showPopup && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showPopup, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Generate humanized content based on persona
  const getHumanizedContent = (persona) => {
    const contents = {
      1: `Wisst ihr was? Als ich letzte Nacht an meinem neuesten Indie Game gebastelt habe, ist mir klar geworden: Prozessoptimierung muss nicht langweilig sein. Was im Game Development selbstverständlich ist - schnelles Feedback, iterative Verbesserung, Flow-Status - lässt sich perfekt auf Business-Prozesse übertragen.`,
      2: `Von meinem Campervan-Office in Portugal schreibend: Drei Jahre Remote Work haben mir eines gezeigt - echte Effizienz entsteht nicht durch blindes Optimieren, sondern durch bewusstes Redesign von Workflows. Hier ist, was ich durch minimalistisches Arbeiten gelernt habe...`,
      3: `Zwischen meinem morgendlichen Ultra-Training und dem ersten Zoom-Call wurde mir klar: Business-Prozesse sind wie ein Marathon, nicht wie ein Sprint. Hier sind die drei wichtigsten Learnings aus 1000+ Trainingskilometern, übertragen auf Prozessoptimierung...`
    };
    return contents[persona.id];
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg relative">
      {/* Main Tool */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Persona Preview
        </h3>
        <p className="text-gray-600">
          Wähle eine Beispiel-Persona und erlebe den Unterschied.
        </p>
      </div>

      {/* Persona Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {personas.map((persona) => (
          <div
            key={persona.id}
            onClick={() => setSelectedPersona(persona)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedPersona?.id === persona.id
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-200 hover:border-blue-300'
            }`}
          >
            {/* SVG Avatar */}
            <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <circle cx="50" cy="35" r="25" fill="#4F46E5" opacity="0.2" />
                <circle cx="50" cy="30" r="18" fill="#4F46E5" opacity="0.4" />
                <rect x="25" y="60" width="50" height="30" rx="10" fill="#4F46E5" opacity="0.3" />
              </svg>
            </div>
            <h4 className="font-semibold text-center mb-1">{persona.name}</h4>
            <p className="text-sm text-gray-600 text-center mb-2">{persona.position}</p>
            <p className="text-xs text-gray-500 text-center italic">"{persona.quirk}"</p>
          </div>
        ))}
      </div>

      {/* Content Preview */}
      {selectedPersona && (
        <div className="space-y-6">
          {/* Standard AI Content */}
          <div className="border rounded-lg p-6 bg-gray-50">
            <h4 className="font-semibold text-gray-900 mb-4">Standard AI Content</h4>
            <p className="text-gray-600">{standardAiContent}</p>
          </div>

          {/* Action Button */}
          {!showResult && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowResult(true)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                <Wand2 className="h-5 w-5 mr-2" />
                Text humanisieren
              </button>
            </div>
          )}

          {/* Humanized Result */}
          {showResult && (
            <div className="border rounded-lg p-6 bg-blue-50 animate-fade-in">
              <h4 className="font-semibold text-gray-900 mb-4">Persona-optimierter Content</h4>
              <p className="text-gray-600">{getHumanizedContent(selectedPersona)}</p>
            </div>
          )}
        </div>
      )}

      {/* Conversion Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md relative animate-slide-up">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">🚀 Early Bird Special</h3>
              <p className="text-gray-600 mb-2">
                Sichere dir jetzt 75% Rabatt auf das komplette System!
              </p>
              <div className="text-xl font-bold text-red-600 mb-4">
                Noch {formatTime(timeLeft)}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Komplettes Persona Engineering System</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>50+ Premium Persona Templates</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Private Community Access</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <span className="line-through text-gray-400">997€</span>
              <span className="text-3xl font-bold text-blue-600 ml-2">249€</span>
            </div>

            <button className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center">
              Jetzt Zugang sichern
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              *Limitiert auf die ersten 100 Kunden
            </p>
          </div>
        </div>
      )}
    </div>
  );
}