import React from "react";
import { motion } from "framer-motion";
import AnimatedWorkoutIcon from "./AnimatedWorkoutIcon";

interface AnimatedFitnessIconsProps {
  className?: string;
}

const AnimatedFitnessIcons: React.FC<AnimatedFitnessIconsProps> = ({
  className = "",
}) => {
  const iconTypes = [
    "pushup",
    "squat",
    "lunge",
    "plank",
    "jumpingjack",
    "burpee",
  ] as const;

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ${className}`}
    >
      {iconTypes.map((type, index) => (
        <motion.div
          key={type}
          className="flex flex-col items-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <AnimatedWorkoutIcon
            type={type}
            size={64}
            color="var(--primary)"
            className="mb-2"
          />
          <span className="text-sm font-medium capitalize">{type}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedFitnessIcons;
