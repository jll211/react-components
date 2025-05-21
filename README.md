# React Components Gallery

Eine interaktive Galerie zur Anzeige verschiedener React-Komponenten, die mit Claude.ai erstellt wurden.

## Über das Projekt

Diese Galerie bietet eine übersichtliche Darstellung aller im Workspace enthaltenen React-Komponenten. Die Komponenten sind in Kategorien organisiert und können leicht durchsucht und gefiltert werden. Jede Komponente wird mit einer Beschreibung und Kategorie-Information angezeigt.

## Features

- **Kategorisierte Anzeige**: Komponenten sind nach Kategorien organisiert
- **Suchfunktion**: Durchsuchen der Komponenten nach Namen oder Beschreibung
- **Filterung**: Anzeige nach Kategorien filtern
- **Detailansicht**: Jede Komponente kann in einer separaten Detailansicht betrachtet werden
- **Responsive Design**: Optimierte Darstellung für verschiedene Bildschirmgrößen

## Enthaltene Komponenten

Die Galerie enthält verschiedene Arten von Komponenten:

- Karussells und Bildergalerien
- Landing Pages
- Workflow-Darstellungen
- Content-Tools
- und vieles mehr

## Technologie

Das Projekt nutzt folgende Technologien:

- React
- TypeScript
- Inline CSS für Styling

## Verwendung

Um die Galerie lokal zu starten:

1. Stelle sicher, dass Node.js installiert ist
2. Führe `npm install` aus, um Abhängigkeiten zu installieren
3. Starte die Entwicklungsumgebung mit `npm start`
4. Öffne http://localhost:3000 im Browser

## Hinzufügen neuer Komponenten

Um eine neue Komponente zur Galerie hinzuzufügen:

1. Erstelle deine Komponente im Hauptverzeichnis
2. Importiere die Komponente in `ComponentGallery.tsx`
3. Füge einen Eintrag im `components`-Array mit entsprechenden Metadaten hinzu

Beispiel:

```tsx
// 1. Import hinzufügen
import NeueKomponente from "./neue-komponente";

// 2. Zum components-Array hinzufügen
const components = [
  // Bestehende Komponenten
  {
    id: "neue-komponente",
    name: "Meine Neue Komponente",
    category: "Kategorie",
    component: NeueKomponente,
    description: "Beschreibung der Komponente."
  }
];
```

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.
