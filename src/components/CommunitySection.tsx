import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Users,
  Trophy,
  Calendar,
  MessageSquare,
  Heart,
  Share2,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

interface CommunitySectionProps {
  title?: string;
  subtitle?: string;
}

const CommunitySection = ({
  title = "Join Our Fitness Community",
  subtitle = "Connect with like-minded fitness enthusiasts, share your progress, and participate in challenges to stay motivated",
}: CommunitySectionProps) => {
  const [activeTab, setActiveTab] = React.useState("challenges");

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <Tabs
          defaultValue="challenges"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="challenges" className="text-base py-3">
              <Trophy className="mr-2 h-4 w-4" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="forum" className="text-base py-3">
              <MessageSquare className="mr-2 h-4 w-4" />
              Forum
            </TabsTrigger>
            <TabsTrigger value="social" className="text-base py-3">
              <Instagram className="mr-2 h-4 w-4" />
              Social
            </TabsTrigger>
          </TabsList>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "30-Day Weight Loss Challenge",
                  description:
                    "Lose 5-10 pounds in 30 days with daily workouts and nutrition plans",
                  participants: 1245,
                  startDate: "June 1, 2023",
                  image:
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
                  badge: "Popular",
                },
                {
                  title: "Summer Shred Challenge",
                  description:
                    "Get beach-ready with this 6-week intensive workout program",
                  participants: 876,
                  startDate: "July 15, 2023",
                  image:
                    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
                  badge: "New",
                },
                {
                  title: "10K Steps Daily Challenge",
                  description:
                    "Commit to walking 10,000 steps every day for 21 days",
                  participants: 2134,
                  startDate: "Ongoing",
                  image:
                    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
                  badge: "Beginner Friendly",
                },
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={challenge.image}
                        alt={challenge.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {challenge.badge && (
                        <Badge className="absolute top-3 right-3 bg-primary">
                          {challenge.badge}
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {challenge.description}
                      </p>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>
                            {challenge.participants.toLocaleString()}{" "}
                            participants
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>Starts: {challenge.startDate}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-2">Join Challenge</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">
                View All Challenges <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="forum" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "What's your favorite post-workout meal?",
                  author: "Sarah Johnson",
                  authorAvatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                  date: "2 hours ago",
                  replies: 24,
                  likes: 42,
                  tags: ["Nutrition", "Recipes"],
                  excerpt:
                    "I'm looking for some new ideas for post-workout meals that are high in protein but also quick to prepare. What are your go-to options?",
                },
                {
                  title: "How to stay motivated during plateau phases?",
                  author: "Michael Chen",
                  authorAvatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                  date: "Yesterday",
                  replies: 18,
                  likes: 35,
                  tags: ["Motivation", "Weight Loss"],
                  excerpt:
                    "I've been stuck at the same weight for three weeks now despite following my diet and workout plan. Any tips for staying motivated during plateaus?",
                },
                {
                  title: "Best home workout equipment for beginners?",
                  author: "Emily Rodriguez",
                  authorAvatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
                  date: "3 days ago",
                  replies: 31,
                  likes: 56,
                  tags: ["Equipment", "Home Workouts"],
                  excerpt:
                    "I'm setting up a small home gym and would like recommendations for essential equipment that doesn't break the bank but is versatile enough for a good workout.",
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage
                              src={post.authorAvatar}
                              alt={post.author}
                            />
                            <AvatarFallback>
                              {post.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{post.author}</h3>
                            <p className="text-xs text-muted-foreground">
                              {post.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {post.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <div className="flex items-center text-sm">
                            <Heart className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Share2 className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>Share</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">
                View All Discussions <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  platform: "instagram",
                  username: "@fittrack_official",
                  content:
                    "Just completed the 30-day challenge and lost 12 pounds! Thank you @fittrack_app for the amazing program! #TransformationTuesday",
                  image:
                    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
                  likes: 245,
                  comments: 32,
                  date: "2 days ago",
                },
                {
                  platform: "facebook",
                  username: "Michael Chen",
                  content:
                    "Six months of consistent workouts with FitTrack's personalized plans. The before/after speaks for itself! #FitnessJourney",
                  image:
                    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
                  likes: 189,
                  comments: 45,
                  date: "1 week ago",
                },
                {
                  platform: "twitter",
                  username: "@fitness_emily",
                  content:
                    "The meal planning feature on @FitTrack is a game changer! I've saved so much time and stayed on track with my nutrition goals. Highly recommend! #MealPrep",
                  image: "",
                  likes: 78,
                  comments: 12,
                  date: "3 days ago",
                },
                {
                  platform: "instagram",
                  username: "@workout_with_jessica",
                  content:
                    "Morning yoga session using FitTrack's flexibility program. Starting the day right! #MorningRoutine #Yoga",
                  image:
                    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
                  likes: 312,
                  comments: 28,
                  date: "5 days ago",
                },
                {
                  platform: "facebook",
                  username: "Robert Wilson",
                  content:
                    "Just hit a new PR on my deadlift thanks to the strength program from FitTrack! 315 lbs x 5 reps! #PersonalRecord #StrongerEveryDay",
                  image:
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
                  likes: 267,
                  comments: 53,
                  date: "2 days ago",
                },
                {
                  platform: "twitter",
                  username: "@health_coach_sarah",
                  content:
                    "My clients have been seeing amazing results with @FitTrack's AI-powered workout recommendations. Truly personalized fitness for everyone! #FitnessCoach",
                  image: "",
                  likes: 156,
                  comments: 23,
                  date: "1 day ago",
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-0">
                      <div className="p-3 bg-muted/30 flex items-center">
                        {post.platform === "instagram" && (
                          <Instagram className="h-4 w-4 mr-2 text-pink-500" />
                        )}
                        {post.platform === "facebook" && (
                          <Facebook className="h-4 w-4 mr-2 text-blue-500" />
                        )}
                        {post.platform === "twitter" && (
                          <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                        )}
                        <span className="text-sm font-medium">
                          {post.username}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {post.date}
                        </span>
                      </div>

                      {post.image && (
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={post.image}
                            alt="Social media post"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="p-4">
                        <p className="text-sm mb-3">{post.content}</p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <div className="flex space-x-3">
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs h-6 px-2"
                          >
                            View Post
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="flex justify-center space-x-4 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Instagram className="mr-2 h-4 w-4" /> Follow on Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Facebook className="mr-2 h-4 w-4" /> Like on Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Twitter className="mr-2 h-4 w-4" /> Follow on Twitter
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Share your fitness journey with #FitTrackTransformation
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CommunitySection;
