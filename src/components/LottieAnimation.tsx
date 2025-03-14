import React, { useEffect, useRef } from "react";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  speed?: number;
  direction?: 1 | -1;
  width?: number | string;
  height?: number | string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
  onComplete,
  speed = 1,
  direction = 1,
  width = "100%",
  height = "100%",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    // We'll dynamically import lottie-web to avoid SSR issues
    import("lottie-web").then((lottie) => {
      if (containerRef.current) {
        // Destroy any existing animation
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        // Create new animation
        animationRef.current = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData,
        });

        // Set animation speed
        animationRef.current.setSpeed(speed);

        // Set animation direction
        if (direction === -1) {
          animationRef.current.setDirection(-1);
        }

        // Add complete event listener if provided
        if (onComplete) {
          animationRef.current.addEventListener("complete", onComplete);
        }
      }

      // Cleanup function
      return () => {
        if (animationRef.current) {
          if (onComplete) {
            animationRef.current.removeEventListener("complete", onComplete);
          }
          animationRef.current.destroy();
          animationRef.current = null;
        }
      };
    });
  }, [animationData, loop, autoplay, onComplete, speed, direction]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width, height, ...style }}
    />
  );
};

export default LottieAnimation;
