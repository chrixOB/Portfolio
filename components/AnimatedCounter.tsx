'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  label: string;
  start: boolean;
  onComplete?: () => void;
}

export default function AnimatedCounter({ target, label, start, onComplete }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = target / 30; // Animate over 30 frames
    const interval = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        onComplete?.();
        window.clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [start, target]);

  return (
    <div
      className={`text-center transition-opacity duration-2000 ease-in-out ${
        start ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="font-display text-3xl sm:text-4xl font-bold text-[#5eead4]">{count}+</p>
      <p className="font-code text-[#9fb0c0] text-xs uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}
