import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Flame,
  Dumbbell,
  Heart,
  Zap,
  Clock,
  Calendar,
  Utensils,
  Scale,
  Target,
  Crown,
} from "lucide-react";

interface BadgeCollectionProps {
  title?: string;
  subtitle?: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  unlocked: boolean;
  category: "achievement" | "streak" | "workout" | "nutrition";
  date?: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
}

const BadgeCollection = ({
  title = "Your Achievement Badges",
  subtitle = "Collect badges by reaching milestones and completing challenges",
}: BadgeCollectionProps) => {
  const [activeTab, setActiveTab] = useState<
    "all" | "achievement" | "streak" | "workout" | "nutrition"
  >("all");
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const badges: Badge[] = [
    {
      id: "1",
      name: "First Steps",
      description: "Completed your first workout",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      unlocked: true,
      category: "achievement",
      date: "2023-05-15",
      rarity: "common",
    },
    {
      id: "2",
      name: "Week Warrior",
      description: "Maintained a 7-day streak",
      icon: <Flame className="h-6 w-6" />,
      color: "bg-gradient-to-br from-orange-400 to-red-600",
      unlocked: true,
      category: "streak",
      date: "2023-05-22",
      rarity: "common",
    },
    {
      id: "3",
      name: "Nutrition Novice",
      description: "Logged meals for 10 consecutive days",
      icon: <Utensils className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      unlocked: true,
      category: "nutrition",
      date: "2023-05-25",
      rarity: "uncommon",
    },
    {
      id: "4",
      name: "Weight Watcher",
      description: "Lost your first 5 pounds",
      icon: <Scale className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      unlocked: true,
      category: "achievement",
      date: "2023-06-01",
      rarity: "uncommon",
    },
    {
      id: "5",
      name: "Cardio King",
      description: "Completed 10 cardio workouts",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-gradient-to-br from-red-400 to-pink-600",
      unlocked: true,
      category: "workout",
      date: "2023-06-10",
      rarity: "uncommon",
    },
    {
      id: "6",
      name: "Early Bird",
      description: "Completed 5 workouts before 8 AM",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      unlocked: false,
      category: "workout",
      rarity: "uncommon",
    },
    {
      id: "7",
      name: "Monthly Master",
      description: "Maintained a 30-day streak",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      unlocked: false,
      category: "streak",
      rarity: "rare",
    },
    {
      id: "8",
      name: "Strength Sovereign",
      description: "Lifted a total of 10,000 pounds",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-gradient-to-br from-slate-400 to-slate-600",
      unlocked: false,
      category: "workout",
      rarity: "rare",
    },
    {
      id: "9",
      name: "Goal Getter",
      description: "Reached your first weight goal",
      icon: <Target className="h-6 w-6" />,
      color: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      unlocked: false,
      category: "achievement",
      rarity: "rare",
    },
    {
      id: "10",
      name: "Transformation Titan",
      description: "Lost 10% of your starting weight",
      icon: <Award className="h-6 w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      unlocked: false,
      category: "achievement",
      rarity: "epic",
    },
    {
      id: "11",
      name: "Century Club",
      description: "Maintained a 100-day streak",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-gradient-to-br from-rose-400 to-rose-600",
      unlocked: false,
      category: "streak",
      rarity: "epic",
    },
    {
      id: "12",
      name: "Fitness Legend",
      description: "Completed all other achievements",
      icon: <Crown className="h-6 w-6" />,
      color: "bg-gradient-to-br from-yellow-300 to-yellow-600",
      unlocked: false,
      category: "achievement",
      rarity: "legendary",
    },
  ];

  const filteredBadges =
    activeTab === "all"
      ? badges
      : badges.filter((badge) => badge.category === activeTab);

  const unlockedCount = badges.filter((badge) => badge.unlocked).length;
  const totalCount = badges.length;
  const progressPercentage = (unlockedCount / totalCount) * 100;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-blue-500";
      case "uncommon":
        return "text-green-500";
      case "rare":
        return "text-purple-500";
      case "epic":
        return "text-orange-500";
      case "legendary":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <TooltipProvider>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="text-sm text-muted-foreground">
              {unlockedCount} / {totalCount} Unlocked
            </div>
          </div>
          <div className="h-2 w-full bg-muted rounded-full mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as any)}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="achievement">Achievements</TabsTrigger>
              <TabsTrigger value="streak">Streaks</TabsTrigger>
              <TabsTrigger value="workout">Workouts</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredBadges.map((badge) => (
                  <Tooltip key={badge.id}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="flex flex-col items-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedBadge(badge)}
                      >
                        <div
                          className={`relative h-16 w-16 rounded-full ${badge.color} flex items-center justify-center ${!badge.unlocked ? "opacity-30 grayscale" : ""}`}
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
                        <h3 className="mt-2 text-sm font-medium text-center line-clamp-1">
                          {badge.name}
                        </h3>
                        <span
                          className={`text-xs ${getRarityColor(badge.rarity)}`}
                        >
                          {badge.rarity.charAt(0).toUpperCase() +
                            badge.rarity.slice(1)}
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <p className="font-bold">{badge.name}</p>
                        <p>{badge.description}</p>
                        {badge.unlocked && badge.date && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Unlocked:{" "}
                            {new Date(badge.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {selectedBadge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 border rounded-lg"
            >
              <div className="flex items-start">
                <div
                  className={`h-16 w-16 rounded-full ${selectedBadge.color} flex items-center justify-center ${!selectedBadge.unlocked ? "opacity-50 grayscale" : ""}`}
                >
                  {selectedBadge.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{selectedBadge.name}</h3>
                  <p className="text-muted-foreground">
                    {selectedBadge.description}
                  </p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm ${getRarityColor(selectedBadge.rarity)}`}
                    >
                      {selectedBadge.rarity.charAt(0).toUpperCase() +
                        selectedBadge.rarity.slice(1)}{" "}
                      Rarity
                    </span>
                    {selectedBadge.unlocked && selectedBadge.date && (
                      <span className="text-sm text-muted-foreground ml-4">
                        Unlocked on{" "}
                        {new Date(selectedBadge.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  {!selectedBadge.unlocked && (
                    <div className="mt-2 text-sm bg-muted/50 p-2 rounded">
                      <p>
                        Complete the required challenge to unlock this badge!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default BadgeCollection;
