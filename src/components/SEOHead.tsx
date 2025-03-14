import React from "react";
import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
}

const SEOHead = ({
  title = "FitnessTracker - Transform Your Body, Transform Your Life",
  description = "Track your weight loss journey, plan workouts, and achieve your fitness goals with our all-in-one fitness companion app.",
  keywords = "fitness tracker, weight loss, workout planner, fitness app, health tracking, calorie counter",
  ogImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
  ogUrl = "https://fitnesstrack.example.com",
  twitterHandle = "@fitnesstrack",
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content={twitterHandle} />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead;
