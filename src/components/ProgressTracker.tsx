import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  LineChart,
  BarChart,
  Calendar,
  ArrowUp,
  ArrowDown,
  Activity,
  Dumbbell,
  Scale,
  Heart,
  Flame,
} from "lucide-react";

interface ProgressTrackerProps {
  title?: string;
  subtitle?: string;
}

const ProgressTracker = ({
  title = "Track Your Progress",
  subtitle = "Visualize your fitness journey with interactive charts and detailed metrics",
}: ProgressTrackerProps) => {
  const [activeTab, setActiveTab] = useState("weight");
  const [timeRange, setTimeRange] = useState("month");

  // Sample data for weight tracking
  const weightData = {
    current: 165,
    start: 185,
    goal: 160,
    change: -20,
    changePercent: 10.8,
    timeline: [
      { date: "Jan 1", value: 185 },
      { date: "Jan 8", value: 183 },
      { date: "Jan 15", value: 180 },
      { date: "Jan 22", value: 178 },
      { date: "Jan 29", value: 175 },
      { date: "Feb 5", value: 173 },
      { date: "Feb 12", value: 170 },
      { date: "Feb 19", value: 168 },
      { date: "Feb 26", value: 165 },
    ],
  };

  // Sample data for workout tracking
  const workoutData = {
    total: 24,
    thisWeek: 3,
    avgDuration: 45,
    streak: 5,
    categories: [
      { name: "Strength", count: 10, color: "bg-blue-500" },
      { name: "Cardio", count: 8, color: "bg-green-500" },
      { name: "Flexibility", count: 6, color: "bg-purple-500" },
    ],
  };

  // Sample data for nutrition tracking
  const nutritionData = {
    caloriesAvg: 1850,
    caloriesGoal: 2000,
    protein: 120,
    carbs: 180,
    fat: 60,
    waterIntake: 6,
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
            <Activity className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="mb-8">
          <Tabs
            defaultValue="weight"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger
                  value="weight"
                  className="text-sm md:text-base py-3"
                >
                  <Scale className="mr-2 h-4 w-4" />
                  Weight
                </TabsTrigger>
                <TabsTrigger
                  value="workouts"
                  className="text-sm md:text-base py-3"
                >
                  <Dumbbell className="mr-2 h-4 w-4" />
                  Workouts
                </TabsTrigger>
                <TabsTrigger
                  value="nutrition"
                  className="text-sm md:text-base py-3"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Nutrition
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex justify-end mb-4">
              <div className="flex space-x-2">
                <Button
                  variant={timeRange === "week" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("week")}
                >
                  Week
                </Button>
                <Button
                  variant={timeRange === "month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("month")}
                >
                  Month
                </Button>
                <Button
                  variant={timeRange === "year" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("year")}
                >
                  Year
                </Button>
              </div>
            </div>

            <TabsContent value="weight" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Current Weight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {weightData.current} lbs
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Weight Lost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold">
                        {Math.abs(weightData.change)} lbs
                      </div>
                      <Badge
                        variant="outline"
                        className="ml-2 bg-green-100 text-green-800 border-green-200"
                      >
                        <ArrowDown className="h-3 w-3 mr-1" />
                        {weightData.changePercent}%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Goal Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">
                          {weightData.current} / {weightData.goal} lbs
                        </span>
                        <span className="text-sm font-medium">
                          {Math.round(
                            ((weightData.start - weightData.current) /
                              (weightData.start - weightData.goal)) *
                              100,
                          )}
                          %
                        </span>
                      </div>
                      <Progress
                        value={
                          ((weightData.start - weightData.current) /
                            (weightData.start - weightData.goal)) *
                          100
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <LineChart className="h-5 w-5 mr-2" />
                    Weight Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <WeightChart data={weightData.timeline} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workouts" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Workouts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {workoutData.total}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      This Week
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {workoutData.thisWeek}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Avg. Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {workoutData.avgDuration} min
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Current Streak
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold">
                        {workoutData.streak} days
                      </div>
                      <Badge className="ml-2 bg-primary/10 text-primary">
                        <Flame className="h-3 w-3 mr-1" />
                        On Fire
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <BarChart className="h-5 w-5 mr-2" />
                      Workout Types
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {workoutData.categories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">
                              {category.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {category.count} workouts
                            </span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full ${category.color} rounded-full`}
                              style={{
                                width: `${(category.count / workoutData.total) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Workout Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 28 }).map((_, index) => {
                        // Simulate some workout days
                        const hasWorkout = [
                          2, 4, 5, 9, 11, 12, 16, 18, 19, 23, 25,
                        ].includes(index);
                        const intensity = hasWorkout
                          ? [
                              "bg-green-200",
                              "bg-green-300",
                              "bg-green-400",
                              "bg-green-500",
                            ][Math.floor(Math.random() * 4)]
                          : "bg-muted";
                        return (
                          <div
                            key={index}
                            className={`h-10 rounded-md flex items-center justify-center text-xs ${intensity} ${hasWorkout ? "text-green-900" : "text-muted-foreground"}`}
                          >
                            {index + 1}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Avg. Daily Calories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-2xl font-bold">
                          {nutritionData.caloriesAvg}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / {nutritionData.caloriesGoal} goal
                        </span>
                      </div>
                      <Progress
                        value={
                          (nutritionData.caloriesAvg /
                            nutritionData.caloriesGoal) *
                          100
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Macronutrients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-500">
                          {nutritionData.protein}g
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Protein
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-500">
                          {nutritionData.carbs}g
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Carbs
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-500">
                          {nutritionData.fat}g
                        </div>
                        <div className="text-xs text-muted-foreground">Fat</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Water Intake
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-2xl font-bold">
                          {nutritionData.waterIntake} glasses
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / 8 goal
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        {Array.from({ length: 8 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-6 flex-1 rounded-sm ${index < nutritionData.waterIntake ? "bg-blue-500" : "bg-muted"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Nutrition Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">
                          Protein Distribution
                        </div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">
                          Carbs Distribution
                        </div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">
                          Fat Distribution
                        </div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Sugar Intake</div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-500 rounded-full"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const WeightChart = ({ data }: { data: { date: string; value: number }[] }) => {
  // This is a simplified chart representation
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue;

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1 flex items-end">
        <div className="w-12 h-full flex flex-col justify-between text-xs text-muted-foreground">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <span className="mr-1">
                {Math.round(maxValue - (i * range) / 4)}
              </span>
              <div className="h-px w-2 bg-muted-foreground"></div>
            </div>
          ))}
        </div>
        <div className="flex-1 h-full flex items-end relative">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-px bg-muted-foreground/20"></div>
            ))}
          </div>
          <div className="w-full h-[calc(100%-24px)] flex items-end relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${data.length - 1} 100`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="weight-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`M0,${100 - ((data[0].value - minValue) / range) * 100} ${data
                  .slice(1)
                  .map(
                    (d, i) =>
                      `L${i + 1},${100 - ((d.value - minValue) / range) * 100}`,
                  )
                  .join(" ")}`}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <path
                d={`M0,${100 - ((data[0].value - minValue) / range) * 100} ${data
                  .slice(1)
                  .map(
                    (d, i) =>
                      `L${i + 1},${100 - ((d.value - minValue) / range) * 100}`,
                  )
                  .join(" ")} L${data.length - 1},100 L0,100 Z`}
                fill="url(#weight-gradient)"
              />
            </svg>
            {data.map((d, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1 -translate-y-1"
                style={{
                  left: `${(i / (data.length - 1)) * 100}%`,
                  bottom: `${((d.value - minValue) / range) * 100}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-6 flex text-xs text-muted-foreground">
        <div className="w-12"></div>
        <div className="flex-1 flex justify-between">
          {data.map((d, i) => (
            <div
              key={i}
              className={i % 2 === 0 ? "block" : "hidden sm:block"}
              style={{ width: `${100 / data.length}%` }}
            >
              {d.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
