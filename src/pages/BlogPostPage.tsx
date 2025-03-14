import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Tag,
  User,
  ChevronRight,
  ChevronLeft,
  Share2,
  Bookmark,
  ThumbsUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, you would fetch the blog post data based on the slug
  // For this example, we'll use hardcoded content

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Weight Loss
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Science Behind Weight Loss: What Actually Works
            </h1>

            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8 gap-y-2">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>June 15, 2023</span>
              </div>
              <div className="flex items-center mr-6">
                <Clock className="h-4 w-4 mr-1" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>By Dr. Sarah Johnson</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
              alt="Weight loss concept"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg leading-relaxed mb-6">
              Weight loss is a topic surrounded by myths, misconceptions, and
              marketing claims. With so much conflicting information available,
              it can be challenging to separate fact from fiction. In this
              article, we'll explore the science-backed approaches to
              sustainable weight loss and why many popular diets fail in the
              long term.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              The Energy Balance Equation
            </h2>

            <p className="mb-6">
              At its core, weight loss comes down to a simple principle: energy
              balance. To lose weight, you need to consume fewer calories than
              you expend. This creates a calorie deficit, forcing your body to
              use stored energy (primarily fat) to meet its needs.
            </p>

            <p className="mb-6">
              While this principle is straightforward, its application is more
              nuanced. Not all calories are created equal, and various factors
              influence how your body processes and stores energy from different
              foods.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Macronutrients and Their Role in Weight Loss
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Protein</h3>

            <p className="mb-6">
              Protein is the most satiating macronutrient, meaning it helps you
              feel fuller for longer. It also has a higher thermic effect of
              food (TEF) compared to carbohydrates and fats, which means your
              body burns more calories digesting protein than it does processing
              other macronutrients.
            </p>

            <p className="mb-6">
              Research shows that higher protein diets can lead to greater
              weight loss and fat loss while preserving lean muscle mass. Aim
              for 1.6-2.2g of protein per kg of body weight daily when trying to
              lose weight, especially if you're physically active.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Carbohydrates</h3>

            <p className="mb-6">
              Carbohydrates have been demonized in many popular diets, but
              they're not inherently fattening. The quality and quantity of
              carbs matter more than simply cutting them out. Whole, unprocessed
              carbohydrates provide essential nutrients and fiber, which
              supports gut health and satiety.
            </p>

            <p className="mb-6">
              That said, reducing carbohydrate intake can be an effective
              strategy for some individuals, particularly those with insulin
              resistance. Low-carb diets often lead to spontaneous calorie
              reduction due to increased protein intake and ketosis-induced
              appetite suppression.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Fats</h3>

            <p className="mb-6">
              Dietary fat is calorie-dense (9 calories per gram compared to 4
              calories per gram for protein and carbs), but it's also essential
              for hormone production, nutrient absorption, and cell membrane
              integrity.
            </p>

            <p className="mb-6">
              Contrary to past beliefs, dietary fat doesn't automatically
              translate to body fat. Healthy fats from sources like avocados,
              nuts, seeds, and olive oil can support weight loss by promoting
              satiety and providing essential fatty acids.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Why Most Diets Fail
            </h2>

            <p className="mb-6">
              Despite the abundance of diet plans promising quick results,
              research shows that approximately 80% of people who lose
              significant weight regain it within a year. Here's why most diets
              fail in the long term:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Unsustainable restrictions:</strong> Severely limiting
                food groups or calories leads to feelings of deprivation, which
                eventually triggers rebound eating.
              </li>
              <li>
                <strong>Ignoring hunger signals:</strong> Many diets encourage
                ignoring natural hunger cues, which disrupts your body's
                internal regulation systems.
              </li>
              <li>
                <strong>Neglecting psychological factors:</strong> Emotional
                eating, stress, and habitual patterns play significant roles in
                weight management but are often overlooked in diet plans.
              </li>
              <li>
                <strong>One-size-fits-all approach:</strong> Individual
                variations in metabolism, gut microbiome, genetics, and
                lifestyle mean that no single diet works for everyone.
              </li>
              <li>
                <strong>Focus on short-term results:</strong> Quick weight loss
                often comes from water and glycogen depletion rather than fat
                loss, setting the stage for rapid regain.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Evidence-Based Approaches to Sustainable Weight Loss
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              1. Create a Moderate Calorie Deficit
            </h3>

            <p className="mb-6">
              Research suggests that a moderate calorie deficit of 500-750
              calories per day leads to sustainable weight loss of about 0.5-1kg
              (1-2lbs) per week. This approach minimizes metabolic adaptation
              and muscle loss compared to more aggressive deficits.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              2. Prioritize Protein and Fiber
            </h3>

            <p className="mb-6">
              Both protein and fiber increase satiety, helping you feel fuller
              on fewer calories. Aim to include a source of protein at every
              meal and choose high-fiber carbohydrates like vegetables, fruits,
              legumes, and whole grains.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              3. Incorporate Resistance Training
            </h3>

            <p className="mb-6">
              While any physical activity helps create a calorie deficit,
              resistance training is particularly beneficial for weight loss. It
              preserves or builds muscle mass, which supports metabolic health
              and helps maintain your metabolic rate as you lose weight.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              4. Improve Sleep Quality
            </h3>

            <p className="mb-6">
              Poor sleep disrupts hunger hormones, increases cravings, and
              reduces energy expenditure. Studies show that people who sleep
              less than 7 hours per night are more likely to gain weight and
              have difficulty losing it.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              5. Manage Stress
            </h3>

            <p className="mb-6">
              Chronic stress elevates cortisol levels, which can increase
              appetite, particularly for calorie-dense comfort foods.
              Incorporating stress-reduction techniques like meditation, deep
              breathing, or yoga can support weight loss efforts.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              6. Practice Mindful Eating
            </h3>

            <p className="mb-6">
              Mindful eating involves paying full attention to the eating
              experience, recognizing hunger and fullness cues, and eating
              without distractions. This practice helps prevent overeating and
              improves your relationship with food.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              The Role of Habit Formation
            </h2>

            <p className="mb-6">
              Sustainable weight loss isn't about short-term dietary changes but
              rather about establishing healthy habits that you can maintain
              indefinitely. Research on habit formation suggests that it takes
              approximately 66 days (not the commonly cited 21 days) to form a
              new habit.
            </p>

            <p className="mb-6">
              Focus on implementing small, consistent changes rather than
              overhauling your entire lifestyle at once. This approach is more
              sustainable and leads to better long-term outcomes.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>

            <p className="mb-6">
              Effective weight loss combines the science of energy balance with
              an understanding of human psychology and behavior. While creating
              a calorie deficit is necessary, how you achieve that deficit
              matters for long-term success.
            </p>

            <p className="mb-6">
              The most successful approach is one that you can sustain over
              time—a way of eating that provides adequate nutrition,
              satisfaction, and flexibility. Remember that weight loss is not
              linear, and plateaus are a normal part of the process.
            </p>

            <p className="mb-6">
              By focusing on evidence-based strategies and making gradual,
              sustainable changes to your eating and activity patterns, you can
              achieve lasting weight loss and improve your overall health.
            </p>

            <div className="border-t border-b border-border py-6 my-10 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                  alt="Dr. Sarah Johnson"
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Weight Management Specialist
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Bookmark className="h-4 w-4 mr-2" /> Save
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <ThumbsUp className="h-4 w-4 mr-2" /> Like
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex justify-between">
            <Button variant="outline" className="rounded-full">
              <ChevronLeft className="h-4 w-4 mr-2" /> Previous Article
            </Button>
            <Button variant="outline" className="rounded-full">
              Next Article <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${index === 1 ? "1490645935967-10de6ba17061" : index === 2 ? "1517838277536-f5f99be501cd" : "1498837167922-ddd27525d352"}?w=800&q=80`}
                      alt="Related article"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <Tag className="h-3 w-3 mr-1" />
                      <span>
                        {index === 1
                          ? "Nutrition"
                          : index === 2
                            ? "Workouts"
                            : "Motivation"}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {index === 1
                        ? "Nutrition Myths Debunked: Separating Fact from Fiction"
                        : index === 2
                          ? "The Ultimate Guide to HIIT Workouts"
                          : "How to Stay Motivated on Your Fitness Journey"}
                    </h3>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary p-0 h-auto mt-2"
                    >
                      Read article <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Get More Fitness Content
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

export default BlogPostPage;
