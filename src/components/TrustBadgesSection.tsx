import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, CreditCard, Lock } from "lucide-react";

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustBadgesSectionProps {
  title?: string;
  subtitle?: string;
  badges?: TrustBadge[];
}

const TrustBadgesSection = ({
  title = "Why Trust FitTrack",
  subtitle = "Join thousands of satisfied users who have transformed their fitness journey with our secure, expert-backed platform",
  badges = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "30-Day Money Back Guarantee",
      description:
        "Not satisfied? Get a full refund within 30 days, no questions asked.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "SSL Secure Payment",
      description:
        "Your payment information is encrypted and secure with industry-standard SSL.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Verified by Fitness Experts",
      description:
        "All workout plans and nutrition advice are reviewed by certified fitness professionals.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available around the clock to assist you.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Flexible Payment Options",
      description:
        "Pay monthly or annually with credit card, PayPal, or Apple Pay.",
    },
  ],
}: TrustBadgesSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {badge.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
              <p className="text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12 gap-8 flex-wrap"
        >
          {/* Payment method logos */}
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=visa&backgroundColor=ffffff"
            alt="Visa"
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=mastercard&backgroundColor=ffffff"
            alt="Mastercard"
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=amex&backgroundColor=ffffff"
            alt="American Express"
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=paypal&backgroundColor=ffffff"
            alt="PayPal"
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://api.dicebear.com/7.x/shapes/svg?seed=applepay&backgroundColor=ffffff"
            alt="Apple Pay"
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
