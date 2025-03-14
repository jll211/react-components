import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, AlertCircle } from 'lucide-react';

const MicroSaasPromptSystem = () => {
  const [promptParams, setPromptParams] = useState({
    industry: '',
    techStack: {
      frontend: 'Lovable.dev',
      backend: 'Supabase',
      aiModel: 'HuggingFace',
    },
    budget: 50,
    developmentTime: '1 hour',
    targetAudience: '',
    customConstraints: []
  });

  const [responses, setResponses] = useState({
    claude: {
      technicalConcept: '',
      zeroShotPrompt: '',
      targetAnalysis: ''
    },
    gemini: {
      optimization: '',
      marketValidation: ''
    },
    chatgpt: {
      improvements: '',
      riskAnalysis: ''
    },
    final: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Predefined options
  const industries = [
    'Affiliate Marketing',
    'Content Creation',
    'E-Commerce',
    'Digital Marketing',
    'Professional Services',
    'Education',
    'Real Estate'
  ];

  const aiModels = [
    'HuggingFace',
    'OpenAI',
    'Google Vertex AI',
    'Custom ML Model'
  ];

  const constructPrompt = () => {
    return `Entwickle ein detailliertes Konzept für ein modernes Micro-SaaS im Bereich ${promptParams.industry} mit den folgenden Parametern:

1. Technologie-Stack: ${promptParams.techStack.aiModel} + Automatisierung
2. Umsetzung: ${promptParams.techStack.frontend} (Frontend) + ${promptParams.techStack.backend} (Backend)
3. Budget: $${promptParams.budget}
4. Entwicklungszeit: ${promptParams.developmentTime}
5. Zielgruppe: ${promptParams.targetAudience}

Erforderliche Elemente:
• Fortgeschrittene Prompt-Engineering-Technik
• Bewährtes psychologisches Marketing-Prinzip
• Klare Synergieeffekte zwischen den Komponenten
• Maximaler Wert durch Kombination von KI-Modellen

Einschränkungen:
• Muss klaren Product-Market-Fit nachweisen
• Muss einen sofortigen Wert für die Nutzer bieten
• Muss ohne Community-Aufbau auskommen
• Max. 2h pro Woche Zeitaufwand nach Setup
• Muss ab dem 10. User Gewinne einfahren
${promptParams.customConstraints.map(constraint => `• ${constraint}`).join('\n')}

Bitte liefere:
1. Detailliertes technisches Konzept
2. Zero-Shot-Prompt für ${promptParams.techStack.frontend}
3. Zielgruppenanalyse (max. 100 Wörter)`;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    try {
      // 1. Claude API Call mit Basis-Prompt
      const claudeResponse = await mockClaudeAPI(constructPrompt());
      
      // 2. Optimierungs-Prompt für andere LLMs
      const optimizationPrompt = `Analysiere das folgende Micro-SaaS-Konzept. 
      Fokussiere auf:
      - Realistische Umsetzbarkeit
      - Markttauglichkeit
      - Skalierbarkeit
      - Potenzielle Risiken
      
      Wichtig: Vermeide überflüssige Optimierungen und unnötige Komplexität.
      
      Konzept: ${claudeResponse.technicalConcept}`;
      
      const geminiResponse = await mockGeminiAPI(optimizationPrompt);
      const chatGPTResponse = await mockChatGPTAPI(optimizationPrompt);
      
      setResponses({
        claude: claudeResponse,
        gemini: geminiResponse,
        chatgpt: chatGPTResponse,
        final: synthesizeResponses(claudeResponse, geminiResponse, chatGPTResponse)
      });
    } catch (err) {
      setError('Fehler bei der Verarbeitung: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Mock API calls (replace with real implementations)
  const mockClaudeAPI = async (prompt) => {
    return new Promise(resolve => 
      setTimeout(() => resolve({
        technicalConcept: "Technical concept would appear here",
        zeroShotPrompt: "Zero-shot prompt would appear here",
        targetAnalysis: "Target analysis would appear here"
      }), 1000)
    );
  };

  const mockGeminiAPI = async (prompt) => {
    return new Promise(resolve => 
      setTimeout(() => resolve({
        optimization: "Optimization suggestions would appear here",
        marketValidation: "Market validation would appear here"
      }), 1000)
    );
  };

  const mockChatGPTAPI = async (prompt) => {
    return new Promise(resolve => 
      setTimeout(() => resolve({
        improvements: "Improvement suggestions would appear here",
        riskAnalysis: "Risk analysis would appear here"
      }), 1000)
    );
  };

  const synthesizeResponses = (claude, gemini, chatgpt) => {
    return `Synthesized conception combining insights from all models`;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Micro-SaaS Konzeptgenerator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Parameter Configuration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Branche</label>
              <Select 
                onValueChange={(value) => 
                  setPromptParams(prev => ({...prev, industry: value}))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Wähle eine Branche" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">KI-Modell</label>
              <Select
                onValueChange={(value) => 
                  setPromptParams(prev => ({
                    ...prev, 
                    techStack: {...prev.techStack, aiModel: value}
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Wähle ein KI-Modell" />
                </SelectTrigger>
                <SelectContent>
                  {aiModels.map(model => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Budget ($)</label>
              <Input 
                type="number"
                value={promptParams.budget}
                onChange={(e) => 
                  setPromptParams(prev => ({...prev, budget: e.target.value}))
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Zielgruppe</label>
              <Input 
                value={promptParams.targetAudience}
                onChange={(e) => 
                  setPromptParams(prev => ({...prev, targetAudience: e.target.value}))
                }
                placeholder="Beschreibe deine Zielgruppe"
              />
            </div>
          </div>

          {/* Custom Constraints */}
          <div>
            <label className="block text-sm font-medium mb-1">Zusätzliche Einschränkungen</label>
            <Textarea 
              placeholder="Eine Einschränkung pro Zeile"
              onChange={(e) => 
                setPromptParams(prev => ({
                  ...prev, 
                  customConstraints: e.target.value.split('\n').filter(Boolean)
                }))
              }
            />
          </div>

          {/* Generate Button */}
          <Button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generiere Konzept...
              </>
            ) : 'Konzept generieren'}
          </Button>

          {/* Error Display */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Fehler</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Results Display */}
          {(responses.claude.technicalConcept || responses.gemini.optimization || responses.chatgpt.improvements) && (
            <Tabs defaultValue="claude" className="w-full">
              <TabsList>
                <TabsTrigger value="claude">Claude Konzept</TabsTrigger>
                <TabsTrigger value="gemini">Gemini Analyse</TabsTrigger>
                <TabsTrigger value="chatgpt">ChatGPT Feedback</TabsTrigger>
                <TabsTrigger value="final">Finales Konzept</TabsTrigger>
              </TabsList>
              
              <TabsContent value="claude" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Technisches Konzept</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{responses.claude.technicalConcept}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Zero-Shot-Prompt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{responses.claude.zeroShotPrompt}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Zielgruppenanalyse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{responses.claude.targetAnalysis}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gemini">
                <Card>
                  <CardHeader>
                    <CardTitle>Gemini Optimierungsvorschläge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{responses.gemini.optimization}</p>
                    <p className="whitespace-pre-wrap mt-4">{responses.gemini.marketValidation}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chatgpt">
                <Card>
                  <CardHeader>
                    <CardTitle>ChatGPT Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{responses.chatgpt.improvements}</p>
                    <p className="whitespace-pre-wrap mt-4">{responses.chatgpt.riskAnalysis}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="final">
                <Card>
                  <CardHeader>
                    <CardTitle>Finales optimiertes Konzept</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{responses.final}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MicroSaasPromptSystem;