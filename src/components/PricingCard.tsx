import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title?: string;
  price?: string;
  description?: string;
  features?: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  billingPeriod?: string;
  onClick?: () => void;
}

const PricingCard = ({
  title = "Basic Plan",
  price = "$0",
  description = "Perfect for getting started with basic fitness tracking",
  features = [
    { name: "Weight tracking", included: true },
    { name: "Basic workout plans", included: true },
    { name: "Food logging", included: true },
    { name: "Advanced analytics", included: false },
    { name: "Coach support", included: false },
  ],
  popular = false,
  ctaText = "Get Started",
  billingPeriod = "per month",
  onClick = () => {},
}: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        className={`h-full flex flex-col bg-white ${popular ? "border-primary border-2" : ""}`}
      >
        {popular && (
          <div className="absolute top-0 right-0 -mt-2 -mr-2">
            <Badge
              variant="default"
              className="bg-primary text-white font-bold px-3 py-1"
            >
              Most Popular
            </Badge>
          </div>
        )}

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="mt-2">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-sm text-muted-foreground ml-1">
              {billingPeriod}
            </span>
          </div>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div
                  className={`mr-2 mt-1 ${feature.included ? "text-primary" : "text-muted-foreground"}`}
                >
                  {feature.included ? (
                    <Check size={16} />
                  ) : (
                    <span className="text-sm">—</span>
                  )}
                </div>
                <span
                  className={
                    feature.included ? "font-medium" : "text-muted-foreground"
                  }
                >
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-4">
          <Button
            onClick={onClick}
            className="w-full"
            variant={popular ? "default" : "outline"}
            size="lg"
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
