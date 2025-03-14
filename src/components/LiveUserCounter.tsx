import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface LiveUserCounterProps {
  baseCount?: number;
  incrementRange?: [number, number];
  updateInterval?: number;
  animationDuration?: number;
}

const LiveUserCounter = ({
  baseCount = 10000,
  incrementRange = [1, 5],
  updateInterval = 3000,
  animationDuration = 0.5,
}: LiveUserCounterProps) => {
  const [count, setCount] = useState(baseCount);
  const [isIncrementing, setIsIncrementing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrement =
        Math.floor(
          Math.random() * (incrementRange[1] - incrementRange[0] + 1),
        ) + incrementRange[0];

      setIsIncrementing(true);
      setCount((prevCount) => prevCount + randomIncrement);

      setTimeout(() => {
        setIsIncrementing(false);
      }, animationDuration * 1000);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [incrementRange, updateInterval, animationDuration]);

  const formattedCount = count.toLocaleString();

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
      <motion.div
        className="flex items-center justify-center mb-2"
        animate={{
          scale: isIncrementing ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: animationDuration }}
      >
        <Users className="h-6 w-6 text-primary mr-2" />
        <span className="text-2xl md:text-3xl font-bold text-primary">
          {formattedCount}+
        </span>
      </motion.div>
      <p className="text-center text-muted-foreground">
        people have started their fitness journey!
      </p>
    </div>
  );
};

export default LiveUserCounter;
