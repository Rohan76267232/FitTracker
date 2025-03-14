import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { Button } from "./ui/button";

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features?: Array<{
    title: string;
    description: string;
    icon: "weight" | "calories" | "workout";
    progressValue: number;
    progressLabel: string;
    ctaText: string;
  }>;
}

const FeatureSection = ({
  title = "Track Your Progress With Powerful Tools",
  subtitle = "Our comprehensive suite of fitness tracking features helps you stay on top of your health journey with intuitive visualizations and personalized insights.",
  features = [
    {
      title: "Weight Tracker",
      description:
        "Track your weight loss journey with interactive charts and milestone celebrations.",
      icon: "weight",
      progressValue: 68,
      progressLabel: "Goal Progress",
      ctaText: "Track Weight",
    },
    {
      title: "Calorie Counter",
      description:
        "Log your meals and track your daily calorie intake with our extensive food database.",
      icon: "calories",
      progressValue: 75,
      progressLabel: "Daily Target",
      ctaText: "Count Calories",
    },
    {
      title: "Workout Planner",
      description:
        "Create custom workout routines and track your exercise performance over time.",
      icon: "workout",
      progressValue: 42,
      progressLabel: "Weekly Goal",
      ctaText: "Plan Workout",
    },
  ],
}: FeatureSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                progressValue={feature.progressValue}
                progressLabel={feature.progressLabel}
                ctaText={feature.ctaText}
                onClick={() => console.log(`Clicked on ${feature.title}`)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="px-8 py-6 text-lg">
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
