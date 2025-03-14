import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Activity className="h-8 w-8 text-primary mr-2" />
            <span className="text-3xl font-bold">FitTrack</span>
          </div>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground">
            Start your fitness journey today
          </p>
        </motion.div>

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
