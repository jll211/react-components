import React, { useState, useEffect } from "react";

// Component definitions with metadata
const components = [
  {
    id: "feature-carousel",
    name: "Feature Carousel",
    category: "Carousel",
    description: "Ein Karussell zur Darstellung von Features und Funktionen.",
    color: "#3182CE",
    dependencies: ["lucide-react", "@/components/ui/carousel", "@/components/ui/card"]
  },
  {
    id: "carousel",
    name: "Carousel",
    category: "Carousel",
    description: "Ein einfaches Karussell für Bildergalerien.",
    color: "#3182CE",
    dependencies: ["embla-carousel-react", "lucide-react"]
  },
  {
    id: "features-usecases",
    name: "Features / Usecases",
    category: "Features",
    description: "Darstellung von Features und Anwendungsfällen.",
    color: "#2B6CB0",
    dependencies: ["@/components/ui/card", "lucide-react"]
  },
  {
    id: "workflow-gallery",
    name: "Workflow Gallery (Taskmagic Affiliate)",
    category: "Workflows",
    description: "Eine Galerie zur Darstellung von Workflows für Taskmagic.",
    color: "#4299E1",
    dependencies: ["@/components/ui/card", "@/components/ui/tabs", "lucide-react", "@/components/ui/input"]
  },
  {
    id: "humanizing-saas",
    name: "Humanizing SaaS Popup",
    category: "Landing Pages",
    description: "Popup für eine SaaS-Landing-Page mit Fokus auf Humanisierung.",
    color: "#805AD5",
    dependencies: ["lucide-react"]
  },
  {
    id: "blog-ai-slides",
    name: "Blog AI Slides",
    category: "Content",
    description: "Präsentationsfolien für KI-gestützte Bloginhalte.",
    color: "#38B2AC",
    dependencies: ["lucide-react"]
  },
  {
    id: "business-ai-directory",
    name: "Business AI Directory App",
    category: "Directories",
    description: "Verzeichnis-App für KI-Lösungen im Geschäftsbereich.",
    color: "#4FD1C5",
    dependencies: ["@/components/ui/button", "@/components/ui/card", "@/components/ui/input", "lucide-react"]
  },
  {
    id: "carousel-creator-icons",
    name: "Carousel Creator Icons",
    category: "Carousel",
    description: "Icon-Karussell für Content-Creators.",
    color: "#3182CE",
    dependencies: ["lucide-react"]
  },
  {
    id: "content-planner-view",
    name: "Content Planner View",
    category: "Content",
    description: "Ansicht zur Planung von Inhalten.",
    color: "#38B2AC",
    dependencies: ["@/components/ui/button", "@/components/ui/card", "lucide-react"]
  },
  {
    id: "identity-carousel",
    name: "Identity Carousel",
    category: "Carousel",
    description: "Karussell zur Darstellung von Identitätsmerkmalen.",
    color: "#3182CE",
    dependencies: ["lucide-react"]
  },
  {
    id: "ki-jobs-landing",
    name: "KI Jobs Landing",
    category: "Landing Pages",
    description: "Landing-Page für KI-Jobs.",
    color: "#805AD5",
    dependencies: ["@/components/ui/button", "@/components/ui/card", "@/components/ui/input", "@/components/ui/badge"]
  },
  {
    id: "micro-saas-prompt",
    name: "Micro SaaS Prompt System",
    category: "SaaS",
    description: "Prompt-System für Micro-SaaS-Anwendungen.",
    color: "#667EEA",
    dependencies: ["@/components/ui/alert", "@/components/ui/tabs", "lucide-react"]
  },
  {
    id: "nocode-tiktok-design",
    name: "No Code TikTok Design",
    category: "No Code",
    description: "No-Code-Design für TikTok-Content.",
    color: "#9F7AEA",
    dependencies: ["lucide-react"]
  },
  {
    id: "persona-landing",
    name: "Persona Landing",
    category: "Landing Pages",
    description: "Landing-Page mit Fokus auf Personas.",
    color: "#805AD5",
    dependencies: ["lucide-react"]
  },
  {
    id: "seo-content-tool",
    name: "SEO Content Tool",
    category: "SEO",
    description: "Tool zur Erstellung von SEO-optimierten Inhalten.",
    color: "#F6AD55",
    dependencies: ["@/components/ui/select", "@/components/ui/textarea", "@/components/ui/alert", "@/components/ui/tabs", "@/components/ui/label"]
  },
  {
    id: "spotify-canvas-landing",
    name: "Spotify Canvas Landing",
    category: "Landing Pages",
    description: "Landing-Page für Spotify Canvas.",
    color: "#805AD5",
    dependencies: ["@/components/ui/card", "@/components/ui/button", "lucide-react"]
  },
  {
    id: "workflow-detail",
    name: "Workflow Detail",
    category: "Workflows",
    description: "Detailansicht für Workflows.",
    color: "#4299E1",
    dependencies: ["@/components/ui/card", "@/components/ui/button", "lucide-react"]
  },
  {
    id: "workflow-gallery",
    name: "Workflow Gallery",
    category: "Workflows",
    description: "Galerie zur Darstellung von Workflows.",
    color: "#4299E1",
    dependencies: ["@/components/ui/card", "@/components/ui/tabs", "@/components/ui/input", "lucide-react"]
  },
  {
    id: "anwaltskanzleien-workflow",
    name: "Anwaltskanzleien Workflow",
    category: "Workflows",
    description: "Workflow-Automation für Anwaltskanzleien und kleine Unternehmen.",
    color: "#4299E1",
    dependencies: ["@/components/ui/card", "@/components/ui/button", "lucide-react"]
  }
];

