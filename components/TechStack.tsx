'use client';

import { useEffect, useRef, useState } from 'react';
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: FaHtml5, color: '#f97316' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#38bdf8' },
  { name: 'JavaScript', icon: FaJs, color: '#facc15' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Firebase', icon: SiFirebase, color: '#fbbf24' },
  { name: 'TypeScript', icon: SiTypescript, color: '#60a5fa' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#f3f7fb' },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="tech-stack-title" className="mb-8 rounded-2xl bg-[#102235] p-8">
      <h2 id="tech-stack-title" className="text-3xl font-bold text-[#f3f7fb]">Tech stack</h2>
      <p className="mt-2 text-[#9fb0c0]">Tools I use to turn ideas into reliable experiences.</p>
      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {technologies.map(({ name, icon: Icon, color }, index) => (
          <div
            key={name}
            className={`tech-stack-item ${isVisible ? 'tech-stack-item-visible' : ''}`}
            style={{ '--tech-color': color, '--tech-delay': `${index * 80}ms` } as React.CSSProperties}
          >
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}