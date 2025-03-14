import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Brain, Dumbbell, Utensils, Target, Sparkles } from "lucide-react";

interface AIPersonalizationSectionProps {
  title?: string;
  subtitle?: string;
}

const AIPersonalizationSection = ({
  title = "AI-Powered Personalization",
  subtitle = "Get customized fitness and nutrition recommendations tailored to your unique goals and preferences",
}: AIPersonalizationSectionProps) => {
  const [activeTab, setActiveTab] = useState("workouts");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Form states
  const [workoutGoal, setWorkoutGoal] = useState("weight-loss");
  const [fitnessLevel, setFitnessLevel] = useState("beginner");
  const [workoutDuration, setWorkoutDuration] = useState([30]);
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState([3]);
  const [hasEquipment, setHasEquipment] = useState(false);

  const [dietType, setDietType] = useState("balanced");
  const [calorieGoal, setCalorieGoal] = useState([2000]);
  const [allergies, setAllergies] = useState("");
  const [mealPreference, setMealPreference] = useState("both");

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

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
            <Brain className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {subtitle}
          </p>
        </motion.div>

        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle>Tell us about your goals</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="workouts"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="workouts" className="text-base py-3">
                  <Dumbbell className="mr-2 h-4 w-4" />
                  Workout Plan
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="text-base py-3">
                  <Utensils className="mr-2 h-4 w-4" />
                  Meal Plan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="workouts" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="workout-goal">Your Fitness Goal</Label>
                      <Select
                        value={workoutGoal}
                        onValueChange={setWorkoutGoal}
                      >
                        <SelectTrigger
                          id="workout-goal"
                          className="w-full mt-1"
                        >
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weight-loss">
                            Weight Loss
                          </SelectItem>
                          <SelectItem value="muscle-gain">
                            Muscle Gain
                          </SelectItem>
                          <SelectItem value="endurance">Endurance</SelectItem>
                          <SelectItem value="flexibility">
                            Flexibility
                          </SelectItem>
                          <SelectItem value="general-fitness">
                            General Fitness
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="fitness-level">Your Fitness Level</Label>
                      <Select
                        value={fitnessLevel}
                        onValueChange={setFitnessLevel}
                      >
                        <SelectTrigger
                          id="fitness-level"
                          className="w-full mt-1"
                        >
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="workout-duration">
                          Workout Duration (minutes)
                        </Label>
                        <span className="text-sm font-medium">
                          {workoutDuration[0]}
                        </span>
                      </div>
                      <Slider
                        id="workout-duration"
                        min={15}
                        max={90}
                        step={5}
                        value={workoutDuration}
                        onValueChange={setWorkoutDuration}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="workouts-per-week">
                          Workouts Per Week
                        </Label>
                        <span className="text-sm font-medium">
                          {workoutsPerWeek[0]}
                        </span>
                      </div>
                      <Slider
                        id="workouts-per-week"
                        min={1}
                        max={7}
                        step={1}
                        value={workoutsPerWeek}
                        onValueChange={setWorkoutsPerWeek}
                      />
                    </div>

                    <div className="flex items-center space-x-2 pt-4">
                      <Switch
                        id="has-equipment"
                        checked={hasEquipment}
                        onCheckedChange={setHasEquipment}
                      />
                      <Label htmlFor="has-equipment">
                        I have access to gym equipment
                      </Label>
                    </div>

                    <div className="pt-6">
                      <Button
                        onClick={handleGenerate}
                        className="w-full"
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
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
                            Generating your plan...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-5 w-5" />
                            Generate AI Workout Plan
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {showResults && activeTab === "workouts" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 border-t pt-6"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Your Personalized Workout Plan
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          day: "Day 1",
                          focus: "Lower Body",
                          exercises: [
                            "Squats: 3 sets x 12 reps",
                            "Lunges: 3 sets x 10 reps each leg",
                            "Leg Press: 3 sets x 12 reps",
                            "Calf Raises: 3 sets x 15 reps",
                          ],
                        },
                        {
                          day: "Day 2",
                          focus: "Upper Body",
                          exercises: [
                            "Push-ups: 3 sets x 10 reps",
                            "Dumbbell Rows: 3 sets x 12 reps",
                            "Shoulder Press: 3 sets x 10 reps",
                            "Bicep Curls: 3 sets x 12 reps",
                          ],
                        },
                        {
                          day: "Day 3",
                          focus: "Core & Cardio",
                          exercises: [
                            "Plank: 3 sets x 30 seconds",
                            "Russian Twists: 3 sets x 20 reps",
                            "Mountain Climbers: 3 sets x 20 reps",
                            "HIIT: 15 minutes",
                          ],
                        },
                      ].map((day, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="bg-primary/10 py-3">
                            <CardTitle className="text-lg">
                              {day.day}: {day.focus}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <ul className="space-y-2">
                              {day.exercises.map((exercise, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs mr-2 mt-0.5">
                                    {i + 1}
                                  </div>
                                  <span>{exercise}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6 bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">AI Recommendations:</h4>
                      <p className="text-muted-foreground">
                        Based on your goals and fitness level, this plan focuses
                        on a balanced approach to weight loss with strength
                        training and cardio. Adjust weights to challenge
                        yourself while maintaining proper form. Rest 60 seconds
                        between sets.
                      </p>
                    </div>
                  </motion.div>
                )}
              </TabsContent>

              <TabsContent value="nutrition" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="diet-type">Diet Preference</Label>
                      <Select value={dietType} onValueChange={setDietType}>
                        <SelectTrigger id="diet-type" className="w-full mt-1">
                          <SelectValue placeholder="Select diet type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="low-carb">Low Carb</SelectItem>
                          <SelectItem value="high-protein">
                            High Protein
                          </SelectItem>
                          <SelectItem value="keto">Keto</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="calorie-goal">Daily Calorie Goal</Label>
                        <span className="text-sm font-medium">
                          {calorieGoal[0]}
                        </span>
                      </div>
                      <Slider
                        id="calorie-goal"
                        min={1200}
                        max={3000}
                        step={50}
                        value={calorieGoal}
                        onValueChange={setCalorieGoal}
                      />
                    </div>

                    <div>
                      <Label htmlFor="allergies">
                        Food Allergies or Restrictions
                      </Label>
                      <Input
                        id="allergies"
                        placeholder="e.g., nuts, dairy, gluten"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="meal-preference">Meal Preference</Label>
                      <Select
                        value={mealPreference}
                        onValueChange={setMealPreference}
                      >
                        <SelectTrigger
                          id="meal-preference"
                          className="w-full mt-1"
                        >
                          <SelectValue placeholder="Select meal preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="both">
                            Both Veg & Non-Veg
                          </SelectItem>
                          <SelectItem value="vegetarian">
                            Vegetarian Only
                          </SelectItem>
                          <SelectItem value="non-vegetarian">
                            Non-Vegetarian Only
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-6">
                      <Button
                        onClick={handleGenerate}
                        className="w-full"
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
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
                            Generating your plan...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-5 w-5" />
                            Generate AI Meal Plan
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {showResults && activeTab === "nutrition" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 border-t pt-6"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Utensils className="h-5 w-5 mr-2 text-primary" />
                      Your Personalized Meal Plan
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          meal: "Breakfast",
                          calories: 450,
                          options: [
                            "Greek yogurt with berries and honey",
                            "Protein smoothie with spinach and banana",
                            "Avocado toast with poached eggs",
                          ],
                        },
                        {
                          meal: "Lunch",
                          calories: 650,
                          options: [
                            "Grilled chicken salad with olive oil dressing",
                            "Quinoa bowl with roasted vegetables",
                            "Turkey and avocado wrap with side salad",
                          ],
                        },
                        {
                          meal: "Dinner",
                          calories: 550,
                          options: [
                            "Baked salmon with asparagus and sweet potato",
                            "Stir-fried tofu with vegetables and brown rice",
                            "Lean beef steak with steamed broccoli",
                          ],
                        },
                      ].map((meal, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="bg-primary/10 py-3">
                            <CardTitle className="text-lg">
                              {meal.meal} (~{meal.calories} cal)
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <p className="text-sm text-muted-foreground mb-2">
                              Recommended options:
                            </p>
                            <ul className="space-y-2">
                              {meal.options.map((option, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs mr-2 mt-0.5">
                                    {i + 1}
                                  </div>
                                  <span>{option}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6 bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">AI Recommendations:</h4>
                      <p className="text-muted-foreground">
                        This meal plan is designed to meet your {calorieGoal[0]}{" "}
                        calorie goal with a balanced macronutrient profile.
                        Include 2 snacks between meals (100-150 calories each)
                        such as a handful of nuts, fruit, or a protein bar. Stay
                        hydrated by drinking at least 8 glasses of water daily.
                      </p>
                    </div>
                  </motion.div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIPersonalizationSection;
