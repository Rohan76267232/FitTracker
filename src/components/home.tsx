import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import FeatureSection2 from "./FeatureSection2";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import ParallaxBackground from "./ParallaxBackground";
import AIRecommendations from "./AIRecommendations";
import GamificationSystem from "./GamificationSystem";
import ProgressTracker from "./ProgressTracker";
import FloatingCTA from "./FloatingCTA";

function Home() {
  return (
    <ParallaxBackground>
      <div className="w-full min-h-screen bg-transparent">
        <Navbar />
        <HeroSection />
        <FeatureSection2 />
        <FeatureSection />
        <ProgressTracker />
        <TestimonialsSection />
        <GamificationSystem />
        <AIRecommendations />
        <PricingSection />
        <div id="faq-section">
          <FAQSection />
        </div>
        <Footer />
        <FloatingCTA />
      </div>
    </ParallaxBackground>
  );
}

export default Home;
