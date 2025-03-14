import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import PricingCard from "./PricingCard";
import CountdownTimer from "./CountdownTimer";

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: {
    title: string;
    price: string;
    description: string;
    features: { name: string; included: boolean }[];
    popular: boolean;
    ctaText: string;
    billingPeriod: string;
  }[];
}

const PricingSection = ({
  title = "Choose Your Plan",
  subtitle = "Select the perfect plan to achieve your fitness goals",
  plans = [
    {
      title: "Free",
      price: "$0",
      description: "Perfect for getting started with basic fitness tracking",
      features: [
        { name: "Weight tracking", included: true },
        { name: "Basic workout plans", included: true },
        { name: "Food logging", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Coach support", included: false },
      ],
      popular: false,
      ctaText: "Get Started",
      billingPeriod: "forever",
    },
    {
      title: "Premium",
      price: "$9.99",
      description: "Advanced features for serious fitness enthusiasts",
      features: [
        { name: "Weight tracking", included: true },
        { name: "Basic workout plans", included: true },
        { name: "Food logging", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Coach support", included: false },
      ],
      popular: true,
      ctaText: "Start Free Trial",
      billingPeriod: "per month",
    },
    {
      title: "Pro",
      price: "$19.99",
      description: "Complete solution with personalized coaching",
      features: [
        { name: "Weight tracking", included: true },
        { name: "Basic workout plans", included: true },
        { name: "Food logging", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Coach support", included: true },
      ],
      popular: false,
      ctaText: "Start Free Trial",
      billingPeriod: "per month",
    },
  ],
}: PricingSectionProps) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Auto-reset countdown timer every 24 hours
  const [countdownEndDate, setCountdownEndDate] = useState<Date>(
    new Date(Date.now() + 24 * 60 * 60 * 1000),
  );

  useEffect(() => {
    // Reset the countdown every 24 hours
    const resetInterval = setInterval(
      () => {
        setCountdownEndDate(new Date(Date.now() + 24 * 60 * 60 * 1000));
      },
      24 * 60 * 60 * 1000,
    );

    return () => clearInterval(resetInterval);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <CountdownTimer
            title="Limited Time Offer"
            description="Get 30% off any plan when you sign up today!"
            endDate={countdownEndDate}
            onComplete={() =>
              setCountdownEndDate(new Date(Date.now() + 24 * 60 * 60 * 1000))
            }
          />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaText={plan.ctaText}
                billingPeriod={plan.billingPeriod}
                onClick={() => console.log(`Selected ${plan.title} plan`)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <Shield className="w-5 h-5 text-primary mr-2" />
            <span className="font-medium text-gray-900 dark:text-white">
              30-Day Money-Back Guarantee
            </span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Not satisfied with our service? Get a full refund within 30 days, no
            questions asked.
          </p>
        </motion.div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <Button
            variant="link"
            className="text-primary"
            onClick={() =>
              document
                .getElementById("faq-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Have questions? Check our FAQ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
