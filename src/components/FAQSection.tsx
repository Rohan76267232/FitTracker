import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { HelpCircle, MessageCircle } from "lucide-react";
import ChatbotDialog from "./ChatbotDialog";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: Array<{
    question: string;
    answer: string;
    tooltip?: string;
  }>;
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our fitness tracking platform",
  faqs = [
    {
      question: "How does the weight tracking feature work?",
      answer:
        "Our weight tracking feature allows you to log your weight daily, weekly, or at your preferred frequency. The app automatically generates visual graphs showing your progress over time, calculates trends, and celebrates when you hit milestones.",
      tooltip: "Track in pounds or kilograms",
    },
    {
      question: "Can I sync with my fitness devices?",
      answer:
        "Yes! Our app integrates with popular fitness devices and apps including Fitbit, Apple Watch, Garmin, Google Fit, and more. This allows for automatic syncing of your activity data, workouts, and calories burned.",
      tooltip: "Works with 20+ devices",
    },
    {
      question: "Is there a meal planning feature?",
      answer:
        "Absolutely! Our comprehensive meal planning feature allows you to plan your meals for the week, automatically calculates macros and calories, and even generates a shopping list based on your meal plan.",
      tooltip: "Includes 1000+ recipes",
    },
    {
      question: "How accurate is the calorie counter?",
      answer:
        "Our calorie counter is based on a database of over 1 million foods with nutritional information verified by registered dietitians. For packaged foods, you can also scan barcodes for instant and accurate information.",
      tooltip: "1M+ food database",
    },
    {
      question: "Do you offer personalized workout plans?",
      answer:
        "Yes, we provide personalized workout plans based on your fitness level, goals, available equipment, and time constraints. Our AI-powered system adjusts your plan as you progress to ensure optimal results.",
      tooltip: "AI-powered customization",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes basic weight tracking, food logging, workout tracking, and access to our community forums. Premium features like advanced analytics, AI recommendations, and coach support are available in our paid plans.",
      tooltip: "No credit card required",
    },
  ],
}: FAQSectionProps) => {
  const [isChatbotOpen, setIsChatbotOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <section className="py-20 px-4 md:px-8 bg-background w-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline py-4 group">
                    <div className="flex items-center">
                      <span className="group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      {faq.tooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="ml-2 inline-flex"
                            >
                              <HelpCircle className="h-4 w-4 text-muted-foreground" />
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{faq.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="mb-6 text-muted-foreground">
              Still have questions? Our AI assistant can help you find answers.
            </p>
            <Button
              onClick={() => setIsChatbotOpen(true)}
              className="group rounded-full"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Chat with our Assistant
            </Button>
          </motion.div>
        </div>

        <ChatbotDialog open={isChatbotOpen} setOpen={setIsChatbotOpen} />
      </section>
    </TooltipProvider>
  );
};

export default FAQSection;
