import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface FeatureCard2Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText?: string;
  onClick?: () => void;
}

const FeatureCard2 = ({
  title = "Weight Loss Tracker",
  description = "Track your weight in LBS or KG, visualize progress with interactive graphs, calculate BMI, and earn rewards for hitting milestones.",
  icon,
  ctaText = "Learn More",
  onClick = () => {},
}: FeatureCard2Props) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine which animation to show based on the title
  const renderAnimation = () => {
    switch (title) {
      case "Weight Loss Tracker":
        return <WeightTrackerAnimation isHovered={isHovered} />;
      case "Calorie Tracker":
        return <CalorieTrackerAnimation isHovered={isHovered} />;
      case "Workout Planner":
        return <WorkoutPlannerAnimation isHovered={isHovered} />;
      case "Habit Tracker":
        return <HabitTrackerAnimation isHovered={isHovered} />;
      case "Meal Planner & Grocery List":
        return <MealPlannerAnimation isHovered={isHovered} />;
      case "Progress Pictures Template":
        return <ProgressPicturesAnimation isHovered={isHovered} />;
      default:
        return <DefaultAnimation isHovered={isHovered} />;
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col bg-card border-2 overflow-hidden">
        <CardHeader className="pb-2">
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mt-4 h-48 bg-muted/30 rounded-lg overflow-hidden">
            {renderAnimation()}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onClick} className="w-full group rounded-full">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Animation components for each feature type
const WeightTrackerAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full p-4 flex flex-col">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Weight Progress</span>
      <div className="flex space-x-2">
        <span
          className={`text-xs px-2 py-1 rounded-full ${isHovered ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
        >
          LBS
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
          KG
        </span>
      </div>
    </div>
    <div className="flex-grow flex items-end space-x-1">
      {[180, 178, 175, 173, 170, 168, 165].map((weight, i) => (
        <motion.div
          key={i}
          className="flex-1 flex flex-col items-center"
          initial={{ height: 0 }}
          animate={{ height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <motion.div
            className="w-full bg-primary/80 rounded-t-sm"
            style={{ height: `${(weight - 160) * 2}px` }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
          {i % 2 === 0 && (
            <span className="text-[10px] mt-1 text-muted-foreground">
              Week {i + 1}
            </span>
          )}
        </motion.div>
      ))}
    </div>
    <div className="mt-4">
      <div className="flex justify-between text-xs">
        <span>BMI: 24.2</span>
        <motion.span
          animate={{ color: isHovered ? "var(--primary)" : "inherit" }}
          transition={{ duration: 0.3 }}
          className="font-bold"
        >
          -15 lbs
        </motion.span>
      </div>
      <motion.div
        className="w-full h-2 bg-muted rounded-full mt-1 overflow-hidden"
        initial={{ width: "70%" }}
        animate={{ width: isHovered ? "100%" : "70%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: "70%" }}
          animate={{ width: isHovered ? "85%" : "70%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  </div>
);

const CalorieTrackerAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full p-4 flex flex-col">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Daily Calories</span>
      <span className="text-xs font-bold text-primary">1,850 / 2,200</span>
    </div>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {[
        { label: "Breakfast", value: 450, color: "bg-blue-400" },
        { label: "Lunch", value: 650, color: "bg-green-400" },
        { label: "Dinner", value: 550, color: "bg-orange-400" },
        { label: "Snacks", value: 200, color: "bg-purple-400" },
      ].map((meal, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center"
          initial={{ opacity: 0.7, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0.7,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="w-full flex justify-center mb-1">
            <motion.div
              className={`w-8 h-16 ${meal.color} rounded-t-sm`}
              initial={{ height: 0 }}
              animate={{ height: isHovered ? 16 + meal.value / 100 : 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          </div>
          <span className="text-[10px] text-muted-foreground">
            {meal.label}
          </span>
          <span className="text-[10px] font-bold">{meal.value}</span>
        </motion.div>
      ))}
    </div>
    <div className="flex-grow">
      <div className="flex justify-between text-xs mb-1">
        <span>Calories In vs. Burned</span>
        <span className="text-green-500 font-bold">+350 deficit</span>
      </div>
      <div className="relative h-4 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-primary rounded-full"
          initial={{ width: "60%" }}
          animate={{ width: isHovered ? "84%" : "60%" }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute right-0 top-0 h-full bg-green-500 rounded-full"
          initial={{ width: "70%" }}
          animate={{ width: isHovered ? "100%" : "70%" }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  </div>
);

const WorkoutPlannerAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full p-4 flex flex-col">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Workout Plan</span>
      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
        Custom
      </span>
    </div>
    <div className="flex-grow space-y-2">
      {[
        { exercise: "Bench Press", sets: 3, reps: 10, weight: 135 },
        { exercise: "Squats", sets: 4, reps: 8, weight: 185 },
        { exercise: "Pull-ups", sets: 3, reps: 12, weight: 0 },
      ].map((exercise, i) => (
        <motion.div
          key={i}
          className="p-2 bg-card border rounded-md flex justify-between items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: isHovered ? 0 : -20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <div>
            <div className="font-medium text-sm">{exercise.exercise}</div>
            <div className="text-xs text-muted-foreground">
              {exercise.sets} sets × {exercise.reps} reps
              {exercise.weight > 0 ? ` × ${exercise.weight} lbs` : ""}
            </div>
          </div>
          <motion.div
            className="h-6 w-6 rounded-full bg-muted flex items-center justify-center"
            whileHover={{ scale: 1.2, backgroundColor: "var(--primary)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
    <motion.div
      className="mt-2 text-xs text-primary flex items-center justify-center p-1 rounded-md border border-dashed border-primary/50"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: isHovered ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <span>AI Recommendation: Try adding deadlifts to your routine</span>
    </motion.div>
  </div>
);

const HabitTrackerAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full p-4 flex flex-col">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Daily Habits</span>
      <span className="text-xs font-bold text-primary">4/6 Completed</span>
    </div>
    <div className="flex-grow space-y-2">
      {[
        { habit: "Morning Run", completed: true },
        { habit: "Drink 8 Glasses of Water", completed: true },
        { habit: "Meditation", completed: true },
        { habit: "Take Vitamins", completed: true },
        { habit: "Evening Stretch", completed: false },
        { habit: "No Late Night Snacks", completed: false },
      ].map((habit, i) => (
        <motion.div
          key={i}
          className="flex items-center space-x-2"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        >
          <motion.div
            className={`h-5 w-5 rounded border flex items-center justify-center ${habit.completed ? "bg-primary border-primary" : "border-muted-foreground"}`}
            whileHover={{ scale: 1.2 }}
            animate={{
              backgroundColor: habit.completed
                ? isHovered
                  ? "var(--primary)"
                  : "var(--primary)"
                : isHovered
                  ? "var(--muted)"
                  : "transparent",
            }}
            transition={{ duration: 0.2 }}
          >
            {habit.completed && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12L10 17L20 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </motion.div>
          <span
            className={`text-sm ${habit.completed ? "line-through text-muted-foreground" : ""}`}
          >
            {habit.habit}
          </span>
        </motion.div>
      ))}
    </div>
    <div className="mt-2">
      <div className="text-xs mb-1">Weekly Progress</div>
      <div className="grid grid-cols-7 gap-1">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-[10px] text-muted-foreground">{day}</span>
            <motion.div
              className="h-4 w-4 rounded-full bg-muted"
              animate={{
                backgroundColor: i < 4 ? "var(--primary)" : "var(--muted)",
                scale: isHovered && i === 3 ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MealPlannerAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full p-4 flex flex-col">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Meal Plan</span>
      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
        1,800 cal
      </span>
    </div>
    <div className="flex-grow space-y-2">
      {[
        {
          meal: "Breakfast",
          food: "Oatmeal with berries",
          calories: 320,
          protein: 12,
          carbs: 45,
          fat: 8,
        },
        {
          meal: "Lunch",
          food: "Grilled chicken salad",
          calories: 450,
          protein: 35,
          carbs: 20,
          fat: 15,
        },
        {
          meal: "Dinner",
          food: "Salmon with vegetables",
          calories: 520,
          protein: 40,
          carbs: 25,
          fat: 20,
        },
      ].map((meal, i) => (
        <motion.div
          key={i}
          className="p-2 bg-card border rounded-md"
          initial={{ opacity: 0.7, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <div className="flex justify-between">
            <span className="text-sm font-medium">{meal.meal}</span>
            <span className="text-xs text-muted-foreground">
              {meal.calories} cal
            </span>
          </div>
          <div className="text-xs">{meal.food}</div>
          <div className="flex space-x-2 mt-1 text-[10px] text-muted-foreground">
            <span>P: {meal.protein}g</span>
            <span>C: {meal.carbs}g</span>
            <span>F: {meal.fat}g</span>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      className="mt-2 p-2 border border-dashed border-primary/50 rounded-md"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: isHovered ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-xs font-medium mb-1">Grocery List</div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        {[
          "Oatmeal",
          "Berries",
          "Chicken breast",
          "Mixed greens",
          "Salmon fillet",
          "Vegetables",
        ].map((item, i) => (
          <motion.div
            key={i}
            className="text-[10px] flex items-center"
            initial={{ x: -5 }}
            animate={{ x: isHovered ? 0 : -5 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
          >
            <div className="h-2 w-2 rounded-full bg-primary mr-1"></div>
            {item}
          </motion.div>
        ))}
      </div>
      <div className="text-[10px] text-green-500 mt-1 text-right">
        Save $12.50 with current deals
      </div>
    </motion.div>
  </div>
);

const ProgressPicturesAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full p-4 flex flex-col">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">Transformation</span>
      <span className="text-xs text-muted-foreground">3 months progress</span>
    </div>
    <div className="flex-grow flex space-x-2">
      <motion.div
        className="flex-1 bg-muted rounded-md overflow-hidden relative"
        animate={{
          filter: isHovered ? "brightness(1)" : "brightness(0.8)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white bg-black/30">
          BEFORE
        </div>
      </motion.div>
      <motion.div
        className="flex-1 bg-muted rounded-md overflow-hidden relative"
        animate={{
          filter: isHovered ? "brightness(1.1)" : "brightness(0.8)",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white bg-black/30">
          AFTER
        </div>
      </motion.div>
    </div>
    <div className="mt-2 flex justify-center">
      <motion.button
        className="text-xs px-3 py-1 bg-muted rounded-full flex items-center"
        whileHover={{
          scale: 1.05,
          backgroundColor: "var(--primary)",
          color: "white",
        }}
        animate={{
          backgroundColor: isHovered ? "var(--primary)" : "var(--muted)",
          color: isHovered ? "white" : "inherit",
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="mr-1"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15V3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Upload New Photo
      </motion.button>
    </div>
  </div>
);

const DefaultAnimation = ({ isHovered }: { isHovered: boolean }) => (
  <div className="h-full w-full flex items-center justify-center">
    <motion.div
      className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
      animate={{
        scale: isHovered ? 1.2 : 1,
        backgroundColor: isHovered
          ? "var(--primary)"
          : "var(--primary-rgb)/0.2",
      }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <ArrowRight className="h-8 w-8 text-primary" />
    </motion.div>
  </div>
);

export default FeatureCard2;
