import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { X, Gift, Mail } from "lucide-react";

interface ExitIntentPopupProps {
  discount?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  onSubmit?: (email: string) => void;
}

const ExitIntentPopup = ({
  discount = "20%",
  title = "Wait! Don't Miss Out!",
  description = "Join thousands of users who have transformed their fitness journey. Subscribe now and get a special discount on our premium plans.",
  ctaText = "Get My Discount",
  onSubmit = () => {},
}: ExitIntentPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Only set up the exit intent detection if it hasn't been triggered yet
    if (!hasTriggered) {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when the mouse leaves from the top of the page
        if (e.clientY <= 0 && !hasTriggered) {
          setIsOpen(true);
          setHasTriggered(true);
        }
      };

      // Also trigger after a certain amount of time (30 seconds)
      const timeoutId = setTimeout(() => {
        if (!hasTriggered) {
          setIsOpen(true);
          setHasTriggered(true);
        }
      }, 30000);

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
        clearTimeout(timeoutId);
      };
    }
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit(email);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Close the dialog after showing success message
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Gift className="mr-2 h-5 w-5 text-primary" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center py-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 animate-pulse" />
            <div className="relative bg-primary/10 text-primary font-bold text-3xl md:text-4xl py-3 px-6 rounded-lg">
              {discount} OFF
            </div>
          </div>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    ctaText
                  )}
                </Button>
              </DialogFooter>
            </div>
          </form>
        ) : (
          <div className="py-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your discount code has been sent to your email.
            </p>
          </div>
        )}

        <div className="text-xs text-center text-muted-foreground mt-2">
          By subscribing, you agree to our Terms and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
