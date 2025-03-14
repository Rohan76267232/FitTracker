import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, User, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorAvatar: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Science Behind Weight Loss: What Actually Works",
    excerpt:
      "Discover the evidence-based approaches to sustainable weight loss and why many popular diets fail in the long term.",
    date: "June 15, 2023",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    category: "Weight Loss",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    slug: "science-behind-weight-loss",
  },
  {
    id: "2",
    title: "Strength Training for Beginners: Your Complete Guide",
    excerpt:
      "Learn how to start strength training safely and effectively, even if you've never lifted weights before.",
    date: "May 28, 2023",
    readTime: "10 min read",
    author: "Mike Chen",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    category: "Strength Training",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    slug: "strength-training-beginners-guide",
  },
  {
    id: "3",
    title: "Nutrition Myths Debunked: Separating Fact from Fiction",
    excerpt:
      "We examine common nutrition myths and provide science-backed information to help you make better food choices.",
    date: "April 12, 2023",
    readTime: "7 min read",
    author: "Emily Rodriguez, RD",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    slug: "nutrition-myths-debunked",
  },
  {
    id: "4",
    title: "How to Stay Motivated on Your Fitness Journey",
    excerpt:
      "Practical strategies to maintain motivation and overcome common obstacles in your long-term fitness journey.",
    date: "March 5, 2023",
    readTime: "6 min read",
    author: "James Wilson",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    category: "Motivation",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    slug: "stay-motivated-fitness-journey",
  },
  {
    id: "5",
    title: "The Ultimate Guide to HIIT Workouts",
    excerpt:
      "Everything you need to know about High-Intensity Interval Training, including sample workouts and benefits.",
    date: "February 18, 2023",
    readTime: "9 min read",
    author: "Alex Thompson",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    category: "Workouts",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    slug: "ultimate-guide-hiit-workouts",
  },
  {
    id: "6",
    title: "Understanding Macros: A Beginner's Guide to Macronutrients",
    excerpt:
      "Learn how to calculate and track macronutrients to optimize your diet for your specific fitness goals.",
    date: "January 30, 2023",
    readTime: "11 min read",
    author: "Lisa Chang, MS",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
    slug: "understanding-macros-guide",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fitness Knowledge Hub
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert advice, science-backed articles, and practical tips to help
            you achieve your fitness goals
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" size="sm" className="rounded-full">
              All Articles
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Weight Loss
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Nutrition
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Workouts
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Motivation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card rounded-xl overflow-hidden shadow-lg border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-64 md:h-auto relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551763280-7fc24a6ccc09?w=800&q=80"
                alt="Featured article"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">July 2, 2023</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>12 min read</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Mind-Muscle Connection: How Mental Focus Enhances Your
                  Workout Results
                </h3>

                <p className="text-muted-foreground mb-6">
                  Discover how the science of neuromuscular connection can help
                  you get more from every rep and set. Learn practical
                  techniques to improve your mind-muscle connection and see
                  better results from your training program.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=robert"
                    alt="Author"
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">Dr. Robert Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Exercise Physiologist
                    </p>
                  </div>
                </div>

                <Button className="rounded-full">Read Article</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="h-8 w-8 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium">
                          {post.author}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary p-0 h-auto"
                      >
                        Read more <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full px-8">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Fitness Tips in Your Inbox
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly fitness tips, nutrition
              advice, and exclusive workout plans delivered straight to your
              inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
