'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  label: string;
  onComplete?: () => void;
}

export default function AnimatedCounter({ target, label, onComplete }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsFaded(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isFaded) return;

    // Start counting after fade-in
    let current = 0;
    const increment = target / 30; // Animate over 30 frames
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        onComplete?.();
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isFaded, target]);

  return (
    <div
      className={`text-center transition-opacity duration-2000 ease-in-out ${
        isFaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="font-display text-3xl sm:text-4xl font-bold text-[#5eead4]">{count}+</p>
      <p className="font-code text-[#9fb0c0] text-xs uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}
