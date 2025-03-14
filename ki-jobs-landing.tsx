import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function JobBoard() {
  const [jobFilter, setJobFilter] = useState("");

  // Beispiel-Jobs für schnellen Start
  const initialJobs = [
    {
      title: "Senior KI-Entwickler (m/w/d)",
      company: "Tech GmbH",
      location: "Berlin",
      type: "Vollzeit",
      salary: "70k-90k€",
      remote: true,
      link: "#",
      posted: "Heute"
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Solutions",
      location: "München",
      type: "Vollzeit",
      salary: "65k-85k€",
      remote: true,
      link: "#",
      posted: "Gestern"
    }
  ];

  const [jobs] = useState(initialJobs);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">KI Jobs Deutschland</h1>
            <Button>Job inserieren</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Die besten KI & ML Jobs in Deutschland
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Täglich neue Stellen im Bereich Künstliche Intelligenz, Machine Learning und Data Science
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto flex gap-4">
            <Input 
              placeholder="Suche nach Jobs, Unternehmen oder Städten..."
              value={jobFilter}
              onChange={(e) => setJobFilter(e.target.value)}
              className="h-12"
            />
            <Button className="h-12 px-8">
              Suchen
            </Button>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-500">{job.company} • {job.location}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{job.type}</Badge>
                  {job.remote && <Badge>Remote</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Gehalt: {job.salary}</p>
                    <p className="text-sm text-gray-600">Eingestellt: {job.posted}</p>
                  </div>
                  <Button>
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 KI Jobs Deutschland</p>
            <div className="flex gap-4">
              <Button variant="link" size="sm">Impressum</Button>
              <Button variant="link" size="sm">Datenschutz</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}