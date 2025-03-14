import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import TransformationGallery from "./TransformationGallery";
import VideoTestimonial from "./VideoTestimonial";
import LiveUserCounter from "./LiveUserCounter";

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  title = "Real Results from Real People",
  subtitle = "See how our app has transformed lives and helped people achieve their fitness goals",
}: TestimonialsSectionProps) => {
  const [activeTab, setActiveTab] = useState("transformations");

  // Sample video testimonials data
  const videoTestimonials = [
    {
      id: "1",
      videoSrc:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      name: "Sarah Johnson",
      age: 32,
      weightLost: "28 lbs",
      quote:
        "This app completely transformed my fitness journey. I've never felt better!",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
    },
    {
      id: "2",
      videoSrc:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
      name: "Michael Chen",
      age: 28,
      weightLost: "45 lbs",
      quote:
        "The workout plans are amazing. I've seen results I never thought possible.",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
    },
    {
      id: "3",
      videoSrc:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      thumbnailSrc:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
      name: "Emily Rodriguez",
      age: 35,
      weightLost: "32 lbs",
      quote:
        "The meal planning feature was a game-changer for my weight loss journey.",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      rating: 4,
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <Tabs
          defaultValue="transformations"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="transformations" className="text-lg py-3">
                Transformations
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-lg py-3">
                Video Stories
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="transformations" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TransformationGallery />
            </motion.div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
              {videoTestimonials.map((testimonial) => (
                <VideoTestimonial
                  key={testimonial.id}
                  videoSrc={testimonial.videoSrc}
                  thumbnailSrc={testimonial.thumbnailSrc}
                  name={testimonial.name}
                  age={testimonial.age}
                  weightLost={testimonial.weightLost}
                  quote={testimonial.quote}
                  avatarSrc={testimonial.avatarSrc}
                  rating={testimonial.rating}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-16 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <LiveUserCounter />
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Join thousands of satisfied users who have transformed their lives
            with our app.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10">
              Start Your Transformation Today
            </span>
            <span className="absolute inset-0 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full animate-pulse bg-primary/20"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
