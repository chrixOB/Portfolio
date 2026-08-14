'use client';

import { useEffect, useState } from 'react';

const slogans = ['I code', 'I build', 'I solve'];

export default function AnimatedSlogan() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSlogan = slogans[currentIndex];
    let timeout;

    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentSlogan.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentSlogan.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next slogan
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <h1 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight text-[#f3f7fb] h-16">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
