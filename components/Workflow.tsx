'use client';

import { useEffect, useRef, useState } from 'react';

const workflowSteps = [
  { title: 'Design', description: 'Design the application' },
  { title: 'Build', description: 'Build it with the right technologies' },
  { title: 'Test', description: 'Ensure everything works as required' },
  { title: 'Deploy', description: 'Ship a maintainable project to end users' },
];

export default function Workflow() {
  const workflowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const workflow = workflowRef.current;

    if (!workflow) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(workflow);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={workflowRef} className="md:w-1/2">
      <h3 className="text-2xl font-bold text-[#f3f7fb]">My workflow</h3>
      <p className="mt-2 text-md text-[#9fb0c0]">
        I follow a structured workflow to ensure that every project I work on is well-designed, built with the right technologies, thoroughly tested, and deployed in a maintainable way.
      </p>
      <p className="mt-4 text-sm font-medium italic text-[#5eead4]">
        Don't mind the numbering, programmers start their count from zero
      </p>
      <div className="mt-5 space-y-3">
        {workflowSteps.map(({ title, description }, index) => (
          <div
            key={title}
            className={`workflow-step flex items-center gap-4 rounded-lg border border-[#27435a] bg-[#0b1a2a] p-4 ${isVisible ? 'workflow-step-visible' : ''}`}
            style={{ '--workflow-delay': `${index * 400}ms` } as React.CSSProperties}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5eead4] font-bold text-[#03212a]">
              {index}
            </span>
            <div>
              <h4 className="font-semibold text-[#f3f7fb]">{title}</h4>
              <p className="mt-1 text-sm text-[#9fb0c0]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
