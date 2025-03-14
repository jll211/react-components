import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Beispiel-Daten für Workflows
const workflows = [
  {
    id: 1,
    title: "Automatische Mandanten-Rechnungsstellung",
    industry: "Rechtsanwälte",
    timeEstimate: "10 Min Setup, dann automatisch",
    category: "Buchhaltung",
    difficulty: "Einfach",
    steps: [
      "Zeit- und Leistungserfassung pro Mandat in TaskMagic",
      "Automatische Monatsabrechnung zum Stichtag",
      "PDF-Versand per E-Mail an Mandanten",
      "Buchhaltungs-Export nach DATEV"
    ],
    benefits: [
      "90% Zeitersparnis bei der Rechnungsstellung",
      "Keine vergessenen Abrechnungen",
      "Professionelle Außenwirkung",
      "Automatische Buchhaltung"
    ],
    setupLink: "/setup-guides/law-firm-billing"
  },
  {
    id: 2,
    title: "Terminplanung Friseur-Salon",
    industry: "Friseursalons",
    timeEstimate: "15 Min Setup",
    category: "Terminmanagement",
    difficulty: "Einfach",
    steps: [
      "Online-Buchungskalender einrichten",
      "Automatische Terminerinnerungen",
      "SMS/WhatsApp Bestätigungen",
      "Kundenkartei-Integration"
    ],
    benefits: [
      "24/7 Online-Buchungen",
      "50% weniger Terminausfälle",
      "Bessere Kundenplanung",
      "Digitale Kundenkartei"
    ],
    setupLink: "/setup-guides/salon-booking"
  },
  {
    id: 3,
    title: "Rezept-Management Hausarztpraxis",
    industry: "Ärzte",
    timeEstimate: "20 Min Setup",
    category: "Medizin",
    difficulty: "Mittel",
    steps: [
      "Digitale Rezept-Verwaltung",
      "Automatische Rezept-Erneuerung",
      "Patienten-Benachrichtigung",
      "Apotheken-Vernetzung"
    ],
    benefits: [
      "70% weniger Verwaltungsaufwand",
      "Fehlerfreie Rezepte",
      "Zufriedenere Patienten",
      "Bessere Compliance"
    ],
    setupLink: "/setup-guides/medical-prescriptions"
  }
];

const WorkflowCard = ({ workflow }) => (
  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="text-xl">{workflow.title}</CardTitle>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
          {workflow.industry}
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {workflow.timeEstimate}
        </span>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {workflow.difficulty}
        </span>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="mb-6">
        <h4 className="font-medium mb-2">Setup-Schritte:</h4>
        <ul className="list-disc pl-4 space-y-1">
          {workflow.steps.map((step, index) => (
            <li key={index} className="text-sm text-gray-600">{step}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-2">Vorteile:</h4>
        <ul className="list-disc pl-4 space-y-1">
          {workflow.benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600">{benefit}</li>
          ))}
        </ul>
      </div>
    </CardContent>
    <CardFooter>
      <a href={workflow.setupLink} 
         className="text-purple-600 hover:text-purple-800 text-sm font-medium">
        Komplette Anleitung →
      </a>
    </CardFooter>
  </Card>
);

export default function WorkflowGallery() {
  const industries = [...new Set(workflows.map(w => w.industry))];
  const categories = [...new Set(workflows.map(w => w.category))];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Workflow-Bibliothek</h1>
        <p className="text-gray-600">
          Bewährte Automatisierungslösungen für verschiedene Branchen. 
          Einfach einrichten, Zeit sparen und professioneller arbeiten.
        </p>
      </div>

      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Suchen Sie nach Ihrer Branche oder einem konkreten Workflow..."
          className="pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">Alle</TabsTrigger>
          <TabsTrigger value="industry">Nach Branche</TabsTrigger>
          <TabsTrigger value="category">Nach Kategorie</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map(workflow => (
              <WorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="industry">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(industry => (
              workflows.filter(w => w.industry === industry).map(workflow => (
                <WorkflowCard key={workflow.id} workflow={workflow} />
              ))
            ))}
          </div>
        </TabsContent>

        <TabsContent value="category">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              workflows.filter(w => w.category === category).map(workflow => (
                <WorkflowCard key={workflow.id} workflow={workflow} />
              ))
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}