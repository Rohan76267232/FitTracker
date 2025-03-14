import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default Home;
