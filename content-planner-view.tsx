import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, Loader2 } from "lucide-react";

export default function ContentPlanner() {
  const [contentItems, setContentItems] = useState([
    { id: 1, title: '', keyword: 'search engine ai' },
    { id: 2, title: '', keyword: 'create an app for your business' },
    { id: 3, title: '', keyword: 'ci ai' },
    { id: 4, title: '', keyword: 'create your own phone app free' },
    { id: 5, title: 'mobile application platform - Complete Guide 2024', keyword: 'mobile application platform' }
  ]);
  const [generatingTitle, setGeneratingTitle] = useState(null);
  const [error, setError] = useState('');

  const generateTitle = async (keyword) => {
    try {
      console.log('Generating title for keyword:', keyword);
      
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Content Planner",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "openrouter/auto",
          "messages": [
            {
              "role": "system",
              "content": "You are an expert SEO copywriter. Create engaging, clickable titles that naturally include the given keyword. Keep titles under 60 characters. Focus on clarity and search intent."
            },
            {
              "role": "user", 
              "content": `Create a clear, SEO-optimized title for the keyword: "${keyword}". Return only the title text.`
            }
          ],
          "max_tokens": 60,
          "temperature": 0.8,
          "top_p": 0.9,
          "frequency_penalty": 0.3,
          "presence_penalty": 0.3,
          "response_format": { 
            "type": "text"
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('OpenRouter API error:', errorData);
        throw new Error(errorData.error?.message || 'Failed to generate title');
      }

      const data = await response.json();
      const title = data.choices[0].message.content.trim();
      return title;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleGenerateTitle = async (itemId) => {
    setGeneratingTitle(itemId);
    setError('');
    
    const item = contentItems.find(i => i.id === itemId);
    if (item && item.keyword) {
      try {
        const generatedTitle = await generateTitle(item.keyword);
        const updatedItems = contentItems.map(i => 
          i.id === itemId ? { ...i, title: generatedTitle } : i
        );
        setContentItems(updatedItems);
      } catch (error) {
        console.error('Error generating title:', error);
        setError(error.message || 'Failed to generate title');
        // Use fallback title in case of error
        const fallbackTitle = `${item.keyword} - Complete Guide ${new Date().getFullYear()}`;
        const updatedItems = contentItems.map(i => 
          i.id === itemId ? { ...i, title: fallbackTitle } : i
        );
        setContentItems(updatedItems);
      }
    }
    setGeneratingTitle(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Content Planner</h1>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {contentItems.map(item => (
              <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                <div className="space-y-2 flex-1 mr-4">
                  {item.title ? (
                    <h3 className="font-medium">{item.title}</h3>
                  ) : (
                    <div className="h-6 bg-gray-100 rounded animate-pulse" />
                  )}
                  <p className="text-sm text-gray-600">{item.keyword}</p>
                </div>
                
                {!item.title && (
                  <Button
                    onClick={() => handleGenerateTitle(item.id)}
                    disabled={generatingTitle === item.id}
                    size="sm"
                    className="min-w-[120px]"
                  >
                    {generatingTitle === item.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate
                      </>
                    )}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}