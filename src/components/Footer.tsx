import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  ArrowRight,
  Check,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";

interface FooterProps {
  companyName?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    github?: string;
  };
  navigationLinks?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

const Footer = ({
  companyName = "FitnessTracker",
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
    github: "#",
  },
  navigationLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ],
}: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
              <p className="text-slate-300 mb-6 max-w-md">
                Transform your body and life with our comprehensive fitness
                tracking solution. Monitor progress, plan workouts, and achieve
                your health goals.
              </p>
              <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([platform, url], index) => {
                  let Icon;
                  let hoverColor;

                  switch (platform) {
                    case "facebook":
                      Icon = Facebook;
                      hoverColor = "hover:text-blue-400";
                      break;
                    case "twitter":
                      Icon = Twitter;
                      hoverColor = "hover:text-blue-400";
                      break;
                    case "instagram":
                      Icon = Instagram;
                      hoverColor = "hover:text-pink-400";
                      break;
                    case "youtube":
                      Icon = Youtube;
                      hoverColor = "hover:text-red-500";
                      break;
                    case "linkedin":
                      Icon = Linkedin;
                      hoverColor = "hover:text-blue-500";
                      break;
                    case "github":
                      Icon = Github;
                      hoverColor = "hover:text-gray-400";
                      break;
                    default:
                      return null;
                  }

                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      className={`${hoverColor} transition-all duration-300`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            className="lg:col-span-2 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-slate-300 mb-4">
              Get the latest fitness tips, special offers, and updates delivered
              to your inbox.
            </p>

            {isSubscribed ? (
              <Alert className="bg-green-900/20 border-green-800 text-green-400">
                <Check className="h-4 w-4 mr-2" />
                <AlertDescription>
                  Thanks for subscribing! Check your email for a confirmation.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white focus:border-primary transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        Subscribing
                      </span>
                    ) : (
                      <>
                        <ArrowRight size={16} className="mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Disclaimer
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Return & Refund Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
