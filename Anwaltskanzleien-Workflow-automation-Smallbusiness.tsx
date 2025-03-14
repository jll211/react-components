import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, FileCheck, DollarSign, ArrowRight, CheckCircle2 } from "lucide-react";

export default function WorkflowDetail() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded">
            Rechtsanwälte
          </span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
            10 Min Setup
          </span>
          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">
            Buchhaltung
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Automatische Mandanten-Rechnungsstellung für Anwaltskanzleien
        </h1>
        <p className="text-xl text-gray-600">
          Sparen Sie 90% Ihrer Zeit bei der monatlichen Rechnungsstellung. Mit diesem Workflow automatisieren Sie die komplette Abrechnung - von der Zeiterfassung bis zum DATEV-Export.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <Clock className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="font-semibold">Zeitersparnis</h3>
            <p className="text-2xl font-bold text-purple-600">90%</p>
            <p className="text-sm text-gray-600">pro Abrechnungszyklus</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="font-semibold">Geeignet für</h3>
            <p className="text-2xl font-bold text-purple-600">1-50</p>
            <p className="text-sm text-gray-600">Anwälte/Kanzlei</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <FileCheck className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="font-semibold">DATEV</h3>
            <p className="text-2xl font-bold text-green-600">✓</p>
            <p className="text-sm text-gray-600">Export möglich</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <DollarSign className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="font-semibold">ROI</h3>
            <p className="text-2xl font-bold text-purple-600">&lt;1</p>
            <p className="text-sm text-gray-600">Monat</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="prose max-w-none">
        <h2>Problemstellung: Zeitaufwändige manuelle Rechnungsstellung</h2>
        <p>
          Viele Anwaltskanzleien verbringen einen erheblichen Teil ihrer wertvollen Zeit mit der manuellen Rechnungsstellung. Der typische Prozess sieht dabei so aus:
        </p>
        <ul>
          <li>Excel-Listen mit Zeitaufzeichnungen durchgehen</li>
          <li>Stundensätze manuell berechnen</li>
          <li>Rechnungen einzeln in Word erstellen</li>
          <li>PDFs generieren und einzeln versenden</li>
          <li>Buchungen manuell in DATEV übertragen</li>
        </ul>

        <div className="my-8 bg-gray-50 p-6 rounded-lg border">
          <h3>An dieser Stelle würde Screenshot 1 kommen:</h3>
          <p className="text-gray-600 italic">Typische Excel-Zeiterfassung mit markierten Problemen</p>
        </div>

        <h2>Die Lösung: Automatisierter Workflow mit TaskMagic</h2>
        <p>
          Mit TaskMagic können Sie diesen gesamten Prozess automatisieren. Die Software übernimmt dabei:
        </p>

        <div className="my-8">
          {[
            "Automatische Zeiterfassung pro Mandat",
            "Berechnung der Stundensätze und Zusatzkosten",
            "PDF-Generierung mit Ihrem Kanzlei-Design",
            "Automatischer E-Mail-Versand",
            "DATEV-konformer Export"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 m-0">{item}</p>
            </div>
          ))}
        </div>

        <div className="my-8 bg-gray-50 p-6 rounded-lg border">
          <h3>An dieser Stelle würde Screenshot 2 kommen:</h3>
          <p className="text-gray-600 italic">TaskMagic Dashboard mit automatischer Zeiterfassung</p>
        </div>

        <h2>Schritt-für-Schritt Einrichtung</h2>
        
        <h3>1. TaskMagic-Account erstellen</h3>
        <p>
          Registrieren Sie sich für einen kostenlosen 14-tägigen Test von TaskMagic. 
          Sie benötigen dafür lediglich:
        </p>
        <ul>
          <li>E-Mail-Adresse</li>
          <li>Name der Kanzlei</li>
          <li>Anzahl der Anwälte</li>
        </ul>

        <div className="my-8 bg-gray-50 p-6 rounded-lg border">
          <h3>An dieser Stelle würde Screenshot 3 kommen:</h3>
          <p className="text-gray-600 italic">TaskMagic Registrierungsformular mit ausgefüllten Feldern</p>
        </div>

        <h3>2. Mandanten und Stundensätze importieren</h3>
        <p>
          TaskMagic bietet verschiedene Import-Möglichkeiten für Ihre bestehenden Mandantendaten:
        </p>
        <ul>
          <li>Excel-Import (Template wird bereitgestellt)</li>
          <li>Direkter Import aus gängiger Kanzleisoftware</li>
          <li>Manuelle Eingabe über das Dashboard</li>
        </ul>

        <div className="my-8 bg-gray-50 p-6 rounded-lg border">
          <h3>An dieser Stelle würde Screenshot 4 kommen:</h3>
          <p className="text-gray-600 italic">TaskMagic Import-Wizard mit Excel-Template</p>
        </div>

        <h3>3. Automatische Rechnungsstellung konfigurieren</h3>
        <p>
          Legen Sie fest, wie Ihre automatische Rechnungsstellung ablaufen soll:
        </p>
        <ul>
          <li>Abrechnungszeitraum (z.B. monatlich zum 1.)</li>
          <li>Rechnungsvorlage mit Ihrem Kanzlei-Design</li>
          <li>Automatische E-Mail-Texte</li>
          <li>DATEV-Export Einstellungen</li>
        </ul>

        <div className="my-8 bg-gray-50 p-6 rounded-lg border">
          <h3>An dieser Stelle würde Screenshot 5 kommen:</h3>
          <p className="text-gray-600 italic">TaskMagic Rechnungskonfiguration mit Beispiel-Setup</p>
        </div>

        <h2>Ergebnis und ROI-Berechnung</h2>
        <p>
          Basierend auf unseren Erfahrungswerten mit über 100 Kanzleien erzielen Sie folgende Ergebnisse:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-4">Vorher (manuell)</h4>
              <ul className="space-y-2">
                <li>4-6 Stunden pro Monat</li>
                <li>Fehleranfällig</li>
                <li>Verspätete Rechnungen</li>
                <li>Hoher Stressfaktor</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-4">Nachher (automatisch)</h4>
              <ul className="space-y-2">
                <li>15-20 Minuten pro Monat</li>
                <li>Fehlerfreie Abrechnung</li>
                <li>Pünktliche Rechnungen</li>
                <li>Stressfreier Prozess</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-50 p-8 rounded-xl my-12">
          <h2 className="text-2xl font-bold mb-4">
            Starten Sie jetzt mit der Automatisierung
          </h2>
          <p className="text-lg mb-6">
            Testen Sie TaskMagic 14 Tage kostenlos und sparen Sie ab dem ersten Tag wertvolle Zeit.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <span>Kostenlos testen</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            Keine Kreditkarte erforderlich • Voller Funktionsumfang • Persönliche Einrichtungshilfe
          </p>
        </div>

        {/* Consulting Section */}
        <div className="border-t border-gray-200 mt-16 pt-16">
          <div className="bg-white rounded-xl border shadow-sm p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">
                  Unsicher bei der Umsetzung?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Als Experten für Kanzlei-Automatisierung beraten wir Sie gerne bei der Umsetzung. 
                  Im kostenlosen Erstgespräch analysieren wir Ihre aktuelle Situation und zeigen Ihnen:
                </p>
                <ul className="space-y-3">
                  {[
                    "Wie hoch Ihr individuelles Einsparpotenzial ist",
                    "Welche Ihrer Prozesse sich besonders gut automatisieren lassen",
                    "Wie der optimale Implementierungsplan für Ihre Kanzlei aussieht"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-4">Kostenloses Erstgespräch</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span>30 Minuten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span>Per Zoom oder Telefon</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-gray-600" />
                        <span>Unverbindlich</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Jetzt Termin buchen
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}