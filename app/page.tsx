import Link from 'next/link';
import AnimatedSlogan from '@/components/AnimatedSlogan';
import AnimatedCounter from '@/components/AnimatedCounter';

const highlights = ['Frontend Development', 'React & Next.js', 'UI/UX Focus'];

const projects = [
  {
    title: 'EggXellence',
    description: 'An all-in-one platform for poultry farmers to manage their operations efficiently.',
  },
  {
    title: 'Adei Foundation website',
    description: 'A clean analytics dashboard with a strong visual hierarchy.',
  },
  {
    title: 'PyGuide',
    description: 'An interactive e-learning platform for learning python.',
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
            Let&apos;s talk
          </Link>
          <Link href="#projects" className="btn btn-secondary">
            View work
          </Link>
        </div>
        <div className="flex gap-16 mt-12">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio, andecenas porttitor.
            </p>
          </div>
          <div className="md:w-1/2" aria-hidden="true"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#102235] rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-[#f3f7fb]">Projects</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-[#27435a] rounded-lg p-4 bg-[#0b1a2a] hover:border-[#5eead4] transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-[#f3f7fb]">{project.title}</h3>
              <p className="text-[#9fb0c0] text-sm">{project.description}</p>
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
