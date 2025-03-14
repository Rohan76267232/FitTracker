import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, AlertCircle } from "lucide-react";

interface CountdownTimerProps {
  endDate?: Date;
  title?: string;
  description?: string;
  onComplete?: () => void;
}

const CountdownTimer = ({
  endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Default: 3 days from now
  title = "Limited Time Offer",
  description = "Special discount ends soon! Don't miss out on our best pricing.",
  onComplete = () => console.log("Countdown completed"),
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsExpired(true);
        onComplete();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, onComplete]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <Badge variant="destructive" className="animate-pulse">
            <Clock className="w-4 h-4 mr-1" />
            Ending Soon
          </Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-300">{description}</p>

        {isExpired ? (
          <div className="flex items-center justify-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mr-2" />
            <p className="text-red-600 dark:text-red-400 font-medium">
              This offer has expired
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 py-3">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-700 rounded-md w-full py-3 text-center text-primary">
                {formatNumber(timeLeft.days)}
              </div>
              <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                Days
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-700 rounded-md w-full py-3 text-center text-primary">
                {formatNumber(timeLeft.hours)}
              </div>
              <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-700 rounded-md w-full py-3 text-center text-primary">
                {formatNumber(timeLeft.minutes)}
              </div>
              <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                Minutes
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold bg-gray-100 dark:bg-gray-700 rounded-md w-full py-3 text-center text-primary">
                {formatNumber(timeLeft.seconds)}
              </div>
              <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                Seconds
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CountdownTimer;
