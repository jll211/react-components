import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, MessageSquare, BarChart, Image, Mail, Lock } from 'lucide-react';

export default function UseCases({ language }) {
  const translations = {
    de: {
      title: 'Anwendungsfälle',
      subtitle: 'Erfolgsgeschichten aus der Praxis',
      cases: [
        {
          title: 'Dokumentenmanagement',
          description: 'Automatisierte Verarbeitung von Geschäftsdokumenten',
          metric: '75% schnellere Bearbeitung',
          icon: FileText
        },
        {
          title: 'Kundenservice',
          description: 'KI-gestützte Kundenanfragen-Bearbeitung',
          metric: '24/7 Verfügbarkeit',
          icon: MessageSquare
        },
        {
          title: 'Datenanalyse',
          description: 'Automatisierte Business Intelligence',
          metric: '60% genauere Prognosen',
          icon: BarChart
        }
      ]
    },
    en: {
      title: 'Use Cases',
      subtitle: 'Success Stories from Practice',
      cases: [
        {
          title: 'Document Management',
          description: 'Automated business document processing',
          metric: '75% faster processing',
          icon: FileText
        },
        {
          title: 'Customer Service',
          description: 'AI-powered customer inquiry handling',
          metric: '24/7 availability',
          icon: MessageSquare
        },
        {
          title: 'Data Analysis',
          description: 'Automated business intelligence',
          metric: '60% more accurate forecasts',
          icon: BarChart
        }
      ]
    }
  };

  const t = translations[language] || translations.en;

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {t.cases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm inline-block">
                  {useCase.metric}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}