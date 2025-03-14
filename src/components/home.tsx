import React, { useState, useEffect } from "react";
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
import GamificationDashboard from "./GamificationDashboard";
import InteractiveFeatures from "./InteractiveFeatures";
import SmoothScrollSection from "./SmoothScrollSection";
import AIPersonalizationSection from "./AIPersonalizationSection";
import TrustBadgesSection from "./TrustBadgesSection";
import ExitIntentPopup from "./ExitIntentPopup";
import LiveChatSupport from "./LiveChatSupport";
import CommunitySection from "./CommunitySection";
import LiveUserCounter from "./LiveUserCounter";

function Home() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  // Simulate exit intent for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExitPopup(true);
    }, 60000); // Show after 60 seconds for demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxBackground>
      <div className="w-full min-h-screen bg-transparent">
        <Navbar />
        <SmoothScrollSection>
          <HeroSection />
        </SmoothScrollSection>

        <div className="max-w-lg mx-auto my-8">
          <LiveUserCounter baseCount={12500} />
        </div>

        <SmoothScrollSection>
          <FeatureSection2 />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <FeatureSection />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <AIPersonalizationSection />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <InteractiveFeatures />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <ProgressTracker />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <TestimonialsSection />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <TrustBadgesSection />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <GamificationDashboard />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <CommunitySection />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <AIRecommendations />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <PricingSection />
        </SmoothScrollSection>

        <SmoothScrollSection>
          <div id="faq-section">
            <FAQSection />
          </div>
        </SmoothScrollSection>

        <SmoothScrollSection>
          <Footer />
        </SmoothScrollSection>

        <FloatingCTA />
        <LiveChatSupport />
        <ExitIntentPopup />
      </div>
    </ParallaxBackground>
  );
}

export default Home;
