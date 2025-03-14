import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface TransformationItem {
  id: string;
  name: string;
  age: number;
  duration: string;
  weightLost: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
}

interface TransformationGalleryProps {
  transformations?: TransformationItem[];
}

const defaultTransformations: TransformationItem[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 32,
    duration: "6 months",
    weightLost: "45 lbs",
    beforeImage:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    testimonial:
      "The app helped me stay consistent with my workouts and nutrition.",
  },
  {
    id: "2",
    name: "Michael Chen",
    age: 28,
    duration: "8 months",
    weightLost: "60 lbs",
    beforeImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
    testimonial:
      "I never thought I could transform my body like this. The tracking features kept me motivated.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    age: 35,
    duration: "4 months",
    weightLost: "30 lbs",
    beforeImage:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    testimonial:
      "The meal planning feature was a game-changer for my weight loss journey.",
  },
];

const TransformationGallery = ({
  transformations = defaultTransformations,
}: TransformationGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === transformations.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? transformations.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, transformations.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentTransformation = transformations[currentIndex];

  return (
    <div
      className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-[400px] w-full">
        {/* Transformation Slides */}
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          <div className="relative flex-1 flex flex-col md:flex-row">
            {/* Before Image */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <span className="text-white text-xl font-bold px-4 py-2 bg-black bg-opacity-70 rounded-full">
                  BEFORE
                </span>
              </div>
              <img
                src={currentTransformation.beforeImage}
                alt={`${currentTransformation.name} before transformation`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* After Image */}
            <div className="relative flex-1 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <span className="text-white text-xl font-bold px-4 py-2 bg-black bg-opacity-70 rounded-full">
                  AFTER
                </span>
              </div>
              <img
                src={currentTransformation.afterImage}
                alt={`${currentTransformation.name} after transformation`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 opacity-80 hover:opacity-100"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 opacity-80 hover:opacity-100"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {transformations.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>

      {/* Transformation Details */}
      <div className="p-6 bg-white dark:bg-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {currentTransformation.name}, {currentTransformation.age}
            </h3>
            <div className="flex space-x-4 mt-1">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {currentTransformation.duration}
              </span>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                {currentTransformation.weightLost} lost
              </span>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Success Story #{currentIndex + 1}
            </span>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 italic">
          "{currentTransformation.testimonial}"
        </p>
      </div>
    </div>
  );
};

export default TransformationGallery;
