import React from "react";

// Hier werden alle Komponenten importiert, die du anschauen willst:
import FeatureCarousel from "./FeatureCarousel";
import Carousel from "./carousel";
import FeaturesUsecasesComponent from "./Features-usecases-component .tsx";
import GalleryWorkflowsTaskmagicAffiliate from "./Gallery-workflows-taskmagic-affiliate";
import HumanizingSaasPopupLandingpage from "./Humanizing-saas-popup-landingpage";
import BlogAiSlides from "./blog-ai-slides";
import BusinessAiDirectoryApp from "./business-ai-directory-app";
import CarouselCreatorIcons from "./carousel-creator-icons-032025";
import ContentPlannerView from "./content-planner-view";
import IdentityCarousel from "./identity-carousel";
import KiJobsLanding from "./ki-jobs-landing";
import MicroSaasPromptSystem from "./micro-saas-prompt-system";
import NocodeTiktokDesign from "./nocode-tiktok-design";
import PersonaLanding from "./persona-landing";
import SeoContentTool from "./seo-content-tool";
import SpotifyCanvasLanding from "./spotify-canvas-landing";
import WorkflowDetail from "./workflow-detail";
import WorkflowGallery from "./workflow-gallery";
import AnwaltskanzleienWorkflowAutomationSmallbusiness from "./Anwaltskanzleien-Workflow-automation-Smallbusiness";

// Du kannst weitere Komponenten hier importieren und unten hinzufügen

export default function ComponentGallery() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Komponenten Galerie</h1>
      
      <h2>FeatureCarousel</h2>
      <FeatureCarousel />

      <h2>Carousel</h2>
      <Carousel />

      <h2>Features / Usecases</h2>
      <FeaturesUsecasesComponent />

      <h2>Workflow Gallery (Taskmagic Affiliate)</h2>
      <GalleryWorkflowsTaskmagicAffiliate />

      <h2>Humanizing SaaS Popup Landingpage</h2>
      <HumanizingSaasPopupLandingpage />

      <h2>Blog AI Slides</h2>
      <BlogAiSlides />

      <h2>Business AI Directory App</h2>
      <BusinessAiDirectoryApp />

      <h2>Carousel Creator Icons</h2>
      <CarouselCreatorIcons />

      <h2>Content Planner View</h2>
      <ContentPlannerView />

      <h2>Identity Carousel</h2>
      <IdentityCarousel />

      <h2>KI Jobs Landing</h2>
      <KiJobsLanding />

      <h2>Micro SaaS Prompt System</h2>
      <MicroSaasPromptSystem />

      <h2>No Code TikTok Design</h2>
      <NocodeTiktokDesign />

      <h2>Persona Landing</h2>
      <PersonaLanding />

      <h2>SEO Content Tool</h2>
      <SeoContentTool />

      <h2>Spotify Canvas Landing</h2>
      <SpotifyCanvasLanding />

      <h2>Workflow Detail</h2>
      <WorkflowDetail />

      <h2>Workflow Gallery</h2>
      <WorkflowGallery />

      <h2>Anwaltskanzleien Workflow Automation Smallbusiness</h2>
      <AnwaltskanzleienWorkflowAutomationSmallbusiness />
      
      {/* Hier kannst du weitere Komponenten einfügen */}
    </div>
  );
}