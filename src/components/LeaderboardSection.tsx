import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Trophy, Medal, Award, Crown, Flame, Zap } from "lucide-react";

interface LeaderboardSectionProps {
  title?: string;
  subtitle?: string;
}

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  score: number;
  streak: number;
  rank: number;
  change: "up" | "down" | "same";
  badges: string[];
}

const LeaderboardSection = ({
  title = "Community Leaderboard",
  subtitle = "See how you stack up against other fitness enthusiasts in our community",
}: LeaderboardSectionProps) => {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "allTime">(
    "weekly",
  );

  const leaderboardData: Record<string, LeaderboardUser[]> = {
    weekly: [
      {
        id: "1",
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        score: 1250,
        streak: 7,
        rank: 1,
        change: "up",
        badges: ["Workout Warrior", "Perfect Week"],
      },
      {
        id: "2",
        name: "Michael Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        score: 1120,
        streak: 5,
        rank: 2,
        change: "up",
        badges: ["Cardio King", "Early Bird"],
      },
      {
        id: "3",
        name: "Emily Rodriguez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
        score: 980,
        streak: 4,
        rank: 3,
        change: "down",
        badges: ["Nutrition Expert"],
      },
      {
        id: "4",
        name: "David Kim",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
        score: 870,
        streak: 3,
        rank: 4,
        change: "same",
        badges: ["Weight Loss Champion"],
      },
      {
        id: "5",
        name: "Jessica Taylor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
        score: 760,
        streak: 2,
        rank: 5,
        change: "up",
        badges: ["Yoga Master"],
      },
    ],
    monthly: [
      {
        id: "2",
        name: "Michael Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        score: 4850,
        streak: 22,
        rank: 1,
        change: "up",
        badges: ["Cardio King", "Early Bird", "30-Day Streak"],
      },
      {
        id: "1",
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        score: 4720,
        streak: 18,
        rank: 2,
        change: "down",
        badges: ["Workout Warrior", "Perfect Week"],
      },
      {
        id: "6",
        name: "Robert Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
        score: 4350,
        streak: 15,
        rank: 3,
        change: "up",
        badges: ["Strength Champion", "Gym Rat"],
      },
      {
        id: "3",
        name: "Emily Rodriguez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
        score: 3980,
        streak: 12,
        rank: 4,
        change: "down",
        badges: ["Nutrition Expert", "Meal Prep Master"],
      },
      {
        id: "7",
        name: "Jennifer Lopez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
        score: 3760,
        streak: 10,
        rank: 5,
        change: "up",
        badges: ["Dance Fitness Pro"],
      },
    ],
    allTime: [
      {
        id: "8",
        name: "Thomas Anderson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=thomas",
        score: 28750,
        streak: 65,
        rank: 1,
        change: "same",
        badges: ["Legend", "Iron Will", "Marathon Runner", "100-Day Streak"],
      },
      {
        id: "2",
        name: "Michael Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        score: 24850,
        streak: 42,
        rank: 2,
        change: "up",
        badges: ["Cardio King", "Early Bird", "90-Day Streak"],
      },
      {
        id: "9",
        name: "Olivia Martinez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
        score: 22340,
        streak: 38,
        rank: 3,
        change: "up",
        badges: ["Transformation Queen", "Consistency Award"],
      },
      {
        id: "1",
        name: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        score: 21720,
        streak: 30,
        rank: 4,
        change: "down",
        badges: ["Workout Warrior", "Perfect Month", "Weight Loss Pro"],
      },
      {
        id: "6",
        name: "Robert Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
        score: 19350,
        streak: 25,
        rank: 5,
        change: "down",
        badges: ["Strength Champion", "Gym Rat", "Protein King"],
      },
    ],
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-700" />;
      default:
        return <span className="text-lg font-bold">{rank}</span>;
    }
  };

  const getChangeIcon = (change: "up" | "down" | "same") => {
    switch (change) {
      case "up":
        return (
          <span className="text-green-500 text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
            Up
          </span>
        );
      case "down":
        return (
          <span className="text-red-500 text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Down
          </span>
        );
      case "same":
        return (
          <span className="text-gray-500 text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14"
              />
            </svg>
            Same
          </span>
        );
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
            <Crown className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Top Performers</CardTitle>
              <Tabs
                defaultValue="weekly"
                value={activeTab}
                onValueChange={(value) => setActiveTab(value as any)}
              >
                <TabsList>
                  <TabsTrigger value="weekly">This Week</TabsTrigger>
                  <TabsTrigger value="monthly">This Month</TabsTrigger>
                  <TabsTrigger value="allTime">All Time</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {leaderboardData[activeTab].map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${user.rank === 1 ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800" : "bg-card"}`}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mr-4">
                      {getRankIcon(user.rank)}
                    </div>
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{user.name}</h3>
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-3">
                              Score: {user.score.toLocaleString()}
                            </span>
                            <span className="flex items-center text-sm text-orange-500">
                              <Flame className="h-4 w-4 mr-1" />
                              {user.streak} day streak
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          {getChangeIcon(user.change)}
                          <div className="flex mt-2">
                            {user.badges.slice(0, 2).map((badge, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="ml-2 text-xs"
                              >
                                {badge}
                              </Badge>
                            ))}
                            {user.badges.length > 2 && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                +{user.badges.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            Complete daily challenges and maintain your streak to climb the
            leaderboard!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
