import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import StreakCounter from "./StreakCounter";
import BadgeCollection from "./BadgeCollection";
import LeaderboardSection from "./LeaderboardSection";

interface GamificationDashboardProps {
  title?: string;
  subtitle?: string;
}

const GamificationDashboard = ({
  title = "Your Fitness Journey",
  subtitle = "Track your progress, earn rewards, and stay motivated with our gamification features",
}: GamificationDashboardProps) => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <Tabs defaultValue="streaks" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="streaks">Daily Streaks</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="streaks" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <StreakCounter initialStreak={5} goalStreak={30} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl p-6 border border-orange-100 dark:border-orange-900/50"
              >
                <h3 className="text-xl font-bold mb-4">Why Streaks Matter</h3>
                <p className="mb-4 text-muted-foreground">
                  Maintaining a daily streak is one of the most powerful ways to
                  build lasting fitness habits. Research shows that consistency
                  is the key to long-term success.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-600 dark:text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Habit Formation</h4>
                      <p className="text-sm text-muted-foreground">
                        It takes about 66 days to form a new habit. Streaks help
                        you get there faster.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-600 dark:text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Motivation Boost</h4>
                      <p className="text-sm text-muted-foreground">
                        The longer your streak, the more motivated you'll be to
                        maintain it.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-600 dark:text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Milestone Rewards</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn special badges and rewards as your streak grows
                        longer.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BadgeCollection />
            </motion.div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <LeaderboardSection
                title="Community Leaderboard"
                subtitle="See how you stack up against other fitness enthusiasts in our community"
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GamificationDashboard;
