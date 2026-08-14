import Link from 'next/link';
import AnimatedSlogan from '@/components/AnimatedSlogan';
import AnimatedCounter from '@/components/AnimatedCounter';

const highlights = ['Frontend Development', 'React & Next.js', 'UI/UX Focus'];

const projects = [
  {
    title: 'Business Landing Page',
    description: 'A polished landing page built for a modern brand.',
  },
  {
    title: 'Dashboard Interface',
    description: 'A clean analytics dashboard with a strong visual hierarchy.',
  },
  {
    title: 'Portfolio Redesign',
    description: 'A personal portfolio with a minimal and professional layout.',
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
        <h2 className="text-3xl font-bold mb-4 text-[#f3f7fb]">About</h2>
        <p className="text-[#9fb0c0] mb-6 leading-relaxed">
          I am a web developer passionate about combining clean code with thoughtful design.
          My focus is on building responsive interfaces that feel smooth and professional.
        </p>
        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="text-[#5eead4] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#5eead4] rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
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
