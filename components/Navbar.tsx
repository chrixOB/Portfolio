'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#27435a] ${
        isScrolled ? 'bg-[#102235]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Home */}
        <Link href="#home" className="text-[#5eead4] font-bold text-xl hover:opacity-80 transition">
          Portfolio
        </Link>

        {/* Center Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link href="#home" className="text-[#9fb0c0] hover:text-[#f3f7fb] transition">
            Home
          </Link>
          <Link href="#about" className="text-[#9fb0c0] hover:text-[#f3f7fb] transition">
            About
          </Link>
          <Link href="#projects" className="text-[#9fb0c0] hover:text-[#f3f7fb] transition">
            Projects
          </Link>
        </div>

        {/* Right Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/chrixob"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9fb0c0] hover:text-[#5eead4] 
            transition flex flex-row items-center gap-1"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/christian-anang-825b42388"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9fb0c0] hover:text-[#5eead4] 
            transition flex flex-row items-center gap-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
            LinkedIn
          
          </a>
        </div>
      </div>
    </nav>
  );
}
