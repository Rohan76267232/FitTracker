import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground = ({ children }: ParallaxBackgroundProps) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Transform values for parallax elements
  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.2]);
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * -0.1]);
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.05]);
  const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0.3]);

  return (
    <div className="relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          style={{ y: y1, opacity }}
        />
        <motion.div
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          style={{ y: y2, opacity }}
        />
        <motion.div
          className="absolute bottom-20 left-[30%] w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          style={{ y: y3, opacity }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTYwIDBoLTFWNjBoMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHptLTIgMGgxVjYwaC0xVjB6bS0yIDBoMVY2MGgtMVYwem0tMiAwaDFWNjBoLTFWMHpNMCAxaDYwdjFIMFYxem0wIDJoNjB2MUgwVjN6bTAgMmg2MHYxSDBWNXptMCAyaDYwdjFIMFY3em0wIDJoNjB2MUgwVjl6bTAgMmg2MHYxSDBWMTF6bTAgMmg2MHYxSDBWMTN6bTAgMmg2MHYxSDBWMTV6bTAgMmg2MHYxSDBWMTd6bTAgMmg2MHYxSDBWMTl6bTAgMmg2MHYxSDBWMjF6bTAgMmg2MHYxSDBWMjN6bTAgMmg2MHYxSDBWMjV6bTAgMmg2MHYxSDBWMjd6bTAgMmg2MHYxSDBWMjl6bTAgMmg2MHYxSDBWMzF6bTAgMmg2MHYxSDBWMzN6bTAgMmg2MHYxSDBWMzV6bTAgMmg2MHYxSDBWMzd6bTAgMmg2MHYxSDBWMzl6bTAgMmg2MHYxSDBWNDF6bTAgMmg2MHYxSDBWNDN6bTAgMmg2MHYxSDBWNDV6bTAgMmg2MHYxSDBWNDd6bTAgMmg2MHYxSDBWNDl6bTAgMmg2MHYxSDBWNTF6bTAgMmg2MHYxSDBWNTN6bTAgMmg2MHYxSDBWNTV6bTAgMmg2MHYxSDBWNTd6bTAgMmg2MHYxSDBWNTl6IiBmaWxsPSIjMzMzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxBackground;
