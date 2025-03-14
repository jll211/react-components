import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Canvas Creator</div>
            <div className="flex gap-6">
              {['Home', 'Features', 'Pricing', 'Examples', 'Support'].map((item) => (
                <Button key={item} variant="ghost" className="text-sm">
                  {item}
                </Button>
              ))}
              <Button>Start Creating</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-center gap-12">
          <div className="flex-1">
            <Badge className="mb-4">NEW</Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Transform Your Music
              <br />
              With AI Canvas
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning, music-synchronized Spotify Canvas videos using AI. Perfect for artists, labels, and curators.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8">
                <Upload className="mr-2 h-4 w-4" /> Upload Track
              </Button>
              <Button size="lg" variant="outline">
                View Examples
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Canvas Preview" 
                className="w-2/3 h-2/3 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Canvas Creator?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered",
                description: "Our AI analyzes your music and creates perfectly synchronized visuals",
                icon: "⚡"
              },
              {
                title: "Easy to Use",
                description: "Upload your track and get your Canvas video in minutes",
                icon: "🎯"
              },
              {
                title: "Affordable",
                description: "Pay-as-you-go pricing at just 4,99€ per Canvas",
                icon: "💰"
              },
              {
                title: "Professional Quality",
                description: "High-quality videos optimized for Spotify Canvas",
                icon: "✨"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6 border-none hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Upload Your Track",
              description: "Simply upload your music file or provide a Spotify link"
            },
            {
              step: "02",
              title: "AI Analysis",
              description: "Our AI analyzes your music's rhythm, mood, and energy"
            },
            {
              step: "03",
              title: "Get Your Canvas",
              description: "Download your perfectly synchronized Canvas video"
            }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Music?</h2>
          <p className="text-xl mb-8 text-gray-400">Create your first Canvas video today</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}