import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Flame, Dumbbell } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "weight" | "calories" | "workout";
  progressValue?: number;
  progressLabel?: string;
  ctaText?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  title = "Weight Tracker",
  description = "Track your weight loss journey with interactive charts and milestone celebrations.",
  icon = "weight",
  progressValue = 68,
  progressLabel = "Goal Progress",
  ctaText = "Learn More",
  onClick = () => {},
}: FeatureCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "weight":
        return <BarChart2 className="h-10 w-10 text-primary" />;
      case "calories":
        return <Flame className="h-10 w-10 text-primary" />;
      case "workout":
        return <Dumbbell className="h-10 w-10 text-primary" />;
      default:
        return <BarChart2 className="h-10 w-10 text-primary" />;
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
    >
      <Card className="h-full flex flex-col bg-card border-2 overflow-hidden">
        <CardHeader className="pb-2">
          <div className="mb-4">{getIcon()}</div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{progressLabel}</span>
              <span className="text-sm font-medium">{progressValue}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressValue}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-primary h-2.5 rounded-full"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative h-32 w-full bg-muted/50 rounded-lg overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {icon === "weight" && (
                  <svg viewBox="0 0 100 50" className="w-full h-full p-2">
                    <motion.path
                      d="M0,40 C20,20 40,50 60,30 C80,10 100,30 100,30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                )}
                {icon === "calories" && (
                  <div className="grid grid-cols-7 gap-1 w-full h-full p-4">
                    {[30, 45, 25, 60, 35, 50, 40].map((height, index) => (
                      <motion.div
                        key={index}
                        className="bg-primary rounded-t-sm self-end"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                )}
                {icon === "workout" && (
                  <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
                    {[1, 2, 3].map((_, index) => (
                      <motion.div
                        key={index}
                        className="bg-muted/70 rounded-md flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                      >
                        <Dumbbell className="h-6 w-6 text-primary/70" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onClick} className="w-full group">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
