import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Play, Pause, Volume2, VolumeX, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoTestimonialProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  name?: string;
  age?: number;
  weightLost?: string;
  quote?: string;
  avatarSrc?: string;
  rating?: number;
}

const VideoTestimonial = ({
  videoSrc = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  thumbnailSrc = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  name = "Sarah Johnson",
  age = 32,
  weightLost = "28 lbs",
  quote = "This app completely transformed my fitness journey. I've never felt better!",
  avatarSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  rating = 5,
}: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [animateQuote, setAnimateQuote] = useState(false);

  useEffect(() => {
    if (isHovering) {
      const timer = setTimeout(() => {
        setAnimateQuote(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setAnimateQuote(false);
    }
  }, [isHovering]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      className="w-full max-w-[350px] bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => {
        setIsHovering(true);
        setIsPlaying(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsPlaying(false);
      }}
    >
      <Card className="overflow-hidden border border-border shadow-lg">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {/* Video or thumbnail */}
          {isPlaying ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted={isMuted}
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={thumbnailSrc}
              alt={`${name}'s transformation`}
              className="h-full w-full object-cover"
            />
          )}

          {/* Video controls overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
            <div className="flex gap-3">
              <button
                onClick={handlePlayPause}
                className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/40"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-white" />
                ) : (
                  <Play className="h-5 w-5 text-white" />
                )}
              </button>
              <button
                onClick={handleMuteToggle}
                className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/40"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Transformation badge */}
          <div className="absolute bottom-2 left-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {weightLost} lost
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={avatarSrc} alt={name} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">
                  {name}, {age}
                </h3>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <AnimatePresence mode="wait">
                {animateQuote ? (
                  <motion.p
                    key="animated-quote"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground"
                  >
                    {quote.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.02 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                ) : (
                  <motion.p
                    key="static-quote"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground"
                  >
                    {quote}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoTestimonial;
