import React from 'react';
import { ArrowRight, Zap, RefreshCw, DollarSign } from 'lucide-react';

// Sample metrics data
const metrics = [
  { label: "Avg. Conversion Lift", value: "+143%", description: "Across 100+ implementations" },
  { label: "ROI after 90 days", value: "312%", description: "Documented & verified" },
  { label: "CAC Reduction", value: "-47%", description: "Average for our clients" },
  { label: "Success Rate", value: "94%", description: "Of all implementations" }
];

const testimonials = [
  {
    quote: "In 12 Jahren Marketing habe ich nichts Vergleichbares gesehen. Unsere Email-Sequenzen performen endlich auf dem Level von handgeschriebenem Content - bei einem Bruchteil der Kosten.",
    author: "Maria S.",
    role: "Head of Growth",
    company: "TechScale GmbH"
  },
  {
    quote: "Wir haben unseren gesamten Sales-Funnel mit Persona-Engineering optimiert. Die Conversion-Steigerung hat uns förmlich umgehauen.",
    author: "Stefan R.",
    role: "Sales Director",
    company: "SaaS Solutions"
  }
];

export default function PersonaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Persona Engineering System
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Die nächste Generation des AI-Content Marketings. 
            Authentisch. Skalierbar. Bewährt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Early Access sichern
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors">
              Case Studies ansehen
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum es funktioniert
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Meta-Feedback Loops</h3>
              <p className="text-gray-600">
                Multi-LLM Optimierung für maximale Content-Qualität und Authentizität.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <RefreshCw className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deep Persona System</h3>
              <p className="text-gray-600">
                Vollständige Simulation echter Persönlichkeiten für authentischen Content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven ROI</h3>
              <p className="text-gray-600">
                Dokumentierte Erfolge mit über 100 erfolgreichen Implementierungen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your content?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the waitlist und sichere dir Early Access zum Persona Engineering System.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Early Access sichern
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}