'use client'

import { useEffect, useState } from "react";

const CountdownTimer = ({ targetHour, targetMinute }: { targetHour: number, targetMinute: number }) => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(targetHour, targetMinute, 0, 0);
  
      const difference = targetTime.getTime() - now.getTime();
      if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return { hours, minutes, seconds };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="text-center text-3xl font-bold">
        {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, "0")}:
        {timeLeft.seconds.toString().padStart(2, "0")}
      </div>
    );
  };

export default function New () {
    return (
        <>
        <div className="h-[70vh] flex flex-col justify-center items-center gap-2"><div className="text-6xl text-yellow-500 flex flex-col justify-center items-center">
                <p className="text-6xl font-bold">Ragam Pass</p>
                <p className="text-8xl">Offer closes soon</p>
            </div>
            <CountdownTimer targetHour={17} targetMinute={0} /></div>
            
        </>
    );
}