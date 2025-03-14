import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import FeatureCard2 from "./FeatureCard2";
import {
  Scale,
  Utensils,
  Dumbbell,
  CheckSquare,
  ShoppingCart,
  Camera,
} from "lucide-react";

interface FeatureSection2Props {
  title?: string;
  subtitle?: string;
  features?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    animationData?: any;
    ctaText: string;
  }>;
}

const FeatureSection2 = ({
  title = "Comprehensive Tools for Your Fitness Journey",
  subtitle = "Our all-in-one fitness platform provides everything you need to track progress, plan meals, and achieve your health goals with personalized insights.",
  features = [
    {
      title: "Weight Loss Tracker",
      description:
        "Track your weight in LBS or KG, visualize progress with interactive graphs, calculate BMI, and earn rewards for hitting milestones.",
      icon: <Scale className="h-10 w-10 text-primary" />,
      ctaText: "Start Tracking",
    },
    {
      title: "Calorie Tracker",
      description:
        "Auto-calculate your personal daily calorie needs, track meals by category, and compare intake versus calories burned with visual graphs.",
      icon: <Utensils className="h-10 w-10 text-primary" />,
      ctaText: "Count Calories",
    },
    {
      title: "Workout Planner",
      description:
        "Create custom workout routines, track sets, weights, reps, time, and intensity levels with AI-based workout recommendations.",
      icon: <Dumbbell className="h-10 w-10 text-primary" />,
      ctaText: "Plan Workout",
    },
    {
      title: "Habit Tracker",
      description:
        "Add and track daily fitness habits with checkbox-based progress tracking and weekly/monthly habit progress visualization.",
      icon: <CheckSquare className="h-10 w-10 text-primary" />,
      ctaText: "Track Habits",
    },
    {
      title: "Meal Planner & Grocery List",
      description:
        "Plan meals with calories and macros, auto-generate grocery shopping lists, and get smart suggestions to save money on groceries.",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      ctaText: "Plan Meals",
    },
    {
      title: "Progress Pictures Template",
      description:
        "Upload before/after transformation pictures and compare your progress with our side-by-side comparison layout.",
      icon: <Camera className="h-10 w-10 text-primary" />,
      ctaText: "Upload Pictures",
    },
  ],
}: FeatureSection2Props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-background/90 w-full">
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
              <FeatureCard2
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
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
          <Button size="lg" className="px-8 py-6 text-lg rounded-full">
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection2;
