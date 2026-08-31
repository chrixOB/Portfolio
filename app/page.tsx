import Link from 'next/link';
import { FaArrowRight, FaLock } from 'react-icons/fa';
import AnimatedSlogan from '@/components/AnimatedSlogan';
import AnimatedCounter from '@/components/AnimatedCounter';
import TechStack from '@/components/TechStack';
import Workflow from '@/components/Workflow';

const highlights = ['Frontend Development', 'React & Next.js', 'UI/UX Focus'];

const projects = [
  {
    title: 'EggXellence',
    description: 'An all-in-one platform for poultry farmers to manage their operations efficiently.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'Completed',
    hosted: true,
    url: 'https://github.com/chrixob',
  },
  {
    title: 'Adei Foundation website',
    description: "A charity organization's website that showcases their projects, donations and other activities.",
    stack: ['React', 'Material UI'],
    status: 'Completed',
    hosted: true,
    url: 'https://adeipurityfoundation1.netlify.app/',
  },
  {
    title: 'PyGuide',
    description: 'An interactive e-learning platform for learning python.',
    stack: ['React', 'firebase'],
    status: 'Ongoing',
    hosted: false,
    url: 'https://github.com/chrixob',
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero Section */}
      <section id="home" className="py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f3f7fb]">Christian obodai Anang</h2>
        <p className="uppercase tracking-widest text-[#5eead4] text-sm font-semibold mt-2">Web Developer</p>
        <AnimatedSlogan />
        <p className="text-[#9fb0c0] mt-4 text-lg max-w-2xl">
          I create fast, modern, and user-friendly websites that help businesses stand out.
        </p>
        <div className="flex gap-4 mt-8">
          <Link href="#contact" className="btn btn-primary">
            Download resume
          </Link>
          <Link href="#projects" className="btn btn-secondary">
            View work
          </Link>
        </div>
        <div className="flex gap-16 mt-12 font-semibold text-[#f3f7fb]">
          <AnimatedCounter target={4} label="Years experience" />
          <AnimatedCounter target={7} label="Projects completed" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#102235] rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#f3f7fb]">About</h2>
            <p className="text-[#9fb0c0] text-lg leading-relaxed">
              Hi there, I&apos;m just a cool dev who loves to explore.
              <br />
              I&apos;m a frontend-focused developer who enjoys turning ideas into responsive, accessible, and polished digital experiences. I care about clean interfaces, thoughtful user interactions, and writing maintainable code. I&apos;m also gradually learning backend development so I can grow into a well-rounded full-stack developer.
            </p>
          </div>
          <Workflow />
        </div>
      </section>

      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="bg-[#102235] rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-[#f3f7fb]">Projects</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-56 flex-col border border-[#27435a] rounded-lg p-5 bg-[#0b1a2a] transition hover:-translate-y-1 hover:border-[#5eead4]"
            >
              <div className="flex flex-wrap justify-end gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-[#34536a] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5eead4]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#f3f7fb]">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9fb0c0]">{project.description}</p>
              <div className="mt-auto flex items-end justify-between pt-8">
                <span
                  className={`rounded border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    project.status === 'Completed'
                      ? 'border-[#2f8f6b] bg-[#123a32] text-[#6ee7b7]'
                      : 'border-[#3972aa] bg-[#102d4a] text-[#7db8f2]'
                  }`}
                >
                  {project.status}
                </span>
                {project.hosted ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                    title={`View ${project.title}`}
                    className="project-link inline-flex items-center gap-2 rounded border border-[#34536a] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5eead4] transition"
                  >
                    <span>View site</span>
                    <FaArrowRight className="project-arrow" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    aria-label="PyGuide is not hosted yet"
                    title="Not hosted yet"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded border border-[#4a5966] bg-[#1b2732] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#81909d]"
                  >
                    <FaLock aria-hidden="true" />
                    <span>Not hosted yet</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#102235] rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-[#f3f7fb]">Contact</h2>
        <div className="space-y-3 text-[#9fb0c0]">
          <p>
            Email: <span className="text-[#f3f7fb]">chrisobodai40@gmail.com</span>
          </p>
          <p>
            GitHub: <span className="text-[#f3f7fb]">github.com/chrixob</span>
          </p>
          <p>
            LinkedIn: <span className="text-[#f3f7fb]">www.linkedin.com/in/christian-anang-825b42388</span>
          </p>
        </div>
      </section>
    </main>
  );
}
