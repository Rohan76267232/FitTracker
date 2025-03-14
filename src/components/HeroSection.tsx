import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Smartphone, Activity, BarChart3 } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Transform Your Body, Transform Your Life",
  subtitle = "Track your weight loss journey, plan workouts, and achieve your fitness goals with our all-in-one fitness companion app.",
  ctaText = "Start Your Journey",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mockupVariants = {
    hover: {
      y: -15,
      rotateY: 5,
      rotateX: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    initial: {
      y: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-[800px] bg-gradient-to-b from-background to-background/90 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=70')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-secondary/20 blur-xl"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/20 blur-xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className={`text-lg px-8 py-6 rounded-full transition-all duration-300 ${isHovered ? "shadow-[0_0_15px_rgba(var(--primary-rgb)/0.5)]" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={onCtaClick}
            >
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* App mockups with 3D hover effect */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Main mockup */}
            <motion.div
              className="relative z-20 bg-background rounded-3xl shadow-2xl overflow-hidden border border-border"
              variants={mockupVariants}
              initial="initial"
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              <div className="relative pt-10 pb-4 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-muted rounded-full" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Activity className="h-6 w-6 text-primary mr-2" />
                    <span className="font-semibold">FitTrack</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-muted" />
                    <div className="w-2 h-2 rounded-full bg-muted" />
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 mb-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Weight Progress</h3>
                    <span className="text-xs text-muted-foreground">
                      Last 30 days
                    </span>
                  </div>
                  <div className="h-32 flex items-end space-x-1">
                    {[65, 64.5, 64, 63.8, 63.5, 63.2, 62.8, 62.5].map(
                      (weight, i) => (
                        <div
                          key={i}
                          className="flex-1 flex flex-col items-center"
                        >
                          <div
                            className="w-full bg-primary/80 rounded-t-sm"
                            style={{ height: `${(weight - 60) * 10}px` }}
                          />
                          {i % 2 === 0 && (
                            <span className="text-[10px] mt-1 text-muted-foreground">
                              {i * 4}d
                            </span>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Today's Goals</h3>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "75%" }}
                        />
                      </div>
                      <span className="ml-2 text-xs font-medium">75%</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Steps: 7,500/10,000</span>
                      <span>Calories: 1,200/1,800</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary mockup */}
            <motion.div
              className="absolute -bottom-10 -left-10 z-10 w-48 h-80 bg-background rounded-2xl shadow-xl overflow-hidden border border-border"
              variants={mockupVariants}
              initial="initial"
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              <div className="h-full p-3 bg-gradient-to-b from-secondary/10 to-background">
                <div className="flex justify-between items-center mb-3">
                  <Smartphone className="h-4 w-4 text-secondary" />
                  <div className="w-8 h-1 bg-muted rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-card rounded-lg shadow-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">
                        12.4k
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Steps Today
                      </div>
                    </div>
                  </div>
                  <div className="h-12 bg-card rounded-lg shadow-sm" />
                  <div className="h-12 bg-card rounded-lg shadow-sm" />
                  <div className="h-12 bg-card rounded-lg shadow-sm" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
