import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FooterProps {
  companyName?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  navigationLinks?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

const Footer = ({
  companyName = "FitTrack Pro",
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
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
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
            <p className="text-slate-300 mb-6 max-w-md">
              Transform your body and life with our comprehensive fitness
              tracking solution. Monitor progress, plan workouts, and achieve
              your health goals.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.youtube}
                className="hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2 md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-slate-300 mb-4">
              Get the latest fitness tips, special offers, and updates delivered
              to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowRight size={16} className="mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex space-x-6">
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
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
