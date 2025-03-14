import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface VideoTestimonialProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  name?: string;
  age?: number;
  weightLost?: string;
  quote?: string;
  avatarSrc?: string;
}

const VideoTestimonial = ({
  videoSrc = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  thumbnailSrc = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  name = "Sarah Johnson",
  age = 32,
  weightLost = "28 lbs",
  quote = "This app completely transformed my fitness journey. I've never felt better!",
  avatarSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
}: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsPlaying(false);
      }}
    >
      <Card className="overflow-hidden border border-border">
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
              <h3 className="font-medium">
                {name}, {age}
              </h3>
              <p className="text-sm text-muted-foreground">{quote}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoTestimonial;
