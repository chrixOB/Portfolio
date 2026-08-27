'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const shouldUseDarkMode = savedTheme !== 'light';

    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.dataset.theme = shouldUseDarkMode ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;

    setIsDarkMode(nextIsDarkMode);
    document.documentElement.dataset.theme = nextIsDarkMode ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', nextIsDarkMode ? 'dark' : 'light');
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#27435a] ${
        isScrolled ? 'bg-[#102235]/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        {/* Logo / Home */}
        <Link href="#home" onClick={closeMenu} className="text-[#5eead4] font-bold text-xl hover:opacity-80 transition">
          Portfolio
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
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
        <div className="hidden md:flex gap-4">
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

        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={!isDarkMode}
        >
          {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden text-[#f3f7fb] p-2"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-4`}>
          <Link href="#home" onClick={closeMenu} className="text-[#9fb0c0] hover:text-[#f3f7fb] transition">
            Home
          </Link>
          <Link href="#about" onClick={closeMenu} className="text-[#9fb0c0] hover:text-[#f3f7fb] transition">
            About
          </Link>
          <Link href="#projects" onClick={closeMenu} className="text-[#9fb0c0] hover:text-[#f3f7fb] transition">
            Projects
          </Link>
          <div className="flex gap-4 pt-2 border-t border-[#27435a]">
            <a href="https://github.com/chrixob" target="_blank" rel="noopener noreferrer" className="text-[#9fb0c0] hover:text-[#5eead4] transition flex items-center gap-1" aria-label="GitHub">
              <FaGithub size={20} /> Github
            </a>
            <a href="https://www.linkedin.com/in/christian-anang-825b42388" target="_blank" rel="noopener noreferrer" className="text-[#9fb0c0] hover:text-[#5eead4] transition flex items-center gap-1" aria-label="LinkedIn">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
