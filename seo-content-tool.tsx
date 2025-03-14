import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SEOContentTool() {
  const [currentTab, setCurrentTab] = useState("content");
  const [formData, setFormData] = useState({
    searchIntent: '',
    customSearchIntent: '',
    audience: '',
    customAudience: '',
    targetUrl: '',
    keywords: '',
    language: '',
    contentLength: '',
    tone: '',
    customTone: '',
  });

  const [personalData, setPersonalData] = useState({
    experience: '',
    anecdotes: '',
    opinions: '',
    expertise: '',
  });

  const searchIntents = [
    "informational",
    "transactional",
    "navigational",
    "commercial",
    "other"
  ];

  const audiences = [
    "beginners",
    "intermediate",
    "advanced",
    "professionals",
    "general",
    "other"
  ];

  const tones = [
    "professional",
    "conversational",
    "academic",
    "friendly",
    "technical",
    "other"
  ];

  const contentLengths = [
    "short",
    "medium",
    "long",
    "comprehensive"
  ];

  const languages = [
    "deutsch",
    "english",
    "español",
    "français",
    "other"
  ];

  const handleContentLengthText = (length) => {
    const lengthMap = {
      short: "Short (500-800 words)",
      medium: "Medium (800-1500 words)",
      long: "Long (1500-2500 words)",
      comprehensive: "Comprehensive (2500+ words)"
    };
    return lengthMap[length] || length;
  };

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
    setCurrentTab("personal");
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      ...personalData
    };
    console.log("Final submission:", finalData);
    // Integration mit OpenAI Assistent würde hier erfolgen
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>SEO Content Creator</CardTitle>
          <CardDescription>
            Erstellen Sie authentische SEO-optimierte Inhalte mit persönlicher Note
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="content">Content Grundlagen</TabsTrigger>
              <TabsTrigger value="personal">Persönliche Erfahrungen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-0">
              <form onSubmit={handleFirstFormSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="searchIntent">Search Intent</Label>
                    <Select
                      value={formData.searchIntent}
                      onValueChange={(value) => setFormData({ ...formData, searchIntent: value })}
                    >
                      <SelectTrigger id="searchIntent">
                        <SelectValue placeholder="Wählen Sie den Search Intent" />
                      </SelectTrigger>
                      <SelectContent>
                        {searchIntents.map((intent) => (
                          <SelectItem key={intent} value={intent}>
                            {intent.charAt(0).toUpperCase() + intent.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.searchIntent === 'other' && (
                      <Input
                        id="customSearchIntent"
                        value={formData.customSearchIntent}
                        onChange={(e) => setFormData({ ...formData, customSearchIntent: e.target.value })}
                        placeholder="Beschreiben Sie den Search Intent"
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audience">Zielgruppe</Label>
                    <Select
                      value={formData.audience}
                      onValueChange={(value) => setFormData({ ...formData, audience: value })}
                    >
                      <SelectTrigger id="audience">
                        <SelectValue placeholder="Wählen Sie die Zielgruppe" />
                      </SelectTrigger>
                      <SelectContent>
                        {audiences.map((audience) => (
                          <SelectItem key={audience} value={audience}>
                            {audience.charAt(0).toUpperCase() + audience.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.audience === 'other' && (
                      <Input
                        id="customAudience"
                        value={formData.customAudience}
                        onChange={(e) => setFormData({ ...formData, customAudience: e.target.value })}
                        placeholder="Beschreiben Sie Ihre Zielgruppe"
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetUrl">Ziel-URL</Label>
                    <Input
                      id="targetUrl"
                      value={formData.targetUrl}
                      onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords</Label>
                    <Textarea
                      id="keywords"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                      placeholder="Hauptkeyword, LSI Keywords..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Sprache</Label>
                    <Select
                      value={formData.language}
                      onValueChange={(value) => setFormData({ ...formData, language: value })}
                    >
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Wählen Sie die Sprache" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem key={language} value={language}>
                            {language.charAt(0).toUpperCase() + language.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contentLength">Inhaltslänge</Label>
                    <Select
                      value={formData.contentLength}
                      onValueChange={(value) => setFormData({ ...formData, contentLength: value })}
                    >
                      <SelectTrigger id="contentLength">
                        <SelectValue placeholder="Wählen Sie die Inhaltslänge" />
                      </SelectTrigger>
                      <SelectContent>
                        {contentLengths.map((length) => (
                          <SelectItem key={length} value={length}>
                            {handleContentLengthText(length)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tone">Tonalität</Label>
                    <Select
                      value={formData.tone}
                      onValueChange={(value) => setFormData({ ...formData, tone: value })}
                    >
                      <SelectTrigger id="tone">
                        <SelectValue placeholder="Wählen Sie die Tonalität" />
                      </SelectTrigger>
                      <SelectContent>
                        {tones.map((tone) => (
                          <SelectItem key={tone} value={tone}>
                            {tone.charAt(0).toUpperCase() + tone.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.tone === 'other' && (
                      <Input
                        id="customTone"
                        value={formData.customTone}
                        onChange={(e) => setFormData({ ...formData, customTone: e.target.value })}
                        placeholder="Beschreiben Sie die gewünschte Tonalität"
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Weiter zu persönlichen Erfahrungen
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="personal" className="mt-0">
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <Alert>
                  <AlertTitle>Personalisierung</AlertTitle>
                  <AlertDescription>
                    Ihre persönlichen Erfahrungen machen den Content authentisch und einzigartig.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Persönliche Erfahrungen</Label>
                    <Textarea
                      id="experience"
                      value={personalData.experience}
                      onChange={(e) => setPersonalData({ ...personalData, experience: e.target.value })}
                      placeholder="Beschreiben Sie Ihre Erfahrungen mit diesem Thema..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="anecdotes">Anekdoten</Label>
                    <Textarea
                      id="anecdotes"
                      value={personalData.anecdotes}
                      onChange={(e) => setPersonalData({ ...personalData, anecdotes: e.target.value })}
                      placeholder="Teilen Sie relevante Geschichten oder Beispiele..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opinions">Meinungen & Perspektiven</Label>
                    <Textarea
                      id="opinions"
                      value={personalData.opinions}
                      onChange={(e) => setPersonalData({ ...personalData, opinions: e.target.value })}
                      placeholder="Was ist Ihre persönliche Sichtweise zu diesem Thema?"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">Expertise & Qualifikationen</Label>
                    <Textarea
                      id="expertise"
                      value={personalData.expertise}
                      onChange={(e) => setPersonalData({ ...personalData, expertise: e.target.value })}
                      placeholder="Welche spezielle Expertise bringen Sie zu diesem Thema mit?"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setCurrentTab("content")}
                    className="w-full"
                  >
                    Zurück
                  </Button>
                  <Button type="submit" className="w-full">
                    Content erstellen
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}