import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Brain, Dumbbell, Utensils, Zap, RefreshCw } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  intensity: "Easy" | "Moderate" | "Challenging";
  duration: string;
  benefits: string[];
}

interface AIRecommendationsProps {
  title?: string;
  subtitle?: string;
}

const AIRecommendations = ({
  title = "AI-Powered Fitness Recommendations",
  subtitle = "Get personalized workout and nutrition plans based on your goals and preferences",
}: AIRecommendationsProps) => {
  const [activeTab, setActiveTab] = useState("workouts");
  const [isLoading, setIsLoading] = useState(false);

  // Sample workout recommendations
  const workoutRecommendations: Recommendation[] = [
    {
      id: "w1",
      title: "HIIT Cardio Blast",
      description:
        "High-intensity interval training to maximize calorie burn and improve cardiovascular health.",
      intensity: "Challenging",
      duration: "25 minutes",
      benefits: ["Fat burning", "Endurance", "Heart health"],
    },
    {
      id: "w2",
      title: "Full Body Strength",
      description:
        "Comprehensive strength training routine targeting all major muscle groups for balanced development.",
      intensity: "Moderate",
      duration: "45 minutes",
      benefits: ["Muscle building", "Metabolism boost", "Posture improvement"],
    },
    {
      id: "w3",
      title: "Yoga Flow",
      description:
        "Dynamic yoga sequence combining strength, flexibility, and mindfulness for total body wellness.",
      intensity: "Easy",
      duration: "30 minutes",
      benefits: ["Flexibility", "Stress reduction", "Balance"],
    },
  ];

  // Sample nutrition recommendations
  const nutritionRecommendations: Recommendation[] = [
    {
      id: "n1",
      title: "Protein-Packed Meal Plan",
      description:
        "High-protein diet designed to support muscle recovery and growth while maintaining caloric deficit.",
      intensity: "Moderate",
      duration: "7-day plan",
      benefits: ["Muscle recovery", "Appetite control", "Weight management"],
    },
    {
      id: "n2",
      title: "Clean Eating Essentials",
      description:
        "Whole food nutrition plan eliminating processed foods and focusing on nutrient-dense options.",
      intensity: "Challenging",
      duration: "14-day plan",
      benefits: [
        "Increased energy",
        "Better digestion",
        "Reduced inflammation",
      ],
    },
    {
      id: "n3",
      title: "Balanced Macros Plan",
      description:
        "Optimized macronutrient distribution tailored to your specific body type and activity level.",
      intensity: "Easy",
      duration: "Flexible",
      benefits: [
        "Sustainable results",
        "Performance optimization",
        "Metabolic health",
      ],
    },
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate loading new recommendations
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Challenging":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <Tabs
            defaultValue="workouts"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-3xl"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="workouts" className="text-lg py-3">
                  <Dumbbell className="mr-2 h-4 w-4" />
                  Workouts
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="text-lg py-3">
                  <Utensils className="mr-2 h-4 w-4" />
                  Nutrition
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="workouts" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {workoutRecommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <RecommendationCard recommendation={rec} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {nutritionRecommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <RecommendationCard recommendation={rec} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={handleRefresh}
            variant="outline"
            size="lg"
            className="group"
            disabled={isLoading}
          >
            <RefreshCw
              className={`mr-2 h-5 w-5 ${isLoading ? "animate-spin" : "group-hover:animate-spin"}`}
            />
            Refresh Recommendations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const RecommendationCard = ({
  recommendation,
}: {
  recommendation: Recommendation;
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{recommendation.title}</CardTitle>
          <Badge
            className={`${getIntensityColor(recommendation.intensity)} ml-2`}
          >
            {recommendation.intensity}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          {recommendation.duration}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{recommendation.description}</p>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                <Zap className="h-3 w-3 mr-1" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case "Easy":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Moderate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Challenging":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
  }
};

export default AIRecommendations;
