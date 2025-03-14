import React from "react";
import { motion } from "framer-motion";
import SmoothScrollSection from "./SmoothScrollSection";
import AnimatedFitnessIcons from "./AnimatedFitnessIcons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { ArrowRight, Dumbbell, Heart, Brain, Zap } from "lucide-react";

interface InteractiveFeaturesProps {
  title?: string;
  subtitle?: string;
}

const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({
  title = "Interactive Fitness Experience",
  subtitle = "Engage with our app's interactive features designed to make your fitness journey more enjoyable and effective",
}) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <SmoothScrollSection className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </SmoothScrollSection>

        <Tabs defaultValue="animations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="animations">
              <Dumbbell className="h-4 w-4 mr-2" />
              Animations
            </TabsTrigger>
            <TabsTrigger value="interactions">
              <Heart className="h-4 w-4 mr-2" />
              Interactions
            </TabsTrigger>
            <TabsTrigger value="ai">
              <Brain className="h-4 w-4 mr-2" />
              AI Features
            </TabsTrigger>
          </TabsList>

          <TabsContent value="animations" className="space-y-8">
            <SmoothScrollSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Animated Workout Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Visual workout guides with animated demonstrations help you
                    perfect your form and technique. Hover over each exercise to
                    see it in action.
                  </p>
                  <AnimatedFitnessIcons />
                </CardContent>
              </Card>
            </SmoothScrollSection>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-8">
            <SmoothScrollSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Track your progress with interactive charts and
                    visualizations that respond to your input and achievements.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Weight Progress",
                        description:
                          "Interactive charts that visualize your weight loss journey",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        title: "Workout Intensity",
                        description:
                          "Dynamic heatmaps showing your workout intensity over time",
                        color: "from-orange-500 to-red-500",
                      },
                      {
                        title: "Nutrition Balance",
                        description:
                          "Interactive pie charts displaying your macronutrient balance",
                        color: "from-green-500 to-emerald-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-lg border p-6 h-64"
                        whileHover={{ scale: 1.03 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {item.title}
                          </h3>
                          <p className="text-white/90 mb-4">
                            {item.description}
                          </p>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="mt-4"
                          >
                            Explore <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}
                        ></div>

                        {/* Interactive elements that respond to hover */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <motion.div
                            className="w-32 h-32 rounded-full bg-white/10"
                            initial={{ scale: 0.8, opacity: 0.3 }}
                            whileHover={{ scale: 1.2, opacity: 0.2 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SmoothScrollSection>
          </TabsContent>

          <TabsContent value="ai" className="space-y-8">
            <SmoothScrollSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Personalization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Our AI features analyze your performance and preferences to
                    provide personalized recommendations and insights.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Smart Workout Recommendations",
                        description:
                          "AI analyzes your performance and suggests optimal workouts based on your goals and progress",
                        icon: <Dumbbell className="h-10 w-10 text-primary" />,
                      },
                      {
                        title: "Nutrition Insights",
                        description:
                          "Get AI-powered insights about your eating habits and personalized meal suggestions",
                        icon: <Utensils className="h-10 w-10 text-primary" />,
                      },
                      {
                        title: "Adaptive Goal Setting",
                        description:
                          "Our AI helps you set realistic, achievable goals based on your progress and capabilities",
                        icon: <Target className="h-10 w-10 text-primary" />,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start p-6 rounded-lg border hover:shadow-md transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                          backgroundColor: "var(--primary-rgb)/0.05",
                        }}
                      >
                        <div className="mr-4 p-2 bg-primary/10 rounded-full">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SmoothScrollSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveFeatures;

// Import for Utensils and Target icons
import { Utensils, Target } from "lucide-react";