// All categories from the components
const allCategories = ["Alle", ...new Set(components.map(comp => comp.category))];

export default function ComponentGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Handle window resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine if we're on desktop or mobile
  const isDesktop = windowWidth >= 768;

  // Filter components based on category and search term
  const filteredComponents = components.filter(comp => 
    (selectedCategory === "Alle" || comp.category === selectedCategory) &&
    (comp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     comp.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Select component to display
  const handleSelectComponent = (comp) => {
    setSelectedComponent(comp);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to gallery
  const handleBackToGallery = () => {
    setSelectedComponent(null);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Komponenten Galerie</h1>
          <p style={styles.subtitle}>Eine Sammlung interaktiver React-Komponenten erstellt mit Claude.ai</p>
        </div>
      </header>

      {selectedComponent ? (
        <div style={styles.componentView}>
          <div style={styles.componentHeader}>
            <button 
              onClick={handleBackToGallery} 
              style={{
                ...styles.backButton,
                ...(hoveredButton === 'back' ? styles.backButtonHover : {})
              }}
              onMouseEnter={() => setHoveredButton('back')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              ← Zurück zur Galerie
            </button>
            <div>
              <h2 style={styles.componentTitle}>{selectedComponent.name}</h2>
              <div style={styles.componentMeta}>
                <span style={{
                  ...styles.componentCategoryBadge,
                  backgroundColor: selectedComponent.color,
                }}>
                  {selectedComponent.category}
                </span>
                <span style={styles.componentId}>ID: {selectedComponent.id}</span>
              </div>
            </div>
          </div>
          
          <div style={{
            ...styles.componentInfo,
            flexDirection: isDesktop ? 'row' : 'column'
          }}>
            <div style={styles.componentDescription}>
              <h3 style={styles.sectionTitle}>Beschreibung</h3>
              <p>{selectedComponent.description}</p>
            </div>
            
            <div style={styles.componentUsage}>
              <h3 style={styles.sectionTitle}>Abhängigkeiten</h3>
              <div style={styles.dependencies}>
                {selectedComponent.dependencies.map((dep, index) => (
                  <div key={index} style={styles.dependency}>{dep}</div>
                ))}
              </div>
            </div>
          </div>
          
          <div style={styles.componentPreviewWrapper}>
            <h3 style={styles.sectionTitle}>Komponenten-Information</h3>
            <div style={styles.componentRender}>
              <div style={styles.placeholderMessage}>
                <div style={styles.placeholderIcon}>📋</div>
                <h4 style={styles.placeholderTitle}>Komponenten-Vorschau nicht verfügbar</h4>
                <p style={styles.placeholderDescription}>
                  Diese Komponente kann nicht gerendert werden, da die benötigten Abhängigkeiten fehlen.
                  Siehe die Liste der Abhängigkeiten oben für weitere Details.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={styles.filters}>
            <div style={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Suche nach Komponenten..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            
            <div style={styles.categoryFilters}>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.categoryButton,
                    ...(category === selectedCategory ? styles.categoryButtonActive : {})
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div style={styles.gallery}>
            {filteredComponents.length === 0 ? (
              <p style={styles.noResults}>Keine Komponenten gefunden.</p>
            ) : (
              filteredComponents.map(comp => (
                <div 
                  key={comp.id} 
                  style={{
                    ...styles.card,
                    ...(hoveredCard === comp.id ? styles.cardHover : {})
                  }}
                  onClick={() => handleSelectComponent(comp)}
                  onMouseEnter={() => setHoveredCard(comp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    style={{
                      ...styles.cardImage,
                      backgroundColor: comp.color
                    }}
                  >
                    <div style={styles.componentTypeIndicator}>
                      {comp.category}
                    </div>
                  </div>
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>{comp.name}</h3>
                    <p style={styles.cardDescription}>{comp.description}</p>
                  </div>
                  <div style={styles.cardFooter}>
                    <button 
                      style={{
                        ...styles.viewButton,
                        ...(hoveredButton === comp.id ? styles.viewButtonHover : {})
                      }}
                      onMouseEnter={() => setHoveredButton(comp.id)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      Ansehen
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
      
      <footer style={styles.footer}>
        <p>© 2023 React Components Gallery • Erstellt mit Claude.ai</p>
      </footer>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#1a365d',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
  },
  headerContent: {
    maxWidth: 800,
    margin: '0 auto'
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    maxWidth: 600,
    margin: '0 auto',
  },
  filters: {
    padding: '24px 20px',
    backgroundColor: 'white',
    borderBottom: '1px solid #eaeaea',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  searchContainer: {
    maxWidth: 1200,
    margin: '0 auto 20px',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px',
    fontSize: 16,
    border: '1px solid #ddd',
    borderRadius: 8,
    outline: 'none',
  },
  categoryFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: 1200,
    margin: '0 auto',
  },
  categoryButton: {
    padding: '8px 16px',
    backgroundColor: '#f5f7fa',
    border: 'none',
    borderRadius: 6,
    fontSize: 14,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  categoryButtonActive: {
    backgroundColor: '#1a365d',
    color: 'white',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 24,
    padding: 24,
    maxWidth: 1200,
    margin: '0 auto',
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: '1px solid #eaeaea',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
  },
  cardImage: {
    height: 140,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentTypeIndicator: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    color: '#333',
    padding: '4px 8px',
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 500,
  },
  cardContent: {
    padding: 20,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 1.5,
  },
  cardFooter: {
    padding: '12px 20px',
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  viewButton: {
    backgroundColor: '#1a365d',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    padding: '8px 16px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  viewButtonHover: {
    backgroundColor: '#2c5282',
  },
  noResults: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: 40,
    color: '#666',
  },
  componentView: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: 24,
    flex: 1,
  },
  componentHeader: {
    display: 'flex',
    gap: 20,
    alignItems: 'flex-start',
    marginBottom: 32,
    borderBottom: '1px solid #eaeaea',
    paddingBottom: 16,
  },
  backButton: {
    backgroundColor: '#f5f7fa',
    border: 'none',
    borderRadius: 6,
    padding: '8px 16px',
    fontSize: 14,
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'background-color 0.2s ease',
  },
  backButtonHover: {
    backgroundColor: '#e2e8f0',
  },
  componentTitle: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 12,
    color: '#2D3748',
  },
  componentMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  componentCategoryBadge: {
    color: 'white',
    padding: '4px 10px',
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
  },
  componentId: {
    fontSize: 12,
    color: '#718096',
    fontFamily: 'monospace',
  },
  componentInfo: {
    display: 'flex',
    gap: 24,
    marginBottom: 32,
  },
  componentDescription: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  componentUsage: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 16,
    color: '#2D3748',
  },
  dependencies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  dependency: {
    padding: '4px 10px',
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    fontSize: 12,
    fontFamily: 'monospace',
  },
  codeSnippet: {
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    padding: 16,
    borderRadius: 6,
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 1.6,
    overflowX: 'auto',
  },
  componentPreviewWrapper: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  componentRender: {
    border: '1px solid #E2E8F0',
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'white',
    minHeight: 300,
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderMessage: {
    textAlign: 'center',
    padding: 40,
    maxWidth: 500,
  },
  placeholderIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 12,
    color: '#4A5568',
  },
  placeholderDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 1.6,
  },
  footer: {
    backgroundColor: '#f5f7fa',
    padding: 24,
    textAlign: 'center',
    borderTop: '1px solid #eaeaea',
    color: '#666',
    fontSize: 14,
  }
};