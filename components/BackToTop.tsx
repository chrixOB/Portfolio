'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 320);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#5eead4] bg-[#102235] text-[#5eead4] shadow-lg shadow-black/20 transition hover:bg-[#5eead4] hover:text-[#03212a] sm:bottom-8 sm:right-8"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}