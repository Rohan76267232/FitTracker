import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Flame,
  Zap,
  TrendingUp,
  Crown,
} from "lucide-react";

interface GamificationSystemProps {
  title?: string;
  subtitle?: string;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  points: number;
}

interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  unlocked: boolean;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
}

const GamificationSystem = ({
  title = "Earn Rewards & Track Progress",
  subtitle = "Stay motivated with achievements, badges, and points as you reach your fitness goals",
}: GamificationSystemProps) => {
  const [activeTab, setActiveTab] = useState<"achievements" | "badges">(
    "achievements",
  );

  const achievements: Achievement[] = [
    {
      id: "a1",
      name: "First Steps",
      description: "Complete your first workout",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      points: 50,
    },
    {
      id: "a2",
      name: "Consistency King",
      description: "Work out 5 days in a row",
      icon: <Flame className="h-6 w-6 text-orange-500" />,
      progress: 3,
      maxProgress: 5,
      unlocked: false,
      points: 100,
    },
    {
      id: "a3",
      name: "Weight Warrior",
      description: "Lose 5 pounds",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      progress: 3,
      maxProgress: 5,
      unlocked: false,
      points: 200,
    },
    {
      id: "a4",
      name: "Nutrition Ninja",
      description: "Log your meals for 10 consecutive days",
      icon: <Star className="h-6 w-6 text-purple-500" />,
      progress: 7,
      maxProgress: 10,
      unlocked: false,
      points: 150,
    },
  ];

  const badges: Badge[] = [
    {
      id: "b1",
      name: "Early Bird",
      icon: <Medal className="h-8 w-8" />,
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
      unlocked: true,
      rarity: "Common",
    },
    {
      id: "b2",
      name: "Fitness Enthusiast",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-gradient-to-r from-green-400 to-green-600",
      unlocked: true,
      rarity: "Uncommon",
    },
    {
      id: "b3",
      name: "Workout Master",
      icon: <Award className="h-8 w-8" />,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      unlocked: false,
      rarity: "Rare",
    },
    {
      id: "b4",
      name: "Transformation Champion",
      icon: <Crown className="h-8 w-8" />,
      color: "bg-gradient-to-r from-yellow-400 to-orange-600",
      unlocked: false,
      rarity: "Epic",
    },
  ];

  const totalPoints = achievements
    .filter((a) => a.unlocked)
    .reduce((sum, a) => sum + a.points, 0);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "text-blue-500";
      case "Uncommon":
        return "text-green-500";
      case "Rare":
        return "text-purple-500";
      case "Epic":
        return "text-orange-500";
      case "Legendary":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Points and Level Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">{totalPoints}</span>
                    </div>
                    <svg
                      className="h-32 w-32 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * totalPoints) / 1000}
                        className="text-primary"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">POINTS</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Level 3</span>
                    <span className="text-sm text-muted-foreground">
                      350/500 XP
                    </span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>

                <div className="pt-4">
                  <Button className="w-full" variant="outline">
                    View All Rewards
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements and Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">
                    {activeTab === "achievements" ? "Achievements" : "Badges"}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant={
                        activeTab === "achievements" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setActiveTab("achievements")}
                    >
                      Achievements
                    </Button>
                    <Button
                      variant={activeTab === "badges" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab("badges")}
                    >
                      Badges
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {activeTab === "achievements" ? (
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 border rounded-lg ${achievement.unlocked ? "bg-primary/5 border-primary/20" : "bg-muted/30 border-muted"}`}
                      >
                        <div className="flex items-start">
                          <div
                            className={`p-2 rounded-full ${achievement.unlocked ? "bg-primary/10" : "bg-muted"}`}
                          >
                            {achievement.icon}
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">
                                {achievement.name}
                              </h3>
                              <span
                                className={`text-sm font-bold ${achievement.unlocked ? "text-primary" : "text-muted-foreground"}`}
                              >
                                {achievement.points} pts
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                            <div className="mt-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>
                                  Progress: {achievement.progress}/
                                  {achievement.maxProgress}
                                </span>
                                <span>
                                  {Math.round(
                                    (achievement.progress /
                                      achievement.maxProgress) *
                                      100,
                                  )}
                                  %
                                </span>
                              </div>
                              <Progress
                                value={
                                  (achievement.progress /
                                    achievement.maxProgress) *
                                  100
                                }
                                className="h-1"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {badges.map((badge) => (
                      <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center"
                      >
                        <div
                          className={`relative h-20 w-20 rounded-full ${badge.color} flex items-center justify-center ${!badge.unlocked ? "opacity-30 grayscale" : ""}`}
                        >
                          {badge.icon}
                          {!badge.unlocked && (
                            <div className="absolute inset-0 bg-gray-900/50 rounded-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h3 className="mt-3 font-medium">{badge.name}</h3>
                        <span
                          className={`text-xs ${getRarityColor(badge.rarity)}`}
                        >
                          {badge.rarity}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSystem;
