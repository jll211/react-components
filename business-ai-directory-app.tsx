import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe2, Search, Building2, LineChart, Lock, Calculator, FileText, MessageSquare, BarChart } from 'lucide-react';

// Header Component
function Header({ language, translations }) {
  const t = translations[language];
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {t.subtitle}
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">{language === 'de' ? 'Business-Grade' : 'Enterprise-Grade'}</h3>
              <p className="text-gray-600 text-sm">{language === 'de' ? 'Skalierbare Lösungen' : 'Scalable Solutions'}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <LineChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">ROI-Fokus</h3>
              <p className="text-gray-600 text-sm">{language === 'de' ? 'Validierte Metriken' : 'Validated Metrics'}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">{language === 'de' ? 'Datenschutz' : 'Compliance'}</h3>
              <p className="text-gray-600 text-sm">{language === 'de' ? 'DSGVO-konform' : 'GDPR Compliant'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ROI Calculator Component
function ROICalculator({ language }) {
  const [inputs, setInputs] = useState({
    employees: '',
    hourlyRate: '',
    hoursPerWeek: ''
  });

  const t = {
    de: {
      title: 'ROI-Rechner',
      subtitle: 'Berechnen Sie Ihr Einsparpotenzial',
      employees: 'Anzahl Mitarbeiter',
      hourlyRate: 'Durchschn. Stundensatz (€)',
      hoursPerWeek: 'Zeitersparnis pro Woche (Std)',
      calculate: 'Potenzial berechnen',
      annualSavings: 'Jährliches Einsparpotenzial',
      currency: '€'
    },
    en: {
      title: 'ROI Calculator',
      subtitle: 'Calculate Your Savings Potential',
      employees: 'Number of Employees',
      hourlyRate: 'Avg. Hourly Rate ($)',
      hoursPerWeek: 'Time Saved per Week (hrs)',
      calculate: 'Calculate Potential',
      annualSavings: 'Annual Savings Potential',
      currency: '$'
    }
  }[language];

  const calculateROI = () => {
    const weekly = inputs.employees * inputs.hourlyRate * inputs.hoursPerWeek;
    return (weekly * 52).toLocaleString();
  };

  return (
    <Card className="max-w-xl mx-auto my-12">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-purple-600" />
          <CardTitle>{t.title}</CardTitle>
        </div>
        <p className="text-sm text-gray-600">{t.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {['employees', 'hourlyRate', 'hoursPerWeek'].map((field) => (
            <div key={field}>
              <label className="text-sm font-medium">{t[field]}</label>
              <Input
                type="number"
                value={inputs[field]}
                onChange={(e) => setInputs({...inputs, [field]: e.target.value})}
              />
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">{t.annualSavings}</p>
            <p className="text-3xl font-bold text-purple-600">
              {t.currency} {calculateROI()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Feature Comparison Component
function FeatureComparison({ language }) {
  const t = {
    de: {
      title: 'Funktionsvergleich',
      features: {
        sso: 'Single Sign-On',
        audit: 'Audit-Logs',
        support: 'Support',
        api: 'API-Zugang',
        compliance: 'DSGVO-konform',
        customization: 'Anpassbarkeit'
      },
      categories: {
        small: 'Kleinunternehmen',
        medium: 'Mittelstand',
        large: 'Großunternehmen'
      }
    },
    en: {
      title: 'Feature Comparison',
      features: {
        sso: 'Single Sign-On',
        audit: 'Audit Logs',
        support: 'Support',
        api: 'API Access',
        compliance: 'GDPR Compliant',
        customization: 'Customization'
      },
      categories: {
        small: 'Small Business',
        medium: 'Mid-Market',
        large: 'Enterprise'
      }
    }
  }[language];

  const features = [
    { id: 'sso', small: '✗', medium: '✓', large: '✓' },
    { id: 'audit', small: '✗', medium: '✓', large: '✓' },
    { id: 'support', small: '○', medium: '✓', large: '✓' },
    { id: 'api', small: '✗', medium: '✓', large: '✓' },
    { id: 'compliance', small: '✓', medium: '✓', large: '✓' },
    { id: 'customization', small: '✗', medium: '○', large: '✓' }
  ];

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{t.title}</h2>
      
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-600">Features</th>
                <th className="text-center p-4 font-semibold text-gray-600">{t.categories.small}</th>
                <th className="text-center p-4 font-semibold text-gray-600">{t.categories.medium}</th>
                <th className="text-center p-4 font-semibold text-gray-600">{t.categories.large}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id} className="border-t">
                  <td className="p-4 font-medium">
                    {t.features[feature.id]}
                  </td>
                  <td className="text-center p-4">
                    <span className={`${feature.small === '✓' ? 'text-green-500' : 'text-gray-400'}`}>
                      {feature.small}
                    </span>
                  </td>
                  <td className="text-center p-4">
                    <span className={`${feature.medium === '✓' ? 'text-green-500' : 'text-gray-400'}`}>
                      {feature.medium}
                    </span>
                  </td>
                  <td className="text-center p-4">
                    <span className={`${feature.large === '✓' ? 'text-green-500' : 'text-gray-400'}`}>
                      {feature.large}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Use Cases Component
function UseCases({ language }) {
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

// Main App Component
export default function App() {
  const [language, setLanguage] = useState('de');

  const translations = {
    de: {
      title: 'KI-Lösungen für Unternehmen',
      subtitle: 'Der intelligente Wegweiser zu passenden KI-Tools',
      switchLanguage: 'Switch to English',
      categories: {
        small: 'Kleinunternehmen',
        medium: 'Mittelstand',
        large: 'Großunternehmen'
      }
    },
    en: {
      title: 'Enterprise AI Solutions',
      subtitle: 'Your Guide to Enterprise & SME AI Tools',
      switchLanguage: 'Auf Deutsch anzeigen',
      categories: {
        small: 'Small Business',
        medium: 'Mid-Market',
        large: 'Enterprise'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
          className="flex items-center gap-2"
        >
          <Globe2 className="h-4 w-4" />
          {translations[language].switchLanguage}
        </Button>
      </div>

      <Header language={language} translations={translations} />
      <ROICalculator language={language} />
      <FeatureComparison language={language} />
      <UseCases language={language} />
    </div>
  );
}