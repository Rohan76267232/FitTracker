import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Flame, Calendar, CheckCircle, Trophy, Star } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface StreakCounterProps {
  initialStreak?: number;
  goalStreak?: number;
  lastCheckedIn?: string | null;
}

const StreakCounter = ({
  initialStreak = 5,
  goalStreak = 30,
  lastCheckedIn = null,
}: StreakCounterProps) => {
  const [streak, setStreak] = useState(initialStreak);
  const [todayChecked, setTodayChecked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [milestoneReached, setMilestoneReached] = useState(false);
  const { toast } = useToast();

  // Check if user has already checked in today
  useEffect(() => {
    const today = new Date().toDateString();
    if (lastCheckedIn === today) {
      setTodayChecked(true);
    }
  }, [lastCheckedIn]);

  const handleCheckIn = () => {
    if (todayChecked) return;

    setShowAnimation(true);
    setStreak((prev) => prev + 1);
    setTodayChecked(true);

    // Check if a milestone is reached
    const newStreak = streak + 1;
    if (
      newStreak === 7 ||
      newStreak === 14 ||
      newStreak === 30 ||
      newStreak === 60 ||
      newStreak === 100
    ) {
      setMilestoneReached(true);
      toast({
        title: "Milestone Reached! 🎉",
        description: `Congratulations! You've maintained a ${newStreak}-day streak!`,
        duration: 5000,
      });
    }

    setTimeout(() => {
      setShowAnimation(false);
      setMilestoneReached(false);
    }, 3000);
  };

  // Get the day of the week for the last 7 days
  const getDaysOfWeek = () => {
    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push({
        name: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate(),
        active: i === 0 ? todayChecked : i < 6 - (6 - (streak % 7)),
        isToday: i === 0,
      });
    }
    return days;
  };

  const daysOfWeek = getDaysOfWeek();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2 relative">
        <CardTitle className="flex items-center">
          <Flame className="h-5 w-5 text-orange-500 mr-2" />
          Daily Streak
        </CardTitle>
        <AnimatePresence>
          {showAnimation && (
            <motion.div
              className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center z-10 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black/70 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center">
                <Flame className="h-6 w-6 text-orange-500 mr-2 animate-pulse" />
                Streak: {streak} days!
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-orange-500">{streak}</div>
            <div className="ml-2 text-sm text-muted-foreground">
              <div>Current Streak</div>
              <div>Goal: {goalStreak} days</div>
            </div>
          </div>
          <Button
            onClick={handleCheckIn}
            disabled={todayChecked}
            className={`relative overflow-hidden ${todayChecked ? "bg-green-500 hover:bg-green-500" : "bg-primary hover:bg-primary/90"}`}
          >
            {todayChecked ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Checked In
              </>
            ) : (
              <>
                <Calendar className="mr-2 h-4 w-4" />
                Check In Today
              </>
            )}
            <AnimatePresence>
              {milestoneReached && (
                <motion.div
                  className="absolute inset-0 bg-yellow-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: 5, duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Progress to {goalStreak}-day goal</span>
              <span className="text-sm font-medium">
                {Math.round((streak / goalStreak) * 100)}%
              </span>
            </div>
            <Progress value={(streak / goalStreak) * 100} className="h-2" />
          </div>

          <div className="pt-4">
            <div className="text-sm font-medium mb-2">Last 7 Days</div>
            <div className="grid grid-cols-7 gap-1">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground mb-1">
                    {day.name}
                  </span>
                  <motion.div
                    className={`h-8 w-8 rounded-full flex items-center justify-center text-xs ${day.active ? "bg-orange-500 text-white" : "bg-muted text-muted-foreground"} ${day.isToday ? "ring-2 ring-offset-2 ring-orange-500" : ""}`}
                    whileHover={{ scale: 1.1 }}
                    animate={
                      day.isToday && showAnimation ? { scale: [1, 1.2, 1] } : {}
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {day.date}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <div className="text-sm font-medium mb-2">Upcoming Milestones</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  days: 7,
                  icon: <Star className="h-4 w-4 text-yellow-500" />,
                  label: "7-Day Streak",
                },
                {
                  days: 30,
                  icon: <Flame className="h-4 w-4 text-orange-500" />,
                  label: "30-Day Streak",
                },
                {
                  days: 60,
                  icon: <Trophy className="h-4 w-4 text-amber-500" />,
                  label: "60-Day Streak",
                },
                {
                  days: 100,
                  icon: <Trophy className="h-4 w-4 text-purple-500" />,
                  label: "100-Day Streak",
                },
              ].map((milestone, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg border flex items-center ${streak >= milestone.days ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : "bg-muted/30 border-muted"}`}
                >
                  <div className="mr-2">{milestone.icon}</div>
                  <div className="text-xs">
                    <div className="font-medium">{milestone.label}</div>
                    <div className="text-muted-foreground">
                      {streak >= milestone.days
                        ? "Achieved!"
                        : `${milestone.days - streak} days left`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCounter;
