import React, { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedWorkoutIconProps {
  type: "pushup" | "squat" | "lunge" | "plank" | "jumpingjack" | "burpee";
  size?: number;
  color?: string;
  className?: string;
  animate?: boolean;
}

const AnimatedWorkoutIcon: React.FC<AnimatedWorkoutIconProps> = ({
  type,
  size = 48,
  color = "currentColor",
  className = "",
  animate = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // SVG paths and animation variants for different workout types
  const getIconContent = () => {
    switch (type) {
      case "pushup":
        return {
          paths: [
            // Body
            <motion.path
              key="body"
              d="M10,24 L38,24 L38,28 L10,28 Z"
              fill={color}
              initial={{ y: animate ? 5 : 0 }}
              animate={animate || isHovered ? { y: [5, 0, 5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Arms
            <motion.path
              key="arms"
              d="M10,24 L4,32 M38,24 L44,32"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y: animate ? 5 : 0 }}
              animate={animate || isHovered ? { y: [5, 0, 5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Legs
            <motion.path
              key="legs"
              d="M14,28 L8,36 M34,28 L40,36"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y: animate ? 5 : 0 }}
              animate={animate || isHovered ? { y: [5, 0, 5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Head
            <motion.circle
              key="head"
              cx="24"
              cy="18"
              r="6"
              fill={color}
              initial={{ y: animate ? 5 : 0 }}
              animate={animate || isHovered ? { y: [5, 0, 5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
          ],
        };

      case "squat":
        return {
          paths: [
            // Body
            <motion.path
              key="body"
              d="M24,12 L24,30"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ scaleY: animate ? 0.8 : 1 }}
              animate={animate || isHovered ? { scaleY: [0.8, 1, 0.8] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Arms
            <motion.path
              key="arms"
              d="M24,18 L12,22 M24,18 L36,22"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y: animate ? 4 : 0 }}
              animate={animate || isHovered ? { y: [4, 0, 4] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Legs
            <motion.path
              key="legs"
              d="M24,30 L16,38 M24,30 L32,38"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y: animate ? -4 : 0 }}
              animate={animate || isHovered ? { y: [-4, 0, -4] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Head
            <motion.circle
              key="head"
              cx="24"
              cy="8"
              r="4"
              fill={color}
              initial={{ y: animate ? 2 : 0 }}
              animate={animate || isHovered ? { y: [2, 0, 2] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
          ],
        };

      case "jumpingjack":
        return {
          paths: [
            // Body
            <motion.path
              key="body"
              d="M24,12 L24,30"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />,
            // Arms
            <motion.path
              key="arms"
              d="M24,18 L12,12 M24,18 L36,12"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: animate ? -30 : 0 }}
              animate={animate || isHovered ? { rotate: [-30, 30, -30] } : {}}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            />,
            // Legs
            <motion.path
              key="legs"
              d="M24,30 L16,38 M24,30 L32,38"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: animate ? -20 : 0 }}
              animate={animate || isHovered ? { rotate: [-20, 20, -20] } : {}}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            />,
            // Head
            <motion.circle key="head" cx="24" cy="8" r="4" fill={color} />,
          ],
        };

      case "plank":
        return {
          paths: [
            // Body
            <motion.path
              key="body"
              d="M14,24 L38,24"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ y: animate ? 1 : 0 }}
              animate={animate || isHovered ? { y: [1, -1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />,
            // Arms
            <motion.path
              key="arms"
              d="M14,24 L8,32 M14,24 L8,16"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y: animate ? 1 : 0 }}
              animate={animate || isHovered ? { y: [1, -1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />,
            // Legs
            <motion.path
              key="legs"
              d="M38,24 L44,32"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y: animate ? 1 : 0 }}
              animate={animate || isHovered ? { y: [1, -1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />,
            // Head
            <motion.circle
              key="head"
              cx="8"
              cy="24"
              r="4"
              fill={color}
              initial={{ y: animate ? 1 : 0 }}
              animate={animate || isHovered ? { y: [1, -1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />,
          ],
        };

      case "lunge":
        return {
          paths: [
            // Body
            <motion.path
              key="body"
              d="M24,12 L28,30"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: animate ? -5 : 0 }}
              animate={animate || isHovered ? { rotate: [-5, 0, -5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Arms
            <motion.path
              key="arms"
              d="M24,18 L16,14 M24,18 L32,22"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: animate ? -5 : 0 }}
              animate={animate || isHovered ? { rotate: [-5, 0, -5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Legs
            <motion.path
              key="legs"
              d="M28,30 L36,38 M28,30 L18,36"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: animate ? -5 : 0 }}
              animate={animate || isHovered ? { rotate: [-5, 0, -5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
            // Head
            <motion.circle
              key="head"
              cx="24"
              cy="8"
              r="4"
              fill={color}
              initial={{ rotate: animate ? -5 : 0 }}
              animate={animate || isHovered ? { rotate: [-5, 0, -5] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />,
          ],
        };

      case "burpee":
        return {
          paths: [
            // First position (standing)
            <motion.g
              key="standing"
              initial={{ opacity: animate ? 1 : 0 }}
              animate={animate || isHovered ? { opacity: [1, 0, 0, 0, 1] } : {}}
              transition={{
                repeat: Infinity,
                duration: 3,
                times: [0, 0.2, 0.4, 0.8, 1],
              }}
            >
              <path
                d="M24,12 L24,30 M24,30 L18,38 M24,30 L30,38 M24,18 L18,14 M24,18 L30,14"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="24" cy="8" r="4" fill={color} />
            </motion.g>,
            // Second position (squat)
            <motion.g
              key="squat"
              initial={{ opacity: animate ? 0 : 0 }}
              animate={animate || isHovered ? { opacity: [0, 1, 0, 0, 0] } : {}}
              transition={{
                repeat: Infinity,
                duration: 3,
                times: [0, 0.2, 0.4, 0.8, 1],
              }}
            >
              <path
                d="M24,20 L24,30 M24,30 L18,34 M24,30 L30,34 M24,24 L18,20 M24,24 L30,20"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="24" cy="16" r="4" fill={color} />
            </motion.g>,
            // Third position (plank)
            <motion.g
              key="plank"
              initial={{ opacity: animate ? 0 : 0 }}
              animate={animate || isHovered ? { opacity: [0, 0, 1, 0, 0] } : {}}
              transition={{
                repeat: Infinity,
                duration: 3,
                times: [0, 0.2, 0.4, 0.8, 1],
              }}
            >
              <path
                d="M14,30 L38,30 M14,30 L8,34 M38,30 L44,34"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="8" cy="28" r="4" fill={color} />
            </motion.g>,
            // Fourth position (pushup)
            <motion.g
              key="pushup"
              initial={{ opacity: animate ? 0 : 0 }}
              animate={animate || isHovered ? { opacity: [0, 0, 0, 1, 0] } : {}}
              transition={{
                repeat: Infinity,
                duration: 3,
                times: [0, 0.2, 0.4, 0.8, 1],
              }}
            >
              <path
                d="M14,34 L38,34 M14,34 L8,38 M38,34 L44,38 M14,34 L8,30 M38,34 L44,30"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="8" cy="28" r="4" fill={color} />
            </motion.g>,
          ],
        };

      default:
        return {
          paths: [
            <circle
              key="default"
              cx="24"
              cy="24"
              r="16"
              stroke={color}
              fill="none"
              strokeWidth="2"
            />,
          ],
        };
    }
  };

  const { paths } = getIconContent();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {paths}
    </svg>
  );
};

export default AnimatedWorkoutIcon;
