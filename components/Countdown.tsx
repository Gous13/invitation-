import React, { useState, useEffect, useCallback } from 'react';
import Section from './Section';
import { ThemeProps, CountdownTime } from '../types';

interface CountdownProps extends ThemeProps {
  targetDate: string;
}

const TimeUnit: React.FC<{ value: number; label: string; isDark: boolean }> = ({ value, label, isDark }) => (
  <div className="flex flex-col items-center mx-2 md:mx-6 min-w-[70px] md:min-w-[90px]">
    <div className={`relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-2xl shadow-lg border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-sky-100'}`}>
        <span className={`font-serif text-3xl md:text-5xl font-semibold tabular-nums ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>
        {value.toString().padStart(2, '0')}
        </span>
    </div>
    <span className={`text-[10px] md:text-xs uppercase tracking-[0.2em] mt-4 font-bold ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
      {label}
    </span>
  </div>
);

const Countdown: React.FC<CountdownProps> = ({ isDark, targetDate }) => {
  const calculateTimeLeft = useCallback((): CountdownTime => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    // Return zeros if date is passed
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Initial check
    const t = calculateTimeLeft();
    if (t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0) {
        setIsExpired(true);
    }

    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
      if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <Section className="text-center py-8">
      <p className={`font-sans text-sm uppercase tracking-[0.3em] mb-8 font-bold ${isDark ? 'text-pink-300' : 'text-pink-500'}`}>
        {isExpired ? "Happily Married" : "The Big Day Approaches"}
      </p>
      
      <div className="flex justify-center items-start flex-wrap gap-4">
        <TimeUnit value={timeLeft.days} label="Days" isDark={isDark} />
        <TimeUnit value={timeLeft.hours} label="Hours" isDark={isDark} />
        <TimeUnit value={timeLeft.minutes} label="Mins" isDark={isDark} />
        <TimeUnit value={timeLeft.seconds} label="Secs" isDark={isDark} />
      </div>
    </Section>
  );
};

export default Countdown;